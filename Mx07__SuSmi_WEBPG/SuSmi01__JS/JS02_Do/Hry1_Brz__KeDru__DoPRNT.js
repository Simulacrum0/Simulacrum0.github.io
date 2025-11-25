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
