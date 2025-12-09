// SySmz.v.Du
"use strict";
const DoSTRM = { VaSy: "DoSTRM" };
window.DoSTRM = DoSTRM;

//==============================================
// QUALITIES
//==============================================
const STRM = Object.freeze
({
	JxVu_qk: 0

	, JaPe_qk: 1
	, JaPo_qk: 2
	, PePo_qk: 3
	, WaDru_qk: 4
	, KuTy_qk: 5
	, MzPo_qk: 6
});


//==============================================
// ACTIONS
//==============================================

//-------------------------------------------------
DoSTRM.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaSme( "Service: ", this.VaSy );

	Object.keys( STRM ).forEach( _Va => {	SmaSme( _Va ); });
	Object.values( STRM ).forEach( _Vi => { SmaSme( _Vi );	});
}

//-------------------------------------------------
// SVG^WaGwx
//-------------------------------------------------
// HTML BELOW ( loads as HTML )
/*
<svg height="720" width="1280">
	<defs>
	  <linearGradient id="grad1">
		<stop offset="0%" stop-color="yellow" />
		<stop offset="100%" stop-color="red" />
	  </linearGradient>
	</defs>
	<ellipse cx="100" cy="70" rx="85" ry="55" fill="url(#grad1)" />
	<text fill="#ffffff" font-size="45" font-family="Verdana" x="50" y="86">ESSENCE</text>
	WARNING: Your browser does not support inline SVG.
</svg>
{
	"EXAMPLE_DRAWING": "<defs><linearGradient id=\"grad1\"><stop offset=\"0%\" stop-color=\"yellow\" /><stop offset=\"100%\" stop-color=\"red\" /></linearGradient></defs><ellipse cx=\"100\" cy=\"70\" rx=\"85\" ry=\"55\" fill=\"url(#grad1)\" /><text fill=\"#ffffff\" font-size=\"45\" ont-family=\"Verdana\" x=\"50\" y=\"86\">Test of Drawing Words in Diagrams</text>"
},
*/

//==============================================
// LIFE
//==============================================

//-------------------------------------------------
DoSTRM.BriYi = function( Sa_l )
//-------------------------------------------------
{
}

//-------------------------------------------------
DoSTRM.BriYa = function( Yz_k )
//-------------------------------------------------
{
	const Sa_l = SySmz__YaFz_v( DoSTRM );
	return SySmz__YaFx_v( Sa_l );
}


//-------------------------------------------------
DoSTRM.SuKz__Yi = async function( Sa_l, SuKz_wuk )
//-------------------------------------------------
{
	Ko.SuKz_v[ SuKz_wuk ].close();
	Ko.SuKz_v[ SuKz_wuk ] = null;
}


//-------------------------------------------------
DoSTRM.KiCho__JaPo = async function( Sa_l, SuKz_wuk, Si_l )
//-------------------------------------------------
{
	if( Ko.SuKz_v[ SuKz_wuk ] === null )
	{
		try
		{
			Ko.SuKz_v[ SuKz_wuk ] = BriYz.Cho_qk;

			const FETCH_qk = await fetch( Si_l );
			const BLOB_qk = await FETCH_qk.blob();
			//SmaSme( "$$$$------- HV_BLOB", Ko.SuKz_v[ SuKz_wuk ] );

			Ko.SuKz_v[ SuKz_wuk ] = await createImageBitmap( BLOB_qk, { colorSpaceConversion: 'none' });
			//SmaSme( "$$$$-------LOADED", Ko.SuKz_v[ SuKz_wuk ], Ko.SuKz_v[ SuKz_wuk ].width, Ko.SuKz_v[ SuKz_wuk ].height );
		}
		catch
		{
			SmaDre( "MEDIA:IMG FAIL", Si_l );
		}
	}
}


//-------------------------------------------------
// VIDEO UPDATE
//-------------------------------------------------
function DoSTRM_Trx( SuKz_wuk )
{
	SmaSme( "STRM_Trx: ", SuKz_wuk );
}


//-------------------------------------------------
// VIDEO UPDATE
//-------------------------------------------------
function PePo_Ye( PePo_l, SuKz_wuk )
{
	//@@@
	// LOAD FILE
    return new Promise((resolve, reject) =>
	{
		PePo_l.addEventListener( 'error', DoSTRM_Trx( SuKz_wuk ) );
		PePo_l.requestVideoFrameCallback
		(
			//@@@
			// LOOP FRAME UPDATE
			function DoSTRM_JeChy( GiFe_wfk, Yz_k )
			{
				// SmaSme( "STRM_JeChy: ", GiFe_wfk, Yz_k );

				const PePo_l = Ko.SuKz_v[ SuKz_wuk ];
				if( PePo_l  instanceof HTMLVideoElement )
					{
						if( PePo_l.Kwy_wu === 0 )
						{ 		SmaSme( "PePo: ", PePo_l, PePo_l.videoWidth, PePo_l.videoHeight, "GiGy: ", PePo_l.duration, "Ta: ", PePo_l.textTracks, PePo_l.audioTracks, "Yz: ", PePo_l.readyState ); }

						PePo_l.Kwy_wu = Yz_k.presentedFrames;
						PePo_l.requestVideoFrameCallback( DoSTRM_JeChy );
					}
				}
			);

		//@@@
		// AFTER LOAD PROMISE FULFILLED
		PePo_l.play().catch( DoSTRM_Trx( SuKz_wuk ) );
		PePo_l.Kwy_wu = 0;


		// Has! to be called AFTER Play
		PePo_l.playbackRate = 1.0;


		// ONLY Update on New Frame
		Ko.SuKz_v[ SuKz_wuk ] = PePo_l;
    });
  }


//-------------------------------------------------
DoSTRM.KiCho__MzPo = async function( Sa_l, SuKz_wuk, Si_l )
//-------------------------------------------------
{
	if( Ko.SuKz_v[ SuKz_wuk ] === null )
	{
		try
		{
			Ko.SuKz_v[ SuKz_wuk ] = BriYz.Cho_qk;
			const PePo_l = document.createElement('video');
			PePo_l.muted = true;

			if( navigator.mediaDevices.getUserMedia )
			{
				navigator.mediaDevices.getUserMedia({ video: true })
				.then( function ( MzPo_v )
			{
					SmaSme( "CAM READY" );
					PePo_l.srcObject = MzPo_v;

					PePo_Ye( PePo_l, SuKz_wuk );
			})
			.catch(function (err0r)
			{
				SmaSme( "Something went wrong!" );
			});
		}

			//SmaSme( "$$$$------- HV_BLOB", Ko.SuKz_v[ SuKz_wuk ] );

			//Ko.SuKz_v[ SuKz_wuk ] = await createImageBitmap( BLOB_qk, { colorSpaceConversion: 'none' });
			//SmaSme( "$$$$-------LOADED", Ko.SuKz_v[ SuKz_wuk ], Ko.SuKz_v[ SuKz_wuk ].width, Ko.SuKz_v[ SuKz_wuk ].height );
		}
		catch
		{
			SmaDre( "SENSOR:CAM FAIL", Si_l );
		}
	}
}


//-------------------------------------------------
DoSTRM.KiCho__PePo = async function( Sa_l, SuKz_wuk, Si_l )
//-------------------------------------------------
{
	if( Ko.SuKz_v[ SuKz_wuk ] === null )
	{
		try
		{
			// SmaSme( "$$$$------- PePo_BEGIN", Ko.SuKz_v[ SuKz_wuk ] );
			Ko.SuKz_v[ SuKz_wuk ] = BriYz.Cho_qk;
			const PePo_l = document.createElement('video');

			//@@@
			// VIDEO CFG
			PePo_l.muted = true;
			PePo_l.loop = true;
			PePo_l.preload = 'auto';

			//@@@
			// BLOB
			// const videoBlob = new Blob([ raw bytes of video data ], { type: 'video/mp4' });

			//@@@
			// FILE
			// PePo_l.src = URL.createObjectURL(file or blob);
			PePo_l.src = Si_l;
			PePo_Ye( PePo_l, SuKz_wuk );

			//$$$
			// CTRLS
			//
			// 	if (PePo_l.paused)
			// 	{
			// PePo_l.pause();

			// 	  PePo_l.play();
			// 	  // FF, REW, SkipToTime,
			// 	  //  PePo_l.currentTime += value;
			// 	  //  PePo_l.currentTime 0;
			// 	} else {
			// 	  PePo_l.pause();
			// 	}
		}
		catch
		{
			SmaDre( "MEDIA:VIDEO FAIL", Si_l );
		}
	}
}


//-------------------------------------------------
DoSTRM.Mo = async function( Sa_l, SuKz_wuk, Si_l )
//-------------------------------------------------
{
}

//==============================================
// END
//==============================================
