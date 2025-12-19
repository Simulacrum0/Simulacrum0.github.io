// SySmz.v.Du
"use strict";
const DoTe = { VaSy: "DoTe" };
window.DoTe = DoTe;

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
DoTe.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaSme( "Service: ", this.VaSy );

	Object.keys( ViTe_qk ).forEach( _Va => {	SmaSme( _Va ); });
	Object.values( ViTe_qk ).forEach( _Vi => { SmaSme( _Vi );	});

	// if( MoDzTrx__NxHo_y( "TEST FAKE ERROR", null )){ return; }

}

async function connectToNFC() {
	if (!window.NDEFReader){
	  return alert("Web NFC API is not supported in this browser.");
	}

	let reader = new NDEFReader();

	let btn = document.querySelector("#demo-btn button");
	btn.classList.add("disabled");
	btn.innerHTML = "Scanning...";

	let container = document.querySelector("#tag-data");

	let scan = await reader.scan();
	scan.onreadingerror = function(event){
		container.innerHTML = "Error! Cannot read data from the NFC tag. Try a different one?";
	};
	scan.onreading = function(event){
	   container.innerHTML = JSON.stringify(event);
	};
  }


//==============================================
// LIFE
//==============================================

//-------------------------------------------------
DoTe.BriYi = function( Sa_l )
//-------------------------------------------------
{
}

//-------------------------------------------------
DoTe.BriYa = function( Yz_k )
//-------------------------------------------------
{
	const Sa_l = SySmz__YaFz_v( DoTe );



	return SySmz__YaFx_v( Sa_l );
}


//-------------------------------------------------
DoTe.Mo = function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{
}


//==============================================
// END
//==============================================
