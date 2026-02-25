const DoXR__BriDzSa__Da_wuk = "235"; 

//==============================================
//==============================================
// XR: Ya
//==============================================
//==============================================

// SySmz.v.Du
"use strict";
const DoXR = { SyTu_vsg: "Do", VaDy_vsg: "XR" };
Ko.Ji.DoXR = DoXR;

//==============================================
// QUALITIES
//==============================================
//-------------------------------------------------
// XR MODE
const BzMeKy = Object.freeze
//-------------------------------------------------
({
	VxGru_qk: 0 // CLI
	, MxKuSpo_qk: 1 // SG
	, MxKuTrz_qk: 2 // VR
	, MxKuSa_qk: 3 // AR
	, GzKuSa_qk: 4 // AR + Depth
});

//-------------------------------------------------
// HAND JOINTS
const BeTiVx = Object.freeze
//-------------------------------------------------
({
	Va0_qk: 0
	, Va1_qk: 1
	, Va2_qk: 2

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
//==============================================
// XR: Yi
//==============================================
//==============================================
//==============================================
//==============================================
// XR: Ya
//==============================================
//==============================================
//==============================================
// ACTIONS
//==============================================

//-------------------------------------------------
DoXR.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaJe( "[" + this.VaDy_vsg + "] SmaYz" );
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
	// NOTES:
	// https://github.com/immersive-web/WebXR-WebGPU-Binding/blob/main/explainer.md
	// The projectionMatrix attribute of XRViews will return a matrix appropriate for a clip-space depth range of [0, 1] instead of [-1, 1].

	/*
	const gpuAdapter = await navigator.gpu.requestAdapter({xrCompatible: true});
	const gpuDevice = await gpuAdapter.requestDevice();
	const xrGpuBinding = new XRGPUBinding(xrSession, gpuDevice);
	const projLayer = xrGpuBinding.createProjectionLayer
	({
		colorFormat: xrGpuBinding.getPreferredColorFormat(),

		//Note that if a depthStencilFormat added,
		// App MUST wrt scene's depth for XR Compositing
		// depthStencilFormat: 'depth24plus',
	});
	xrSession.updateRenderState({ layers: [projLayer] });
	*/

}

//----------------------------
function DoXR_WG__Cho_MzPo( Sa_l, MzKz_v )
//----------------------------
{
/*
	readonly attribute double nativeProjectionScaleFactor;
	XRProjectionLayer createProjectionLayer(optional XRGPUProjectionLayerInit init);
	GPUTextureFormat getPreferredColorFormat();

	XRGPUSubImage getSubImage(XRCompositionLayer layer, XRFrame frame, optional XREye eye = "none");
	XRGPUSubImage getViewSubImage(XRProjectionLayer layer, XRView view);

	interface XRGPUSubImage : XRSubImage
	{
		[SameObject] readonly attribute GPUTexture colorTexture;
		[SameObject] readonly attribute GPUTexture? depthStencilTexture;
		[SameObject] readonly attribute GPUTexture? motionVectorTexture;
		GPUTextureViewDescriptor getViewDescriptor();
	  };

// function onXRFrame(time, xrFrame)

  for( const view in xrViewerPose.views)
  {
		const subImage = xrGpuBinding.getViewSubImage(layer, view);
		view: subImage.colorTexture.createView(subImage.getViewDescriptor()),
		let vp = subImage.viewport;
		passEncoder.setViewport(vp.x, vp.y, vp.width, vp.height, 0.0, 1.0);
		// Render from the viewpoint of xrView
	}// EYE

*/

}



//==============================================
//==============================================
// XR: Yi
//==============================================
//==============================================
//==============================================
//==============================================
// XR: Ya
//==============================================
//==============================================


//-------------------------------------------------
DoXR.Mo = async function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{
	//@@@
	// CRT ANCHOR
	// createAnchor() Returns a Promise which resolves to a free-floating XRAnchor object.
	/*
	frame.createAnchor(anchorPose, referenceSpace)
	.then( (anchor) =>
	{
		  // Do stuff with the anchor (assign objects that will be relative to this anchor)
	},
	(error) =>
	{
		  console.error(`Could not create anchor: ${error}`);
		},
	  );
	  */

	//@@@
	// PERSIST ANCHOR
	// Privacy Issues
	// To create a persistent anchor, call “requestPersistentHandle” on an anchor object & Store resulting string.
	// To restore an anchor, such as when the site is reloaded, call “restorePersistentAnchor”
	// [META] site only create 8 persistent anchors at a time in NON-Private mode.


	//@@@
	// ERS ANCHOR
	// XRAnchor.delete()


	//@@@
	// SHOW KEYBRD:
	//https://developers.meta.com/horizon/documentation/web/webxr-keyboard

}


//==============================================
//==============================================
// XR: Yi
//==============================================
//==============================================
//==============================================
//==============================================
// XR: Ya
//==============================================
//==============================================

//==============================================
// [XR_GL]
//-----------------
// Geometry Assets to Blit & Prog to Move Pixel Samples
//
// 2 Uses:
//
// - Create for Import Cho_MzPo Texture as SBS Eye Framebuffers
// - Prog to Clone Cho_MzPo into XR Framebuff
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
uniform sampler2D Cho_MzPo_smp;
out vec4 Me_wf4;
void main()
{
	// Me_wf4 = texture( Cho_MzPo_smp, JaGe_wf2 );

	vec2 Vo_wf2 = vec2( -1.0 ) + 2. * JaGe_wf2;


	Me_wf4 = vec4( 1.0, 0.2, 0.2, 3.0 * clamp( 0., 0.33, 0.33 - sqrt( Vo_wf2.x * Vo_wf2.x +  Vo_wf2.y * Vo_wf2.y ) ) );
}
`;


//----------------------------
// XR_GL BUILD_PROG
//----------------------------
function DoXR_GL__TroJiJa( Sa_l )
{
	const gl = Sa_l.gl;

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
	Sa_l.Cho_MzPo_smpLoc = gl.getUniformLocation( JiJa_v0, "Cho_MzPo_smp" );
	Sa_l.GeTi = gl.getAttribLocation( JiJa_v0, "Ge_wf4" );
}

//----------------------------
// XR_GL CREATE BUF
//----------------------------
function DoXR_GL__ChaJxRe( Sa_l )
{
	const gl = Sa_l.gl;
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

	Sa_l.TaGe_l = createBuffer( gl, SiGe_wf4 );
	Sa_l.TaGwe_l = createBuffer( gl, SiGwe_su3, gl.ELEMENT_ARRAY_BUFFER );
}


//----------------------------
// XR_GL CREATE IMG
//----------------------------
function DoXR_GL__ChaJaKu__Si__MzPo( Sa_l, GyGx_wuk, GyGa_wuk )
{
	const gl = Sa_l.gl;
	SmaJe( "[XR] ChaJaKu: Si__MzPo", GyGx_wuk, GyGa_wuk );

	Sa_l.Si__MzPo_l = gl.createTexture();
	gl.activeTexture( gl.TEXTURE0 );
	gl.bindTexture( gl.TEXTURE_2D, Sa_l.Si__MzPo_l );

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
	//SmaJe( "[XR_GL]" );
	const gl = Sa_l.gl;

	gl.activeTexture( gl.TEXTURE0 );
	gl.bindTexture( gl.TEXTURE_2D, Sa_l.Si__MzPo_l );

	//@@@
	// COLR BUFFER
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

	//@@@
	// DEPTH BUFFER
	// layer's depth buffer to composite?
}


//----------------------------
function DoXR_GL__SmzYi_y( Sa_l )
//----------------------------
{
	const gl = Sa_l.gl;
	if( !gl ){ return; }

	gl.bindBuffer( gl.ARRAY_BUFFER, null );
	gl.deleteBuffer( Sa_l.TaGe_l );

	gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, null );
	gl.deleteBuffer( Sa_l.TaGwe_l );

	gl.deleteTexture( Sa_l.Si__MzPo_l );

	gl.useProgram( null );
	gl.deleteProgram(Sa_l.JiJa_v0 );
}

//----------------------------
async function DoXR_GL__SmzYa_y( Sa_l )
//----------------------------
{
	//@@@
	// WebGL Ctx @ XR
	const gl = Sa_l.Se__MzPo_l.getContext( "webgl2", { xrCompatible: true });
	Sa_l.gl = gl;

	SmaJe( "[XR_GL] CTX_Tro" );
	await gl.makeXRCompatible();

	const Smz_v = Sa_l.Smz_v;

	//&&&
	// Scale Factor
	let FRM__Gy_wfk = XRWebGLLayer.getNativeFramebufferScaleFactor( Smz_v );

	//&&&
	// attach XR layer
	const GL_Gwa_l = new XRWebGLLayer( Smz_v, gl,
	{
		framebufferScaleFactor: FRM__Gy_wfk,

		alpha: true,
		depth: false,
		stencil: false,
		ignoreDepthValues: true,

		antialias: false,
  	});
	Smz_v.updateRenderState( { baseLayer: GL_Gwa_l } );

	const RS_l = Smz_v.renderState;
	// De: 0.1 10cm ...1000.0 1km
	SmaJe( "[XR] Dpth:", RS_l.depthNear, RS_l.depthFar, "FRM__Gy", FRM__Gy_wfk );


	//@@@
	// CTX_LOSS
	Smz_v.addEventListener("webglcontextlost", (e) =>
	{
		SmaJe( "[XR_GL] Context Lost" );

		// Calling preventDefault signals to the page that you intent to handle context restoration.
		// e.preventDefault();
		e.canceled = true;

		MoDzTrx( "[XR_GL] Context Lost. Reload this Page." );
	});

	Smz_v.addEventListener("webglcontextrestored", (e) =>
	{
		SmaJe( "[XR_GL] Context Restored" );
		// Once this function is called the gl context will be restored but any graphics resources
		// that were previously loaded will be lost, so the scene should be reloaded.
		// loadSceneGraphics(gl);
	});


	//@@@
	// Alloc Prog/Buf/Img
	DoXR_GL__TroJiJa( Sa_l );
	DoXR_GL__ChaJxRe( Sa_l );
	// set to null so allopc later
	Sa_l.Si__MzPo_l = null;
}

//----------------------------
// XR_GL RESIZE
//----------------------------
function DoXR_GL__GyHa_y( Sa_l, KaMxPo_l )
{
	const GyGx_wfk = KaMxPo_l.clientWidth;
	const GyGa_wfk = KaMxPo_l.clientHeight;

	const RESIZ_yk = ( GyGx_wfk !== KaMxPo_l.width || GyGa_wfk !== KaMxPo_l.height );
	if( RESIZ_yk )
	{
		KaMxPo_l.width = GyGx_wfk;
		KaMxPo_l.height = GyGa_wfk;
	}

	return RESIZ_yk;
}

//----------------------------
// XR_GL DISP CLONE
//----------------------------
let DBG_wu = 0;
function DoXR_GL__Cho_MzPo( Sa_l, FRM_k, MzKz_v )
{
	//@@@
	// FRAMEBUF
	const gl = Sa_l.gl;
	const GL_Gwa_l = Sa_l.Smz_v.renderState.baseLayer;
	const SmzKu_vk = GL_Gwa_l.getViewport( MzKz_v );

	gl.bindFramebuffer( gl.FRAMEBUFFER, GL_Gwa_l.framebuffer );

	//!!!
	// NULL DST BUF
	if( DBG_wu < 3 )
	{
		SmaJe( "[XR]-------------------------:", DBG_wu );

		SmaJe( "[XR] SeMzPo:", MzKz_v, GL_Gwa_l.framebuffer, FRM_k );
		SmaJe( "[XR] EyeBox:", SmzKu_vk.x, SmzKu_vk.y, SmzKu_vk.width, SmzKu_vk.height );
		SmaJe( "[XR] CanvasBox:", Sa_l.Se__MzPo_l.clientWidth, Sa_l.Se__MzPo_l.clientHeight, Sa_l.Se__MzPo_l.width, Sa_l.Se__MzPo_l.height,  GL_Gwa_l.framebuffer );

		// FORCE RESIZE CANVAS?
		Sa_l.Se__MzPo_l.width = 2* SmzKu_vk.width;
		Sa_l.Se__MzPo_l.height = SmzKu_vk.height;

		DBG_wu++;
	}

	//if( ( Sa_l.Se__MzPo_l.clientWidth === 0 ) || ( Sa_l.Se__MzPo_l.clientHeight === 0 )) return;


	//@@@
	// CHECK RESIZE
//	if( DoXR_GL__GyHa_y( Sa_l, Sa_l.Se__MzPo_l ) || ( Sa_l.Si__MzPo_l === null ))
	if( Sa_l.Si__MzPo_l === null )
	{
		// SmaJe( "[XR] CTX Se", GL_Gwa_l, GL_Gwa_l.context, Sa_l.Se__MzPo_l.clientWidth, Sa_l.Se__MzPo_l.clientHeight );
		SmaJe( "[XR] RESIZE Se__MzPo" );
		DoXR_GL__ChaJaKu__Si__MzPo( Sa_l, 2* SmzKu_vk.width, SmzKu_vk.height);
	}

	//@@@
	// VIEWPORT
	gl.viewport( SmzKu_vk.x, SmzKu_vk.y, SmzKu_vk.width, SmzKu_vk.height );


	//&&&
	// STATE
	gl.disable( gl.DEPTH_TEST );
	gl.disable( gl.CULL_FACE );

	gl.disable( gl.BLEND );
	// gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

	//&&&
	// PROG
	gl.useProgram( Sa_l.JiJa_v0 );
	//gl.uniform4fv( Sa_l.SuTyTi, new Float32Array( [ 1.1, 1.0, 8, -10 ] ) );
	gl.uniform1i( Sa_l.Cho_MzPo_smpLoc, 0 );

	//&&&
	// QUAD
	gl.bindBuffer( gl.ARRAY_BUFFER, Sa_l.TaGe_l );
	gl.enableVertexAttribArray( Sa_l.GeTi );
	gl.vertexAttribPointer( Sa_l.GeTi, 4, gl.FLOAT, false, 0, 0 );
	gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, Sa_l.TaGwe_l );

	//&&&
	// DRAW
	gl.drawElements( gl.TRIANGLES, 2 * 3, gl.UNSIGNED_SHORT, 0 );

}


//==============================================
//==============================================
// XR: Yi
//==============================================
//==============================================
//==============================================
//==============================================
// XR: Ya
// XR_LIFE
//==============================================
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
DoXR.BriYu = async function( Sa_l )
//-------------------------------------------------
{
	if( KoDz__YzTrx_y() ) return;
	//SmaJe( "[XR] MzPoYe: RESUME" );
	Sa_l.Smz_v.requestAnimationFrame( DoXR__MzPoYe );
}

//-------------------------------------------------
DoXR.BriYe = async function( Sa_l )
//-------------------------------------------------
{
	if( KoDz__YzTrx_y() ) return;
	// Sa_l.Smz_v.requestAnimationFrame( Sa_l.MzPoYe );
}

//-------------------------------------------------
DoXR.BriYo = function( Sa_l )
//-------------------------------------------------
{
	if( KoDz__YzTrx_y() ) return;
	//SmaJe( "[XR] BriYo: PAUSE" );

	// Pause Compute Tasks?
	// Reset Clocks?
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
		SmaJe("[XR] No WebXR Browser & Device Found!" );
		DoXR.BriYi( Sa_l );
		return null;
	}

	//!!!
	// navigator.xr.addEventListener('devicechange', MyFN_CheckForXRSupport );


	//@@@
	// REFSPC
	// INLINE, aka SG via screendevice, uses "viewer" AR/VR are IMMERSIVE
	const Sa__GeGo_vksg =
		//"viewer" //screen
		// 'unbounded' // no position tracking, Walking Outside?
		"local"	// Local = Limited Space, Seated/Standing in place
		// "local-floor" // Flat floor means consistent height via groundplane Y=0
		// "bounded-floor" // has Fixed UserSpc via XRBoundedReferenceSpace.boundsGeometry
	;

	//@@@
	// OPT
	const KriYz_k =
	{
		requiredFeatures:
		[
			Sa__GeGo_vksg
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
			// , "low-refresh-rate"
			//, "high-refresh-rate"
			, "no-fixed-foveation"

			// UNFOUND
			// , "ca-correction"

			// DEPTH
			, "depth-sensing"

			// ANCHORS
			, "anchors"
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
	SmaJe( "[XR] AR: ", AR_yk, "VR:", VR_yk );

	if( !AR_yk && !VR_yk )
	{
		SmaJe("[XR] API Missing Options. Find a Modern Compatible Browser." );
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
		SmaJe( "[XR] Smz:", Smz_v );
		// interactionMode: [ "world-space", "scene-space" ]
		SmaJe( "[XR] KuBry:", Smz_v.environmentBlendMode, Smz_v.interactionMode );
		SmaJe( "[XR] TaMoKz:", Smz_v.inputSources );
		Sa_l.Smz_v = Smz_v;


		//@@@
		// CANVAS
		// XR_Display
		Sa_l.Se__MzPo_l = document.createElement( "canvas" );
		const GL_yk = await DoXR_GL__SmzYa_y( Sa_l );

		//@@@
		// REF SPACE
		// Sa_l.viewerRefSpace = await Smz_v.requestReferenceSpace('viewer');
		// Sa_l.localRefSpace = await Smz_v.requestReferenceSpace('local');
		// Sa_l.unboundedRefSpace = await Smz_v.requestReferenceSpace('unbounded');
		Sa_l.Sa__GeGo_l = await Smz_v.requestReferenceSpace( Sa__GeGo_vksg );

		//@@@
		// DPTH
		if( DoJi_yk( Smz_v, "depthActive" ))
		{
			SmaJe( "[XR] DEPTH = On:", Smz_v.depthActive, "Use:", Smz_v.depthUsage, "Fmt:", Smz_v.depthFormat );
		}

		//@@@
		// LGT
		if( false )//DoJi_yk( Smz_v, "requestLightProbe" ))
		{
			// srgba8 (default value) or rgba16f
			const SpeDx_l = Smz_v.preferredReflectionFormat;
			const SpeYz_l = { reflectionFormat: SpeDx_l };
			Sa_l.SpeKzFy_vk = await Smz_v.requestLightProbe( SpeYz_l );

			SmaJe( "[XR] Spe:", SpeDx_l );
		}
		else
		{
			Sa_l.SpeKzFy_vk = false;
		}

		//@@@
		// HAND JOINT RADII
		Sa_l.BeFz_Gy_vwf = new Float32Array(25);
		Sa_l.BeZx_Gy_vwf = new Float32Array(25);


		//----------------------------
		// KEYBOARD
		//----------------------------
		/*
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
				let textFromUser = myTextField.value;
				SmaJe( "TYPED:", textFromUser );
			};
		}
		*/

		//----------------------------
		// SESSION
		//----------------------------
		Smz_v.onend = ( e ) =>
		{
			SmaJe( "[XR] Session END" );
			DoXR.BriYi( Sa_l );
		}

		Smz_v.onblur = ( e ) =>
		{
			SmaJe( "[XR] Session PAUSE" );
		}

		Smz_v.onfocus = ( e ) =>
		{
			SmaJe( "[XR] Session RESUME" );
		}

		//----------------------------
		// VIEW
		//----------------------------
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

			SmaJe( "[XR] Vis:", e.session.visibilityState );
		};

		//----------------------------
		// SPC
		//----------------------------
		Smz_v.onresetpose = (event) =>
		{
			SmaJe( "[XR] Reset POSE", e );
		}
		//discontinuity, recalibration, or device reset.
		// update position/orientation
		Sa_l.Sa__GeGo_l.onreset = (event) =>
		{
			SmaJe( "[XR] Reset SPC", e );
			// CHG Sa_l.Sa__GeGo_l
		}

		//----------------------------
		// CONTROLLER
		//----------------------------

		//%%%
		// INPUTCHG
		Smz_v.oninputsourceschange = ( e ) =>
		{
			SmaJe( "[XR] Inputs Changed", e );
		}

		//----------------------------
		// SQUEEZE
		//----------------------------
		Smz_v.onsqueezestart = ( e ) =>
		{
			//SmaJe( "[XR_NOTICE] Squeeze Begin", e );
		}
		// SUCCESS or CANCEL
		// Smz_v.onsqueezeend = ( e ) =>
		// {
		// 	SmaJe( "[XR_NOTICE] Squeeze End", e );
		// }
		Smz_v.onsqueeze = ( e ) =>
		{
			SmaJe( "[XR_NOTICE] Squeezed Success", e );
		}


		//----------------------------
		// SELECT
		//----------------------------
		Smz_v.onselectstart = ( e ) =>
		{
			//SmaJe( "[XR_NOTICE] Select Begin", e );
		}
		// SUCCESS or CANCEL
		// Smz_v.onselectend = ( e ) =>
		// {
		// 	SmaJe( "[XR_NOTICE] Select End", e );
		// }
		Smz_v.onselect = (e) =>
		{
			SmaJe( "[XR_NOTICE] Selected Success ( Use Target Ray )", e );

			/*
			let source = e.inputSource;
			let FRM_k = e.FRM_k;
			let targetRayPose = FRM_k.getPose( source.targetRaySpace, Sa_l.Sa__GeGo_l );
			// let targetObject = ???.findTargetUsingRay( targetRay.transform.matrix );
			if (source.targetRayMode === "tracked-pointer")
			{

			}
			*/
		}


		//----------------------------
		// UPDATE FWD w/ 'SELF'
		//----------------------------
		function MzPoYe( Gi_k, FRM_k )
		{
			if( !KoDz__YzYe_y() ) return;
			DoXR__MzPoYe( Sa_l, Gi_k, FRM_k );
			Smz_v.requestAnimationFrame( MzPoYe );
		}

		// SESSION FIRST
		Smz_v.requestAnimationFrame( MzPoYe );
	}
	catch (e)
	{
		SmaTrx( "[XR] Session Not Available", e );
		DoXR.Trx( Sa_l, e );
		return null;
	}

	//@@@
	// SUCCESS
	return SySmz__YaFx_v( Sa_l );
}


//==============================================
// UPDATE
//==============================================
function DoXR__MzPoYe( Sa_l, Gi_k, FRM_k )
{
	//@@@
	// CFG
	const Smz_v = FRM_k.session;


	//@@@
	// ANCHORS
	// trackedAnchors RO: XRAnchorSet containing all anchors still tracked in the FRM_k.
	//for( const anchor of frame.trackedAnchors)
	// {
	// 	const pose = frame.getPose(anchor.anchorSpace, referenceSpace);
	//   }


	//@@@
	// LGT
	if( Sa_l.SpeKzFy_vk )
	{
		// Use light estimate data to light the scene
		let lightEstimate = FRM_k.getLightEstimate( SpeKzFy_vk );

		//%%%
		// Available properties
		lightEstimate.sphericalHarmonicsCoefficients;
		lightEstimate.primaryLightDirection;
		lightEstimate.primaryLightIntensity;
	}

	//@@@
	// CTL
	for( let Fe_wu = 0; Fe_wu < Smz_v.inputSources.length; Fe_wu++ )
	{
		const SiMz_k = Smz_v.inputSources[ Fe_wu ];

		//&&&
		// HANDSIDE
		// ( "left" or "right" or "none" )
		let HANDSIDE_vsg = DoJi_yk( SiMz_k, "handedness" ) ? SiMz_k.handedness : "none";

		//&&&
		// GRIP
		if( SiMz_k.gripSpace )
		{
			const gripPose = FRM_k.getPose( SiMz_k.gripSpace, Sa_l.Sa__GeGo_l );
			if (gripPose)
			{
				const invXfm = gripPose.transform.inverse;
				//SmaJe( "[XR] Grip:", gripPose.transform.matrix, invXfm.matrix );
			}
		}

		//&&&
		// TGT
		// "gaze" eye or head aim
		// "screen" touchtap
		// "tracked-pointer"
		// "transient-pointer" OS made
		let RAYMODE_vsg = DoJi_yk( SiMz_k, "targetRayMode" ) ? SiMz_k.targetRayMode : "none";
		if( SiMz_k.targetRaySpace )
		{
			// wf16 matrix
			// const targetRayPose = FRM_k.getPose(inputSource.targetRaySpace, refSpace);
			// if (targetRayPose)
			// {
			// if (source.targetRayMode === "tracked-pointer") {  myRenderTargetRayAsBeam(targetRayPose);  }
			// }

			// SmaJe( "[XR] CTL:", RAYMODE_vsg, HANDSIDE_vsg, SiMz_k.targetRaySpace );
		}// TGT RAY

		//&&&
		// GAMEPAD`
		// NOTE: XR_Gamepad Instances @ NOT_SAME as via navigator.getGamepads() (thus Gamepad.index is -1)
		// NOTE: Gamepad.id STRING ( expected to be empty'
		// Gamepad.connected is true until XRSession end
		// Gamepad.mapping => "xr-standard".
		// - BTN 0: trigger (Required), 1: squeeze, 2: touchpad, 3: thumbstick
		// - AXES: 0,1: touchpad, 2,3 thumbstick
		if( SiMz_k.gamepad )
		{
			const gamepad = SiMz_k.gamepad;
			// SmaJe( "GAMEPAD", gamepad );

			// POSE
			// gamepad.timestamp
			// gamepad.pose.hasPosition: true/false
			// --- gamepad.pose.orientation[ wf4 ]
			// --- gamepad.pose.position[ wf4 0001 ]


			// AXES
			// Array of wf  (no properties )
			for( let a = 0; a < gamepad.axes.length; a++ )
				{
					if( gamepad.axes[ a ] )
						{
							//SmaJe( "Axis", a, " = ", gamepad.axes[ a ] );
						}
					}

			//BTNS
			for( let b = 0; b < gamepad.buttons.length; b++ )
			{
				//  if touched false, then value is '0' on touchpad BTN
				if( gamepad.buttons[ b ].value )
				{
					//SmaJe( "Btn", b, "=", gamepad.buttons[ b ].value );
				}
			}// BTNS
		}//GAMEPAD

		//&&&
		// HAND
		if( SiMz_k.hand )
		{
			const HAND_k = SiMz_k.hand;

			// XRJointPose
			const JTN_k = HAND_k.get( "index-finger-tip" );
			FRM_k.getJointPose( JTN_k, Sa_l.Sa__GeGo_l );

			//&&&
			// FINGER_JOINTS
			if( false ) // Left, Right, or None
			{
				let BeFz_v = Smz_v.inputSources[0].hand;
				if( BeFz_v ){ FRM_k.fillJointRadii(BeFz_v.values(), Sa_l.BeFz_Gy_vwf ); }

				// let BeZx_v = Smz_v.inputSources[1].hand;
				// if( BeZx_v ){ FRM_k.fillJointRadii( BeZx_v.values(), Sa_l.BeZx_Gy_vwf ); }
			}
		}// HAND
	}// CTLs

	//@@@
	// VIEW
	// HEAD POSE & EYE ITER
	const Kwy_v = FRM_k.getViewerPose( Sa_l.Sa__GeGo_l );
	const TaMz_v = Kwy_v.views;
	const Kwy__Fo_wuk = TaMz_v.length;


	// render for each view (eye) 2 @ Lf/Rt, or 1 @ Passthru Camera
	for(let Kwy_wu = 0; Kwy_wu < Kwy__Fo_wuk; Kwy_wu++ )
	{
		const MzKz_v = TaMz_v[ Kwy_wu ];

		//&&&
		// EYE DPTH
		// getDepthInformation() method will only return a result if the depth API was configured with mode set to "cpu-optimized".
		const CPU_Gz_yk = false;
		if( CPU_Gz_yk ) // Smz_v.depthActive )
		{
			//%%%
			// CPU_DPTH
			const CPU_depthData = FRM_k.getDepthInformation( MzKz_v );
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
			}//CPU DEPTH DATA
		}// CPU DEPTH

		//%%%
		// GPU_DPTH
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
		// RENDER
		// MzKz_v.transform
		// MzKz_v.projectionMatrix

		//&&&
		// CPY EYE SCRN
		DoXR_GL__Cho_MzPo( Sa_l, FRM_k, MzKz_v );
	}

}



//==============================================
//==============================================
// XR: Yi
//==============================================
//==============================================
