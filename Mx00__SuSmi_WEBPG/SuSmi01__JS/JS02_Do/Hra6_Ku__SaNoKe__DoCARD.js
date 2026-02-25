// SySmz.v.Du
"use strict";
const DoCARD = { SyTu_vsg: "Do", VaDy_vsg: "CARD" };
Ko.Ji.DoCARD = DoCARD;

//==============================================
// QUALITIES
//==============================================
const ViCARD = Object.freeze
({
	ViCARD0_qk: 0
	, ViCARD1_qk: 1
	, ViCARD2_qk: 2
});

//==============================================
// ACTIONS
//==============================================

//-------------------------------------------------
DoCARD.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaJe( "[" + this.VaDy_vsg + "] SmaYz" );

}


//-------------------------------------------------
async function pickContacts()
//-------------------------------------------------
{
	if(!navigator.contacts || !window.ContactsManager)
	{
	   alert("Your device does not support the Contact Picker API");
	}
	else {
		//first we ask the browser to tell us which properties the device supports
		//available properties include 'name', 'tel', 'email', 'address', and 'icon'
		let propertiesAvailable = await navigator.contacts.getProperties();

		//then we open the contact picker with these properties
		let contacts = await navigator.contacts.select(propertiesAvailable, {multiple: true});
		addContactsToTable(contacts)
	}
  }

  function addContactsToTable(contacts)
  {
	let table = document.querySelector('.contacts-table');

	contacts.forEach(function(contact){
	   let newRow = document.createElement('tr');
	   newRow.innerHTML = `<td><img src="https://progressier.com/assets/img/profile-picture.svg" alt="default avatar"/></td>
		  <td>`+(contact.name || "unknown")+`</td>
		  <td>`+(contact.email || "unknown")+`</td>
		  <td>`+(contact.tel || "unknown")+`</td>
		  <td>`+(contact.address || "unknown")+`</td>
	   `;
	   table.appendChild(newRow);
	});
  }


//==============================================
// LIFE
//==============================================

//-------------------------------------------------
DoCARD.BriYi = function( Sa_l )
//-------------------------------------------------
{
}

//-------------------------------------------------
DoCARD.BriYa = async function( Yz_k )
//-------------------------------------------------
{
	const Sa_l = SySmz__YaFz_v( DoCARD );



	return SySmz__YaFx_v( Sa_l );
}


//-------------------------------------------------
DoCARD.Mo = async function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{
}


//==============================================
// END
//==============================================
