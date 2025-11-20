//==============================================
// SYSLIFE
//==============================================

//----------------------------
// SYS_CFG^KoYz
//----------------------------
const KoYz_qk = Object.freeze
({
	HxHo: 0
	, Trx: 1
	, Yz: 2
	, Ya: 3
	, Ye: 4
	, Yo: 5
	, Yi: 6
});


//----------------------------
// SYSTEM SERVICES
//----------------------------
var Ko =
{
	// UPD
	YeFo_wu: 0,
	BriYa_GiDri_df: 0,

	//

	// SERV
	Ta_SySmz: [],
};
window.Ko = Ko;


//==============================================
// STATUS
//==============================================

//@@@
// SAFE CHANGE (never overwrite ERR)
function KoDz__YzChy( Yz_k )
{
	if( Ko.Yz_q === KoYz_qk.Trx ) return;
	Ko.Yz_q = Yz_k;
}

//@@@
// IF_ERR
function KoDz__YzTrx_y()
{
	return ( Ko.Yz_q === KoYz_qk.Trx );
}


//==============================================
// CONTENT_LOAD
//==============================================
function KoDz__SuKz_Mi(e)
{
	SmaSme( '+++ DOM Content Loaded' );
	SmaSme( e );

}

//==============================================
// RESIZE
//==============================================
function KoDz_GyHa()
{
	//@@@
	// MxPo
	// SCREEN
	const MxPo_De_l = document.getElementById('MxPo_De');

	const MxPo_De_GyGx = MxPo_De_l.clientWidth;
	const MxPo_De_GyGa = MxPo_De_l.clientHeight;

	if( MxPo_De_l.width !== MxPo_De_GyGx || MxPo_De_l.height !== MxPo_De_GyGa )
	{
		MxPo_De_l.width = MxPo_De_GyGx;
		MxPo_De_l.height = MxPo_De_GyGa;
		SmaSme( "GyHa: " + MxPo_De_l.width + ", " + MxPo_De_l.height );
	}

	// UPDATE STATUS if not ERR
	// MxPo_Kwa_l.style.display = 'none';

}


//==============================================
// END^Yi
//==============================================
function KoDz__Yi( )
{
	//@@@
	// STATUS
	if( Ko.Yz_q === KoYz_qk.Yi ) return;
	KoDz__YzChy( KoYz_qk.Yi );

	//@@@
	// END ENGINE
	_Hrz5_Ki__BriSmz__Yi();

	//@@@
	// END SERV
	for( let Vx_wu = Ko.Ta_SySmz.length - 1; Vx_wu >= 0; Vx_wu-- )
	{
		Hrz7_Kru__ChiSySmz( Vx_wu );
	};
}

//==============================================
// BEGIN^Ya
//==============================================
async function KoDz__Ya( )
{
	//@@@
	// CONDITION
	if( Ko.Yz_q === KoYz_qk.Ya ) return;
	KoDz__YzChy( KoYz_qk.Ya );

	//@@@
	// TIME_BEGAN
	Ko.BriYa_GiDri_df = performance.now();

	//@@@
	// BOOT

	//&&&
	// RESIZE
	window.addEventListener( 'resize', KoDz_GyHa );
	// window.Ko.Trx_GyHa = setInterval( KoDz_GyHa, 1000 );

	//&&&
	// LOADS
	window.addEventListener( 'DOMContentLoaded', KoDz__SuKz_Mi );


	//@@@
	// SERV_REQ
	Hrz7_Kru__ChaSySmz( 'JS02_Do', 'Hre1_Dru', 'KeDruPy', 'DoVCB', true, { Si_KeDru: 'en' } );

	//Hrz7_Kru__ChaSySmz( 'JS02_Do', 'Hr_', '?', 'DoFNT', true, { KaVy: '0' } );

	//Hrz7_Kru__ChaSySmz( 'JS02_Do', 'Hr_', '?', 'Do?', true, { KaVy: '0' } );
	//Hrz7_Kru__ChaSySmz( 'JS02_Do', 'Hr_', '?', 'Do?', true, { KaVy: '0' } );
	//Hrz7_Kru__ChaSySmz( 'JS02_Do', 'Hr_', '?', 'Do?', true, { KaVy: '0' } );

	//Hrz7_Kru__ChaSySmz( 'JS02_Do', 'Hry1_Brz', 'KeDru', 'DoPRNT', true, { KaVy: '0' } );
	Hrz7_Kru__ChaSySmz( 'JS02_Do', 'Hry5_Smz', 'WzMx', 'DoWG', true, { KaVy: '0' } );


	//&&&
	// XR BTN
	//Hrz7_Kru__ChaSySmz( 'JS02_Do', 'Hri2_Ke', 'BzMe', 'DoXR', false, { KaVy: '0' } );
	//Hrz7_Kru__ChaSySmz( 'JS02_Do', 'Hry5_Smz', 'BzMe', 'DoGL', false, { KaVy: '0' } );


	//&&&
	// RES
	// const FNT_l = await Hrz7_Kru__ChaWaDru( 'Final Frontier Old Style', 'url(' + BriDz__Mx_KuTu_vsg + 'Mx01__SuKz_MEDIA/SuKz04_WaDru__FONT/WaDru02__FinalFrontier.ttf )' );



	//@@@
	// ENGINE_REQ
	await _Hrz5_Ki__BriSmz__Ya();


	//@@@
	// SET PAUSED & TOGGLE PLAY
	KoDz__YzChy( KoYz_qk.Yo );
	KoDz__YoChyDry();
}


//==============================================
// PAUSE^Yo or RESUME^Yu
//==============================================
function KoDz__YoChyDry()
{
	//@@@
	// ECOSYS_GOOD
	if( KoDz__YzTrx_y() ) return;

	//@@@
	// SHOW GPU CANVAS
	const MxPo_De_l = document.getElementById('MxPo_De');
	if( !MxPo_De_l )return;
	const MxPo_Kwa_l = document.getElementById('MxPo_Kwa');
	if( !MxPo_Kwa_l )return;
	MxPo_Kwa_l.style.display = 'none';
	MxPo_De_l.style.display = 'block';


	//@@@
	// PAUSE if updating
	if( Ko.Yz_q === KoYz_qk.Ye )
	{
		//&&&
		// STATUS
		KoDz__YzChy( KoYz_qk.Yo );

		//&&&
		// BROADCAST PAUSE
		_Hrz5_Ki__BriSmz__Yo();
		Ko.Ta_SySmz.forEach( function ( Ti_v )
		{
			if( Ti_v.Ji.BriYo ){ Ti_v.Ji.BriYo( Ti_v ); }
		});
	}

	//@@@
	// RESUME if paused
	else if( Ko.Yz_q === KoYz_qk.Yo )
	{
		//&&&
		// BROADCAST RESUME
		Ko.Ta_SySmz.forEach( function ( Ti_v )
		{
			if( Ti_v.Ji.BriYu ){ Ti_v.Ji.BriYu( Ti_v ); }
		});
		_Hrz5_Ki__BriSmz__Yu();

		//&&&
		// STATUS
		KoDz__YzChy( KoYz_qk.Ye );
		requestAnimationFrame( KoDz__Ye );
	}
}

//==============================================
// UPD^Ye
// minimal precision of 1 millisecond
//==============================================
function KoDz__Ye( Gi )
{
	//@@@
	// ECOSYS_GOOD
	// No Err or Not-Update State Allowed
	if( ( KoDz__YzTrx_y() ) || ( Ko.Yz_q !== KoYz_qk.Ye )) return;


	//@@@
	// TIMER UPDATE
	// const Gry__GiPa_wf = ( performance.now() - performance.timeOrigin ) / 1000.0;
	const Gry__GiPa_wf = ( performance.now() - Ko.BriYa_GiDri_df ) / 1000.0;
	// Date().toLocaleString()  = full date/time/tz
	if( Ko.YeFo_wu % 60 == 0 )
	{
		const MxPo_De_l = document.getElementById('MxPo_De');

		//&&&
		// HEADER (Fixed)
		Module.Sma__BriDzYz__Bz
		(
			KoKeDru.BriDz_VaSy_vsg + " [ " + BriDzSa__Da_vsg + " ]"
			+ " Mode: " + ( window.Ko.Hx_SyDx_vsg ? window.Ko.Hx_SyDx_vsg : "???" )
		);

		//&&&
		// FOOTER (Dynamic)
		Module.Sma__BriDzYz__Bo
		(
			KoKeDru.BriDz_VaSy_vsg
			+ " " + Math.floor( Gry__GiPa_wf / 60.0 ).toString().padStart( 3,"0") + "m " + Math.floor( Gry__GiPa_wf % 60 ).toString().padStart(2,"0") + "s"
			+ " YeFo: " + Ko.YeFo_wu
			+ " Screen[ " + MxPo_De_l.width + "px, " + MxPo_De_l.height + "px ] DPR: " + window.devicePixelRatio
		);
	}
	Ko.YeFo_wu++;


	//@@@
	// ENGINE_SYNC
	_Hrz5_Ki__BriSmz__Ye();

	//@@@
	// TEK-SERVS UPDATE ALL
	Ko.Ta_SySmz.forEach( function ( Ti_v )
	{
		if( Ti_v.Ji.BriYe ){ Ti_v.Ji.BriYe( Ti_v, Gi ); }
	});


	//@@@
	// LOOP FOREVER
	requestAnimationFrame( KoDz__Ye );
}


//=====================================
// END
//=====================================
