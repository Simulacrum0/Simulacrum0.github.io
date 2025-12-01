// SySmz.v.Du
"use strict";
const DoXR = { VaSy: "DoXR" };
window.DoXR = DoXR;

//==============================================
// QUALITIES
//==============================================
const ViTe_qk = Object.freeze
({
	ViTe0: 0
	, ViTe1: 1
	, ViTe2: 2

});


//==============================================
// CONTENT GUIDELINES
//==============================================

// @ KyMETA
/*

MARKET:
- We only feature direct links to individual VR experiences, as opposed to directories of VR experiences.
- We prefer experiences that provide unique or differentiated value to users. We generally do not feature tech demos that don’t provide meaningful entertainment or utility.
- Content should be appropriate for all ages 13 and older.
- Hand tracking-enabled experiences should provide an easily discoverable UI option to exit WebXR to return to the browser.
- If an exit option is not made available in the experience’s UI, then the experience must render a full hand model (e.g., including fingers and all joints) such that users can easily see their hands to perform the system gesture to exit WebXR.

APP:
- Run at 60Hz recommended 72Hz+ on Quest 1
- The experience must be responsive within 4 seconds of entering VR or show a loading indicator.
- The experience runs without crashes, freezes, or extended unresponsive states.
- The experience must not leave the user stuck at any point in the experience.
- The experience must respond to the HMD’s positional tracking as well as orientation.
- In-application hands and controllers should line up with the user’s real-world counterparts in position and orientation as closely as possible.
- For applications that support hand tracking, the system gesture is reserved, and should not trigger any other actions within the application.

Technical Recommendations
- The experience should support spatial 3D audio.
- The experience must pause when the user removes the HMD or opens Universal Menu.
- In experiences using a Local tracking space, the user must be able to reset their forward orientation.
- Headlocked menus and UI elements are generally uncomfortable for the user and should be avoided.
- When picking up objects within the app, use the touch controller’s grip button rather than the trigger button.
- For applications that support hand tracking, hands must render in the correct position and orientation, and must animate properly.
- For applications that support hand tracking, hands must be hidden if they are not being tracked or if tracking confidence is low.
*/

//==============================================
// ACTIONS
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

//-------------------------------------------------
DoXR.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaSme( "Service Example: ", this.VaSy );

	Object.keys( ViTe_qk ).forEach( _Va => {	SmaSme( _Va ); });
	Object.values( ViTe_qk ).forEach( _Vi => { SmaSme( _Vi );	});
}


//==============================================
// LIFE
//==============================================

//-------------------------------------------------
DoXR.BriYi = function( Sa_l )
//-------------------------------------------------
{
}

//-------------------------------------------------
DoXR.BriYa = function( Yz_k )
//-------------------------------------------------
{
	const Sa_l = SySmz__YaFz_v( DoXR );


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

	return SySmz__YaFx_v( Sa_l );
}


//-------------------------------------------------
DoXR.Mo = function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{

	// KEYBRD:
	//https://developers.meta.com/horizon/documentation/web/webxr-keyboard

}


//==============================================
// END
//==============================================
