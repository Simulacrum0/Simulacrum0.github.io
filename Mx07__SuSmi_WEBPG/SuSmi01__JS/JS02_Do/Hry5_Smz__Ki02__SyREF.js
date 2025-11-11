//==============================================
//
//==============================================
//"use strict";

//==============================================
// SyGL_BriYi
//==============================================

//==============================================
// SyGL_BriYa
//==============================================


//==============================================
// SyGL_BriYe
//==============================================


//==============================================
// SyGL_MoYy
//==============================================

//-------------------------------------------------
//
//-------------------------------------------------


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
// async function initWebGPU()
// {
//   // Request adapter with high-performance preference
//   const adapter = await navigator.gpu.requestAdapter({
//     powerPreference: 'high-performance',
//     forceFallbackAdapter: false
//   });

//   // Check for WebGPU 2.0 support
//   const isWebGPU2 = adapter.features.has('extended-pipeline-cache');

//   // Request device with all performance features
//   const device = await adapter.requestDevice({
//     requiredFeatures: [
//       'texture-compression-bc',
//       'timestamp-query',
//       'pipeline-statistics-query',
//       'depth-clip-control',
//       isWebGPU2 ? 'extended-pipeline-cache' : undefined,
//       isWebGPU2 ? 'memory-mapping-control' : undefined
//     ].filter(Boolean),

//     // Request maximum resource limits
//     requiredLimits: {
//       maxStorageBufferBindingSize: adapter.limits.maxStorageBufferBindingSize,
//       maxBufferSize: adapter.limits.maxBufferSize,
//       maxComputeWorkgroupSizeX: 1024,
//       maxComputeInvocationsPerWorkgroup: 1024
//     }
//   });

//   // return { adapter, device, isWebGPU2 };


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
//
//==============================================
'use strict';

const Sa_l =
{
};

Sa_l.TrxKo = function ( msg )
{
	Module.Sma__BriDzYz__Bz( msg );
}


Sa_l.canvasInfo =
{
	// these are filled out in resizeToDisplaySize
	renderTarget: undefined,
	renderTargetView: undefined,
	depthTexture: undefined,
	depthTextureView: undefined,
	sampleCount: 1, // can be 1 or 4
}



Sa_l.HrySmz_Ya = async function()
{
	const STALL = await Module._HEAPO_wf;

	try
	{
		Sa_l.adapter = await navigator.gpu?.requestAdapter();
		Sa_l.device = await adapter?.requestDevice();
	}
	catch
	{
		Sa_l.TrxKo( 'need a browser that supports WebGPU' );
		return;
	}

	const canvas = document.getElementById( 'MxPo_Zx' );
	const context = canvas.getContext( 'webgpu' );

	console.log( "webgpu: " + device + "\n" );

	const presentationFormat = navigator.gpu.getPreferredCanvasFormat( Sa_l.adapter );
	context.configure(
	{
		device: Sa_l.device,
		format: presentationFormat,
	} );

	Sa_l.canvasInfo =
	{
		canvas,
		context,
		presentationFormat,

	};


	const shaderSrc = /* wgsl */ `
  struct VSUniforms {
    worldViewProjection: mat4x4f,
    worldInverseTranspose: mat4x4f,
  };
  @group(0) @binding(0) var<uniform> vsUniforms: VSUniforms;

  struct MyVSInput {
      @location(0) position: vec4f,
      @location(1) normal: vec3f,
      @location(2) texcoord: vec2f,
  };

  struct MyVSOutput {
    @builtin(position) position: vec4f,
    @location(0) normal: vec3f,
    @location(1) texcoord: vec2f,
  };

  @vertex
  fn myVSMain(v: MyVSInput) -> MyVSOutput {
    var vsOut: MyVSOutput;
    vsOut.position = vsUniforms.worldViewProjection * v.position;
    vsOut.normal = (vsUniforms.worldInverseTranspose * vec4f(v.normal, 0.0)).xyz;
    vsOut.texcoord = v.texcoord;
    return vsOut;
  }



  struct FSUniforms {
    lightDirection: vec3f,
  };

  @group(0) @binding(1) var<uniform> fsUniforms: FSUniforms;
  @group(0) @binding(2) var diffuseSampler: sampler;
  @group(0) @binding(3) var diffuseTexture: texture_2d<f32>;

  @fragment
  fn myFSMain(v: MyVSOutput) -> @location(0) vec4f {
    var diffuseColor = textureSample(diffuseTexture, diffuseSampler, v.texcoord);
    var a_normal = normalize(v.normal);
    var l = dot(a_normal, fsUniforms.lightDirection) * 0.5 + 0.5;
    return vec4f(diffuseColor.rgb * l, diffuseColor.a);
  }
  `;


	function createBuffer( device, data, usage )
	{
		const buffer = device.createBuffer(
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
	const indices = new Uint16Array( [ 0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23 ] );

	const positionBuffer = createBuffer( device, positions, GPUBufferUsage.VERTEX );
	const normalBuffer = createBuffer( device, normals, GPUBufferUsage.VERTEX );
	const texcoordBuffer = createBuffer( device, texcoords, GPUBufferUsage.VERTEX );
	const indicesBuffer = createBuffer( device, indices, GPUBufferUsage.INDEX );

	const tex = device.createTexture(
	{
		size: [ 2, 2 ],
		format: 'rgba8unorm',
		usage: GPUTextureUsage.TEXTURE_BINDING |
			GPUTextureUsage.COPY_DST,
	} );



	Sa_l.device.queue.writeTexture(
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


	const sampler = Sa_l.device.createSampler(
	{
		magFilter: 'nearest',
		minFilter: 'nearest',
	} );

	const shaderModule = Sa_l.device.createShaderModule(
	{
		code: shaderSrc
	} );

	const pipeline = Sa_l.device.createRenderPipeline(
	{
		label: 'fake lighting',
		layout: 'auto',
		vertex:
		{
			module: shaderModule,
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
			module: shaderModule,
			targets: [
			{
				format: presentationFormat
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
		},
		...( canvasInfo.sampleCount > 1 &&
		{
			multisample:
			{
				count: canvasInfo.sampleCount,
			},
		} ),
	} );

	const vUniformBufferSize = 2 * 16 * 4; // 2 mat4s * 16 floats per mat * 4 bytes per float
	const fUniformBufferSize = 3 * 4; // 1 vec3 * 3 floats per vec3 * 4 bytes per float

	const vsUniformBuffer = Sa_l.device.createBuffer(
	{
		size: Math.max( 16, vUniformBufferSize ),
		usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
	} );

	const fsUniformBuffer = Sa_l.device.createBuffer(
	{
		size: Math.max( 16, fUniformBufferSize ),
		usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
	} );
	const vsUniformValues = new Float32Array( 2 * 16 ); // 2 mat4s
	const worldViewProjection = vsUniformValues.subarray( 0, 16 );
	const worldInverseTranspose = vsUniformValues.subarray( 16, 32 );
	const fsUniformValues = new Float32Array( 3 ); // 1 vec3
	const lightDirection = fsUniformValues.subarray( 0, 3 );

	const bindGroup = Sa_l.device.createBindGroup(
	{
		layout: pipeline.getBindGroupLayout( 0 ),
		entries: [
		{
			binding: 0,
			resource:
			{
				buffer: vsUniformBuffer
			}
		},
		{
			binding: 1,
			resource:
			{
				buffer: fsUniformBuffer
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

	const renderPassDescriptor =
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


Sa_l.resizeToDisplaySize = function( device, canvasInfo )
{
		const
		{
			canvas,
			renderTarget,
			presentationFormat,
			depthTexture,
			sampleCount,
		} = canvasInfo;

		const width = Math.max( 1, Math.min( device.limits.maxTextureDimension2D, canvas.clientWidth ) );
		const height = Math.max( 1, Math.min( device.limits.maxTextureDimension2D, canvas.clientHeight ) );

		const needResize = !canvasInfo.renderTarget ||
			width !== canvas.width ||
			height !== canvas.height;


		if ( needResize )
		{
			if ( renderTarget )
			{
				renderTarget.destroy();
			}
			if ( depthTexture )
			{
				depthTexture.destroy();
			}

			canvas.width = width;
			canvas.height = height;

			if ( sampleCount > 1 )
			{
				const newRenderTarget = device.createTexture(
				{
					size: [ canvas.width, canvas.height ],
					format: presentationFormat,
					sampleCount,
					usage: GPUTextureUsage.RENDER_ATTACHMENT,
				} );
				canvasInfo.renderTarget = newRenderTarget;
				canvasInfo.renderTargetView = newRenderTarget.createView();
			}

			const newDepthTexture = device.createTexture(
			{
				size: [ canvas.width, canvas.height ],
				format: 'depth24plus',
				sampleCount,
				usage: GPUTextureUsage.RENDER_ATTACHMENT,
			} );
			canvasInfo.depthTexture = newDepthTexture;
			canvasInfo.depthTextureView = newDepthTexture.createView();
		}
		return needResize;
	}


Sa_l.HrySmz_Ye = function( Ye_MS_wu )
{
	// HEAPO_wf(); // Module["HEAPU8"][ 0 ];
	const tic = Module._HEAPO_wf();
	//console.log( "Tic" + tic );

	const time = Ye_MS_wu * 0.001;



		Sa_l.resizeToDisplaySize( Sa_l.device, Sa_l.canvasInfo );

		const projection = mat4.perspective( 30 * Math.PI / 180, canvas.clientWidth / canvas.clientHeight, 0.5, 10 );
		const eye = [ 1, 4, -6 ];
		const target = [ 0, 0, 0 ];
		const up = [ 0, 1, 0 ];

		const view = mat4.lookAt( eye, target, up );
		const viewProjection = mat4.multiply( projection, view );
		const world = mat4.rotationY( time );
		mat4.transpose( mat4.inverse( world ), worldInverseTranspose );
		mat4.multiply( viewProjection, world, worldViewProjection );

		vec3.normalize( [ 1, 8, -10 ], lightDirection );

		Sa_l.device.queue.writeBuffer( vsUniformBuffer, 0, vsUniformValues );
		Sa_l.device.queue.writeBuffer( fsUniformBuffer, 0, fsUniformValues );

		if ( canvasInfo.sampleCount === 1 )
		{
			const colorTexture = context.getCurrentTexture();
			renderPassDescriptor.colorAttachments[ 0 ].view = colorTexture.createView();
		}
		else
		{
			renderPassDescriptor.colorAttachments[ 0 ].view = canvasInfo.renderTargetView;
			renderPassDescriptor.colorAttachments[ 0 ].resolveTarget = context.getCurrentTexture().createView();
		}
		renderPassDescriptor.depthStencilAttachment.view = canvasInfo.depthTextureView;



		const commandEncoder = Sa_l.device.createCommandEncoder();
		const passEncoder = commandEncoder.beginRenderPass( renderPassDescriptor );

		passEncoder.setPipeline( pipeline );
		passEncoder.setBindGroup( 0, bindGroup );
		passEncoder.setVertexBuffer( 0, positionBuffer );
		passEncoder.setVertexBuffer( 1, normalBuffer );
		passEncoder.setVertexBuffer( 2, texcoordBuffer );
		passEncoder.setIndexBuffer( indicesBuffer, 'uint16' );
		passEncoder.drawIndexed( indices.length );
		passEncoder.end();

		Sa_l.device.queue.submit( [ commandEncoder.finish() ] );
}


//==============================================
// SERV
//==============================================


//==============================================
// EXPORT
//==============================================
// export
// {
// 	HrySmz_Ya
// 	// , HrySmz_Me
// 	// , HrySmz_Mi
// 	// , HrySmz_Yi
// }

//==============================================
// END
//==============================================
