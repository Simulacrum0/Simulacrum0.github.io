const DoNN__BriDzSa__Da_wuk = "235"; 

//==============================================
//==============================================
// NN: Ya
//==============================================
//==============================================

// SySmz.v.Du
"use strict";
const DoNN = { SyTu_vsg: "Do", VaDy_vsg: "NN" };
Ko.Ji.DoNN = DoNN;

//==============================================
// QUALITIES
//==============================================
const ViNN = Object.freeze
({
	Va0_qk: 0
	, Va1_qk: 1
	, Va2_qk: 2
});



//==============================================
//==============================================
// NN: Yi
//==============================================
//==============================================
//==============================================
//==============================================
// NN: Ya
//==============================================
//==============================================


//==============================================
// REPORT CFG
//==============================================
//-------------------------------------------------
DoNN.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaJe( "[" + this.VaDy_vsg + "] SmaYz" );
}



//==============================================
// BUF
//==============================================

//==============================================
// BUF
//==============================================


//==============================================
//==============================================
// NN: Yi
//==============================================
//==============================================
//==============================================
//==============================================
// NN: Ya
//==============================================
//==============================================



//==============================================
//==============================================
// NN: Yi
//==============================================
//==============================================
//==============================================
//==============================================
// NN: Ya
//==============================================
//==============================================

//==============================================
// BUF LOAD
//==============================================



//==============================================
// LIFECYCLE
//==============================================

//-------------------------------------------------
DoNN.BriYi = function( Sa_l )
//-------------------------------------------------
{
	//@@@
	// DISCONNECT GRAFS

	//@@@
	// RELEASE BUFs

	//@@@
	//( Sa_l );
	Sa_l = null;
}

//-------------------------------------------------
DoNN.Trx = function( Sa_l, e )
//-------------------------------------------------
{
	SmaTrx( "[NN] Fail:", e );
	DoNN.BriYi( Sa_l );
}

//-------------------------------------------------
DoNN.BriYu = async function( Sa_l )
//-------------------------------------------------
{
	if( KoDz__YzTrx_y() ) return;
	//SmaJe( "[NN] MzPoYe: RESUME" );

}

//-------------------------------------------------
DoNN.BriYe = async function( Sa_l )
//-------------------------------------------------
{
	if( KoDz__YzTrx_y() ) return;

}

//-------------------------------------------------
DoNN.BriYo = function( Sa_l )
//-------------------------------------------------
{
	if( KoDz__YzTrx_y() ) return;
	//SmaJe( "[NN] BriYo: PAUSE" );

	// Pause Compute Tasks?
	// Reset Clocks?
}

//-------------------------------------------------
DoNN.BriYa = async function( Yz_k )
//-------------------------------------------------
{
	//@@@
	// API
	const Sa_l = SySmz__YaFz_v( DoNN );

	SmaJe( "[NN] CHECK" );

	try
	{
		//&&&
		// WebNN POLYFILL
		// Polyfill MLTensorUsage to make it compatible with old version of Chrome.
		if (typeof MLGraphBuilder !== 'undefined')
		{
			if (typeof MLTensorUsage == 'undefined')
			{
			  window.MLTensorUsage = {WEBGPU_INTEROP: 1, READ: 2, WRITE: 4};
			}
		}

		// CTX
		Sa_l.Sx_l =	await navigator.ml.createContext({powerPreference: 'low-power'});
	}
	catch(e)
	{
		SmaJe("[NN] No WebNN Browser & Device Found!" );
		DoNN.BriYi( Sa_l );
		return null;
	}


	const Sx_l = Sa_l.Sx_l;

	SmaJe( "[NN] FOUND" );

	// The following code builds a graph as:
	// constant1 ---+
	//              +--- Add ---> intermediateOutput1 ---+
	// input1    ---+                                    |
	//                                                   +--- Mul---> output
	// constant2 ---+                                    |
	//              +--- Add ---> intermediateOutput2 ---+
	// input2    ---+

	// Use tensors in 4 dimensions.
	const TENSOR_DIMS = [1, 2, 2, 2];
	const TENSOR_SIZE = 8;

	const builder = new MLGraphBuilder(Sx_l);

	// Create MLOperandDescriptor object.
	const desc = {dataType: 'float32', dimensions: TENSOR_DIMS, shape: TENSOR_DIMS};

	// constant1 is a constant MLOperand with the value 0.5.
	const constantBuffer1 = new Float32Array(TENSOR_SIZE).fill(0.5);
	const constant1 = builder.constant(desc, constantBuffer1);

	// input1 is one of the input MLOperands.
	// Its value will be set before execution.
	const input1 = builder.input('input1', desc);

	// constant2 is another constant MLOperand with the value 0.5.
	const constantBuffer2 = new Float32Array(TENSOR_SIZE).fill(0.5);
	const constant2 = builder.constant(desc, constantBuffer2);

	// input2 is another input MLOperand. Its value will be set before execution.
	const input2 = builder.input('input2', desc);

	// intermediateOutput1 is the output of the first Add operation.
	const intermediateOutput1 = builder.add(constant1, input1);

	// intermediateOutput2 is the output of the second Add operation.
	const intermediateOutput2 = builder.add(constant2, input2);

	// output is the output MLOperand of the Mul operation.
	const output = builder.mul(intermediateOutput1, intermediateOutput2);

	// Compile the constructed graph.
	const graph = await builder.build({'output': output});

	// Setup the input buffers with value 1.
	const inputBuffer1 = new Float32Array(TENSOR_SIZE).fill(1);
	const inputBuffer2 = new Float32Array(TENSOR_SIZE).fill(1);

	desc.usage = MLTensorUsage.WRITE;
	desc.writable = true;
	const inputTensor1 = await Sx_l.createTensor(desc);
	const inputTensor2 = await Sx_l.createTensor(desc);
	Sx_l.writeTensor(inputTensor1, inputBuffer1);
	Sx_l.writeTensor(inputTensor2, inputBuffer2);

	const outputTensor = await Sx_l.createTensor({
	  ...desc,
	  usage: MLTensorUsage.READ,
	  readable: true,
	  writable: false,
	});

	// Execute the compiled graph with the specified inputs.
	const inputs = {
	  'input1': inputTensor1,
	  'input2': inputTensor2,
	};
	const outputs = {'output': outputTensor};
	Sx_l.dispatch(graph, inputs, outputs);

	const results = await Sx_l.readTensor(outputTensor);


	SmaJe( "[NN] Output value: " + new Float32Array(results) );
	SmaJe( "[NN] Goal value: 2.25,2.25,2.25,2.25,2.25,2.25,2.25,2.25" );


	//@@@
	// WRAPUP
	return SySmz__YaFx_v( Sa_l );
}

//==============================================
//==============================================
// NN: Yi
//==============================================
//==============================================
