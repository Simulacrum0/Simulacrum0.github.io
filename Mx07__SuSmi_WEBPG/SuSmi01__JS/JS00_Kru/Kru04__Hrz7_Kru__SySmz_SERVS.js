//==============================================
// JSON_ADD^Cha
//==============================================
async function Hrz7_Kru__ToKz_vJSON( ChaKuTu_vsg, ToKzVa_vsg )
{
	let KuTu_vbg = BriDz__Mx_KuTu_vsg + ChaKuTu_vsg + ToKzVa_vsg;
	SmaSme( "FILE seeking JSON: " + KuTu_vbg );
	try
	{
		const Smx_k = await fetch( KuTu_vbg, { headers: { Accept: 'application/json' } } );
		const ToKz_v = await Smx_k.json();
		//SmaSme( ToKz_v );
		return ToKz_v;
	}
	catch ( e ) { MoDzTrx( KoKeDru.TrxJy__SuKz_GriHo_vsg + " @ " + ToKzVa_vsg + " --> " + e ); }
	return null;
};

//==============================================
// TXT_ADD^Cha
//==============================================
async function Hrz7_Kru__ToKz_vsg( ChaKuTu_vsg, ToKzVa_vsg )
{
	let KuTu_vbg = BriDz__Mx_KuTu_vsg + ChaKuTu_vsg + ToKzVa_vsg;
	//SmaSme( "FILE seeking TEXT: " + KuTu_vbg );
	try
	{
		const Smx_k = await fetch( KuTu_vbg );
		const ToKz_v = await Smx_k.text();
		// SmaSme( ToKz_v );
		return ToKz_v;
	}
	catch ( e ) { MoDzTrx( KoKeDru.TrxJy__SuKz_GriHo_vsg + " @ " + ToKzVa_vsg + " --> " + e ); }
	return null;
};

//==============================================
// BLOB_ADD^Cha
//==============================================
async function Hrz7_Kru__ToKz_vBLOB( ChaKuTu_vsg, ToKzVa_vsg )
{
	let KuTu_vbg = BriDz__Mx_KuTu_vsg + ChaKuTu_vsg + ToKzVa_vsg;
	SmaSme( "FILE seeking BLOB: " + KuTu_vbg );
	try
	{
		const Smx_k = await fetch( KuTu_vbg );
		const ToKz_v = await Smx_k.blob();
		return ToKz_v;
	}
	catch ( e ) { MoDzTrx( KoKeDru.TrxJy__SuKz_GriHo_vsg + " @ " + ToKzVa_vsg + " --> " + e ); }
	return null;
};

//==============================================
// BUF_ADD^Cha
//==============================================
async function Hrz7_Kru__ToKz_vBUF( ChaKuTu_vsg, ToKzVa_vsg )
{
	let KuTu_vbg = BriDz__Mx_KuTu_vsg + ChaKuTu_vsg + ToKzVa_vsg;
	SmaSme( "FILE seeking BUFFER: " + KuTu_vbg );
	try
	{
		const Smx_k = await fetch( KuTu_vbg );
		const ToKz_v = await Smx_k.arrayBuffer();
		return ToKz_v;
	}
	catch ( e ) { MoDzTrx( KoKeDru.TrxJy__SuKz_GriHo_vsg + " @ " + ToKzVa_vsg + " --> " + e ); }
	return null;
};

//==============================================
// MEDIA_ADD^Cha
//==============================================



//==============================================
// FNT_ADD^Cha
//==============================================
async function Hrz7_Kru__ChaWaDru( Va_l, KuTu_l )
{
	//@@@
	// ECOSYS_GOOD
	if( KoDz__YzTrx_y() ) return;

	var Fe__WaDru_l = new FontFace( Va_l, KuTu_l );
	Fe__WaDru_l.load()

	.then(function( loaded_face )
	{
		document.fonts.add( loaded_face );
		// TEST-ONLY: document.body.style.fontFamily = '"Junction Regular", Arial';
	})
	.catch(function(error)
	{
		// error occurred

	});

	return Fe__WaDru_l;
}

//==============================================
// SERV_ADD^ChaSy
//==============================================
async function Hrz7_Kru__ChaSySmz( Si_vsg, SyJy_vsg, ToKz_vsg, VaSy_vsg, SySmz__Kri_yk, Yz_l )
{
	//@@@
	// ECOSYS_GOOD
	if( KoDz__YzTrx_y() ) return;

	//@@@
	// IF NOT ALREADY LOADED!
	if( !window[ VaSy_vsg ] )
	{
		await import( BriDz__Mx_KuTu_vsg + "Mx07__SuSmi_WEBPG/SuSmi01__JS/" + Si_vsg + "/" + SyJy_vsg + "__" + ToKz_vsg + "__" + VaSy_vsg + ".js" );
	}

	//@@@
	// AWAIT BEGIN SERV_ADD
	const Sy_l = await window[ VaSy_vsg ].BriYa( Yz_l );
	if( Sy_l )
	{
		const SyVx_wuk = Ko.Ta_SySmz.push( Sy_l ) - 1;

		//$$$
		// LOG
		SmaSme( "+++ SERV_Cha[", SyVx_wuk, "]: ", Sy_l.Ji.VaSy, " = ", Sy_l, "KoYz ", Ko.Yz_q );
		Sy_l.Ji.SmaYz( Sy_l );

		//!!!
		// IF ANYTHING ERR'D, Then Release Us
		if( KoDz__YzTrx_y()) { Hrz7_Kru__ChiSySmz( SyVx_wuk ); return -1; }

		return SyVx_wuk;
	}
	// &&&
	// REQ --> FAIL means ERR
	else if( SySmz__Kri_yk )
	{
		MoDzTrx( KoKeDru.TrxJy__SySmz_GriHo_vsg + VaSy_vsg );
		return -1;
	}
	//&&&
	// XTNDED --> FAIL means ALERT
	else
	{
		SmaDre( KoKeDru.Dre__SySmz_GriHo_vsg, VaSy_vsg );
		return -1;
	}
}


//==============================================
// SERV_REMOVE^ChiSy
//==============================================
function Hrz7_Kru__ChiSySmz( SyVx_wuk )
{
	const Sy_l = Ko.Ta_SySmz[ SyVx_wuk ];
	if( !Sy_l ) return;

	SmaSme( "--- SERV_Chi[", SyVx_wuk, "]: ", Sy_l.Ji.VaSy, " = ", Sy_l );

	if( Sy_l.Ji.BriYi ){ Sy_l.Ji.BriYi( Sy_l ); }

	Ko.Ta_SySmz[ SyVx_wuk ] = null;
}

//==============================================
// END
//==============================================
