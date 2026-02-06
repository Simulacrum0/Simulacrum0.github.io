// SySmz.v.Du
"use strict";
const SyTe = { VaSy: "SyTe" };
window.SyTe = SyTe;

//==============================================
// QUALITIES
//==============================================
const ViTe = Object.freeze
({
	ViTe0_qk: 0
	, ViTe1_qk: 1
	, ViTe2_qk: 2
});


//==============================================
// ACTIONS
//==============================================

//-------------------------------------------------
SyTe.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaJe( "[" + this.VaSy + "] SmaYz" );

	Object.keys( ViTe_qk ).forEach( _Va => {	SmaJe( _Va ); });
	Object.values( ViTe_qk ).forEach( _Vi => { SmaJe( _Vi );	});
}


//==============================================
// LIFE
//==============================================

//==============================================
// GPS
//==============================================
function KiGPS_Trx(error)
{
	const Err_vsg = "";
	  switch(error.code)
	{
		case error.PERMISSION_DENIED:
		  Err_vsg = "User denied the request for Geolocation."
		  break;
		case error.POSITION_UNAVAILABLE:
		Err_vsg = "Location information is unavailable."
		break;
		case error.TIMEOUT:
		Err_vsg = "The request to get user location timed out."
		break;
		case error.UNKNOWN_ERROR:
		Err_vsg = "An unknown error occurred."
		break;
	}
	SmaTrx( [GPS]_ERR:", Err_vsg );
}

function KiGPS_Fy(Ge_l )
{
	// coords.latitude	The latitude as a decimal number (always returned)
	// coords.longitude	The longitude as a decimal number (always returned)
	// coords.accuracy	The accuracy of position (always returned)

	// coords.altitude	The altitude in meters above the mean sea level (returned if available)
	// coords.altitudeAccuracy	The altitude accuracy of position (returned if available)
	// coords.heading	The heading as degrees clockwise from North (returned if available)
	// coords.speed	The speed in meters per second (returned if available)
	// timestamp	The date/time of the response (returned if available)

	SmaJe( [GPS]: Lat:", Ge_l.coords.latitude, " Lon:", Ge_l.coords.longitude );
}

//-------------------------------------------------
SyTe.BriYi = function( Sa_l )
//-------------------------------------------------
{
}

//-------------------------------------------------
SyTe.BriYa = function( Yz_k )
//-------------------------------------------------
{
	const Sa_l = SySmz__YaFz_v( DoGPS );



	// getCurrentPosition() one-shot
	// watchPosition() - continues to return updated location as the user moves (like the GPS in a car).
	// clearWatch() - Stops the watchPosition() method.
	if (navigator.geolocation){ navigator.geolocation.watchPosition( KiGPS_Fy, KiGPS_Trx ); }
	else { SmaDre( "Geolocation is not supported by this browser." ); }

	return SySmz__YaFx_v( Sa_l );
}

//-------------------------------------------------
SyTe.Mo = function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{
}

//==============================================
// END
//==============================================
