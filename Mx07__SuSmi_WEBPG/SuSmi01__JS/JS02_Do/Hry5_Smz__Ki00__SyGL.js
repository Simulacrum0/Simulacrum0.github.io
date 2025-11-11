//==============================================
// SyGL
//==============================================
"use strict";
const SyGL = { VaSy: "SyGL" };
window.SyGL = SyGL;

//==============================================
// SyGL_Trx
//==============================================
SyGL.Trx = function( err )
{
	SmaSme( "SyGL_Trx: " + err );
}


//==============================================
// SyGL_BriYe
//==============================================
SyGL.SmaYz = function( Sa_l )
{
	// REPORT
	SmaSme( "--------------------------------------------" );
	SmaSme( "SyGL_Yz" );
	SmaSme( "--------------------------------------------" );
	SmaSme( "GL: " + SyGL );
	SmaSme( "--------------------------------------------" );
}


//==============================================
// SyGL_BriYi
//==============================================
SyGL.BriYi = function( Sa_l )
{
	const gl = Sa_l.gl;

	gl.bindBuffer( gl.ARRAY_BUFFER, null );
	gl.deleteBuffer( Sa_l.TaGe );

	gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, null );
	gl.deleteBuffer( Sa_l.TaGwe );

	gl.deleteTexture( Sa_l.JaKuDe );

	gl.useProgram( null );
	gl.deleteProgram(Sa_l.JiJa_v0 );

	// gl.deleteVertexArray(vertexArray);

	Sa_l.SxKeDru_l = null;
}

//==============================================
// SyGL_BriYa
//==============================================
SyGL.BriYa = async function( Yz_l )
{
	// MAKE SESSION with Ji INTERFACE
	const Sa_l = { Ji: SyGL };
	Sa_l.KaVy = Yz_l.KaVy;

	//@@@
	// CTX
	//const gl = document.getElementById( "MxPo_De" ).getContext( "webgl2", { xrCompatible: true } );
	const gl = document.getElementById( "MxPo_De" ).getContext( "webgl2" );
	if ( !gl )
	{
		SyGL.Trx( "WebGL2 required: Please check your Browser" );
		return;
	}
	Sa_l.gl = gl;


	//@@@
	// BUILD TEXTURE
    // gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true );

	Sa_l.JaKuDe = gl.createTexture();
	gl.activeTexture( gl.TEXTURE0 );
	gl.bindTexture( gl.TEXTURE_2D, Sa_l.JaKuDe );

	gl.texStorage2D
	(
		gl.TEXTURE_2D // topo
		, 1 // levels
		// fmt
		, gl.RGBA8
		// DIM
		//, 2, 2
		, 512, 512
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
	SyGL.KiCho_JxRe( Sa_l );
	SyGL.KiCho_SuTy( Sa_l );


	//@@@
	// TXT SYSTEM
	//const SxKeDru_l = document.createElement("canvas").getContext("2d");
	// SxKeDru_l.canvas.width  = 512;
	// SxKeDru_l.canvas.height = 512;
	const SxKeDru_l = new OffscreenCanvas( 512, 512 ).getContext("2d");
	Sa_l.SxKeDru_l = SxKeDru_l;
	// Sa_l.SxKeDru_l.canvas.imageSmoothingEnabled = false;


	return Sa_l;
}


//==============================================
// TXT ENGINE
/*


*/
//
// textAlign = [ start, end, left, right or center ] @ default = start
// textBaseline = [ top, hanging, middle, alphabetic, ideographic, bottom ] @ default = alphabetic
// direction = [ ltr, rtl, inherit ] @ default = inherit.
// lineJoin = ["round", "bevel", "miter"];
//
//==============================================
// RENDER
function Hre7_Me__KeDru_Hry( Sa_l, SiKeDru_vsg, GeGx_wu, GeGa_wu )
{

}

// PLAN LOCATION
function Hre7_Me__KeDru_Ha( Sa_l, SiKeDru_vsg, GeGx_wu, GeGa_wu )
{
	const Sx_l = Sa_l.SxKeDru_l;

	//@@@
	// CFG
	Sx_l.font = "96px Raleway";

	Sx_l.textAlign = "start";
	Sx_l.textBaseline = "alphabetic";
	//Sx_l.textBaseline = "hanging";
	//Sx_l.textBaseline = "middle";
	//Sx_l.textBaseline = "bottom";
	Sx_l.direction = "inherit";

	//@@@
	// MEASURE
	const WaHa_l = Sx_l.measureText( SiKeDru_vsg ); // TextMetrics object
	// CSS pixels.

	WaHa_l.GyGx_wu = Math.ceil( WaHa_l.actualBoundingBoxRight + WaHa_l.actualBoundingBoxLeft );
	const KeDru__GeGx_wu = GeGx_wu + WaHa_l.actualBoundingBoxLeft;

	//!!!
	// ONLY WHAT IS RENDERED
	// WaHa_l.GyGa_wu = Math.ceil( WaHa_l.actualBoundingBoxAscent + WaHa_l.actualBoundingBoxDescent );
	// const KeDru__GeGa_wu = GeGa_wu + WaHa_l.actualBoundingBoxAscent;

	// SCOPE
	WaHa_l.GyGa_wu = Math.ceil( WaHa_l.fontBoundingBoxAscent + WaHa_l.fontBoundingBoxDescent );
	const KeDru__GeGa_wu = GeGa_wu + WaHa_l.fontBoundingBoxAscent;

	// EM appears as 'ZERO' ??
	// WaHa_l.GyGa_wu = Math.ceil( WaHa_l.emAscent + WaHa_l.emDescent );
	// const KeDru__GeGa_wu = GeGa_wu + WaHa_l.emAscent;

	// 3 BASELINES ( top/middle/bottom are RECT based )
	//TextMetrics.alphabeticBaseline
	// TextMetrics.hangingBaseline
	//TextMetrics.ideographicBaseline


	//SmaSme( "TXT SIZE ", WaHa_l.GyGx_wu, WaHa_l.GyGa_wu );

	//@@@
	// FX

	//@@@
	// DRAW
	// Clear = TRANSPARENT BLACK
	// Sx_l.clearRect( GeGx_wu, GeGa_wu, WaHa_l.GyGx_wu, WaHa_l.GyGa_wu );
	Sx_l.beginPath();
    //Sx_l.lineJoin = "round";

	Sx_l.fillStyle = "#0000FFFF";
	Sx_l.fillRect( GeGx_wu, GeGa_wu, WaHa_l.GyGx_wu, WaHa_l.GyGa_wu );

	Sx_l.fillStyle = "#FFFF00EE";
	Sx_l.fillText( SiKeDru_vsg, KeDru__GeGx_wu, KeDru__GeGa_wu );

	Sx_l.lineWidth = 4;
	Sx_l.strokeStyle = "#22221199";
	Sx_l.strokeText( SiKeDru_vsg, KeDru__GeGx_wu, KeDru__GeGa_wu );

	const KeDru__HryHa_yk = true;

	if( KeDru__HryHa_yk )
	{
		Sx_l.lineWidth = 1;

		//&&&
		// BASELINE
		Sx_l.beginPath();
		Sx_l.strokeStyle = "#FFAA00FF";
			Sx_l.setLineDash( [ 12, 4 ] );
			Sx_l.moveTo( GeGx_wu, KeDru__GeGa_wu );
			Sx_l.lineTo( GeGx_wu + WaHa_l.GyGx_wu, KeDru__GeGa_wu );
		Sx_l.stroke();


		//&&&
		// BOUNDING BOX
		Sx_l.beginPath();
		Sx_l.setLineDash( [] );
		Sx_l.strokeStyle = "#FFFFFFFF";

			Sx_l.moveTo( GeGx_wu, GeGa_wu );
			Sx_l.lineTo( GeGx_wu + WaHa_l.GyGx_wu, GeGa_wu );

			Sx_l.moveTo( GeGx_wu, GeGa_wu + WaHa_l.GyGa_wu );
			Sx_l.lineTo( GeGx_wu + WaHa_l.GyGx_wu, GeGa_wu + WaHa_l.GyGa_wu );

		Sx_l.stroke();

		Sx_l.beginPath();
		Sx_l.strokeStyle = "#00FF00FF";

			Sx_l.moveTo( GeGx_wu, GeGa_wu );
			Sx_l.lineTo( GeGx_wu, GeGa_wu + WaHa_l.GyGa_wu );

			Sx_l.moveTo( GeGx_wu + WaHa_l.GyGx_wu, GeGa_wu );
			Sx_l.lineTo( GeGx_wu + WaHa_l.GyGx_wu, GeGa_wu + WaHa_l.GyGa_wu );

		Sx_l.stroke();
	}

}


//==============================================
// SyGL_RESIZE
//==============================================
SyGL.KuGyChy_Je = function( Sa_l, MxPo_l )
{
	const width = MxPo_l.clientWidth;
	const height = MxPo_l.clientHeight;
	const needResize = width !== MxPo_l.width || height !== MxPo_l.height;
	if ( needResize )
	{
		MxPo_l.width = width;
		MxPo_l.height = height;
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
SyGL.KiCho_SuTy = function( Sa_l )
{
	const gl = Sa_l.gl;
	SmaSme( "SyGL JiJa: CLONE PROG" );

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
SyGL.KiCho_JxRe = function( Sa_l )
{
	const gl = Sa_l.gl;
	SmaSme( "SyWG_KiCho_JxRe: CLONE SEQ" );

	function createBuffer( gl, data, type = gl.ARRAY_BUFFER )
	{
		const buf = gl.createBuffer();
		gl.bindBuffer( type, buf );
		gl.bufferData( type, data, gl.STATIC_DRAW );
		return buf;
	}

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
//
// ImageBitmap
// ImageData
//
// HTMLImageElement
// HTMLCanvasElement
// HTMLVideoElement
//
// OffscreenCanvas
// VideoFrame
//
//==============================================
SyGL.KiCho_JaKu = function( Sa_l, GeGx_wu, GeGa_wu, GyGx_wu, GyGa_wu, Si__JaPo_l )
{
	//SmaSme( "SyWG_SyCho_JaPo: ENGINE CLONE FORM" );
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
// SyGL_BriYe
//==============================================
SyGL.BriYe = function( Sa_l, GiDri_duk  )
{
	// SmaSme( "SyGL_BriYe ", Sa_l );
	const gl = Sa_l.gl;


	//@@@
	// TXT
	Hre7_Me__KeDru_Ha( Sa_l, "👽👾🚀", 0, 0 );
	Hre7_Me__KeDru_Ha( Sa_l, "j-Testog", 0, 128 );
	Hre7_Me__KeDru_Ha( Sa_l, "got 🛸", 0, 256 );
	Hre7_Me__KeDru_Ha( Sa_l, "We hv Txt", 0, 384 );


	//&&&
	// UPLOAD
	//SyGL.KiCho_JaKu( Sa_l, 0, 0, 2, 2, new Uint8Array( [	255, 255, 128, 255, 0, 0, 0, 255, 255, 0, 0, 255, 255, 128, 0, 255 ] ) );
	SyGL.KiCho_JaKu( Sa_l, 0, 0, 512, 512, Sa_l.SxKeDru_l.canvas );
	if( Sa_l.vidcam )
	{
		// SyGL.KiCho_JaKu( Sa_l, 0, 0, 512, 512, Sa_l.vidcam.srcObject );
	}

	//@@@
	// RENDER
	SyGL.KuGyChy_Je( Sa_l, gl.canvas );

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
