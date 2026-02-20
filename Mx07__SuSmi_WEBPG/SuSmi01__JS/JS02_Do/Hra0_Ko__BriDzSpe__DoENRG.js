// SySmz.v.Du
"use strict";
const DoENRG = { SyTu_vsg: "Do", VaDy_vsg: "ENRG" };
window.DoENRG = DoENRG;

//==============================================
// QUALITIES
//==============================================
const ViENRG = Object.freeze
({
	ENRG0_qk: 0
	, ENRG1_qk: 1
	, ENRG2_qk: 2

});


//==============================================
// ACTIONS
//==============================================

//-------------------------------------------------
DoENRG.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaJe( "[" + this.VaDy_vsg + "] SmaYz" );
}


//==============================================
// LIFE
//==============================================

//-------------------------------------------------
DoENRG.BriYi = function( Sa_l )
//-------------------------------------------------
{
}

//-------------------------------------------------
DoENRG.BriYa = async function( Yz_k )
//-------------------------------------------------
{
	const Sa_l = SySmz__YaFz_v( DoENRG );


	return SySmz__YaFx_v( Sa_l );
}


//-------------------------------------------------
DoENRG.Mo = async function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{
}

//==============================================
// IDLE DETECTOR
//==============================================
const Hrz4_Bu__IDLE_Mo_l = new AbortController();

async function Hrz4_Bu__IDLE_DETECT_Ya()
{
	const Hrz4_Bu__IDLE_Mx_l = Hrz4_Bu__IDLE_Mo_l.signal;
	if ((await IdleDetector.requestPermission()) !== "granted")
	{
	  SmaTrx( "[ENRG] IdleDetector: PERMMISSION DENIED.");
	  return;
	}

	try
	{
	  const idleDetector = new IdleDetector();
	  idleDetector.addEventListener("change", () =>
		{
		const userState = idleDetector.userState;
		const screenState = idleDetector.screenState;

		SmaJe( `[ENRG] IdleDetector: ${userState} Screen: ${screenState}` );
	  });

	  await idleDetector.start
	  ({
		threshold: 60_000,
		Hrz4_Bu__IDLE_Mx_l,
	  });
	  SmaJe( [ENRG] IdleDetector ON.");
	}
	catch (err)
	{
	  // Deal with initialization errors like permission denied,
	  // running outside of top-level frame, etc.
	  SmaTrx( "[ENRG]", err.name, err.message);
	}
}

function Hrz4_Bu__IDLE_DETECT_Yi()
{
	Hrz4_Bu__IDLE_Mo_l.abort();
	SmaJe( [ENRG] IdleDetector OFF.");
}


//==============================================
// END
//==============================================
