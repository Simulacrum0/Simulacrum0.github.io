// SySmz.v.Du
"use strict";
const DoUSB = { VaSy: "DoUSB" };
window.DoUSB = DoUSB;

//==============================================
// QUALITIES
//==============================================
const ViUSB = Object.freeze
({
	ViUSB0_qk: 0
	, ViUSB1_qk: 1
	, ViUSB2_qk: 2
});

//==============================================
// ACTIONS
//==============================================

//-------------------------------------------------
DoUSB.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaSme( "Service: ", this.VaSy );

	Object.keys( ViUSB_qk ).forEach( _Va => {	SmaSme( _Va ); });
	Object.values( ViUSB_qk ).forEach( _Vi => { SmaSme( _Vi );	});

	// if( MoDzTrx__NxHo_y( "TEST FAKE ERROR", null )){ return; }

}


// FILTERS
/*
vendorId
productId
classCode
subclassCode
protocolCode
serialNumber

Te:
const filters = [
	{ vendorId: 0x1209, productId: 0xa800 },
	{ vendorId: 0x1209, productId: 0xa850 },
  ];

*/

async function listUSBDevices()
{
	navigator.usb.getDevices().then(devices =>
	{
    	if(devices.length == 0)
		{
        	// navigator.usb.requestDevice({ filters: [{ vendorId: 0x2341 }] })
        	navigator.usb.requestDevice({ filters: [{}] })
            .then(selectedDevice =>
			{
             })
		}
	})
}


async function connectToUSBDevice()
{
	if (!navigator.usb)
	{
		SmaSme("WebUSB API not supported in your browser");
	  return;
	}
	try
	{
	  let device = await navigator.usb.requestDevice({ filters: [{}] });
	  await device.open();

	  SmaSme( "USB_Dev Opened" );
	  SmaSme( "- Manufacturer: "+ device.manufacturerName );
	  SmaSme( "- Product: "+ device.productName );
	  SmaSme( "- Serial Number: "+ device.device.serialNumber );

	  device.close();
	}
	catch( e )
	{
		SmaTrx( "USB-Err:", e );
	}
  }

//==============================================
// LIFE
//==============================================

//-------------------------------------------------
DoUSB.BriYi = function( Sa_l )
//-------------------------------------------------
{
}

//-------------------------------------------------
DoUSB.BriYa = function( Yz_k )
//-------------------------------------------------
{
	const Sa_l = SySmz__YaFz_v( DoUSB );

	//connectToUSBDevice();
	if( navigator.usb )
	{
		// must USR_ACTIVATE prior to calling else '0'
		navigator.usb.getDevices().then((devices) =>
		{
			SmaSme( `Total USB Devices: ${devices.length}`);
			devices.forEach((device) => { SmaSme( `Product name: ${device.productName}, serial number ${device.serialNumber}` );	});
		});
	}

	return SySmz__YaFx_v( Sa_l );
}


//-------------------------------------------------
DoUSB.Mo = function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{
}


//==============================================
// END
//==============================================
