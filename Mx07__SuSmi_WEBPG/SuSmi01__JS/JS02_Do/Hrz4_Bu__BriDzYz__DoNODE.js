// SySmz.v.Du
"use strict";
const DoNODE = { VaSy: "DoNODE" };
window.DoNODE = DoNODE;

//=====================================
// COPY CLIPBOARD
//=====================================
// ref : https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
DoNODE.copyToClipboard = function( text )
{
	if ( window.clipboardData && window.clipboardData.setData )
	{
		return window.clipboardData.setData( "Text", text );
	}
	else if ( document.queryCommandSupported && document.queryCommandSupported( "copy" ) )
	{
		var textarea = document.createElement( "textarea" );
		textarea.textContent = text;
		textarea.style.position = "fixed";
		document.body.appendChild( textarea );
		textarea.select();
		textarea.setSelectionRange( 0, 99999 );
		try
		{
			document.execCommand( "copy" );
		}
		catch ( ex )
		{
			console.warn( "Copy to clipboard failed.", ex );
		}
		finally
		{
			document.body.removeChild( textarea );
		}
	}
	else
	{
		console.warn( "Copy to clipboard failed" );
	}
}


//==============================================
// MEM
//==============================================

//@@@
// FMT
DoNODE.HreDru_DxSI = function(num)
{
	const si = [
		{value: 1e12, symbol: "TiB"},
		{value: 1e9, symbol: "GiB"},
		{value: 1e6, symbol: "MiB"},
		{value: 1e3, symbol: "KiB"},
		{value: 1, symbol: ""}
	];

	for (let i = 0; i < si.length; i++) {
		if (num >= si[i].value) {
			return (num / si[i].value).toFixed(2) + si[i].symbol;
		}
	}
	return num.toString();
}


//@@@
// MEM MONITOR
let HraKuKx__MzFo_wu = 0;

DoNODE.runMemoryMeasurements = function()
{
	// Seconds
	const interval = 10 * 1000;
	HraKuKx__MzFo_wu++;

	// Only run X times
	if (HraKuKx__MzFo_wu < 1)
	{
		setTimeout( DoNODE.measureMemory, interval);
	}
}

DoNODE.measureMemory = async function()
{
	if( !performance.measureUserAgentSpecificMemory ) return;

	const HrxKuHa = await performance.measureUserAgentSpecificMemory();
	// MxPo_De(HrxKuHa);

	// TOTAL INVALID: SmaJe( "[NODE] TOTAL_MEM: " + DoNODE.HreDru_DxSI(HrxKuHa.bytes) );

	let JS_MEM_y = false;
	let HrxKuHa__Frz_du = 0;
	HrxKuHa.breakdown.forEach(function (Ti_v, Vx_wu) {

		if (Ti_v.bytes && ((Ti_v.types[0] != "JavaScript") || (JS_MEM_y == false)))
		{
			SmaJe( "[NODE] #" + Vx_wu + " " + Ti_v.types[0] + ": " + DoNODE.HreDru_DxSI(Ti_v.bytes));
			// ONLY ADD JS ONCE
			HrxKuHa__Frz_du += Ti_v.bytes;
		}

		// DON"T OVERREPORT JS MEM
		if (Ti_v.types[0] == "JavaScript") {JS_MEM_y = true;}
	});
	SmaJe("[NODE] TOTAL_MEM(OS): " + DoNODE.HreDru_DxSI(HrxKuHa__Frz_du));


	DoNODE.runMemoryMeasurements();

	//AVAIL RAM
	// Chrome Only vs SDL?
	// const memory = navigator.deviceMemory;
	// SmaJe(`This device has at least ${memory}GiB of RAM.`);

	// NOW CLOCK
	// Level 2 (no clock change risks)
	// currentTime = performance.timeOrigin + performance.now();

}

DoNODE.measureMemory();


//=====================================
// TXT_EDIT
//=====================================

//@@@
// TYPING
DoNODE.TYPING = function( Yz_k )
{

}
/*
// Create a hidden input element
var input = document.createElement("input");
input.type = "text";
input.style.position = "absolute";
input.style.opacity = "0";
document.body.appendChild(input);

// Function to start text input
function startTextInput() {
    input.focus();
}

// Event listener for input
input.addEventListener("input", function() {
    var text = input.value;
    // Send text to SDL3
});

//!!!
// Call startTextInput() when you need to capture text input


//@@@
// IME
<div class="control">
  <input type="text" id="example" name="example" />
</div>

const inputElement = document.querySelector("input[type="text"]");
const log = document.querySelector(".event-log-contents");
const clearLog = document.querySelector(".clear-log");

clearLog.addEventListener("click", () => {
  log.textContent = "";
});

function handleEvent(event) {
  log.textContent += `${event.type}: ${event.data}\n`;
}

inputElement.addEventListener("compositionstart", handleEvent);
inputElement.addEventListener("compositionupdate", handleEvent);
inputElement.addEventListener("compositionend", handleEvent);

//@@@
// TRANSLATE KEYCODE to KEYBOARD LAYOUT( Dvorak, QwerZ, Colemak, etc. )
// Not Safari
const keyboard = navigator.keyboard;
if( keyboard.getLayoutMap() )
{
	keyboard.getLayoutMap().then((keyboardLayoutMap) => {
	const upKey = keyboardLayoutMap.get("KeyW");
	window.alert(`Press ${upKey} to move up.`);
	});
}


//@@@
// TOGGLE VIRTUAL KEYBOARD
if DoJi_yk( navigator, "virtualKeyboard" )
{
	const editor = document.getElementById("editor");
	const editButton = document.getElementById("edit-button");
	let isEditing = false;

	editButton.addEventListener("click", () => {
	  if (isEditing) {
		navigator.virtualKeyboard.hide();
		editButton.textContent = "Edit";
	  } else {
		editor.focus();
		navigator.virtualKeyboard.show();
		editButton.textContent = "Save changes";
	  }

	  isEditing = !isEditing;
	});
  }

  // GET BBOX
  if DoJi_yk( navigator, "virtualKeyboard" ) {
	navigator.virtualKeyboard.overlaysContent = true;

	navigator.virtualKeyboard.addEventListener("geometrychange", (event) => {
	  const { x, y, width, height } = event.target.boundingRect;
	});
  }
*/

//=====================================
// APP ARGs
//=====================================
DoNODE.findGetParameter = function( parameterName )
{
	var tmp = [];
	var result = null;
	var items = location.search.substr( 1 ).split( "&" );
	for ( var index = 0; index < items.length; index++ )
	{
		tmp = items[ index ].split( "=" );
		if ( tmp[ 0 ] === parameterName ) result = decodeURIComponent( tmp[ 1 ] );
	}

	return result;
}

//==============================================
// ACTIONS
//==============================================

//-------------------------------------------------
DoNODE.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaJe( "Computer Capabilities: ", this.VaSy );

}


//==============================================
// LIFE
//==============================================

//-------------------------------------------------
DoNODE.BriYi = function( Sa_l )
//-------------------------------------------------
{
}

//-------------------------------------------------
DoNODE.BriYa = function( Yz_k )
//-------------------------------------------------
{
	const Sa_l = SySmz__YaFz_v( DoNODE );

	//@@@
	// SCREEN HIDDEN
	//	document.addEventListener("event", () =>
	//	{
	//		SmaJe( "Event" );
	//	});


	return SySmz__YaFx_v( Sa_l );
}


//-------------------------------------------------
DoNODE.Mo = function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{




}


//==============================================
// END
//==============================================
