// SySmz.v.Du
"use strict";
const DoNET = { SyTu_vsg: "Do", VaDy_vsg: "NET" };
Ko.Ji.DoNET = DoNET;

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
	LOCAL_qk: 0
	, LAN_qk: 1
	, WAN_qk: 2
});

//==============================================
// ACTIONS
//==============================================

//-------------------------------------------------
DoNET.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaJe( "[" + this.VaDy_vsg + "] SmaYz" );
}


//==============================================
// FETCH OVERRIDE
// via CloudFlare: haven't verified its use yet
//==============================================
// export default
// {
// 	async fetch(request)
// 	{
// 	  // Make a copy of the request to modify its headers
// 	  const modifiedRequest = new Request(request);

// 	  // Handle preflight requests (OPTIONS)
// 	  if (request.method === "OPTIONS") {
// 		return new Response(null, {
// 		  headers: {
// 			...corsHeaders,
// 		  },
// 		  status: 200, // Respond with OK status for preflight requests
// 		});
// 	  }

// 	  // Pass the modified request through to the origin
// 	  const response = await fetch(modifiedRequest);

// 	  // Make a copy of the response to modify its headers
// 	  const modifiedResponse = new Response(response.body, response);

// 	  // Set CORS headers on the response
// 	  Object.keys(corsHeaders).forEach((header) => {
// 		modifiedResponse.headers.set(header, corsHeaders[header]);
// 	  });

// 	  return modifiedResponse;
// 	},
// };


//==============================================
// YOUTUBE LOAD via CORS BYPASS
/// Currently FAILING
//==============================================
function isValidYouTubeUrl(url)
{
  // Regular expression pattern to match YouTube video URLs
  const URL_Ptrn_k = /^(https?:\/\/)?(www.)?(youtube.com\/embed\/|youtu.be\/|youtube.com\/watch\?v=)([a-zA-Z0-9_-]{11})$/;
	return URL_Ptrn_k.test(url);
}

function bypassCorsError(videoUrl)
{
	return new Promise((resolve, reject) =>
	{
		// Check if the videoUrl is a valid YouTube video URL
		if( !isValidYouTubeUrl(videoUrl) )
		{
			reject(new Error( "Invalid YouTube video URL. Please provide a valid YouTube video URL." ));
			return;
		}

		SmaSy( "[NET] YouTube CALL" );

		// Create an iframe element
		//const iframe = document.createElement("iframe");
		const iframe = document.getElementById("PePo_k");

		// Set the src attribute of the iframe to the videoUrl
		iframe.src = videoUrl;
		iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" );
		iframe.setAttribute( "referrerpolicy", "strict-origin-when-cross-origin" );

		// Add the iframe to the document body
		//document.body.appendChild(iframe);

		// Wait for the iframe to load
		iframe.addEventListener("load", () =>
		{
			SmaSy( "[NET] YouTube LOADED" );
			resolve(iframe);
		});

		// Handle any errors that occur during iframe loading
		iframe.addEventListener("error", (event) =>
		{
			reject(new Error("[NET] Failed to load the YouTube video."));
		});

  });// END PROMISE

}

function YouTube__Play()
{
	//	const PePo_vsg = "https://www.youtube.com/embed/ztgM9Z34AUE?si=LkUbDSWwU1XUJVfz"
	const PePo_vsg = "https://www.youtube.com/embed/ztgM9Z34AUE"
//	const PePo_vsg = https://youtu.be/ztgM9Z34AUE

	//<iframe width="560" height="315" src="https://www.youtube.com/embed/ztgM9Z34AUE?si=LkUbDSWwU1XUJVfz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

	SmaSy( "[NET] YouTube BEGIN" );
	bypassCorsError( PePo_vsg ).then((iframe) =>
	{
		// Do something with the iframe element
		SmaSy( "[NET] YouTube success:", iframe );
	})
	.catch((error) => { SmaTrx( "[NET]", error ); });

	SmaSy( "[NET] YouTube END" );
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

	SmaTrx( "[NET] ERR:", Err_vsg );
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
	  SmaJe("Your device does not support the NetworkInformation API");
	}
	else
	{
	  let data = navigator.connection;

	  SmaJe
	  (
		"[NET]" + "\n" +
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
DoNET.BriYa = async function( Yz_k )
//-------------------------------------------------
{
	const Sa_l = SySmz__YaFz_v( DoNET );

	//  <script type="module" src="https://cdn.jsdelivr.net/npm/qrcode@1.4.4/build/qrcode.min.js"></script>
	// <script type="module" src="Mx00__SuSmi_WEBPG/SuSmi01__JS/JS03_Swi/SwiWT/Hra4_Bru__KeTuDe__SwiWT.js"></script>


	return SySmz__YaFx_v( Sa_l );
}

//-------------------------------------------------
DoNET.Mo = async function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{
	getNetworkInformation();

}

//==============================================
// END
//==============================================
