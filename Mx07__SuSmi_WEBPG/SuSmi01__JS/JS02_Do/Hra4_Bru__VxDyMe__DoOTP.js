// SySmz.v.Du
"use strict";
const DoOTP = { SyTu_vsg: "Do", VaDy_vsg: "OTP" };
Ko.Ji_v.DoOTP = DoOTP;

//==============================================
// QUALITIES
//==============================================
const ViOTP = Object.freeze
({
	ViOTP0_qk: 0
	, ViOTP1_qk: 1
	, ViOTP2_qk: 2
});

//==============================================
// ACTIONS
//==============================================

//-------------------------------------------------
DoOTP.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaJe( "[" + this.VaDy_vsg + "] SmaYz" );
}

/*

https://progressier.com/pwa-capabilities/sms-otp-demo

Tap the button below to start listening. The browser will monitor incoming SMS and attempt to extract the code you'll send below.

Listening...
Send an SMS (not an RCS message) to your phone number from another phone with the text exactly as shown below. This page will automatically intercept the code from the SMS.

MSG:
Your verification code is 857496.

@progressier.com #857496

USES:
window.OTPCredential
window.AbortController
*/

async function startListeningToSMS()
{
	if (!window.OTPCredential){
	  alert("Your current device does not support window.OTPCredential");
	  return;
	}

	let btn = document.getElementById("listening-button"); //for UI purposes only

	try {
	  btn.classList.add("listening"); //for UI purposes only
	  let ac = new AbortController();
	  let content = await navigator.credentials.get({
		otp: { transport: ["sms"] },
		signal: ac.signal
	  });

	  if (content && content.code) {
		alert("Code detected from your SMS: "+content.code);
	  }
	  else {
		alert("No code detected in your SMS");
	  }
	 }
	catch (err) {
		btn.classList.remove("listening"); //for UI purposes only
		console.error(err);
		if (err.name === 'AbortError') {
			alert("Listening stopped (Aborted).");
		}
		else {
			alert(`Error: ${err.message}`);
		}
	}
  }

  function generateRandomCode(){
	window.randomCode = Math.floor(100000 + Math.random() * 900000);
	return window.randomCode;
  }

  function getSmsBody(){
	//The browser's background process scans incoming SMS messages specifically looking for the last line to match this exact pattern:
	//@ followed by your website's hostname (e.g., @my-app.com) # followed by the code (e.g., #123456)
	let currentDomain = window.location.hostname;
	let code = window.randomCode || generateRandomCode();
	let smsBody = 'Your verification code is ' + randomCode + '.\n\n@' + currentDomain + ' #' + randomCode;
	return smsBody;
  }

  function draftSms(){
	let body = getSmsBody();
	let link = "sms:?body=" + encodeURIComponent(body);
	window.open(link, "_blank");
  }

  async function copySmsBodyToClipboard(){
	 await navigator.clipboard.writeText(getSmsBody());
	 alert("SMS text copied. Now send it yourself!");
  }

  function generateSmsTxt(){
	document.getElementById("plain-txt-sms").innerText = getSmsBody();
  }

  window.addEventListener("load", generateSmsTxt);



//==============================================
// LIFE
//==============================================

//-------------------------------------------------
DoOTP.BriYi = function( Sa_l )
//-------------------------------------------------
{
}

//-------------------------------------------------
DoOTP.BriYa = async function( Yz_k )
//-------------------------------------------------
{
	const Sa_l = SySmz__YaFz_v( DoOTP );



	return SySmz__YaFx_v( Sa_l );
}


//-------------------------------------------------
DoOTP.Mo = async function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{
}


//==============================================
// END
//==============================================
