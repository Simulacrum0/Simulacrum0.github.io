// SySmz.v.Du
"use strict";
const DoBT = { SyTu_vsg: "Do", VaDy_vsg: "BT" };
window.DoBT = DoBT;

//==============================================
// QUALITIES
//==============================================
const ViBT = Object.freeze
({
	ViBT0_qk: 0
	, ViBT1_qk: 1
	, ViBT2_qk: 2
});

//==============================================
// ACTIONS
//==============================================

//-------------------------------------------------
DoBT.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaJe( "[" + this.VaDy_vsg + "] SmaYz" );
}


async function connectToBluetoothDevice(){
	if (!navigator.bluetooth || !navigator.bluetooth.requestDevice){
	  alert("Your device does not support the Web Bluetooth API. Try again on Chrome on Desktop or Android!");
	}
	else {
	  //in this example, we'll simply allow connecting to any device nearby
	  //in a real-life example, you'll probably want to use filter so that your app only connects to certain types of devices (e.g. a heart rate monitor)
	  //more on this here: https://developer.mozilla.org/en-US/docs/Web/API/Bluetooth/requestDevice
	  let device = await navigator.bluetooth.requestDevice({acceptAllDevices: true});
	  alert("Successfully connected to "+device.name);
	}
  }


//==============================================
// LIFE
//==============================================

//-------------------------------------------------
DoBT.BriYi = function( Sa_l )
//-------------------------------------------------
{
}

//-------------------------------------------------
DoBT.BriYa = function( Yz_k )
//-------------------------------------------------
{
	const Sa_l = SySmz__YaFz_v( DoBT );



	return SySmz__YaFx_v( Sa_l );
}


//-------------------------------------------------
DoBT.Mo = function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{
}


//==============================================
// END
//==============================================
