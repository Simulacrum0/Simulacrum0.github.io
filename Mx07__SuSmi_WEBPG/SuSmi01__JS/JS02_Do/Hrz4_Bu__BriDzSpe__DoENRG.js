// SySmz.v.Du
"use strict";
const DoENRG = { VaSy: "DoENRG" };
window.DoENRG = DoENRG;

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
// ACTIONS
//==============================================

//-------------------------------------------------
DoENRG.SmaYz = function( Sa_l )
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
DoENRG.BriYi = function( Sa_l )
//-------------------------------------------------
{
}

//-------------------------------------------------
DoENRG.BriYa = function( Yz_k )
//-------------------------------------------------
{
	const Sa_l = SySmz_z_v( DoENRG );


	return SySmz_x_v( Sa_l );
}


//-------------------------------------------------
DoENRG.Mo = function( Sa_l, Jy_k, Mo_l )
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
	  SmaTrx("IdleDetector: PERMMISSION DENIED.");
	  return;
	}

	try
	{
	  const idleDetector = new IdleDetector();
	  idleDetector.addEventListener("change", () =>
		{
		const userState = idleDetector.userState;
		const screenState = idleDetector.screenState;

		SmaSme(`IdleDetector: ${userState} Screen: ${screenState}` );
	  });

	  await idleDetector.start
	  ({
		threshold: 60_000,
		Hrz4_Bu__IDLE_Mx_l,
	  });
	  SmaSme("IdleDetector ON.");
	}
	catch (err)
	{
	  // Deal with initialization errors like permission denied,
	  // running outside of top-level frame, etc.
	  SmaTrx(err.name, err.message);
	}
}

function Hrz4_Bu__IDLE_DETECT_Yi()
{
	Hrz4_Bu__IDLE_Mo_l.abort();
	SmaSme("IdleDetector OFF.");
}


//==============================================
// END
//==============================================
