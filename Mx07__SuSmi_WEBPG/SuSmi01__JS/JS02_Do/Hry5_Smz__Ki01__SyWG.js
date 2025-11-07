//==============================================
// SyWG
//==============================================
"use strict";
const SyWG = { VaSy: "SyWG" };
window.SyWG = SyWG;

//==============================================
// SyWG_Trx
//==============================================
SyWG.Trx = function( err )
{
	SmaSme( "SyWG_Trx: " + err );

}

//==============================================
// SyWG_BriYe
//==============================================
SyWG.SmaYz = function( Sa_l )
{
	// REPORT
	SmaSme( "--------------------------------------------" );
	SmaSme( "SyWG_Yz" );
	SmaSme( "--------------------------------------------" );
	SmaSme( "Adapter: " + Sa_l.adapter );
	SmaSme( "Dev: " + Sa_l.device );
	SmaSme( "Surf: " + Sa_l.texture );
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
// SyWG_BriYa
//==============================================
SyWG.BriYa = async function( Yz_l )
{
	// MAKE SESSION with Ji INTERFACE
	const Sa_l = { Ji: SyWG };
	Sa_l.KaVy = Yz_l.KaVy;

	//const pref ={powerPreference: 'high-performance'};
	const pref ={};

	Sa_l.adapter = await navigator.gpu?.requestAdapter( pref );
	if( !Sa_l.adapter ){ return SyWG.Trx( "Adapter" ); }
	const canTimestamp = Sa_l.adapter.features.has('timestamp-query');

	const feat = { requiredFeatures: [ ...(canTimestamp ? ['timestamp-query'] : []), ]}
	Sa_l.device = await Sa_l.adapter?.requestDevice();
	if( !Sa_l.device ){ return Sa_l.Trx( "Device" ); }

	// {
	// 	SmaSme( 'need a browser that supports WebGPU' );
	// 	return;
	// }

	const canvas = document.getElementById( 'MxPo_Zx' );
	const context = canvas.getContext( 'webgpu' );

	//-------------------------------------------------
	//
	// BIND: @group(0) @binding(0) var textures: texture_2d_array<f32>;
	//-------------------------------------------------
	Sa_l.texture = Sa_l.device.createTexture
	({
			dimension: '2d',
			size: [ 16384, 16384, 32 ],
			mipLevelCount: 10,
			format: 'rgba8unorm',

			sampleCount: 1,
			usage:
				GPUTextureUsage.COPY_SRC
				| GPUTextureUsage.COPY_DST
				| GPUTextureUsage.TEXTURE_BINDING
				// | GPUTextureUsage.STORAGE_BINDING
				| GPUTextureUsage.RENDER_ATTACHMENT,
	});

	if( !Sa_l.texture ){ return SyWG.Trx( "TexArray" ); }

	return Sa_l;
}

//==============================================
// SyWG_BriYe
//==============================================
SyWG.BriYe = function( Sa_l, GiDri_duk  )
{
	// SmaSme( "SyWG_BriYe ", Sa_l );



}


//==============================================
// SyWG_MoYy
//==============================================
SyWG.BriYo = function( Sa_l )
{
	SmaSme( "SyWG_BriYo: WG PAUSE" );

}

//==============================================
//
//==============================================
SyWG.SyCho_JiJa = function( Sa_l )
{
	SmaSme( "SyWG JiJa: CLONE PROG" );


}

//==============================================
//
//==============================================
SyWG.SyCho_JxRe = function( Sa_l )
{
	SmaSme( "SyWG_SyCho_JxRe: CLONE SEQ" );


}

//==============================================
//
//==============================================
SyWG.SyCho_JaKu = function( Sa_l )
{
	SmaSme( "SyWG_SyCho_JaPo: CLONE FORM" );

}


//==============================================
//
//==============================================
SyWG.TxCho_JaKu = function( Sa_l )
{
	SmaSme( "SyWG_TxCho_JaPo: PSB FORM" );


}


//==============================================
// CLN-CMDs READ
//==============================================
SyWG.TaMo_Mi = function( Sa_l )
{
	// SmaSme( "CMD READ" );


}


//==============================================
// END
//==============================================
