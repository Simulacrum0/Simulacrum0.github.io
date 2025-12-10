// SySmz.v.Du
"use strict";
const DoPAY = { VaSy: "DoPAY" };
window.DoPAY = DoPAY;

//==============================================
// QUALITIES
//==============================================
const ViPAY = Object.freeze
({
	ViPAY0_qk: 0
	, ViPAY1_qk: 1
	, ViPAY2_qk: 2
});

//==============================================
// ACTIONS
//==============================================

//-------------------------------------------------
DoPAY.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaSme( "Service: ", this.VaSy );

	Object.keys( ViPAY_qk ).forEach( _Va => {	SmaSme( _Va ); });
	Object.values( ViPAY_qk ).forEach( _Vi => { SmaSme( _Vi );	});

	// if( MoDzTrx__NxHo_y( "TEST FAKE ERROR", null )){ return; }

}


//==============================================
// LIFE
//==============================================

//-------------------------------------------------
DoPAY.BriYi = function( Sa_l )
//-------------------------------------------------
{
}

//-------------------------------------------------
DoPAY.BriYa = function( Yz_k )
//-------------------------------------------------
{
	const Sa_l = SySmz__YaFz_v( DoPAY );



	return SySmz__YaFx_v( Sa_l );
}


//-------------------------------------------------
async function startPayment()
//-------------------------------------------------
{

	let checkoutDetails = {
	  id: "pwa-demo-order",
	  displayItems: [
		{label: "PowerOurPeople Test PAYMENT", amount: {currency: "USD", value: "1"}}
	  ],
	  total: { label: "Total", amount: {currency: "USD", value: "1"}}
	};

	let paymentMethods = [
	  {
		supportedMethods: "https://google.com/pay",
		data: {
			environment: "TEST",
			apiVersion: 2,
			apiVersionMinor: 0,
			merchantInfo: {
				// A merchant ID is available after approval by Google: https://developers.google.com/pay/api/web/guides/test-and-deploy/integration-checklist}
				// merchantId: '12345678901234567890',
				merchantName: "PowerOurPeople"
			},
			allowedPaymentMethods: [{
				type: "CARD",
				parameters: {
				  allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
				  allowedCardNetworks: ["AMEX", "DISCOVER", "INTERAC", "JCB", "MASTERCARD", "VISA"]
				},
				tokenizationSpecification: {
				  type: "PAYMENT_GATEWAY",
				  // Check with your payment gateway on the parameters to pass: https://developers.google.com/pay/api/web/reference/request-objects#gateway
				  parameters: {
					"gateway": "example",
					"gatewayMerchantId": "exampleGatewayMerchantId"
				  }
				}
		   }]
		}
	  },
	  {
		supportedMethods: "https://apple.com/apple-pay",
		data: {
		  version: 3,
		  merchantIdentifier: "PowerOurPeople.com",
		  merchantCapabilities: ["supports3DS", "supportsCredit", "supportsDebit"],
		  supportedNetworks: ["amex", "discover", "masterCard", "visa", "maestro"],
		  countryCode: "US"
		}
	  }
	];

	let paymentRequest = new PaymentRequest(paymentMethods, checkoutDetails);
	let response = await paymentRequest.show();

	SmaSme(response);
}

//-------------------------------------------------
DoPAY.Mo = function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{

//	await startPayment();

}


//==============================================
// END
//==============================================
