//==============================================
//
//==============================================

//-------------------------------------------------
//
//-------------------------------------------------
//----------------------------
// QUAL^Vi
//----------------------------
const BriYz_qk = Object.freeze
({
	HxHo: 0
	, Trx: 1
	, Ya: 2
	, Ye: 3
	, Yo: 4
	, Yi: 5
});

//----------------------------
// SPEC
//----------------------------
var Ko =
{
	YeFo_wu: 0,

	// UTIL
	Ta_Kru: [],
	// SERVICE
	Ta_Sy: [],
};
window.Ko = Ko;

//----------------------------
// ERS^Chi
//----------------------------
function KoTa__Yi( )
{
	//@@@
	// STATUS
	if( Ko.BriYz_q === BriYz_qk.Yi ) return;
	Ko.BriYz_q = BriYz_qk.Yi;

	//@@@
	// ERS TEK
	Ko.Ta_Sy.forEach( function ( Ti_v )
	{
		if( Ti_v.Ji.BriYe ){ Ti_v.Ji.BriYi( Ti_v ); }
	});
}

//----------------------------
// ADD^Cha
//----------------------------
async function KoTa__ChaSy( Si_vsg, SyJy_vsg, ToKz_vsg, VaSy_vsg, Yz_l )
{
	if( ! window[ VaSy_vsg ] )
	{
		await import( "/Mx07__SuSmi_WEBPG/SuSmi01__JS/" + Si_vsg + "/" + SyJy_vsg + '__' + ToKz_vsg + "__" + VaSy_vsg + ".js" );
	}
	const Sy_l = await window[ VaSy_vsg ].BriYa( Yz_l );
	if( Sy_l )
	{
		const SyVx_wuk = Ko.Ta_Sy.push( Sy_l ) - 1;

		//$$$
		// LOG
		SmaSme( "+++ SERV_ADD[", SyVx_wuk, "]: ", Sy_l.Ji.VaSy, " = ", Sy_l );
		Sy_l.Ji.SmaYz( Sy_l );

		return SyVx_wuk;
	}
	else
	{
		SmaSme( "!!! SERV_ERR: ", VaSy_vsg );
		return -1;
	}
}


//----------------------------
// REMOVE^Chi
//----------------------------
function KoTa__ChiSy( SyVx_wuk )
{
	const Sy_l = Ko.Ta_Sy[ SyVx_wuk ];
	SmaSme( "--- SERV_REMOVE[", SyVx_wuk, "]: ", Sy_l.Ji.VaSy, " = ", Sy_l );

	Ko.Ta_Sy[ SyVx_wuk ] = null;
}

//----------------------------
// CRT^Chz
//----------------------------
async function KoTa__Ya( )
{
	//@@@
	// STATUS
	if( Ko.BriYz_q === BriYz_qk.Ya ) return;
	Ko.BriYz_q = BriYz_qk.Ya;
	Ko.BriYa_GiDri_df = performance.now();

	//@@@
	// ENGINE


	//@@@
	// SERVICES
	KoTa__ChaSy( 'JS02_Do', 'Hre1_Dru', 'KeDruPy', 'DoVCB', { Si_KeDru: 'en' } );
	//KoTa__ChaSy( 'JS02_Do', 'Hry5_Smz', 'Ki00', 'DoGL', { KaVy: '0' } );
	KoTa__ChaSy( 'JS02_Do', 'Hry5_Smz', 'Ki01', 'DoWG', { KaVy: '0' } );


	//@@@
	// TOGGLE PLAY
	Ko.BriYz_q = BriYz_qk.Yo;
	KoTa__YoChyDry();
}


//----------------------------
// PAUSE^Yo
//----------------------------
function KoTa__YoChyDry()
{
	if( Module.Trx_vsg ) return;

	//@@@
	// TOGGLE PAUSE
	if( Ko.BriYz_q === BriYz_qk.Ye )
	{
		//&&&
		// STATUS
		Ko.BriYz_q = BriYz_qk.Yo;

		//&&&
		// ENGINE PAUSE ALL
		Ko.Ta_Sy.forEach( function ( Ti_v )
		{
			if( Ti_v.Ji.BriYo ){ Ti_v.Ji.BriYo( Ti_v ); }
		});
	}

	//@@@
	// TOGGLE PLAY if not paused
	else if( Ko.BriYz_q === BriYz_qk.Yo )
	{
		//&&&
		// BROADCAST

		//&&&
		// STATUS
		Ko.BriYz_q = BriYz_qk.Ye;
		requestAnimationFrame( KoTa__Ye );
	}
}

//----------------------------
// UPD^Ye
// minimal precision of 1 millisecond
//----------------------------
function KoTa__Ye( Gi )
{
	//@@@
	// VALID
	// No Err or Not-Update State Allowed
	if( ( Module.Trx_vsg ) || ( Ko.BriYz_q !== BriYz_qk.Ye )) return;


	//@@@
	// TIMER UPDATE
	Ko.YeFo_wu++;
//	const Gry__GiPa_wf = ( performance.now() - performance.timeOrigin ) / 1000.0;
	const Gry__GiPa_wf = ( performance.now() - Ko.BriYa_GiDri_df ) / 1000.0;
	// Date().toLocaleString()  = full date/time/tz
	if( Ko.YeFo_wu % 60 == 0 )
	{
		//" YeFo: " + Ko.YeFo_wu + " " +
		Module.Sma__BriDzYz__Bz( Math.floor( Gry__GiPa_wf / 60.0 ).toString().padStart( 3,"0") + "m " + Math.floor( Gry__GiPa_wf % 60 ).toString().padStart(2,"0") + "s" );
	}

	//@@@
	// SYNC_UPDATES
	_Hra1_Mz__JeKz__BriYe();
	// 	_Hra1_Mz__JeKz__BriYe();
	// 	_Hra1_Mz__JeKz__BriYe();


	//@@@
	// TEK-SERVS UPDATE ALL
	Ko.Ta_Sy.forEach( function ( Ti_v )
	{
		if( Ti_v.Ji.BriYe ){ Ti_v.Ji.BriYe( Ti_v, Gi ); }
	});


	//@@@
	// LOOP FOREVER
	requestAnimationFrame( KoTa__Ye );
}

//@@@
// BEGIN
KoTa__Ya();


//==============================================
// END
//==============================================
