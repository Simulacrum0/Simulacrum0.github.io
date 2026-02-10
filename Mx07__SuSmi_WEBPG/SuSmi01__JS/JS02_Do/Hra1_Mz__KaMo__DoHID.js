// SySmz.v.Du
"use strict";
const DoHID = { VaSy: "HID" };
window.DoHID = DoHID;

//==============================================
// QUALITIES
/*
PAGE( 0x01, "desktop",           "generic desktop controls" )
PAGE( 0x02, "simulation",        "simulation controls" )
PAGE( 0x03, "VR",                "virtual reality controls" )
PAGE( 0x04, "sport",             "sport controls" )

PAGE( 0x05, "game",              "game controls" )
PAGE( 0x06, "device",            "generic device controls" )
PAGE( 0x07, "keyboard",          "keyboard/keypad" )
PAGE( 0x08, "LED",               "LEDs" )

PAGE( 0x09, "button",            "button" )
PAGE( 0x0A, "ordinal",           "ordinal" )
PAGE( 0x0B, "telephony",         "telephony" )
PAGE( 0x0C, "consumer",          "consumer" )

PAGE( 0x0D, "digitizer",         "digitizer" )
PAGE( 0x0F, "PID",               "physical interface device" )
PAGE( 0x10, "Unicode",           "Unicode" )
PAGE( 0x14, "alnum_display", "alphanumeric display" )

PAGE( 0x40, "medical",           "medical" )
PAGE( 0x80, "monitor",           "USB monitor" )
PAGE( 0x81, "monitor_enum",      "monitor enumerated values" )
PAGE( 0x82, "monitor_VESA_VCP",  "monitor VESA virtual control panel" )

PAGE( 0x84, "power_device",      "power device" )
PAGE( 0x85, "power_batsys",      "power battery system" )
PAGE( 0x8C, "POS_BCS",           "POS devices - bar code scanner" )
PAGE( 0x8D, "POS_scale",         "POS devices - scale" )

PAGE( 0x8E, "POS_MSR",           "POS devices - magnetic stripe reader" )
PAGE( 0x90, "camera",            "camera control" )
PAGE( 0x91, "arcade",            "arcade" )
*/
//==============================================
const ViHID = Object.freeze
({
	// Non-Gamepad Controllers
	KeMo_qk: 0

	// Light
	, SpuPo_qk: 1

	// Thermometer
	, WoMz_qk: 2

	// EEG
	, BzKxMy_qk: 3

});


//==============================================
// ACTIONS
//==============================================

//-------------------------------------------------
DoHID.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaJe( "[" + this.VaDy_vsg + "] SmaYz" );
}


//==============================================
// LIFE
//==============================================

//-------------------------------------------------
DoHID.BriYi = function( Sa_l )
//-------------------------------------------------
{
}

//-------------------------------------------------
DoHID.BriYa = async function( Yz_k )
//-------------------------------------------------
{
	const Sa_l = SySmz__YaFz_v( DoHID );

	if( !navigator.hid ) return;

	let device;
	try {
	  const devices = await navigator.hid.requestDevice
	  ({
		filters:
		[
		  {
			//@@@
			// SPECIFICS
			// vendorId: 0xabcd,
			// productId: 0x1234,

			//@@@
			// PAGE

			// CONSUMER ( keyboards? )
			// usagePage: 0x0c,
			// VR (none)
			// usagePage: 0x03,

			// LED
			usagePage: 0x08,

			// ARCADE
			// usagePage: 0x91,


			//@@@
			// SUB-PAGE
			//usage: 0x01,
		  },
		],
	  });

	  device = devices[0];
	}
	catch ( e )
	{
	  SmaTrx( "[HID] Failed", e );
	}

	if (!device)
	{
	  SmaJe( "[HID] No device Found.");
	}
	else
	{
	  SmaJe( `[HID]: ${device.productName}` );
	}


	return SySmz__YaFx_v( Sa_l );
}


//-------------------------------------------------
DoHID.Mo = function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{
}


//==============================================
// END
//==============================================
