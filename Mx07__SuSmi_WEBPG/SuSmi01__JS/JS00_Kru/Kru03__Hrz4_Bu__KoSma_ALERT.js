//==============================================
// LOGS
// Skipped usual 8 layers for minimal JS
//==============================================
function SmaSme(){ var args = Array.prototype.slice.call(arguments); console.log.apply(console, args); }
function SmaDre(){ var args = Array.prototype.slice.call(arguments); console.warn.apply(console, args); }
function SmaTrx(){ var args = Array.prototype.slice.call(arguments); console.error.apply(console, args); }

//==============================================
// DISPLAY MSG
//==============================================
function KoYz_Hry()
{
	//---------------------------------
	// DEFAULT DISPLAY
	//---------------------------------
	const MxPo_De_l = document.getElementById('MxPo_De');
	if( !MxPo_De_l )return;

	const MxPo_De_GyGx = MxPo_De_l.clientWidth;
	const MxPo_De_GyGa = MxPo_De_l.clientHeight;

	//---------------------------------
	// IMPASS DISPLAY
	//---------------------------------
	const MxPo_Kwa_l = document.getElementById('MxPo_Kwa');
	if( !MxPo_Kwa_l )return;

		// MxPo_Kwa_l.className = 'HriDx MxPo';
		// MxPo_Kwa_l.id = 'MxPo_Kwa';

		MxPo_Kwa_l.clientWidth = MxPo_De_GyGx;
		MxPo_Kwa_l.clientHeight = MxPo_De_GyGa;
		MxPo_Kwa_l.width = MxPo_De_GyGx;
		MxPo_Kwa_l.height = MxPo_De_GyGa;

		// CONTEXT
		const Sx_l = MxPo_Kwa_l.getContext("2d");
		if( !Sx_l )return;

	//---------------------------------
	// FLIP CANVAS
	//---------------------------------
	MxPo_Kwa_l.style.display = 'block';
	MxPo_De_l.style.display = 'none';


	//---------------------------------
	// BLUE PRINT GRID
	//---------------------------------
	Sx_l.scale( 1.0, 1.0 );
	Sx_l.beginPath();

	// BG
	Sx_l.fillStyle = "#6666CC";
	Sx_l.fillRect(0, 0, MxPo_Kwa_l.width, MxPo_Kwa_l.height);

	// INNER GRID
	Sx_l.strokeStyle = "#8888CC";
	Sx_l.lineWidth = 1;

	TiGy_wf = 32;

	// Draw vertical lines
	for (let x = 0; x <= MxPo_Kwa_l.width; x += TiGy_wf )
	{
		Sx_l.beginPath();
		Sx_l.moveTo(x, 0);
		Sx_l.lineTo(x, MxPo_Kwa_l.height);
		Sx_l.stroke();
	}

	// Draw horizontal lines
	for (let y = 0; y <= MxPo_Kwa_l.height; y += TiGy_wf )
	{
		Sx_l.beginPath();
		Sx_l.moveTo(0, y);
		Sx_l.lineTo(MxPo_Kwa_l.width, y);
		Sx_l.stroke();
	}

	// OUTER GRID
	Sx_l.strokeStyle = "#9999CC";
	Sx_l.lineWidth = 2;

	TiGy_wf = 128;

	// Draw vertical lines
	for (let x = 0; x <= MxPo_Kwa_l.width; x += TiGy_wf )
	{
		Sx_l.beginPath();
		Sx_l.moveTo(x, 0);
		Sx_l.lineTo(x, MxPo_Kwa_l.height);
		Sx_l.stroke();
	}

	// Draw horizontal lines
	for (let y = 0; y <= MxPo_Kwa_l.height; y += TiGy_wf )
	{
		Sx_l.beginPath();
		Sx_l.moveTo(0, y);
		Sx_l.lineTo(MxPo_Kwa_l.width, y);
		Sx_l.stroke();
	}

	//---------------------------------
	// MSG
	//---------------------------------

	Sx_l.beginPath();

	// USES System Fonts, not local
	Sx_l.font = "2em Impact";
	//Sx_l.font = "3em Raleway";
	// Sx_l.font = "3em FoundationTitlesHand";
	// Sx_l.font = "4em Final Frontier Old Style";


	Sx_l.textAlign = "center";
	Sx_l.direction = "inherit";
	Sx_l.fillStyle = "#FFFFFFFF";

	const CTR_Ga_wu = MxPo_Kwa_l.height / 2;
	const WaHa_l = Sx_l.measureText( KoKeDru.TrxBz_vsg );
	const OFS_Ga_wu = Math.ceil( WaHa_l.fontBoundingBoxAscent + WaHa_l.fontBoundingBoxDescent + 2 ) / 2;

	Sx_l.fillText( KoKeDru.TrxBz_vsg, MxPo_Kwa_l.width / 2, CTR_Ga_wu - OFS_Ga_wu );
	Sx_l.fillText( Module.Trx_vsg, MxPo_Kwa_l.width / 2, CTR_Ga_wu + OFS_Ga_wu );

	// OUTLINE
	Sx_l.lineWidth = 1;
	Sx_l.strokeStyle = "#000040";
	Sx_l.strokeText( KoKeDru.TrxBz_vsg, MxPo_Kwa_l.width / 2, CTR_Ga_wu - OFS_Ga_wu );
	Sx_l.strokeText( Module.Trx_vsg, MxPo_Kwa_l.width / 2, CTR_Ga_wu + OFS_Ga_wu );

}


//=====================================
// END
//=====================================
