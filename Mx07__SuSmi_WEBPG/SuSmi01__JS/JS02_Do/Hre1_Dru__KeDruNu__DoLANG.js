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
//==============================================
// CMDS
//==============================================
//==============================================

//=====================================
// DETECT_LANG
//=====================================
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
		const Me_vsg = await KeDruNu_l.translate( Mi_vsg );
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
const SaLANG_l = Sa_l;

	const KeDruNu__EN_ES_wuk = await SaLANG_l.Ji.Chz_KeDruNu_wu( SaLANG_l, "en", "es" );
	if( KeDruNu__EN_ES_wuk >= 0 )
	{
		const Te_vsg = await SaLANG_l.Ji.ChyNu_KeDru_vsg( SaLANG_l, KeDruNu__EN_ES_wuk, "Hi there. Hope my test makes sense." );

		SmaSy( "[LANG] ChyNu =>", Te_vsg );

		SaLANG_l.Ji.Chx_KeDruNu( SaLANG_l, KeDruNu__EN_ES_wuk );
	}

	const Me_v = await SaLANG_l.Ji.Mz_KeDru_vvsg( SaLANG_l, "Hola Amigo!" );
	SmaDBG( Me_v );

	if( Me_v )
	{
		for( const Me_k of Me_v )
		{
			SmaSy( "[LANG] Detect:", Me_k.detectedLanguage, Me_k.confidence);
		}
	}
}

//==============================================
// END
//==============================================
