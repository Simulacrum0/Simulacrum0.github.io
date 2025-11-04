//==============================================
// CFG
//==============================================
"use strict";

const KiGL = {};

//==============================================
// KiGL_Trx
//==============================================
KiGL.Trx = function( err )
{
	console.log( "KiGL_Trx: " + err );

}

//==============================================
// KiGL_BriYe
//==============================================
KiGL.Sma = function()
{
	// REPORT
	//console.log( "KiGL_BriYe" );


}


//==============================================
// KiGL_BriYi
//==============================================
KiGL.BriYi = function ()
{
	console.log( "KiGL_BriYi" );


}


//==============================================
// KiGL_BriYa
//==============================================
KiGL.BriYa = async function()
{
	console.log( "--------------------------------------------" );
	console.log( "KiGL_BriYa" );

	//const pref ={powerPreference: 'high-performance'};
	const pref ={};
	KiGL.adapter = await navigator.gpu?.requestAdapter( pref );
	if( !KiGL.adapter ){ return KiGL.Trx( "Adapter" ); }
	const canTimestamp = KiGL.adapter.features.has('timestamp-query');

	const feat = { requiredFeatures: [ ...(canTimestamp ? ['timestamp-query'] : []), ]}
	KiGL.device = await KiGL.adapter?.requestDevice();
	if( !KiGL.device ){ return KiGL.Trx( "Device" ); }

	// {
	// 	console.log( 'need a browser that supports WebGPU' );
	// 	return;
	// }

	const canvas = document.getElementById( 'MxPo_Zx' );
	const context = canvas.getContext( 'webgpu' );

	KiGL.texture = KiGL.device.createTexture({
			size: [ 4096, 4096 ],
			dimension: '2d',
			format: 'rgba8unorm',
			sampleCount: 1,
			usage: GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC | GPUTextureUsage.RENDER_ATTACHMENT,
	});

	if( !KiGL.texture ){ return KiGL.Trx( "TexArray" ); }


	console.log( "Adapter: " + KiGL.adapter );
	console.log( "Dev: " + KiGL.device );
	console.log( "Surf: " + KiGL.texture );
	console.log( "--------------------------------------------" );



}

//==============================================
// KiGL_BriYe
//==============================================
KiGL.BriYe = function()
{
	//console.log( "KiGL_BriYe" );


}


//==============================================
// KiGL_MoYy
//==============================================
KiGL.BriYo = function()
{
	console.log( "KiGL_BriYo" );

}

//-------------------------------------------------
//
//-------------------------------------------------


//==============================================
// END
//==============================================
