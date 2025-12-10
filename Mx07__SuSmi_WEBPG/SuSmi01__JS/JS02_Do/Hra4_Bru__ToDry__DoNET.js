// SySmz.v.Du
"use strict";
const DoNET = { VaSy: "DoNET" };
window.DoNET = DoNET;

//==============================================
// Kro__DoNET:
//==============================================
/*
- https://www.webrtc-developers.com/signaling-in-webrtc/
- https://web.dev/articles/webrtc-basics
- Add server: https://codelabs.developers.google.com/codelabs/webrtc-web/#2
- Google: https://developers.google.com/codelabs/webrtc-web#5
*/
//==============================================
// QUALITIES
//==============================================
const ViNET = Object.freeze
({
	ViNET0_qk: 0
	, ViNET1_qk: 1
	, ViNET2_qk: 2
});

//==============================================
// ACTIONS
//==============================================

//-------------------------------------------------
DoNET.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaSme( "Service: ", this.VaSy );

	Object.keys( ViNET_qk ).forEach( _Va => {	SmaSme( _Va ); });
	Object.values( ViNET_qk ).forEach( _Vi => { SmaSme( _Vi );	});
}


//==============================================
// LIFE
//==============================================

//==============================================
// DoNET
//==============================================
function DoNET_Trx(error)
{
	const Err_vsg = "";

	SmaTrx( "NET_ERR:", Err_vsg );
}



//-------------------------------------------------
DoNET.BriYi = function( Sa_l )
//-------------------------------------------------
{
}


//-------------------------------------------------
function PHONE_CALL()
//-------------------------------------------------
{
	// <!--clicking on the link below will open your phone app
	// with +1 (555) 0100–0199 prefilled
	// fun fact: 555 is the fictional exchange reserved by the
	// North American Numbering Plan (NANP) for entertainment/media use-->
	// <a href="tel:+155501000199">Make a phone call</a>
}

//-------------------------------------------------
function getNetworkInformation()
//-------------------------------------------------
{
	if (!navigator.connection)
	{
	  SmaSme("Your device does not support the NetworkInformation API");
	}
	else
	{
	  let data = navigator.connection;

	  SmaSme
	  (
		"downlink:"+data.downlink +"\n"+
		"effectiveType: "+data.effectiveType+"\n"+
		"rtt: "+data.rtt+"\n"+
		"saveData: "+data.saveData+"\n"+
		"downlinkMax: "+data.downlinkMax+"\n"+
		"type: "+data.type+"\n"
	  );

	}
}

//-------------------------------------------------
DoNET.BriYa = function( Yz_k )
//-------------------------------------------------
{
	const Sa_l = SySmz__YaFz_v( DoNET );


	getNetworkInformation();


//  <script type="module" src="https://cdn.jsdelivr.net/npm/qrcode@1.4.4/build/qrcode.min.js"></script>
// <script type="module" src="Mx07__SuSmi_WEBPG/SuSmi01__JS/JS03_Swi/SwiWT/Hra4_Bru__KeTuDe__SwiWT.js"></script>


	return SySmz__YaFx_v( Sa_l );
}

//-------------------------------------------------
DoNET.Mo = function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{
}

//==============================================
// END
//==============================================
