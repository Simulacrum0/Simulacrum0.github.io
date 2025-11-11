//==============================================
// SyWG
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
const SyWG = { VaSy: "SyWG" };
window.SyWG = SyWG;


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
// SyWG_Trx
//==============================================
function SyWG_NxHoTrx_y( Va, Kri_y )
{
	SmaSme( "SyWG NxHo: ---> " + Va );
	if( !Kri_y )
	{
		Module.Trx_vsg = "SyWG_Trx: " + Va + " @ " + Kri_y;
		BriDzTrx( Module.Trx_vsg );
		return true;
	}
	return false;
}

//==============================================
// SyWG_BriYe
//==============================================
SyWG.SmaYz = function( Sa_l )
{
	if( Module.Trx_vsg ) return;

	// REPORT
	SmaSme( "--------------------------------------------" );
	SmaSme( "SyWG_Yz" );
	SmaSme( "--------------------------------------------" );
	SmaSme( "Adapter: " + Sa_l.KaKy_l );
	SmaSme( "Dev: " + Sa_l.KaSmz_l );
	SmaSme( "Surf_Deck: " + Sa_l.TaGwa__JaPo_l );
	SmaSme( "--------------------------------------------" );
}


//==============================================
// SyWG_BriYi
//==============================================
SyWG.BriYi = function( Sa_l )
{
	SmaSme( this.VaSy );


}

//==============================================
// SyWG_
//==============================================
const JiJa_vs = /* wgsl */ `
@vertex
fn main
(
  @builtin(vertex_index) VertexIndex : u32
) -> @builtin(position) vec4f
 {
  var pos = array<vec2f, 3>
  (
    vec2(0.0, 1.0 ),
    vec2(-1.0, -1.),
    vec2( 1.0, -1.0 )
  );

  return vec4f(pos[VertexIndex], 0.0, 1.0);
}
`;


const JiJa_fs = /* wgsl */ `
@fragment
fn main() -> @location(0) vec4f {
  return vec4(1.0, 1.0, 0.0, 0.6 );
}
`;


//==============================================
// SyWG_BriYa
//==============================================
SyWG.BriYa = async function( Yz_l )
{
	// MAKE SESSION with Ji INTERFACE
	const Sa_l = { Ji: SyWG };
	Sa_l.KaVy = Yz_l.KaVy;

	//@@@
	// DEV PREF
	const pref =
	{
		// powerPreference: 'high-performance'
		// forceFallbackAdapter: false
	};

	const KaKy_l = await navigator.gpu?.requestAdapter( pref );
	if( SyWG_NxHoTrx_y( "Adapter", KaKy_l )){ return; }
	Sa_l.KaKy_l = KaKy_l;

	const canTimestamp = KaKy_l.features.has('timestamp-query');
	const isWebGPU2 = KaKy_l.features.has('extended-pipeline-cache');
	// const feat = { requiredFeatures: [ ...(canTimestamp ? ['timestamp-query'] : []), ]}

	const KaSmz_l = await KaKy_l.requestDevice();
	if( SyWG_NxHoTrx_y( "Device", KaSmz_l )){ return; }
	Sa_l.KaSmz_l = KaSmz_l;

	//-------------------------------------------------
	// SCREEN & CTX
	//-------------------------------------------------
	const MxPo_l = document.getElementById( 'MxPo_De' );
	Sa_l.MxPo_l = MxPo_l;
	Sa_l.MxPo__FMT_l = navigator.gpu.getPreferredCanvasFormat( KaKy_l );

	const Sx_l = Sa_l.MxPo_l.getContext( 'webgpu' );
	if( SyWG_NxHoTrx_y( "Context", Sx_l )){ return; }
	Sa_l.Sx_l = Sx_l;

	Sx_l.configure
	({
		device: KaSmz_l,
		format: Sa_l.MxPo__FMT_l
	});

	const devicePixelRatio = window.devicePixelRatio;
	MxPo_l.width = MxPo_l.clientWidth * devicePixelRatio;
	MxPo_l.height = MxPo_l.clientHeight * devicePixelRatio;

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
	// BIND
	//-------------------------------------------------
	// Create the bind group layout and pipeline layout.
	const bindGroupLayout = KaSmz_l.createBindGroupLayout({
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
	// Create the compute shader that will process the game of life simulation.
	const JiSpo02__CONWAY_SIM = KaSmz_l.createShaderModule({
	  label: "Life simulation shader",
	  code: `
		@group(0) @binding(0) var<uniform> grid: vec2f;

		@group(0) @binding(1) var<storage> cellStateIn: array<u32>;
		@group(0) @binding(2) var<storage, read_write> cellStateOut: array<u32>;

		fn cellIndex(cell: vec2u) -> u32 {
		  return (cell.y % u32(grid.y)) * u32(grid.x) +
				 (cell.x % u32(grid.x));
		}

		fn cellActive(x: u32, y: u32) -> u32 {
		  return cellStateIn[cellIndex(vec2(x, y))];
		}

		@compute @workgroup_size(${CS_WzVu_k}, ${CS_WzVu_k})
		fn computeMain(@builtin(global_invocation_id) cell: vec3u) {
		  // Determine how many active neighbors this cell has.
		  let activeNeighbors = cellActive(cell.x+1, cell.y+1) +
								cellActive(cell.x+1, cell.y) +
								cellActive(cell.x+1, cell.y-1) +
								cellActive(cell.x, cell.y-1) +
								cellActive(cell.x-1, cell.y-1) +
								cellActive(cell.x-1, cell.y) +
								cellActive(cell.x-1, cell.y+1) +
								cellActive(cell.x, cell.y+1);

		  let i = cellIndex(cell.xy);

		  c

		  // Conway's game of life rules:
		  switch activeNeighbors
		  {
			case 2: { // Active cells with 2 neighbors stay active.
			  cellStateOut[i] = cellStateIn[i];
			}
			case 3: { // Cells with 3 neighbors become or stay active.
			  cellStateOut[i] = 1;
			}
			default: { // Cells with < 2 or > 3 neighbors become inactive.
			  cellStateOut[i] = 0;
			}
		  }
		}
	  `
	});

	if( SyWG_NxHoTrx_y( "Prog^JiSpo", JiSpo02__CONWAY_SIM )){ return; }

	if( SyWG_NxHoTrx_y( "FAKE ERROR", null )){ return; }

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
	if( SyWG_NxHoTrx_y( "Crafts^SuTy", Jx00__SuTy )){ return; }
	Sa_l.Jx00__SuTy = Jx00__SuTy;

	const uniformArray = new Float32Array( [ CS_Gy_k, CS_Gy_k ] );
	KaSmz_l.queue.writeBuffer( Sa_l.Jx00__SuTy, 0, uniformArray );


	//-------------------------------------------------
	// BUF CALC
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
	// BIND GROUPS
	//-------------------------------------------------

	// Create a bind group to pass the grid uniforms into the pipeline
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
		entries: [{
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
	//
	//-------------------------------------------------


	//-------------------------------------------------
	//
	//-------------------------------------------------


	//-------------------------------------------------
	//
	//-------------------------------------------------


	//-------------------------------------------------
	//
	//-------------------------------------------------


	//-------------------------------------------------
	//
	//-------------------------------------------------


	//-------------------------------------------------
	// IMG_DBS
	//-------------------------------------------------

	const TaGwa__JaPo_l = Sa_l.KaSmz_l.createTexture
	({
			// Not 2d-array!
			dimension: '2d',

			// MUST REQUEST!
			// size: [ 16384, 16384, 32 ],	mipLevelCount: 10,
			size: [ 8192, 8192, 4 ],	mipLevelCount: 1,

			format: 'rgba8unorm',
			sampleCount: 1,
			usage:
				  GPUTextureUsage.COPY_SRC
				| GPUTextureUsage.COPY_DST
				| GPUTextureUsage.TEXTURE_BINDING
				| GPUTextureUsage.STORAGE_BINDING
				| GPUTextureUsage.RENDER_ATTACHMENT,
	});
	if( SyWG_NxHoTrx_y( "Surf Deck", TaGwa__JaPo_l )){ return; }

	Sa_l.TaGwa__JaPo_l = TaGwa__JaPo_l;


	//-------------------------------------------------
	// PROG
	//-------------------------------------------------







	//-------------------------------------------------
	// PIPE
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
SyWG.BriYo = function( Sa_l )
{
	if( Module.Trx_vsg ) return;
	SmaSme( "SyWG_BriYo: WG PAUSE" );

}

//==============================================
// CLONE CRAFT
//==============================================
SyWG.KiCho_SuTy = function( Sa_l )
{
	if( Module.Trx_vsg ) return;
	SmaSme( "SyWG JiJa: CLONE CRAFT" );



}

//==============================================
// CLONE SEQ
//==============================================
SyWG.KiCho_JxRe = function( Sa_l )
{
	if( Module.Trx_vsg ) return;
	SmaSme( "SyWG_KiCho_JxRe: CLONE SEQ" );

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
SyWG.KiCho_JaKu = function( Sa_l, GeGz_wu, GeGx_wu, GeGa_wu, GyGx_wu, GyGa_wu, Si__JaPo_l )
{
	if( Module.Trx_vsg ) return;
	SmaSme( "SyWG_SyCho_JaPo: CLONE FORM" );


	const tex = Sa_l.KaSmz_l.createTexture(
		{
			size: [ 2, 2 ],
			format: 'rgba8unorm',
			usage: GPUTextureUsage.TEXTURE_BINDING |
				GPUTextureUsage.COPY_DST,
		} );




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
SyWG.TxCho_JaKu = function( Sa_l )
{
	if( Module.Trx_vsg ) return;
	SmaSme( "SyWG_TxCho_JaPo: EXPORT FORM" );


}


//==============================================
// CLN-CMDs READ
//==============================================
SyWG.TaMo_Mi = function( Sa_l )
{
	if( Module.Trx_vsg ) return;
	// SmaSme( "CMD READ" );




}


//==============================================
// SyWG_
//==============================================



//==============================================
// SyWG_GyHa
//==============================================
SyWG.GyHa = function( Sa_l )
{
	if( Module.Trx_vsg ) return;
	// SmaSme( "SyWG_BriYe ", Sa_l );
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
// SyWG_BriYe
//==============================================
SyWG.BriYe = function( Sa_l, GiDri_duk  )
{
	if( Module.Trx_vsg ) return;
	const KaSmz_l = Sa_l.KaSmz_l;

	//!!!
	// CHECK RESIZE
	SyWG.GyHa( Sa_l );

	const MoKro_l = KaSmz_l.createCommandEncoder();

	// FRM_step++;
	// if( ( FRM_step & 0x15 ) != 1 ) return;
	// const CS_Kwi_wu = FRM_step >> 4;

	// SmaSme( "SyWG_BriYe ", Sa_l );

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
			clearValue: { r: 0, g: 0, b: 0.4, a: 1.0 },
			storeOp: "store",
		}]
	});

	// TEXT QUADS
	rPass.setPipeline(Sa_l.JiSpo01_QUAD_COMP);
	rPass.draw(3);


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
