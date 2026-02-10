// SySmz.v.Du
"use strict";
const DoUSB = { SyTu_vsg: "Do", VaDy_vsg: "USB" };
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
	SmaJe( "[" + this.VaDy_vsg + "] SmaYz" );

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
		SmaJe("WebUSB API not supported in your browser");
	  return;
	}
	try
	{
	  let device = await navigator.usb.requestDevice({ filters: [{}] });
	  await device.open();

	  SmaJe( "USB_Dev Opened" );
	  SmaJe( "- Manufacturer: "+ device.manufacturerName );
	  SmaJe( "- Product: "+ device.productName );
	  SmaJe( "- Serial Number: "+ device.device.serialNumber );

	  device.close();
	}
	catch( e )
	{
		SmaTrx( "[USB] Error:", e );
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
			SmaJe( `Total USB Devices: ${devices.length}`);
			devices.forEach((device) => { SmaJe( `Product name: ${device.productName}, serial number ${device.serialNumber}` );	});
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
