//===================================
// SyDz_Ya
//===================================

//==============================================
// CONTENTS
// 1.0 KxDri MINDMAPS
// 2.0 Hre1_Dru CULTURE
// 3.0 Ko NODE
// 4.0 Hry5_Smz SPATIAL
// 5.0 ToMi DOWNLOAD
// 6.0 MoMiKz CTRLS
// 7.0 Hrz5_Ki ENGINE

// APP STATUS
let BriDzYz_v;
// APP LANG (for CONTENTS)
let KeDru_v;

//-------------------------------------------------
// CALC'D
//-------------------------------------------------
// BUILD TIME & DIFF
let TrzFi__Gi_vutf8;
let TrzZe__Gi_vutf8;


//==============================================
// 1.0
// MINDMAPS^KxDri
//
// SUBJECT: Telescope: 1F52D
// TOPIC: Magnify: 1F50D
// THOT: Microscope: 1F52C
//
//==============================================

//-------------------------------------------------
// STATE
//-------------------------------------------------

// SUBJECT
let TzKa_v = undefined;
let TzKa__Fo_wu = 0;
let TzKa__Fe_wu = 0;
let TzVa__Fe_vutf8 = undefined;

// TOPIC
let NzKa_v = undefined;
let NzKa__Fo_wu = 0;
let NzKa__Fe_wu = 0;

// THOT
let JzKa__Fo_wu = 0;
let JzKa__Fe_wu = 0;

// TRAITS
let JoJiJa__Fe_wu = undefined;
let JoSuTy__Fe_wu = 0;

//-------------------------------------------------
// SUBJECT
//-------------------------------------------------
//@@@
// SUBJECT INC
function TzKa__ChyZo( Zo_wi )
{
	TzKa__Fe_wu += Zo_wi;
	if( TzKa__Fe_wu < 0 ){ TzKa__Fe_wu = TzKa__Fo_wu - 1; }
	else if( TzKa__Fe_wu >= TzKa__Fo_wu ){ TzKa__Fe_wu = 0; }

	TzKa__Chy( TzKa__Fe_wu );
}


//@@@
// SUBJECT UPD
async function TzKa__Chy( Tz_wu )
{
	TzKa__Fe_wu = ( Tz_wu % TzKa__Fo_wu );

	// console.log( "Tz_wu" + Tz_wu );
	// console.log( "TzKa__Fe_wu" + TzKa__Fe_wu );
	// console.log( "TzKa__Fo_wu" + TzKa__Fo_wu );


	//&&&
	// SUBJECT FILE
	if( !KeDru_v ) return;
	TzVa__Fe_vutf8 = KeDru_v.SUBJECTS[ TzKa__Fe_wu ].ID;
	if( !TzVa__Fe_vutf8 ) { SmaTrx( `NO SUBJECT #${TzKa__Fe_wu} ID!` ); return; }

	TzKa_v = await ToKz__JSON_v( `SuSmi04__SUBJECTS/${TzVa__Fe_vutf8}/_TOPICS/`, `${TzVa__Fe_vutf8}.${KeKu__ToKz_vutf8}` );
	if( !TzKa_v ) { SmaTrx( "NO SUBJECT FILE!" ); return; }
	NzKa__Fo_wu = TzKa_v.TOPICS.length;


	//&&&
	// SUBJECT COUNTER
	document.getElementById('TzKaVa').innerHTML = `&#x1F5EB ${ KeDru_v.TERMS.TzKaVa} ${TzKa__Fe_wu+1}/${TzKa__Fo_wu}`;


	//&&&
	// TOPIC FILL by LANG
	const TaNzKa_v = document.getElementById( 'TaNzKa' );
	Hri3_Ne__Ta_ChyStz( TaNzKa_v );

	TzKa_v.TOPICS.forEach
	(
		function( Ti_v, Vx_wu )
		{
			// SmaDx__Kz_JSON( Ti_v );
			// console.log( "[" + Vx_wu + "]------------" + Ti_v.TITLE );

			//&&&
			// ADD THOT BTNS
			const Kz_v = document.createElement('button');
			Kz_v.innerHTML = `${Ti_v.NAME}`;
			let JiTra_vutf8 =`NzKa__Chy( ${Vx_wu} );`;
			// console.log( JiTra_vutf8 );
			Kz_v.setAttribute( "onclick", JiTra_vutf8 );
			Kz_v.className = 'Dx__BTN';
			TaNzKa_v.appendChild( Kz_v );
		}
	);

	//&&&
	// ALWAYS LOAD FIRST TOPIC's TJPTS
	NzKa__Fe_wu = 0;
	await NzKa__Chy( NzKa__Fe_wu );
}


//-------------------------------------------------
// TOPIC
//-------------------------------------------------
//@@@
// TOPIC INC
function NzKa__ChyZo( Zo_wi )
{
	NzKa__Fe_wu += Zo_wi;
	if( NzKa__Fe_wu < 0 ){ NzKa__Fe_wu = NzKa__Fo_wu - 1; }
	else if( NzKa__Fe_wu >= NzKa__Fo_wu ){ NzKa__Fe_wu = 0; }

	NzKa__Chy( NzKa__Fe_wu );
}


//@@@
// TOPIC UPD
async function NzKa__Chy( Nz_wu )
{
	NzKa__Fe_wu = ( Nz_wu % NzKa__Fo_wu );

	//&&&
	// TOPIC FILE
	if( !TzKa_v ) return;
	const NzVa__Fe_vutf8 = TzKa_v.TOPICS[ NzKa__Fe_wu ].ID;
	if( !NzVa__Fe_vutf8 ) { SmaTrx( `NO TOPIC #${NzKa__Fe_wu} ID!` ); return; }

	NzKa_v = await ToKz__JSON_v( `SuSmi04__SUBJECTS/${TzVa__Fe_vutf8}/${NzVa__Fe_vutf8}/`, `${NzVa__Fe_vutf8}.${KeKu__ToKz_vutf8}` );
	if( !NzKa_v ) { SmaTrx( "NO TOPIC FILE!" ); return; }
	JzKa__Fo_wu = NzKa_v.THOTS.length;


	//&&&
	// TOPIC MENU COUNTER
	document.getElementById('NzKaVa').innerHTML = `&#x1F5EA ${ KeDru_v.TERMS.NzKaVa} ${NzKa__Fe_wu+1}/${NzKa__Fo_wu}`;

	//&&&
	// THOTS
	const TaJzKa_v = document.getElementById( 'TaJzKa' );
	Hri3_Ne__Ta_ChyStz( TaJzKa_v );

	NzKa_v.THOTS.forEach
	(
		function( Ti_v, Vx_wu )
		{
			// SmaDx__Kz_JSON( Ti_v );
			// console.log( "[" + Vx_wu + "]------------" + Ti_v.TITLE );

			//&&&
			// ADD THOT BTNS
			const Kz_v = document.createElement('button');
			Kz_v.innerHTML = `${Ti_v.TITLE}`;
			let JiTra_vutf8 =`JzKa__Chy( ${Vx_wu} );`;
			// console.log( JiTra_vutf8 );
			Kz_v.setAttribute( "onclick", JiTra_vutf8 );
			Kz_v.className = 'Dx__BTN';
			TaJzKa_v.appendChild( Kz_v );
		}
	);


	//&&&
	// RESET SHADER
	Fi__GiDri_wf = 0;
	Fe__GiPa_wf = 0;

	JzKa__Chy( 0 );
}

//-------------------------------------------------
// THOTS
//-------------------------------------------------
//@@@
// THOT INC
function JzKa__ChyZo( Zo_wi )
{
	JzKa__Fe_wu += Zo_wi;
	if( JzKa__Fe_wu < 0 ){ JzKa__Fe_wu = JzKa__Fo_wu - 1; }
	else if( JzKa__Fe_wu >= JzKa__Fo_wu ){ JzKa__Fe_wu = 0; }

	JzKa__Chy( JzKa__Fe_wu );
}

//@@@
// THOT_UPD
async function JzKa__Chy( Jz_wu )
{
	JzKa__Fe_wu = ( Jz_wu % JzKa__Fo_wu );

	Hry5_Smz__KriYe = true;

	//&&&
	// THOT COUNTER
	document.getElementById('JzKaVa').innerHTML = `&#x1F5E8 ${KeDru_v.TERMS.JzKaVa} ${JzKa__Fe_wu+1}/${JzKa__Fo_wu} `;

	const Jz_v = NzKa_v.THOTS[ JzKa__Fe_wu ];
	if( !Jz_v ){ SmaTrx( `NO THOT ${JzKa__Fe_wu}` ); return; }


	//&&&
	// THOT ROOT DETAILS
	//
	// TITLE, BG, HUE_SHIFT, COMMENTS
	document.getElementById('JzBz').innerHTML = Jz_v.TITLE;

	if( Jz_v.hasOwnProperty( 'BG' ) )
	{
		JoJiJa__Fe_wu = JiJa__Va_wu[ Jz_v.BG ];
	}
	if( Jz_v.hasOwnProperty( 'HUE_SHIFT' ) )
	{
		JoSuTy__Fe_wu = SuTy__Va_wu[ Jz_v.HUE_SHIFT ];
	}
	if( Jz_v.INTERNAL_COMMENTS )
	{ console.log( "COMMENT: " + Jz_v.INTERNAL_COMMENTS ); }


	//&&&
	// CONTENT_LIST
	const JoKz_ToKro_v = document.getElementById('JoKz_ToKro');
	Hri3_Ne__Ta_ChyStz( JoKz_ToKro_v );

	if( Jz_v.CONTENT )
	{
		Jz_v.CONTENT.forEach
		(
			function( Ti_v, Vx_wu )
			{
				//$$$
				// DBG
				// SmaDx__Kz_JSON( Ti_v );
				// console.log( "[" + Vx_wu + "]------------" + Ti_v );

				//%%%
				// ADD TXT
				if( Ti_v.hasOwnProperty( 'TXT' ) )
				{
					const Ku_v = document.createElement('div');
					Ku_v.className = `Dx__BOX Dx__FADE_IN`;

					const Cha_v = document.createElement('p');
					Cha_v.className = `Dx__TXT`;
					Cha_v.innerHTML = Ti_v.TXT + '<br>';

					Ku_v.appendChild( Cha_v );
					JoKz_ToKro_v.appendChild( Ku_v );
				}

				//%%%
				// ADD NOTE
				if( Ti_v.hasOwnProperty( 'NOTE' ) )
				{
					const Cha_v = document.createElement('span');
					Cha_v.className = 'Dx__NOTE Dx__FADE_IN';
					Cha_v.innerHTML = '<br><b>' + Ti_v.NOTE + '</b><br>';
					JoKz_ToKro_v.appendChild( Cha_v );
				}

				//%%%
				// ADD ICON
				if( Ti_v.hasOwnProperty( 'ICON_TXT' ) || Ti_v.hasOwnProperty( 'ICON_BW' ) || Ti_v.hasOwnProperty( 'ICON_CLR' ) )
				{
					const Ku_v = document.createElement('div');
					Ku_v.className = `Dx__NOTE Dx__FADE_IN`;

					if( Ti_v.hasOwnProperty( 'ICON_CLR' ) )
					{
						const Cha_v = document.createElement('span');
						Cha_v.className = `GwzDoPo GwzDo_${Ti_v.ICON_CLR}`;
						Ku_v.appendChild( Cha_v );
					}

					if( Ti_v.hasOwnProperty( 'ICON_BW' ) )
					{
						const Cha_v = document.createElement('span');
						Cha_v.className = `GwzDoVo GwzDo_${Ti_v.ICON_BW}`;
						Ku_v.appendChild( Cha_v );
					}

					if( Ti_v.hasOwnProperty( 'ICON_TXT' ) )
					{
						const Cha_v = document.createElement('span');
						Cha_v.className = 'Dx__NOTE';
						Cha_v.innerHTML = '<br><b>' + Ti_v.ICON_TXT + '</b><br>';
						Ku_v.appendChild( Cha_v );
					}
					JoKz_ToKro_v.appendChild( Ku_v );
				}

				//%%%
				// ADD IMG
				if( Ti_v.hasOwnProperty( 'PATH' ) && Ti_v.hasOwnProperty( 'IMG' ) )
				{
					//console.log(  `./Mx01__SuKz_MEDIA/${Ti_v.PATH}${Ti_v.IMG}` );
					const Ku_v = document.createElement('figure');
					Ku_v.className = 'Dx__FADE_IN';

					const Cha_v = document.createElement('img');
					Cha_v.className = 'Dx__MEDIA Dx__FADE_IN';
					Cha_v.src = `./Mx01__SuKz_MEDIA/${Ti_v.PATH}${Ti_v.IMG}`;
					Ku_v.appendChild( Cha_v );

					if( Ti_v.hasOwnProperty( 'CAPTION' ) )
					{
						const KeDru_v = document.createElement('figcaption');
						Ku_v.className = 'Dx__CAPTION';
						KeDru_v.innerHTML =  Ti_v.CAPTION;
						Ku_v.appendChild( KeDru_v );
					}

					JoKz_ToKro_v.appendChild( Ku_v );
				}

				//%%%
				// ADD DRAW
				if( Ti_v.hasOwnProperty( 'DRAW' ) )
				{
					const Ku_v = document.createElement('div');
					Ku_v.className = `Dx__BOX Dx__FADE_IN`;

					const Cha_v = document.createElement( "svg" );
					Cha_v.className = 'Dx__MEDIA Dx__FADE_IN';

					Cha_v.innerHTML =  Ti_v.DRAW;
					JoKz_ToKro_v.appendChild( Cha_v );

					const bb = Cha_v.getBBox();
					Cha_v.setAttribute("width", bb.width);
					Cha_v.setAttribute("height", bb.height);

					// RESCALE any SVG into 600 x 250
					Cha_v.setAttribute
					(
						"transform",
					  	"translate(-" + bb.width / 2 + ",-" + bb.height / 2 + ") \
					  	scale(" + 600 / bb.width + "," + 250 / bb.height + ") \
					  	translate(" + bb.width / 2 + "," + bb.height / 2 + ")"
					);

					Cha_v.setAttribute("width", 600 );
					Cha_v.setAttribute("height", 250 );

				}

				//%%%
				// ADD FILM
				if( Ti_v.hasOwnProperty( 'FILM' ) )
				{
					const Ku_v = document.createElement('div');
					Ku_v.className = `Dx__FILMBOX Dx__FADE_IN`;

					const Cha_v = document.createElement( "iframe" );
					Cha_v.className = 'Dx__FILMSRC Dx__FADE_IN';
					Cha_v.src = "https://www.youtube.com/embed/" + Ti_v.FILM + "&amp;controls=0";

					Cha_v.setAttribute("frameborder", "1" );
					Cha_v.setAttribute( "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" );
					Cha_v.setAttribute( "referrerpolicy", "strict-origin-when-cross-origin" );
					Cha_v.setAttribute( "allowfullscreen", true );


					Ku_v.appendChild( Cha_v );
					JoKz_ToKro_v.appendChild( Ku_v );
				}

			}// ELM Func
		);// for EACH
	}




	//&&&
	// RESET FADEIN
	Hry5_Smz__ChyBriYa( 'ToKro' );
	Hry5_Smz__ChyBriYa( 'ToMi' );

	if( ToMi_y == true )
	{
		Hry5_Smz__ToKro_Chy();
	}
}


//==============================================
// 2.0
// Hre1_Dru CULTURE
//==============================================

//-------------------------------------------------
// LANG/LOCALE
//-------------------------------------------------
let Fe__KeDru_vutf8 = 'en';
let Fe__KuVa_vutf8 = "";
let KeKu__ToKz_vutf8 = 'en';

//-------------------------------------------------
// INIT CULTURE DEFAULTS
//-------------------------------------------------
async function Hre1_Dru__BriYa()
{
	//@@@
	// FILL ENTRIES
	const TaKeDru_v = document.getElementById( 'TaKeDru' );
	Hri3_Ne__Ta_ChyStz( TaKeDru_v );

	Hre1_Dru__Gra_v.forEach
	(
		function( Ti_v, Vx_wu )
		{
			// console.log( "------ Vx_wu:", Vx_wu, Ti_v.Va );

			//&&&
			// ADD BTN
			const Kz_v = document.createElement('button');
			Kz_v.innerHTML = `${Ti_v.KuGwz} ${Ti_v.Va}`;
			let JiTra_vutf8 =`Hre1_Dru__ChyKeDru( '${Ti_v.Vy}' );`;

			Kz_v.setAttribute( "onclick", JiTra_vutf8 );
			Kz_v.className = 'Dx__BTN';
			// elemm.id = "gogo";
			// elemm.src = 'blah.png';
			// elemm.className = 'rvml';
			// elemm.onclick = "alert('blah')";
			//
			// elemm.style.position='absolute';
			// elemm.style.width=55;

			TaKeDru_v.appendChild( Kz_v );
		}
	);

	//@@@
	// SELECT DEFAULT
	Hre1_Dru__ChyKeDru( navigator.language );
}


//-------------------------------------------------
// DATE BUILD ELAPSED
//-------------------------------------------------
function Hre7_Me__TrzGiYe()
{
	//@@@
	// DATETIME
	var SaNoKu__GiFe_l = new Date();
	const GiVuKe = SaNoKu__GiFe_l.toLocaleTimeString();
	console.log( "Time_Now: " + GiVuKe );

	const UTC__GiFe_l = Date.now();
	const GiFe_vutf8 = new Intl.DateTimeFormat(navigator.languages).format(UTC__GiFe_l);
	console.log( "Date_Now: " + GiFe_vutf8 );

	//@@@
	// BUILD DATE
	const TrzFi__Gi_l = new Date( BriDzYz_v.MoDzGi );
	TrzFi__Gi_vutf8 = new Intl.DateTimeFormat(navigator.languages).format( TrzFi__Gi_l );
	console.log( "Build_Date: " + TrzFi__Gi_vutf8 );

	// ELAPSED
	// Calculate the time difference in milliseconds
	let Ze__GiDri_du = UTC__GiFe_l - TrzFi__Gi_l;

	// Calculate the elapsed time in minutes, hours, and days
	// GiKwu = Years
	const GiKwu__GiDri_duk = 31556952000;
	const Ze__GiKwu_wf = Math.floor( Ze__GiDri_du / GiKwu__GiDri_duk );
	Ze__GiDri_du %= GiKwu__GiDri_duk;

	// GiKi = Months
	const GiKi__GiDri_duk = Math.floor( 30.5 * 86400000 );
	const Ze__GiKi_wf = Math.floor( Ze__GiDri_du / GiKi__GiDri_duk );
	Ze__GiDri_du %= GiKi__GiDri_duk;


	// GiPo = Days
	const GiPo__GiDri_duk = 86400000;
	const Ze__GiPo_wf = Math.floor( Ze__GiDri_du / GiPo__GiDri_duk );
	Ze__GiDri_du %= GiPo__GiDri_duk;

	// GiBa = Hours
	const GiBa__GiDri_duk = 3600000;
	const Ze__GiBa_wf = Math.floor( Ze__GiDri_du / GiBa__GiDri_duk );
	Ze__GiDri_du %= GiBa__GiDri_duk;

	// GiKe = Minutes
	const GiKe__GiDri_duk = 60000;
	const Ze__GiKe_wf = Math.floor( Ze__GiDri_du / GiKe__GiDri_duk);
	Ze__GiDri_du %= GiKe__GiDri_duk;

	TrzZe__Gi_vutf8 = `${Ze__GiKwu_wf}_Years ${ Ze__GiKi_wf }_Months ${Ze__GiPo_wf}_Days ${Ze__GiBa_wf}_Hours ${Ze__GiKe_wf}_Min`;
	console.log( "Build_Elapsed: " + TrzZe__Gi_vutf8 );
}


//-------------------------------------------------
// CULTURE LOAD LANG
//-------------------------------------------------
async function Hre1_Dru__ChyKeDru( KeKuMi_vutf8 )
{
	//@@@
	// LANG BASICS
	Fe__KeKu_vutf8 = KeKuMi_vutf8;
	Fe__KeDru_vutf8 = KeKuMi_vutf8.split("-")[0]
	Fe__KuVa_vutf8 = KeKuMi_vutf8.split("-")[1]


	//&&&
	// CHECK LOCALE
	let KeKu_l = Hre1_Dru__Gra_v.find( ( Ti_l ) => ( Ti_l.Vy === Fe__KeKu_vutf8 ) );
	// IF NOT, CHECK just LANG
	if( !KeKu_l ){ KeKu_l = Hre1_Dru__Gra_v.find( ( Ti_l ) => ( Ti_l.Vy === Fe__KeDru_vutf8 ) );}
	if( KeKu_l )
	{
		KeKu__ToKz_vutf8 = KeKu_l.ToKz;
	}
	console.log( "CultureFile: " + KeKu__ToKz_vutf8 + " Locale: " + Fe__KeKu_vutf8 + " Lang: " + Fe__KeDru_vutf8 + " Country: " + ( Fe__KuVa_vutf8 ? Fe__KuVa_vutf8 : "Global" ) );


	//&&&
	// TEXT_DIR
	// Set text direction
	const rtlLanguages = ['ar', 'he', 'fa'];
	if( rtlLanguages.includes( Fe__KeDru_vutf8 ) )
		{ document.body.dir = 'rtl'; }
	else { document.body.dir = 'ltr'; }


	//@@@
	// LANG_FILE
	KeDru_v = await ToKz__JSON_v( 'SuSmi03__CONTENTS/', `CONTENTS.${KeKu__ToKz_vutf8}` );
	if( !KeDru_v ){ SmaTrx( "Cannot Find CONTENTS for User Lang" ); return; }


	//&&&
	// TERMS
	// FORMULATE
	document.getElementById('VyDa').innerHTML = `${KeDru_v.TERMS.DaVa}${BriDzYz_v.MoDzDa} ${TrzFi__Gi_vutf8}`;
	document.getElementById('VyGiZe').innerHTML = `${KeDru_v.TERMS.TrzZeVa} ${TrzZe__Gi_vutf8}`;
	document.getElementById('KeDruVa').innerHTML = `${KeKu_l.KuGwz} ${KeKu_l.Va}`;
	document.getElementById('VyKo__HrzBy_Kri').innerHTML = `<span class="GwzDo GwzDo_${Ko__HrzByVy_vutf8}"></span><br>${Ko__HrzByVy_vutf8}_${Ko__KaBz_vutf8}`;

	//!!!
	// Am Setting here redundantly as out-of-order not resolved w/ async/await;
	document.getElementById('BriDzTo').innerHTML = ( ToMi_y ? `&#x1F4DA ${KeDru_v.TERMS.BriDzToKro}` : `&#x1F4E5 ${KeDru_v.TERMS.BriDzToMi}` );

	//&&&
	// LABELS
	// AUTOMATE
	// SmaDx__Kz_JSON( KeDru_v.LABELS );
	Object.entries( KeDru_v.LABELS ).forEach
	(
		function( [ Vy_vutf8, Va_vutf8 ] )
		{
			let Elm_l = document.getElementById( Vy_vutf8 );
			if( Elm_l ) { Elm_l.innerHTML = Va_vutf8; }
			else { console.log( `--------*MISS*: ${Vy_vutf8}-----------` ); }
		}
	);


	//&&&
	// SUBJECTS FILL by LANG
	//SmaDx__Ta_JSON( KeDru_v.SUBJECTS );
	const TaTzKa_v = document.getElementById( 'TaTzKa' );
	Hri3_Ne__Ta_ChyStz( TaTzKa_v );

	TzKa__Fo_wu = KeDru_v.SUBJECTS.length;
	KeDru_v.SUBJECTS.forEach
	(
		function( Ti_v, Vx_wu )
		{
			// console.log( "------ Vx_wu:", Vx_wu, Ti_v.Va );

			//&&&
			// ADD BTN
			const Kz_v = document.createElement('button');
			Kz_v.innerHTML = `${Ti_v.NAME}`;
			let JiTra_vutf8 =`TzKa__Chy( ${Vx_wu} );`;
			// console.log( JiTra_vutf8 );
			Kz_v.setAttribute( "onclick", JiTra_vutf8 );
			Kz_v.className = 'Dx__BTN';
			TaTzKa_v.appendChild( Kz_v );
		}
	);


	// UPDATE SUBJECT w/ new lists
	await TzKa__Chy(  TzKa__Fe_wu % TzKa__Fo_wu );
}


//==============================================
// 3.0
// Ko NODE
//==============================================


//-------------------------------------------------
// NODE
//-------------------------------------------------
// USER FACING
let Ko__HrzByVa_vutf8 = "Unknown";
let Ko__KaBz_vutf8 = "Unknown";

// INTERNAL
let Ko__HrzByVy_vutf8 = "???";
let Ko__ToKzJy_vutf8 = "???";

function BriDz__Ha()
{
	{ console.log( navigator.userAgent ); }
	let NAV_NODE = navigator.userAgent.toUpperCase();

	if (navigator.userAgentData)
	{
		Ko__HrzByVa_vutf8 = navigator.userAgentData.platform;
		//MOBILE = navigator.userAgentData.mobile;
		//
		// FAIL on Ko__KaBz_vutf8 as it doesn't match below
		// navigator.userAgentData.getHighEntropyValues( ["architecture", "platformVersion"])
		// .then( ua =>
		// {
		// 	// Ko__KaBz_vutf8 = ua.architecture;
		// 	// VER = ua.platformVersion;
		// } );
	}

	{
		//@@@
		// Ko__HrzByVa_vutf8
		// MOST ANDROID shows LINUX
		if( NAV_NODE.includes("ANDROID") )
		{Ko__HrzByVa_vutf8 = "Android"; Ko__HrzByVy_vutf8 = "DRD"; Ko__ToKzJy_vutf8 = "apk"; }
		else if( NAV_NODE.includes("LINUX") || NAV_NODE.includes("X11")  || NAV_NODE.includes("WAYLAND") )
		{Ko__HrzByVa_vutf8  = "Linux"; Ko__HrzByVy_vutf8 = "LNX"; Ko__ToKzJy_vutf8 = "elf"; }
		else if( NAV_NODE.includes("IPHONE") || NAV_NODE.includes("IPAD") )
		{Ko__HrzByVa_vutf8  = "iOS"; Ko__HrzByVy_vutf8 = "IOS"; Ko__ToKzJy_vutf8 = "ipa"; Ko__KaBz_vutf8  = "ARM64"; }
		else if( NAV_NODE.includes("MAC") )
		{Ko__HrzByVa_vutf8  = "Mac"; Ko__HrzByVy_vutf8 = "MAC";  Ko__ToKzJy_vutf8 = "app"; Ko__KaBz_vutf8  = "ARM64"; }
		else if( NAV_NODE.includes("WINDOWS") )
		{Ko__HrzByVa_vutf8  = "Windows"; Ko__HrzByVy_vutf8 = "WIN"; Ko__ToKzJy_vutf8 = "exe"; }

		//@@@
		// Ko__KaBz_vutf8
		if( NAV_NODE.includes("X86_64" ) || NAV_NODE.includes("X64") )
		{ Ko__KaBz_vutf8  = "X64"; }
		else if( NAV_NODE.includes("ARM" ) || NAV_NODE.includes("AARCH") )
		{ Ko__KaBz_vutf8  = "ARM64"; }
		else if( NAV_NODE.includes("RISCV" ) || NAV_NODE.includes("RISC-V") )
		{ Ko__KaBz_vutf8  = "RISC-V"; }
	}

	//@@@
	// LOG
	console.log( `Node: ${Ko__HrzByVa_vutf8}_${Ko__KaBz_vutf8}` );
}


//==============================================
// 4.0
// Hry5_Smz SPATIAL
//==============================================

//-------------------------------------------------
// WEBGL
//-------------------------------------------------
function Hry5_Smz__Ya()
{
    const gl = MxSi.getContext('webgl2');
    if (!gl)
	{
        SmaTrx( 'Browser OUT of DATE: WebGL2 is Required! Please Update.');
        return;
    }

	gl.clearColor( 0.0, 0.0, 0.0, 1.0 );
    return gl;
}

//-------------------------------------------------
// VERTEX
//-------------------------------------------------
const JiJa__Ge_vkutf8
=`#version 300 es
    in vec4 Ge_wf4;
    void main(void)
	{ gl_Position = Ge_wf4; }
`;

//-------------------------------------------------
// LOAD SHADER
//-------------------------------------------------
function Hrz6_Tro__ChyJiKz( Va_vkutf8, gl, type, JiSi_vkutf8 )
{
    const JiKz_l = gl.createShader(type);
    gl.shaderSource(JiKz_l, JiSi_vkutf8);
    gl.compileShader(JiKz_l);

    if (!gl.getShaderParameter(JiKz_l, gl.COMPILE_STATUS))
	{
		console.log( "Si: " + Va_vkutf8 );
        console.error( 'GLSL_Err: ', gl.getShaderInfoLog(JiKz_l) );
        gl.deleteShader(JiKz_l);
        return null;
    }

    return JiKz_l;
}


//-------------------------------------------------
// SHADER BUILD
//-------------------------------------------------
function Hrz6_Tro__TrzJiJa( Va_vkutf8, gl, vs, JiJa_vkutf8 )
{
	const fs = Hrz6_Tro__ChyJiKz( Va_vkutf8, gl, gl.FRAGMENT_SHADER, JiJa_vkutf8 );

	const JiJa_l = gl.createProgram();

    gl.attachShader(JiJa_l, vs);
    gl.attachShader(JiJa_l, fs);
    gl.linkProgram(JiJa_l);

    if (!gl.getProgramParameter( JiJa_l, gl.LINK_STATUS ))
	{
		console.log( "Si: " + Va_vkutf8 );
        console.error( 'WEBGL_Link: ', gl.getProgramInfoLog(JiJa_l) );
        return null;
    }

    return JiJa_l;
}


//-------------------------------------------------
// VERT BUFFER
//-------------------------------------------------
function KuTo__QUAD_Trz(gl)
{
	const Ge_wf2 = new Float32Array
	([
		-1.0, -1.0,
		1.0, -1.0,
		1.0,  1.0,
	   -1.0,  1.0
	]);

	const KuTo__QUAD_vwf2 = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, KuTo__QUAD_vwf2 );
	gl.bufferData(gl.ARRAY_BUFFER, Ge_wf2, gl.STATIC_DRAW );

	return KuTo__QUAD_vwf2;
}

//-------------------------------------------------
// VIS_STATE
//-------------------------------------------------

// PLAY PAUSE
let JoTra_y = false;
let Hry5_Smz__KriYe = true;

let MxSi__YeFo_wu = 0;
let Fi__GiDri_wf = 0;
let Fe__GiPa_wf = 0;

//@@@
// GL_INIT
const MxSi = document.getElementById('VyMxSi');
const gl = Hry5_Smz__Ya();
const KuTo__QUAD_vwf2 = KuTo__QUAD_Trz( gl );
const VS_wik = Hrz6_Tro__ChyJiKz( "QUAD_VERT", gl, gl.VERTEX_SHADER, JiJa__Ge_vkutf8 );

//-------------------------------------------------
// HUE_SHIFT_SuTy
//-------------------------------------------------
const JoSuTy__Fo_wuk = 8;
const JoSuTy__Fx_wuk = ( JoSuTy__Fo_wuk - 1 );


const SuTy__Va_wu =
{
	"STD": 0,
	"WARM_SM": 1,
	"WARM_MD": 2,
	"WARM_LG": 3,

	"ALT": 4,
	"COOL_LG": 5,
	"COOLD_MD": 6,
	"COOL_SM": 7
};

/*
//-----------------------------------
PLAN: Use these 8 RGBA values as a PALETTE
to remap CLRS based on (( HUE / 8 ).floor ) as Index.
//-----------------------------------

const JoSuTy_vv =
[
	// STD
	[
	0.2, 0.2, 1.0, 1.0
	, 0.2, 1.0, 0.2, 1.0
	, 1.0, 0.2, 0.2, 1.0
	, 0.2, 0.2, 1.0, 1.0

	, 0.2, 1.0, 0.2, 1.0
	, 1.0, 0.2, 0.2, 1.0
	, 0.2, 0.2, 1.0, 1.0
	, 0.2, 1.0, 0.2, 1.0
	],

	// WARM
	[
		0.2, 0.2, 1.0, 1.0
		, 0.2, 1.0, 0.2, 1.0
		, 1.0, 0.2, 0.2, 1.0
		, 0.2, 0.2, 1.0, 1.0

		, 0.2, 1.0, 0.2, 1.0
		, 1.0, 0.2, 0.2, 1.0
		, 0.2, 0.2, 1.0, 1.0
		, 0.2, 1.0, 0.2, 1.0
	],

	// COOL
	[
		0.2, 0.2, 1.0, 1.0
		, 0.2, 1.0, 0.2, 1.0
		, 1.0, 0.2, 0.2, 1.0
		, 0.2, 0.2, 1.0, 1.0

		, 0.2, 1.0, 0.2, 1.0
		, 1.0, 0.2, 0.2, 1.0
		, 0.2, 0.2, 1.0, 1.0
		, 0.2, 1.0, 0.2, 1.0
	],

	// STARK
	[
		0.2, 0.2, 1.0, 1.0
		, 0.2, 1.0, 0.2, 1.0
		, 1.0, 0.2, 0.2, 1.0
		, 0.2, 0.2, 1.0, 1.0

		, 0.2, 1.0, 0.2, 1.0
		, 1.0, 0.2, 0.2, 1.0
		, 0.2, 0.2, 1.0, 1.0
		, 0.2, 1.0, 0.2, 1.0
	]
];
*/
//-------------------------------------------------
// PROG_JiJa
//-------------------------------------------------
const JoJiJa__Fo_wuk = 8;
const JoJiJa__Fx_wuk = ( JoJiJa__Fo_wuk - 1 );

const JiJa__Va_wu =
{
	"HEXCIRC": 0,
	"DROPZ": 1,
	"PLAZ": 2,
	"ETHER": 3,

	"AURORA": 4,
	"HEXSCROLL": 5,
	"SUNRISE": 6,
	"CODEX": 7
};


const JiJa_v =
[
	Hrz6_Tro__TrzJiJa( "JiJa00__HEXCIRC", gl, VS_wik, JiJa00__HEXCIRC_vkutf8 )
	, Hrz6_Tro__TrzJiJa( "JiJa01__DROPZ", gl, VS_wik, JiJa01__DROPZ_vkutf8 )
	, Hrz6_Tro__TrzJiJa( "JiJa02__PLAZ", gl, VS_wik, JiJa02__PLAZ_vkutf8 )
	, Hrz6_Tro__TrzJiJa( "JiJa03__ETHER", gl, VS_wik, JiJa03__ETHER_vkutf8 )

	, Hrz6_Tro__TrzJiJa( "JiJa04__AURORA", gl, VS_wik, JiJa04__AURORA_vkutf8 )
	, Hrz6_Tro__TrzJiJa( "JiJa05__HEXSCROLL", gl, VS_wik, JiJa05__HEXSCROLL_vkutf8 )
	, Hrz6_Tro__TrzJiJa( "JiJa06__SUNRISE", gl, VS_wik, JiJa06__SUNRISE_vkutf8 )
	, Hrz6_Tro__TrzJiJa( "JiJa07__CODEX", gl, VS_wik, JiJa07__CODEX_vkutf8 )
];

const ToGe__Vy_v =
[
	gl.getAttribLocation( JiJa_v[ 0 ], 'Ge_wf4' )
	, gl.getAttribLocation( JiJa_v[ 1 ], 'Ge_wf4' )
	, gl.getAttribLocation( JiJa_v[ 2 ], 'Ge_wf4' )
	, gl.getAttribLocation( JiJa_v[ 3 ], 'Ge_wf4' )
	, gl.getAttribLocation( JiJa_v[ 4 ], 'Ge_wf4' )
	, gl.getAttribLocation( JiJa_v[ 5 ], 'Ge_wf4' )
	, gl.getAttribLocation( JiJa_v[ 6 ], 'Ge_wf4' )
	, gl.getAttribLocation( JiJa_v[ 7 ], 'Ge_wf4' )
];
const ToBri__Vy_v =
[
	gl.getUniformLocation( JiJa_v[ 0 ], 'ToBri_vwf4' )
	, gl.getUniformLocation( JiJa_v[ 1 ], 'ToBri_vwf4' )
	, gl.getUniformLocation( JiJa_v[ 2 ], 'ToBri_vwf4' )
	, gl.getUniformLocation( JiJa_v[ 3 ], 'ToBri_vwf4' )
	, gl.getUniformLocation( JiJa_v[ 4 ], 'ToBri_vwf4' )
	, gl.getUniformLocation( JiJa_v[ 5 ], 'ToBri_vwf4' )
	, gl.getUniformLocation( JiJa_v[ 6 ], 'ToBri_vwf4' )
	, gl.getUniformLocation( JiJa_v[ 7 ], 'ToBri_vwf4' )
];
// const ToTy__Vy_v =
// [
// 	gl.getUniformLocation( JiJa_v[ 0 ], 'ToTy_vwf4' )
// 	, gl.getUniformLocation( JiJa_v[ 1 ], 'ToTy_vwf4' )
// 	, gl.getUniformLocation( JiJa_v[ 2 ], 'ToTy_vwf4' )
// 	, gl.getUniformLocation( JiJa_v[ 3 ], 'ToTy_vwf4' )
// 	, gl.getUniformLocation( JiJa_v[ 4 ], 'ToTy_vwf4' )
// 	, gl.getUniformLocation( JiJa_v[ 5 ], 'ToTy_vwf4' )
// 	, gl.getUniformLocation( JiJa_v[ 6 ], 'ToTy_vwf4' )
// 	, gl.getUniformLocation( JiJa_v[ 7 ], 'ToTy_vwf4' )
// ];


//-------------------------------------------------
// CANVAS UPDATE
//-------------------------------------------------
function Hry5_Smz__ChyYe( Fe__GiDri_wf )
{
	//@@@
	// GFX_CFG
	const Fe__JiJa_wuk = ( JoJiJa__Fe_wu );
	const Fe__SuTy_wuk = ( JoSuTy__Fe_wu );


	//@@@
	// RESIZE_DETECT
	// clientDim is always below
	let Ku_w = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	let Ku_h = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
	if( MxSi.clientWidth !== Ku_w || MxSi.clientHeight !== Ku_h )
	{
		// MUST UPD style.width, NOT! clientWidth
		MxSi.style.width = Ku_w + 'px';
		MxSi.style.height = Ku_h + 'px';

		// console.log( "BrzDi_Ku: " + Ku_w + ", " + Ku_h );
		// console.log( "MxSi_HrzBu: " + MxSi.clientWidth + ", " + MxSi.clientHeight );
	}


	//@@@
	// FRAME_SIZE
	let GyKri_wu = 512;
	let ASP_wf = MxSi.clientWidth / MxSi.clientHeight;
	let MxVeGx_wu = Math.ceil( ( ASP_wf >= 1. ) ? GyKri_wu : GyKri_wu * ASP_wf );
	let MxVeGa_wu = Math.ceil( ( ASP_wf < 1. ) ? GyKri_wu : GyKri_wu / ASP_wf );

 	if( MxSi.width !== MxVeGx_wu || MxSi.height !== MxVeGa_wu )
	{
		//console.log(  "Fr# " + MxSi__YeFo_wu + " DPR: " + window.devicePixelRatio + " ASP: " + ( MxSi.clientWidth / MxSi.clientHeight )  );
		// console.log( "MxSi_VeFi: " + MxSi.width + ", " + MxSi.height );

		MxSi.width = MxVeGx_wu;
		MxSi.height = MxVeGa_wu;
		// console.log( "MxSi_VeFe: " + MxSi.width + ", " + MxSi.height );

		// STYLE requires UPDATE
		// !!!
		// 2025.04: Firefox gives ERROR: Error in parsing value for ‘width’.  Declaration dropped.
		// yet, we NEED these lines
		MxSi.style.width = MxSi.clientWidth+ 'px';
		MxSi.style.height = MxSi.clientHeight+ 'px';

		// console.log( "TiGy: " + MxSi.clientWidth/ MxVeGx_wu + ", " + MxSi.clientHeight / MxVeGa_wu );

		Hry5_Smz__KriYe = true;
	}

	//@@@
	// PLAY_PAUSE ANIM
	if( ( JoTra_y || Hry5_Smz__KriYe ) && ( JoJiJa__Fe_wu != undefined ))
	{
		if( Fi__GiDri_wf > 0 )
		{
			Fe__GiPa_wf += ( Fe__GiDri_wf - Fi__GiDri_wf ) * 0.001;
		}
		Fi__GiDri_wf = Fe__GiDri_wf;

		Bri__Dri6_wf = ( Fe__GiPa_wf % 6000.0 ) / 6000.0;


		//@@@
		// DRAW
		gl.viewport(0, 0, gl.canvas.width, gl.canvas.height );
		gl.clear( gl.COLOR_BUFFER_BIT );

		// VERTS
		gl.bindBuffer(gl.ARRAY_BUFFER, KuTo__QUAD_vwf2);
		gl.vertexAttribPointer( ToGe__Vy_v[ Fe__JiJa_wuk ], 2, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray( ToGe__Vy_v[ Fe__JiJa_wuk ] );

		gl.useProgram( JiJa_v[ Fe__JiJa_wuk ] );
		gl.uniform4fv
		(
			ToBri__Vy_v[ Fe__JiJa_wuk ]
			, [
				// TIME, FRAME, HEIGHT/WIDTH
				Fe__GiPa_wf, MxSi__YeFo_wu, MxSi.width, MxSi.height
				// HUE_SHIFT_ID, CYC_wf, RSVRD[2]
				, 6.2831853071 * ( Fe__SuTy_wuk / JoSuTy__Fo_wuk ), Bri__Dri6_wf, 0.0, 0.0
			]
		);
		//-----------------------------------
		// PLAN: Upload as PALETTE for Mix
		//-----------------------------------
		// gl.uniform4fv( ToTy__Vy_v[ Fe__JiJa_wuk ], JoSuTy_vv[ Fe__SuTy_wuk ] );
		gl.drawArrays(gl.TRIANGLE_FAN, 0, 4 );

		MxSi__YeFo_wu++;
	}
	requestAnimationFrame( Hry5_Smz__ChyYe );

	Hry5_Smz__KriYe = false;
	// console.log( "frame: " + MxSi__YeFo_wu + " Bri__Dri6_wf: " + Bri__Dri6_wf );
}

//@@@
// TOGGLE PLAY/PAUSE
function Hry5_Smz__JoTra_ChyDry()
{
	JoTra_y = !JoTra_y;
	if( JoTra_y ) { Fi__GiDri_wf =0; }
	document.getElementById('JoTraYz').innerHTML = JoTra_y ? `&#x23EF` : `&#x23F5`
}

function Hry5_Smz__ChyBriYa( Vy )
{
	var Ti_l = document.getElementById( Vy );
	Ti_l.style.animation = 'none';
	Ti_l.offsetHeight; // trigger reflow
	Ti_l.style.animation = null;
}

//==============================================
// 5.0
// ToMi DOWNLOAD
//==============================================
// TOGGLE INIT to 'not-show' DNLOAD first
let ToMi_y = true;

//-------------------------------------------------
// DOWNLOAD EXE
//-------------------------------------------------

function DISABLE_Dy( EXE )
{
	//document.getElementById('ToMi').style.display='none';
}

function DOWNLOAD_Dy( EXE )
{
	const EXE_URL = "Mx05__KoDz_EXE/Essence__" + EXE;
	// console.log( EXE_URL );

	// ONLY OFFER AVAILABLE EXE
	if(
		(( Ko__KaBz_vutf8 ===  "X64") && ( Ko__HrzByVy_vutf8 === "LNX" ))
		)
	{ window.location.assign( EXE_URL ); }

	ToMi_JaPe__Ya();
	//document.getElementById('ToMi').style.display='none';
}

function DOWNLOAD_Fe()
{
	const EXE = Ko__HrzByVy_vutf8 +"_" + Ko__KaBz_vutf8 + ".v." + Ko__ToKzJy_vutf8;
	// console.log( EXE );
	DOWNLOAD_Dy( EXE )
}

//@@@
// AUDIO PLAY
let ToMi_JaPe = document.getElementById("ToMi_JaPe");
function ToMi_JaPe__Ya()
{
	ToMi_JaPe.play();
}

function ToMi_JaPe__Yi()
{
	ToMi_JaPe.pause();
}


//@@@
// TOGGLE DNLOAD
function Hry5_Smz__To_ChyDry()
{
	ToMi_y = !ToMi_y;
	if( KeDru_v )
	{
		document.getElementById('BriDzTo').innerHTML = ( ToMi_y ? `&#x1F4DA ${KeDru_v.TERMS.BriDzToKro}` : `&#x1F4E5 ${KeDru_v.TERMS.BriDzToMi}` );
	}

	//&&&
	// TOGGLE HIDE
	document.getElementById('ToKro').style.display= ToMi_y ? 'none' : 'block';
	document.getElementById('ToMi').style.display= ToMi_y ? 'block' : 'none';
}

function Hry5_Smz__ToKro_Chy()
{
	ToMi_y = true;
	Hry5_Smz__To_ChyDry();
}

//==============================================
// 6.0
// MoMiKz CTRLS
//==============================================

//-------------------------------------------------
// KEY CTRLS
//-------------------------------------------------
document.addEventListener('keydown', (e) =>
{
	switch (e.key)
	{
		// THOTS
		case 'Home': JzKa__Chy( 0 ); return;
		case 'End': JzKa__Chy( JzKa__Fo_wu - 1 ); return;

		case 'ArrowLeft':JzKa__ChyZo(-1); return;
		case 'ArrowRight':JzKa__ChyZo(1); return;
		case '-':JzKa__ChyZo( -1 ); return;
		case '=':JzKa__ChyZo( 1 ); return;

		// SUBJECT
		case '9': TzKa__ChyZo(-1); return;
		case '0': TzKa__ChyZo(1); return;

		// TOPIC
		case '[': NzKa__ChyZo(-1); return;
		case ']': NzKa__ChyZo(1); return;


		// DNLOAD or LEARN
		case 'Escape':
		case 'Cancel':
			Hry5_Smz__To_ChyDry();
		return;

		// PLAY/PAUSE
		case 'Enter':
		case ' ':
			Hry5_Smz__JoTra_ChyDry();
			return;

		// GFX
		// BREAK to CLAMP & LOG
		case ';': JoSuTy__Fe_wu--; break;
		case '\'': JoSuTy__Fe_wu++; break;

		case ',': JoJiJa__Fe_wu--; break;
		case '.': JoJiJa__Fe_wu++; break;

		// OTHERWISE
		default: return;
	}

	// CLAMP GFX
	JoJiJa__Fe_wu &= ( JoJiJa__Fx_wuk );
	JoSuTy__Fe_wu &= ( JoSuTy__Fx_wuk );

	// LOG CHANGES
	SmaDx__JiJa_SuTy();
});

//-------------------------------------------------
// POINTER
//-------------------------------------------------
function Hrz4_Bu__Dri_Tra( e )
{
	// POINTER-DOWN (PRESS)
	console.log( `Offset X/Y: ${e.offsetX}, ${e.offsetY}
    Viewport X/Y: ${e.clientX}, ${e.clientY}
    Page X/Y: ${e.pageX}, ${e.pageY}
    Screen X/Y: ${e.screenX}, ${e.screenY}` );
}


function Hrz4_Bu__Dri_ChyGe( e )
{
	// POINTER-MOVE
	// COULD DRAW or DRAG
}

//-------------------------------------------------
// SWIPE
//-------------------------------------------------
var xDown = null, yDown = null, xUp = null, yUp = null;
document.addEventListener('touchstart', touchstart, false);
document.addEventListener('touchmove', touchmove, false);
document.addEventListener('touchend', touchend, false);
function touchstart(evt) { const firstTouch = (evt.touches || evt.originalEvent.touches)[0]; xDown = firstTouch.clientX; yDown = firstTouch.clientY; }
function touchmove(evt) { if (!xDown || !yDown ) return; xUp = evt.touches[0].clientX; yUp = evt.touches[0].clientY; }
function touchend(evt)
{
    var xDiff = xUp - xDown, yDiff = yUp - yDown;
    if ((Math.abs(xDiff) > Math.abs(yDiff)) && (Math.abs(xDiff) > 0.33 * document.body.clientWidth))
	{
        if (xDiff < 0){ JzKa__ChyZo(-1); }
        else { JzKa__ChyZo(-1); }
    }
    xDown = null, yDown = null;
}

//==============================================
// 7.0
// Hrz5_Ki ENGINE
//==============================================

//-------------------------------------------------
// LOG
//-------------------------------------------------
function SmaDx__JiJa_SuTy()
{

	console.log( `BG: ${ Object.keys( JiJa__Va_wu )[ JoJiJa__Fe_wu ]} HUE_SHIFT: ${ Object.keys( SuTy__Va_wu )[ JoSuTy__Fe_wu ]}` );
}

function SmaDx__Kz_JSON( Kz_v )
{
	Object.entries( Kz_v ).forEach
	(
		function( [ Jy, Vu] )
		{ console.log( `${Jy}: ${Vu}` );	}
	);
}

function SmaDx__Ta_JSON( Ta_v )
{
	Ta_v.forEach
	(
		function( Ti_v, Vx_wu )
		{
			console.log( "[" + Vx_wu + "]------------" );
			SmaDx__Kz_JSON( Ti_v );
		}
	);
}

//-------------------------------------------------
// ERR
//-------------------------------------------------
function SmaTrx( Trx_vutf8 )
{
	console.error( Trx_vutf8 );
	alert( Trx_vutf8 );
}

//-------------------------------------------------
// MENU CLEAR
//-------------------------------------------------
function Hri3_Ne__Ta_ChyStz( Ta_v )
{
	while( Ta_v.firstChild )
	{
		Ta_v.removeChild( Ta_v.lastChild );
	}
}

//-------------------------------------------------
// LOAD JSON
// NOTE: Attempts to use 'async import' for JSON failed via CORS
// FAIL: Firefox turn off CORS via type "about:config" @ address bar & toggle "content.cors.disable."
// WIN: google-chrome has 2 file-access flags to run
//
// LAB ( Edit locally using FILES only )
// $google-chrome --allow-file-access-from-files --allow-file-access file:///mnt/Ku5_KoKri/Nz07_Mx/index.html
// const WEBPG__SuGwy_vsg = "Mx07__SuSmi_WEBPG/";
//
// PUB ( Publish using REAL Site )
// $google-chrome powerourpeople.com
//const WEBPG__SuGwy_vsg = "https://powerourpeople.com/Mx07__SuSmi_WEBPG/";
//
//-------------------------------------------------
async function ToKz__JSON_v( ChaKuTu_vutf8, ToKzVa_vutf8 )
{
	try
	{
		let KuTu_vutf8 = `${WEBPG__SuGwy_vsg}${ChaKuTu_vutf8}${ToKzVa_vutf8}.json`;
		// console.log( `FILE seeking: ${KuTu_vutf8}`);

		const res = await fetch( KuTu_vutf8, { headers: { Accept: 'application/json' }} );
		const json = await res.json();
		return json;
	}
	catch( err )
	{ SmaTrx( `FileRead_Error: ${err}` ); }
};

//-------------------------------------------------
function Hrz4_Bu__ChyNBAR()
//-------------------------------------------------
{
	var x = document.getElementById("Vy_NBAR");
	if (x.className === "Dx__NBAR") { x.className += " responsive"; }
	else { x.className = "Dx__NBAR"; }
}


//-------------------------------------------------
async function Hrz5_Ki__BriYa()
//-------------------------------------------------
{
	//@@@
	// STATUS
	BriDzYz_v = await ToKz__JSON_v( 'SuSmi05__STATUS/', 'BriDzYz' );
	if( !BriDzYz_v ) { SmaTrx( "NO STATUS FILE!" ); return; }

	Hre7_Me__TrzGiYe();

	//@@@
	// CULTURE
	await Hre1_Dru__BriYa();

	//@@@
	// CTRLS
	// Add Pointer Events for Canvas
	// document.addEventListener( "pointerdown", Hrz4_Bu__Dri_Tra, false);
	// document.addEventListener( "pointermove", Hrz4_Bu__Dri_ChyGe, false);


}

//-------------------------------------------------
// APP INIT
// ! ONLY Global Func to Run @ Startup
(function BriDz__Ya()
//-------------------------------------------------
{
	//@@@
	// NODE
	BriDz__Ha()

	//@@@
	// STATUS-CULTURE-TOPICS
	Hrz5_Ki__BriYa();

	//@@@
	// VISUAL
	Hry5_Smz__JoTra_ChyDry();
	Hry5_Smz__ToKro_Chy();
	Hry5_Smz__ChyYe();
}
)();


//===================================
// SyDz_Yi
//===================================