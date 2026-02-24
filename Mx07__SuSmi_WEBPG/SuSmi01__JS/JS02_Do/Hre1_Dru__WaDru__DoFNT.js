// SySmz.v.Du
"use strict";
const DoFNT = { SyTu_vsg: "Do", VaDy_vsg: "FNT" };
window.DoFNT = DoFNT;

//==============================================
// QUALITIES
//==============================================
const ViFNT = Object.freeze
({
	TTF_qk: 0
	, OTF_qk: 1
	, WOFF_qk: 2
	, SVG_qk: 3
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

			SmaJe
				(
					"[FNT] #" + Fe_wu
					+ " " + fontData.postscriptName
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


//==============================================
// FNT_ADD^Cha
//==============================================
DoFNT.Hrz7_Kru__ChaWaDru = async function( Va_l, KuTu_l )
{
	//@@@
	// ECOSYS_GOOD
	if( KoDz__YzTrx_y() ) return;

	let Fe__WaDru_l = new FontFace( Va_l, KuTu_l );
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

// LOAD via LOCAL BLOB
/*

// Add to FONT_FAM, URL.createObjectURL for bin, etc.


let junction_font = new FontFace('Junction Regular', 'url(fonts/junction-regular.woff)');

junction_font.load().then(function(loaded_face)
{
	document.fonts.add(loaded_face);
  	document.body.style.fontFamily = '"Junction Regular", Arial';
}).catch(function(error) {} );

document.fonts.ready.then(function(font_face_set) {
	// all fonts have been loaded
});




	return fetch(`${fontUrl}.woff2`)
	.then(function (response)
	{
		// 404, 500 etc errors comes here to, so, we need to check for result
		if (response.status > 100 && response.status < 400) {
			return response.blob();
		} else {
			throw response.statusText;
		}
	})
	.then(function (fontBlob)
	{
		// We will add it to document with another shinning new CSS3 Font-Loading API
		// https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API
		let fnt = new FontFace(fontName, `url(${URL.createObjectURL(fontBlob)}) format('woff2')`, { style: fStyle, weight: fWeight });
		document.fonts.add(fnt);
		fnt.loaded.then( function ()
		{
			console.log('Font loaded via Font Loading API');
			document.documentElement.classList.add(activeClass);
		});
		fnt.load();
	})
	.catch(function (e) {
		console.error(`Failed to load font from ${fontUrl}.woff2 with error: ${e}`);
	});
*/

//==============================================
// ACTIONS
//==============================================

//-------------------------------------------------
DoFNT.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaJe( "[" + this.VaDy_vsg + "] SmaYz" );

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
DoFNT.BriYa = async function( Yz_k )
//-------------------------------------------------
{
	const Sa_l = SySmz__YaFz_v( DoFNT );

	//@@@
	// LST FNTS INSTALLED by USR
	// FNT_TaFuHa();

	return SySmz__YaFx_v( Sa_l );
}


//-------------------------------------------------
DoFNT.Mo = async function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{
}


//==============================================
// END
//==============================================
