//==============================================
//
//==============================================


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
