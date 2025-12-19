//==============================================
// DoWG
/*
//-------------------
TERMS^TaVaHx:
//-------------------

RES:
- ADAPTER^KaKy
- DEVICE^KaSmz
- SMPLR^JaMi( Samplers )

- BUF^JxTo( SuTy )
- IMG^TaGwa__JaPo( Surface Deck as array of BGRA 2D Slices )

JOB:
- MEDIA_STRMs^SuTruTa (BindGroup map smplr/buf/img to Group/Bind Index )
- STRM_MODELs^SuGweKy ( BindGroupLayout collect Media Strms )
- JOB_MODELs^JiSuKy ( Model Strms for Job )
- JOB_PROG^JiHry ( Compute Programs )
- JOB_PIPE^JiGwe( Pipeline Connect Job_Model(Strm_Models) + Prog )


//-------------------
FN^TaJiDru:
//-------------------
- FN_1/4: UTIL^Sma
- FN_2/4: CLONE^KiCho
- FN_3/4: PSB^TxCho
- FN_4/4: LIFE^BriYz

*/
//==============================================
"use strict";
const DoWG = { VaSy: "DoWG" };
window.DoWG = DoWG;


//==============================================
// COUNTS
//==============================================

const CS_Gy_k = 32;
const CS_WzVu_k = 8;
let CS_Kwi_wu = 0;

//@@@
// BUF SIZES
// CRAFT as UNIFORM
// wf4_t = 16_Vu * 64bu_wf4 * 64_Ti = 64K

// REQUIRE: CHROME FLAG to Enable Tier0 Test ( Compatibility Mode )

// MAX 'T0' UNIFORM
const SuTy__BraHiFrz_k = ( 16 * 64 * 16 )

// MAX 'T1'
//const SuTy__BraHiFrz_k = ( 16 * 64 * 64 )

//==============================================
// NAMES
//==============================================

//-------------------------------------------------
// BUFFERS
const JxJy = Object.freeze
//-------------------------------------------------
({
	JoDu_qk: 0
	, WzKu_qk: 1
	, SuTy_qk: 2
	, TaVx_qk: 3
});


//-------------------------------------------------
// MEDIA ANCESTOR ( Bind Group Slots )
const SuTyDo = Object.freeze
//-------------------------------------------------
({
	// REAL ( Shared Craft & References )
	JoDu_qk: 0
	// FRMs ( Si, Se )
	, WzKu_qk: 1
	// WORK DTLs
	, WzDy_qk: 2
});

//-------------------------------------------------
// MEDIA_STRM ( BindGroup )
const SuTruTa = Object.freeze
//-------------------------------------------------
({
	SuTruTa00_qk: 0
	, SuTruTa01_qk: 1
	, SuTruTa02_qk: 2
});

//-------------------------------------------------
// STRM_MODEL ( BindGroupLayout )
const SuGweKy = Object.freeze
//-------------------------------------------------
({
	SuGweKy00_qk: 0
	, SuGweKy01_qk: 1
	, SuGweKy02_qk: 2
});


//-------------------------------------------------
// JOB_MODEL^JiSuKy
// PipelineLayout
const KySuTyJy = Object.freeze
//-------------------------------------------------
({
	KySuTyJy00_qk: 0
	, KySuTyJy01_qk: 1
	, KySuTyJy02_qk: 2
});


//-------------------------------------------------
// JOB_PIPE^JiGwe
// ComputePipeline
const JiGwe = Object.freeze
//-------------------------------------------------
({
	JiGwe00_qk: 0
	, JiGwe01_qk: 1
	, JiGwe02_qk: 2
});


//-------------------------------------------------
// JOB_PIPE^JiGwe
// ComputePipeline
const JiSuKy = Object.freeze
//-------------------------------------------------
({
	Brz_qk: 0
	, Wy_qk: 1
	, Trz_qk: 2
	, Nu_qk: 3
});


//-------------------------------------------------
// CRAFT^SuTyJy
const SuTyJy = Object.freeze
//-------------------------------------------------
({
	Cho_qk: 0
	, Nu_qk: 1
	, Brz_qk: 2

	, Hri_qk: 3
});


//-------------------------------------------------
// JOB_PROG^JiHry
// ProcessedShaderProgram
const JiHry = Object.freeze
//-------------------------------------------------
({
	  Ji00_PRESENT__MxPoCho_qk: 0
	, Ji04_PTRN__GwaBry_qk: 1
	, Ji08_GOLIFE__ToWy_qk: 2

	, Ji12_MEXEL__WaJoDi_qk: 3
	, Ji14_MEXEL__SpeJoDi_qk: 4
});

//==============================================
// DoWG_TaJiHry
// CODE FILES(LAB) or CODE NAMES(PUB)
//==============================================
const TaJiHry_vvsg =
[
	  { Va_vsg: "Ji00_PRESENT__MxPoCho", JiSuKy_q: JiSuKy.Wy_qk, SuTyJy_q: SuTyJy.Bry_qk }

	  , { Va_vsg: "Ji04_PTRN__GwaBry", JiSuKy_q: JiSuKy.Wy_qk, SuTyJy_q: SuTyJy.Bry_qk }

	, { Va_vsg: "Ji08_GOLIFE__ToWy", JiSuKy_q: JiSuKy.Wy_qk, SuTyJy_q: SuTyJy.Bry_qk }

	, { Va_vsg: "Ji12_MEXEL__WaJoDi", JiSuKy_q: JiSuKy.Wy_qk, SuTyJy_q: SuTyJy.Bry_qk }
	// , { Va_vsg: "Ji13_MEXEL__KuJoDi", JiSuKy_q: JiSuKy.Wy_qk, SuTyJy_q: SuTyJy.Bry_qk }
	, { Va_vsg: "Ji14_MEXEL__SpeJoDi", JiSuKy_q: JiSuKy.Wy_qk, SuTyJy_q: SuTyJy.Bry_qk }
	// , { Va_vsg: "Ji15_MEXEL__MzJoDi", JiSuKy_q: JiSuKy.Wy_qk, SuTyJy_q: SuTyJy.Bry_qk }

];


//==============================================
// FN_1/4: UTIL
//==============================================
//==============================================
// REPORT CFG
//==============================================
DoWG.SmaYz = function( Sa_l )
{
	if( KoDz__YzTrx_y() ) return;

	// REPORT
	SmaSme( "--------------------------------------------" );
	SmaSme( "DoWG_Yz" );
	SmaSme( "--------------------------------------------" );
	SmaSme( "- Chip:", Sa_l.KaKy_l.info.vendor );

	// REQUIRES feature 'subgroups'
	//SmaSme( "- Subgroup:", Sa_l.KaKy_l.info.subgroupMinSize, Sa_l.KaKy_l.info.subgroupMaxSize );

	SmaSme( "- Class:", Sa_l.KaKy_l.info.architecture );
	//SmaSme( Sa_l.KaSmz_l );

	SmaSme( "--------WORK ----------" );
	SmaSme( "- maxComputeInvocationsPerWorkgroup", Sa_l.KaKy_l.limits.maxComputeInvocationsPerWorkgroup, " <T1> ", 256, "<T0>", 128 );
	SmaSme( "- maxComputeWorkgroupSizeX", Sa_l.KaKy_l.limits.maxComputeWorkgroupSizeX, " <T1> ", 256, "<T0>", 128 );
	SmaSme( "- maxComputeWorkgroupSizeY", Sa_l.KaKy_l.limits.maxComputeWorkgroupSizeY, " <T1> ", 256, "<T0>", 128 );
	SmaSme( "- maxComputeWorkgroupSizeZ", Sa_l.KaKy_l.limits.maxComputeWorkgroupSizeZ, " <> ", 64 );
	SmaSme( "- maxComputeWorkgroupStorageSize", Sa_l.KaKy_l.limits.maxComputeWorkgroupStorageSize, " <> ", 16384 );
	SmaSme( "- maxComputeWorkgroupsPerDimension", Sa_l.KaKy_l.limits.maxComputeWorkgroupsPerDimension, " <> ", 65535 );


	SmaSme( "------- USED --------" );
	// SmaSme( Sa_l.DuPo__TaGwa_l );
	SmaSme( "- Shared_Deck: Gx_", Sa_l.DuPo__TaGwa_l.width, " Ga_", Sa_l.DuPo__TaGwa_l.height, " Gz_", Sa_l.DuPo__TaGwa_l.depthOrArrayLayers );
	SmaSme( "- Work_Deck: Gx_", Sa_l.WzPo__TaGwa_l.width, " Ga_", Sa_l.WzPo__TaGwa_l.height, " Gz_", Sa_l.WzPo__TaGwa_l.depthOrArrayLayers );


	SmaSme( "------- STOR --------" );

	SmaSme( "- maxBufferSize", Sa_l.KaKy_l.limits.maxBufferSize, " <> ", 268435456 );
	SmaSme( "- maxStorageBufferBindingSize", Sa_l.KaKy_l.limits.maxStorageBufferBindingSize, " <> ", 134217728 );
	SmaSme( "- maxStorageBuffersPerShaderStage", Sa_l.KaKy_l.limits.maxStorageBuffersPerShaderStage, " <> ", 8 );
	SmaSme( "- maxStorageTexturesPerShaderStage", Sa_l.KaKy_l.limits.maxStorageTexturesPerShaderStage, " <> ", 4 );

	SmaSme( "- maxTextureArrayLayers", Sa_l.KaKy_l.limits.maxTextureArrayLayers, " <> ", 256 );

	SmaSme( "- maxTextureDimension2D", Sa_l.KaKy_l.limits.maxTextureDimension2D, " <T1> ", 8192, "<T0>", 4096 );
	// SmaSme( "- maxTextureDimension3D", Sa_l.KaKy_l.limits.maxTextureDimension3D, " <> ", 2048 );
	SmaSme( "- maxUniformBufferBindingSize", Sa_l.KaKy_l.limits.maxUniformBufferBindingSize, " <T1> ", 65536, "<T0>", 16384 );

	// SmaSme( "- maxUniformBuffersPerShaderStage", Sa_l.KaKy_l.limits.maxUniformBuffersPerShaderStage, " <> ", 12 );
	SmaSme( "- minStorageBufferOffsetAlignment", Sa_l.KaKy_l.limits.minStorageBufferOffsetAlignment, " <> ", 256 );
	SmaSme( "- minUniformBufferOffsetAlignment", Sa_l.KaKy_l.limits.minUniformBufferOffsetAlignment, " <> ", 256 );

	SmaSme( "--------------------------------------------" );
}

//==============================================
// DISPLAY RESIZE
// DoWG_GyHa
//==============================================
DoWG.GyHa = function( Sa_l )
{
	if( KoDz__YzTrx_y() ) return;

	// SmaSme( "DoWG_GyHa ", Sa_l );
	const width = Math.max( 1, Math.min( Sa_l.KaSmz_l.limits.maxTextureDimension2D, Sa_l.MxPo_l.clientWidth ) );
	const height = Math.max( 1, Math.min( Sa_l.KaSmz_l.limits.maxTextureDimension2D, Sa_l.MxPo_l.clientHeight ) );

	//@@@
	// RESIZE OCCURED?
	if( width !== Sa_l.MxPo_l.width || height !== Sa_l.MxPo_l.height )
	{
		Sa_l.MxPo_l.width = width;
		Sa_l.MxPo_l.height = height;

		//&&&
		// REALLOC MxPo BACKBUF

	}
}


//==============================================
//==============================================
// FN_2/4: CLONE
//==============================================
//==============================================

//==============================================
// CLONE PROG
//==============================================
DoWG.KiCho_JiJa = async function( Sa_l )
{
	if( KoDz__YzTrx_y() ) return;
	SmaSme( "DoWG JiJa: CLONE PROG" );


	// SAVE SHADER PRECOMPILED
	// // Check for shader cache support
	// if (KaSmz_l.features.has('pipeline-cache')) {
		//   // Get cached shader binary if available
		//   const cachedShader = await caches.match('/shaders/particle.wgsl.bin');

		//   if (cachedShader) {
//     // Use pre-compiled binary shader
//     const binaryData = await cachedShader.arrayBuffer();
//     const pipeline = KaSmz_l.createRenderPipelineWithBinary(binaryData);
//   } else {
	//     // Compile and cache for future use
	//     const shader = KaSmz_l.createShaderModule({
//       code: particleShaderCode
//     });

//     const pipeline = KaSmz_l.createRenderPipeline({
	//       vertex: { module: shader, entryPoint: 'vertexMain' },
	//       fragment: { module: shader, entryPoint: 'fragmentMain' },
	//       // Other pipeline settings...
	//     });

	//     // Cache the compiled binary
	//     const binary = await pipeline.getBinary();
	//     await caches.put('/shaders/particle.wgsl.bin', new Response(binary));
	//   }
	// }

}

//==============================================
// CLONE CRAFT
//==============================================
DoWG.KiCho_SuTy = function( Sa_l )
{
	if( KoDz__YzTrx_y() ) return;
	SmaSme( "DoWG JiJa: CLONE CRAFT" );


}

//==============================================
// CLONE SEQ
//==============================================
DoWG.KiCho_JxRe = function( Sa_l )
{
	if( KoDz__YzTrx_y() ) return;
	SmaSme( "DoWG_KiCho_JxRe: CLONE SEQUENCE" );

	function createBuffer( KaSmz_l, data, usage )
	{
		const buffer = Sa_l.KaSmz_l.createBuffer(
		{
			size: data.byteLength,
			usage,
			mappedAtCreation: true,
		} );

		const dst = new data.constructor( buffer.getMappedRange() );
		dst.set( data );
		buffer.unmap();
		return buffer;
	}
	// const positions = new Float32Array( [ 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, -1, 1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1 ] );

	// Sa_l.positionBuffer = createBuffer( KaSmz_l, positions, GPUBufferUsage.STORAGE );

	//@@@
	// // Create a buffer with direct memory mapping
	//   const buffer = KaSmz_l.createBuffer({
	// 	  size: 1024 * 1024 * 16, // 16MB
	// 	  usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
	// 	  mappedAtCreation: true,
	// 	  memoryControlFlags: ['persist', 'direct'] // WebGPU 2.0 feature
	// 	});

	// 	// Get direct access to GPU memory
	// 	const arrayBuffer = buffer.getMappedRange();
	// 	const view = new Float32Array(arrayBuffer);

	// 	// Write directly to GPU memory
	// 	for (let i = 0; i < 1000000; i++) {
	// 		view[i] = Math.sin(i * 0.01);
	// 	}

	// 	// Submit without copying
	// 	buffer.unmap({ commit: true, preserve: true });
	// }

}

//==============================================
// CLONE SIGNAL via SAMPLE ARRAY
//
// Row = Block Row!
// raw textures: block width/height = 1
// compressed textures, ex: bc1-rgba-unorm, block width/height = 4 //==============================================
DoWG.KiCho_JaTi = function( Sa_l, GeGx_wuk, GeGa_wuk, GeGz_wuk, GyGx_wuk, GyGa_wuk, JaTi_vk )
{
	if( KoDz__YzTrx_y() ) return;

	//@@@
	// UPLOAD TEXTURE?
	Sa_l.KaSmz_l.queue.writeTexture
	(
		{
			texture: Sa_l.DuPo__TaGwa_l
			, mipLevel: 0
			, origin: [ GeGx_wuk, GeGa_wuk, GeGz_wuk ]
		}
		, JaTi_vk
		,
		{
			// RGBA8: 4bu/Ti
			// BCN:
			// AST:
			bytesPerRow: GyGx_wuk * 4,
			rowsPerImage: GyGa_wuk
		}
		,
		{
			width: GyGx_wuk,
			height: GyGa_wuk,
			depthOrArrayLayers: 1,
		}
	);
}


//==============================================
// CLONE SIGNAL OBJECT via HTML_DOM
//  HTMLCanvasElement, HTMLImageElement, HTMLVideoElement
// ImageBitmap, ImageData, OffscreenCanvas, or VideoFrame
//==============================================
DoWG.KiCho_JaKz = function( Sa_l, GeGx_wuk, GeGa_wuk, GeGz_wuk, GyGx_wuk, GyGa_wuk, JaKz_vk )
{
	if( KoDz__YzTrx_y() ) return;

	//@@@
	// UPLOAD TEXTURE?
	Sa_l.KaSmz_l.queue.copyExternalImageToTexture
	(
		// source
		{
			source: JaKz_vk
			, origin: [ 0, 0 ]
			, flipY: true
		}
		, // destination
		{
			texture: Sa_l.DuPo__TaGwa_l
			, mipLevel: 0
			, origin: [ GeGx_wuk, GeGa_wuk, GeGz_wuk ]
			, premultipliedAlpha: false
			// "srgb" and "display-p3"
			, colorSpace: "srgb"
		}
		, //copySize
		{
			width: GyGx_wuk,
			height: GyGa_wuk,
			depthOrArrayLayers: 1,
		}
	);
}


//==============================================
// CLONE SELF ( Move Rect for Relocate/Compact )
//==============================================
DoWG.KiCho_ChyGe = function( Sa_l, SiGeGx_wuk, SiGeGa_wuk, SiGeGz_wuk, DuGyGx_wuk, DuGyGa_wuk, SeGeGx_wuk, SeGeGa_wuk, SeGeGz_wuk )
{
/*

src.texture must have a usage of GPUTextureUsage.COPY_SRC
dst.texture must have a usage of GPUTextureUsage.COPY_DST
width must be a multiple of block width
height must be a multiple of block height
src.origin[0] or .x must be a multiple of block width
src.origin[1] or .y must be a multiple of block height
dst.origin[0] or .x must be a multiple of block width
dst.origin[1] or .y must be a multiple of block height

Sa_l.KaSmz_l.queue.copyTextureToTexture(
	// details of the source texture
	src: { texture, mipLevel: 0, origin: [0, 0, 0], aspect: "all" },

	// details of the destination texture
	dst: { texture, mipLevel: 0, origin: [0, 0, 0], aspect: "all" },

	// size:
	[ width, height, depthOrArrayLayers ] or { width, height, depthOrArrayLayers }
  );
  )
*/
}

//==============================================
// CLONE SELF ( Move Rect for Relocate/Compact )
//==============================================
DoWG.KiCho_ChyGe = function( Sa_l, SiGeGx_wuk, SiGeGa_wuk, SiGeGz_wuk, DuGyGx_wuk, DuGyGa_wuk, SeGeGx_wuk, SeGeGa_wuk, SeGeGz_wuk )
{

}

//==============================================
//==============================================
// FN_3/4: EXPORT
//==============================================
//==============================================

async function saveBlobAsFile(blob, filename)
{
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
}

//==============================================
// EXPORT TIMESTAMP
//==============================================
DoWG.TxCho_JeGi = function( Sa_l )
{
	if( KoDz__YzTrx_y() ) return;
	SmaSme( "DoWG_TxCho_JeGi: EXPORT TIMESTAMP" );
}

//==============================================
// EXPORT: RECORD
//==============================================
DoWG.TxCho_JxRe = function( Sa_l )
{
	if( KoDz__YzTrx_y() ) return;
	SmaSme( "DoWG_TxCho_JxRe: EXPORT SEQ" );
}

//==============================================
// EXPORT: SIGNAL
//==============================================
DoWG.TxCho_JaKu = function( Sa_l, Brz_wu, GeGx_wu, GeGa_wu, GeGz_wu, GyGx_wu, GyGa_wu )
{
	if( KoDz__YzTrx_y() ) return;
	SmaSme( "DoWG_TxCho_JaKu EXPORT FORM" );

	//!!!
	// bytesPerRow MULTIPLE of 256, so 4bpp => MULTIPLE of 64
	GyGx_wu = (( GyGx_wu + 63 ) & ~63 );

	if( Sa_l.TxCho__TraJaKu_v.length ) return;
	Sa_l.TxCho__KriJaKu_v.push({ Brz_wu, GeGx_wu, GeGa_wu, GeGz_wu, GyGx_wu, GyGa_wu });
}

//==============================================
//==============================================
// FN_4/4: LIFE
//==============================================
//==============================================

//==============================================
// SESSION END
//==============================================
DoWG.BriYi = function( Sa_l )
{
	SmaSme( "BriYi: " + this.VaSy );

	//@@@
	// DELETE CALLS?
	Sa_l.DuPo__TaGwa_l = null;
	Sa_l.WzPo__TaGwa_l = null;


	Sa_l.TxCho__KriJaKu_v = null;
	Sa_l.TxCho__TraJaKu_v = null;

	Sa_l.KaSmz_l = null;
	Sa_l.KaKy_l = null;
}

//==============================================
// SESSION BEGIN
/*
	CRT
	Make Session
	Start Prog Load
	Chip Adapter
	Screen
	Chip Device
	Ctx
	Smplr

	ALLOC
	CRAFT Uniform SuTy_l
	FIELD Storage JxRe_l
	SIGNAL Texture TaGwa_l

	JOB
	Media_Strms
	Strm_Models
	Job_Models
	Job_Prog
	Job_Pipe
*/
//==============================================
DoWG.BriYa = async function( Yz_l )
{
	//@@@
	// MAKE SESSION with Ji INTERFACE
	const Sa_l = SySmz__YaFz_v( DoWG );
	Sa_l.KaVy = Yz_l.KaVy;


	//-------------------------------------------------
	// PROG TXT ASYNC LOAD
	//-------------------------------------------------
	const TaJiHry_vh = [];
	TaJiHry_vvsg.forEach
	( function( Ti_v, Vx_wu )
	{
		TaJiHry_vh[ Vx_wu ] = Hrz7_Kru__ToKz_vsg( "Mx07__SuSmi_WEBPG/SuSmi01__JS/JS01_JiHry/", Ti_v.Va_vsg + ".v.Hry" );
	});

	//-------------------------------------------------
	// REQUESTS
	//-------------------------------------------------
	Sa_l.TxCho__KriJaKu_v = [];
	Sa_l.TxCho__TraJaKu_v = [];
	Sa_l.KaTy = {};


	//-------------------------------------------------
	// CHIP ADAPTER
	//-------------------------------------------------
	const pref =
	{
		// IGNORED 2025/11
		// powerPreference: 'high-performance'
		// powerPreference: 'low-power'
		// FAILS
		// forceFallbackAdapter: true
		//
		featureLevel: "compatibility"
	};

	const KaKy_l = await navigator.gpu?.requestAdapter( pref );
	if( MoDzTrx__NxHo_y( "Adapter", KaKy_l )){ return null; }
	Sa_l.KaKy_l = KaKy_l;

	const T1_yk = KaKy_l.features.has('core-features-and-limits');

	//-------------------------------------------------
	// SCREEN
	//-------------------------------------------------
	const MxPo_l = document.getElementById( 'MxPo_De' );
	Sa_l.MxPo_l = MxPo_l;
	Sa_l.MxPo__FMT_l = KaKy_l.features.has('bgra8unorm-storage')
		? navigator.gpu.getPreferredCanvasFormat()
		: 'rgba8unorm';

	//@@@
	// HDR
	const HDR_v = window.matchMedia('(dynamic-range: high)');
	const KaTy__HDR_yk = HDR_v.matches ? true : false;
	SmaSme( "- HDR", KaTy__HDR_yk, KaKy_l.limits.maxBufferSize );
	//rg11b10ufloat-renderable
	if( 0 ){ Sa_l.MxPo__FMT_l = "rgba16float"; }

	//-------------------------------------------------
	// CHIP DRIVER
	//-------------------------------------------------
	//@@@
	// AVAIL
	//const KaTy__WG2 = KaKy_l.features.has('extended-pipeline-cache');
	Sa_l.KaTy.TIMER_yk = KaKy_l.features.has('timestamp-query');


	//&&&
	// SUBGRP
	// subgroupsize:  [4, 128]
	//https://caniuse.com/?search=subgroup ~70%
	// Not Apple!
	Sa_l.KaTy.SUBGRP_yk = KaKy_l.features.has( 'subgroups' );

	//&&&
	// FMT
	// 2026: USELESS w/ MIPs ( can only BIND 1 MIP Level )
	//const KaTy__TFMT2_yk = KaKy_l.features.has( 'texture-formats-tier2' );
	//const KaTy__RWTEX_yk = KaKy_l.features.has( 'readonly_and_readwrite_storage_textures' );
	//const KaTy__HDR_yk = KaKy_l.features.has( 'rg11b10ufloat-renderable' );
	//SmaSme( "TFMT2: ", KaTy__TFMT2_yk, "RWTEX: ", KaTy__RWTEX_yk, "HDR: ", KaTy__HDR_yk );


	 //@@@
	 // DRV_REQ
	 const KaKri_k =
	 {
		 //&&&
		 // FEATS
		 requiredFeatures:
		 [
			T1_yk ? 'core-features-and-limits' : undefined
			 // if bgra8unorm exists, MUST USE!
			 , Sa_l.MxPo__FMT_l === 'bgra8unorm' ? ['bgra8unorm-storage'] : undefined

			 , Sa_l.KaTy.TIMER_yk ? 'timestamp-query' : undefined
			 , Sa_l.KaTy.SUBGRP_yk ? 'subgroups' : undefined

			//, KaTy__TFMT2_yk ? 'texture-formats-tier2' : undefined
			// , KaTy__RWTEX_yk ? 'readonly_and_readwrite_storage_textures' : undefined
			//, KaTy__HDR_yk ? 'rg11b10ufloat-renderable' : undefined

			//, KaTy__WG2_yk ? 'pipeline-statistics-query' : undefined
			//, KaTy__WG2_yk ? 'extended-pipeline-cache' : undefined
			//, KaTy__WG2_yk ? 'memory-mapping-control' : undefined

			//, KaTy__BC_yk ? 'texture-compression-bc' : undefined
			//, KaTy__ASTC_yk ? 'texture-compression-astc' : undefined

		].filter(Boolean)

		//&&&
		// LIMITS
		// Request maximum resource limits
		, requiredLimits:
		{
			// , maxStorageBufferBindingSize: adapter.limits.maxStorageBufferBindingSize
			// , maxBufferSize: adapter.limits.maxBufferSize
			// , maxComputeWorkgroupSizeX: 1024
			// , maxComputeInvocationsPerWorkgroup: 1024
		}
	};

	//@@@
	// DEV
	const KaSmz_l = await KaKy_l.requestDevice( KaKri_k );
	if( MoDzTrx__NxHo_y( "Device", KaSmz_l )){ return null; }
	Sa_l.KaSmz_l = KaSmz_l;

	const Tier_wqk = KaSmz_l.features.has('core-features-and-limits') ? 1 : 0;
	SmaSme( "- GPU_Tier: ", Tier_wqk, KaSmz_l.limits.maxBufferSize );


	//&&&
	// ERR DEV LOST
  	KaSmz_l.lost.then((info) =>
	{
		if (info.reason !== "destroyed")
		{
			// RESTART
			SmaSme( "GPU needs REFRESH/RESTART PAGE" );
		}
		MoDzTrx( "WebGPU Device Lost:" + info.message );
  	});

	//&&&
	// ERR LISTENER
	KaSmz_l.addEventListener('uncapturederror', (e) =>
	{
		MoDzTrx( "WebGPU Err: " + e.error );
		// e.error.constructor.name,
		// e.error.message,
	});

	//-------------------------------------------------
	// CANVAS-CTX
	//-------------------------------------------------
	const Sx_l = Sa_l.MxPo_l.getContext( 'webgpu' );
	if( MoDzTrx__NxHo_y( "Context", Sx_l )){ return null; }
	Sa_l.Sx_l = Sx_l;

	Sx_l.configure
	({
		device: KaSmz_l
		, format: Sa_l.MxPo__FMT_l
		// REQ for RW MxPo via ComputeShader
		, usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.STORAGE_BINDING

		//@@@
		// CLR_FMT
		// SDR means Standard Dynamic Range (standard NTSC/sRGB colorspace)
		// WCG means Wide Color Gamut (greener greens, redder reds, bluer blues)
		// HDR means High Dynamic Ranges (brightnesses brighter than normal RGB colorspace)
		, alphaMode: "opaque"
		// P3
		, colorSpace: "display-p3"
		, toneMapping: { mode: "extended" }
		// NITS 200~1200
		// Not AVAIL, colorSpace: "rec2100-display-linear"
		//, toneMapping: { mode:"hdr10", clli:{maxFALL:200, maxCLL:1200} }
	});


	// ratio of the resolution in physical pixels to the resolution in CSS pixels
	// const devicePixelRatio = window.devicePixelRatio;
	MxPo_l.width = MxPo_l.clientWidth;
	MxPo_l.height = MxPo_l.clientHeight;

	//-------------------------------------------------
	// SAMPLER^JaMi
	//-------------------------------------------------
	// 'filtering', 'non-filtering', 'comparison'
	// lodMinClamp: float= 0
	// lodMaxClamp: float= 32
	// compare: GPUCompareFunction
	// maxAnisotropy: unsigned short= 1
	//-------------------------------------------------
	Sa_l.JaMi__BILNR_k = Sa_l.KaSmz_l.createSampler
	({
		addressModeU: "clamp-to-edge",
		addressModeV: "clamp-to-edge",

		magFilter: "linear",
		minFilter: "linear",
		mipmapFilter: "nearest",
	});

	Sa_l.JaMi__TRILNR_k = Sa_l.KaSmz_l.createSampler
	({
			addressModeU: "clamp-to-edge",
			addressModeV: "clamp-to-edge",

			magFilter: "linear",
			minFilter: "linear",
			mipmapFilter: "linear",
	 } );

	 //-------------------------------------------------
	 // TIMER
	 //-------------------------------------------------
	 if( Sa_l.KaTy.TIMER_yk )
	 {
		Sa_l.capacity = 2;//Max number of timestamps we can store

		Sa_l.querySet = Sa_l.KaSmz_l.createQuerySet
		({
			label: 'TaGiMy',
			type: 'timestamp',
			count: Sa_l.capacity,
		});

		Sa_l.queryBuffer = Sa_l.KaSmz_l.createBuffer
		({
			label: 'TaGiMy_Ma',
			// 8 is 'du_t' timestamp
			size: Sa_l.capacity * 8,
			usage:
			GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC,
			//GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.STORAGE
			// | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST
		});

		Sa_l.resultBuffer = Sa_l.KaSmz_l.createBuffer
		({
			label: 'GiMy_Sma',
			size:  Sa_l.capacity * 8,
			usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
		});
	}
	else
	{
	}
	Ko.gpuTime = 0.;

	//-------------------------------------------------
	// BUF
	//-------------------------------------------------

	const MyTo__Ve_wuk = 4096;

	const MyTo__TaJx_l = KaSmz_l.createBuffer
	({
			label: "MyTo__TaJx_l"
			, usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
			, size: 4 * MyTo__Ve_wuk * MyTo__Ve_wuk
		})

	if( MoDzTrx__NxHo_y( "MyTo__TaJx_l", MyTo__TaJx_l )){ return null; }
	Sa_l.MyTo__TaJx_l = MyTo__TaJx_l;


	//-------------------------------------------------
	// IMG
	//-------------------------------------------------
	{
		let DuPo__TaGwa_l = undefined;

		//!!!
		// CREATE Large is Allowed but FAILS validation!

		let GzKri_wu = 8;
		for( ; GzKri_wu >= 0; GzKri_wu-- )
		{
			// 8K MAX = 1<13
			const TiGy_wuk = 4096;
			// 256 Layers: MAX
			// 1 << 10 => MAX (Sample down to 8x8)
			const BrzFo_wuk = 8;
			//const GzFo_wuk = 1 << GzKri_wu;
			// MEM FAIL on Mobile:
			const GzFo_wuk = GzKri_wu;

			SmaSme( "TiGy_wuk ---> ", TiGy_wuk, BrzFo_wuk, ", GzKri_wu: ", GzKri_wu, GzFo_wuk );

			Sa_l.KaSmz_l.pushErrorScope('out-of-memory');
			// Sa_l.KaSmz_l.pushErrorScope('validation');
			// Sa_l.KaSmz_l.pushErrorScope('internal');

			DuPo__TaGwa_l = Sa_l.KaSmz_l.createTexture
			({
				label: 'DuPo__TaGwa_l'
				// Not 2d-array!
				, dimension: '2d'
				, size: [ TiGy_wuk, TiGy_wuk, GzFo_wuk ]
				,  mipLevelCount: BrzFo_wuk
				, format: 'rgba8unorm'
				, sampleCount: 1
				, usage:
					GPUTextureUsage.COPY_SRC
					| GPUTextureUsage.COPY_DST

					| GPUTextureUsage.TEXTURE_BINDING
					| GPUTextureUsage.STORAGE_BINDING

					//$$$
					// EXPECTED REQUIREMENT ( Dawn Invalidates Absence )
					| GPUTextureUsage.RENDER_ATTACHMENT
			});

			await Sa_l.KaSmz_l.popErrorScope().then(( e ) =>
					{
						// if (e){	SmaSme(`NOMEM Texture Fail: ${e.message}`); }
						if( e ) { DuPo__TaGwa_l = null; }
					});

			if( DuPo__TaGwa_l ){ break; }
		}

		SmaSme( "DuPo__TaGwa_l @ ", ( 1<<GzKri_wu ), DuPo__TaGwa_l );

		if( MoDzTrx__NxHo_y( "DuPo__TaGwa_l FAILED", DuPo__TaGwa_l )){ return null; }
		// Set Always
		Sa_l.DuPo__TaGwa_l = DuPo__TaGwa_l;
	}


	const WzPo__TaGwa_l = Sa_l.KaSmz_l.createTexture
	({
		label: 'WzPo__TaGwa_l',
		dimension: '2d',
		size: [ 4096, 4096, 2 ], mipLevelCount: 1,
		format: 'rgba8unorm',
		sampleCount: 1,
		usage:
			GPUTextureUsage.COPY_SRC
			| GPUTextureUsage.COPY_DST
			| GPUTextureUsage.TEXTURE_BINDING
			| GPUTextureUsage.STORAGE_BINDING
			| GPUTextureUsage.RENDER_ATTACHMENT
	});

	if( MoDzTrx__NxHo_y( "WzPo__TaGwa_l", WzPo__TaGwa_l )){ return null; }
	Sa_l.WzPo__TaGwa_l = WzPo__TaGwa_l;


	//-------------------------------------------------
	// GROUP_LAYOUT
	//-------------------------------------------------
	// sampler:  GPUSamplerBindingType
	// - type:{ comparison, non-filtering, filtering }
	//
	// buffer:	GPUBufferBindingType
	// - "uniform": RO GPUBufferUsage.UNIFORM
	// - "storage": RW GPUBufferUsage.STORAGE.
	// - "read-only-storage": RO GPUBufferUsage.STORAGE.
	//
	// texture, GPUTextureBindingLayout
	// 	- viewDimension{ "1d", "2d-array", "2d", "3d", "cube" }
	//  - sampleType  RO
	// 	"float"
	// "unfilterable-float"
	// "depth"
	// "sint"
	// "uint"
	//
	// storageTexture: GPUStorageTextureBindingLayout
	// - access:{ read-only, read-write, write-only}
	// "write-only"	WO
	//
	// "read-write" RW
	// "read-only" RO
	//
	// - "readonly_and_readwrite_storage_textures"
	// - !!--> ONLY IF
	// - WGSL language extension is present in WGSLLanguageFeatures.
	//-------------------------------------------------

	const GOLIFE_SuTyJy = KaSmz_l.createBindGroupLayout
	({
	  label: "GOLIFE CraftType",
	  entries:
	  [{
		binding: 0
		, visibility: GPUShaderStage.COMPUTE
		, buffer: {} // Grid uniform buffer
		, hasDynamicOffset: true
	  }

	  , {
		binding: 1,
		visibility: GPUShaderStage.COMPUTE,
		buffer: { type: "read-only-storage"} // Cell state input buffer
	  }
	  , {
		binding: 2,
		visibility: GPUShaderStage.COMPUTE,
		buffer: { type: "storage"} // Cell state output buffer
	  }]
	});



	const DuPoMy_SuTyJy = KaSmz_l.createBindGroupLayout
	({
		label: "DuPoMy CraftType",
		entries:
		[
			{
				binding: 0,
				visibility: GPUShaderStage.COMPUTE,
				sampler: { type: "filtering" }
			}
			,
			{
				binding: 1,
				visibility: GPUShaderStage.COMPUTE,
				texture: { viewDimension: '2d-array' }
			}
		]
	});


	const WzPoChy_SuTyJy = KaSmz_l.createBindGroupLayout
	({
		label: "WzPoChy CraftType",
		entries:
		[
			{
				binding: 0,
				visibility: GPUShaderStage.COMPUTE,
				storageTexture: { format: 'rgba8unorm', viewDimension: '2d-array', access: "write-only" }
			}
		]
	});


	const MzPo_SuTyJy = KaSmz_l.createBindGroupLayout
	({
		label: "MzPo CraftType",
		entries:
		[
			{
				binding: 0,
				visibility: GPUShaderStage.COMPUTE,
				// REQ: texture-format-tier2 for RW rgba8 RW
				storageTexture: { viewDimension: '2d-array', format: 'rgba8unorm', access: "write-only" }
				// storageTexture: { viewDimension: '2d-array', format: 'rgba8unorm', access: "read-write" }
			}
		]
	});


	const MxPoChy_SuTyJy = KaSmz_l.createBindGroupLayout
	({
		label: "MxPo CraftType",
		entries:
		[
			{
				binding: 0,
				visibility: GPUShaderStage.COMPUTE,
				storageTexture: { format: Sa_l.MxPo__FMT_l }
			}
		]
	});


	//-------------------------------------------------
	// LAYOUT_PIPELINE
	//-------------------------------------------------
	const GOLIFE_KySuTyJy = KaSmz_l.createPipelineLayout
	({
	  label: "GOLIFE Pipeline Layout",
	  bindGroupLayouts: [ GOLIFE_SuTyJy ],
	});

	const WzPoChy_KySuTyJy = KaSmz_l.createPipelineLayout
	({
		label: "DuPoMy WzPoChy Pipeline Layout",
		bindGroupLayouts: [ DuPoMy_SuTyJy, WzPoChy_SuTyJy ],
	});

	const MzPo_KySuTyJy = KaSmz_l.createPipelineLayout
	({
		label: "MzPo Pipeline Layout",
		bindGroupLayouts: [ MzPo_SuTyJy ],
	});


	const MxPo_KySuTyJy = KaSmz_l.createPipelineLayout
	({
		label: "DuPoMy MxPoChy Pipeline Layout",
		bindGroupLayouts: [ DuPoMy_SuTyJy, MxPoChy_SuTyJy ],
	});


	//-------------------------------------------------
	// PROG: SIM
	//-------------------------------------------------


	// RESOLVE TEXT
	const JiJa08__GOLIFE_vsg = await TaJiHry_vh[ JiHry.Ji08_GOLIFE__ToWy_qk ];
	if( MoDzTrx__NxHo_y( "JiJa08__GOLIFE_vsg", JiJa08__GOLIFE_vsg )){ return null; }


	// CNV MODULE
	const JiHry02__GOLIFE = KaSmz_l.createShaderModule({
	  label: "Life simulation shader",
	  code: JiJa08__GOLIFE_vsg	});

	if( MoDzTrx__NxHo_y( "ProgObj^JiHry", JiHry02__GOLIFE )){ return null; }

	const shaderInfo = await JiHry02__GOLIFE.getCompilationInfo();
	if( shaderInfo.messages.length )
		{
			SmaSme( shaderInfo );
		// const firstMessage = shaderInfo.messages[0];
		// console.log(firstMessage.lineNum); // 9
		// console.log(firstMessage.message); // "expected ')' for function declaration"
		// console.log(firstMessage.type); // "error"

		// ALWAYS QUIT as FAIL?
		return null;
	}
	// if( MoDzTrx__NxHo_y( "ProgObj^JiHry", shaderInfo.messages.length )){ return null; }

	// DBG: SmaSme( "Conway", JiHry02__GOLIFE );

	// PIPELINE_IT

	let WzGy_wuk = 8;

	// Create a compute pipeline that updates the game state.
	const JiGwe02__GOLIFE = KaSmz_l.createComputePipeline
	({
	  label: "Simulation pipeline",
	  layout: GOLIFE_KySuTyJy,
	  compute:
	  {
		module: JiHry02__GOLIFE
		// WORKGROUP OVERRIDE
		, constants: { 0: WzGy_wuk }
	  }
	});

	if( MoDzTrx__NxHo_y( "ProgPipe^JiGwe", JiGwe02__GOLIFE )){ return null; }
	Sa_l.JiGwe02__GOLIFE =JiGwe02__GOLIFE;


	//-------------------------------------------------
	// BUF CRAFT
	//-------------------------------------------------
	// Create a uniform buffer that describes the grid.

	const Jx00__SuTy = KaSmz_l.createBuffer
	({
		label: "CRAFTS^SuTy",
		size: SuTy__BraHiFrz_k,
		usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
		minBindingSize: 64
	});
	if( MoDzTrx__NxHo_y( "Crafts^SuTy", Jx00__SuTy )){ return null; }
	Sa_l.Jx00__SuTy = Jx00__SuTy;

	// 2 VALUES in CRAFT
	const uniformArray = new Float32Array( [ CS_Gy_k, CS_Gy_k ] );
	KaSmz_l.queue.writeBuffer( Sa_l.Jx00__SuTy, 0, uniformArray );


	//-------------------------------------------------
	// BUF RECORD
	// Instructions/Scene Data
	//-------------------------------------------------
	// Create an array representing the active state of each cell.
	const cs_v = new Uint32Array( CS_Gy_k * CS_Gy_k );

	// Create two storage buffers to hold the cell state.
	const cellStateStorage =
	[
	  KaSmz_l.createBuffer
	  ({
		label: "GOLIFE State A",
		size: cs_v.byteLength,
		usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
	  }),

	  KaSmz_l.createBuffer
	  ({
		label: "GOLIFE State B",
		size: cs_v.byteLength,
		usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
	  })
	];

	// Set each cell to a random state, then copy the JavaScript array into
	// the storage buffer.
	for (let i = 0; i < cs_v.length; ++i)
	{
	  // cs_v[i] = Math.random() > 0.6 ? 1 : 0;
	  cs_v[i] = 0;
	}

	function cs_w( x, y )
	{ cs_v[ x + ( y * CS_Gy_k ) ] = 1; }

	cs_w( 1, 2 );
	cs_w( 2, 1 );
	cs_w( 3, 1 );
	cs_w( 3, 2 );
	cs_w( 3, 3 );


	// Write First Buf Only
	KaSmz_l.queue.writeBuffer(cellStateStorage[0], 0, cs_v);


	//-------------------------------------------------
	// CLN CRAFT STRM
	const SuGweKy =
	//-------------------------------------------------
	[
	  KaSmz_l.createBindGroup
	  ({
		label: "GOLIFE A MEDIA_STRM",
		layout: GOLIFE_SuTyJy,
		entries:
		[
		  { binding: 0, resource: { buffer: Sa_l.Jx00__SuTy }}
		, { binding: 1, resource: { buffer: cellStateStorage[0] }}
		, { binding: 2, resource: { buffer: cellStateStorage[1] }}
		]
		 })

	  , KaSmz_l.createBindGroup
	  ({
		label: "GOLIFE B MEDIA_STRM",
		layout: GOLIFE_SuTyJy,
		entries:
		[
			{ binding: 0, resource: { buffer: Sa_l.Jx00__SuTy }}
		  , { binding: 1, resource: { buffer: cellStateStorage[1] }}
		  , { binding: 2, resource: { buffer: cellStateStorage[0] }}
		]
	   })


	   // 2
		, KaSmz_l.createBindGroup
		({
		  label: "DuPoMy MEDIA_STRM",
		  layout: DuPoMy_SuTyJy,
		  entries:
		  [{
			binding: 0,
			resource: Sa_l.JaMi__BILNR_k
			// resource: Sa_l.JaMi__TRILNR_k
		  },{
			binding: 1,
			resource: Sa_l.DuPo__TaGwa_l
		  }] })


		  // 3
		, KaSmz_l.createBindGroup
		({
		  label: "WzPoChy MEDIA_STRM",
		  layout: WzPoChy_SuTyJy,
		  entries:
		  [{
			binding: 0,
			resource: Sa_l.WzPo__TaGwa_l
		  }] })



		  // 4
		, KaSmz_l.createBindGroup
		({
			label: "MzPo OBS",
			layout: MzPo_SuTyJy,
			entries:
			[{
				binding: 0,
				// T1_REQ: resource: Sa_l.DuPo__TaGwa_l.createView( { baseMipLevel: 0, mipLevelCount: 1, baseArrayLayer: 0, arrayLayerCount: 1 } )
				resource: Sa_l.DuPo__TaGwa_l.createView( { baseMipLevel: 0, mipLevelCount: 1 } )

			}
		]
		})


		// 5
		 , KaSmz_l.createBindGroup
		 ({
		   label: "DuPoMy MIP_SRC",
		   layout: DuPoMy_SuTyJy,
		   entries:
		   [{
			 binding: 0,
			 resource: Sa_l.JaMi__BILNR_k
			 // resource: Sa_l.JaMi__TRILNR_k
		   },{
			 binding: 1,
			 // T1_REQ: resource: Sa_l.DuPo__TaGwa_l.createView( { baseMipLevel: 0, mipLevelCount: 1, baseArrayLayer: 0, arrayLayerCount: 1 } )
			 resource: Sa_l.DuPo__TaGwa_l.createView( { baseMipLevel: 0, mipLevelCount: 1 } )

		   }] })

	];

	Sa_l.SuGweKy = SuGweKy;


	//-------------------------------------------------
	// LOADED DONE
	// RESOLVE ALL AT ONCE?
	// Or TOLERATE some fails to iterate w/ placeholders?
	//-------------------------------------------------
	const TaJiHry_Smx_k = await Promise.all( TaJiHry_vh );
	// allows iteration: Promise.allSettled( TaJiHry_vh ).then(( MSG ) => SmaSme( MSG ) );





	//-------------------------------------------------
	// PTRN
	//-------------------------------------------------
	{

	const Ji_wuk = JiHry.Ji04_PTRN__GwaBry_qk;
//	const Ji_wuk = JiHry.Ji14_MEXEL__SpeJoDi_qk;

	const JiKa_vsg = await TaJiHry_vh[ Ji_wuk ];
	if( MoDzTrx__NxHo_y( "SRC:" + TaJiHry_vvsg[ Ji_wuk ].Va_vsg, JiKa_vsg )){ return null; }

	const JiBz_vsg =`
	@id( 0 ) override WzGy_wuk: u32 = 8;
	@group(0) @binding(0) var JaKro_k: sampler;
	@group(0) @binding(1) var JaPo_k: texture_2d_array<f32>;
	@group(1) @binding(0) var SePo_k: texture_storage_2d_array<rgba8unorm, write>;
	`;


	const JiSpo_v = KaSmz_l.createShaderModule
	({
		label: TaJiHry_vvsg[ Ji_wuk ].Va_vsg
		, code: JiBz_vsg + JiKa_vsg
	  });

	  if( MoDzTrx__NxHo_y( "COMPILE:" + TaJiHry_vvsg[ Ji_wuk ].Va_vsg, JiSpo_v )){ return null; }

	   WzGy_wuk = 8;

	  Sa_l.PTRN_k = KaSmz_l.createComputePipeline
	  ({
		label: "PIPE:" + TaJiHry_vvsg[ Ji_wuk ].Va_vsg
		, layout: WzPoChy_KySuTyJy
		, compute:
		{
		  module: JiSpo_v
		  , constants: { 0: WzGy_wuk }
		}
	  });
  }


  //-------------------------------------------------
  // SHAPE
  //-------------------------------------------------
  {

  const Ji_wuk = JiHry.Ji12_MEXEL__WaJoDi_qk;

  const JiKa_vsg = await TaJiHry_vh[ Ji_wuk ];
  if( MoDzTrx__NxHo_y( "SRC:" + TaJiHry_vvsg[ Ji_wuk ].Va_vsg, JiKa_vsg )){ return null; }

  const JiBz_vsg =`
  @id( 0 ) override WzGy_wuk: u32 = 8;
  @group(0) @binding(0) var JaKro_k: sampler;
  @group(0) @binding(1) var JaPo_k: texture_2d_array<f32>;
  @group(1) @binding(0) var SePo_k: texture_storage_2d_array<rgba8unorm, write>;
  `;


  const JiSpo_v = KaSmz_l.createShaderModule
  ({
	  label: TaJiHry_vvsg[ Ji_wuk ].Va_vsg
	  , code: JiBz_vsg + JiKa_vsg
	});

	if( MoDzTrx__NxHo_y( "COMPILE:" + TaJiHry_vvsg[ Ji_wuk ].Va_vsg, JiSpo_v )){ return null; }

	 WzGy_wuk = 8;

	Sa_l.SHP_k = KaSmz_l.createComputePipeline
	({
	  label: "PIPE:" + TaJiHry_vvsg[ Ji_wuk ].Va_vsg
	  , layout: WzPoChy_KySuTyJy
	  , compute:
	  {
		module: JiSpo_v
		, constants: { 0: WzGy_wuk }
	  }
	});

}


	//-------------------------------------------------
	// PRESENT
	//-------------------------------------------------
	{
	const Ji_wuk = JiHry.Ji00_PRESENT__MxPoCho_qk;
	const JiKa_vsg = await TaJiHry_vh[ Ji_wuk ];
	if( MoDzTrx__NxHo_y( "SRC:" + TaJiHry_vvsg[ Ji_wuk ].Va_vsg, JiKa_vsg )){ return null; }

	const JiBz_vsg =`
	@id( 0 ) override WzGy_wuk: u32 = 8;
	@group(0) @binding(0) var JaKro_k: sampler;
	@group(0) @binding(1) var JaPo_k: texture_2d_array<f32>;
	@group(1) @binding(0) var MxPo_k: texture_storage_2d<${Sa_l.MxPo__FMT_l}, write>;
	`;

	const JiSpo_v = KaSmz_l.createShaderModule
	({
		label: TaJiHry_vvsg[ Ji_wuk ].Va_vsg
		, code: JiBz_vsg + JiKa_vsg
	  });

	  if( MoDzTrx__NxHo_y( "COMPILE:" + TaJiHry_vvsg[ Ji_wuk ].Va_vsg, JiSpo_v )){ return null; }

	   WzGy_wuk = 8;

	  Sa_l.PIPER_k = KaSmz_l.createComputePipeline
	  ({
		label: "PIPE:" + TaJiHry_vvsg[ Ji_wuk ].Va_vsg
		, layout: MxPo_KySuTyJy
		, compute:
		{
		  module: JiSpo_v
		  //, entryPoint: 'cs'
		  , constants: { 0: WzGy_wuk }
		}
	  });

	}




	//-------------------------------------------------
	// TEST
	//-------------------------------------------------





	//-------------------------------------------------
	// SPATIAL ENGINE BEGAN
	//-------------------------------------------------
	return SySmz__YaFx_v( Sa_l );
}

//==============================================
// SESSION PAUSE
//==============================================
DoWG.BriYo = function( Sa_l )
{
	if( KoDz__YzTrx_y() ) return;
	// SmaSme( "DoWG_BriYo: WG PAUSE" );
	//
	// Pause Tasks?
}

//==============================================
// SESSION UPDATE
//==============================================
DoWG.BriYe = async function( Sa_l, GiDri_duk  )
{
	//@@@
	// UPD if active
	if( KoDz__YzTrx_y() || ( !KoDz__YzYe_y() ) ) return;

	//@@@
	// CHECK RESIZE
	DoWG.GyHa( Sa_l );

	//@@@
	// CMD PASS BEGIN
	const KaSmz_l = Sa_l.KaSmz_l;
	const MoKro_l = KaSmz_l.createCommandEncoder( { label: 'MoKro' } );

	if( Sa_l.KaTy.TIMER_yk ){ MoKro_l.writeTimestamp( Sa_l.querySet, 0 ); }

	let TaMo_l = MoKro_l.beginComputePass( { label: 'TaMo' } );


/*

Media_Strms ROUND-ROBIN @ UNIFORMS
UNIFORM: buf-max = 64 KiB, RO
STORE: buf-max = 128 MiB, RW

maxDynamicUniformBuffersPerPipelineLayout: 8

min_uniform_buffer_offset_alignment: 256bu
min_storage_buffer_offset_alignment: 256bu

// Set binding group with a different uniform offset
dynamicOffset = 1 * m_uniformStride;



 // last two CPP! no JS! arguments of renderPass.setBindGroup, namely dynamicOffsetCount and dynamicOffsets array.
renderPass.setBindGroup(0, m_bindGroup, 1, &dynamicOffset);

// setBindGroup(index, bindGroup, dynamicOffsets, dynamicOffsetsStart,
             dynamicOffsetsLength)
// Entries in bindGroup with hasDynamicOffset: true set.
	bindingLayout.buffer.hasDynamicOffset = true;


MyUniforms uniforms;

// Upload first value
uniforms.time = 1.0f;
uniforms.color = { 0.0f, 1.0f, 0.4f, 1.0f };
m_queue.writeBuffer(m_uniformBuffer, 0, &uniforms, sizeof(uniforms));

// Upload second value
uniforms.time = -1.0f;
uniforms.color = { 1.0f, 1.0f, 1.0f, 0.7f };
m_queue.writeBuffer(m_uniformBuffer, m_uniformStride, &uniforms, sizeof(uniforms));

*/


	//@@@
	// UPLOAD



	//@@@
	// FORMULA
	{
		TaMo_l.setPipeline( Sa_l.JiGwe02__GOLIFE );
		TaMo_l.setBindGroup(0, Sa_l.SuGweKy[  CS_Kwi_wu % 2]);

		const TaWz__Fo_wuk = Math.ceil(CS_Gy_k / CS_WzVu_k);
		TaMo_l.dispatchWorkgroups( TaWz__Fo_wuk, TaWz__Fo_wuk );

		CS_Kwi_wu++;
	}

	//@@@
	// PTRN
	{
		TaMo_l.pushDebugGroup('Gen PTRN');
		{
			TaMo_l.setPipeline( Sa_l.PTRN_k );
			TaMo_l.setBindGroup( 0, Sa_l.SuGweKy[ 2 ] );
			TaMo_l.setBindGroup( 1, Sa_l.SuGweKy[ 3 ] );

			const WzGy__Fo_wuk = ( 512 >> 3 );
			TaMo_l.dispatchWorkgroups( WzGy__Fo_wuk, WzGy__Fo_wuk );
		}
		TaMo_l.popDebugGroup();
	}

	//@@@
	// SHP
	{
		TaMo_l.pushDebugGroup('Gen SHP');
		{
			TaMo_l.setPipeline( Sa_l.SHP_k );
			TaMo_l.setBindGroup( 0, Sa_l.SuGweKy[ 2 ] );
			TaMo_l.setBindGroup( 1, Sa_l.SuGweKy[ 3 ] );

			const WzGy__Fo_wuk = ( 512 >> 3 );
			TaMo_l.dispatchWorkgroups( WzGy__Fo_wuk, WzGy__Fo_wuk );
		}
		TaMo_l.popDebugGroup();
	}


	//@@@
	// MAKE
	// TaMo_l.pushDebugGroup('Gen MEXEL');
	// {
	// 	TaMo_l.setPipeline( Sa_l.MEXEL_Mz_k );
	// 	TaMo_l.setBindGroup( 0, Sa_l.SuGweKy[ 4 ] );
	// 	const WzGy__Fo_wuk = ( 512 >> 3 );
	// 	TaMo_l.dispatchWorkgroups( WzGy__Fo_wuk, WzGy__Fo_wuk );
	// }
	// TaMo_l.popDebugGroup();

	TaMo_l.end();


	//@@@
	// ADAPT


	//&&&
	// COMPRESS & MIP RESULTS
	if( 10 )
	{
		MoKro_l.copyTextureToTexture
		(
			// src:
			{ texture: Sa_l.WzPo__TaGwa_l, mipLevel: 0, origin: [0, 0, 0] }
			// dst:
			, { texture: Sa_l.DuPo__TaGwa_l, mipLevel: 0, origin: [0, 0, 0 ] }
			// size:
			, { width: 1024, height: 512 }
		);


		MoKro_l.copyTextureToTexture
		(
			// src:
			{ texture: Sa_l.WzPo__TaGwa_l, mipLevel: 0, origin: [0, 0, 0] }
			// dst:
			, { texture: Sa_l.DuPo__TaGwa_l, mipLevel: 1, origin: [0, 0, 0 ] }
			// size:
			, { width: 256, height: 256 }
		);

		MoKro_l.copyTextureToTexture
		(
			// src:
			{ texture: Sa_l.WzPo__TaGwa_l, mipLevel: 0, origin: [0, 0, 0] }
			// dst:
			, { texture: Sa_l.DuPo__TaGwa_l, mipLevel: 2, origin: [0, 0, 0 ] }
			// size:
			, { width: 128, height: 128 }
		);


	}


	//@@@
	// DISP_PRESENT
	TaMo_l = MoKro_l.beginComputePass();

	const MxPo_l = Sa_l.Sx_l.getCurrentTexture();
	let MxPo__bindGroup = KaSmz_l.createBindGroup
	({
		layout: Sa_l.PIPER_k.getBindGroupLayout(1),
		entries: [ { binding: 0, resource: MxPo_l } ],
	});

	{
		TaMo_l.setPipeline( Sa_l.PIPER_k );
		TaMo_l.setBindGroup( 0, Sa_l.SuGweKy[ 2 ] );
		TaMo_l.setBindGroup( 1, MxPo__bindGroup );

		TaMo_l.dispatchWorkgroups( ( MxPo_l.width + 7 ) >> 3, ( MxPo_l.height + 7 ) >> 3 );
	}


	//@@@
	// WzMe^WORK RUN
	TaMo_l.end();

	if( Sa_l.KaTy.TIMER_yk ){ MoKro_l.writeTimestamp( Sa_l.querySet, 1 ); }

	if( Sa_l.KaTy.TIMER_yk )
	{
		MoKro_l.resolveQuerySet
		(
			Sa_l.querySet,
			0,// index of first query to resolve
			Sa_l.capacity,//number of queries to resolve
			Sa_l.queryBuffer, 0 // destination offset
		);

		// COPY QUERY RESULTS
		if( Sa_l.resultBuffer.mapState === 'unmapped' )
		{
			MoKro_l.copyBufferToBuffer( Sa_l.queryBuffer, 0, Sa_l.resultBuffer, 0, Sa_l.resultBuffer.size);
		};
	}

	KaSmz_l.queue.submit( [ MoKro_l.finish() ] );



	//@@@
	// TIMER
	// timestamps are recorded in nanoseconds.
    if( Sa_l.KaTy.TIMER_yk && Sa_l.resultBuffer.mapState === 'unmapped' )
	{
		//SmaSme( "TIMER WAIT" );
      	await Sa_l.resultBuffer.mapAsync(GPUMapMode.READ).then(() =>
		{
			//SmaSme( "TIMER READ" );
        	const times = new BigUint64Array( Sa_l.resultBuffer.getMappedRange()	);
        	const gpuTime = ( Number(times[1] - times[0]) ) / 1000000.0;
			Ko.gpuTime = Ko.gpuTime * 0.9 + gpuTime * 0.1;
        	Sa_l.resultBuffer.unmap();
      });
    }


	//@@@
	// DNLOAD
	if( ( Sa_l.TxCho__KriJaKu_v.length > 0 ) && ( Sa_l.TxCho__TraJaKu_v.length === 0 ) )
	{
		//&&&
		// XFER Req to Use
		Sa_l.TxCho__TraJaKu_v = Sa_l.TxCho__KriJaKu_v;
		Sa_l.TxCho__KriJaKu_v = [];

		// FILL MyTo__TaJx_l
		// then READ
		let MyFo_wu = 0;
		const MoKro_l = KaSmz_l.createCommandEncoder()

		Sa_l.TxCho__TraJaKu_v.forEach
		( function( Ku_l, Vx_wu )
		{
			const ChoFo_wuk = ( 4 * Ku_l.GyGx_wu * Ku_l.GyGa_wu );

			SmaSme( "SCRNSHOT[", Vx_wu, "] Lv"
				, Ku_l.Brz_wu, " = ", Ku_l.GeGx_wu, Ku_l.GeGa_wu, Ku_l.GeGz_wu, "@",  Ku_l.GyGx_wu, Ku_l.GyGa_wu  );

			MoKro_l.copyTextureToBuffer
			(
				{ texture: Sa_l.DuPo__TaGwa_l, mipLevel: Ku_l.Brz_wu, origin: [ Ku_l.GeGx_wu, Ku_l.GeGa_wu, Ku_l.GeGz_wu ] }
				// bytesPerRow MULTIPLE of 256, so 4bpp => MULTIPLE of 64
				, { buffer: Sa_l.MyTo__TaJx_l, offset: MyFo_wu, bytesPerRow: 4 * Ku_l.GyGx_wu, rowsPerImage: Ku_l.GyGa_wu }
				, { width: Ku_l.GyGx_wu, height: Ku_l.GyGa_wu, depthOrArrayLayers: 1 }
			);

			MyFo_wu += ChoFo_wuk;
		}); // for ALL READS


		KaSmz_l.queue.submit([MoKro_l.finish()]);

		const GeZo_wuk = 0;
		await Sa_l.MyTo__TaJx_l.mapAsync( GPUMapMode.READ, GeZo_wuk, MyFo_wu );
		if( Sa_l.MyTo__TaJx_l.mapState === "mapped" )
		{
			// SAVE BUF to FILE
			const MyTo_v = Sa_l.MyTo__TaJx_l.getMappedRange( GeZo_wuk, MyFo_wu );

			// ITER SECTIONS
			const Ku_l = Sa_l.TxCho__TraJaKu_v[ 0 ];
			{
				const WzPo_l = new OffscreenCanvas( Ku_l.GyGx_wu, Ku_l.GyGa_wu );
				if( MyTo_v && WzPo_l )
				{
					SmaSme( "MyTo__Fo", MyTo_v.byteLength );

					let PoTi_v = new Uint8ClampedArray( MyTo_v );
					let IDAT_l = new ImageData( PoTi_v, Ku_l.GyGx_wu, Ku_l.GyGa_wu );

					const SxHry_l = WzPo_l.getContext("2d");
					if( SxHry_l )
					{
						SxHry_l.putImageData( IDAT_l, 0, 0 );
						// INVERT Y for IMAGE SCREENSHOT;
						SxHry_l.transform(1, 0, 0, -1, 0, Ku_l.GyGa_wu );
						SxHry_l.globalCompositeOperation = "copy"; // if you have transparent pixels
						SxHry_l.drawImage( SxHry_l.canvas,0,0);

						// SAFARI: NO webp!
						// image/webp,jpeg,png
						const blobA = await WzPo_l.convertToBlob( { type: 'image/jpeg', quality: 0.67 } );
						saveBlobAsFile( blobA, 'SHOT_A.jpeg');

						// const blobB = await WzPo_l.convertToBlob( { type: 'image/jpeg', quality: 0.33 } );
						// saveBlobAsFile( blobB, 'SHOT_B.jpeg');

						// const blobC = await WzPo_l.convertToBlob( { type: 'image/jpeg', quality: 0.00 } );
						// saveBlobAsFile( blobC, 'SHOT_C.jpeg');

					}// if ctx

					IDAT_l = null;
					PoTi_v = null;
				}// if canvas
			}// per Request

			// SIGNAL we're clear
			Sa_l.MyTo__TaJx_l.unmap();
			Sa_l.TxCho__TraJaKu_v = [];
		}// per IMG

	}// if DNLOAD


	//@@@
	// CLEANUP
	MxPo__bindGroup = null;
}

//==============================================
// END
//==============================================
