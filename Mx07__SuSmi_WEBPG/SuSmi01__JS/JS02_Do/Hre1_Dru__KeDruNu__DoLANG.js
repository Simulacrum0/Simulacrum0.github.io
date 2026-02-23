// SySmz.v.Du
"use strict";
const DoLANG = { SyTu_vsg: "Do", VaDy_vsg: "LANG" };
window.DoLANG = DoLANG;

//==============================================
// WEB TRANSLATION
//==============================================
//
// MARKET_AVAIL: https://caniuse.com/?search=translation
// PLAYGROUND: https://chrome.dev/web-ai-demos/built-in-ai-playground/
//
//==============================================


//==============================================
// REPORT
//==============================================

//-------------------------------------------------
DoLANG.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaJe( "[" + this.VaDy_vsg + "] SmaYz" );
}


//==============================================
// AUTO_PROCESSING
//==============================================

//-------------------------------------------------
async function KeDruNu__WzTra( Sa_l, Ti_k, Vx_wu )
//-------------------------------------------------
{

}


//-------------------------------------------------
async function KeDruGra__TaFu( Sa_l, KeDruGra_v )
//-------------------------------------------------
{


}


//==============================================
//==============================================
// CMDS
//==============================================
//==============================================

//=====================================
// DETECT_LANG
// Not Used Currently; Fails to Work & no Usecase yet
//=====================================
/*
DoLANG.Mz_KeDru_vvsg = async function( Mi_vsg )
{
	const Mz_KeDru_k = await LanguageDetector.create();
	if( !Mz_KeDru_k ){ return null; }

	try
	{
		const Me_v = await Mz_KeDru_k.detect( Mi_vsg );
		return Me_v;
	}
	catch (e)
	{
		if (e.name === "QuotaExceededError")
		{
			SmaTrx( `[LANG] Detect: Text ${e.requested / e.quota}x too large.`);
		}
		else { SmaTrx( "[LANG] Detect: Failed" ); }
	}

	//@@@
	// ONE-SHOT LIFE
	Mz_KeDru_k.destroy();
	return null;
}

*/

	//@@@
	// EXAMPLE =DETECT LANG
	// 2026 FAILS & No Current Usecase
	/*
	 const Me_v = await DoLANG..Mz_KeDru_vvsg( Sa_l, "Hola Amigo. Como estas? Donde esta?" );
	SmaDBG( Me_v );
	if( Me_v )
	{
		for( const Me_k of Me_v )
		{
			SmaSy( "[LANG] Detect:", Me_k.detectedLanguage, Me_k.confidence);
		}
	}
	*/


//=====================================
// TRANSLATE_TXT
//=====================================
DoLANG.ChyNu_KeDru_vsg = async function( Sa_l, KeDruNu_wuk, Mi_vsg )
{
	SmaJe( "[LANG] Translate:", Mi_vsg );

	//@@@
	// TRANSLATOR
	if( KeDruNu_wuk >= Sa_l.KeDruNu_v.length ) return;
	const KeDruNu_l = Sa_l.KeDruNu_v[ KeDruNu_wuk ];
	if( !KeDruNu_l ) return;

	//@@@
	// CONVERT
	try
	{
		// SHORT SECTIONS
		// const Me_vsg = await KeDruNu_l.translate( Mi_vsg );

		// LONGER SECTIONS
		const TaMe_k = KeDruNu_l.translateStreaming( Mi_vsg );
		let Me_vsg = "";
		for await (const Ti_vsg of TaMe_k )
		{ Me_vsg += Ti_vsg; }


		return Me_vsg;
	}
	catch( e )
	{
		if (e.name === "QuotaExceededError")
		{ SmaTrx( `[LANG] Translate: Text ${e.requested / e.quota}x too large.`); }
		else
		{
			SmaTrx( "[LANG] Translate: Failed", e.name );
			SmaDBG( e );
		}

		return null;
	}
}

//==============================================
//==============================================
// TRANSLATOR OBJECT
//==============================================
//==============================================

//-------------------------------------------------
// DESTROY TRANSLATOR
//-------------------------------------------------
DoLANG.Chx_KeDruNu = async function( Sa_l, KeDruNu_wuk )
{
	if( KeDruNu_wuk >= Sa_l.KeDruNu_v.length ) return;
	const KeDruNu_l = Sa_l.KeDruNu_v[ KeDruNu_wuk ];

	if( KeDruNu_l ){ KeDruNu_l.destroy(); Sa_l.KeDruNu_v[ KeDruNu_wuk ] = null; }
}

//-------------------------------------------------
// CREATE TRANSLATOR
//-------------------------------------------------
DoLANG.Chz_KeDruNu_wu = async function( Sa_l, Si__KeDru_vsg, Se__KeDru_vsg )
{
	//@@@
	// ADD DOWNLOAD CANCEL OPTION
	// const ChoYi_k = new AbortController();

	//@@@
	// CRT OBJ

	try
	{
		const KeDruNu_k = await Translator.create
		({
			sourceLanguage: Si__KeDru_vsg
			, targetLanguage: Se__KeDru_vsg
			//, signal: ChoYi_k.signal,

			, monitor(monitor)
			{
				monitor.addEventListener( "downloadprogress", (e) =>
				{
					SmaJe( `[LANG] Translator Downloaded: ${Math.floor(e.loaded * 100)}%` );
				});
			}
		});

		//$$$
		// ABORT
		// Add if needed?
		// ChoYi_k.abort();
		//ChoYi_k = null;

		const KeDruNu_wuk = Sa_l.KeDruNu_v.length;
		if( !KeDruNu_k ){ return -1; }

		Sa_l.KeDruNu_v.push( KeDruNu_k );

		SmaJe( "[LANG]", Si__KeDru_vsg, " => ", Se__KeDru_vsg, " Limit:", KeDruNu_k.inputQuota.toString() );

		return KeDruNu_wuk;
	}
	catch( e )
	{
		if (e.name === "QuotaExceededError")
		{ SmaTrx( "[LANG] Translator Data: Too Large to Run" ); }
		else { SmaTrx( "[LANG] Translator Data: Failed" ); }
		return -1;
	}

	return -1;
}



//==============================================
// LIFE
//==============================================

//-------------------------------------------------
DoLANG.BriYi = function( Sa_l )
//-------------------------------------------------
{
	Sa_l.KeDruNu_v.forEach( function ( KeDruNu_l, Vx_wu )
	{
		if( KeDruNu_l ){ KeDruNu_l.destroy(); }
	});

	Sa_l.KeDruNu_v = null;
}

//-------------------------------------------------
DoLANG.BriYa = async function( Yz_k )
//-------------------------------------------------
{
	// SmaJe( "[LANG] Translation Checking" );

	if ('Translator' in self )
	{
		const Sa_l = SySmz__YaFz_v( DoLANG );
		SmaJe( "[LANG] Translation Ready" );
		Sa_l.KeDruNu_v = [];
		return SySmz__YaFx_v( Sa_l );
	}


	SmaDre( "[LANG] Translation Not Avail" );
	return null;
}


//-------------------------------------------------
DoLANG.Mo = async function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{
	//SmaDBG( "LANG: This", this, "Sa", Sa_l, "Ji", DoLANG. );

	// KeDruGra__TaFu( Sa_l, Hre1_Dru__Gra_v );

	const KeDru__ToKz_v = [];

	for( let i = 0; i < Hre1_Dru__Gra_v.length; i++ )
	{
		const Se__Vy_vsg = Hre1_Dru__Gra_v[ i ].Vy;
		const Se__ToKz_vsg = Hre1_Dru__Gra_v[ i ].ToKz;

		if( Se__ToKz_vsg === "en" ) continue;

		try
		{
			const Sma_vsg = await Translator.availability
			({
				sourceLanguage: "en",
				targetLanguage: Se__Vy_vsg
			});

			if (Sma_vsg === "unavailable")
			{
				SmaSy( "[LANG] #", i, " = ", Se__Vy_vsg, "🚫" );
			}
			else
			{
				if( !KeDru__ToKz_v.includes( Se__ToKz_vsg ) )
				{
					KeDru__ToKz_v.push( Se__ToKz_vsg );
				}

				if (Sma_vsg === "available")
				{
					SmaSy( "[LANG] #", i, " = ", Se__Vy_vsg, "✅" );
				}
				else if (( Sma_vsg === "downloadable") || (Sma_vsg === "downloading"))
				{
					SmaSy( "[LANG] #", i, " = ", Se__Vy_vsg, "⏳" );
				}
			}
		}
		catch( e )
		{
			SmaTrx( "[LANG] #", i, " FAIL @ ", Se__Vy_vsg );
		}
	}

	SmaJe( "[LANG] Gra:", KeDru__ToKz_v.length, " Fo: ", Hre1_Dru__Gra_v.length );
	// for( const f in KeDru__ToKz_v )
	// {
	// 	SmaJe( "[LANG] #", f, " ", KeDru__ToKz_v[ f ] );
	// }

	let ARR_vsg = "";
	for( const f in KeDru__ToKz_v )
	{
		const Vx_wuk = f + 1;
		ARR_vsg += `\t\t, \" ${KeDru__ToKz_v[ f ]}\" // #${Vx_wuk}\n`;
	}
	console.log( ARR_vsg );

	// Ko.KeDru__ToKz_v = KeDru__ToKz_v;


	  /*
	Hre1_Dru__Gra_v.forEach( function( Ti_k, Vx_wu )
	{
		const Se__Vy_vsg = Ti_k.Vy;
		const KeDruNu_wuk = await DoLANG..Chz_KeDruNu_wu( Sa_l, "en", Se__Vy_vsg );

		if( KeDruNu_wuk >= 0 )
		{
			const Te_vsg = await DoLANG..ChyNu_KeDru_vsg( Sa_l, KeDruNu_wuk, "Hi there. i seriously Hope my test makes sense." );

			SmaSy( "[LANG], Se__Vy_vsg, "ChyNu =>", Te_vsg );

			DoLANG..Chx_KeDruNu( Sa_l, KeDruNu_wuk );
		}

	});
*/



}

//==============================================
// END
//==============================================
