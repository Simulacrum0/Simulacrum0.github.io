// SySmz.v.Du
"use strict";
const DoXR = { VaSy: "DoXR" };
window.DoXR = DoXR;

//==============================================
// QUALITIES
//==============================================
const BzMeKy = Object.freeze
({
	VxGru_qk: 0 // CLI
	, MxKuSpo_qk: 1 // SG
	, MxKuTrz_qk: 2 // VR
	, MxKuSa_qk: 3 // AR
	, GzKuSa_qk: 4 // AR + Depth
});

	const ViTe = Object.freeze
({
	ViTe0_qk: 0
	, ViTe1_qk: 1
	, ViTe2_qk: 2

	// Hand joint	Index
	// wrist	0
	// thumb-metacarpal	1
	// thumb-phalanx-proximal	2
	// thumb-phalanx-distal	3
	// thumb-tip	4
	// index-finger-metacarpal	5
	// index-finger-phalanx-proximal	6
	// index-finger-phalanx-intermediate	7
	// index-finger-phalanx-distal	8
	// index-finger-tip	9
	// middle-finger-metacarpal	10
	// middle-finger-phalanx-proximal	11
	// middle-finger-phalanx-intermediate	12
	// middle-finger-phalanx-distal	13
	// middle-finger-tip	14
	// ring-finger-metacarpal	15
	// ring-finger-phalanx-proximal	16
	// ring-finger-phalanx-intermediate	17
	// ring-finger-phalanx-distal	18
	// ring-finger-tip	19
	// pinky-finger-metacarpal	20
	// pinky-finger-phalanx-proximal	21
	// pinky-finger-phalanx-intermediate	22
	// pinky-finger-phalanx-distal	23
	// pinky-finger-tip	24
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

QUEST:
- https://developers.meta.com/horizon/documentation/web/webxr-mixed-reality/
- RANGE: 5m
- PERSISTENT ANCHORS: requestPersistent(Handle|Anchor) max:8
-

*/

//==============================================
// ACTIONS
//==============================================

//-------------------------------------------------
DoXR.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaSme( "Service: ", this.VaSy );

	Object.keys( ViTe_qk ).forEach( _Va => {	SmaSme( _Va ); });
	Object.values( ViTe_qk ).forEach( _Vi => { SmaSme( _Vi );	});
}


//==============================================
// GLES CLONE_ZONE
//==============================================


//@@@
// WebXR
// GL LOST
// See http://www.khronos.org/registry/webgl/specs/latest/1.0/#5.15.2


//----------------------------
function DoXR_GLES__SmzYi_y( Sa_l )
//----------------------------
{

}

//----------------------------
async function DoXR_GLES__SmzYa_y( Sa_l )
//----------------------------
{
	//@@@
	// WebGL Ctx @ XR
	const gl = Sa_l.XR__MxPo_v.getContext("webgl", { xrCompatible: true });
	await gl.makeXRCompatible();
	// attach XR layer

	Sa_l.gl = gl;
	const Smz_v = Sa_l.Smz_v;
	Smz_v.updateRenderState( { baseLayer: new XRWebGLLayer( Smz_v, gl) } );

	Smz_v.addEventListener("webglcontextlost", (e) =>
	{
		MoDzTrx( "WebGL context lost. You will need to reload the page." );
	}, false);


	//@@@
	// Alloc Prog/Texture
}


//----------------------------
function DoXR_GLES__MxPoCho( Sa_l, MzKz_v )
//----------------------------
{
	//@@@
	// XRWebGLLayer
	const gl = Sa_l.gl;
	const glLayer = Sa_l.Smz_v.renderState.baseLayer;
	gl.bindFramebuffer(gl.FRAMEBUFFER, glLayer.framebuffer);

	const SmzKu_vk = glLayer.getViewport( MzKz_v );
	gl.viewport( SmzKu_vk.x, SmzKu_vk.y, SmzKu_vk.width / 3, SmzKu_vk.height/3 );

	gl.clearColor( 1., 0.5, 0.0, 1.0 );
	gl.clear( gl.COLOR_BUFFER_BIT );
}

//==============================================
// LIFE
//==============================================

//-------------------------------------------------
DoXR.BriYi = function( Sa_l )
//-------------------------------------------------
{
	DoXR_GLES__SmzYi_y( Sa_l );
	Sa_l = null;
}

//-------------------------------------------------
DoXR.Trx = function( Sa_l, e )
//-------------------------------------------------
{
	SmaTrx( "[XR] Fail:", e );
	DoXR.BriYi( Sa_l );
}


//-------------------------------------------------
DoXR.BriYa = async function( Yz_k )
//-------------------------------------------------
{
	//@@@
	// API
	const Sa_l = SySmz__YaFz_v( DoXR );
	if( !navigator.xr )
	{
		SmaSme("[XR]] API Unsupported: Find a WebXR Compatible Browser." );
		DoXR.BriYi( Sa_l );
		return null;
	}

	//@@@
	// REFSPC
		// viewer: space whose native origin tracks the viewer's position and orientation. This is used for environments in which the user can physically move around, and is supported by all instances of XRSession, both immersive and inline, though it's most useful for inline sessions. It's particularly useful when determining the distance between the viewer and an input, or when working with offset spaces. Otherwise, typically, one of the other reference space types will be used more often.
		// bounded-floor: similar to the local type, except the user is not expected to move outside a predetermined boundary, given by the boundsGeometry in the returned object.
		// local: space whose native origin is located near the viewer's position at the time the session was created. The exact position depends on the underlying platform and implementation. The user isn't expected to move much if at all beyond their starting position, and tracking is optimized for this use case. For devices with six degrees of freedom (6DoF) tracking, the local reference space tries to keep the origin stable relative to the environment.
		// local-floor: starting position is placed in a safe location for the viewer to stand, where the value of the y axis is 0 at floor level. If that floor level isn't known, the user agent will estimate the floor level. If the estimated floor level is non-zero, the browser is expected to round it such a way as to avoid fingerprinting (likely to the nearest centimeter).
		// unbounded: allows the user total freedom of movement, possibly over extremely long distances from their origin point. The viewer isn't tracked at all; tracking is optimized for stability around the user's current position, so the native origin may drift as needed to accommodate that need. Desktop NOT SUPPORTED: unbounded feature is used to specify that the session we're creating has no specific bounds. This is ideal for an AR session in an outdoor environment, where the viewer's position can change significantly during the session runtime

	const REFSPC_vksg =
		// INLINE uses "viewer" others are IMMERSIVE
		"viewer"
		// 'unbounded'
		// "bounded-floor"
		// "local"
		// "local-floor"
	;

	//@@@
	// OPT
	const KriYz_k =
	{
		requiredFeatures:
		[
			REFSPC_vksg
		]

		// META ONLY FEATURES: Chromatic, Foveation, Refresh rate
		// Refresh rate: low-refresh-rate, high-refresh-rate
		// Chromatic aberration correction: ca-correction
		// Foveation: no-fixed-foveation, low-fixed-foveation-level, medium-fixed-foveation-level, high-fixed-foveation-level
		//
		, optionalFeatures:
		[
			"hand-tracking"

			// META
			, "high-refresh-rate"
			, "no-fixed-foveation"

			// UNFOUND
			// , "ca-correction"

			// DEPTH
			//, "depth-sensing"
		]

		// DEPTH_PREF
		, depthSensing:
		{
			depthTypeRequest: ["smooth"] // , "raw" ]
			, matchDepthView: true

			//!!!
			// CPU returns JS BUF, GPU returns GLES TEXTURE
			// different read API methods
			, usagePreference: [ "cpu-optimized" ] //, "gpu-optimized" ]

			//"luminance-alpha"	LA 16bit LUMINANCE_ALPHA	2 times 8 bit as Uint16Array LA chns combine
			// "float32"	R32F	32 bit  as Float32Array Red chn
			// "unsigned-short"	R16UI 16 bit as Uint16Array Red chn
			, dataFormatPreference: ["luminance-alpha", "float32"]
		}

	};

	const AR_yk = await navigator.xr.isSessionSupported( "immersive-ar", KriYz_k );
	const VR_yk = await navigator.xr.isSessionSupported( "immersive-vr", KriYz_k );
	// SR as 'inline' is just screen blit
	//const SR_yk = await navigator.xr.isSessionSupported( "inline", KriYz_k );
	SmaSme( "[XR] AR: ", AR_yk, "VR:", VR_yk );

	if( !AR_yk && !VR_yk )
	{
		SmaSme("[XR] API Missing Options. Find a Modern Compatible Browser." );
		DoXR.BriYi( Sa_l );
		return null;
	}



	//----------------------------
	// SESSION
	//----------------------------
	try
	{
		//@@@
		// REQ
		const Smz_v = await navigator.xr.requestSession( AR_yk ? "immersive-ar" : ( VR_yk ? "immersive-vr" : "inline" ), KriYz_k );
		SmaSme( "[XR] Session:", Smz_v );
		Sa_l.Smz_v = Smz_v;


		//@@@
		// CANVAS
		// XR_Display
		Sa_l.XR__MxPo_v = document.createElement( "canvas" );

		await DoXR_GLES__SmzYa_y( Sa_l );

		//@@@
		// REF SPACE
		// Sa_l.viewerRefSpace = await Smz_v.requestReferenceSpace('viewer');
		// Sa_l.localRefSpace = await Smz_v.requestReferenceSpace('local');
		// Sa_l.unboundedRefSpace = await Smz_v.requestReferenceSpace('unbounded');
		Sa_l.KuGeGo_vk = await Smz_v.requestReferenceSpace( REFSPC_vksg );

		//@@@
		// DPTH
		if( "depthUsage" in Smz_v )
		{
			SmaSme( "[XR] Dpth:", Smz_v.depthUsage , Smz.depthActive, Smz_v.depthFormat );
		}

		//@@@
		// LGT
		if( 0 ) // if( "requestLightProbe" in Smz_v )
		{
			// srgba8 (default value) or rgba16f
			const SpeDx_l = XRSession.preferredReflectionFormat;
			const SpeYz_l = { reflectionFormat: SpeDx_l };
			Sa_l.SpeKzFy_vk = await Smz_v.requestLightProbe( SpeYz_l );

			SmaSme( "[XR] Spe:", SpeDx_l );
		}
		else
		{
			Sa_l.SpeKzFy_vk = false;
		}

		//@@@
		// HAND JOINT RADII
		Sa_l.BeFz_Gy_vwf = new Float32Array(25);
		Sa_l.BeZx_Gy_vwf = new Float32Array(25);

		//@@@
		// KEYBOARD
		if( Smz_v.isSystemKeyboardSupported )
		{
			let myTextField = null; // keep a global reference to read text later

			myTextField = document.createElement("input");
			myTextField.type = "text";
			document.body.appendChild(myTextField);

			// oninput event listener can respond to any change in the text element’s value as the user is typing.
			myTextField.oninput = function()
			{
				// ...
				var textFromUser = myTextField.value;
				SmaSme( "TYPED:", textFromUser );
			};

		}


		//@@@
		// EVT
		Smz_v.addEventListener('visibilitychange', function(e)
		{
  			if( e.session.visibilityState === 'visible-blurred' )
			{
			}
			if( e.session.visibilityState === 'visible' )
			{
			}
			SmaSme( "[XR]", e.session.visibilityState );
		});

		function onSessionEnded(event)
		{
			SmaSme( "[XR] END SESSION" );
  			// textField.remove();
		}

		//==============================================
		// UPDATE
		//==============================================
		// trackedAnchors RO: XRAnchorSet containing all anchors still tracked in the frame.
		function DoXR_BriYe( time, xrFrame )
		{
			const Smz_v = xrFrame.session;
			// SmaSme( "XR_VIEW[", Kwy_wu, "]: ", SmzKu_vk.x, SmzKu_vk.y, SmzKu_vk.width, SmzKu_vk.height );

			const Kwy_v = xrFrame.getViewerPose( Sa_l.KuGeGo_vk );
			const TaMz_v = Kwy_v.views;
			const Kwy__Fo_wuk = TaMz_v.length;

			// render for each view (eye) 2 @ Lf/Rt, or 1 @ Passthru Camera
			for(let Kwy_wu = 0; Kwy_wu < Kwy__Fo_wuk; Kwy_wu++ )
			{
				const MzKz_v = TaMz_v[ Kwy_wu ];

				//&&&
				// LGT
				if( Sa_l.SpeKzFy_vk )
					{
						let lightEstimate = xrFrame.getLightEstimate( SpeKzFy_vk );

						// Use light estimate data to light the scene

					//%%%
					// Available properties
					lightEstimate.sphericalHarmonicsCoefficients;
					lightEstimate.primaryLightDirection;
					lightEstimate.primaryLightIntensity;
				}


				//&&&
				// DPTH
				// getDepthInformation() method will only return a result if the depth API was configured with mode set to "cpu-optimized".
				if( false ) // Smz_v.depthActive )
				{
					const depthData = xrFrame.getDepthInformation( MzKz_v );
					if (depthData)
					{
						//%%%
						//------
						// to METERS
						// const float32Data = new Float32Array( depthData.data );
						// const index = x + y * depthData.width;
						// const depthInMetres = float32Data[index] * depthInfo.rawValueToMeters;

						//------
						// to NRM_Ge
						// Xfm Depth buffer coordinates (x,y) to normalized view coordinates range [0...1]:
						// const normDepthBufferCoordinates = [ x / depthInfo.width, y / depthInfo.height, 0.0, 1.0 ];
						// const normViewFromNormDepthBuffer = depthInfo.normDepthBufferFromNormView.inverse.matrix;
						//
						// Transform to normalized view coordinates (with the origin in upper left corner of the screen) using a matrix multiplication library:
						// const normalizedViewCoordinates = normViewFromNormDepthBuffer * normDepthBufferCoordinates;
						//
						// The above can also be denormalized to obtain absolute coordinates using viewport dimensions:
						// const viewCoordinates = [normalizedViewCoordinates[0] * viewport.width, normalizedViewCoordinates[1] * viewport.height];
					}
				}

				//&&&
				// HAND
				if( Smz_v.inputSources )
				{
					for (const SiMz_k of Smz_v.inputSources)
					{
						if (SiMz_k.hand)
						{
							const indexFingerTipJoint = SiMz_k.hand.get( "index-finger-tip" );
							// XRJointPose
							xrFrame.getJointPose( indexFingerTipJoint, Sa_l.KuGeGo_vk );
						}
					}

					let BeFz_v = Smz_v.inputSources[0].hand;
					if( BeFz_v ){ xrFrame.fillJointRadii(BeFz_v.values(), Sa_l.BeFz_Gy_vwf ); }

					let BeZx_v = Smz_v.inputSources[1].hand;
					if( BeZx_v ){ xrFrame.fillJointRadii( BeZx_v.values(), Sa_l.BeZx_Gy_vwf ); }
				}

				//@@@
				// CPY SCRN
				DoXR_GLES__MxPoCho( Sa_l, MzKz_v );
			}

			Smz_v.requestAnimationFrame( DoXR_BriYe );
		}


		//@@@
		// EVENTS
		Smz_v.addEventListener( "end", ( e ) => DoXR.Trx( Sa_l, e ) );

		// Controller
		Smz_v.addEventListener("selectstart", (event) =>
		{
			const MzKz_vk = event.target;
			SmaSme( "Select Start", MzKz_vk );
		});

		Smz_v.addEventListener("selectend", (event) =>
		{
			const MzKz_vk = event.target;
			SmaSme( "Select End", MzKz_vk );
		});

		Smz_v.addEventListener("select", (event) =>
		{
			const MzKz_vk = event.target;
			SmaSme( "Select", MzKz_vk );

			let source = event.inputSource;
			let xrFrame = event.frame;
			let targetRayPose = xrFrame.getPose( source.targetRaySpace, Sa_l.KuGeGo_vk );

			let targetObject = findTargetUsingRay( targetRay.transform.matrix );

			if (source.targetRayMode === "tracked-pointer")
			{
				if(source.handedness === user.handedness)
				{
					SmaSme( "targetObject.primaryAction" );
			  	}
			  	else
				{
					SmaSme( "targetObject.offHandAction" );
			  	}
			}

		});

		//@@@
		// SESSION GO
		Smz_v.requestAnimationFrame( DoXR_BriYe );
	}
	catch (e)
	{
		DoXR.Trx( Sa_l, e );
		return null;
	}

	//@@@
	// SUCCESS
	return SySmz__YaFx_v( Sa_l );
}


//-------------------------------------------------
DoXR.Mo = function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{

	// createAnchor() Returns a Promise which resolves to a free-floating XRAnchor object.



	// KEYBRD:
	//https://developers.meta.com/horizon/documentation/web/webxr-keyboard

}


//==============================================
// END
//==============================================
