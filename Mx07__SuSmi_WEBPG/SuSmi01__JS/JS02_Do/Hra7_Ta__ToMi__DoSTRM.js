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
DoSTRM.SuKz__Yi = async function( Sa_l, Vx_k )
//-------------------------------------------------
{
	Ko.SuKz_v[ Vx_k ].close();
	Ko.SuKz_v[ Vx_k ] = null;
}


//-------------------------------------------------
DoSTRM.KiCho__JaPo = async function( Sa_l, Vx_k, Si_l )
//-------------------------------------------------
{
	if( Ko.SuKz_v[ Vx_k ] === null )
	{
		try
		{
			Ko.SuKz_v[ Vx_k ] = BriYz.Cho_qk;

			const FETCH_qk = await fetch( Si_l );
			const BLOB_qk = await FETCH_qk.blob();
			//SmaSme( "$$$$------- HV_BLOB", Ko.SuKz_v[ Vx_k ] );

			Ko.SuKz_v[ Vx_k ] = await createImageBitmap( BLOB_qk, { colorSpaceConversion: 'none' });
			//SmaSme( "$$$$-------LOADED", Ko.SuKz_v[ Vx_k ], Ko.SuKz_v[ Vx_k ].width, Ko.SuKz_v[ Vx_k ].height );
		}
		catch
		{
			SmaDre( "MEDIA FAIL", Si_l );
		}
	}
}

//-------------------------------------------------

//-------------------------------------------------
function startPlayingAndWaitForVideo(video)
{
    return new Promise((resolve, reject) =>
	{
		SmaSme( "VIDEO FRAME", video, video.videoWidth, video.videoHeight );
		//SmaSme( "VIDEO PLAY_START", video );

    	video.addEventListener('error', reject);
		video.requestVideoFrameCallback(resolve);
		video.play().catch(reject);

		Ko.SuKz_v[ 2 ] = video;
    });
  }

  function waitForClick( video )
  {
    return new Promise(resolve => {
      window.addEventListener(
        'click',
        () =>
		{
          // HIDE CLICK
		  // document.querySelector('#start').style.display = 'none';
		  SmaSme( "$$$$-------CLICKO" );
          resolve();
		  startPlayingAndWaitForVideo( video );
        },
       { once: true });
    });
  }

//-------------------------------------------------
DoSTRM.KiCho__PePo = async function( Sa_l, Vx_k, Si_l )
//-------------------------------------------------
{
	if( Ko.SuKz_v[ Vx_k ] === null )
	{
		try
		{
			Ko.SuKz_v[ Vx_k ] = BriYz.Cho_qk;
			SmaSme( "$$$$------- PePo_BEGIN", Ko.SuKz_v[ Vx_k ] );

			const video = document.createElement('video');
			video.muted = true;
			video.loop = true;
			video.preload = 'auto';

			//@@@
			// BLOB
			// const videoBlob = new Blob([/* your video data */], { type: 'video/mp4' });

			//@@@
			// FILE
			// var url = URL.createObjectURL(file or blob);
			// video.src = url;
			video.src = Si_l;

			await waitForClick( video );
			// await startPlayingAndWaitForVideo(video);

			const MxPo_l = document.getElementById( 'MxPo_De' );
			MxPo_l.addEventListener('click', () =>
			{
				SmaSme( "$$$$-------VIDEO CLICK", video, video.paused );
				if (video.paused)
				{
				  video.play();
				} else {
				  video.pause();
				}
			  });


			SmaSme( "$$$$------- PePo_AWAIT", Ko.SuKz_v[ Vx_k ] );

			//Ko.SuKz_v[ Vx_k ] = await createImageBitmap( BLOB_qk, { colorSpaceConversion: 'none' });
			//SmaSme( "$$$$-------LOADED", Ko.SuKz_v[ Vx_k ], Ko.SuKz_v[ Vx_k ].width, Ko.SuKz_v[ Vx_k ].height );
		}
		catch
		{
			SmaDre( "MEDIA FAIL", Si_l );
		}
	}
}


//-------------------------------------------------
DoSTRM.Mo = async function( Sa_l, Vx_k, Si_l )
//-------------------------------------------------
{
}

//==============================================
// END
//==============================================
