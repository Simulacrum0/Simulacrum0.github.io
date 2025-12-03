//==============================================
// DoWG
/*
SyKzJy:
- ADAPTER^KaKy
- DEVICE^KaSmz

- BUF^JxTi( rect, SuTy )
- IMG^TaGwa__JaPo( Surface Deck as array of BGRA 2D Slices )
- SMP^JaMy( Samplers )
- PROG^JiSpo [ JiHro, JiGwa, JiGe ( Compute, Surface-Sampled, Rasterized-Vertices )]
-
- BIND_GROUP^TruSu( buf/img map to Index )
- BIND_GROUP_LAYOUT^TruKy
- PIPELINE_LAYOUT^TruTa ( Groupof TruKy )

- PIPE^JiGwe( Connect Bind & Prog )

- CMD^MoKro( Encode Pass^WzTra as Pipe, Bind, & Raster-Bufs or Compute-Workgroups )
*/
//==============================================
"use strict";
const DoWG = { VaSy: "DoWG" };
window.DoWG = DoWG;


//==============================================
// QUALITIES
//==============================================
const CS_Gy_k = 32;
const CS_WzVu_k = 8;
let CS_Kwi_wu = 0;


//-------------------------------------------------
// BUF
const TaJx_qk = Object.freeze
//-------------------------------------------------
({
	TaJx00: 0
	, TaJx01: 1
	, TaJx02: 2

});

//@@@
// CRAFT
// wf4_t = 16 * 64 slots * 64 entries = 64K
const SuTy__BraHiFrz_k = ( 16 * 64 * 64 )

//-------------------------------------------------
// SAMPLER
const JaMy_qk = Object.freeze
//-------------------------------------------------
({
	JaMy00: 0
	, JaMy01: 1
	, JaMy02: 2

});



//-------------------------------------------------
// PROG
// Combos of Shaders
const JiSpo_qk = Object.freeze
//-------------------------------------------------
({
	JiSpo00: 0
	, JiSpo01: 1
	, JiSpo02: 2

});


//-------------------------------------------------
// PIPE
// Program for Use
const JiGwe_qk = Object.freeze
//-------------------------------------------------
({
	JiGwe00: 0
	, JiGwe01: 1
	, JiGwe02: 2

});



//==============================================
// DoWG_BriYi
//==============================================
DoWG.BriYi = function( Sa_l )
{
	SmaSme( "BriYi: " + this.VaSy );

	//@@@
	// DELETE CALLS?
	Sa_l.TaGwa__JaPo_l = null;
	Sa_l.KaSmz_l = null;
	Sa_l.KaKy_l = null;
}

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
	SmaSme( "Chip: " + Sa_l.KaKy_l.info.vendor );
	//SmaSme( Sa_l.KaKy_l );

	SmaSme( "Class: " + Sa_l.KaKy_l.info.architecture );
	//SmaSme( Sa_l.KaSmz_l );

	SmaSme( "Surface_Deck: " + Sa_l.TaGwa__JaPo_l.width + ", " + Sa_l.TaGwa__JaPo_l.height + ", " + Sa_l.TaGwa__JaPo_l.depthOrArrayLayers );
	// SmaSme( Sa_l.TaGwa__JaPo_l );

	SmaSme( "--------------------------------------------" );
}

//==============================================
// DoWG_
//==============================================
const JiJa_vs = /* wgsl */ `

  struct VQuad_t {
      @location(0) position: vec4f,
      @location(1) texcoord: vec2f,
  };

  struct FQuad_t
  {
    @builtin(position) Ge_wf4: vec4f,
    @location(0) JaMy_wf2: vec2f,
	@location(1) JaChy_wf2: vec2f,
  };

@vertex fn main
(
  @builtin(vertex_index) Vx_wu : u32

 ) -> FQuad_t
 {
 var o: FQuad_t;

  var pos = array<vec2f, 6>
  (
    vec2(-1.0, -1.0),
    vec2(-1.0, 1.0 ),
    vec2( 1.0, -1.0 ),

    vec2( 1.0, -1.0 ),
    vec2( 1.0, 1.0 ),
    vec2(-1.0, 1.0 )
  );

  o.Ge_wf4 = vec4f( pos[ Vx_wu ], 0.0, 1.0 );

  o.JaMy_wf2 = vec2( pos[ Vx_wu ] ) * 0.5 + vec2( 0.5 );

  o.JaChy_wf2 = vec2( pos[ Vx_wu ] ) * 0.5 + vec2( 0.5 );


  return o;
}
`;


//@@@
// PASSES
// Grp0: Frame
// Grp1: Dst
// Grp2: Task
//
// @group(1) @binding(0) var<uniform> SuTy_l: SuTyDe_t;
// @group(2) @binding(0) var<uniform> SuTy_l: SuTyDe_t;

const JiJa_fs = /* wgsl */ `

@group(0) @binding(0) var JaKro_k: sampler;
@group(0) @binding(1) var JaPo_k: texture_2d_array<f32>;

struct SuTyDe_t
{
    lightDirection: vec3f,
};

struct FQuad_t
{
    @builtin(position) Ge_wf4: vec4f,
	@location(0) JaMy_wf2: vec2f,
	@location(1) JaChy_wf2: vec2f,
};



@fragment fn main( o: FQuad_t ) -> @location(0) vec4f
{
	// return vec4( o.JaMy_wf2.x, 1.0, o.JaMy_wf2.y, 1.0 );

	//return textureSample( JaPo_k, JaKro_k, o.JaMy_wf2 / 1024.f, 0 );
	// JaMy_wu2, JaMyGz_wu, JaBrz_wu
	//return textureLoad( JaPo_k, vec2u( o.JaMy_wf2 * 2.0 ), 0, 0 );

	return textureSample( JaPo_k, JaKro_k, o.JaMy_wf2 * 0.5, 0 );
	// return textureLoad( JaPo_k, vec2u( o.JaMy_wf2 * 512.0 ), 0, 0 );
}
`;




//==============================================
// DoWG_TaJiJa
//==============================================
DoWG.TaJiJa_vvsg =
[
	"JiJa08__GOLIFE.v.Hro"
	, "JiJa09__QUAD.v.Hrz"
	, "JiJa10__Cho.v.Hry"

];

//==============================================
// DoWG_ChaJiJa
//==============================================
DoWG.ChaJiJa = async function( Va, KuTu )
{
	//import { shaderCode } from './shader.wgsl';
	SmaSme( "JiJa: ", Va );
}


//==============================================
// DoWG_BriYa
//==============================================
DoWG.BriYa = async function( Yz_l )
{
	//@@@
	// MAKE SESSION with Ji INTERFACE
	const Sa_l = SySmz__YaFz_v( DoWG );

	Sa_l.KaVy = Yz_l.KaVy;
	Sa_l.TaJiJa_vh = [];

	//@@@
	// PROG SRC ASYNC LOAD
	const Fe_TaJiJa_vh = [];
	DoWG.TaJiJa_vvsg.forEach
	( function( Ti_v, Vx_wu )
	{
		Fe_TaJiJa_vh[ Vx_wu ] = Hrz7_Kru__ToKz_vsg( "Mx07__SuSmi_WEBPG/SuSmi01__JS/JS01_JiJa/", Ti_v );
	});

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
	};

	const KaKy_l = await navigator.gpu?.requestAdapter( pref );
	if( MoDzTrx__NxHo_y( "Adapter", KaKy_l )){ return null; }
	Sa_l.KaKy_l = KaKy_l;


	//-------------------------------------------------
	// SCREEN
	//-------------------------------------------------
	const MxPo_l = document.getElementById( 'MxPo_De' );
	Sa_l.MxPo_l = MxPo_l;
	Sa_l.MxPo__FMT_l = KaKy_l.features.has('bgra8unorm-storage')
		? navigator.gpu.getPreferredCanvasFormat()
		: 'rgba8unorm';

	//-------------------------------------------------
	// CHIP DRIVER
	//-------------------------------------------------
	//@@@
	// AVAIL
	//const KaTy__WG2 = KaKy_l.features.has('extended-pipeline-cache');
	const KaTy__TIMER_yk = KaKy_l.features.has('timestamp-query');

	//@@@
	// DRV_REQ
	const KaKri_k =
	{
		//&&&
		// FEATS
		requiredFeatures:
		[
			// if bgra8unorm exists, MUST USE!
			Sa_l.MxPo__FMT_l === 'bgra8unorm' ? ['bgra8unorm-storage'] : undefined

			, KaTy__TIMER_yk ? 'timestamp-query' : undefined
			//, KaTy__BC_yk ? 'pipeline-statistics-query' : undefined
			//, KaTy__WG2 ? 'extended-pipeline-cache' : undefined
			//, KaTy__WG2 ? 'memory-mapping-control' : undefined
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

	//&&&
	// DEV LOST
  	KaSmz_l.lost.then((info) =>
	{
		if (info.reason !== "destroyed")
		{
			// RESTART
			SmaSme( "GPU needs REFRESH/RESTART PAGE" );
		}
		MoDzTrx( "WebGPU device was lost:" + info.message );
  	});


	//-------------------------------------------------
	// CTX
	//-------------------------------------------------
	const Sx_l = Sa_l.MxPo_l.getContext( 'webgpu' );
	if( MoDzTrx__NxHo_y( "Context", Sx_l )){ return null; }
	Sa_l.Sx_l = Sx_l;

	Sx_l.configure
	({
		device: KaSmz_l
		, format: Sa_l.MxPo__FMT_l
		// REQ for RW MxPo via ComputeShader
		, usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.STORAGE_BINDING
	});


	// ratio of the resolution in physical pixels to the resolution in CSS pixels
	// const devicePixelRatio = window.devicePixelRatio;
	MxPo_l.width = MxPo_l.clientWidth;
	MxPo_l.height = MxPo_l.clientHeight;


	//-------------------------------------------------
	// BUF: LOC
	//-------------------------------------------------
	// Create a buffer with the vertices for a single cell.
	const vertices = new Float32Array
	([
	  -0.8, -0.8,
	   0.8, -0.8,
	   0.8,  0.8,

	  -0.8, -0.8,
	   0.8,  0.8,
	  -0.8,  0.8,
	]);

	const vertexBuffer = KaSmz_l.createBuffer({
	  label: "CELL vertices",
	  size: vertices.byteLength,
	  usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
	  // OPT
	  minBindingSize: 64
	});
	KaSmz_l.queue.writeBuffer( vertexBuffer, 0, vertices );

	const vertexBufferLayout =
	{
	  arrayStride: 8,
	  attributes: [{
		format: "float32x2",
		offset: 0,
		shaderLocation: 0, // Position. Matches @location(0) in the @vertex shader.
	  }],
	};
	Sa_l.vertexBuffer = vertexBuffer;
	Sa_l.vertices = vertices;


	//-------------------------------------------------
	// SAMPLER^JaMi
	// 'filtering', 'non-filtering', 'comparison'
	// lodMinClamp: float= 0
	// lodMaxClamp: float= 32
	// compare: GPUCompareFunction
	// maxAnisotropy: unsigned short= 1
	//-------------------------------------------------
	Sa_l.JaMi__DISCRETE_l = Sa_l.KaSmz_l.createSampler(
	{
		addressModeU: "clamp-to-edge",
		addressModeV: "clamp-to-edge",

		magFilter: 'nearest',
		minFilter: 'nearest',
		mipmapFilter: "nearest",
	} );


	Sa_l.JaMi__SMOOTH_l = Sa_l.KaSmz_l.createSampler(
	{
		addressModeU: "clamp-to-edge",
		addressModeV: "clamp-to-edge",

		magFilter: "linear",
		minFilter: "linear",
		mipmapFilter: "nearest",
//		mipmapFilter: "linear",
	});


	//-------------------------------------------------
	// GROUP_LAYOUT
	// format { ? }
	//
	//  buffer:
	// - "uniform": A buffer created with a usage of GPUBufferUsage.UNIFORM
	// - "storage": A writable buffer created with a usage of GPUBufferUsage.STORAGE.
	// - "read-only-storage": A read-only buffer created with a usage of GPUBufferUsage.STORAGE.
	//
	// externalTexture
	//
	// sampler:
	// - type:{ comparison, non-filtering, filtering }
	//
	// storageTexture:
	// - access:{ read-only, read-write, write-only}
	// - !!--> ONLY IF
	// - "readonly_and_readwrite_storage_textures"
	// - WGSL language extension is present in WGSLLanguageFeatures.
	//
	//  texture
	// 	- viewDimension{ "1d", "2d-array", "2d", "3d", "cube" }
	//  - sampleType{
	// "depth"
	// "float"
	// "sint"
	// "uint"
	// "unfilterable-float"
	//-------------------------------------------------
	// Create the bind group layout and pipeline layout.
	const CELL_SuNiSz = KaSmz_l.createBindGroupLayout
	({
	  label: "CELL Bind Group Layout",
	  entries: [{
		binding: 0,
		visibility: GPUShaderStage.VERTEX | GPUShaderStage.COMPUTE,
		buffer: {} // Grid uniform buffer
	  }, {
		binding: 1,
		visibility: GPUShaderStage.VERTEX | GPUShaderStage.COMPUTE,
		buffer: { type: "read-only-storage"} // Cell state input buffer
	  }, {
		binding: 2,
		visibility: GPUShaderStage.COMPUTE,
		buffer: { type: "storage"} // Cell state output buffer
	  }]
	});


	const QUAD_SuNiSz = KaSmz_l.createBindGroupLayout
	({
		label: "QUAD Bind Group Layout",
		entries:
		[
			{
				binding: 0,
				visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
				sampler: { type: "filtering" }
			}
			,
			{
				binding: 1,
				visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
				texture: { viewDimension: "2d-array" }
			}
		]
	});


	//-------------------------------------------------
	// LAYOUT_PIPELINE
	//-------------------------------------------------
	const CELL_SuNiKy = KaSmz_l.createPipelineLayout
	({
	  label: "CELL Pipeline Layout",
	  bindGroupLayouts: [ CELL_SuNiSz ],
	});

	const QUAD_SuNiKy = KaSmz_l.createPipelineLayout
	({
		label: "QUAD Pipeline Layout",
		bindGroupLayouts: [ QUAD_SuNiSz ],
	});

	//-------------------------------------------------
	// PROG: VIS
	//-------------------------------------------------
	// Create the shader that will render the cells.
	const cellShaderModule = KaSmz_l.createShaderModule({
	  label: "CELL shader",
	  code: `
	  struct VertexOutput {
		  @builtin(position) position: vec4f,
		  @location(0) cell: vec2f,
		};

		@group(0) @binding(0) var<uniform> grid: vec2f;
		@group(0) @binding(1) var<storage> cellState: array<u32>;

		@vertex
		fn vertexMain(@location(0) position: vec2f,
					  @builtin(instance_index) instance: u32) -> VertexOutput {
		  var output: VertexOutput;

		  let i = f32(instance);
		  let cell = vec2f(i % grid.x, floor(i / grid.x));

		  let scale = f32(cellState[instance]);
		  let cellOffset = cell / grid * 2;
		  let gridPos = (position*scale+1) / grid - 1 + cellOffset;

		  output.position = vec4f(gridPos, 0, 1);
		  output.cell = cell / grid;
		  return output;
		}

		@fragment
		fn fragmentMain(input: VertexOutput) -> @location(0) vec4f {
		  return vec4f(input.cell, 1.0 - input.cell.x, 1);
		}
	  `
	});

	// createRenderPipelineAsync
	const JiGwe03__CONWAY_VIS = KaSmz_l.createRenderPipeline
	({
	  label: "CELL pipeline"
	  , layout: CELL_SuNiKy

	  , vertex:
	  {
		module: cellShaderModule,
		buffers: [vertexBufferLayout]
	  }

	  , fragment: {
		module: cellShaderModule,
		targets: [{ format: Sa_l.MxPo__FMT_l }]
	  }

	  , primitive: { topology: 'triangle-list' }

	});
	Sa_l.JiGwe03__CONWAY_VIS =JiGwe03__CONWAY_VIS;


	//-------------------------------------------------
	// PROG: SIM
	//-------------------------------------------------

	// RESOLVE ALL AT ONCE?
	// Or TOLERATE some fails to iterate w/ placeholders?
	// Promise.allSettled( Fe_TaJiJa_vh ).then((values) => console.log(values));

	// RESOLVE TEXT
	const JiJa08__GOLIFE_vsg = await Fe_TaJiJa_vh[ 0 ];

	if( MoDzTrx__NxHo_y( "JiJa08__GOLIFE_vsg", JiJa08__GOLIFE_vsg )){ return null; }


	// CNV MODULE
	const JiSpo02__CONWAY_SIM = KaSmz_l.createShaderModule({
	  label: "Life simulation shader",
	  code: JiJa08__GOLIFE_vsg	});

	if( MoDzTrx__NxHo_y( "ProgObj^JiSpo", JiSpo02__CONWAY_SIM )){ return null; }

	const shaderInfo = await JiSpo02__CONWAY_SIM.getCompilationInfo();
	const firstMessage = shaderInfo.messages[0];
	if( shaderInfo.messages.length )
	{
		SmaSme( shaderInfo );
		// console.log(firstMessage.lineNum); // 9
		// console.log(firstMessage.message); // "expected ')' for function declaration"
		// console.log(firstMessage.type); // "error"

		// ALWAYS QUIT as FAIL?
		return null;
	}
	// if( MoDzTrx__NxHo_y( "ProgObj^JiSpo", shaderInfo.messages.length )){ return null; }

	// DBG: SmaSme( "Conway", JiSpo02__CONWAY_SIM );

	// PIPELINE_IT

	const WzGy_wuk = 8;

	// Create a compute pipeline that updates the game state.
	const JiGwe02__CONWAY_SIM = KaSmz_l.createComputePipeline
	({
	  label: "Simulation pipeline",
	  layout: CELL_SuNiKy,
	  compute:
	  {
		module: JiSpo02__CONWAY_SIM
		// WORKGROUP OVERRIDE
		, constants: { 0: WzGy_wuk }
	  }
	});

	if( MoDzTrx__NxHo_y( "ProgPipe^JiGwe", JiGwe02__CONWAY_SIM )){ return null; }
	Sa_l.JiGwe02__CONWAY_SIM =JiGwe02__CONWAY_SIM;


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
		label: "CELL State A",
		size: cs_v.byteLength,
		usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
	  }),

	  KaSmz_l.createBuffer
	  ({
		label: "CELL State B",
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
	// IMG_DBS
	//-------------------------------------------------

	const TaGwa__JaPo_l = Sa_l.KaSmz_l.createTexture
	({
		// Not 2d-array!
		dimension: '2d',

		// MUST REQUEST!
		// size: [ 16384, 16384, 32 ],	mipLevelCount: 10,
		// size: [ 8192, 8192, 4 ],	mipLevelCount: 1,
		size: [ 2048, 2048, 4 ], mipLevelCount: 1,

		format: 'rgba8unorm',
		// format: Sa_l.MxPo__FMT_l,

		sampleCount: 1,
		usage:
		GPUTextureUsage.COPY_SRC
		| GPUTextureUsage.COPY_DST
		| GPUTextureUsage.TEXTURE_BINDING
		| GPUTextureUsage.STORAGE_BINDING

		| GPUTextureUsage.RENDER_ATTACHMENT,
	});
	if( MoDzTrx__NxHo_y( "Surf Deck", TaGwa__JaPo_l )){ return null; }
	Sa_l.TaGwa__JaPo_l = TaGwa__JaPo_l;

	//-------------------------------------------------
	// BIND GROUPS
	//-------------------------------------------------
	const bindGroups =
	[
	  KaSmz_l.createBindGroup({
		label: "CELL renderer bind group A",
		layout: CELL_SuNiSz,
		entries: [{
		  binding: 0,
		  resource: { buffer: Sa_l.Jx00__SuTy }
		}, {
		  binding: 1,
		  resource: { buffer: cellStateStorage[0] }
		}, {
		  binding: 2,
		  resource: { buffer: cellStateStorage[1] }
		}],
	  }),

	  KaSmz_l.createBindGroup({
		label: "CELL renderer bind group B",
		layout: CELL_SuNiSz,
		entries:
		[{
		  binding: 0,
		  resource: { buffer: Sa_l.Jx00__SuTy }
		}, {
		  binding: 1,
		  resource: { buffer: cellStateStorage[1] }
		}, {
		  binding: 2,
		  resource: { buffer: cellStateStorage[0] }
		}],
	  }),

	  KaSmz_l.createBindGroup({
		label: "QUAD bind group",
		layout: QUAD_SuNiSz,
		entries:
		[
		{
		  binding: 0,
		  resource: Sa_l.JaMi__SMOOTH_l
		  // resource: Sa_l.JaMi__DISCRETE_l
		}
		,
		{
		  binding: 1,
		  resource: Sa_l.TaGwa__JaPo_l.createView()
		}
		],
	  }),

	];

	Sa_l.bindGroups = bindGroups;

	//-------------------------------------------------
	// PROG as PIPE
	//-------------------------------------------------
	Sa_l.JiGwe01_QUAD_COMP = KaSmz_l.createRenderPipeline
	({
		label: "QUAD_SuNiKy"
		, layout: QUAD_SuNiKy
		, vertex:
		{
			module: KaSmz_l.createShaderModule({ code: JiJa_vs }),
		}

		, fragment:
		{
			module: KaSmz_l.createShaderModule({ code: JiJa_fs }),
			targets: [{ format: Sa_l.MxPo__FMT_l }]
		}

		, primitive: { topology: 'triangle-list' }
	});

	//-------------------------------------------------
	// LOADED DONE
	//-------------------------------------------------
	const TaJiJa_Smx_k = await Promise.all( Fe_TaJiJa_vh );


	//-------------------------------------------------
	// TEST
	//-------------------------------------------------

	// LOAD 2x2 TEST PTRN
	DoWG.KiCho_JaTi( Sa_l, 0, 0, 0, 2, 2, new Uint8Array( [ 255, 255, 0, 255,     0, 0, 255, 255,     255, 0, 0, 255    , 0, 255, 0, 255 ] ) );



	//-------------------------------------------------
	// VERIFY
	//-------------------------------------------------
	return SySmz__YaFx_v( Sa_l );
}


//==============================================
// PAUSE
//==============================================
DoWG.BriYo = function( Sa_l )
{
	if( KoDz__YzTrx_y() ) return;
	SmaSme( "DoWG_BriYo: WG PAUSE" );

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
	SmaSme( "DoWG_KiCho_JxRe: CLONE SEQ" );

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


	const positions = new Float32Array( [ 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, -1, 1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1 ] );
	const normals = new Float32Array( [ 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1 ] );
	const texcoords = new Float32Array( [ 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1 ] );

	Sa_l.indices = new Uint16Array( [ 0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23 ] );

	Sa_l.positionBuffer = createBuffer( KaSmz_l, positions, GPUBufferUsage.VERTEX );
	Sa_l.normalBuffer = createBuffer( KaSmz_l, normals, GPUBufferUsage.VERTEX );
	Sa_l.texcoordBuffer = createBuffer( KaSmz_l, texcoords, GPUBufferUsage.VERTEX );

	Sa_l.indicesBuffer = createBuffer( KaSmz_l, Sa_l.indices, GPUBufferUsage.INDEX );

}

//==============================================
// CLONE SAMPLES
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
			texture: Sa_l.TaGwa__JaPo_l
			, mipLevel: 0
			, origin: [ GeGx_wuk, GeGa_wuk, GeGz_wuk ]
		}
		, JaTi_vk
		,
		{
			// ALWAYS USING 4bu/smp
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
// CLONE OBJECT
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
			texture: Sa_l.TaGwa__JaPo_l
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
// CLONE SELF
// MOVE RECT
// RELOCATE
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
//
//==============================================
DoWG.TxCho_JaKu = function( Sa_l )
{
	if( KoDz__YzTrx_y() ) return;
	SmaSme( "DoWG_TxCho_JaPo: EXPORT FORM" );


}


//==============================================
// CLN-CMDs READ
//==============================================
DoWG.TaMo_Mi = function( Sa_l )
{
	if( KoDz__YzTrx_y() ) return;
	// SmaSme( "CMD READ" );




}


//==============================================
// DoWG_
//==============================================




//==============================================
// DoWG_GyHa
//==============================================
DoWG.GyHa = function( Sa_l )
{
	if( KoDz__YzTrx_y() ) return;
	// SmaSme( "DoWG_GyHa ", Sa_l );
	const width = Math.max( 1, Math.min( Sa_l.KaSmz_l.limits.maxTextureDimension2D, Sa_l.MxPo_l.clientWidth ) );
	const height = Math.max( 1, Math.min( Sa_l.KaSmz_l.limits.maxTextureDimension2D, Sa_l.MxPo_l.clientHeight ) );

	const needResize =
		!Sa_l.renderTarget ||
		width !== Sa_l.MxPo_l.width ||
		height !== Sa_l.MxPo_l.height;

	if ( needResize )
	{
		// if ( Sa_l.renderTarget )
		// {
		// 	Sa_l.renderTarget.destroy();
		// }
		// if ( Sa_l.JaGz__Vy_l )
		// {
		// 	Sa_l.JaGz__Vy_l.destroy();
		// }

		Sa_l.MxPo_l.width = width;
		Sa_l.MxPo_l.height = height;

	}
	return needResize;

}


//==============================================
// UPDATE
//==============================================
DoWG.BriYe = function( Sa_l, GiDri_duk  )
{
	if( KoDz__YzTrx_y() ) return;

	const KaSmz_l = Sa_l.KaSmz_l;

	//!!!
	// CHECK RESIZE
	DoWG.GyHa( Sa_l );

	const MoKro_l = KaSmz_l.createCommandEncoder();

	// FRM_step++;
	// if( ( FRM_step & 0x15 ) != 1 ) return;
	// const CS_Kwi_wu = FRM_step >> 4;


	// HEAPO_wf(); // Module["HEAPU8"][ 0 ];
	// const time = GiDri_duk * 0.001;
	// const tic = Module._HEAPO_wf();
	// console.log( "Tic" + tic );


	//@@@
	// UPLOAD


	//@@@
	// COMPUTE
	{
		// Start a compute pass
		const cPass = MoKro_l.beginComputePass();

		cPass.setPipeline( Sa_l.JiGwe02__CONWAY_SIM);
		cPass.setBindGroup(0, Sa_l.bindGroups[  CS_Kwi_wu % 2]);

		const TaWz__Fo_wuk = Math.ceil(CS_Gy_k / CS_WzVu_k);
		cPass.dispatchWorkgroups( TaWz__Fo_wuk, TaWz__Fo_wuk );



		cPass.end();

		CS_Kwi_wu++;
	}



	//@@@
	// FLT


	//@@@
	//

	//@@@
	// COMPOSITE
	const MxPo__VIEW_l = Sa_l.Sx_l.getCurrentTexture().createView();

	//&&&
	//GPURenderPassDescriptor

	// BEGIN COMPOSITE
	const rPass = MoKro_l.beginRenderPass
	({
		colorAttachments:
		[{
			view: MxPo__VIEW_l,
			loadOp: "clear",
			clearValue: { r: 0.1, g: 0.1, b: 0.2, a: 1.0 },
			storeOp: "store",
		}]
	});

	// TEXT QUADS
	rPass.setPipeline(Sa_l.JiGwe01_QUAD_COMP );
	rPass.setBindGroup( 0, Sa_l.bindGroups[ 2 ] );
	rPass.draw( 6 );


	// GAMEOFLIFE
	rPass.setPipeline( Sa_l.JiGwe03__CONWAY_VIS );
	rPass.setBindGroup( 0, Sa_l.bindGroups[CS_Kwi_wu % 2] );
	rPass.setVertexBuffer( 0, Sa_l.vertexBuffer );
	rPass.draw( Sa_l.vertices.length / 2, CS_Gy_k * CS_Gy_k );

	// END COMPOSITE
	rPass.end();



	//@@@
	// WzMe^WORK RUN
	KaSmz_l.queue.submit([MoKro_l.finish()]);

	//@@@
	// TIMER


	//@@@
	// DNLOAD
}

//==============================================
// SAVE SHADER PRECOMPILED
//==============================================

// // Check for shader cache support
// if (device.features.has('pipeline-cache')) {
//   // Get cached shader binary if available
//   const cachedShader = await caches.match('/shaders/particle.wgsl.bin');

//   if (cachedShader) {
//     // Use pre-compiled binary shader
//     const binaryData = await cachedShader.arrayBuffer();
//     const pipeline = device.createRenderPipelineWithBinary(binaryData);
//   } else {
//     // Compile and cache for future use
//     const shader = device.createShaderModule({
//       code: particleShaderCode
//     });

//     const pipeline = device.createRenderPipeline({
//       vertex: { module: shader, entryPoint: 'vertexMain' },
//       fragment: { module: shader, entryPoint: 'fragmentMain' },
//       // Other pipeline settings...
//     });

//     // Cache the compiled binary
//     const binary = await pipeline.getBinary();
//     await caches.put('/shaders/particle.wgsl.bin', new Response(binary));
//   }
// }

//==============================================
// COMPUTE
//==============================================

// Create multiple command encoders for parallel execution
// const encoders = Array(4).fill().map(() => device.createCommandEncoder());

// // Distribute work across encoders
// for (let i = 0; i < 4; i++) {
//   const computePass = encoders[i].beginComputePass({
//     executionScope: 'isolated' // WebGPU 2.0 feature
//   });

//   computePass.setPipeline(computePipeline);
//   computePass.setBindGroup(0, bindGroups[i]);
//   computePass.dispatchWorkgroups(256, 256);
//   computePass.end();
// }

// // Submit all command buffers in parallel
// device.queue.submit(encoders.map(encoder => encoder.finish()));


//==============================================
// INIT
//==============================================

//   // Create a buffer with direct memory mapping
//   const buffer = device.createBuffer({
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

//==============================================
// END
//==============================================
