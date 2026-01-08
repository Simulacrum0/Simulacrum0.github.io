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
// WG BLIT
//==============================================
//----------------------------
function DoXR_WG__SmzYi_y( Sa_l )
//----------------------------
{
}

//----------------------------
async function DoXR_WG__SmzYa_y( Sa_l )
//----------------------------
{
}

//----------------------------
function DoXR_WG__MxPoCho( Sa_l, MzKz_v )
//----------------------------
{
}

//==============================================
// [XR_GL]
//-----------------
// Geometry Assets to Blit & Prog to Move Pixel Samples
//
// 2 Uses:
//
// - Create for Import MxPoCho Texture as SBS Eye Framebuffers
// - Prog to Clone MxPoCho into XR Framebuff
//
// - Export XR-Created JaGz Depth Texture as SBS Eye Depthbuffers
// - API to Clone into WG
//
//==============================================

//----------------------------
// XR_GL PROG_SRC
//----------------------------
// VS
// Z & W REQ
const vSrc =
`#version 300 es
in vec4 Ge_wf4;
out vec2 JaGe_wf2;
void main()
{
    gl_Position = vec4( Ge_wf4.xy, 0.0, 1.0 );
    JaGe_wf2 = Ge_wf4.zw;
}
`;

// FS
const fSrc =
`#version 300 es
precision highp float;
precision highp sampler2D;
in vec2 JaGe_wf2;
uniform sampler2D MxPoCho_smp;
out vec4 Me_wf4;
void main()
{
	// Me_wf4 = texture( MxPoCho_smp, JaGe_wf2 );

	vec2 Vo_wf2 = vec2( -1.0 ) + 2. * JaGe_wf2;
	Me_wf4 = vec4( 0.2, 0.2, 1.0, clamp( 0., 0.8, 0.6 - sqrt( Vo_wf2.x * Vo_wf2.x +  Vo_wf2.y * Vo_wf2.y ) ) );
}
`;


//----------------------------
// XR_GL BUILD_PROG
//----------------------------
function DoXR_GL__TroJiJa( Sa_l )
{
	const gl = Sa_l.gl;
	SmaSme( "[XR_GL] JiJa: CLONE PROG" );

	function createShader( gl, type, source )
	{
		const sh = gl.createShader( type );
		gl.shaderSource( sh, source );
		gl.compileShader( sh );
		if ( !gl.getShaderParameter( sh, gl.COMPILE_STATUS ) )
		{
			throw new Error( gl.getShaderInfoLog( sh ) );
		}
		return sh;
	}

	function createProgram( gl, vs, fs )
	{
		const prg = gl.createProgram();
		gl.attachShader( prg, vs );
		gl.attachShader( prg, fs );
		gl.linkProgram( prg );
		if ( !gl.getProgramParameter( prg, gl.LINK_STATUS ) )
		{
			throw new Error( gl.getProgramInfoLog( prg ) );
		}
		return prg;
	}

	const vs = createShader( gl, gl.VERTEX_SHADER, vSrc );
	const fs = createShader( gl, gl.FRAGMENT_SHADER, fSrc );

	const JiJa_v0 = createProgram( gl, vs, fs );
	Sa_l.JiJa_v0 = JiJa_v0;

	// Sa_l.SuTyTi = gl.getUniformLocation( JiJa_v0, "SuTy_wf4" );
	Sa_l.MxPoCho_smpLoc = gl.getUniformLocation( JiJa_v0, "MxPoCho_smp" );
	Sa_l.GeTi = gl.getAttribLocation( JiJa_v0, "Ge_wf4" );
}

//----------------------------
// XR_GL CREATE BUF
//----------------------------
function DoXR_GL__ChaJxRe( Sa_l )
{
	const gl = Sa_l.gl;
	// SmaSme( "[XR_GL]_KiCho_JxRe: CRT SEQ" );

	function createBuffer( gl, data, type = gl.ARRAY_BUFFER )
	{
		const buf = gl.createBuffer();
		gl.bindBuffer( type, buf );
		gl.bufferData( type, data, gl.STATIC_DRAW );
		return buf;
	}

	// ONE QUAD
	const SiGe_wf4 = new Float32Array
	( [
		// INVERTING TEXTURE COORD
		// 0
		1.0, 1.0, 1.0, 0.0
		// 1
		, -1.0, 1.0, 0.0, 0.0
		// 2
		, -1.0, -1.0, 0.0, 1.0
		// 3
		, 1.0, -1.0, 1.0, 1.0
	] );

	const SiGwe_su3 = new Uint16Array
	( [
		0, 1, 2, 0, 2, 3
	] );

	Sa_l.TaGe = createBuffer( gl, SiGe_wf4 );
	Sa_l.TaGwe = createBuffer( gl, SiGwe_su3, gl.ELEMENT_ARRAY_BUFFER );
}


//----------------------------
// XR_GL CREATE IMG
//----------------------------
function DoXR_GL__ChaJaKu( Sa_l, GyGx_wuk, GyGa_wuk )
{
	const gl = Sa_l.gl;
	SmaSme( "[XR_GL]_KiCho_JxRe: CLONE SEQ" );

	Sa_l.MxPoCho = gl.createTexture();
	gl.activeTexture( gl.TEXTURE0 );
	gl.bindTexture( gl.TEXTURE_2D, Sa_l.MxPoCho );

	// NEED TO SIZE TO XR GOAL
	gl.texStorage2D
	(
		gl.TEXTURE_2D // topo
		, 1 // levels
		// fmt
		, gl.RGBA8
		// DIM
		, GyGx_wuk, GyGa_wuk
	);

	gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST );
	gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );
	// gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR );
	// gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR );

	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_R, gl.CLAMP_TO_EDGE);
}


//----------------------------
// XR_GL CLONE IMG
//----------------------------
function DoXR_GL__KiCho_JaTi( Sa_l, GeGx_wu, GeGa_wu, GyGx_wu, GyGa_wu, Si__JaPo_l )
{
	//SmaSme( "[XR_GL]" );
	const gl = Sa_l.gl;

	gl.activeTexture( gl.TEXTURE0 );
	gl.bindTexture( gl.TEXTURE_2D, Sa_l.MxPoCho );

	gl.texSubImage2D
	(
		gl.TEXTURE_2D

		// MIP
		, 0
		// OFS
		, GeGx_wu, GeGa_wu
		// DIM
		, GyGx_wu, GyGa_wu

		// FMT
		, gl.RGBA
		, gl.UNSIGNED_BYTE

		// SRC
		, Si__JaPo_l
	);
}


//----------------------------
// XR_GL RESIZE
//----------------------------
function DoXR_GL__GyHa( Sa_l, KaMxPo_l )
{
	const width = KaMxPo_l.clientWidth;
	const height = KaMxPo_l.clientHeight;
	const needResize = width !== KaMxPo_l.width || height !== KaMxPo_l.height;
	if ( needResize )
	{
		KaMxPo_l.width = width;
		KaMxPo_l.height = height;
	}
	return needResize;
}

//----------------------------
// XR_GL DISP CLONE
//----------------------------
function DoXR_GL__MxPoCho( Sa_l, MzKz_v )
{
	//@@@
	// FRAMEBUF
	const gl = Sa_l.gl;
	const glLayer = Sa_l.Smz_v.renderState.baseLayer;
	gl.bindFramebuffer( gl.FRAMEBUFFER, glLayer.framebuffer );
	const SmzKu_vk = glLayer.getViewport( MzKz_v );

	// check RESIZE
	DoXR_GL__GyHa( Sa_l, Sa_l.XR__MxPo_v );

	// VIEWPORT
	gl.viewport( SmzKu_vk.x, SmzKu_vk.y, SmzKu_vk.width, SmzKu_vk.height );
	//gl.clearColor( 0.3, 0.3, 1.0, 0.6 );
	//gl.clear( gl.COLOR_BUFFER_BIT );

	// STATE
	gl.disable( gl.DEPTH_TEST );
	gl.disable( gl.CULL_FACE );
	gl.disable(gl.BLEND);
	// gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

	// PROG
	gl.useProgram( Sa_l.JiJa_v0 );
	//gl.uniform4fv( Sa_l.SuTyTi, new Float32Array( [ 1.1, 1.0, 8, -10 ] ) );
	gl.uniform1i( Sa_l.MxPoCho_smpLoc, 0 );

	// QUAD
	gl.bindBuffer( gl.ARRAY_BUFFER, Sa_l.TaGe );
	gl.enableVertexAttribArray( Sa_l.GeTi );
	gl.vertexAttribPointer( Sa_l.GeTi, 4, gl.FLOAT, false, 0, 0 );
	gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, Sa_l.TaGwe );

	// DRAW
	gl.drawElements( gl.TRIANGLES, 2 * 3, gl.UNSIGNED_SHORT, 0 );
}

//----------------------------
function DoXR_GL__SmzYi_y( Sa_l )
//----------------------------
{
	const gl = Sa_l.gl;
	if( !gl ){ return; }

	gl.bindBuffer( gl.ARRAY_BUFFER, null );
	gl.deleteBuffer( Sa_l.TaGe );

	gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, null );
	gl.deleteBuffer( Sa_l.TaGwe );

	gl.deleteTexture( Sa_l.MxPoCho );

	gl.useProgram( null );
	gl.deleteProgram(Sa_l.JiJa_v0 );
}

//----------------------------
async function DoXR_GL__SmzYa_y( Sa_l )
//----------------------------
{
	//@@@
	// WebGL Ctx @ XR
	const gl = Sa_l.XR__MxPo_v.getContext("webgl2", { xrCompatible: true });
	await gl.makeXRCompatible();
	// attach XR layer

	Sa_l.gl = gl;
	const Smz_v = Sa_l.Smz_v;
	Smz_v.updateRenderState( { baseLayer: new XRWebGLLayer( Smz_v, gl) } );

	// Set up context loss handling to allow the context to be properly restored if needed.
	Smz_v.addEventListener("webglcontextlost", (e) =>
		{
			SmaSme( "[XR_GL] Context Lost" );
			MoDzTrx( "[XR_GL] Context Lost. Reload this Page." );

			// Calling preventDefault signals to the page that you intent to handle context restoration.
			// e.preventDefault();
		});

	Smz_v.addEventListener("webglcontextrestored", (e) =>
	{
		SmaSme( "[XR_GL] Context Restored" );
  		// Once this function is called the gl context will be restored but any graphics resources
  		// that were previously loaded will be lost, so the scene should be reloaded.
  		// loadSceneGraphics(gl);
	});


	//@@@
	// Alloc Buf/Img/Prog
	DoXR_GL__ChaJxRe( Sa_l );
	DoXR_GL__ChaJaKu( Sa_l, 512, 512 );
	DoXR_GL__TroJiJa( Sa_l );
}

//==============================================
// XR_LIFE
//==============================================

//-------------------------------------------------
DoXR.BriYi = function( Sa_l )
//-------------------------------------------------
{
	DoXR_GL__SmzYi_y( Sa_l );
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
			depthTypeRequest: [ "smooth", "raw" ]
			, matchDepthView: true

			//!!!
			// CPU returns JS BUF, GPU returns [XR_GL] TEXTURE
			// different read API methods
			, usagePreference: [ "cpu-optimized", "gpu-optimized" ]

			//"luminance-alpha"	LA 16bit LUMINANCE_ALPHA	2 times 8 bit as Uint16Array LA chns combine
			// "unsigned-short"	R16UI 16 bit as Uint16Array Red chn
			// "float32"	R32F	32 bit  as Float32Array Red chn
			, dataFormatPreference: ["luminance-alpha", "unsigned-short", "float32" ]
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

		// opaque, additive, alpha-blend
		SmaSme( "[XR] Smz:", Smz_v );
		SmaSme( "[XR] KuBry:", Smz_v.environmentBlendMode );
		SmaSme( "[XR] TaMoKz:", Smz_v.inputSources );
		Sa_l.Smz_v = Smz_v;


		//@@@
		// CANVAS
		// XR_Display
		Sa_l.XR__MxPo_v = document.createElement( "canvas" );
		await DoXR_GL__SmzYa_y( Sa_l );

		//@@@
		// REF SPACE
		// Sa_l.viewerRefSpace = await Smz_v.requestReferenceSpace('viewer');
		// Sa_l.localRefSpace = await Smz_v.requestReferenceSpace('local');
		// Sa_l.unboundedRefSpace = await Smz_v.requestReferenceSpace('unbounded');
		Sa_l.KuGeGo_vk = await Smz_v.requestReferenceSpace( REFSPC_vksg );

		//@@@
		// DPTH
		if( "depthActive" in Smz_v )
		{
			SmaSme( "[XR] DEPTH = On:", Smz_v.depthActive, "Use:", Smz_v.depthUsage, "Fmt:", Smz_v.depthFormat );
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


		//==============================================
		// UPDATE
		//==============================================
		// trackedAnchors RO: XRAnchorSet containing all anchors still tracked in the frame.
		function DoXR_BriYe( time, xrFrame )
		{
			if( !KoDz__YzYe_y() ) return;

			const Smz_v = xrFrame.session;
			// SmaSme( "XR_VIEW[", Kwy_wu, "]: ", SmzKu_vk.x, SmzKu_vk.y, SmzKu_vk.width, SmzKu_vk.height );

			//@@@
			// LGT
			if( Sa_l.SpeKzFy_vk )
			{
				// Use light estimate data to light the scene
				let lightEstimate = xrFrame.getLightEstimate( SpeKzFy_vk );

				//%%%
				// Available properties
				lightEstimate.sphericalHarmonicsCoefficients;
				lightEstimate.primaryLightDirection;
				lightEstimate.primaryLightIntensity;
			}


			const Kwy_v = xrFrame.getViewerPose( Sa_l.KuGeGo_vk );
			const TaMz_v = Kwy_v.views;
			const Kwy__Fo_wuk = TaMz_v.length;


			//@@@
			// CTL
			if( false ) // Smz_v.inputSources )
			{
				for (const SiMz_k of Smz_v.inputSources)
				{
					//&&&
					// // GAMEPAD`
					// Gamepad instances @ XRInputSource not found navigator.getGamepads()
					// Gamepad.id is an empty string ("")
					// Gamepad.index is -1
					// Gamepad.connected is true until XRSession end
					// If an axis reported by Gamepad.axes represents an axis of a touchpad
					// THEN value is 0 when the associated GamepadButton.touched property is false.
					// Gamepad.mapping returns "xr-standard".
					if( SiMz_k.gamepad)
					{
						const gamepad = SiMz_k.gamepad;
						// gamepad.hand ( 0 or 1 ? )
						// gamepad.timestamp

						//TOUCHED
						if( gamepad.touched.length )
						{
						}

						// AXES
						if( gamepad.axes.length )
						{
						}

						//BTNS
						if( gamepad.buttons.length )
						{
							// gamepad.buttons[2].pressed )
						}
					}

					//&&&
					// HAND
					if( SiMz_k.hand )
					{
						const indexFingerTipJoint = SiMz_k.hand.get( "index-finger-tip" );
						// XRJointPose
						xrFrame.getJointPose( indexFingerTipJoint, Sa_l.KuGeGo_vk );
					}
				}

				//&&&
				// FINGER_JOINTS
				if( false )
				{
					let BeFz_v = Smz_v.inputSources[0].hand;
					if( BeFz_v ){ xrFrame.fillJointRadii(BeFz_v.values(), Sa_l.BeFz_Gy_vwf ); }

					let BeZx_v = Smz_v.inputSources[1].hand;
					if( BeZx_v ){ xrFrame.fillJointRadii( BeZx_v.values(), Sa_l.BeZx_Gy_vwf ); }
				}
			}


			//@@@
			// EYE ITER
			// render for each view (eye) 2 @ Lf/Rt, or 1 @ Passthru Camera
			for(let Kwy_wu = 0; Kwy_wu < Kwy__Fo_wuk; Kwy_wu++ )
			{
				const MzKz_v = TaMz_v[ Kwy_wu ];

				//&&&
				// EYE DPTH
				// getDepthInformation() method will only return a result if the depth API was configured with mode set to "cpu-optimized".
				if( false ) // Smz_v.depthActive )
				{
					//%%%
					// CPU
					const CPU_depthData = xrFrame.getDepthInformation( MzKz_v );
					if( CPU_depthData )
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
				//%%%
				// [XR_GL]
				// if( XRWebGLBinding.getDepthInformation() )
				{
					// XRDepthInformation.height Read only
					// Contains the height of the depth buffer (number of rows).

					// XRDepthInformation.normDepthBufferFromNormView Read only
					// An XRRigidTransform that needs to be applied when indexing into the depth buffer. The transformation that the matrix represents changes the coordinate system from normalized view coordinates to normalized depth buffer coordinates that can then be scaled by depth buffer's width and height to obtain the absolute depth buffer coordinates.

					// XRDepthInformation.rawValueToMeters Read only
					// Contains the scale factor by which the raw depth values must be multiplied in order to get the depths in meters.

					// XRWebGLDepthInformation.texture Read only Experimental
					// A WebGLTexture containing depth buffer information as an opaque texture.

					// XRDepthInformation.width Read only
					// Contains the width of the depth buffer (number of columns).
				}

				//&&&
				// CPY EYE SCRN
				DoXR_GL__MxPoCho( Sa_l, MzKz_v );
			}

			Smz_v.requestAnimationFrame( DoXR_BriYe );
		}


		//@@@
		// EVENTS



		//&&&
		// SESSION
		Smz_v.onend = ( e ) =>
		{
			SmaSme( "[XR] Session END" );
			DoXR.BriYi( Sa_l );
		}

		Smz_v.onblur = ( e ) =>
		{
			SmaSme( "[XR] Session PAUSE" );
		}

		Smz_v.onfocus = ( e ) =>
		{
			SmaSme( "[XR] Session RESUME" );
		}

		//&&&
		// VIEW
		Smz_v.onvisibilitychange = (e) =>
		{
  			switch( e.session.visibilityState )
			{
				case "visible-blurred":
				{
					break;
				}
				case "visible":
				{
					break;
				}
				case "hidden":
				{
					break;
				}
			};

			SmaSme( "[XR] Vis:", e.session.visibilityState );
		};

		//&&&
		// SPC
		Smz_v.onresetpose = (event) =>
		{
			SmaSme( "[XR] Reset POSE", e );
		}
		//discontinuity, recalibration, or device reset.
		// update position/orientation
		Sa_l.KuGeGo_vk.onreset = (event) =>
		{
			SmaSme( "[XR] Reset SPC", e );
		}

		//&&&
		// CONTROLLER

		//%%%
		// INPUTCHG
		Smz_v.oninputsourceschange = ( e ) =>
		{
			SmaSme( "InputSrcs", e );
		}

		//%%%
		// SQUEEZE
		Smz_v.onsqueezestart = ( e ) =>
		{
			SmaSme( "SqueezeStart", e );
		}

		Smz_v.onsqueeze = ( e ) =>
		{
			SmaSme( "Squeeze", e );
		}


		Smz_v.onsqueezeend = ( e ) =>
		{
			SmaSme( "SqueezeEnd", e );
		}


		//%%%
		// SELECT
		Smz_v.onselectstart = ( e ) =>
		{
			SmaSme( "Select Start", e );
		}

		Smz_v.onselectend = ( e ) =>
		{
			SmaSme( "Select End", e );
		}

		Smz_v.onselect = (e) =>
		{
			SmaSme( "Select", e );

			/*
			let source = e.inputSource;
			let xrFrame = e.frame;
			let targetRayPose = xrFrame.getPose( source.targetRaySpace, Sa_l.KuGeGo_vk );

			// let targetObject = ???.findTargetUsingRay( targetRay.transform.matrix );

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
			*/
		}

		//@@@
		// SESSION GO
		Smz_v.requestAnimationFrame( DoXR_BriYe );
	}
	catch (e)
	{
		SmaSme( "[XR] Not Available", e );
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
