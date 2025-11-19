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

	.then(function(loaded_face)
	{
		document.fonts.add(loaded_face);
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
async function Hrz7_Kru__ChaSySmz( Si_vsg, SyJy_vsg, ToKz_vsg, VaSy_vsg, Yz_l )
{
	//@@@
	// ECOSYS_GOOD
	if( KoDz__YzTrx_y() ) return;

	//@@@
	// IF NOT ALREADY LOADED!
	if( ! window[ VaSy_vsg ] )
	{
		await import( "/Mx07__SuSmi_WEBPG/SuSmi01__JS/" + Si_vsg + "/" + SyJy_vsg + '__' + ToKz_vsg + "__" + VaSy_vsg + ".js" );
	}

	//@@@
	// AWAIT BEGIN SERV_ADD
	const Sy_l = await window[ VaSy_vsg ].BriYa( Yz_l );
	if( Sy_l )
	{
		const SyVx_wuk = Ko.Ta_SySmz.push( Sy_l ) - 1;


		//$$$
		// LOG
		SmaSme( "+++ SERV_ADD[", SyVx_wuk, "]: ", Sy_l.Ji.VaSy, " = ", Sy_l, "KoYz ", Ko.Yz_q );
		Sy_l.Ji.SmaYz( Sy_l );

		//!!!
		// IF ANYTHING ERR'D, Then Release Us
		if( KoDz__YzTrx_y()) { Hrz7_Kru__ChiSySmz( SyVx_wuk ); return -1; }

		return SyVx_wuk;
	}
	else
	{
		SmaSme( "!!! SERV_ERR: ", VaSy_vsg );
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

	SmaSme( "--- SERV_REMOVE[", SyVx_wuk, "]: ", Sy_l.Ji.VaSy, " = ", Sy_l );

	if( Sy_l.Ji.BriYi ){ Sy_l.Ji.BriYi( Sy_l ); }

	Ko.Ta_SySmz[ SyVx_wuk ] = null;
}

//==============================================
// END
//==============================================
