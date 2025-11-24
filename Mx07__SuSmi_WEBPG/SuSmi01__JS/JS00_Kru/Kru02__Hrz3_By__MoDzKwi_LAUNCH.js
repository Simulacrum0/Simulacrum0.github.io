//==============================================
// LOGS
// Skipped usual 8 layers for minimal JS
//==============================================
function SmaSme(){ var args = Array.prototype.slice.call(arguments); console.log.apply(console, args); }
function SmaDre(){ var args = Array.prototype.slice.call(arguments); console.warn.apply(console, args); }
function SmaTrx(){ var args = Array.prototype.slice.call(arguments); console.error.apply(console, args); }

//==============================================
// STARTUP
//==============================================

//@@@
// CORS must RUN FIRST
SmaDre( "Web_Security[ CORS ]: " + (window.crossOriginIsolated ? "✅" : "❌"));
if( !window.crossOriginIsolated )
{
	// MSG should display @ DOM
	MoDzTrx( 'WAITING: Engaging HTTPS CORS in order to run under Security Policies.' );
}
// KoYz_Hry();


//==============================================
// DOM
//==============================================
let WASM64_yk = false;
try
{
	WASM64_yk = WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,5,3,1,4,1]));
}
catch(e)
{
	// WebAssembly is not supported at all
	console.error('Exception: ' + e);
}

//		"use strict";
function check(wasm, exec)
{
    if (!exists)
        return false;
    const buffer = wasm.buffer;
    let ok = cache.get(buffer);
    if (ok == null) {
        if ((ok = WA.validate(buffer)) && exec) {
            try {
                new WA.Instance(new WA.Module(buffer)).exports['0']();
            }
            catch (_a) {
                ok = false;
            }
        }
        cache.set(buffer, ok);
    }
    return ok;
}
const WA = this.WebAssembly || globalThis.WebAssembly;
const exists = typeof WA === 'object';

//const has = (entity) => typeof entity !== 'undefined';
const u8 = (...bytes) => Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0, ...bytes);
// // const u16  = (...bytes: number[]) => Uint16Array.of(24832, 28019, 1, 0, ...bytes)
// const u32 = (...bytes) => Uint32Array.of(0x6D736100, 1, ...bytes);
// const u32a = (...bytes) => u32(1610679297, 33751040, ...bytes, 40239360, 259);
// const u8a = (...bytes) => u8(1, 4, 1, 96, 0, 0, 3, 2, 1, 0, ...bytes, 11, 0, 10, 4, 110, 97, 109, 101, 2, 3, 1, 0, 0);
const u16a = (...bytes) => Uint16Array.of(24832, 28019, 1, 0, 1025, 24577, 0, 515, 1, ...bytes);
//const u16b = (...bytes) => u16a(...bytes, 2842, 4096, 28164, 28001, 357, 260, 256, 560, 259, 0);
const cache = new WeakMap();
//const bigIntWasm = u32(1610679553, 58589440, 117440770, 805372165, 101318656, 1107297281, 268438272, 1835101700, 17039717, 36700416, 259);
const memory64Wasm = u8(5, 3, 1, 4, 1, 0, 8, 4, 110, 97, 109, 101, 2, 1, 0);
// const bulkWasm = u16a(773, 1, 2561, 269, 11, 65, 65, 65, 3068, 2816, 2560, 28164, 28001, 613, 259, 0);
// const exceptionsWasm = u32(1610679297, 33751040, 134873089, 100664833, 185276736);
// const mutableGlobalWasm = u8(2, 8, 1, 1, 97, 1, 98, 3, 127, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 5, 1, 1, 97, 3, 1, 0, 8, 4, 110, 97, 109, 101, 2, 1, 0);
// const multiValueWasm = Uint16Array.of(24832, 28019, 1, 0, 1537, 24577, 512, 32639, 515, 1, 2058, 1537, 16640, 16640, 2816, 2560, 28164, 28001, 613, 259, 0);
// const saturateConversionsWasm = u16b(3082, 2561, 17152, 0, 0, 252);
// const signExtensionsWasm = u16b(2058, 1537, 16640, 49152);
// const tailCallWasm = u32a(101318657, 301990913, 268438272, 1835101700, 17039717);
// const threadsWasm = u8a(5, 4, 1, 3, 1, 1, 10, 7, 1, 5, 0, 254, 3, 0);
// const simdWasm = u32a(84344833, 6357249, 17369600, 4259847, 186257917, 1845758464);
// const referencesWasm = u8a(10, 7, 1, 5, 0, 208, 112, 26);

const MEM64_yk = check( memory64Wasm, true );
SmaDre( "Web_IO[ MEM ]: " + ( WASM64_yk ? "✅" : "❌"));

//@@@
// REQUIRED FEATURES
if( MEM64_yk )
{
	SmaDre( "MEM64: Support!" );

}
else
{
	SmaSme( "MEM64: NO Supported!" );

}


//==============================================
// ENGINE
//==============================================


//==============================================
// DOM
//==============================================

//@@@
// DOM STARTUP
document.addEventListener('readystatechange', function()
{
	// if (document.readyState === 'interactive')
	// {
	// 	SmaSme( "- WebPage_DOM Interactive" );
	// }
	if (document.readyState === 'complete')
	{
		SmaSme( "- WebPage_DOM Fully_Loaded" );
	}
});

//==============================================
// MODULE INTERFACE
//==============================================
var Module =
{
	// ERR STATUS
	Trx_vsg: null,
	// REQ: Input
	canvas: document.getElementById('MxPo_De'),
	// REQ: load
	totalDependencies: 0,

	//@@@
	// EMCC NOTIFY
	// Define how notification messages from Emscripten are displayed via Module.print attribute.
	'print': function ( Sma_vsg ) { SmaSme( 'Sma> ' + Sma_vsg ); },
	'printErr': function ( Sma_vsg ) { SmaSme( 'Trx> ' + Sma_vsg ); },
	'onAbort': function ( Sma_vsg ) { MoDzTrx( 'BriDzYi> ' + Sma_vsg ); },

	//@@@
	// RUN when WASM_LOADED
	onRuntimeInitialized: function()
	{
        // SmaSme( "WASM module is ready" );
		KoDz__Ya();
		MoDz__DzStxGru();

    },

	//@@@
	// HEADER BAR
	Sma__BriDzYz__Bz( Sma_vsg )
	{
		let BriDzYz__Bz_l = document.getElementById('BriDzYz__Bz');
		BriDzYz__Bz_l.innerHTML = "|> "+ ( Sma_vsg );
	},

	//@@@
	// FOOTER BAR
	Sma__BriDzYz__Bo( Sma_vsg )
	{
		let BriDzYz__Bo_l = document.getElementById('BriDzYz__Bo');
		BriDzYz__Bo_l.innerHTML = "|> " + ( Sma_vsg );
	},

	//@@@
	// LOAD
	monitorRunDependencies(left)
	{
		this.totalDependencies = Math.max(this.totalDependencies, left);
		Module.Sma__BriDzYz__Bz( left ? ( KoKeDru.BriDz_KiMiFe_vsg + ' (' + (this.totalDependencies - left) + '/' + this.totalDependencies + ')') : KoKeDru.BriDz_KiMiFi_vsg );
	},

};


//==============================================
// ERR
//==============================================

//----------------------------
function MoDzTrx( Trx_vsg )
//----------------------------
{
	//@@@
	// CFG
	// If already 'Err' exit
	if( Module.Trx_vsg ) return;
	Module.Trx_vsg = Trx_vsg;

	KoDz__YzChy( KoYz_qk.Trx );

	//@@@
	// ERR MSGBARS

	//&&&
	// HEADER (Fixed)
	var Bz_vsg = KoKeDru.TrxBz_vsg + " [" + ( window.Ko.Hx_SyDx_vsg ? window.Ko.Hx_SyDx_vsg : "???" ) + " " + BriDzSa__Da_vsg + "] " + KoKeDru.TrxKrx_vsg;
	Module.Sma__BriDzYz__Bz( Bz_vsg );

	//&&&
	// FOOTER (Dynamic)
	var Bo_vsg = KoKeDru.TrxBz_vsg + Trx_vsg;
	Module.Sma__BriDzYz__Bo( Bo_vsg );


	//&&&
	// DBG
	SmaSme( "*STK_TRACE:%s", jsStackTrace() );

	// POST for DBG
	// console.error( Bo_vsg );

	// Skip MSGBOX
	// alert( Bo_vsg );

	// DISPLAY ERR
	KoYz_Hry();

	// STOP INTERVALS
	// if( window.Ko.Trx_GyHa  ){ clearInterval( window.Ko.Trx_GyHa ); }

	// SERV closes All Else
	KoDz__Yi();
}


//----------------------------
// JS_ERR
window.onerror = (e) =>
//----------------------------
{
	const Trx_vsg = ( JSON.stringify( e ) );
	/*
	// ERR_TYPES
	if (e instanceof TypeError)
	{
		// statements to handle TypeError exceptions
	}
	else if (e instanceof RangeError)
	{
		// statements to handle RangeError exceptions
	}
	else if (e instanceof EvalError)
	{
		// statements to handle EvalError exceptions
	}
	else
	{
		// statements to handle any unspecified exceptions
		//logMyErrors(e); // pass exception object to error handler
	}
	*/

	MoDzTrx( Trx_vsg );
}


//==============================================
// TEST_VALID
//==============================================
function MoDzTrx__NxHo_y( Va, Kri_y )
{
	// SmaSme( "NxHo: ---> " + Va );
	if( !Kri_y )
	{
		MoDzTrx( "ERR: " + Va + " @ " + Kri_y );
		return true;
	}
	return false;
}


//==============================================
// ONE APP only
// PREVENT MULTI_TAB
//==============================================
async function MoDz__DzStxGru()
{
	if( !window.BroadcastChannel )
	{
		SmaSme('!!! Unknown if Duplicate Tab.');
		return;
	}

	// STORE TIME by SESSION
	const Sa_KoGi_k = (new Date()).getTime();
	sessionStorage.setItem('KoGi', Sa_KoGi_k);

	// TAB-CONNECTIONS = Broadcast Type
//	var BCHN_l = new BroadcastChannel('tab-connections');
	var BCHN_l = new BroadcastChannel('MoDz__DzStxGru');

	//@@@
	//SEND MSG
	// Compare Time
	BCHN_l.postMessage('MxVy:KoGi');

	//@@@
	// RECV MSG
	BCHN_l.onmessage = function( e )
	{
		// Split by Colon
		var PKT_k = e.data.split(':');

		if( PKT_k[0] == 'KrzVy' )
		{
			// If Newer; Error on Self
			if( Sa_KoGi_k > parseInt( PKT_k[1] ))
			{
				SmaSme('!!! FAIL Duplicate Tab.');
				BCHN_l = null;
				MoDzTrx( KoKeDru.TrxJy__MoDzStxGru_vsg );
			}
			else
			{
				SmaSme('!!! First Tab.');
			}
		}
		else if( PKT_k[0] == 'MxVy' )
		{
			// SmaSme('Send Time to Test if Duplicate Tab.');
			BCHN_l.postMessage( 'KrzVy:' + Sa_KoGi_k );
		}
	}
}


//==============================================
// END
//==============================================
