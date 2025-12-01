// SySmz.v.Du
"use strict";
const DoFNT = { VaSy: "DoFNT" };
window.DoFNT = DoFNT;

//==============================================
// QUALITIES
//==============================================
const ViTe_qk = Object.freeze
({
	ViTe0: 0
	, ViTe1: 1
	, ViTe2: 2

});

//==============================================
// FONTS AVAIL
//==============================================
async function FNT_TaFuHa()
{
	try {
		let Fe_wu = 0;
		const availableFonts = await window.queryLocalFonts();
		for (const fontData of availableFonts)
		{
			// `blob()` returns a Blob containing valid and complete SFNT-wrapped font data.
			// const sfnt = await fontData.blob();

			// Slice out only the bytes we need: the first 4 bytes are the SFNT
			// version info.
			// Spec: https://docs.microsoft.com/en-us/typography/opentype/spec/otff#organization-of-an-opentype-font
			// const sfntVersion = await sfnt.slice(0, 4).text();

			// let outlineFormat = 'UNKNOWN';
			// switch (sfntVersion)
			// {
			// 	case '\x00\x01\x00\x00':
			// 	case 'true':
			// 	case 'typ1':
			// 		outlineFormat = 'truetype';
			// 		break;
			// 	case 'OTTO':
			// 		outlineFormat = 'cff';
			// 		break;
			// }

			SmaSme
				(
					"Fnt[ " + Fe_wu
					+ " ] " + fontData.postscriptName
					+ " @ " + fontData.fullName
					+ " ( " + fontData.family
					+ " )" + fontData.style
				);
			Fe_wu++;
		}
	}
	catch (err) {
		{SmaTrx(err.name, err.message);}
	}
}

//==============================================
// RMV/ADD
//==============================================
function FNT_Chi( Va_l )
{
	if( document.fonts.Va_l ) { document.fonts.Va_l = null; }
}


async function Hrz7_Kru__ChaWaDru( Va_l, KuTu_l )
{
	var Fe__WaDru_l = new FontFace('Junction Regular', 'url(fonts/junction-regular.woff)');
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
}

//==============================================
// ACTIONS
//==============================================

//-------------------------------------------------
DoFNT.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaSme( "Service Example: ", this.VaSy );

	Object.keys( ViTe_qk ).forEach( _Va => {	SmaSme( _Va ); });
	Object.values( ViTe_qk ).forEach( _Vi => { SmaSme( _Vi );	});

	// if( MoDzTrx__NxHo_y( "TEST FAKE ERROR", null )){ return; }

}


//==============================================
// LIFE
//==============================================

//-------------------------------------------------
DoFNT.BriYi = function( Sa_l )
//-------------------------------------------------
{
}

//-------------------------------------------------
DoFNT.BriYa = function( Yz_k )
//-------------------------------------------------
{
	const Sa_l = SySmz__YaFz_v( DoFNT );

	FNT_TaFuHa();

	return SySmz__YaFx_v( Sa_l );
}


//-------------------------------------------------
DoFNT.Mo = function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{
}


//==============================================
// END
//==============================================
