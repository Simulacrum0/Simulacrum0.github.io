const DoWG__BriDzSa__Da_wuk = "220"; 

//==============================================
//==============================================
// WG: Jy
//==============================================
//==============================================
/*
//-------------------
TERMS^TaVaHx:
//-------------------

RES:
- ADAPTER^KaKy
- DEVICE^KaSmz
- SMPLR^JaMi( Samplers )

- BUF_CRAFT^JxRe( SuTy )
- BUF_FIELD^JxRe(
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
const DoWG = { SyTu_vsg: "Do", VaDy_vsg: "WG" };
window.DoWG = DoWG;

//==============================================
// COUNTS
//==============================================

const CS_Gy_k = 32;
const CS_WzVu_k = 8;
let CS_Kwi_wu = 0;

//@@@
// RCD SIZES

// REQUIRE: CHROME FLAG to Enable Tier0 Test ( Compatibility Mode )


// TIMESTAMP MAX:
const TaGiMy__Fo_wuk = 2;

//&&&
// CRAFT as UNIFORM
// wf4_t = 16_Vu * 64bu_wf4 * 64_Ti = 64K
// MAX 'T0' UNIFORM ( 16KiB )
// const SuTy__BraHiFrz_k = ( 16 * 64 * 16 )
// MAX 'T1' UNIFORM ( 64KiB )
const SuTy__BraHiFrz_k = ( 1024 * 64 );
// MAX 'T2' UNIFORM ( 64MiB )
//const SuTy__BraHiFrz_k = ( 1024 * 1024 * 64 )

// MAX write/readback values 1024 * wf4_t
const KzDy__BraHiFrz_k = ( 1024 * 16 );

// MAX READBACK BUF
// Currently ~50MiB for XR copy buf ( storagebuf req to have at least 128MiB each )
const TxCho__Ga_wuk = 2 * 2560; // 5120
const TxCho__Gx_wuk = 2 * TxCho__Ga_wuk;
const TxCho__BraHiFrz_k = 4 * TxCho__Gx_wuk * TxCho__Ga_wuk;

//==============================================
// NAMES
//==============================================

//-------------------------------------------------
// WORK_STAGE
const WzKwe = Object.freeze
//-------------------------------------------------
({
	// NOTE: All have Dn/Upsmp ( MipDn/MagUp )
	Vu00__KiCho_qk: 0 // Upload/Repack
	, Vu01__Bry_qk: 1 // Ptrn
	, Vu02__Wy_qk: 2 // Shp & Lgt
	, Vu03__Trz_qk: 3 // Observe

	, Vu04__Nu_qk: 4 // Adapt ( Filter )
	, Vu05__DxGu_qk: 5 // Format/Compress
	, Vu06__MxPo_qk: 6 // Emit
	, Vu07__TxCho_qk: 7 // Dnload

});

//-------------------------------------------------
// BUFFERS
const JxReVa = Object.freeze
//-------------------------------------------------
({
	SuTy_qk: 0 // Crafts for all
	, SoVx_qk: 1 // Reference Values, such as Color Stacks
	, SzVx_qk: 2 // Constraints (Goal) Values, such as Scene Things
	, WzKu_qk: 3 // Specific Jobs, *USES* 1 Offset, stores offsets to other bufs;
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
	DuPoMy_qk: 0
	, DuPoTrz_qk: 1
	, WzPoChy_qk: 2
	, MzPoDe_qk: 3

	, Ste_qk: 4
	, Sto_qk: 5
	, Stu_qk: 6
	, Sty_qk: 7
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
	Bry_qk: 0
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
	, Bry_qk: 2
	, Hri_qk: 3
});


//-------------------------------------------------
// JOB_PROG^JiHry
// ProcessedShaderProgram
const JiHry_l = Object.freeze
//-------------------------------------------------
({
	  Ji00_PRESENT__MxPoCho_qk: 0
	, Ji04_PTRN__GwaBry_qk: 1
	, Ji08_GOLIFE__ToWy_qk: 2

	, Ji12_MEXEL__WaJoDi_qk: 3
	, Ji14_MEXEL__SpeJoDi_qk: 4
});


//==============================================
// CHIP FEATURE LEVELS
//==============================================
//-------------------------------------------------
// ABILITY_TIER ( Capability Level )
const DoWG__Yz = Object.freeze
//-------------------------------------------------
({
	Ti00__TraHu_qk: 0 // Unusable as Only capable of Clone
	, Ti01__JiHu_qk: 1 // Minimal Capabilities ( emulation mode )
	, Ti02__De_qk: 2 // Multipass Textures, Default WebGPU 2.0
	, Ti03__ZzKri_qk: 3 // RW Textures RGBA, SubGroups
});

const KaBxTy_v =
[
	// DoWG__Yz.Ti00__TraHu_qk
 	"Minimal-Capabilities^=Legacy Compatibility Emulation Mode"
	// DoWG__Yz.Ti01__JiHu_qk
	, "Low-Power^=Multipass Textures, Default WebGPU 2.0"
	// DoWG__Yz.Ti02__De_qk
	, "High-Power^=RW Textures RGBA, SubGroups"
	// DoWG__Yz.Ti03__ZzKri_qk
	, "Advanced-Features^=Ray-Box Intersections, SubGroup Ops"
];
Object.freeze( KaBxTy_v );

//==============================================
// CFGS
//!!!
// ONLY ENABLE 16K ONCE we get to many layers since GRANULARITY matters
//==============================================
const DoWG__SmzYz_v =
[
	{
		Vi_qk: DoWG__Yz.Ti00__TraHu_qk
		, JaVe_wu: 2048
		, JaGzFo_wu: 2
	}
	, {
		Vi_qk: DoWG__Yz.Ti01__JiHu_qk
		, JaVe_wu: 4096
		, JaGzFo_wu: 2
	}
	, {
		Vi_qk: DoWG__Yz.Ti02__De_qk
		, JaVe_wu: 8192
		, JaGzFo_wu: 2
	}
	, {
		Vi_qk: DoWG__Yz.Ti03__ZzKri_qk
		, JaVe_wu: 16384
		, JaGzFo_wu: 1
	}
];
Object.freeze( DoWG__SmzYz_v );

//==============================================
// DoWG_TaJiHry
// CODE FILES(LAB) or CODE NAMES(PUB)
//==============================================
const TaJiHry_vvsg =
[
	// { SRC NAME, ANCESTOR NAME, CONTENT_MODEL, CRAFT_TYPE }
	  { Va_vsg: "Ji00_PRESENT__MxPoCho", Do_vsg: "JiJy00__WaPo", JiSuKy_q: JiSuKy.Wy_qk, SuTyJy_q: SuTyJy.Bry_qk }

	  , { Va_vsg: "Ji04_PTRN__GwaBry", Do_vsg: "JiJy00__WaPo", JiSuKy_q: JiSuKy.Wy_qk, SuTyJy_q: SuTyJy.Bry_qk }

	, { Va_vsg: "Ji08_GOLIFE__ToWy", Do_vsg: "JiJy00__WaPo", JiSuKy_q: JiSuKy.Wy_qk, SuTyJy_q: SuTyJy.Bry_qk }

	, { Va_vsg: "Ji12_MEXEL__WaJoDi", Do_vsg: "JiJy00__WaPo", JiSuKy_q: JiSuKy.Wy_qk, SuTyJy_q: SuTyJy.Bry_qk }
	// , { Va_vsg: "Ji13_MEXEL__KuJoDi", Do_vsg: "JiJy00__WaPo", JiSuKy_q: JiSuKy.Wy_qk, SuTyJy_q: SuTyJy.Bry_qk }

	, { Va_vsg: "Ji14_MEXEL__SpeJoDi", Do_vsg: "JiJy00__WaPo", JiSuKy_q: JiSuKy.Wy_qk, SuTyJy_q: SuTyJy.Bry_qk }
	// , { Va_vsg: "Ji15_MEXEL__MzJoDi", Do_vsg: "JiJy00__WaPo", JiSuKy_q: JiSuKy.Wy_qk, SuTyJy_q: SuTyJy.Bry_qk }

];
Object.freeze( TaJiHry_vvsg );

//==============================================
//==============================================
// WG: Jy
//==============================================
//==============================================
//==============================================
// WG: UTIL
//==============================================
function DoWG__KrzYeHo_y( Sa_l )
{
	return ( !SySmz__BriYz__Ye_y( Sa_l ) || KoDz__YzTrx_y() );
}

//==============================================
// REPORT CFG
//==============================================
DoWG.SmaYz = function( Sa_l )
{
	if( DoWG__KrzYeHo_y( Sa_l )){ return; }

	// REPORT
	SmaJe( "[WG] --------------------------------------------" );
	SmaJe( "[WG] Yz" );
	SmaJe( "[WG] --------------------------------------------" );
	SmaJe( "[WG] - Chip:", Sa_l.KaKy_l.info.vendor );
	SmaJe( "[WG] - Class:", Sa_l.KaKy_l.info.architecture );

	//SmaJe( Sa_l.KaSmz_l );

	// REQUIRES feature 'subgroups'
	//SmaJe( "[WG] - SGrp_Gy:", Sa_l.KaKy_l.info.subgroupMinSize, Sa_l.KaKy_l.info.subgroupMaxSize );

	SmaJe( "[WG] --------WORK ----------" );
	SmaJe( "[WG] - WrkGrp_Invoke", Sa_l.KaKy_l.limits.maxComputeInvocationsPerWorkgroup, " <T1> ", 256, "<T0>", 128 );
	SmaJe( "[WG] - WrkGrp_X", Sa_l.KaKy_l.limits.maxComputeWorkgroupSizeX, " <T1> ", 256, "<T0>", 128 );
	SmaJe( "[WG] - WrkGrp_Y", Sa_l.KaKy_l.limits.maxComputeWorkgroupSizeY, " <T1> ", 256, "<T0>", 128 );
	SmaJe( "[WG] - WrkGrp_Z", Sa_l.KaKy_l.limits.maxComputeWorkgroupSizeZ, " <> ", 64 );
	SmaJe( "[WG] - WrkGrp_Store", Sa_l.KaKy_l.limits.maxComputeWorkgroupStorageSize, " <> ", 16384 );
	SmaJe( "[WG] - WrkGrp_MaxDim", Sa_l.KaKy_l.limits.maxComputeWorkgroupsPerDimension, " <> ", 65535 );


	SmaJe( "[WG] ------- USED --------" );
	// SmaJe( Sa_l.Spy__TaGwa_l );
	SmaJe( "[WG] - Matter_Deck: Gx_", Sa_l.Spy__TaGwa_l.width, " Ga_", Sa_l.Spy__TaGwa_l.height, " Gz_", Sa_l.Spy__TaGwa_l.depthOrArrayLayers );
	SmaJe( "[WG] - Energy_Deck: Gx_", Sa_l.Spe__TaGwa_l.width, " Ga_", Sa_l.Spe__TaGwa_l.height, " Gz_", Sa_l.Spe__TaGwa_l.depthOrArrayLayers );
	SmaJe( "[WG] - Work_Deck: Gx_", Sa_l.Wz__TaGwa_l.width, " Ga_", Sa_l.Wz__TaGwa_l.height, " Gz_", Sa_l.Wz__TaGwa_l.depthOrArrayLayers );


	SmaJe( "[WG] ------- STOR --------" );

	SmaJe( "[WG] - Buf_Gy", Sa_l.KaKy_l.limits.maxBufferSize, " <> ", 268435456 );
	SmaJe( "[WG] - StorBuf_BindSiz", Sa_l.KaKy_l.limits.maxStorageBufferBindingSize, " <> ", 134217728 );
	SmaJe( "[WG] - StorBuf_Stage", Sa_l.KaKy_l.limits.maxStorageBuffersPerShaderStage, " <> ", 8 );
	SmaJe( "[WG] - TexStor_Stage", Sa_l.KaKy_l.limits.maxStorageTexturesPerShaderStage, " <> ", 4 );

	SmaJe( "[WG] - TexLayers", Sa_l.KaKy_l.limits.maxTextureArrayLayers, " <> ", 256 );

	SmaJe( "[WG] - Tex2D_Dim", Sa_l.KaKy_l.limits.maxTextureDimension2D, " <T1> ", 8192, "<T0>", 4096 );
	// SmaJe( "[WG] - Tex3D_Dim", Sa_l.KaKy_l.limits.maxTextureDimension3D, " <> ", 2048 );
	SmaJe( "[WG] - UniBuf_BindSiz", Sa_l.KaKy_l.limits.maxUniformBufferBindingSize, " <T1> ", 65536, "<T0>", 16384 );

	// SmaJe( "[WG] - maxUniformBuffersPerShaderStage", Sa_l.KaKy_l.limits.maxUniformBuffersPerShaderStage, " <> ", 12 );
	SmaJe( "[WG] - StorBuf_Align", Sa_l.KaKy_l.limits.minStorageBufferOffsetAlignment, " <> ", 256 );
	SmaJe( "[WG] - UniBuf_Align", Sa_l.KaKy_l.limits.minUniformBufferOffsetAlignment, " <> ", 256 );

	SmaJe( "[WG] --------------------------------------------" );
}

//==============================================
// DISPLAY RESIZE REGULARLY 'Re-Run'
//==============================================
DoWG.Mz_GyHa = function( Sa_l )
{
	if( DoWG__KrzYeHo_y( Sa_l )){ return; }

	//@@@
	// max w/ 1 prevents 0
	const width = Math.max( 1, Math.min( Sa_l.KaSmz_l.limits.maxTextureDimension2D, window.devicePixelRatio * Sa_l.MxPo_Gwa_l.clientWidth ) );
	const height = Math.max( 1, Math.min( Sa_l.KaSmz_l.limits.maxTextureDimension2D, window.devicePixelRatio * Sa_l.MxPo_Gwa_l.clientHeight ) );

	//@@@
	// RESIZE OCCURED?
	if( width !== Sa_l.MxPo_Gwa_l.width || height !== Sa_l.MxPo_Gwa_l.height )
	{
		//&&&
		// UPDATE BUFS
		// SmaJe( "[WG] Mz_GyHa ", Sa_l );
		Sa_l.MxPo_Gwa_l.width = width;
		Sa_l.MxPo_Gwa_l.height = height;

		//&&&
		// REALLOC MxPo BACKBUF

	}
}

//==============================================
// RELOCATE BUF ( Move Rect for Relocate/Compact )
//==============================================
DoWG.JxRe_ChyGe = function( Sa_l, SiGeGx_wuk, SiGeGa_wuk, SiGeGz_wuk, DuGyGx_wuk, DuGyGa_wuk, SeGeGx_wuk, SeGeGa_wuk, SeGeGz_wuk )
{

}

//==============================================
// RELOCATE IMG ( Move Rect for Relocate/Compact )
//==============================================
DoWG.JaKu_ChyGe = function( Sa_l, SiGeGx_wuk, SiGeGa_wuk, SiGeGz_wuk, DuGyGx_wuk, DuGyGa_wuk, SeGeGx_wuk, SeGeGa_wuk, SeGeGz_wuk )
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
// WG: UTIL
//==============================================
//==============================================
//==============================================
// WG: CLONE
//==============================================
//==============================================

//==============================================
// CLONE PROG
//==============================================
DoWG.KiCho_JiJa = async function( Sa_l )
{
	if( DoWG__KrzYeHo_y( Sa_l )){ return; }
	SmaJe( "[WG] DoWG JiJa: CLONE PROG" );


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
	if( DoWG__KrzYeHo_y( Sa_l )){ return; }
	SmaJe( "[WG] DoWG JiJa: CLONE CRAFT" );


}

//==============================================
// CLONE SEQ
//==============================================
DoWG.KiCho_JxRe = function( Sa_l )
{
	if( DoWG__KrzYeHo_y( Sa_l )){ return; }
	SmaJe( "[WG] KiCho_JxRe: CLONE SEQUENCE" );

	function createBuffer( KaSmz_l, data, usage )
	{
		const buffer = Sa_l.KaSmz_l.createBuffer
		({
			size: data.byteLength,
			usage,
			mappedAtCreation: true,
		});

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
	// 	for( let i = 0; i < 1000000; i++) {
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
// compressed textures, ex: bc1-rgba-unorm, block width/height = 4
//==============================================
DoWG.KiCho_JaTi = function( Sa_l, GeGx_wuk, GeGa_wuk, GeGz_wuk, GyGx_wuk, GyGa_wuk, JaTi_vk )
{
	if( DoWG__KrzYeHo_y( Sa_l )){ return; }

	//@@@
	// UPLOAD TEXTURE?
	Sa_l.KaSmz_l.queue.writeTexture
	(
		{
			texture: Sa_l.Spy__TaGwa_l
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
	if( DoWG__KrzYeHo_y( Sa_l )){ return; }

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
			texture: Sa_l.Spy__TaGwa_l
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
//==============================================
// WG: CLONE
//==============================================
//==============================================
//==============================================
//==============================================
// WG: EXPORT
//==============================================
//==============================================

//==============================================
// EXPORT TIMESTAMP
//==============================================
DoWG.TxCho_JeGi = function( Sa_l )
{
	if( DoWG__KrzYeHo_y( Sa_l )){ return; }
	SmaJe( "[WG] TxCho_JeGi: EXPORT TIMESTAMP" );
}

//==============================================
// EXPORT: RECORD
//==============================================
DoWG.TxCho_JxRe = function( Sa_l )
{
	if( DoWG__KrzYeHo_y( Sa_l )){ return; }
	SmaJe( "[WG] TxCho_JxRe: EXPORT SEQ" );
}

//==============================================
// EXPORT: SIGNAL
//==============================================
DoWG.TxCho_JaKu = function( Sa_l, Brz_wu, GeGx_wu, GeGa_wu, GeGz_wu, GyGx_wu, GyGa_wu )
{
	if( DoWG__KrzYeHo_y( Sa_l )){ return; }
	SmaJe( "[WG] TxCho_JaKu EXPORT FORM" );

	//!!!
	// bytesPerRow MULTIPLE of 256, so 4bpp => MULTIPLE of 64
	GyGx_wu = (( GyGx_wu + 63 ) & ~63 );

	if( Sa_l.TxCho__TraJaKu_v.length ) return;
	Sa_l.TxCho__KriJaKu_v.push({ Brz_wu, GeGx_wu, GeGa_wu, GeGz_wu, GyGx_wu, GyGa_wu });
}

//==============================================
//==============================================
// WG: EXPORT
//==============================================
//==============================================
//==============================================
//==============================================
// WG: CMD @ SESSION UPDATE
//==============================================
//==============================================
DoWG.BriYe = async function( Sa_l, GiDri_duk  )
{

	//-------------------------------------------------
	// WORK SETUP
	//-------------------------------------------------
	if( DoWG__KrzYeHo_y( Sa_l ) ){ return; }


	//@@@
	// ERR_CHECK
	try
	{

	const DBG_yk = true;
	if( DBG_yk )
	{
		Sa_l.KaSmz_l.pushErrorScope('internal');
		Sa_l.KaSmz_l.pushErrorScope('validation');
	}

	//@@@
	// CHECK RESIZE
	DoWG.Mz_GyHa( Sa_l );

	//@@@
	// CMD PASS BEGIN
	const KaSmz_l = Sa_l.KaSmz_l;
	const MoKro_l = KaSmz_l.createCommandEncoder( { label: 'MoKro' } );

	const TaMoVa_k =
	{
		label: 'TaMo'
	};

	//&&&
	// TIMER
	if( Sa_l.KaTy.TIMER_yk )
	{
		TaMoVa_k.timestampWrites =
		{
			querySet: Sa_l.TaGiMy_Kz_l,
			beginningOfPassWriteIndex: 0,
			endOfPassWriteIndex: 1,
		};
	}

	let TaMo_l;

	//-------------------------------------------------
	// KiCho
	//-------------------------------------------------

	//@@@
	// UPLOAD


	//@@@
	// PTRN
	{
		TaMo_l = MoKro_l.beginComputePass( TaMoVa_k );
		TaMo_l.pushDebugGroup('Gen PTRN');
		{
			TaMo_l.setPipeline( Sa_l.PTRN_k );
			TaMo_l.setBindGroup( 0, Sa_l.SuGweKy_v[ SuGweKy.DuPoMy_qk ] );
			TaMo_l.setBindGroup( 1, Sa_l.SuGweKy_v[ SuGweKy.WzPoChy_qk ] );

			const WzGy__Fo_wuk = ( 512 >> 3 );
			TaMo_l.dispatchWorkgroups( WzGy__Fo_wuk, WzGy__Fo_wuk );
		}
		TaMo_l.popDebugGroup();
		TaMo_l.end();
	}

	//@@@
	// SHP
	if( 10 )
	{
		TaMo_l = MoKro_l.beginComputePass( TaMoVa_k );
		TaMo_l.pushDebugGroup('Gen SHP');
		{
			TaMo_l.setPipeline( Sa_l.SHP_k );
			TaMo_l.setBindGroup( 0, Sa_l.SuGweKy_v[ SuGweKy.DuPoMy_qk ] );
			TaMo_l.setBindGroup( 1, Sa_l.SuGweKy_v[ SuGweKy.WzPoChy_qk ] );

			// OFS/SIZ

			const WzGy__Fo_wuk = ( 512 >> 3 );
			TaMo_l.dispatchWorkgroups( WzGy__Fo_wuk, WzGy__Fo_wuk );
		}
		TaMo_l.popDebugGroup();
		TaMo_l.end();
	}


	//@@@
	// LGT
	if( 0 )
	{
		TaMo_l = MoKro_l.beginComputePass();
		TaMo_l.pushDebugGroup('Gen LGT');
		{
			TaMo_l.setPipeline( Sa_l.LGT_k );
			TaMo_l.setBindGroup( 0, Sa_l.SuGweKy_v[ SuGweKy.DuPoMy_qk ] );
			TaMo_l.setBindGroup( 1, Sa_l.SuGweKy_v[ SuGweKy.WzPoChy_qk ] );

			// OFS/SIZ

			const WzGy__Fo_wuk = ( 512 >> 3 );
			TaMo_l.dispatchWorkgroups( WzGy__Fo_wuk, WzGy__Fo_wuk );
		}
		TaMo_l.popDebugGroup();
		TaMo_l.end();
	}

	//@@@
	// MAKE
	// TaMo_l = MoKro_l.beginComputePass();
	// TaMo_l.pushDebugGroup('Gen MEXEL');
	// {
	// 	TaMo_l.setPipeline( Sa_l.MEXEL_Mz_k );
	// 	TaMo_l.setBindGroup( 0, Sa_l.SuGweKy_v[ SuGweKy.DuPoTrz_qk ] );
	// 	const WzGy__Fo_wuk = ( 512 >> 3 );
	// 	TaMo_l.dispatchWorkgroups( WzGy__Fo_wuk, WzGy__Fo_wuk );
	// }
	// TaMo_l.popDebugGroup();
	// TaMo_l.end();




	//@@@
	// ADAPT


	//-------------------------------------------------
	// FORMAT-&-COMPRESS RESULTS
	//-------------------------------------------------
	if( 10 )
	{
		MoKro_l.copyTextureToTexture
		(
			// src:
			{ texture: Sa_l.Wz__TaGwa_l, mipLevel: 0, origin: [0, 0, 0] }
			// dst:
			, { texture: Sa_l.Spy__TaGwa_l, mipLevel: 0, origin: [0, 0, 0 ] }
			// size:
			, { width: 1024, height: 512 }
		);

		MoKro_l.copyTextureToTexture
		(
			// src:
			{ texture: Sa_l.Wz__TaGwa_l, mipLevel: 0, origin: [0, 0, 0] }
			// dst:
			, { texture: Sa_l.Spy__TaGwa_l, mipLevel: 1, origin: [0, 0, 0 ] }
			// size:
			, { width: 512, height: 256 }
		);

		MoKro_l.copyTextureToTexture
		(
			// src:
			{ texture: Sa_l.Wz__TaGwa_l, mipLevel: 0, origin: [0, 0, 0] }
			// dst:
			, { texture: Sa_l.Spy__TaGwa_l, mipLevel: 2, origin: [0, 0, 0 ] }
			// size:
			, { width: 256, height: 128 }
		);
	}

	//-------------------------------------------------
	// DISP_PRESENT
	//-------------------------------------------------

	//@@@
	// DISPLAY CANVAS FETCH
	TaMo_l = MoKro_l.beginComputePass();
	{
		let MxPo_JaPo_l = Sa_l.MxPo_Sx_l.getCurrentTexture();
		let MxPo__bindGroup = KaSmz_l.createBindGroup
		({
			layout: Sa_l.MxPoCho_qk.getBindGroupLayout(1),
			entries: [ { binding: 0, resource: MxPo_JaPo_l } ],
		});

		{
			TaMo_l.setPipeline( Sa_l.MxPoCho_qk );
			TaMo_l.setBindGroup( 0, Sa_l.SuGweKy_v[ SuGweKy.DuPoMy_qk ] );
			TaMo_l.setBindGroup( 1, MxPo__bindGroup );

			TaMo_l.dispatchWorkgroups( ( MxPo_JaPo_l.width + 7 ) >> 3, ( MxPo_JaPo_l.height + 7 ) >> 3 );
		}
		// Suggest Release Dynamic Objects
		MxPo_JaPo_l = null;
		MxPo__bindGroup = null;
	}
	TaMo_l.end();


	//-------------------------------------------------
	// DNLOAD^TxCho
	//-------------------------------------------------

	//@@@
	// QUERIES
	// WzMe^TIMER RESULTS
	if( Sa_l.KaTy.TIMER_yk )
	{
		MoKro_l.resolveQuerySet
		(
			Sa_l.TaGiMy_Kz_l,
			0, // index of first query to resolve
			TaGiMy__Fo_wuk, // number of queries to resolve
			Sa_l.TaGiMy_Ma_l, 0 // destination offset
		);

		// COPY QUERY RESULTS
		if( Sa_l.ToMy_Sma_l.mapState === 'unmapped' )
		{
			MoKro_l.copyBufferToBuffer( Sa_l.TaGiMy_Ma_l, 0, Sa_l.ToMy_Sma_l, 0, Sa_l.ToMy_Sma_l.size);
		};
	}

	KaSmz_l.queue.submit( [ MoKro_l.finish() ] );
	// NOTE: there is a Promise @ onSubmittedWorkDone
	// stalls
	// await KaSmz_l.queue.onSubmittedWorkDone();


	//@@@
	// TIMER
	// timestamps are recorded in nanoseconds.
    if( Sa_l.KaTy.TIMER_yk && Sa_l.ToMy_Sma_l.mapState === 'unmapped' )
	{
		//SmaJe( "[WG] TIMER WAIT" );
      	await Sa_l.ToMy_Sma_l.mapAsync( GPUMapMode.READ ).then(() =>
		{
			//SmaJe( "[WG] TIMER READ" );
        	const times = new BigUint64Array( Sa_l.ToMy_Sma_l.getMappedRange()	);
        	const KaBxGiHa_df = ( Number(times[1] - times[0]) ) / 1000000.0;
			Ko.KaBxGiHa_df = Ko.KaBxGiHa_df * 0.9 + KaBxGiHa_df * 0.1;
        	Sa_l.ToMy_Sma_l.unmap();
      });
    }


	//@@@
	// DNLOAD SCRNSHOT
	if( ( Sa_l.TxCho__KriJaKu_v.length > 0 ) && ( Sa_l.TxCho__TraJaKu_v.length === 0 ) )
	{
		//&&&
		// XFER Req to Use
		Sa_l.TxCho__TraJaKu_v = Sa_l.TxCho__KriJaKu_v;
		Sa_l.TxCho__KriJaKu_v = [];

		// FILL TxCho__JxRe_l
		// then READ
		let MyFo_wu = 0;
		const MoKro_l = KaSmz_l.createCommandEncoder();

		Sa_l.TxCho__TraJaKu_v.forEach
		( function( Ku_l, Vx_wu )
		{
			const ChoFo_wuk = ( 4 * Ku_l.GyGx_wu * Ku_l.GyGa_wu );

			SmaJe( "[WG] SCRNSHOT[", Vx_wu, "] Lv"
				, Ku_l.Brz_wu, " = ", Ku_l.GeGx_wu, Ku_l.GeGa_wu, Ku_l.GeGz_wu, "@",  Ku_l.GyGx_wu, Ku_l.GyGa_wu  );

			MoKro_l.copyTextureToBuffer
			(
				{ texture: Sa_l.Spy__TaGwa_l, mipLevel: Ku_l.Brz_wu, origin: [ Ku_l.GeGx_wu, Ku_l.GeGa_wu, Ku_l.GeGz_wu ] }
				// bytesPerRow MULTIPLE of 256, so 4bpp => MULTIPLE of 64
				, { buffer: Sa_l.TxCho__JxRe_l, offset: MyFo_wu, bytesPerRow: 4 * Ku_l.GyGx_wu, rowsPerImage: Ku_l.GyGa_wu }
				, { width: Ku_l.GyGx_wu, height: Ku_l.GyGa_wu, depthOrArrayLayers: 1 }
			);

			MyFo_wu += ChoFo_wuk;
		}); // for ALL READS

		KaSmz_l.queue.submit([MoKro_l.finish()]);

		const GeZo_wuk = 0;
		await Sa_l.TxCho__JxRe_l.mapAsync( GPUMapMode.READ, GeZo_wuk, MyFo_wu );
		if( Sa_l.TxCho__JxRe_l.mapState === "mapped" )
		{
			// SAVE BUF to FILE
			const MyTo_v = Sa_l.TxCho__JxRe_l.getMappedRange( GeZo_wuk, MyFo_wu );

			// ITER SECTIONS
			const Ku_l = Sa_l.TxCho__TraJaKu_v[ 0 ];
			{
				// SAVE for 'continuous Blit in WebXR'
				const WzPo_Gwa_l = new OffscreenCanvas( Ku_l.GyGx_wu, Ku_l.GyGa_wu );
				if( MyTo_v && WzPo_Gwa_l )
				{
					SmaJe( "[WG] TxCho__Fo", MyTo_v.byteLength );

					let PoTi_v = new Uint8ClampedArray( MyTo_v );
					let IDAT_l = new ImageData( PoTi_v, Ku_l.GyGx_wu, Ku_l.GyGa_wu );

					const SxHry_l = WzPo_Gwa_l.getContext("2d");
					if( SxHry_l )
					{
						SxHry_l.putImageData( IDAT_l, 0, 0 );
						// INVERT Y for IMAGE SCREENSHOT;
						SxHry_l.transform(1, 0, 0, -1, 0, Ku_l.GyGa_wu );
						SxHry_l.globalCompositeOperation = "copy"; // if you have transparent pixels
						SxHry_l.drawImage( SxHry_l.canvas,0,0);

						// SAFARI: NO webp!
						// image/webp,jpeg,png
						const blobA = await WzPo_Gwa_l.convertToBlob( { type: 'image/jpeg', quality: 0.67 } );
						Hra6_Ku__ToKz_ChyBLOB( blobA, 'SHOT_A.jpeg');

						// const blobB = await WzPo_Gwa_l.convertToBlob( { type: 'image/jpeg', quality: 0.33 } );
						// Hra6_Ku__ToKz_ChyBLOB( blobB, 'SHOT_B.jpeg');

						// const blobC = await WzPo_Gwa_l.convertToBlob( { type: 'image/jpeg', quality: 0.00 } );
						// Hra6_Ku__ToKz_ChyBLOB( blobC, 'SHOT_C.jpeg');

					}// if ctx

					IDAT_l = null;
					PoTi_v = null;
				}// if canvas
			}// per Request

			// SIGNAL we're clear
			Sa_l.TxCho__JxRe_l.unmap();
			Sa_l.TxCho__TraJaKu_v = [];
		}// per IMG

	}// if DNLOAD



	//-------------------------------------------------
	// CMD ERRORS
	//-------------------------------------------------
	if( DBG_yk )
	{
		await Sa_l.KaSmz_l.popErrorScope().then(( e ) =>
		{
			if( e )
			{
				SmaJe( "[WG] CMD Validation Err:", e );
			}
		});
		await Sa_l.KaSmz_l.popErrorScope().then(( e ) =>
		{
			if( e )
			{
				SmaJe( "[WG] CMD Internal Err:", e );
			}
		});
	}

	//!!!
	// TRY CATCH
	}
	catch(e) { SmaTrx( "[WG] CMD Err:", e ); }
}

//==============================================
//==============================================
// WG: CMD @ SESSION UPDATE
//==============================================
//==============================================
//==============================================
//==============================================
// WG: LIFE
//==============================================
//==============================================

//==============================================
// SESSION PAUSE
//==============================================
DoWG.BriYo = function( Sa_l )
{
	if( DoWG__KrzYeHo_y( Sa_l )){ return; }
	//SmaSy( "[WG] BriYo: WG PAUSE" );

	// Pause Compute Tasks?
	// Reset Clocks?
}

//==============================================
// SESSION END
//==============================================
function DoWG__BriYi_SmzYz( Sa_l )
{
	SySmz__BriYz_ChyYi( Sa_l );

	//@@@
	// CLEAR REQUESTS
	Sa_l.TxCho__KriJaKu_v = [];
	Sa_l.TxCho__TraJaKu_v = [];
	Sa_l.KaTy = {};


	//@@@
	// IMG_DECKs
	Sa_l.Spe__TaGwa_l = null;
	Sa_l.Spy__TaGwa_l = null;
	Sa_l.Wz__TaGwa_l = null;

	//@@@
	// BUFs
	Sa_l.KzDy__JxRe_l = null;
	Sa_l.TxCho__JxRe_l = null;
	Sa_l.SuTy__JxRe_l = null;


	//@@@
	// QUERY
	// Timer Query Buf
	Sa_l.TaGiMy_Kz_l = null;
	// Answer  Buf
	Sa_l.ToMy_Sma_l = null;


	//@@@
	// SAMPLR
	Sa_l.JaMi__BILNR_k = null;
	Sa_l.JaMi__TRILNR_k = null;

	//@@@
	// CTX
	Sa_l.MxPo_Sx_l = null;

	//@@@
	// ADAPTER/DEVICE
	Sa_l.KaSmz_l = null;
	Sa_l.KaKy_l = null;
}

//==============================================
// SERVICE END
//==============================================
DoWG.BriYi = function( Sa_l )
{
	SmaSy( "[WG] BriYi: " + this.VaDy_vsg );

	DoWG__BriYi_SmzYz( Sa_l );

	//@@@
	// QUERY
	// Scrnshot Req (queue)
	Sa_l.TxCho__KriJaKu_v = null;
	// Scrnshot Use (export)
	Sa_l.TxCho__TraJaKu_v = null;

	//@@@
	// DISPLAYS
	Sa_l.MxPo_Gwa_l = null;
	Sa_l.WzPo_Gwa_l = null;

	//@@@
	// SRCs
	Sa_l.TaJiHry_vh = null;
}

//==============================================
// SESSION BEGIN
/*
CRT:
- Gen Session
- Load Prog Src
- Chip Adapter
- Screen
- Chip Device
- Ctx
- Smplr


- BIND/PIPE_LAYOUTs
- PROGs

ALLOC:

- SIGNAL Texture TaGwa_l
- CRAFT Uniform SuTy_l
- FIELD Storage JxRe_l
- BINDINGS

JOB:
- Media_Strms
- Strm_Models
- Job_Models
- Job_Prog
- Job_Pipe

*/
//==============================================
async function DoWG__BriYa_SmzYz( Sa_l, Yz_k )
//==============================================
{
	DoWG__BriYi_SmzYz( Sa_l );
	const SmzYz_l = DoWG__SmzYz_v[ Yz_k.YzVi_q ];
	const KwiYz_k = Ko.TaKeDy_l.KwiYz_v[ Ko.TaKeDy_l.KeDy_wu ];

	//@@@
	// LOG
	SmaJe( "[WG] TRY CFG:", Yz_k.YzVi_q, " / ", DoWG__Yz.Ti03__ZzKri_qk, " @ ", SmzYz_l.Vi_q, " JaVe:", SmzYz_l.JaVe_wu, " JaGzFo:", SmzYz_l.JaGzFo_wu );

	//-------------------------------------------------
	// CHIP ADAPTER
	//-------------------------------------------------
	const JiKri_l =
	{
		// IGNORED 2025/11
		// powerPreference: 'high-performance'
		// powerPreference: 'low-power'
		// FAILS
		// forceFallbackAdapter: true
		// COMPATIBILITY
		...( SmzYz_l.Vi_qk === DoWG__Yz.Ti00__TraHu_qk ) && { featureLevel: "compatibility" },
	};

	const KaKy_l = await navigator.gpu?.requestAdapter( JiKri_l );
	if( MoDzTrx__NxHo_y( "[WG] Adapter", KaKy_l )){ return null; }
	Sa_l.KaKy_l = KaKy_l;

	const T1_yk = KaKy_l.features.has('core-features-and-limits');

	// Default 'rgba8unorm'
	Sa_l.MxPo__FMT_l = navigator.gpu.getPreferredCanvasFormat();
	// Possible?
	// rg11b10ufloat-renderable
	// if( 0 ){ Sa_l.MxPo__FMT_l = "rgba16float"; }

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
	//const KaTy__RGB32_yk = KaKy_l.features.has( 'rg11b10ufloat-renderable' );
	//SmaSy( "[WG] TFMT2: ", KaTy__TFMT2_yk, "RWTEX: ", KaTy__RWTEX_yk, "RGB32: ", KaTy__RGB32_yk );


	//@@@
	// DRV_REQ
	const KaKri_k =
	{
		//&&&
		// FEATS
		requiredFeatures:
		 [
			 T1_yk ? 'core-features-and-limits' : undefined

			 // if bgra8unorm exists, REQUIRE
			 , Sa_l.MxPo__FMT_l === 'bgra8unorm' ? [ 'bgra8unorm-storage' ] : undefined
			 , Sa_l.KaTy.TIMER_yk ? 'timestamp-query' : undefined
			 , Sa_l.KaTy.SUBGRP_yk ? 'subgroups' : undefined

			 //, KaTy__TFMT2_yk ? 'texture-formats-tier2' : undefined
			 // , KaTy__RWTEX_yk ? 'readonly_and_readwrite_storage_textures' : undefined
			 //, KaTy__RGB32_yk ? 'rg11b10ufloat-renderable' : undefined

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
				// PROG
				maxComputeInvocationsPerWorkgroup: KaKy_l.limits.maxComputeInvocationsPerWorkgroup
				, maxComputeWorkgroupSizeX: KaKy_l.limits.maxComputeWorkgroupSizeX
				, maxComputeWorkgroupSizeY: KaKy_l.limits.maxComputeWorkgroupSizeY
				, maxComputeWorkgroupSizeZ: KaKy_l.limits.maxComputeWorkgroupSizeZ
				, maxComputeWorkgroupStorageSize: KaKy_l.limits.maxComputeWorkgroupStorageSize

				// RCD
				, maxBufferSize: KaKy_l.limits.maxBufferSize
				, maxUniformBufferBindingSize: KaKy_l.limits.maxUniformBufferBindingSize
				, maxStorageBufferBindingSize: KaKy_l.limits.maxStorageBufferBindingSize

				// IMG
				, maxTextureArrayLayers: KaKy_l.limits.maxTextureArrayLayers
				, maxTextureDimension2D: KaKy_l.limits.maxTextureDimension2D
			}
	};

	//@@@
	// DEV
	const KaSmz_l = await KaKy_l.requestDevice( KaKri_k );
	if( MoDzTrx__NxHo_y( "[WG] Device", KaSmz_l )){ return null; }
	Sa_l.KaSmz_l = KaSmz_l;

	//&&&
	// ERR SCOPES
	Sa_l.KaSmz_l.pushErrorScope('internal');
	Sa_l.KaSmz_l.pushErrorScope('validation');

	const Tier_wqk = KaSmz_l.features.has('core-features-and-limits') ? 1 : 0;
	SmaJe( "[WG] Tier: ", Tier_wqk, " LIM:", KaSmz_l.limits, " FEAT:", KaSmz_l.features, " GPU:", JiKri_l );


	//&&&
	// CHIP_TYPE
	// const powerPreference = device.adapterInfo.powerPreference;
	// if (powerPreference === "high-performance") {
	// // High-performance GPU detected. Enabling enhanced graphics settings.
	// } else if (powerPreference === "low-power") {
	// // Low-power GPU detected. Optimizing for battery life.
	// }

	//&&&
	// ERR DEV LOST
	// GPUDeviceLostReason
    // "unknown",
    // "destroyed",
	//
	// TEST_LOSS in CHROME: navigate to “about:gpucrash”
	// Note:needs CLI --disable-domain-blocking-for-3d-apis --disable-gpu-process-crash-limit
  	KaSmz_l.lost.then((e) =>
	{
		SySmz__BriYz_ChyTrx( Sa_l );

		//!!!
		// STOP RELOADING if we tried S seconds ago or T many times
		const Fe__GiDri_duk = (new Date()).getTime();
		// If its been > S milliseconds, Always try again in case of intermittent losses.
		const TraNa__GiDri_wuk = 8 * 1000;
		const Fi__GiDri_duk = ( sessionStorage.WG_BriYa__GiDri_duk ) ? ( Number( sessionStorage.WG_BriYa__GiDri_duk )) : ( Fe__GiDri_duk - TraNa__GiDri_wuk );

		const Gi__TraNa_yk = (( Fe__GiDri_duk - Fi__GiDri_duk ) >= TraNa__GiDri_wuk );

		// if the count is > T, Stop trying
		const TraNa__GrxBraHi_wuk = 3;
		const TraNa__Fo_wuk = ( sessionStorage.WG_BriYa__TraNa__Fo_wuk ) ? ( Number( sessionStorage.WG_BriYa__TraNa__Fo_wuk )) : 0;
		const Fo__TraNa_yk = ( TraNa__Fo_wuk < TraNa__GrxBraHi_wuk );

		// UPDATE STORAGE
		// Always update Count; Set to 0 if enough time elapsed.
		sessionStorage.WG_BriYa__TraNa__Fo_wuk = Gi__TraNa_yk ? 1 : ( TraNa__Fo_wuk + 1 );
		// but only update Time if enough time elapsed
		if( Gi__TraNa_yk ){ sessionStorage.WG_BriYa__GiDri_duk = Fe__GiDri_duk; }

		//!!!
		// RECREATE LIFE
		SmaTrx
		(
			"[WG] Session LOST Reason:", e.reason, " Info:", e.message
			, " GiTraNa:", Gi__TraNa_yk
			, " DUR:",  ( ( Fe__GiDri_duk - Fi__GiDri_duk ) / 1000.0 )
			, " TraNa:", TraNa__Fo_wuk
		);


		Yz_k.YzVi_q = KwiYz_k.Ne03_Hry06__SmzYz_q;
		return
		(
			( Gi__TraNa_yk || Fo__TraNa_yk )
			// TRY AGAIN
			? DoWG__BriYa_FuYz( Sa_l, Yz_k )
			// TOO many attempts or time elapsed, throw ERROR
			: MoDzTrx( Ko.KeDru_l.ALERT.TrxJy__KaBzTrx__WG_vsg )
		);

  	});

	//&&&
	// ERR LISTENER
	KaSmz_l.addEventListener('uncapturederror', (e) =>
	{
		// FIREFOX Preventing this
		// MoDzTrx( "WG Err: " + e.error );
		SmaTrx( "[WG] Surprise Err: ", e.error.constructor.name, e.error.message );
	});


	//-------------------------------------------------
	// CANVAS-CTX
	//-------------------------------------------------
	{
		const MxPo_Gwa_l = Sa_l.MxPo_Gwa_l;

		const MxPo_Sx_l = MxPo_Gwa_l.getContext( 'webgpu' );
		if( MoDzTrx__NxHo_y( "[WG] Context", MxPo_Sx_l )){ return null; }

		Sa_l.MxPo_Sx_l = MxPo_Sx_l;
		MxPo_Sx_l.configure
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
		MxPo_Gwa_l.width = MxPo_Gwa_l.clientWidth;
		MxPo_Gwa_l.height = MxPo_Gwa_l.clientHeight;
	}

	//-------------------------------------------------
	// SAMPLER^JaMi
	//-------------------------------------------------
	// 'filtering', 'non-filtering', 'comparison'
	// lodMinClamp: float= 0
	// lodMaxClamp: float= 32
	// compare: GPUCompareFunction
	// maxAnisotropy: unsigned short= 1
	//-------------------------------------------------
	{
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
	}

	//-------------------------------------------------
	// QUERY BUF
	//-------------------------------------------------
	 if( Sa_l.KaTy.TIMER_yk )
	 {
		//!!!
		// CLEAR TIME
		Ko.KaBxGiHa_df = 0.;

		//@@@
		// QUERY SET
		Sa_l.TaGiMy_Kz_l = Sa_l.KaSmz_l.createQuerySet
		({
			label: 'TaGiMy_Kz',
			type: 'timestamp',
			count: TaGiMy__Fo_wuk,
		});

		//@@@
		// TIMER BUF
		Sa_l.TaGiMy_Ma_l = Sa_l.KaSmz_l.createBuffer
		({
			label: 'TaGiMy_Ma',
			// 8 is 'du_t' timestamp size
			size: TaGiMy__Fo_wuk * 8,
			usage:
			GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC,
		});

		//@@@
		// TIMER_RESULT BUF
		Sa_l.ToMy_Sma_l = Sa_l.KaSmz_l.createBuffer
		({
			label: 'ToMy_Sma',
			size:  TaGiMy__Fo_wuk * 8,
			usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
		});
	}

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
	const WzPoChy_KySuTyJy = KaSmz_l.createPipelineLayout
	({
		label: "DuPoMy WzPoChy",
		bindGroupLayouts: [ DuPoMy_SuTyJy, WzPoChy_SuTyJy ],
	});

	const MzPo_KySuTyJy = KaSmz_l.createPipelineLayout
	({
		label: "MzPo",
		bindGroupLayouts: [ MzPo_SuTyJy ],
	});

	const MxPo_KySuTyJy = KaSmz_l.createPipelineLayout
	({
		label: "DuPoMy MxPoChy",
		bindGroupLayouts: [ DuPoMy_SuTyJy, MxPoChy_SuTyJy ],
	});


	//-------------------------------------------------
	// LOADED DONE
	// RESOLVE ALL AT ONCE?
	// Or TOLERATE some fails to iterate w/ placeholders?
	//-------------------------------------------------
	const TaJiHry_Smx_k = await Promise.all( Sa_l.TaJiHry_vh );
	// allows iteration: Promise.allSettled( Sa_l.TaJiHry_vh ).then(( MSG ) => SmaSy( "[WG] PROG Load:", MSG ) );
	let WzGy_wuk = 8;

	TaJiHry_vvsg.forEach( function( Ti_v, Vx_wu )
	{
		if( MoDzTrx__NxHo_y( "[WG] SRC:" + Ti_v.Va_vsg, Sa_l.TaJiHry_vh[ Vx_wu ] )){ return null; }

		// SmaSy( "[WG]JiHry_#", Vx_wu, " Yz:", !! (Sa_l.TaJiHry_vh[ Vx_wu ] ), " Va:", Ti_v.Va_vsg, " SuKy:", Ti_v.JiSuKy_q, " SuTyJy:", Ti_v.SuTyJy_q );
	});


	//-------------------------------------------------
	// PTRN
	//-------------------------------------------------
	{
	const Ji_wuk = JiHry_l.Ji04_PTRN__GwaBry_qk;
//	const Ji_wuk = JiHry_l.Ji14_MEXEL__SpeJoDi_qk;

	const JiKa_vsg = await Sa_l.TaJiHry_vh[ Ji_wuk ];
	if( MoDzTrx__NxHo_y( "SRC:" + TaJiHry_vvsg[ Ji_wuk ].Va_vsg, JiKa_vsg )){ return null; }

	const JiBz_vsg =`
	@group(0) @binding(0) var JaKro_k: sampler;
	@group(0) @binding(1) var JaPo_k: texture_2d_array<f32>;
	@group(1) @binding(0) var SePo_k: texture_storage_2d_array<rgba8unorm, write>;

	const WzGy_wuk: u32 = 8;
	`;

	const JiSpo_v = KaSmz_l.createShaderModule
	({
		label: TaJiHry_vvsg[ Ji_wuk ].Va_vsg
		, code: JiBz_vsg + JiKa_vsg
	  });

	  if( MoDzTrx__NxHo_y( "COMPILE:" + TaJiHry_vvsg[ Ji_wuk ].Va_vsg, JiSpo_v )){ return null; }

	  Sa_l.PTRN_k = KaSmz_l.createComputePipeline
	  ({
		label: "PIPE:" + TaJiHry_vvsg[ Ji_wuk ].Va_vsg
		, layout: WzPoChy_KySuTyJy
		, compute: { module: JiSpo_v }
	  });
  }


  //-------------------------------------------------
  // MEXEL
  //-------------------------------------------------
  {

  const Ji_wuk = JiHry_l.Ji12_MEXEL__WaJoDi_qk;

  const JiKa_vsg = await Sa_l.TaJiHry_vh[ Ji_wuk ];
  if( MoDzTrx__NxHo_y( "SRC:" + TaJiHry_vvsg[ Ji_wuk ].Va_vsg, JiKa_vsg )){ return null; }

  const JiBz_vsg =`
  @group(0) @binding(0) var JaKro_k: sampler;
  @group(0) @binding(1) var JaPo_k: texture_2d_array<f32>;
  @group(1) @binding(0) var SePo_k: texture_storage_2d_array<rgba8unorm, write>;

  const WzGy_wuk: u32 = 8;
  var<private> Gwo_wu2: vec2u;
  var<workgroup> Gwo__Vu_vwf2: array< array< vec2f, 8 >, 8>;
  `;

  // Global variables
  // private = current thread only
  // workgroup = shared with all threads in workgroup

  // ERR if using INDIRECT WzGy_wuk (Override can't be 2nd level of array );

  const JiSpo_v = KaSmz_l.createShaderModule
  ({
	  label: TaJiHry_vvsg[ Ji_wuk ].Va_vsg
	  , code: JiBz_vsg + JiKa_vsg
	});

	if( MoDzTrx__NxHo_y( "COMPILE:" + TaJiHry_vvsg[ Ji_wuk ].Va_vsg, JiSpo_v )){ return null; }

	Sa_l.SHP_k = KaSmz_l.createComputePipeline
	({
	  label: "PIPE:" + TaJiHry_vvsg[ Ji_wuk ].Va_vsg
	  , layout: WzPoChy_KySuTyJy
	  , compute: { module: JiSpo_v }
	});

	}


	//-------------------------------------------------
	// PRESENT
	//-------------------------------------------------
	{
	const Ji_wuk = JiHry_l.Ji00_PRESENT__MxPoCho_qk;
	const JiKa_vsg = await Sa_l.TaJiHry_vh[ Ji_wuk ];
	if( MoDzTrx__NxHo_y( "[WG] Prog Src:" + TaJiHry_vvsg[ Ji_wuk ].Va_vsg, JiKa_vsg )){ return null; }

	const JiBz_vsg =`
	@group(0) @binding(0) var JaKro_k: sampler;
	@group(0) @binding(1) var JaPo_k: texture_2d_array<f32>;
	@group(1) @binding(0) var MxPo_k: texture_storage_2d<${Sa_l.MxPo__FMT_l}, write>;

	const WzGy_wuk: u32 = 8;
	`;

	const JiSpo_v = KaSmz_l.createShaderModule
	({
		label: TaJiHry_vvsg[ Ji_wuk ].Va_vsg
		, code: JiBz_vsg + JiKa_vsg
	  });

	  if( MoDzTrx__NxHo_y( "[WG] Compile:" + TaJiHry_vvsg[ Ji_wuk ].Va_vsg, JiSpo_v )){ return null; }

	  Sa_l.MxPoCho_qk = KaSmz_l.createComputePipeline
	  ({
		label: "MxPoCho:" + TaJiHry_vvsg[ Ji_wuk ].Va_vsg
		, layout: MxPo_KySuTyJy
		//, entryPoint: 'cs'
		, compute: { module: JiSpo_v }
	  });
	}



	//-------------------------------------------------
	// BUF
	//-------------------------------------------------

		//@@@
		// FLAGS
		const TraTy_qk =
			// RW for DMA_COPY
			GPUTextureUsage.COPY_SRC | GPUTextureUsage.COPY_DST
			// RW for COMPUTE
			| GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.STORAGE_BINDING
			//$$$ EXPECTED REQUIREMENT ( Dawn Invalidates Absence )
			| GPUTextureUsage.RENDER_ATTACHMENT
			;

		//@@@
		// PLACEHOLDERS
		let Spy__TaGwa_l = undefined;
		let Spe__TaGwa_l = undefined;
		let Wz__TaGwa_l = undefined;

		let KzDy__JxRe_l = undefined;
		let SuTy__JxRe_l = undefined;
		let TxCho__JxRe_l = undefined;

		//@@@
		// LIMITS
		const JaVe_wuk = Math.min( SmzYz_l.JaVe_wu, KaKy_l.limits.maxTextureDimension2D );
		// const JaGzFo_wuk = SmzYz_l.JaGzFo_v[ Yz_k.YzVi_q ];
		const JaGzFo_wuk = Math.min( SmzYz_l.JaGzFo_wu, KaKy_l.limits.maxTextureArrayLayers );

		//@@@
		// DIM
		const Ti__JaVe_wuk = JaVe_wuk;
		const Wz__JaVe_wuk = JaVe_wuk;

		// MIP
		// Sample down to 8x8
		const BrzFo_wuk = Math.min( Math.log2( JaVe_wuk ) - 3, 8 );

		//@@@
		// ERR PUSH
		Sa_l.KaSmz_l.pushErrorScope('out-of-memory');

		//@@@
		// MAKE GOOD STATUS
		let TrzRi_y = true;

		//@@@
		// IMG
		// LG to SM
		SmaJe( "[WG] ASK❓Ve:", JaVe_wuk, " GzFo: ", JaGzFo_wuk, " BrzFo:", BrzFo_wuk );


			//&&&
			// IMG MATTER
			if( TrzRi_y )
			{
				Spy__TaGwa_l = Sa_l.KaSmz_l.createTexture
				({
					label: 'Spy__TaGwa_l'
					, dimension: '2d'
					, size: [ Ti__JaVe_wuk, Ti__JaVe_wuk, JaGzFo_wuk ],  mipLevelCount: BrzFo_wuk
					, format: 'rgba8unorm'
					, sampleCount: 1
					, usage: TraTy_qk
				});
				TrzRi_y = ( !!Spy__TaGwa_l );
			}
			//&&&
			// IMG ENERGY
			if( TrzRi_y )
			{
				Spe__TaGwa_l = Sa_l.KaSmz_l.createTexture
				({
					label: 'Spe__TaGwa_l'
					, dimension: '2d'
					, size: [ Ti__JaVe_wuk, Ti__JaVe_wuk, JaGzFo_wuk ],  mipLevelCount: BrzFo_wuk
					, format: 'rgba8unorm'
					, sampleCount: 1
					, usage: TraTy_qk
				});

				TrzRi_y = ( !!Spe__TaGwa_l );
			}
			//&&&
			// IMG WORK
			if( TrzRi_y )
			{
				Wz__TaGwa_l = Sa_l.KaSmz_l.createTexture
				({
					label: 'Wz__TaGwa_l',
					dimension: '2d',
					size: [ Wz__JaVe_wuk, Wz__JaVe_wuk, 2 ], mipLevelCount: 1,
					format: 'rgba8unorm',
					sampleCount: 1,
					usage: TraTy_qk
				});
				TrzRi_y = ( !!Wz__TaGwa_l );
			}
			//@@@
			// RCD
			//&&&
			// OBJS
			if( TrzRi_y )
			{
				KzDy__JxRe_l = Sa_l.KaSmz_l.createBuffer
				({
					label: 'KzDy__JxRe',
					size:  KzDy__BraHiFrz_k,
					usage: GPUBufferUsage.COPY_SRC,
				});
				TrzRi_y = ( !!Wz__TaGwa_l );
			}
			//&&&
			// PSBCLONE
			if( TrzRi_y )
			{
				TxCho__JxRe_l = KaSmz_l.createBuffer
			({
					label: "TxCho__JxRe_l"
					, usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
					, size: TxCho__BraHiFrz_k
				})
				TrzRi_y = ( !!Wz__TaGwa_l );
			}
			//&&&
			// CRAFTS
			if( TrzRi_y )
			{
				SuTy__JxRe_l = Sa_l.KaSmz_l.createBuffer
				({
					label: 'SuTy__JxRe',
					size:  SuTy__BraHiFrz_k,
					usage: GPUBufferUsage.UNIFORM,
				});
				TrzRi_y = ( !!Wz__TaGwa_l );
			}

			//&&&
			// LOG RESULTS
			//SmaJe( "[WG] RESULTS ⁉️=", TrzRi_y, " ,  " Ve:", JaGzFo_wuk );
			//SmaJe( "[WG] RESULTS ⁉️= ", "Spy", Spy__TaGwa_l, "Spe", Spe__TaGwa_l, "Wz", Wz__TaGwa_l, " KzDy", KzDy__JxRe_l, " TxCho", TxCho__JxRe_l, " SuTy", SuTy__JxRe_l  );

	//&&&
	// ERR CLEAR via POP on no Mem
	// EXPECT FAILS
	await Sa_l.KaSmz_l.popErrorScope().then(( e ) =>
	{
		if( e )
		{
			// SmaSy( "[WG]: MEM_REQ Kri:", Ti__JaVe_wuk,  " #", ( JaGzFo_wuk ), e.message );

			Spy__TaGwa_l?.destroy();
			Spe__TaGwa_l?.destroy();
			Wz__TaGwa_l?.destroy();

			KzDy__JxRe_l?.destroy();
			TxCho__JxRe_l?.destroy();
			SuTy__JxRe_l?.destroy();


			Spy__TaGwa_l = undefined;
			Spe__TaGwa_l = undefined;
			Wz__TaGwa_l = undefined;

			KzDy__JxRe_l = undefined;
			TxCho__JxRe_l = undefined;
			SuTy__JxRe_l = undefined;

			return null;
		}
	});


	//&&&
	// STOR
	Sa_l.Spy__TaGwa_l = Spy__TaGwa_l;
	Sa_l.Spe__TaGwa_l = Spe__TaGwa_l;
	Sa_l.Wz__TaGwa_l = Wz__TaGwa_l;

	Sa_l.KzDy__JxRe_l = KzDy__JxRe_l;
	Sa_l.TxCho__JxRe_l = TxCho__JxRe_l;
	Sa_l.SuTy__JxRe_l = SuTy__JxRe_l;

	//@@@
	// LOG
	// SmaSy( "[WG] Spy", Spy__TaGwa_l );
	// SmaSy( "[WG] Spe", Spe__TaGwa_l );
	// SmaSy( "[WG] Wz", Wz__TaGwa_l );

	// SmaSy( "[WG] KzDy", KzDy__JxRe_l );
	// SmaSy( "[WG] TxCho", TxCho__JxRe_l );
	// SmaSy( "[WG] SuTy", SuTy__JxRe_l );


	//-------------------------------------------------
	//  CRAFT STRMs
	//-------------------------------------------------
	Sa_l.SuGweKy_v =
		[
		  KaSmz_l.createBindGroup
		({
		  label: "DuPoMy MEDIA_STRM",
		  layout: DuPoMy_SuTyJy,
		  entries:
		  [{
			binding: 0,
			resource: Sa_l.JaMi__BILNR_k
			// resource: Sa_l.JaMi__TRILNR_k
		  }
		  ,{ binding: 1, resource: Sa_l.Spy__TaGwa_l }
		]})

		   , KaSmz_l.createBindGroup
		   ({
			 label: "DuPoTrz MIP_SRC",
			 layout: DuPoMy_SuTyJy,
			 entries:
			 [{
			   binding: 0,
			   resource: Sa_l.JaMi__BILNR_k
			   // resource: Sa_l.JaMi__TRILNR_k
			 },{
			   binding: 1,
			   // T1_REQ: resource: Sa_l.Spy__TaGwa_l.createView( { baseMipLevel: 0, mipLevelCount: 1, baseArrayLayer: 0, arrayLayerCount: 1 } )
			   resource: Sa_l.Spy__TaGwa_l.createView( { baseMipLevel: 0, mipLevelCount: 1 } )

			 }] })

		, KaSmz_l.createBindGroup
		({
		  label: "WzPoChy MEDIA_STRM",
		  layout: WzPoChy_SuTyJy,
		  entries:
		  [{
			binding: 0,
			resource: Sa_l.Wz__TaGwa_l
		  }] })

		, KaSmz_l.createBindGroup
		({
			label: "MzPoDe OBS",
			layout: MzPo_SuTyJy,
			entries:
			[{
				binding: 0,	resource: Sa_l.Spy__TaGwa_l.createView( { baseMipLevel: 0, mipLevelCount: 1 } )
				// T1_REQ: resource: Sa_l.Spy__TaGwa_l.createView( { baseMipLevel: 0, mipLevelCount: 1, baseArrayLayer: 0, arrayLayerCount: 1 } )
			}]})

		];


	//-------------------------------------------------
	// CHECK on Final ERRORS
	//-------------------------------------------------
	await Sa_l.KaSmz_l.popErrorScope().then(( e ) =>
	{
		if( e )
		{
			SmaSy( "[WG] Validation Err:", e );
			return null;
		}
	});
	await Sa_l.KaSmz_l.popErrorScope().then(( e ) =>
	{
		if( e )
		{
			SmaSy( "[WG] Internal Err:", e );
			return null;
		}
	});

	//-------------------------------------------------
	// SPATIAL ENGINE BEGAN
	//-------------------------------------------------

	//@@@
	// SAVE SUCCESS
	KwiYz_k.Ne03_Hry06__SmzYz_q = Yz_k.YzVi_q;
	Hrz4_Bu__TaKeDy__ChyGry();

	//@@@
	// REPORT
	SmaJe( "[WG] HDR", Sa_l.KaTy__HDR_y, "MxPo__FMT", Sa_l.MxPo__FMT_l );

	const YzGry_vsg = KaBxTy_v[ Yz_k.YzVi_q ];
	const YzKwx_wu = YzGry_vsg.indexOf( "^=" );

	const YzVa_vsg = YzGry_vsg.substring( 0, YzKwx_wu );
	const YzHx_vsg = YzGry_vsg.substring( YzKwx_wu + 1);

	SmaJe( "[WG] READY CFG:", Yz_k.YzVi_q, " @ ", YzVa_vsg, " = ", YzHx_vsg );

	return SySmz__YaFx_v( Sa_l );
}

//==============================================
async function DoWG__BriYa_FuYz( Sa_l, Yz_k )
//==============================================
{
	//@@@
	// RETURN OBJECT ONCE
	do
	{
		await DoWG__BriYa_SmzYz( Sa_l, Yz_k );
		if( SySmz__BriYz__Ye_y( Sa_l ) ) break;
	}
	while( Yz_k.YzVi_q-- );


	//@@@
	// SAVE RESULTS only if succeeded
	if( SySmz__BriYz__Ye_y( Sa_l ) )
	{
		return Sa_l;
	}

	//@@@
	// ELSE ERR
	MoDzTrx( Ko.KeDru_l.ALERT.TrxJy__KaBzTrx__WG_vsg );
	return null;
}

//==============================================
DoWG.BriYa = async function( Yz_k )
//==============================================
{
	//-------------------------------------------------
	// VERIFY
	//-------------------------------------------------

	//@@@
	// MAKE SESSION with Ji INTERFACE
	const Sa_l = SySmz__YaFz_v( DoWG );

	//@@@
	// CDN SYNC
	const CDN_Version_yk = ( BriDzSa__Da_wuk == DoWG__BriDzSa__Da_wuk );
	if( MoDzTrx__NxHo_y( "[WG] Version Behind (Try again in 2~15min?)", CDN_Version_yk )){ return null; }


	//-------------------------------------------------
	// PROG TXT ASYNC LOAD
	//-------------------------------------------------
	Sa_l.TaJiHry_vh = [];
	TaJiHry_vvsg.forEach( function( Ti_v, Vx_wu )
	{
		Sa_l.TaJiHry_vh[ Vx_wu ] = Hra6_Ku__ToKz_My__vsg( "Mx07__SuSmi_WEBPG/SuSmi01__JS/JS01_JiHry/", Ti_v.Va_vsg + ".v.Hry" );
	});


	//-------------------------------------------------
	// SCREEN
	//-------------------------------------------------

	//@@@
	// CANVAS
	Sa_l.MxPo_Gwa_l = document.getElementById( 'MxPo_Bri' );
	if( MoDzTrx__NxHo_y( "[WG] Canvas", Sa_l.MxPo_Gwa_l )){ return null; }

	//@@@
	//  HDR
	const HDR_v = window.matchMedia('(dynamic-range: high)');
	Sa_l.KaTy__HDR_y = HDR_v.matches ? true : false;

	//-------------------------------------------------
	// CFG_FIND MATCH
	//-------------------------------------------------
	return await DoWG__BriYa_FuYz( Sa_l, Yz_k );
}

//==============================================
//==============================================
// WG LIFE
//==============================================
//==============================================
