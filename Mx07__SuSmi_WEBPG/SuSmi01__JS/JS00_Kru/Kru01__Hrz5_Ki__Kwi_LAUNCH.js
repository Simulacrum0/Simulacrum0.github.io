//==============================================
//
//==============================================

//-------------------------------------------------
//
//-------------------------------------------------

//==============================================
// SyKi
// GLOBALs
//==============================================

//@@@
// FILE HANDLE TEST ONLY
//@@@
let OP_ToKzVy;


//@@@
// MxPo
// SCREEN
let MxPo_De_l = document.getElementById('MxPo_De');


//==============================================
// OP^Zz
//==============================================



//==============================================
// MODULE ENGINE
//==============================================

//@@@
// EMCC IFACE
var Module =
{
	// REQ: Input
	canvas: MxPo_De_l,
	// REQ: load
	totalDependencies: 0,

	// EMCC NOTIFY
	// Define how notification messages from Emscripten are displayed via Module.print attribute.
	'print': function (text) { SmaSme('MSG: ' + text); },
	'printErr': function (text) { SmaSme('ERR: ' + text); },
	'onAbort': function (text) { BriDzTrx('FAIL: ' + text); },


	// SPINNER & TEXT
	Sma__BriDzYz__Bz(text)
	{
		let BriDzYz__Bz_l = document.getElementById('BriDzYz__Bz');
		BriDzYz__Bz_l.innerHTML = text;

	},
	Sma__BriDzYz__Bo(text)
	{
		let BriDzYz__Bo_l = document.getElementById('BriDzYz__Bo');
		BriDzYz__Bo_l.innerHTML = text;
	},

	monitorRunDependencies(left)
	{
		this.totalDependencies = Math.max(this.totalDependencies, left);
		Module.Sma__BriDzYz__Bz( left ? 'Preparing... (' + (this.totalDependencies - left) + '/' + this.totalDependencies + ')' : 'All downloads complete.');
	}
};

//@@@
// BOOT
Module.Sma__BriDzYz__Bz('Downloading...');
Module.Sma__BriDzYz__Bo('Status');

//==============================================
// LOG
// Skipped usual 8 layers for minimal JS
//==============================================
function SmaSme(){ var args = Array.prototype.slice.call(arguments); console.log.apply(console, args); }
function SmaDre(){ var args = Array.prototype.slice.call(arguments); console.warn.apply(console, args); }
function SmaTrx(){ var args = Array.prototype.slice.call(arguments); console.error.apply(console, args); }

//==============================================
// ERR
//==============================================
function BriDzTrx(){ var args = Array.prototype.slice.call(arguments); alert.apply(console, args); Module.Sma__BriDzYz__Bz( JSON.stringify( args ) ); }
window.onerror = (e) =>
{
	const Trx_vsg = ( "Error: " + JSON.stringify( e ) );
	BriDzTrx( Trx_vsg );
}

//==============================================
// END
//==============================================
