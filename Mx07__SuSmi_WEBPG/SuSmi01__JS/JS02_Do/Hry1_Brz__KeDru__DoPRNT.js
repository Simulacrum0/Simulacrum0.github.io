//==============================================
// DoWG
//==============================================
"use strict";
const DoWG = { VaSy: "DoWG" };
window.DoWG = DoWG;

//==============================================
// DoWG_Trx
//==============================================
DoWG.Trx = function( err )
{
	SmaSme( "DoWG_Trx: " + err );

}

//==============================================
// DoWG_BriYe
//==============================================
DoWG.SmaYz = function( Sa_l )
{
	// REPORT
	SmaSme( "--------------------------------------------" );
	SmaSme( "DoWG_Yz" );
	SmaSme( "--------------------------------------------" );
	SmaSme( "Adapter: " + Sa_l.adapter );
	SmaSme( "Dev: " + Sa_l.Ka_l );
	SmaSme( "Surf: " + Sa_l.texture );
	SmaSme( "--------------------------------------------" );
}


//==============================================
// DoWG_BriYi
//==============================================
DoWG.BriYi = function( Sa_l )
{
	SmaSme( this.VaSy );


}

//==============================================
// DoWG_BriYa
//==============================================
DoWG.BriYa = async function( Yz_l )
{
	// MAKE SESSION with Ji INTERFACE
	const Sa_l = { Ji: DoWG };
	Sa_l.KaVy = Yz_l.KaVy;

	//const pref ={ powerPreference: 'high-performance' };
	//const pref ={ forceFallbackAdapter: false };
	const pref ={};

	Sa_l.adapter = await navigator.gpu?.requestAdapter( pref );
	if( !Sa_l.adapter ){ return DoWG.Trx( "Adapter" ); }

	const canTimestamp = Sa_l.adapter.features.has('timestamp-query');
	const isWebGPU2 = Sa_l.adapter.features.has('extended-pipeline-cache');


	const feat = { requiredFeatures: [ ...(canTimestamp ? ['timestamp-query'] : []), ]}

	Sa_l.Ka_l = await Sa_l.adapter?.requestDevice();
	if( !Sa_l.Ka_l ){ return Sa_l.Trx( "Device" ); }

	// {
	// 	SmaSme( 'need a browser that supports WebGPU' );
	// 	return;
	// }

	//-------------------------------------------------
	// OUTPUT
	//-------------------------------------------------
	Sa_l.MxPo_l = document.getElementById( 'MxPo_De' );
	Sa_l.Sx_l = Sa_l.MxPo_l.getContext( 'webgpu' );

	Sa_l.MxPo__FMT_l = navigator.gpu.getPreferredCanvasFormat( Sa_l.adapter );
	Sa_l.Sx_l.configure
	({
		device: Sa_l.Ka_l,
		format: Sa_l.MxPo__FMT_l,
	});

	//-------------------------------------------------
	// BIND: @group(0) @binding(0) var textures: texture_2d_array<f32>;
	//-------------------------------------------------
	Sa_l.texture = Sa_l.Ka_l.createTexture
	({
			dimension: '2d',

//			size: [ 16384, 16384, 32 ],	mipLevelCount: 10,
			size: [ 16384, 16384, 32 ],	mipLevelCount: 10,

			format: 'rgba8unorm',

			sampleCount: 1,
			usage:
				  GPUTextureUsage.COPY_SRC
				| GPUTextureUsage.COPY_DST
				| GPUTextureUsage.TEXTURE_BINDING
				| GPUTextureUsage.STORAGE_BINDING
				| GPUTextureUsage.RENDER_ATTACHMENT,
	});

	if( !Sa_l.texture ){ return DoWG.Trx( "TexArray" ); }

	return Sa_l;
}


//==============================================
// DoWG_MoYy
//==============================================
DoWG.BriYo = function( Sa_l )
{
	SmaSme( "DoWG_BriYo: WG PAUSE" );

}

//==============================================
//
//==============================================
DoWG.KiCho_SuTy = function( Sa_l )
{
	SmaSme( "DoWG JiJa: CLONE PROG" );

	const shaderSrc = /* wgsl */ `
  struct VSUniforms
  {
    worldViewProjection: mat4x4f,
    worldInverseTranspose: mat4x4f,
  };
  @group(0) @binding(0) var<uniform> vsUniforms: VSUniforms;

  struct MyVSInput
  {
      @location(0) position: vec4f,
      @location(1) normal: vec3f,
      @location(2) texcoord: vec2f,
  };

  struct MyVSOutput
  {
    @builtin(position) position: vec4f,
    @location(0) normal: vec3f,
    @location(1) texcoord: vec2f,
  };


  @vertex
  fn myVSMain(v: MyVSInput) -> MyVSOutput
  {
    var vsOut: MyVSOutput;
    vsOut.position = vsUniforms.worldViewProjection * v.position;
    vsOut.normal = (vsUniforms.worldInverseTranspose * vec4f(v.normal, 0.0)).xyz;
    vsOut.texcoord = v.texcoord;
    return vsOut;
  }



  struct FSUniforms
  {
    Spe_Go_wf3: vec3f,
  };

  @group(0) @binding(1) var<uniform> fsUniforms: FSUniforms;
  @group(0) @binding(2) var diffuseSampler: sampler;
  @group(0) @binding(3) var diffuseTexture: texture_2d<f32>;

  @fragment
  fn myFSMain(v: MyVSOutput) -> @location(0) vec4f
  {
    var diffuseColor = textureSample(diffuseTexture, diffuseSampler, v.texcoord);
    var a_normal = normalize(v.normal);
    var l = dot(a_normal, fsUniforms.Spe_Go_wf3) * 0.5 + 0.5;
    return vec4f(diffuseColor.rgb * l, diffuseColor.a);
  }
  `;


  Sa_l.JiJa_0 = Sa_l.Ka_l.createShaderModule(
	{
		code: shaderSrc
	} );

}

//==============================================
//
//==============================================
DoWG.KiCho_JxRe = function( Sa_l )
{
	SmaSme( "DoWG_KiCho_JxRe: CLONE SEQ" );

	function createBuffer( device, data, usage )
	{
		const buffer = Sa_l.Ka_l.createBuffer(
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

	Sa_l.positionBuffer = createBuffer( device, positions, GPUBufferUsage.VERTEX );
	Sa_l.normalBuffer = createBuffer( device, normals, GPUBufferUsage.VERTEX );
	Sa_l.texcoordBuffer = createBuffer( device, texcoords, GPUBufferUsage.VERTEX );

	Sa_l.indicesBuffer = createBuffer( device, Sa_l.indices, GPUBufferUsage.INDEX );

}

//==============================================
//
//==============================================
DoWG.KiCho_JaKu = function( Sa_l, GeGz_wu, GeGx_wu, GeGa_wu, GyGx_wu, GyGa_wu, Si__JaPo_l )
{
	SmaSme( "DoWG_SyCho_JaPo: CLONE FORM" );


	const tex = Sa_l.Ka_l.createTexture(
		{
			size: [ 2, 2 ],
			format: 'rgba8unorm',
			usage: GPUTextureUsage.TEXTURE_BINDING |
				GPUTextureUsage.COPY_DST,
		} );



		Sa_l.Ka_l.queue.writeTexture(
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


		const sampler = Sa_l.Ka_l.createSampler(
		{
			magFilter: 'nearest',
			minFilter: 'nearest',
		} );

}


//==============================================
//
//==============================================
DoWG.TxCho_JaKu = function( Sa_l )
{
	SmaSme( "DoWG_TxCho_JaPo: PSB FORM" );


}


//==============================================
// CLN-CMDs READ
//==============================================
DoWG.TaMo_Mi = function( Sa_l )
{
	// SmaSme( "CMD READ" );


	Sa_l.pipeline = Sa_l.Ka_l.createRenderPipeline
	({

			label: 'fake lighting',
			layout: 'auto',

			vertex:
			{
				module: Sa_l.JiJa_0,
				buffers: [
					// position
					{
						arrayStride: 3 * 4, // 3 floats, 4 bytes each
						attributes: [
						{
							shaderLocation: 0,
							offset: 0,
							format: 'float32x3'
						}, ],
					},
					// normals
					{
						arrayStride: 3 * 4, // 3 floats, 4 bytes each
						attributes: [
						{
							shaderLocation: 1,
							offset: 0,
							format: 'float32x3'
						}, ],
					},
					// texcoords
					{
						arrayStride: 2 * 4, // 2 floats, 4 bytes each
						attributes: [
						{
							shaderLocation: 2,
							offset: 0,
							format: 'float32x2',
						}, ],
					},
				],
			},

			fragment:
			{
				module: Sa_l.JiJa_0,
				targets: [
				{
					format: Sa_l.MxPo__FMT_l
				}, ],
			},

			primitive:
			{
				topology: 'triangle-list',
				cullMode: 'back',
			},

			depthStencil:
			{
				depthWriteEnabled: true,
				depthCompare: 'less',
				format: 'depth24plus',
			}

		} );

		const vUniformBufferSize = 2 * 16 * 4; // 2 mat4s * 16 floats per mat * 4 bytes per float
		const fUniformBufferSize = 3 * 4; // 1 vec3 * 3 floats per vec3 * 4 bytes per float

		Sa_l.WaTy__Vy_l = Sa_l.Ka_l.createBuffer(
		{
			size: Math.max( 16, vUniformBufferSize ),
			usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
		} );

		Sa_l.SuTy__Vy_l = Sa_l.Ka_l.createBuffer(
		{
			size: Math.max( 16, fUniformBufferSize ),
			usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
		} );


		Sa_l.WaTy_vwf4 = new Float32Array( 2 * 16 ); // 2 mat4s
		Sa_l.worldViewProjection = Sa_l.WaTy_vwf4.subarray( 0, 16 );
		Sa_l.worldInverseTranspose = Sa_l.WaTy_vwf4.subarray( 16, 32 );

		Sa_l.SuTy_vwf4 = new Float32Array( 3 ); // 1 vec3

		Sa_l.Spe_Go_wf3 = Sa_l.SuTy_vwf4.subarray( 0, 3 );

		Sa_l.bindGroup = Sa_l.Ka_l.createBindGroup(
		{
			layout: pipeline.getBindGroupLayout( 0 ),
			entries: [
			{
				binding: 0,
				resource:
				{
					buffer: Sa_l.WaTy__Vy_l
				}
			},
			{
				binding: 1,
				resource:
				{
					buffer: Sa_l.SuTy__Vy_l
				}
			},
			{
				binding: 2,
				resource: sampler
			},
			{
				binding: 3,
				resource: tex.createView()
			}, ],
		} );

		Sa_l.renderPassDescriptor =
		{
			colorAttachments: [
			{
				// view: undefined, // Assigned later
				// resolveTarget: undefined, // Assigned Later
				clearValue: [ 0.5, 0.5, 0.5, 1 ],
				loadOp: 'clear',
				storeOp: 'store',
			}, ],
			depthStencilAttachment:
			{
				// view: undefined,  // Assigned later
				depthClearValue: 1,
				depthLoadOp: 'clear',
				depthStoreOp: 'store',
			},
		};



}

//==============================================
// DoWG_GyHa
//==============================================
DoWG.GyHa = function( Sa_l )
{
	// SmaSme( "DoWG_BriYe ", Sa_l );

	const width = Math.max( 1, Math.min( Sa_l.Ka_l.limits.maxTextureDimension2D, Sa_l.MxPo_l.clientWidth ) );
	const height = Math.max( 1, Math.min( Sa_l.Ka_l.limits.maxTextureDimension2D, Sa_l.MxPo_l.clientHeight ) );

	const needResize = !Sa_l.renderTarget ||
		width !== Sa_l.MxPo_l.width ||
		height !== Sa_l.MxPo_l.height;


	if ( needResize )
	{
		if ( Sa_l.renderTarget )
		{
			Sa_l.renderTarget.destroy();
		}
		if ( Sa_l.JaGz__Vy_l )
		{
			Sa_l.JaGz__Vy_l.destroy();
		}

		Sa_l.MxPo_l.width = width;
		Sa_l.MxPo_l.height = height;

		// if ( sampleCount > 1 )
		// {
		// 	const newRenderTarget = Sa_l.Ka_l.createTexture(
		// 	{
		// 		size: [ Sa_l.MxPo_l.width, Sa_l.MxPo_l.height ],
		// 		format: Sa_l.MxPo__FMT_l,
		// 		sampleCount,
		// 		usage: GPUTextureUsage.RENDER_ATTACHMENT,
		// 	} );
		// 	Sa_l.renderTarget = newRenderTarget;
		// 	Sa_l.renderTargetView = newRenderTarget.createView();
		// }

		const newDepthTexture = Sa_l.Ka_l.createTexture(
		{
			size: [ Sa_l.MxPo_l.width, Sa_l.MxPo_l.height ],
			format: 'depth24plus',
			sampleCount: 1,
			usage: GPUTextureUsage.RENDER_ATTACHMENT,
		} );
		Sa_l.JaGz__Vy_l = newDepthTexture;
		Sa_l.depthTextureView = newDepthTexture.createView();
	}
	return needResize;

}



//==============================================
// DoWG_BriYe
//==============================================
DoWG.BriYe = function( Sa_l, GiDri_duk  )
{
	// SmaSme( "DoWG_BriYe ", Sa_l );

	// HEAPO_wf(); // Module["HEAPU8"][ 0 ];
	// const tic = Module._HEAPO_wf();
	//console.log( "Tic" + tic );

	const time = GiDri_duk * 0.001;

	DoWG.GyHa( Sa_l );

	const projection = mat4.perspective( 30 * Math.PI / 180, Sa_l.MxPo_l.clientWidth / Sa_l.MxPo_l.clientHeight, 0.5, 10 );
	const eye = [ 1, 4, -6 ];
	const target = [ 0, 0, 0 ];
	const up = [ 0, 1, 0 ];

	const view = mat4.lookAt( eye, target, up );
	const viewProjection = mat4.multiply( projection, view );
	const world = mat4.rotationY( time );

	mat4.transpose( mat4.inverse( world ), Sa_l.worldInverseTranspose );
	mat4.multiply( viewProjection, world, Sa_l.WaTy_vwf4 );

	vec3.normalize( [ 1, 8, -10 ], Sa_l.Spe_Go_wf3 );

	const Ka_l = Sa_l.Ka_l;
	Ka_l.queue.writeBuffer( Sa_l.WaTy__Vy_l, 0, Sa_l.WaTy_vwf4 );
	Ka_l.queue.writeBuffer( Sa_l.SuTy__Vy_l, 0, Sa_l.SuTy_vwf4 );

	//@@@
	// DST
	{
		const colorTexture = Sa_l.Sx_l.getCurrentTexture();
		Sa_l.renderPassDescriptor.colorAttachments[ 0 ].view = colorTexture.createView();

		// 2nd pass ?
		// Sa_l.renderPassDescriptor.colorAttachments[ 0 ].view = Sa_l.renderTargetView;
		// Sa_l.renderPassDescriptor.colorAttachments[ 0 ].resolveTarget = Sa_l.Sx_l.getCurrentTexture().createView();
	}
	Sa_l.renderPassDescriptor.depthStencilAttachment.view = Sa_l.depthTextureView;


	//@@@
	// PASS
	const commandEncoder = Sa_l.Ka_l.createCommandEncoder();
	const passEncoder = commandEncoder.beginRenderPass( Sa_l.renderPassDescriptor );

	passEncoder.setPipeline( Sa_l.pipeline );
	passEncoder.setBindGroup( 0, Sa_l.bindGroup );
	passEncoder.setVertexBuffer( 0, Sa_l.positionBuffer );
	passEncoder.setVertexBuffer( 1, Sa_l.normalBuffer );
	passEncoder.setVertexBuffer( 2, Sa_l.texcoordBuffer );
	passEncoder.setIndexBuffer( Sa_l.indicesBuffer, 'uint16' );
	passEncoder.drawIndexed( Sa_l.indices.length );
	passEncoder.end();

	Sa_l.Ka_l.queue.submit( [ commandEncoder.finish() ] );

}



//==============================================
// END
//==============================================


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
	Sx_l.scale( 1.0, 1.0 );

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
// TXT TEST
//==============================================

	//@@@
	Hre7_Me__KeDru_Ha( Sa_l, "👽👾🚀", 0, 0 );
	Hre7_Me__KeDru_Ha( Sa_l, "j-Testog", 0, 128 );
	Hre7_Me__KeDru_Ha( Sa_l, "got 🛸", 0, 256 );
	Hre7_Me__KeDru_Ha( Sa_l, "We hv Txt", 0, 384 );


//!!!
// LIFECYCLE
Yi();
Sa_l.SxKeDru_l = null;

Ya();
	//@@@
	// TXT DST RENDER
	//const SxKeDru_l = document.createElement("canvas").getContext("2d");
	// SxKeDru_l.canvas.width  = 512;
	// SxKeDru_l.canvas.height = 512;
	const SxKeDru_l = new OffscreenCanvas( 512, 512 ).getContext("2d");
	Sa_l.SxKeDru_l = SxKeDru_l;
	// Sa_l.SxKeDru_l.canvas.imageSmoothingEnabled = false;





//==============================================
// END
//==============================================
import GUI from 'https://webgpufundamentals.org/3rdparty/muigui-0.x.module.js';

async function main() {
  const adapter = await navigator.gpu?.requestAdapter();
  const device = await adapter?.requestDevice();
  if (!device) {
    fail('need a browser that supports WebGPU');
    return;
  }

  // Get a WebGPU context from the canvas and configure it
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('webgpu');
  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();
  context.configure({
    device,
    format: presentationFormat,
  });

  const module = device.createShaderModule({
    label: 'our hardcoded textured quad shaders',
    code: /* wgsl */ `
      struct OurVertexShaderOutput {
        @builtin(position) position: vec4f,
        @location(0) texcoord: vec2f,
      };

      @vertex fn vs(
        @builtin(vertex_index) vertexIndex : u32
      ) -> OurVertexShaderOutput {
        let pos = array(
          // 1st triangle
          vec2f( 0.0,  0.0),  // center
          vec2f( 1.0,  0.0),  // right, center
          vec2f( 0.0,  1.0),  // center, top

          // 2st triangle
          vec2f( 0.0,  1.0),  // center, top
          vec2f( 1.0,  0.0),  // right, center
          vec2f( 1.0,  1.0),  // right, top
        );

        var vsOutput: OurVertexShaderOutput;
        let xy = pos[vertexIndex];
        vsOutput.position = vec4f(xy, 0.0, 1.0);
        vsOutput.texcoord = xy;
        return vsOutput;
      }

      @group(0) @binding(0) var ourSampler: sampler;
      @group(0) @binding(1) var ourTexture: texture_2d<f32>;

      @fragment fn fs(fsInput: OurVertexShaderOutput) -> @location(0) vec4f {
        return textureSample(ourTexture, ourSampler, fsInput.texcoord);
      }
    `,
  });

  const pipeline = device.createRenderPipeline({
    label: 'hardcoded textured quad pipeline',
    layout: 'auto',
    vertex: {
      module,
    },
    fragment: {
      module,
      targets: [{ format: presentationFormat }],
    },
  });

  async function loadImageBitmap(url) {
    const res = await fetch(url);
    const blob = await res.blob();
    return await createImageBitmap(blob, { colorSpaceConversion: 'none' });
  }

  const url = 'https://webgpufundamentals.org/webgpu/resources/images/f-texture.png';
  const source = await loadImageBitmap(url);
  const texture = device.createTexture({
    label: url,
    format: 'rgba8unorm',
    size: [source.width, source.height],
    usage: GPUTextureUsage.TEXTURE_BINDING |
           GPUTextureUsage.COPY_DST |
           GPUTextureUsage.RENDER_ATTACHMENT,
  });
  device.queue.copyExternalImageToTexture(
    { source, flipY: true },
    { texture },
    { width: source.width, height: source.height },
  );

  const bindGroups = [];
  for (let i = 0; i < 8; ++i) {
    const sampler = device.createSampler({
      addressModeU: (i & 1) ? 'repeat' : 'clamp-to-edge',
      addressModeV: (i & 2) ? 'repeat' : 'clamp-to-edge',
      magFilter: (i & 4) ? 'linear' : 'nearest',
    });

    const bindGroup = device.createBindGroup({
      layout: pipeline.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: sampler },
        { binding: 1, resource: texture.createView() },
      ],
    });
    bindGroups.push(bindGroup);
  }

  const renderPassDescriptor = {
    label: 'our basic canvas renderPass',
    colorAttachments: [
      {
        // view: <- to be filled out when we render
        clearValue: [0.3, 0.3, 0.3, 1],
        loadOp: 'clear',
        storeOp: 'store',
      },
    ],
  };

  const settings = {
    addressModeU: 'repeat',
    addressModeV: 'repeat',
    magFilter: 'linear',
  };

  const addressOptions = ['repeat', 'clamp-to-edge'];
  const filterOptions = ['nearest', 'linear'];

  const gui = new GUI();
  gui.onChange(render);
  Object.assign(gui.domElement.style, {right: '', left: '15px'});
  gui.add(settings, 'addressModeU', addressOptions);
  gui.add(settings, 'addressModeV', addressOptions);
  gui.add(settings, 'magFilter', filterOptions);

  function render() {
    const ndx = (settings.addressModeU === 'repeat' ? 1 : 0) +
                (settings.addressModeV === 'repeat' ? 2 : 0) +
                (settings.magFilter === 'linear' ? 4 : 0);
    const bindGroup = bindGroups[ndx];

    // Get the current texture from the canvas context and
    // set it as the texture to render to.
    renderPassDescriptor.colorAttachments[0].view =
        context.getCurrentTexture().createView();

    const encoder = device.createCommandEncoder({
      label: 'render quad encoder',
    });
    const pass = encoder.beginRenderPass(renderPassDescriptor);
    pass.setPipeline(pipeline);
    pass.setBindGroup(0, bindGroup);
    pass.draw(6);  // call our vertex shader 6 times
    pass.end();

    const commandBuffer = encoder.finish();
    device.queue.submit([commandBuffer]);
  }

  const observer = new ResizeObserver(entries => {
    for (const entry of entries) {
      const canvas = entry.target;
      const width = entry.contentBoxSize[0].inlineSize;
      const height = entry.contentBoxSize[0].blockSize;
      canvas.width = Math.max(1, Math.min(width, device.limits.maxTextureDimension2D));
      canvas.height = Math.max(1, Math.min(height, device.limits.maxTextureDimension2D));
      // re-render
      render();
    }
  });
  observer.observe(canvas);
}

function fail(msg) {
  // eslint-disable-next-line no-alert
  alert(msg);
}

//==============================================
// END
//==============================================
    <title>05: Game Simulation - WebGPU Life</title>

  <body>
    <canvas width="512" height="512"></canvas>
    <script type="module">


      const canvas = document.querySelector("canvas");

      // WebGPU device initialization
      if (!navigator.gpu) {
        throw new Error("WebGPU not supported on this browser.");
      }

      const adapter = await navigator.gpu.requestAdapter();
      if (!adapter) {
        throw new Error("No appropriate GPUAdapter found.");
      }

      const device = await adapter.requestDevice();

      // Canvas configuration
      const context = canvas.getContext("webgpu");
      const canvasFormat = navigator.gpu.getPreferredCanvasFormat();
      context.configure({
          device: device,
          format: canvasFormat,
      });

      // Create a buffer with the vertices for a single cell.
      const vertices = new Float32Array([
        -0.8, -0.8,
         0.8, -0.8,
         0.8,  0.8,

        -0.8, -0.8,
         0.8,  0.8,
        -0.8,  0.8,
      ]);
      const vertexBuffer = device.createBuffer({
        label: "Cell vertices",
        size: vertices.byteLength,
        usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
      });
      device.queue.writeBuffer(vertexBuffer, 0, vertices);

      const vertexBufferLayout = {
        arrayStride: 8,
        attributes: [{
          format: "float32x2",
          offset: 0,
          shaderLocation: 0, // Position. Matches @location(0) in the @vertex shader.
        }],
      };

      // Create the bind group layout and pipeline layout.
      const bindGroupLayout = device.createBindGroupLayout({
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

      const pipelineLayout = device.createPipelineLayout({
        label: "Cell Pipeline Layout",
        bindGroupLayouts: [ bindGroupLayout ],
      });

      // Create the shader that will render the cells.
      const cellShaderModule = device.createShaderModule({
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
      const cellPipeline = device.createRenderPipeline({
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
            format: canvasFormat
          }]
        }
      });

      // Create the compute shader that will process the game of life simulation.
      const simulationShaderModule = device.createShaderModule({
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

          @compute @workgroup_size(${WORKGROUP_SIZE}, ${WORKGROUP_SIZE})
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

            // Conway's game of life rules:
            switch activeNeighbors {
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

      // Create a compute pipeline that updates the game state.
      const simulationPipeline = device.createComputePipeline({
        label: "Simulation pipeline",
        layout: pipelineLayout,
        compute: {
          module: simulationShaderModule,
          entryPoint: "computeMain",
        }
      });

      // Create a uniform buffer that describes the grid.
      const uniformArray = new Float32Array([GRID_SIZE, GRID_SIZE]);
      const uniformBuffer = device.createBuffer({
        label: "Grid Uniforms",
        size: uniformArray.byteLength,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
      });
      device.queue.writeBuffer(uniformBuffer, 0, uniformArray);

      // Create an array representing the active state of each cell.
      const cellStateArray = new Uint32Array(GRID_SIZE * GRID_SIZE);

      // Create two storage buffers to hold the cell state.
      const cellStateStorage = [
        device.createBuffer({
          label: "Cell State A",
          size: cellStateArray.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
        }),
        device.createBuffer({
          label: "Cell State B",
          size: cellStateArray.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
        })
      ];

      // Set each cell to a random state, then copy the JavaScript array into
      // the storage buffer.
      for (let i = 0; i < cellStateArray.length; ++i) {
        cellStateArray[i] = Math.random() > 0.6 ? 1 : 0;
      }
      device.queue.writeBuffer(cellStateStorage[0], 0, cellStateArray);

      // Create a bind group to pass the grid uniforms into the pipeline
      const bindGroups = [
        device.createBindGroup({
          label: "Cell renderer bind group A",
          layout: bindGroupLayout,
          entries: [{
            binding: 0,
            resource: { buffer: uniformBuffer }
          }, {
            binding: 1,
            resource: { buffer: cellStateStorage[0] }
          }, {
            binding: 2,
            resource: { buffer: cellStateStorage[1] }
          }],
        }),
        device.createBindGroup({
          label: "Cell renderer bind group B",
          layout: bindGroupLayout,
          entries: [{
            binding: 0,
            resource: { buffer: uniformBuffer }
          }, {
            binding: 1,
            resource: { buffer: cellStateStorage[1] }
          }, {
            binding: 2,
            resource: { buffer: cellStateStorage[0] }
          }],
        }),
      ];

      let step = 0;
      function updateGrid() {
        const encoder = device.createCommandEncoder();

        // Start a compute pass
        const computePass = encoder.beginComputePass();

        computePass.setPipeline(simulationPipeline);
        computePass.setBindGroup(0, bindGroups[step % 2]);
        const workgroupCount = Math.ceil(GRID_SIZE / WORKGROUP_SIZE);
        computePass.dispatchWorkgroups(workgroupCount, workgroupCount);
        computePass.end();

        step++; // Increment the step count

        // Start a render pass
        const pass = encoder.beginRenderPass({
          colorAttachments: [{
            view: context.getCurrentTexture().createView(),
            loadOp: "clear",
            clearValue: { r: 0, g: 0, b: 0.4, a: 1.0 },
            storeOp: "store",
          }]
        });

        // Draw the grid.
        pass.setPipeline(cellPipeline);
        pass.setBindGroup(0, bindGroups[step % 2]); // Updated!
        pass.setVertexBuffer(0, vertexBuffer);
        pass.draw(vertices.length / 2, GRID_SIZE * GRID_SIZE);

        // End the render pass and submit the command buffer
        pass.end();
        device.queue.submit([encoder.finish()]);
      }
      setInterval(updateGrid, UPDATE_INTERVAL);
    </script>
  </body>
</html>
