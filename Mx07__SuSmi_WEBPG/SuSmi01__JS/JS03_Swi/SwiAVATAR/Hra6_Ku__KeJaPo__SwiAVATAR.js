// SySmz.v.Du
"use strict";
const SwiAVATAR = { VaSy: "SwiAVATAR" };
window.SwiAVATAR = SwiAVATAR;

//==============================================
// QUALITIES
//==============================================
const ViTe_qk = Object.freeze
({
	ViTe0: 0
	, ViTe1: 1
	, ViTe2: 2

});


//=====================================
// AVATAR
//=====================================
async function github_Avatar( Va )
{
	// read our JSON
	let response = await fetch('/article/promise-chaining/user.json');
	let user = await response.json();

	// read github user
	let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
	let githubUser = await githubResponse.json();

	// show the avatar
	let img = document.createElement('img');
	img.src = githubUser.avatar_url;
	img.className = "promise-avatar-example";
	document.body.append(img);

	// wait 3 seconds
	await new Promise((resolve, reject) => setTimeout(resolve, 3000));

	img.remove();

	return githubUser;
}


//==============================================
// ACTIONS
//==============================================

//-------------------------------------------------
SwiAVATAR.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaSme( "Service Example: ", this.VaSy );

	Object.keys( ViTe_qk ).forEach( _Va => {	SmaSme( _Va ); });
	Object.values( ViTe_qk ).forEach( _Vi => { SmaSme( _Vi );	});
}


//==============================================
// LIFE
//==============================================

//-------------------------------------------------
SwiAVATAR.BriYi = function( Sa_l )
//-------------------------------------------------
{
}

//-------------------------------------------------
SwiAVATAR.BriYa = function( Yz_k )
//-------------------------------------------------
{
	const Sa_l = { Ji: SwiAVATAR };


	return Sa_l;
}


//-------------------------------------------------
SwiAVATAR.Mo = function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{
}

//==============================================
// END
//==============================================
