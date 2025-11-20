//==============================================
// DoWG
/*
SyKzJy:
- ADAPTER^KaKy
- DEVICE^KaSmz

- BUF^JxTi( rect, SuTy )
- IMG^TaGwa__JaPo( Surface Deck as array of BGRA 2D Slices )
- SMP^JaMy( Samplers )
- BIND^WzTro( buf/img map to Index )

- PROG^JiSpo [ JiHro, JiJa, JiGe ( Compute, Sampled, Rasterized-Vertices )]
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
// PROG_OBJ
const JiSpo_qk = Object.freeze
//-------------------------------------------------
({
	JiSpo00: 0
	, JiSpo01: 1
	, JiSpo02: 2

});


//-------------------------------------------------
// PIPE
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
	SmaSme( "Adapter: " + Sa_l.KaKy_l.info.vendor );
	//SmaSme( Sa_l.KaKy_l );

	SmaSme( "Dev: " + Sa_l.KaSmz_l.adapterInfo.architecture );
	//SmaSme( Sa_l.KaSmz_l );

	SmaSme( "Surf_Deck: " + Sa_l.TaGwa__JaPo_l.width + ", " + Sa_l.TaGwa__JaPo_l.height + ", " + Sa_l.TaGwa__JaPo_l.depthOrArrayLayers );
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
    vec2(-0.67, -0.67),
    vec2(-0.67, 0.67 ),
    vec2( 0.67, -0.67 ),

    vec2( 0.67, -0.67 ),
    vec2( 0.67, 0.67 ),
    vec2(-0.67, 0.67 )
  );

  o.Ge_wf4 = vec4f( pos[ Vx_wu ], 0.0, 1.0 );

  o.JaMy_wf2 = vec2( pos[ Vx_wu ] ) * 0.5 + vec2( 0.5 );

  o.JaChy_wf2 = vec2( pos[ Vx_wu ] ) * 0.5 + vec2( 0.5 );


  return o;
}
`;


const JiJa_fs = /* wgsl */ `

struct FSUniforms {
    lightDirection: vec3f,
  };

struct FQuad_t
{
    @builtin(position) Ge_wf4: vec4f,
	@location(0) JaMy_wf2: vec2f,
	@location(1) JaChy_wf2: vec2f,
	};


	// @group(0) @binding(1) var<uniform> fsUniforms: FSUniforms;
	// @group(0) @binding(2) var diffuseSampler: sampler;
	// @group(0) @binding(3) var diffuseTexture: texture_2d<f32>;

@fragment fn main( o: FQuad_t ) -> @location(0) vec4f
{

	// FRAG 0
	return vec4( o.JaMy_wf2.x, o.JaMy_wf2.y, 1.0, 1.0 );
}
`;


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
	// PROG SRC
	const JiJa08__GOLIFE_h = Hrz7_Kru__ToKz_vsg( "Mx07__SuSmi_WEBPG/SuSmi01__JS/JS01_JiJa/", "JiJa08__GOLIFE.v.Hro" );


	// MAKE SESSION with Ji INTERFACE
	const Sa_l = { Ji: DoWG };
	Sa_l.KaVy = Yz_l.KaVy;

	//@@@
	// DEV PREF
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

	//!!!
	// 2025/11 NO FEATURES
	// on Chrome/Win11/Nvidia
	//
	//&&&
	// AVAIL
	// const canTimestamp = KaKy_l.features.has('timestamp-query');
	// const isWebGPU2 = KaKy_l.features.has('extended-pipeline-cache');
	//
	//&&&
	// REQ
	const KaKri_k ={ requiredFeatures:[ ], requiredLimits: { } };
	//
	//     requiredFeatures: [
	// 'texture-compression-bc',
	// 'texture-compression-astc',
	// (canTimestamp ? 'timestamp-query' : undefined,
	//       'pipeline-statistics-query',
	//       'depth-clip-control',
	//       isWebGPU2 ? 'extended-pipeline-cache' : undefined,
	//       isWebGPU2 ? 'memory-mapping-control' : undefined
	//     ].filter(Boolean)
	//
	//&&&
	// LIMITS
	// Request maximum resource limits
	//     requiredLimits: {
	//       maxStorageBufferBindingSize: adapter.limits.maxStorageBufferBindingSize,
	//       maxBufferSize: adapter.limits.maxBufferSize,
	//       maxComputeWorkgroupSizeX: 1024,
	//       maxComputeInvocationsPerWorkgroup: 1024
	//     }

	const KaSmz_l = await KaKy_l.requestDevice( KaKri_k );
	if( MoDzTrx__NxHo_y( "Device", KaSmz_l )){ return null; }
	Sa_l.KaSmz_l = KaSmz_l;

	//@@@
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
	// SCREEN & CTX
	//-------------------------------------------------
	const MxPo_l = document.getElementById( 'MxPo_De' );
	Sa_l.MxPo_l = MxPo_l;
	Sa_l.MxPo__FMT_l = navigator.gpu.getPreferredCanvasFormat( KaKy_l );


	const Sx_l = Sa_l.MxPo_l.getContext( 'webgpu' );
	if( MoDzTrx__NxHo_y( "Context", Sx_l )){ return null; }
	Sa_l.Sx_l = Sx_l;

	Sx_l.configure
	({
		device: KaSmz_l,
		format: Sa_l.MxPo__FMT_l
	});

	// ratio of the resolution in physical pixels to the resolution in CSS pixels
	// const devicePixelRatio = window.devicePixelRatio;

	MxPo_l.width = MxPo_l.clientWidth;
	MxPo_l.height = MxPo_l.clientHeight;

	// BIND: @group(0) @binding(0) var textures: texture_2d_array<f32>;


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
	  label: "Cell vertices",
	  size: vertices.byteLength,
	  usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
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
		mipmapFilter: "linear",
	});


	//-------------------------------------------------
	// GROUP_LAYOUT
	//-------------------------------------------------
	// Create the bind group layout and pipeline layout.
	const bindGroupLayout = KaSmz_l.createBindGroupLayout
	({
	  label: "Cell Bind Group Layout",
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

	//-------------------------------------------------
	// PIPELINE
	//-------------------------------------------------
	const pipelineLayout = KaSmz_l.createPipelineLayout({
	  label: "Cell Pipeline Layout",
	  bindGroupLayouts: [ bindGroupLayout ],
	});

	//-------------------------------------------------
	// PROG: VIS
	//-------------------------------------------------
	// Create the shader that will render the cells.
	const cellShaderModule = KaSmz_l.createShaderModule({
	  label: "Cell shader",
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

	// Create a pipeline that renders the cell.
	const JiGwe03__CONWAY_VIS = KaSmz_l.createRenderPipeline({
	  label: "Cell pipeline",
	  layout: pipelineLayout,
	  vertex: {
		module: cellShaderModule,
		entryPoint: "vertexMain",
		buffers: [vertexBufferLayout]
	  },
	  fragment: {
		module: cellShaderModule,
		entryPoint: "fragmentMain",
		targets: [{
		  format: Sa_l.MxPo__FMT_l
		}]
	  }
	});
	Sa_l.JiGwe03__CONWAY_VIS =JiGwe03__CONWAY_VIS;


	//-------------------------------------------------
	// PROG: SIM
	//-------------------------------------------------

	// RESOLVE TEXT
	const JiJa08__GOLIFE_vsg = await JiJa08__GOLIFE_h;
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

		// ALWAYS QUIT
		return null;
	}
	// if( MoDzTrx__NxHo_y( "ProgObj^JiSpo", shaderInfo.messages.length )){ return null; }


	// PIPELINE_IT
	  SmaSme( "Conway", JiSpo02__CONWAY_SIM );
	// Create a compute pipeline that updates the game state.
	const JiGwe02__CONWAY_SIM = KaSmz_l.createComputePipeline
	({
	  label: "Simulation pipeline",
	  layout: pipelineLayout,
	  compute:
	  {
		module: JiSpo02__CONWAY_SIM,
		entryPoint: "computeMain",
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
		label: "Cell State A",
		size: cs_v.byteLength,
		usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
	  }),

	  KaSmz_l.createBuffer
	  ({
		label: "Cell State B",
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
	DoWG.KiCho_JaKu( Sa_l, 0, 0, 512, 512, new Uint8Array( [	255, 255, 128, 255, 0, 0, 0, 255, 255, 0, 0, 255, 255, 128, 0, 255 ] ) );

	const TaGwa__JaPo_l = Sa_l.KaSmz_l.createTexture
	({
			// Not 2d-array!
			dimension: '2d',

			// MUST REQUEST!
			// size: [ 16384, 16384, 32 ],	mipLevelCount: 10,
			// size: [ 8192, 8192, 4 ],	mipLevelCount: 1,
			size: [ 2048, 2048, 4 ], mipLevelCount: 1,

			format: 'rgba8unorm',
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
		label: "Cell renderer bind group A",
		layout: bindGroupLayout,
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
		label: "Cell renderer bind group B",
		layout: bindGroupLayout,
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
	];

	Sa_l.bindGroups = bindGroups;

	//-------------------------------------------------
	// PROG as PIPE
	//-------------------------------------------------
	Sa_l.JiSpo01_QUAD_COMP = KaSmz_l.createRenderPipeline
	({
		layout: 'auto',

		vertex:
		{
			module: KaSmz_l.createShaderModule({ code: JiJa_vs }),
		},

		fragment:
		{
			module: KaSmz_l.createShaderModule({ code: JiJa_fs }),
			targets:
			[{
				format: Sa_l.MxPo__FMT_l,
			}]
		},

		primitive: { topology: 'triangle-list' }
	});


	//-------------------------------------------------
	// VERIFY
	//-------------------------------------------------
	return Sa_l;
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
// CLONE IMG
//==============================================
DoWG.KiCho_JaKu = function( Sa_l, GeGz_wu, GeGx_wu, GeGa_wu, GyGx_wu, GyGa_wu, Si__JaPo_l )
{
	if( KoDz__YzTrx_y() ) return;
	SmaSme( "DoWG_SyCho_JaPo: CLONE FORM" );


	const tex = Sa_l.KaSmz_l.createTexture(
		{
			size: [ 2, 2 ],
			format: 'rgba8unorm',
			usage:
			GPUTextureUsage.TEXTURE_BINDING |
			GPUTextureUsage.COPY_DST,
		} );
		Sa_l.TEST_tex = tex;


		//@@@
		// UPLOAD TEXTURE?
		Sa_l.KaSmz_l.queue.writeTexture(
		{
			texture: tex
		}, new Uint8Array( [
			255, 255, 128, 255, 128, 255, 255, 255, 255, 128, 255, 255, 255, 128, 128, 255,
		] ),
		{
			bytesPerRow: 8,
			rowsPerImage: 2
		},
		{
			width: 2,
			height: 2
		}, );



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
	//	const time = GiDri_duk * 0.001;
	// const tic = Module._HEAPO_wf();
	//console.log( "Tic" + tic );


	//@@@
	// UPLOAD


	//@@@
	// COMPUTE

	{
		// Start a compute pass
		const cPass = MoKro_l.beginComputePass();

		cPass.setPipeline( Sa_l.JiGwe02__CONWAY_SIM);
		cPass.setBindGroup(0, Sa_l.bindGroups[  CS_Kwi_wu % 2]);

		const workgroupCount = Math.ceil(CS_Gy_k / CS_WzVu_k);
		cPass.dispatchWorkgroups(workgroupCount, workgroupCount);
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
	rPass.setPipeline(Sa_l.JiSpo01_QUAD_COMP);
//		Sa_l.TEST_tex
	rPass.draw( 6 );


	// GAMEOFLIFE
	rPass.setPipeline( Sa_l.JiGwe03__CONWAY_VIS );
	rPass.setBindGroup( 0, Sa_l.bindGroups[CS_Kwi_wu % 2] );
	rPass.setVertexBuffer( 0, Sa_l.vertexBuffer );
	rPass.draw( Sa_l.vertices.length / 2, CS_Gy_k * CS_Gy_k );
	rPass.end();


	//&&&
	// WzMe^WORK SEND
	KaSmz_l.queue.submit([MoKro_l.finish()]);

	//@@@
	// TIMER


	//@@@
	// DNLOAD
}

//==============================================
// END
//==============================================
