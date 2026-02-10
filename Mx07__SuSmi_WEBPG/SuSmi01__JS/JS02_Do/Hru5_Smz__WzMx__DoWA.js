const DoWA__BriDzSa__Da_wuk = "215"; 

//==============================================
//==============================================
// WA: Ya
//==============================================
//==============================================

// SySmz.v.Du
"use strict";
const DoWA = { SyTu_vsg: "Do", VaDy_vsg: "WA" };
window.DoWA = DoWA;

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
// BUFFER LOADER
//==============================================
function BufferLoader(context, urlList, callback)
{
    this.context = context;
    this.urlList = urlList;
    this.onload = callback;
    this.bufferList = new Array();
    this.loadCount = 0;
}

BufferLoader.prototype.loadBuffer = function(url, index)
{
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "arraybuffer";
    var loader = this;
    
	request.onload = function()
	{
        loader.context.decodeAudioData(
            request.response,
            function(buffer)
			{
                if (!buffer)
				{
                    alert('error decoding file data: ' + url);
                    return;
                }
                loader.bufferList[index] = buffer;
                if (++loader.loadCount == loader.urlList.length)
				{
                    loader.onload( loader.bufferList );
				}

            }
        );
    }
    request.onerror = function() {
        alert('BufferLoader: XHR error');
    }
    request.send();
}

BufferLoader.prototype.load = function()
{
    for (var i = 0; i < this.urlList.length; ++i)
        this.loadBuffer(this.urlList[i], i);
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
DoWG.BriYo = function( Sa_l )
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


	const Sx_l = Sa_l.Sx_l;

	const JaPe_Ku_vsg = BriDz__Mx_KuTu_vsg + "Mx01__SuKz_MEDIA/SuKz01_JaPe__SND/";

	Sa_l.bufferLoader = new BufferLoader
	(
		Sx_l,
		[
			JaPe_Ku_vsg + "JaPe00__ToMi.wav"
			, JaPe_Ku_vsg + "JoPe04__JeMx_BEEP.opus"
		],

		finishedLoading
	);

	SmaJe( "[WA] LOAD" );
	Sa_l.bufferLoader.load();

		function finishedLoading( bufferList )
		{
			SmaJe( "[WA] LOAD FINISH" );

			// Create two sources and play them both together.
			var source1 = Sx_l.createBufferSource();

			source1.buffer = bufferList[0];
			source1.connect(Sx_l.destination);
			source1.start(0);

			var source2 = Sx_l.createBufferSource();
			source2.buffer = bufferList[1];
			source2.connect(Sx_l.destination);
			source2.start(0);
		}


}

//==============================================
//==============================================
// WA: Yi
//==============================================
//==============================================
