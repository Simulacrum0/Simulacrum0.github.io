const DoWA__BriDzSa__Da_wuk = "243"; 

//==============================================
//==============================================
// WA: Ya
//==============================================
//==============================================

// SySmz.v.Du
"use strict";
const DoWA = { SyTu_vsg: "Do", VaDy_vsg: "WA" };
Ko.Ji.DoWA = DoWA;

//==============================================
// QUALITIES
//==============================================
const ViWA = Object.freeze
({
	Va0_qk: 0
	, Va1_qk: 1
	, Va2_qk: 2
});



//==============================================
//==============================================
// WA: Yi
//==============================================
//==============================================
//==============================================
//==============================================
// WA: Ya
//==============================================
//==============================================


//==============================================
// REPORT CFG
//==============================================
//-------------------------------------------------
DoWA.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaJe( "[" + this.VaDy_vsg + "] SmaYz" );
}



//==============================================
// BUF PLAY
//==============================================
function Try_JaPe_l( Sx_l, bufferList )
{
	// SmaJe( "[WA] LOAD FINISH" );

	// Create two sources and play them both together.
	let source1 = Sx_l.createBufferSource();

	source1.buffer = bufferList[0];
	source1.connect(Sx_l.destination);
	source1.start(0);

	let source2 = Sx_l.createBufferSource();
	source2.buffer = bufferList[1];
	source2.connect(Sx_l.destination);
	source2.start( 1.0 );
}

//==============================================
// BUF LOAD
//==============================================
function Try_JaPe_t(Sx_l, JaPe__Va_vsg )
{
    this.Sx_l = Sx_l;
    this.JaPe__Va_vsg = JaPe__Va_vsg;

    this.bufferList = [];
    this.loadCount = 0;
}

Try_JaPe_t.prototype.loadBuffer = function(url, index)
{
    let request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "arraybuffer";
    let loader = this;

	request.onload = function()
	{
        loader.Sx_l.decodeAudioData
		(
            request.response,
            function(buffer)
			{
                if (!buffer)
				{
					SmaTrx( "[WA] Decode Error", url );

                    return;
                }
                loader.bufferList[index] = buffer;
                if (++loader.loadCount == loader.JaPe__Va_vsg.length)
				{
                    Try_JaPe_l( loader.Sx_l, loader.bufferList );
				}

            }
        );
    }
    request.onerror = function()
	{
        SmaTrx( "[WA] Load  XHR Error" );
    }
    request.send();
}

Try_JaPe_t.prototype.load = function()
{
    for (let i = 0; i < this.JaPe__Va_vsg.length; ++i)
        this.loadBuffer(this.JaPe__Va_vsg[i], i);
}

//==============================================
//==============================================
// WA: Yi
//==============================================
//==============================================
//==============================================
//==============================================
// WA: Ya
//==============================================
//==============================================



//==============================================
//==============================================
// WA: Yi
//==============================================
//==============================================
//==============================================
//==============================================
// WA: Ya
//==============================================
//==============================================

//==============================================
// BUF LOAD
//==============================================



//==============================================
// LIFECYCLE
//==============================================

//-------------------------------------------------
DoWA.BriYi = function( Sa_l )
//-------------------------------------------------
{
	//@@@
	// DISCONNECT GRAFS

	//@@@
	// RELEASE BUFs

	//@@@
	//( Sa_l );
	Sa_l = null;
}

//-------------------------------------------------
DoWA.Trx = function( Sa_l, e )
//-------------------------------------------------
{
	SmaTrx( "[WA] Fail:", e );
	DoWA.BriYi( Sa_l );
}

//-------------------------------------------------
DoWA.BriYu = async function( Sa_l )
//-------------------------------------------------
{
	if( KoDz__YzTrx_y() ) return;
	//SmaJe( "[WA] MzPoYe: RESUME" );

}

//-------------------------------------------------
DoWA.BriYe = async function( Sa_l )
//-------------------------------------------------
{
	if( KoDz__YzTrx_y() ) return;

}

//-------------------------------------------------
DoWA.BriYo = function( Sa_l )
//-------------------------------------------------
{
	if( KoDz__YzTrx_y() ) return;
	//SmaJe( "[WA] BriYo: PAUSE" );

	// Pause Compute Tasks?
	// Reset Clocks?
}

//-------------------------------------------------
DoWA.BriYa = async function( Yz_k )
//-------------------------------------------------
{
	//@@@
	// API
	const Sa_l = SySmz__YaFz_v( DoWA );

	try
	{
		Sa_l.Sx_l = new AudioContext();
	}
	catch(e)
	{
		SmaJe("[WA] No WebWA Browser & Device Found!" );
		DoWA.BriYi( Sa_l );
		return null;
	}

	//@@@
	// WRAPUP
	// return SySmz__YaFx_v( Sa_l );


	//-------------------------------------
	// EXAMPLE
	//-------------------------------------
	const Sx_l = Sa_l.Sx_l;

	const JaPe_Ku_vsg = BriDz__Mx_KuTu_vsg + "Mx01__SuKz_MEDIA/SuKz01_JaPe__SND/";

	Sa_l.Try_JaPe_l = new Try_JaPe_t
	(
		Sx_l,
		[
			JaPe_Ku_vsg + "JaPe00__ToMi.wav"
			, JaPe_Ku_vsg + "JoPe04__JeMx_BEEP.opus"
		],
	);

	// SmaJe( "[WA] LOAD" );
	Sa_l.Try_JaPe_l.load();


	//@@@
	// WRAPUP
	return SySmz__YaFx_v( Sa_l );
}

//==============================================
//==============================================
// WA: Yi
//==============================================
//==============================================
