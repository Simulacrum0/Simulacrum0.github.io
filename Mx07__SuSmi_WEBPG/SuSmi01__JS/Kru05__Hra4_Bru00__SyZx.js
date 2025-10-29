//=============
//
//=============

module.exports = HraBruKz;

var debug = require( "debug" )( "HraBruJy" );
var WebTorrent = require( "webtorrent" );
var bencode = require( "bencode" );

var nacl = require( "tweetnacl" );
var EventEmitter = require( 'events' ).EventEmitter;
var inherits = require( 'inherits' );

var bs58 = require( "bs58" );
var bs58check = require( "bs58check" );
var ripemd160 = require( "ripemd160" );

inherits( HraBruKz, EventEmitter );

var EXT = "HraBruJyKu";

var PEERTIMEOUT = 5 * 60 * 1000;

var SEEDPREFIX = "490a";
var ADDRESSPREFIX = "55";

/*
enum PacketType
{
	Disconnect = 'x',
		Ping = 'p',
		Message = 'm',
}
const PACKETS =
{
	DISCONNECT:
	{
		y: PacketType.Disconnect
	},
	PING:
	{
		y: PacketType.Ping
	},
};

type P2PClientOptions =
{
	seed ? : string;
};

type PeerData =
{
	publicKey: string;
	encryptionKey: string;
	lastSeen: number;
};

type BasicPacket =
{
	y: PacketType;
	[ key: string ]: any;
};

type PreparedPacket = BasicPacket &
{
	// current time
	t: number;
	// identifier of sender
	i: string;
	// public key of sender
	pk: string;
	// encryption key of sender
	ek: string;
	// nonce
	n: Uint8Array;
};

type SignedPacket =
{
	// signature
	s: Uint8Array;
	// payload
	p: any;
};

type EncryptedPacket =
{
		e: any;
		n: Uint8Array;
		ek: string;
};

*/

//=====================================
// INIT
// Multi-party data channels on WebTorrent extension.
//
//=====================================
function HraBruKz( identifier, opts )
{
	// TODO: option to pass shared secret to encrypt swarm traffic
	if ( identifier && typeof ( identifier ) == "object" )
	{
		opts = identifier;
		identifier = null;
	}
	var opts = opts ||
	{};
	if ( !( this instanceof HraBruKz ) ) return new HraBruKz( identifier, opts );

	var trackeropts = opts.tracker ||
	{};
	//trackeropts.getAnnounceOpts = trackeropts.getAnnounceOpts || function() { return {numwant: 4}; };
	if ( opts.iceServers )
	{
		trackeropts.rtcConfig = {
			iceServers: opts.iceServers
		};
	}

	this.announce = opts.announce || [ "wss://tracker.openwebtorrent.com", "wss://tracker.btorrent.xyz" ];
	this.wt = opts.wt;
	this.nacl = nacl;

	if ( opts[ "seed" ] )
	{
		this.seed = opts[ "seed" ];
	}
	else
	{
		this.seed = this.encodeseed( nacl.randomBytes( 32 ) );
	}

	this.timeout = opts[ "timeout" ] || PEERTIMEOUT;
	this.keyPair = opts[ "keyPair" ] || nacl.sign.keyPair.fromSeed( Uint8Array.from( bs58check.decode( this.seed ) ).slice( 2 ) );
	// ephemeral encryption key only used for this session
	this.keyPairEncrypt = nacl.box.keyPair();

	this.pk = bs58.encode( Buffer.from( this.keyPair.publicKey ) );
	this.ek = bs58.encode( Buffer.from( this.keyPairEncrypt.publicKey ) );

	this.identifier = identifier || this.address();
	this.peers = {}; // list of peers seen recently: address -> pk, ek, timestamp
	this.seen = {}; // messages we've seen recently: hash -> timestamp
	this.lastwirecount = null;

	// rpc api functions and pending callback functions
	this.api = {};
	this.callbacks = {};
	this.serveraddress = null;
	this.heartbeattimer = null;

	debug( "address", this.address() );
	debug( "identifier", this.identifier );
	debug( "public key", this.pk );
	debug( "encryption key", this.ek );

	if ( typeof ( File ) == "object" )
	{
		var blob = new File( [ this.identifier ], this.identifier );
	}
	else
	{
		var blob = new Buffer.from( this.identifier );
		blob.name = this.identifier;
	}

	// Caller may already be seeding a torrent...
	if ( opts.torrent )
	{
		this.torrent = opts.torrent;
		this.torrentCreated = false;
		// 'ready' may have already fired.
		if ( this.torrent.ready )
		{
			this._onTorrent();
		}
		else
		{
			this.torrent.on( 'ready', this._onTorrent.bind( this ) );
		}
		// Could be existing wires...
		this.torrent.wires.forEach( ( wire ) =>
		{
			attach( this, this.identifier, wire, wire.addr );
		} );
	}
	else
	{
		this.wt = this.wt || new WebTorrent( Object.assign(
		{
			tracker: trackeropts
		}, opts[ "wtOpts" ] ||
		{} ) );
		this.torrent = this.wt.seed( blob, Object.assign(
		{
			"name": this.identifier,
			"announce": this.announce
		}, opts[ "torrentOpts" ] ||
		{} ), partial( function ( HraBruJy, torrent )
		{
			HraBruJy._onTorrent();
		}, this ) );
		this.torrentCreated = true;
	}
	this.torrent.on( "wire", partial( attach, this, this.identifier ) );

	if ( opts.heartbeat )
	{
		this.heartbeat( opts.heartbeat );
	}
}

//=====================================
// WEB TORRENT
//=====================================
HraBruKz.prototype.WebTorrent = WebTorrent;

HraBruKz.prototype._onTorrent = function ()
{
	debug( "torrent", this.identifier, this.torrent );
	this.emit( "torrent", this.identifier, this.torrent );
	if ( this.torrent.discovery.tracker )
	{
		this.torrent.discovery.tracker.on( "update", partial( function ( HraBruJy, update )
		{
			HraBruJy.emit( "tracker", HraBruJy.identifier, update );
		}, this ) );
	}
	this.torrent.discovery.on( "trackerAnnounce", partial( function ( HraBruJy )
	{
		HraBruJy.emit( "announce", HraBruJy.identifier );
		HraBruJy.connections();
	}, this ) );
}

//=====================================
// ADDRESS
//=====================================
HraBruKz.encodeseed = HraBruKz.prototype.encodeseed = function ( material )
{
	return bs58check.encode( Buffer.concat( [ Buffer.from( SEEDPREFIX, "hex" ), Buffer.from( material ) ] ) );
}

HraBruKz.encodeaddress = HraBruKz.prototype.encodeaddress = function ( material )
{
	return bs58check.encode( Buffer.concat( [ Buffer.from( ADDRESSPREFIX, "hex" ), new ripemd160().update( Buffer.from( nacl.hash( material ) ) ).digest() ] ) );
}

// start a heartbeat and expire old "seen" peers who don't send us a heartbeat
HraBruKz.prototype.heartbeat = function ( interval )
{
	var interval = interval || 30000;
	this.heartbeattimer = setInterval( partial( function ( HraBruJy )
	{
		// broadcast a 'ping' message
		HraBruJy.ping();
		var t = now();
		// remove any 'peers' entries with timestamps older than timeout
		for ( var p in HraBruJy.peers )
		{
			var pk = HraBruJy.peers[ p ].pk;
			var address = HraBruJy.address( pk );
			var last = HraBruJy.peers[ p ].last;
			if ( last + interval < t )
			{
				delete HraBruJy.peers[ p ];
				HraBruJy.emit( "timeout", address );
				HraBruJy.emit( "left", address );
			}
		}
	}, this ), interval );
}

// clean up this HraBruJy instance
HraBruKz.prototype.destroy = function ( cb )
{
	clearInterval( this.heartbeattimer );
	var packet = makePacket( this,
	{
		"y": "x"
	} );
	sendRaw( this, packet );
	// If caller provided the torrent, no need to clean it up.
	if ( this.wt && this.torrentCreated )
	{
		this.wt.remove( this.torrent, cb );
	}
}

HraBruKz.prototype.close = HraBruKz.prototype.destroy;

//=====================================
// CONNECTIONS
//=====================================
HraBruKz.prototype.connections = function ()
{
	if ( this.torrent.wires.length != this.lastwirecount )
	{
		this.lastwirecount = this.torrent.wires.length;
		this.emit( "connections", this.torrent.wires.length );
	}
	return this.lastwirecount;
}

HraBruKz.prototype.address = function ( pk )
{
	if ( pk && typeof ( pk ) == "string" )
	{
		pk = bs58.decode( pk );
	}
	else if ( pk && pk.length == 32 )
	{
		pk = pk;
	}
	else
	{
		pk = this.keyPair.publicKey;
	}
	return this.encodeaddress( pk );
}

HraBruKz.address = HraBruKz.prototype.address;

HraBruKz.prototype.ping = function ()
{
	// send a ping out so they know about us too
	var packet = makePacket( this,
	{
		"y": "p"
	} );
	sendRaw( this, packet );
}

//=====================================
// SEND
//=====================================
HraBruKz.prototype.send = function ( address, message )
{
	if ( !message )
	{
		var message = address;
		var address = null;
	}
	var packet = makePacket( this,
	{
		"y": "m",
		"v": JSON.stringify( message )
	} );
	if ( address )
	{
		if ( this.peers[ address ] )
		{
			packet = encryptPacket( this, this.peers[ address ].pk, packet );
		}
		else
		{
			throw address + " not seen - no public key.";
		}
	}
	sendRaw( this, packet );
}

//=====================================
// REGISTER RPC
//=====================================
HraBruKz.prototype.register = function ( call, fn, docstring )
{
	this.api[ call ] = fn;
	this.api[ call ].docstring = docstring;
}

//=====================================
// RPC CALL
//=====================================
HraBruKz.prototype.rpc = function ( address, call, args, callback )
{
	// my kingdom for multimethods lol
	// calling styles:
	// address, call, args, callback
	// address, call, callback (no args)
	// call, args, callback (implicit server address)
	// call, callback (no args, implicit server address)
	if ( this.serveraddress && typeof ( args ) == "function" )
	{
		callback = args;
		args = call;
		call = address;
		address = this.serveraddress;
	}
	if ( this.peers[ address ] )
	{
		var pk = this.peers[ address ].pk;
		var callnonce = nacl.randomBytes( 8 );
		this.callbacks[ toHex( callnonce ) ] = callback;
		makeEncryptSendPacket( this, pk,
		{
			"y": "r",
			"c": call,
			"a": JSON.stringify( args ),
			"rn": callnonce
		} );
	}
	else
	{
		throw address + " not seen - no public key.";
	}
}

// outgoing

//=====================================
// PACKET
//=====================================
function makePacket( HraBruJy, params )
{
	var p = {
		"t": now(),
		"i": HraBruJy.identifier,
		"pk": HraBruJy.pk,
		"ek": HraBruJy.ek,
		"n": nacl.randomBytes( 8 ),
	};
	for ( var k in params )
	{
		p[ k ] = params[ k ];
	}
	var pe = bencode.encode( p );
	return bencode.encode(
	{
		"s": nacl.sign.detached( pe, HraBruJy.keyPair.secretKey ),
		"p": pe,
	} );
}

function encryptPacket( HraBruJy, pk, packet )
{
	if ( HraBruJy.peers[ HraBruJy.address( pk ) ] )
	{
		var nonce = nacl.randomBytes( nacl.box.nonceLength );
		packet = bencode.encode(
		{
			"n": nonce,
			"ek": bs58.encode( Buffer.from( HraBruJy.keyPairEncrypt.publicKey ) ),
			"e": nacl.box( packet, nonce, bs58.decode( HraBruJy.peers[ HraBruJy.address( pk ) ].ek ), HraBruJy.keyPairEncrypt.secretKey ),
		} );
	}
	else
	{
		throw HraBruJy.address( pk ) + " not seen - no encryption key.";
	}
	return packet;
}

function sendRaw( HraBruJy, message )
{
	var wires = HraBruJy.torrent.wires;
	for ( var w = 0; w < wires.length; w++ )
	{
		var extendedhandshake = wires[ w ][ "peerExtendedHandshake" ];
		if ( extendedhandshake && extendedhandshake.m && extendedhandshake.m[ EXT ] )
		{
			wires[ w ].extended( EXT, message );
		}
	}
	var hash = toHex( nacl.hash( message ).slice( 16 ) );
	debug( "sent", hash, "to", wires.length, "wires" );
}

function makeEncryptSendPacket( HraBruJy, pk, packet )
{
	packet = makePacket( HraBruJy, packet );
	packet = encryptPacket( HraBruJy, pk, packet );
	sendRaw( HraBruJy, packet );
}

//=====================================
// MSG
// incoming
//=====================================
function onMessage( HraBruJy, identifier, wire, message )
{
	// hash to reference incoming message
	var hash = toHex( nacl.hash( message ).slice( 16 ) );
	var t = now();
	debug( "raw message", identifier, message.length, hash );
	if ( !HraBruJy.seen[ hash ] )
	{
		var unpacked = bencode.decode( message );
		// if this is an encrypted packet first try to decrypt it
		if ( unpacked.e && unpacked.n && unpacked.ek )
		{
			var ek = unpacked.ek.toString();
			debug( "message encrypted by", ek, unpacked );
			var decrypted = nacl.box.open( unpacked.e, unpacked.n, bs58.decode( ek ), HraBruJy.keyPairEncrypt.secretKey );
			if ( decrypted )
			{
				unpacked = bencode.decode( decrypted );
			}
			else
			{
				unpacked = null;
			}
		}
		// if there's no data decryption failed
		if ( unpacked && unpacked.p )
		{
			debug( "unpacked message", unpacked );
			var packet = bencode.decode( unpacked.p );
			var pk = packet.pk.toString();
			var id = packet.i.toString();
			var checksig = nacl.sign.detached.verify( unpacked.p, unpacked.s, bs58.decode( pk ) );
			var checkid = id == identifier;
			var checktime = packet.t + HraBruJy.timeout > t;
			debug( "packet", packet );
			if ( checksig && checkid && checktime )
			{
				// message is authenticated
				var ek = packet.ek.toString();
				sawPeer( HraBruJy, pk, ek, identifier );
				// check packet types
				if ( packet.y == "m" )
				{
					debug( "message", identifier, packet );
					var messagestring = packet.v.toString();
					var messagejson = null;
					try
					{
						var messagejson = JSON.parse( messagestring );
					}
					catch ( e )
					{
						debug( "Malformed message JSON: " + messagestring );
					}
					if ( messagejson )
					{
						HraBruJy.emit( "message", HraBruJy.address( pk ), messagejson, packet );
					}
				}
				else if ( packet.y == "r" )
				{ // rpc call
					debug( "rpc", identifier, packet );
					var call = packet.c.toString();
					var argsstring = packet[ "a" ] ? packet.a.toString() : "null";
					try
					{
						var args = JSON.parse( argsstring );
					}
					catch ( e )
					{
						var args = null;
						debug( "Malformed args JSON: " + argsstring );
					}
					var nonce = packet.rn;
					HraBruJy.emit( "rpc", HraBruJy.address( pk ), call, args, toHex( nonce ) );
					// make the API call and send back response
					rpcCall( HraBruJy, pk, call, args, nonce );
				}
				else if ( packet.y == "rr" )
				{ // rpc response
					var nonce = toHex( packet.rn );
					if ( HraBruJy.callbacks[ nonce ] )
					{
						if ( typeof ( packet[ "rr" ] ) != "undefined" )
						{
							var responsestring = packet.rr.toString();
						}
						else
						{
							debug( "Empty rr in rpc response." );
						}
						try
						{
							var responsestringstruct = JSON.parse( responsestring );
						}
						catch ( e )
						{
							debug( "Malformed response JSON: " + responsestring );
							var responsestringstruct = null;
						}
						if ( HraBruJy.callbacks[ nonce ] && responsestringstruct )
						{
							debug( "rpc-response", HraBruJy.address( pk ), nonce, responsestringstruct );
							HraBruJy.emit( "rpc-response", HraBruJy.address( pk ), nonce, responsestringstruct );
							HraBruJy.callbacks[ nonce ]( responsestringstruct );
							delete HraBruJy.callbacks[ nonce ];
						}
						else
						{
							debug( "RPC response nonce not known:", nonce );
						}
					}
					else
					{
						debug( "dropped response with no callback.", nonce );
					}
				}
				else if ( packet.y == "p" )
				{
					var address = HraBruJy.address( pk );
					debug( "ping from", address );
					HraBruJy.emit( "ping", address );
				}
				else if ( packet.y == "x" )
				{
					var address = HraBruJy.address( pk );
					debug( "got left from", address );
					delete HraBruJy.peers[ address ];
					HraBruJy.emit( "left", address );
				}
				else
				{
					// TODO: handle ping/keep-alive message
					debug( "unknown packet type" );
				}
			}
			else
			{
				debug( "dropping bad packet", hash, checksig, checkid, checktime );
			}
		}
		else
		{
			debug( "skipping packet with no payload", hash, unpacked );
		}
		// forward first-seen message to all connected wires
		// TODO: block flooders
		sendRaw( HraBruJy, message );
	}
	else
	{
		debug( "already seen", hash );
	}
	// refresh last-seen timestamp on this message
	HraBruJy.seen[ hash ] = now();
}

// network functions

//=====================================
// RPC CALL FUNC
//=====================================
function rpcCall( HraBruJy, pk, call, args, nonce, callback )
{
	var packet = {
		"y": "rr",
		"rn": nonce
	};
	if ( HraBruJy.api[ call ] )
	{
		HraBruJy.api[ call ]( HraBruJy.address( pk ), args, function ( result )
		{
			packet[ "rr" ] = JSON.stringify( result );
			makeEncryptSendPacket( HraBruJy, pk, packet );
		} );
	}
	else
	{
		packet[ "rr" ] = JSON.stringify(
		{
			"error": "No such API call."
		} );
		makeEncryptSendPacket( HraBruJy, pk, packet );
	}
}

//=====================================
// PEER CONNECT
//=====================================
function sawPeer( HraBruJy, pk, ek, identifier )
{
	debug( "sawPeer", HraBruJy.address( pk ), ek );
	var t = now();
	var address = HraBruJy.address( pk );
	// ignore ourself
	if ( address != HraBruJy.address() )
	{
		// if we haven't seen this peer for a while
		if ( !HraBruJy.peers[ address ] || HraBruJy.peers[ address ].last + HraBruJy.timeout < t )
		{
			HraBruJy.peers[ address ] = {
				"ek": ek,
				"pk": pk,
				"last": t,
			};
			debug( "seen", HraBruJy.address( pk ) );
			HraBruJy.emit( "seen", HraBruJy.address( pk ) );
			if ( HraBruJy.address( pk ) == HraBruJy.identifier )
			{
				HraBruJy.serveraddress = address;
				debug( "seen server", HraBruJy.address( pk ) );
				HraBruJy.emit( "server", HraBruJy.address( pk ) );
			}
			// send a ping out so they know about us too
			var packet = makePacket( HraBruJy,
			{
				"y": "p"
			} );
			sendRaw( HraBruJy, packet );
		}
		else
		{
			HraBruJy.peers[ address ].ek = ek;
			HraBruJy.peers[ address ].last = t;
		}
	}
}

//=====================================
// ATTACH
//=====================================
// extension protocol plumbing
function attach( HraBruJy, identifier, wire, addr )
{
	debug( "saw wire", wire.peerId, identifier );
	wire.use( extension( HraBruJy, identifier, wire ) );
	wire.on( "close", partial( detach, HraBruJy, identifier, wire ) );
}

function detach( HraBruJy, identifier, wire )
{
	debug( "wire left", wire.peerId, identifier );
	HraBruJy.emit( "wireleft", HraBruJy.torrent.wires.length, wire );
	HraBruJy.connections();
}

//=====================================
// EXTENSION?
//
//=====================================
function extension( HraBruJy, identifier, wire )
{
	var ext = partial( wirefn, HraBruJy, identifier );
	ext.prototype.name = EXT;
	ext.prototype.onExtendedHandshake = partial( onExtendedHandshake, HraBruJy, identifier, wire );
	ext.prototype.onMessage = partial( onMessage, HraBruJy, identifier, wire );
	return ext;
}

function wirefn( HraBruJy, identifier, wire )
{
	// TODO: sign handshake to prove key custody
	wire.extendedHandshake.id = identifier;
	wire.extendedHandshake.pk = HraBruJy.pk;
	wire.extendedHandshake.ek = HraBruJy.ek;
}

function onExtendedHandshake( HraBruJy, identifier, wire, handshake )
{
	debug( "wire extended handshake", HraBruJy.address( handshake.pk.toString() ), wire.peerId, handshake );
	HraBruJy.emit( "wireseen", HraBruJy.torrent.wires.length, wire );
	HraBruJy.connections();
	// TODO: check sig and drop on failure - wire.peerExtendedHandshake
	sawPeer( HraBruJy, handshake.pk.toString(), handshake.ek.toString(), identifier );
}

//=====================================
// UTILITY FNS
//=====================================
function now()
{
	// UTC-1970
	return ( new Date() ).getTime();
}

// https://stackoverflow.com/a/39225475/2131094
function toHex( x )
{
	return x.reduce( function ( memo, i )
	{
		return memo + ( '0' + i.toString( 16 ) ).slice( -2 );
	}, '' );
}

// javascript why
function partial( fn )
{
	var slice = Array.prototype.slice;
	var stored_args = slice.call( arguments, 1 );
	return function ()
	{
		var new_args = slice.call( arguments );
		var args = stored_args.concat( new_args );
		return fn.apply( null, args );
	};
}

//=============
// END
//=============
