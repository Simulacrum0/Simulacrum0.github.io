// SySmz.v.Du
"use strict";
const DoSTRM = { VaSy: "DoSTRM" };
window.DoSTRM = DoSTRM;

//==============================================
// QUALITIES
//==============================================
const STRM_qk = Object.freeze
({
	STRM0: 0
	, STRM1: 1
	, STRM2: 2

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

	// if( MoDzTrx__NxHo_y( "TEST FAKE ERROR", null )){ return; }

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
			const res = await fetch( Si_l );
			const blob = await res.blob();
			Ko.SuKz_v[ Vx_k ] = await createImageBitmap(blob, { colorSpaceConversion: 'none' });
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
