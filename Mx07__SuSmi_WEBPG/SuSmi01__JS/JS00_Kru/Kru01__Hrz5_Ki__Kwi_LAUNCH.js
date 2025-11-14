//==============================================
//
//==============================================

//-------------------------------------------------
//
//-------------------------------------------------

//==============================================
// SyKi
// GLOBAL
//==============================================
const BriDz_VaSy_vsg = "MicroCosm";

const TrxBz_vsg = "Tech FAIL: ";
const TrxKrx_vsg = "Please try a different Browser or Device";


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
	'print': function ( Sma_vsg ) { SmaSme( 'eMSG: ' + Sma_vsg ); },
	'printErr': function ( Sma_vsg ) { SmaSme( 'eERR: ' + Sma_vsg ); },
	'onAbort': function ( Sma_vsg ) { BriDzTrx( 'eFAIL: ' + Sma_vsg ); },


	//@@@
	// HEADER BAR
	Sma__BriDzYz__Bz( Sma_vsg )
	{
		let BriDzYz__Bz_l = document.getElementById('BriDzYz__Bz');
		BriDzYz__Bz_l.innerHTML = "|> " + ( Module.Trx_vsg ? Module.Trx_vsg: Sma_vsg );
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
		Module.Sma__BriDzYz__Bz( left ? 'Preparing... (' + (this.totalDependencies - left) + '/' + this.totalDependencies + ')' : 'All downloads complete.');
	},

};

//@@@
// BOOT
Module.Sma__BriDzYz__Bz( ' Welcome' );
Module.Sma__BriDzYz__Bo( ' Status' );


//==============================================
// LOGS
// Skipped usual 8 layers for minimal JS
//==============================================
function SmaSme(){ var args = Array.prototype.slice.call(arguments); console.log.apply(console, args); }
function SmaDre(){ var args = Array.prototype.slice.call(arguments); console.warn.apply(console, args); }
function SmaTrx(){ var args = Array.prototype.slice.call(arguments); console.error.apply(console, args); }


//==============================================
// TEST_VALID
//==============================================
function BriDz_NxHoTrx_y( Va, Kri_y )
{
	// SmaSme( "NxHo: ---> " + Va );
	if( !Kri_y )
	{
		BriDzTrx( "ERR: " + Va + " @ " + Kri_y );
		return true;
	}
	return false;
}

//==============================================
// ERR
//==============================================

//----------------------------
function BriDzTrx( Mi_vsg )
//----------------------------
{
	//@@@
	// ERR MSG
	var KeDru_vsg = TrxBz_vsg + Mi_vsg;

	// POST for HTML
	Module.Sma__BriDzYz__Bz( KeDru_vsg );
	Module.Sma__BriDzYz__Bo( TrxBz_vsg + TrxKrx_vsg );
	// POST for DBG
	// console.error( KeDru_vsg );
	// Skip MSGBOX
	// alert( KeDru_vsg );

	// CLOSE MODULE
	Module.Trx_vsg = Mi_vsg;
	BriDzGyHa();
	KoTa__Yi();

}

//----------------------------
window.onerror = (e) =>
//----------------------------
{
	const Trx_vsg = ( JSON.stringify( e ) );
	BriDzTrx( Trx_vsg );
}

//----------------------------
// ERR_TYPES
//----------------------------
/*
try
{
	myRoutine(); // may throw three types of exceptions
  }
	catch (e)
   {
	if (e instanceof TypeError) {
	  // statements to handle TypeError exceptions
	} else if (e instanceof RangeError) {
	  // statements to handle RangeError exceptions
	} else if (e instanceof EvalError) {
	  // statements to handle EvalError exceptions
	} else {
	  // statements to handle any unspecified exceptions
	  logMyErrors(e); // pass exception object to error handler
	}
  }
*/

//==============================================
// END
//==============================================
