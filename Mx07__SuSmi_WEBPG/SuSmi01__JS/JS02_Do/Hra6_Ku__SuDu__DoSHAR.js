// SySmz.v.Du
"use strict";
const DoSHAR = { SyTu_vsg: "Do", VaDy_vsg: "SHAR" };
Ko.Ji.DoSHAR = DoSHAR;

//==============================================
// QUALITIES
//==============================================
const ViSHAR = Object.freeze
({
	Va0_qk: 0
	, Va1_qk: 1
	, Va2_qk: 2
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
	SmaJe( "[" + this.VaDy_vsg + "] SmaYz" );

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
	if (!navigator.share || !navigator.canShare)
	{
	  return false;
	}

	return navigator.canShare(data);
  }

//-------------------------------------------------
DoSHAR.BriYa = async function( Yz_k )
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
		// SmaJe( "SHARING ALLOWED" );
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
	  title: "MicroCosm REPORT from XYZ",
	  text: "System Log Goes here",
	  url: "PowerOurPeople.com/SX.html#LINK_TO_XP_001",
	};

	SmaJe( "SHARING REPORT" );

	try
	{
		await navigator.share( sharedDataSample );
		// The data was shared successfully.
	  } catch (e) {
		// The data could not be shared.
		console.error(`Error: ${e}`);
	  }

	SmaJe( "SHARING DONE" );

}


//==============================================
// END
//==============================================
