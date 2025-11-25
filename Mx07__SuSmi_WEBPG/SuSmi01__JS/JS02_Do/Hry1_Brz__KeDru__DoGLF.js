//==============================================
// DoGLF
//==============================================
"use strict";
const DoGLF = { VaSy: "DoGLF" };
window.DoGLF = DoGLF;

//==============================================
// DoGLF_Trx
//==============================================
DoGLF.Trx = function( err )
{
	SmaSme( "DoGLF_Trx: " + err );

}

//==============================================
// DoGLF_BriYe
//==============================================
DoGLF.SmaYz = function( Sa_l )
{
	// REPORT
	SmaSme( "--------------------------------------------" );
	SmaSme( "DoGLF_Yz" );
	SmaSme( "--------------------------------------------" );
	SmaSme( "Canvas: " + Sa_l.WzPo_l );
	SmaSme( "Fonts: " + Sa_l.WaDru_wu );
	SmaSme( "Words: " + Sa_l.VaFo_wu );
	SmaSme( "--------------------------------------------" );
}


//==============================================
// DoGLF_BriYi
//==============================================
DoGLF.BriYi = function( Sa_l )
{
	SmaSme( this.VaSy );

}

//==============================================
// DoGLF_BriYa
//==============================================
DoGLF.BriYa = async function( Yz_l )
{
	//@@@
	// MAKE SESSION with Ji INTERFACE
	const Sa_l = { Ji: DoGLF };

	//@@@
	// CANVAS
	const WzPo_l = new OffscreenCanvas( Yz_l.Gy_wu, Yz_l.Gy_wu )
	if( MoDzTrx__NxHo_y( "GLF Canvas", WzPo_l )){ return null; }

	const SxHry_l = WzPo_l.getContext("2d");
	if( MoDzTrx__NxHo_y( "GLF Context", SxHry_l )){ return null; }

	Sa_l.WzPo_l = WzPo_l;
	Sa_l.SxHry_l = SxHry_l;
	SxHry_l.canvas.imageSmoothingEnabled = false;


	return Sa_l;
}


//==============================================
// FONT LOAD
//==============================================
DoGLF.WaDru__Chi = function( Sa_l )
{

}

DoGLF.WaDru__Cha = function( Sa_l )
{

}


//==============================================
// RENDER
//==============================================
DoGLF.Hre7_Me__KeDru_Hry = function( Sa_l, SiKeDru_vsg, GeGx_wu, GeGa_wu )
{

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
// PLAN LOCATION
DoGLF.Hre7_Me__KeDru_Ha = function( Sa_l, SiKeDru_vsg, GeGx_wu, GeGa_wu )
{
	const Sx_l = Sa_l.SxHry_l;

	const KuMu__Gy_wuk = 12;
	const KuMu__GyZiSta_wuk = KuMu__Gy_wuk  / 2;

	GeGx_wu+= KuMu__GyZiSta_wuk;
	GeGa_wu+= KuMu__GyZiSta_wuk;

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

	// CSS pixels
	// No alternate sizes
	WaHa_l.GyGx_wu = Math.ceil( 0.5 + WaHa_l.actualBoundingBoxRight + WaHa_l.actualBoundingBoxLeft ) + KuMu__Gy_wuk;
	const KeDru__GeGx_wu = GeGx_wu + WaHa_l.actualBoundingBoxLeft;

	//!!!
	// ONLY WHAT IS RENDERED
	// WaHa_l.GyGa_wu = Math.ceil( WaHa_l.actualBoundingBoxAscent + WaHa_l.actualBoundingBoxDescent );
	// const KeDru__GeGa_wu = GeGa_wu + WaHa_l.actualBoundingBoxAscent;

	// SCOPE
	WaHa_l.GyGa_wu = Math.ceil( 0.5 + WaHa_l.fontBoundingBoxAscent + WaHa_l.fontBoundingBoxDescent + KuMu__Gy_wuk );
	const KeDru__GeGa_wu = GeGa_wu + WaHa_l.fontBoundingBoxAscent;

	// EM appears as 'ZERO' ??
	// WaHa_l.GyGa_wu = Math.ceil( WaHa_l.emAscent + WaHa_l.emDescent );
	// const KeDru__GeGa_wu = GeGa_wu + WaHa_l.emAscent;

	// 3 BASELINES ( top/middle/bottom are RECT based )
	// TextMetrics.alphabeticBaseline
	// TextMetrics.hangingBaseline
	// TextMetrics.ideographicBaseline

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

	Sx_l.lineWidth = 2;
	Sx_l.fillStyle = "#FFFF00EE";
	Sx_l.fillText( SiKeDru_vsg, KeDru__GeGx_wu, KeDru__GeGa_wu );

	Sx_l.lineWidth = 1;
	Sx_l.strokeStyle = "#FF0000AA";
	Sx_l.strokeText( SiKeDru_vsg, KeDru__GeGx_wu, KeDru__GeGa_wu );

	const KeDru__HryHa_yk = true;

	if( KeDru__HryHa_yk )
	{

		//&&&
		// BASELINE DASHED
		Sx_l.beginPath();
			Sx_l.lineWidth = 1.0;
			Sx_l.strokeStyle = "#000000FF";
			Sx_l.setLineDash( [ 12, 4 ] );
			Sx_l.moveTo( GeGx_wu, KeDru__GeGa_wu );
			Sx_l.lineTo( GeGx_wu + WaHa_l.GyGx_wu, KeDru__GeGa_wu );
		Sx_l.stroke();


		//&&&
		// BOUNDING BOX
		Sx_l.lineWidth = 1.0;
		Sx_l.setLineDash( [] );
		WaHa_l.GyGx_wu;
		WaHa_l.GyGa_wu;

		// HORIZONTAL
		Sx_l.beginPath();
			Sx_l.strokeStyle = "#FFFFFFFF";

			Sx_l.moveTo( GeGx_wu, GeGa_wu );
			Sx_l.lineTo( GeGx_wu + WaHa_l.GyGx_wu, GeGa_wu );

			Sx_l.moveTo( GeGx_wu, GeGa_wu + WaHa_l.GyGa_wu );
			Sx_l.lineTo( GeGx_wu + WaHa_l.GyGx_wu, GeGa_wu + WaHa_l.GyGa_wu );

		Sx_l.stroke();

		// VERTICAL
		Sx_l.beginPath();
			Sx_l.strokeStyle = "#FFFFFFFF";

			Sx_l.moveTo( GeGx_wu, GeGa_wu );
			Sx_l.lineTo( GeGx_wu, GeGa_wu + WaHa_l.GyGa_wu );

			Sx_l.moveTo( GeGx_wu + WaHa_l.GyGx_wu, GeGa_wu );
			Sx_l.lineTo( GeGx_wu + WaHa_l.GyGx_wu, GeGa_wu + WaHa_l.GyGa_wu );

		//Sx_l.stroke();
	}

}


//==============================================
// GLF CMDS
//==============================================
//-------------------------------------------------
DoGLF.Mo = function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{

}


//==============================================
// END
//==============================================
