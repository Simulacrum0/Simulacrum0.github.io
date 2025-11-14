//=====================================
// SYSTEM UTILS
//=====================================


//==============================================
// MEM
//==============================================

//@@@
// FMT
function HreDru_DxSI(num) {
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
function runMemoryMeasurements()
{
	// Seconds
	const interval = 10 * 1000;
	HraKuKx__MzFo_wu++;

	// Only run X times
	if (HraKuKx__MzFo_wu < 1)
	{
		setTimeout(measureMemory, interval);
	}
}

async function measureMemory()
{
	const HrxKuHa = await performance.measureUserAgentSpecificMemory();
	// MxPo_De(HrxKuHa);

	// TOTAL INVALID:
	// SmaSme("\nTOTAL_MEM: "+HreDru_DxSI(HrxKuHa.bytes));
	let JS_MEM_y = false;
	let HrxKuHa__Frz_du = 0;
	HrxKuHa.breakdown.forEach(function (Ti_v, Vx_wu) {

		if (Ti_v.bytes && ((Ti_v.types[0] != 'JavaScript') || (JS_MEM_y == false))) {
			SmaSme("#" + Vx_wu + " " + Ti_v.types[0] + ": " + HreDru_DxSI(Ti_v.bytes));
			// ONLY ADD JS ONCE
			HrxKuHa__Frz_du += Ti_v.bytes;
		}

		// DON"T OVERREPORT JS MEM
		if (Ti_v.types[0] == 'JavaScript') {JS_MEM_y = true;}
	});
	SmaSme("\nTOTAL_MEM(OS): " + HreDru_DxSI(HrxKuHa__Frz_du));


	runMemoryMeasurements();

	//AVAIL RAM
	// Chrome Only vs SDL?
	// const memory = navigator.deviceMemory;
	// SmaSme(`This device has at least ${memory}GiB of RAM.`);

	// NOW CLOCK
	// Level 2 (no clock change risks)
	// currentTime = performance.timeOrigin + performance.now();

}
measureMemory();


//=====================================
// APP ARGs
//=====================================
function findGetParameter( parameterName )
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

//=====================================
//
//=====================================
// ref : https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
function copyToClipboard( text )
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

//=====================================
//
//=====================================
function mobileCheck()
{
	var check = false;
	( function ( a )
	{
		if ( /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test( a ) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test( a.substr( 0, 4 ) ) ) check = true;
	} )( navigator.userAgent || navigator.vendor || window.opera );

	return check;
};

//=====================================
// INPUT
// Fixup for 'passiveSupport' on touch/scroll events
//=====================================
function passiveSupported( debug = false )
{
	let passiveSupported = false;

	try
	{
		const options = Object.defineProperty(
		{}, 'passive',
		{
			get: function ()
			{
				passiveSupported = true;
			}
		} );

		window.addEventListener( 'testPassive', null, options );
		window.removeEventListener( 'testPassive', null, options );
	}
	catch ( error )
	{}

	if ( debug )
	{
		const message = `[Passive Events Support] "passive" option is ${!passiveSupported ? 'not ' : ''}supported by your browser.`;

		if ( passiveSupported )
		{
			console.info( message );
		}
		else
		{
			console.warn( message );
		}
	}

	return passiveSupported;
}

function isEventSupported( event )
{
	return [
		'touchstart',
		'touchmove',
		'touchenter',
		'touchend',
		'touchleave',
		'wheel',
		'mousewheel'
	].includes( event );
}

function passiveSupport( custom )
{
	const options = {
		debug: false,
		events: [],
		listeners: [],
		...custom
	};

	if ( options.debug )
	{
		console.info( '[Passive Events Support] Initialized With', options );

		options.events = options.events.filter( ( event ) =>
		{
			const supported = isEventSupported( event );

			if ( !supported )
			{
				console.warn( `[Passive Events Support] Unsupported Event: ${event}` );
			}

			return supported;
		} );

		options.listeners = options.listeners.filter( ( listener ) =>
		{
			const supported = isEventSupported( listener.event );

			if ( !supported )
			{
				console.warn( `[Passive Events Support] Unsupported Listener:`, listener );
			}

			return supported;
		} );
	}

	const
	{
		debug,
		events,
		listeners
	} = options;
	const originalFn = EventTarget.prototype.addEventListener;

	EventTarget.prototype.addEventListener = function ( ...args )
	{
		// check if it is non-passive
		const noPassiveOption = ( !args[ 2 ] || args[ 2 ].passive === undefined );

		if ( isEventSupported( args[ 0 ] ) && noPassiveOption )
		{
			// check if it should be updated
			const oldArguments = args[ 2 ];
			const isEventFromList = events.includes( args[ 0 ] );
			const isListenerFromList = listeners.find( (
			{
				element,
				event
			} ) => typeof this.matches === 'function' && this.matches( element ) && event === args[ 0 ] );
			const shouldBeUpdated = isEventFromList || isListenerFromList;

			// check if it is prevented
			const fn = args[ 1 ].toString();
			const [ fnDeclaration, ...fnContents ] = fn.split( '{' );
			const fnName = fnDeclaration.replace( /(function|=>)/, '' ).trim();
			const fnContent = fnContents.join( '{' );
			const fnArgument = ( fnName.match( /\(([^)]+)\)/ ) || [ `(${fnName})` ] )[ 0 ].replace( /[()]/g, '' );
			const fnPrevented = !!( fnContent.includes( 'preventDefault' ) || ( isListenerFromList && isListenerFromList.prevented ) );

			// update arguments
			if ( shouldBeUpdated )
			{
				args[ 2 ] = {
					...( args[ 2 ] ||
					{} ),
					...( passiveSupported() &&
					{
						passive: !fnPrevented
					} )
				};
			}

			// console log the output
			if ( debug )
			{
				console.info( '[Passive Events Support] Non-passive Event Listener',
				{
					element: this,
					event: args[ 0 ],
					handler:
					{
						fn: args[ 1 ],
						fnArgument,
						fnContent,
						fnPrevented
					},
					arguments: oldArguments,
					...( shouldBeUpdated &&
					{
						updatedArguments: args[ 2 ]
					} )
				} );
			}
		}

		originalFn.call( this, ...args );
	}
}

//==============================================
// MULTI_TAB
//==============================================
async function preventMultiTab()
{
	if (window.BroadcastChannel) {
		var tab_sid = (new Date()).getTime();

		sessionStorage.setItem('tab_sid', tab_sid);
		var channel = new BroadcastChannel('tab-connections');

		channel.postMessage('ping:get_back_all_ids');

		channel.onmessage = function (e) {
			var message = e.data.split(':');
			if (message[0] == 'close') {
				if (tab_sid > parseInt(message[1])) {
					channel = null;
					SmaSme('Extra Tab Detected.');
				}
			}
			else if (message[0] == "ping") {
				SmaSme('Closing Tab.');
				channel.postMessage('close:' + tab_sid);
			}
		}
	}
}

//=====================================
// TRANSLATE_TXT
//=====================================
async function translateText(text, targetLang)
{
	try {
		const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;

		const res = await fetch(url);
		if (!res.ok)
		{
			throw new Error(`HTTP error! Status: ${res.status}`);
		}

		const data = await res.json();
		SmaSme("API Response:", data);

		// Extract translated text
		if (Array.isArray(data) && data[0] && Array.isArray(data[0][0]))
		{
			return data[0].map(sentence => sentence[0]).join(" ");
		}
		else
		{
			throw new Error("Unexpected response format");
		}
	}
	catch (error)
	{
		SmaTrx("Translation failed:", error.message);
		return "Error during translation.";
	}
}


//==============================================
// FONTS AVAIL
//==============================================
async function FNT_TaFuHa() {
	try {
		let Fe_wu = 0;
		const availableFonts = await window.queryLocalFonts();
		for (const fontData of availableFonts)
		{
			// `blob()` returns a Blob containing valid and complete SFNT-wrapped font data.
			// const sfnt = await fontData.blob();

			// Slice out only the bytes we need: the first 4 bytes are the SFNT
			// version info.
			// Spec: https://docs.microsoft.com/en-us/typography/opentype/spec/otff#organization-of-an-opentype-font
			// const sfntVersion = await sfnt.slice(0, 4).text();

			// let outlineFormat = 'UNKNOWN';
			// switch (sfntVersion)
			// {
			// 	case '\x00\x01\x00\x00':
			// 	case 'true':
			// 	case 'typ1':
			// 		outlineFormat = 'truetype';
			// 		break;
			// 	case 'OTTO':
			// 		outlineFormat = 'cff';
			// 		break;
			// }

			SmaSme
				(
					"Fnt[ " + Fe_wu
					+ " ] " + fontData.postscriptName
					+ " @ " + fontData.fullName
					+ " ( " + fontData.family
					+ " )" + fontData.style
				);
			Fe_wu++;
		}
	}
	catch (err) {
		{SmaTrx(err.name, err.message);}
	}
}


//==============================================
// SPEAK
//==============================================

function SySPEAK()
{
	if (!window.speechSynthesis)
		{
	  alert("Your device does not support the SpeechSynthesis API");
	}
	else
	{
	  let availableVoices = speechSynthesis.getVoices();
	  let utterance = new SpeechSynthesisUtterance();
	  utterance.text = "Text into Voice Test";

	  utterance.voice = availableVoices[ 0 ];

	  //utterance.voice = availableVoices.find(o => o.voiceURI === document.getElementById('voice-choice').value) || availableVoices[0];
	  // utterance.pitch = document.getElementById('pitch').value;
	 // utterance.rate = document.getElementById('rate').value;

	  speechSynthesis.speak(utterance);
	}
  }
  SySPEAK();


		//==============================================
		// SCREEN
		//==============================================

		// Module.requestFullscreen(document.getElementById('pointerLock').checked, document.getElementById('resize').checked)

		function BriDzGyHa()
		{
			//@@@
			// MxPo
			// SCREEN
			const MxPo_De_l = document.getElementById('MxPo_De');

			const MxPo_De_GyGx = MxPo_De_l.clientWidth;
			const MxPo_De_GyGa = MxPo_De_l.clientHeight;

			if( MxPo_De_l.width !== MxPo_De_GyGx || MxPo_De_l.height !== MxPo_De_GyGa )
			{
					MxPo_De_l.width = MxPo_De_GyGx;
					MxPo_De_l.height = MxPo_De_GyGa;

					SmaSme( "Resize: " + MxPo_De_l.width + ", " + MxPo_De_l.height );
			}

			// UPDATE STATUS
			// ONLY if not ERROR
			if( Module.Trx_vsg )
			{
				const MxPo_Trx_l = document.getElementById('MxPo_Trx');
				// MxPo_Trx_l.className = 'HriDx MxPo';
				// MxPo_Trx_l.id = 'MxPo_Trx';

				MxPo_Trx_l.clientWidth = MxPo_De_GyGx;
				MxPo_Trx_l.clientHeight = MxPo_De_GyGa;
				MxPo_Trx_l.width = MxPo_De_GyGx;
				MxPo_Trx_l.height = MxPo_De_GyGa;



				const Sx_l = MxPo_Trx_l.getContext("2d");
				if( Sx_l )
					{
						Sx_l.scale( 1.0, 1.0 );

						Sx_l.beginPath();
						Sx_l.fillStyle = "#FF0909FF";
						Sx_l.fillRect( 0, 0, MxPo_Trx_l.width, MxPo_Trx_l.height);

						Sx_l.font = "2em Raleway";
						Sx_l.textAlign = "center";
						Sx_l.direction = "inherit";
						Sx_l.fillStyle = "#FFFFFFFF";

						const CTR_Ga_wu = MxPo_Trx_l.height / 2;
						const WaHa_l = Sx_l.measureText( TrxBz_vsg );
						const OFS_Ga_wu = Math.ceil( WaHa_l.fontBoundingBoxAscent + WaHa_l.fontBoundingBoxDescent + 2 ) / 2;

						Sx_l.fillText( TrxBz_vsg, MxPo_Trx_l.width / 2, CTR_Ga_wu - OFS_Ga_wu );
						Sx_l.fillText( Module.Trx_vsg, MxPo_Trx_l.width / 2, CTR_Ga_wu + OFS_Ga_wu );

						// ANTIALIAS ATTEMPT
						// Sx_l.lineWidth = 1;
						// Sx_l.strokeStyle = "#FF09097F";
						// Sx_l.strokeText( Module.Trx_vsg, MxPo_Trx_l.width / 2, MxPo_Trx_l.height / 2 );

						MxPo_Trx_l.style.display = 'block';
						MxPo_De_l.style.display = 'none';
				}
			}
			else
			{
				// MxPo_Trx_l.style.display = 'none';
				Module.Sma__BriDzYz__Bo( "MicroCosm[ " + BriDzSa__Da_vsg + " ] Screen[ " + MxPo_De_l.width + "px, " + MxPo_De_l.height + "px ] DPR: " + window.devicePixelRatio  );
			}
		}

		//@@@
		// DETECT
		// setInterval(function () {BriDzGyHa();}, 1500);
		//window.addEventListener( 'DOMContentLoaded', BriDzGyHa );
		window.addEventListener( 'resize', BriDzGyHa );

		//@@@
		// SCREEN HIDDEN
		document.addEventListener("visibilitychange", () =>
		{
			if (document.hidden)
			{
				SmaSme( "App HIDDEN" );
				KoTa__YoChyDry();
			}
			else
			{
				SmaSme( "App SHOWN" );
				KoTa__YoChyDry();
			}
		  });

//==============================================
// IDLE DETECTOR
//==============================================
	  const Hrz4_Bu__IDLE_Mo_l = new AbortController();

		async function Hrz4_Bu__IDLE_DETECT_Ya()
		{
			const Hrz4_Bu__IDLE_Mx_l = Hrz4_Bu__IDLE_Mo_l.signal;
			if ((await IdleDetector.requestPermission()) !== "granted")
			{
			  SmaTrx("IdleDetector: PERMMISSION DENIED.");
			  return;
			}

			try
			{
			  const idleDetector = new IdleDetector();
			  idleDetector.addEventListener("change", () =>
				{
				const userState = idleDetector.userState;
				const screenState = idleDetector.screenState;

				SmaSme(`IdleDetector: ${userState} Screen: ${screenState}` );
			  });

			  await idleDetector.start
			  ({
				threshold: 60_000,
				Hrz4_Bu__IDLE_Mx_l,
			  });
			  SmaSme("IdleDetector ON.");
			}
			catch (err)
			{
			  // Deal with initialization errors like permission denied,
			  // running outside of top-level frame, etc.
			  SmaTrx(err.name, err.message);
			}
		}

		function Hrz4_Bu__IDLE_DETECT_Yi()
		{
			Hrz4_Bu__IDLE_Mo_l.abort();
			SmaSme("IdleDetector OFF.");
		}


//==============================================
// XR
//==============================================

		//@@@
		// WebXR
		// GL LOST
		// See http://www.khronos.org/registry/webgl/specs/latest/1.0/#5.15.2
		// HriKe_De_l.addEventListener('webglcontextlost', (e) =>
		// {
		// 	alert('ERR001: WebGL context lost. You will need to reload the page.');
		// 	e.preventDefault();
		// }, false);

function XR_BriYa( Yz_l )
		{
			if (navigator.xr)
			{
				const opt =
				{
					requiredFeatures: ['local-floor', 'hand-tracking']
				};

				navigator.xr.isSessionSupported('immersive-vr', opt ).then((Hy_y ) =>
				{
					SmaSme( "XR:VR Support " + Hy_y );
					if( Hy_y )
					{
						// Request XR session
					}
				});

				navigator.xr.isSessionSupported('immersive-ar', opt ).then((Hy_y ) =>
				{
					SmaSme( "XR:AR Support " + Hy_y );
					if( Hy_y )
					{
						// Request XR session
					}
				});

			}
			else
			{
			    SmaSme("WebXR is not supported. Please use a compatible browser.");
			}
		}


//==============================================
// IO MEDIA DEV
//==============================================
SmaSme( "===================\n MEDIA DEV\n----------" );
navigator.mediaDevices.enumerateDevices().then
( function(devices){
			devices.forEach
			( function(device)
			{
				SmaSme( " -[ " + device.kind + " ]: " + device.label +" id = " + device.deviceId );
			});
});


//==============================================
// INPUT: PASSIVE_SUPPORT
//==============================================
// Before any third party import that causes issues
// import { passiveSupport } from 'JS00_Kru/Kru05__Hrz4_Bu_Ko_NODE.js';
// passiveSupport(
// {
  // 	events: 'touchstart', // or any other event tyoes
// });
// ??.addEventListener('touchstart', this.callPassedFunFDtion, { passive: false });


//=====================================
// EXPORT
//=====================================
/*
export
{
	findGetParameter
	, sendSMS
	, copyToClipboard
	, mobileCheck
	, passiveSupport
	, preventMultiTab
}
*/
//=====================================
// END
//=====================================
