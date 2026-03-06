// SySmz.v.Du
"use strict";
const DoSNS = { SyTu_vsg: "Do", VaDy_vsg: "SNS" };
Ko.Ji.DoSNS = DoSNS;

//==============================================
// QUALITIES
//==============================================
const ViSNS = Object.freeze
({
	Va0_qk: 0
	, Va1_qk: 1
	, Va2_qk: 2

	/*

	MOTION SENSORS:
	Accelerometer	Measures acceleration along three axes.
	Gyroscope	Monitors the rate of rotation around three axes.

	LinearAccelerationSensor
	AbsoluteOrientationSensor
	RelativeOrientationSensor

	GravitySensor

	ENVIRONMENTAL SENSORS:
	Ambient Light Sensor	Detects the ambient light level in the environment.
	AmbientLightSensor (Behind the #enable-generic-sensor-extra-classes flag in Chromium.)
	Magnetometer (Behind the #enable-generic-sensor-extra-classes flag in Chromium.)
	Proximity Sensor	Monitors the presence of nearby objects without physical contact.

	*/
});

//==============================================
// ACTIONS
//==============================================

//-------------------------------------------------
DoSNS.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaJe( "[" + this.VaDy_vsg + "] SmaYz" );
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
DoSNS.BriYa = async function( Yz_k )
//-------------------------------------------------
{
	const Sa_l = SySmz__YaFz_v( DoSNS );


	// ONLY CHROME has all the many sensors
	// SAFARI & FIREFOX need https://developer.mozilla.org/en-US/docs/Web/API/Window/deviceorientation_event


	if ('Accelerometer' in window)
	{
		// The `Accelerometer` interface is supported by the browser.
		// Does the device have an accelerometer, though?
		//  For an actually meaningful feature detection result, you need to try to connect to the sensor, too. This example illustrates how to do that.


		let accelerometer = null;
		try {
			accelerometer = new Accelerometer({ frequency: 10 });

			accelerometer.onerror = (event) =>
			{
				// Handle runtime errors.
				if (event.error.name === 'NotAllowedError') {
					console.log('Permission to access sensor was denied.');
				} else if (event.error.name === 'NotReadableError') {
					console.log('Cannot connect to the sensor.');
				}
			};

			accelerometer.onreading = (e) =>
			{
				console.log(e);
			};

			// accelerometer.addEventListener("reading", () => {
			// 	console.log(`Acceleration: ${accelerometer.x}, ${accelerometer.y}, ${accelerometer.z}`);
			// });

			accelerometer.start();
		} catch (error) {
			// Handle construction errors.
			if (error.name === 'SecurityError') {
				console.log('Sensor construction was blocked by the Permissions Policy.');
			} else if (error.name === 'ReferenceError') {
				console.log('Sensor is not supported by the User Agent.');
			} else {
				throw error;
			}
		}
	}



	//@@@
	// WRAPUP
	return SySmz__YaFx_v( Sa_l );
}


//-------------------------------------------------
DoSNS.Mo = async function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{

}

//==============================================
// END
//==============================================
