//==============================================
// STARTUP
//==============================================
// CORS must RUN FIRST
console.log( "Web_Security[ CORS ]: " + (window.crossOriginIsolated ? "✅" : "❌"));
if( !window.crossOriginIsolated )
{
	// MSG should display @ DOM
	MoDzTrx( 'WAITING: Engaging HTTPS CORS in order to run under Security Policies.' );
}
// KoYz_Hry();


//@@@
// STARTUP
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
// MODULE ENGINE
//==============================================

//@@@
// EMCC IFACE
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
