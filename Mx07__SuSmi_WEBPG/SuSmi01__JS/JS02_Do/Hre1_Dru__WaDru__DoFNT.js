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
// ACTIONS
//==============================================

//-------------------------------------------------
DoFNT.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaSme( "Service Example: ", this.VaSy );

	Object.keys( ViTe_qk ).forEach( _Va => {	SmaSme( _Va ); });
	Object.values( ViTe_qk ).forEach( _Vi => { SmaSme( _Vi );	});

	// if( BriDz_NxHoTrx_y( "TEST FAKE ERROR", null )){ return; }

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
	const Sa_l = { Ji: DoFNT };

	FNT_TaFuHa();

	return Sa_l;
}


//-------------------------------------------------
DoFNT.Mo = function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{
}


//==============================================
// END
//==============================================
