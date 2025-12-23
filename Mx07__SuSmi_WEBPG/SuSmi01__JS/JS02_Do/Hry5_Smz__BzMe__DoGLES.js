//==============================================
// DoGLES
//==============================================
"use strict";
const DoGLES = { VaSy: "DoGLES" };
window.DoGLES = DoGLES;

//==============================================
// DoGLES_Trx
//==============================================
DoGLES.Trx = function( err )
{
	SmaSme( "DoGLES_Trx: " + err );
}


//==============================================
// DoGLES_BriYe
//==============================================
DoGLES.SmaYz = function( Sa_l )
{
	// REPORT
	SmaSme( "--------------------------------------------" );
	SmaSme( "DoGLES_Yz" );
	SmaSme( "--------------------------------------------" );
	SmaSme( "GL: " + DoGLES );
	SmaSme( "--------------------------------------------" );
}


//==============================================
// DoGLES_BriYi
//==============================================
DoGLES.BriYi = function( Sa_l )
{
	const gl = Sa_l.gl;
	// gl.deleteVertexArray(vertexArray);

	gl.bindBuffer( gl.ARRAY_BUFFER, null );
	gl.deleteBuffer( Sa_l.TaGe );

	gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, null );
	gl.deleteBuffer( Sa_l.TaGwe );

	gl.deleteTexture( Sa_l.JaKuDe );

	gl.useProgram( null );
	gl.deleteProgram(Sa_l.JiJa_v0 );
}

//==============================================
// DoGLES_BriYa
//==============================================
DoGLES.BriYa = async function( Yz_l )
{
	// MAKE SESSION with Ji INTERFACE
	const Sa_l = SySmz__YaFz_v( DoGLES );

	Sa_l.KaVy = Yz_l.KaVy;

	//@@@
	// CTX
	//const gl = document.getElementById( "MxPo_Bri" ).getContext( "webgl2", { xrCompatible: true } );
	const gl = document.getElementById( "MxPo_Bri" ).getContext( "webgl2" );
	if ( !gl )
	{
		DoGLES.Trx( "WebGL2 required: Please check your Browser" );
		return;
	}
	Sa_l.gl = gl;


	//@@@
	// BUILD TEXTURE
    // gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true );

	Sa_l.JaKuDe = gl.createTexture();
	gl.activeTexture( gl.TEXTURE0 );
	gl.bindTexture( gl.TEXTURE_2D, Sa_l.JaKuDe );

	// NEED TO SIZE TO XR GOAL
	gl.texStorage2D
	(
		gl.TEXTURE_2D // topo
		, 1 // levels
		// fmt
		, gl.RGBA8
		// DIM
		, 2, 2
	);

	gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST );
	gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );
	// gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR );
	// gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST );

	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_R, gl.CLAMP_TO_EDGE);


	//!!!
	// As needed
	DoGLES.KiCho_JxRe( Sa_l );
	DoGLES.KiCho_SuTy( Sa_l );


	return SySmz__YaFx_v( Sa_l );
}


//==============================================
// DoGLES_RESIZE
//==============================================
DoGLES.GyHa = function( Sa_l, MxPo_Bri_l )
{
	const width = MxPo_Bri_l.clientWidth;
	const height = MxPo_Bri_l.clientHeight;
	const needResize = width !== MxPo_Bri_l.width || height !== MxPo_Bri_l.height;
	if ( needResize )
	{
		MxPo_Bri_l.width = width;
		MxPo_Bri_l.height = height;
	}
	return needResize;
}


//==============================================
// PROG
//==============================================

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
  uniform sampler2D JaKuDe_smp;
  out vec4 Me_wf4;
  void main()
  {
    Me_wf4 = texture( JaKuDe_smp, JaGe_wf2 );
 }
`;


//==============================================
//
//==============================================
DoGLES.KiCho_SuTy = function( Sa_l )
{
	const gl = Sa_l.gl;
	SmaSme( "DoGLES JiJa: CLONE PROG" );

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
	Sa_l.JaKuDe_smpLoc = gl.getUniformLocation( JiJa_v0, "JaKuDe_smp" );
	Sa_l.GeTi = gl.getAttribLocation( JiJa_v0, "Ge_wf4" );
}

//==============================================
//
//==============================================
DoGLES.KiCho_JxRe = function( Sa_l )
{
	const gl = Sa_l.gl;
	SmaSme( "DoGLES_KiCho_JxRe: CLONE SEQ" );

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


//==============================================
// CLONE FORM SRCs
//==============================================
DoGLES.KiCho_JaTi = function( Sa_l, GeGx_wu, GeGa_wu, GyGx_wu, GyGa_wu, Si__JaPo_l )
{
	//SmaSme( "DoGLES_SyCho_JaPo: ENGINE CLONE FORM" );
	const gl = Sa_l.gl;

	gl.activeTexture( gl.TEXTURE0 );
	gl.bindTexture( gl.TEXTURE_2D, Sa_l.JaKuDe );

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


//==============================================
// DoGLES_BriYe
//==============================================
DoGLES.BriYe = function( Sa_l, GiDri_duk  )
{
	// SmaSme( "DoGLES_BriYe ", Sa_l );
	const gl = Sa_l.gl;

	//&&&
	// UPLOAD
	// Send WebGPU Canvas to use for WebVR
	//DoGLES.KiCho_JaTi( Sa_l, 0, 0, 512, 512, Sa_l.WG__XR_SeKu.canvas );
	DoGLES.KiCho_JaTi( Sa_l, 0, 0, 2, 2, new Uint8Array( [	255, 255, 128, 255, 0, 0, 0, 255, 255, 0, 0, 255, 255, 128, 0, 255 ] ) );

	//@@@
	// RENDER
	DoGLES.GyHa( Sa_l, gl.canvas );
	gl.viewport( 0, 0, gl.canvas.width, gl.canvas.height );

	//gl.clearColor( 1., 0.5, 0.0, 1.0 );
	//gl.clear( gl.COLOR_BUFFER_BIT );

	gl.disable( gl.DEPTH_TEST );
	gl.disable( gl.CULL_FACE );

	gl.disable(gl.BLEND);
	// gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	gl.useProgram( Sa_l.JiJa_v0 );

	//gl.uniform4fv( Sa_l.SuTyTi, new Float32Array( [ 1.1, 1.0, 8, -10 ] ) );
	gl.uniform1i( Sa_l.JaKuDe_smpLoc, 0 );

	gl.bindBuffer( gl.ARRAY_BUFFER, Sa_l.TaGe );
	gl.enableVertexAttribArray( Sa_l.GeTi );
	gl.vertexAttribPointer( Sa_l.GeTi, 4, gl.FLOAT, false, 0, 0 );

	gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, Sa_l.TaGwe );
	gl.drawElements( gl.TRIANGLES, 2 * 3, gl.UNSIGNED_SHORT, 0 );
}


//==============================================
// END
//==============================================
