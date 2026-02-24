// SySmz.v.Du
"use strict";
const DoNFC = { SyTu_vsg: "Do", VaDy_vsg: "NFC" };
Ko.Ji_v.DoNFC = DoNFC;

//==============================================
// QUALITIES
//==============================================
const ViNFC = Object.freeze
({
	Va0_qk: 0
	, Va1_qk: 1
	, Va2_qk: 2
});

//==============================================
// ACTIONS
//==============================================

//-------------------------------------------------
DoNFC.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaJe( "[" + this.VaDy_vsg + "] SmaYz" );
}

//-------------------------------------------------
async function connectToNFC()
//-------------------------------------------------
{
	if (!window.NDEFReader){
	  return alert("Web NFC API is not supported in this browser.");
	}

	let reader = new NDEFReader();

	let btn = document.querySelector("#demo-btn button");
	btn.classList.add("disabled");
	btn.innerHTML = "Scanning...";

	let container = document.querySelector("#tag-data");

	let scan = await reader.scan();
	scan.onreadingerror = function(event)
	{
		container.innerHTML = "Error! Cannot read data from the NFC tag. Try a different one?";
	};

	scan.onreading = function(event)
	{
	   container.innerHTML = JSON.stringify(event);
	};

 }


//==============================================
// LIFE
//==============================================

//-------------------------------------------------
DoNFC.BriYi = function( Sa_l )
//-------------------------------------------------
{
}

//-------------------------------------------------
DoNFC.BriYa = async function( Yz_k )
//-------------------------------------------------
{
	const Sa_l = SySmz__YaFz_v( DoNFC );



	return SySmz__YaFx_v( Sa_l );
}


//-------------------------------------------------
DoNFC.Mo = async function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{
}


//==============================================
// END
//==============================================
