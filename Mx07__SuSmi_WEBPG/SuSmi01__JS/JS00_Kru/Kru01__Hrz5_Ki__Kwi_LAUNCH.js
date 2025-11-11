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



//==============================================
// MODULE ENGINE
//==============================================

//@@@
// EMCC IFACE
var Module =
{
	// REQ: Input
	canvas: document.getElementById('MxPo_De'),
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
		BriDzYz__Bz_l.innerHTML = Module.Trx_vsg ? Module.Trx_vsg: text;
	},
	Sma__BriDzYz__Bo(text)
	{
		let BriDzYz__Bo_l = document.getElementById('BriDzYz__Bo');
		BriDzYz__Bo_l.innerHTML = Module.Trx_vsg ? Module.Trx_vsg: text;
	},

	monitorRunDependencies(left)
	{
		this.totalDependencies = Math.max(this.totalDependencies, left);
		Module.Sma__BriDzYz__Bz( left ? 'Preparing... (' + (this.totalDependencies - left) + '/' + this.totalDependencies + ')' : 'All downloads complete.');
	}
};

//@@@
// BOOT
Module.Trx_vsg = null;
Module.Sma__BriDzYz__Bz( ' Welcome' );
Module.Sma__BriDzYz__Bo( ' Status' );

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
function BriDzTrx()
{
	var args = Array.prototype.slice.call(arguments);
	var KeDru_vsg = JSON.stringify( args );

	// POST for HTML
	Module.Sma__BriDzYz__Bz( KeDru_vsg );
	Module.Sma__BriDzYz__Bo( KeDru_vsg );

	// POST for DBG
	console.error( KeDru_vsg );
	// Skip MSGBOX
	// alert( KeDru_vsg );

	// END MODULE
	Module.Trx_vsg = KeDru_vsg;
}
window.onerror = (e) =>
{
	const Trx_vsg = ( "Browser_ERROR: " + JSON.stringify( e ) );
	BriDzTrx( Trx_vsg );
}

//==============================================
// END
//==============================================
