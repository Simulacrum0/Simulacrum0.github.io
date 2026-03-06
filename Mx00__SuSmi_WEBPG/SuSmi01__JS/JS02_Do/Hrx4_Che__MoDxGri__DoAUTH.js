// SySmz.v.Du
"use strict";
const DoAUTH = { SyTu_vsg: "Do", VaDy_vsg: "AUTH" };
Ko.Ji.DoAUTH = DoAUTH;


//==============================================
// DEFINES
//==============================================
const AUTH = Object.freeze
({
	AUTH0_qk: 0
	, AUTH1_qk: 1
	, AUTH2_qk: 2

});


//==============================================
// ACTIONS
//==============================================

//-------------------------------------------------
DoAUTH.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaJe( "[" + this.VaDy_vsg + "] SmaYz" );
}


//==============================================
// LIFE
//==============================================

//-------------------------------------------------
DoAUTH.BriYi = function( Sa_l )
//-------------------------------------------------
{
}

//-------------------------------------------------
DoAUTH.BriYa = async function( Yz_k )
//-------------------------------------------------
{
	const Sa_l = SySmz__YaFz_v( DoAUTH );

	//@@@
	// WEBAUTH *REQUIRES* a RELAY PROVIDER
	// Meaning a server running to scale is needed?
	// Thus, better to offer 'signin' w/ Big Tech Providers
	// than require hosting.
	//
	// PROVIDERS w/ FREE TIER
	// but limited user count
	// PERHAPS roll our own via 'P2P Node Neighbors' ?
	// https://auth0.com/pricing
	/*
	if (window.PublicKeyCredential && PublicKeyCredential.isConditionalMediationAvailable)
	{
		// Check if conditional mediation is available.
		const isCMA = await PublicKeyCredential.isConditionalMediationAvailable();
		if (isCMA)
		{
			// Call WebAuthn authentication

			SmaSy( "[AUTH] Available" );

			return SySmz__YaFx_v( Sa_l );
	  	}
	}
	return null;
	*/


	//@@@
	// AUTH SIGN IN
	// Use Non-WebAUTH approach via Single Sign-On Session
	// Providers:
	// KyAPPL: https://developer.apple.com/help/account/capabilities/configure-sign-in-with-apple-for-the-web/
	// KyGOOG: https://developers.google.com/identity/gsi/web/guides/overview
	// - Google Identity Services (GIS) 
	// KyMSFT: https://learn.microsoft.com/en-us/samples/azure-samples/ms-identity-ciam-javascript-tutorial/ms-identity-ciam-javascript-tutorial/


	return SySmz__YaFx_v( Sa_l );
}


//-------------------------------------------------
DoAUTH.Mo = async function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{


}


//==============================================
// END
//==============================================
