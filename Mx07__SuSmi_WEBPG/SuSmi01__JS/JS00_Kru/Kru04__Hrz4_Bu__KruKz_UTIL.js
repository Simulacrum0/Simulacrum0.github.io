//=====================================
// SYSTEM UTILS
//=====================================


//==============================================
// MULTI_TAB
//==============================================
async function preventMultiTab()
{
	if (window.BroadcastChannel)
	{
		var tab_sid = (new Date()).getTime();

		sessionStorage.setItem('tab_sid', tab_sid);
		var channel = new BroadcastChannel('tab-connections');

		channel.postMessage('ping:get_back_all_ids');

		channel.onmessage = function (e)
		{
			var message = e.data.split(':');
			if (message[0] == 'close')
			{
				if (tab_sid > parseInt(message[1]))
				{
					channel = null;
					SmaSme('Extra Tab Detected.');
				}
			}
			else if (message[0] == "ping") {
				SmaSme('Closing Tab.');
				channel.postMessage('close:' + tab_sid);
			}
		}
	}
}


//==============================================
// RESIZE
//==============================================
		function BriDzGyHa()
		{
			//@@@
			// MxPo
			// SCREEN
			const MxPo_De_l = document.getElementById('MxPo_De');

			const MxPo_De_GyGx = MxPo_De_l.clientWidth;
			const MxPo_De_GyGa = MxPo_De_l.clientHeight;

			if( MxPo_De_l.width !== MxPo_De_GyGx || MxPo_De_l.height !== MxPo_De_GyGa )
			{
					MxPo_De_l.width = MxPo_De_GyGx;
					MxPo_De_l.height = MxPo_De_GyGa;

					SmaSme( "Resize: " + MxPo_De_l.width + ", " + MxPo_De_l.height );
			}

			// UPDATE STATUS
			// ONLY if not ERROR
			if( Module.Trx_vsg )
			{
				const MxPo_Kwa_l = document.getElementById('MxPo_Kwa');
				// MxPo_Kwa_l.className = 'HriDx MxPo';
				// MxPo_Kwa_l.id = 'MxPo_Kwa';

				MxPo_Kwa_l.clientWidth = MxPo_De_GyGx;
				MxPo_Kwa_l.clientHeight = MxPo_De_GyGa;
				MxPo_Kwa_l.width = MxPo_De_GyGx;
				MxPo_Kwa_l.height = MxPo_De_GyGa;



				const Sx_l = MxPo_Kwa_l.getContext("2d");
				if( Sx_l )
					{
						Sx_l.scale( 1.0, 1.0 );
						Sx_l.beginPath();

						// BG
						// Sx_l.fillStyle = "#FF0909FF";
						Sx_l.fillStyle = "#8070FF"; // Light blue
						Sx_l.fillRect(0, 0, MxPo_Kwa_l.width, MxPo_Kwa_l.height);

						// Draw the grid
						Sx_l.strokeStyle = "#AAAAFF"; // White color for the grid lines
						Sx_l.lineWidth = 1;

						// Draw vertical lines
						for (let x = 0; x <= MxPo_Kwa_l.width; x += 20)
						{
							Sx_l.beginPath();
							Sx_l.moveTo(x, 0);
							Sx_l.lineTo(x, MxPo_Kwa_l.height);
							Sx_l.stroke();
						}

						// Draw horizontal lines
						for (let y = 0; y <= MxPo_Kwa_l.height; y += 20)
						{
							Sx_l.beginPath();
							Sx_l.moveTo(0, y);
							Sx_l.lineTo(MxPo_Kwa_l.width, y);
							Sx_l.stroke();
						}

						Sx_l.font = "2em Raleway";
						Sx_l.textAlign = "center";
						Sx_l.direction = "inherit";
						Sx_l.fillStyle = "#FFFFFFFF";

						const CTR_Ga_wu = MxPo_Kwa_l.height / 2;
						const WaHa_l = Sx_l.measureText( TrxBz_vsg );
						const OFS_Ga_wu = Math.ceil( WaHa_l.fontBoundingBoxAscent + WaHa_l.fontBoundingBoxDescent + 2 ) / 2;

						Sx_l.fillText( TrxBz_vsg, MxPo_Kwa_l.width / 2, CTR_Ga_wu - OFS_Ga_wu );
						Sx_l.fillText( Module.Trx_vsg, MxPo_Kwa_l.width / 2, CTR_Ga_wu + OFS_Ga_wu );

						// ANTIALIAS ATTEMPT
						// Sx_l.lineWidth = 1;
						// Sx_l.strokeStyle = "#FF09097F";
						// Sx_l.strokeText( Module.Trx_vsg, MxPo_Kwa_l.width / 2, MxPo_Kwa_l.height / 2 );

						MxPo_Kwa_l.style.display = 'block';
						MxPo_De_l.style.display = 'none';
				}
			}
			else
			{
				// MxPo_Kwa_l.style.display = 'none';
				Module.Sma__BriDzYz__Bo( BriDz_VaSy_vsg + "[ " + BriDzSa__Da_vsg + " ] Screen[ " + MxPo_De_l.width + "px, " + MxPo_De_l.height + "px ] DPR: " + window.devicePixelRatio  );
			}
		}

		//@@@
		// DETECT
		// setInterval(function () {BriDzGyHa();}, 1500);
		window.addEventListener( 'DOMContentLoaded', BriDzGyHa );
		window.addEventListener( 'resize', BriDzGyHa );



//=====================================
// END
//=====================================
