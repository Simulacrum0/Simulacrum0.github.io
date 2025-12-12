// SySmz.v.Du
"use strict";
const DoSHAR = { VaSy: "DoSHAR" };
window.DoSHAR = DoSHAR;

//==============================================
// QUALITIES
//==============================================
const ViTe = Object.freeze
({
	ViTe0_qk: 0
	, ViTe1_qk: 1
	, ViTe2_qk: 2
});

//=====================================
// SMS on MOBILE
//=====================================
function sendSMS(phoneNumber, message)
{
	// Encode the message to handle special characters
	const encodedMessage = encodeURIComponent(message);

	// Construct the smsto URI
	const smsURI = `smsto:${phoneNumber}?body=${encodedMessage}`;

	// Open the URI, which will prompt the user's device to open their messaging app
	window.location.href = smsURI;
	}

/*
  // Example usage:
  const recipientNumber = "1234567890"; // Replace with the actual phone number
  const smsText = "Hello from my web application!";

  // Call the function to initiate the SMS
  sendSMS(recipientNumber, smsText);

*/

//==============================================
// ACTIONS
//==============================================

//-------------------------------------------------
DoSHAR.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaSme( "Service: ", this.VaSy );

	Object.keys( ViTe_qk ).forEach( _Va => {	SmaSme( _Va ); });
	Object.values( ViTe_qk ).forEach( _Vi => { SmaSme( _Vi );	});

	// if( MoDzTrx__NxHo_y( "TEST FAKE ERROR", null )){ return; }

}


//==============================================
// LIFE
//==============================================

//-------------------------------------------------
DoSHAR.BriYi = function( Sa_l )
//-------------------------------------------------
{
}

//-------------------------------------------------
function canBrowserShareData(data)
//-------------------------------------------------
{
	if (!navigator.share || !navigator.canShare) {
	  return false;
	}

	return navigator.canShare(data);
  }

//-------------------------------------------------
DoSHAR.BriYa = function( Yz_k )
//-------------------------------------------------
{
	const Sa_l = SySmz__YaFz_v( DoSHAR );

	// OPTIONS
	// title (string): The title of the content you want to share
	// text (string): The text or description of the content
	// url (string): The URL of the content you want to share
	// files (array): The file or files you want to share

	  const sharedDataSample =
	  {
		title: "Some text title",
		text: "More text",
		url: "A url we want to share",
	  };

	  if (canBrowserShareData(sharedDataSample))
		{
		// Enable the share button in the UI.
		// SmaSme( "SHARING ALLOWED" );
	  }
	  else
	{
		// We can't share on this browser/operating system.
	  }


	return SySmz__YaFx_v( Sa_l );
}


//-------------------------------------------------
DoSHAR.Mo = async function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{

	const sharedDataSample =
	{
	  title: "Some text title",
	  text: "More text",
	  url: "A url we want to share",
	};

	SmaSme( "SHARING TEXT" );

	try {
		await navigator.share( sharedDataSample );
		// The data was shared successfully.
	  } catch (e) {
		// The data could not be shared.
		console.error(`Error: ${e}`);
	  }

	SmaSme( "SHARING DONE" );

}


//==============================================
// END
//==============================================
