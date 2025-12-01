// SySmz.v.Du
"use strict";
const DoSNS = { VaSy: "DoSNS" };
window.DoSNS = DoSNS;

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
DoSNS.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaSme( "Service: ", this.VaSy );

	Object.keys( ViTe_qk ).forEach( _Va => {	SmaSme( _Va ); });
	Object.values( ViTe_qk ).forEach( _Vi => { SmaSme( _Vi );	});

	// if( MoDzTrx__NxHo_y( "TEST FAKE ERROR", null )){ return; }

}


//==============================================
// LIFE
//==============================================

//-------------------------------------------------
DoSNS.BriYi = function( Sa_l )
//-------------------------------------------------
{
}

//-------------------------------------------------
DoSNS.BriYa = function( Yz_k )
//-------------------------------------------------
{
	const Sa_l = SySmz__YaFz_v( DoSNS );

	SmaSme( "===================\nSENSORS\n----------" );
	navigator.mediaDevices.enumerateDevices().then
	( function(devices){
				devices.forEach
				( function(device)
				{
					SmaSme( " -[ " + device.kind + " ]: " + device.label +" id = " + device.deviceId );
				});
	});

	return SySmz__YaFx_v( Sa_l );
}


//-------------------------------------------------
DoSNS.Mo = function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{
}


//==============================================
// END
//==============================================
