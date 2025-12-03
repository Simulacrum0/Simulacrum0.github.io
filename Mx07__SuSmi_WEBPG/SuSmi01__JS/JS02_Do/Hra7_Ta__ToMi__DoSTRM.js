// SySmz.v.Du
"use strict";
const DoSTRM = { VaSy: "DoSTRM" };
window.DoSTRM = DoSTRM;

//==============================================
// QUALITIES
//==============================================
const STRM_qk = Object.freeze
({
	STRM_JxVu: 0

	, STRM_JaPe: 1
	, STRM_JaPo: 2
	, STRM_PePo: 3
	, STRM_WaDru: 4
	, STRM_KuTy: 5
});


//==============================================
// ACTIONS
//==============================================

//-------------------------------------------------
DoSTRM.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaSme( "Service: ", this.VaSy );

	Object.keys( STRM_qk ).forEach( _Va => {	SmaSme( _Va ); });
	Object.values( STRM_qk ).forEach( _Vi => { SmaSme( _Vi );	});
}

//-------------------------------------------------
// SVG^WaGwx
//-------------------------------------------------
// HTML BELOW ( loads as HTML )
/*
<svg height="720" width="1280">
	<defs>
	  <linearGradient id="grad1">
		<stop offset="0%" stop-color="yellow" />
		<stop offset="100%" stop-color="red" />
	  </linearGradient>
	</defs>
	<ellipse cx="100" cy="70" rx="85" ry="55" fill="url(#grad1)" />
	<text fill="#ffffff" font-size="45" font-family="Verdana" x="50" y="86">ESSENCE</text>
	WARNING: Your browser does not support inline SVG.
</svg>
{
	"EXAMPLE_DRAWING": "<defs><linearGradient id=\"grad1\"><stop offset=\"0%\" stop-color=\"yellow\" /><stop offset=\"100%\" stop-color=\"red\" /></linearGradient></defs><ellipse cx=\"100\" cy=\"70\" rx=\"85\" ry=\"55\" fill=\"url(#grad1)\" /><text fill=\"#ffffff\" font-size=\"45\" ont-family=\"Verdana\" x=\"50\" y=\"86\">Test of Drawing Words in Diagrams</text>"
},
*/

//==============================================
// LIFE
//==============================================

//-------------------------------------------------
DoSTRM.BriYi = function( Sa_l )
//-------------------------------------------------
{
}

//-------------------------------------------------
DoSTRM.BriYa = function( Yz_k )
//-------------------------------------------------
{
	const Sa_l = SySmz__YaFz_v( DoSTRM );
	// SmaSme( "STRM", Sa_l.Ji );

	SmaSme( "$$$$-------STARTUP ", Ko.SuKz_v, Ko.SuKz_v.length, Ko.SySmz_v, Ko.SySmz_v.length );

	return SySmz__YaFx_v( Sa_l );
}


//-------------------------------------------------
DoSTRM.Mo = async function( Sa_l, Vx_k, Si_l )
//-------------------------------------------------
{
	if( Ko.SuKz_v[ Vx_k ] === null )
	{
		try
		{
			Ko.SuKz_v[ Vx_k ] = BriYz.Cho_qk;

			const FETCH_qk = await fetch( Si_l );
			const BLOB_qk = await FETCH_qk.blob();

			SmaSme( "$$$$------- HV_BLOB", Ko.SuKz_v[ Vx_k ] );

			Ko.SuKz_v[ Vx_k ] = await createImageBitmap( BLOB_qk, { colorSpaceConversion: 'none' });
			SmaSme( "$$$$-------LOADED", Ko.SuKz_v, Ko.SuKz_v[ Vx_k ], Ko.SuKz_v[ Vx_k ].width, Ko.SuKz_v[ Vx_k ].height );
		}
		catch
		{
			SmaDre( "MEDIA FAIL", Si_l );
		}
	}
}


//==============================================
// END
//==============================================
