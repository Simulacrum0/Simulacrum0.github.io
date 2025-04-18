//===================================
// SyDz_Ya
//===================================

//==============================================
// CONTENTS
// 1.0 JoNz TOPIC
// 2.0 Hre1_Dru CULTURE
// 3.0 Ko NODE
// 4.0 Hry5_Smz SPATIAL
// 5.0 ToMi DOWNLOAD
// 6.0 MoMiKz CTRLS
// 7.0 Hrz5_Ki ENGINE
//==============================================

//-------------------------------------------------
// CORE STRUCTS
//-------------------------------------------------
// APP STATUS
let BriDzYz_v;
// APP LANG
let KeDru_v;
// TOPIC
let NzJz_v;

//-------------------------------------------------
// CALC'D
//-------------------------------------------------
// BUILD TIME & DIFF
let TrzFi__Gi_vutf8;
let TrzZe__Gi_vutf8;



//==============================================
// 1.0
// JoNz_TOPIC
//==============================================

//-------------------------------------------------
// STATE
//-------------------------------------------------

// TOPIC
let JoNz__Fo_wu = 8;
let JoNz__Fe_wu = 0;

// THOT
let JoJz__Fo_wu = 8;
let JoJz__Fe_wu = 5;

// TRAITS
let JoJiJa__Fe_wu = 0;
let JoPo__Fe_wu = 0;


//-------------------------------------------------
// TOPIC
//-------------------------------------------------
//@@@
// TOPIC INC
function JoNz__ChyZo( Zo_wi )
{
	JoNz__Fe_wu += Zo_wi;
	if( JoNz__Fe_wu < 0 ){ JoNz__Fe_wu = JoNz__Fo_wu - 1; }
	else if( JoNz__Fe_wu >= JoNz__Fo_wu ){ JoNz__Fe_wu = 0; }

	JoNz__Chy( JoNz__Fe_wu );
}

//@@@
// TOPIC UPD
async function JoNz__Chy( Nz_wu )
{
	JoNz__Fe_wu = ( Nz_wu % JoNz__Fo_wu );

	//&&&
	// TOPIC FILE
	NzJz_v = await ToKz__JSON_v( 'SuSmi04__NzJz/NzJz00/', `NzJz00.${KeKu__ToKz_vutf8}` );
	if( !NzJz_v ) alert( "NO TOPIC FILE!" );



	//&&&
	// MENU COUNTER
	document.getElementById('JoNzVa').innerHTML = `&#x1F4D2 ${ KeDru_v.TERMS.JoNzVa} ${JoNz__Fe_wu+1}/${JoNz__Fo_wu}`;

	//&&&
	// SLIDE LIST
	JoJz__Fo_wu = NzJz_v.SLIDES.length();

	NzJz_v.SLIDES.forEach
	(
		function( Ti_v, Vx )
		{
			console.log( "[" + Vx + "]------------" + Ti_v.TITLE );
			// SmaDx__Kz_JSON( Ti_v );
		}
	);


	//&&&
	// RESET SHADER
	Fi__GiDri_wf = 0;
	Fe__GiPa_wf = 0;

	JoJz__ChyYe( 0 );
}

//-------------------------------------------------
// THOTS
//-------------------------------------------------
//@@@
// THOT INC
function JoJz__ChyZo( Zo_wi )
{
	JoJz__Fe_wu += Zo_wi;
	if( JoJz__Fe_wu < 0 ){ JoJz__Fe_wu = JoJz__Fo_wu - 1; }
	else if( JoJz__Fe_wu >= JoJz__Fo_wu ){ JoJz__Fe_wu = 0; }

	JoJz__ChyYe( JoJz__Fe_wu );
}

//@@@
// THOT_UPD
async function JoJz__ChyYe( Jz_wu )
{
	JoJz__Fe_wu = ( Jz_wu % JoJz__Fo_wu );

	Hry5_Smz__KriYe = true;

	//&&&
	// MENU COUNTER
	document.getElementById('JoJzVa').innerHTML = `&#x1F4C4 ${KeDru_v.TERMS.JoJzVa} ${JoJz__Fe_wu+1}/${JoJz__Fo_wu} `;

	JoJiJa__Fe_wu = JoJz__Fe_wu;

	//&&&
	// THOT DETAILS
	document.getElementById('JzBz').innerHTML = `SLIDE`;

	Object.entries( NzJz_v.SLIDES[ 0 ] ).forEach
	(
		function( [ Vy_vutf8, Va_vutf8 ] )
		{
			console.log( `${Vy_vutf8}: ${Va_vutf8}` );
			// let Elm_l = document.getElementById( Vy_vutf8 );
			// if( Elm_l ) { Elm_l.innerHTML = Va_vutf8; }
			// else { console.log( `--------*SMISS*: ${Vy_vutf8}-----------` ); }
		}
	);




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
// LANG/COUNTRY
// Vy: CODE
// Va: Local Name
// So: Reference English
// KuGwz: Flag as Emoji
//-------------------------------------------------
const Hre1_Dru__Gra_v =
[
	// { "Vy": "af", "Va": "Afrikaans", "KuGwz": "🇿🇦", "So": "Afrikaans", "ToKz": "af" },
	// { "Vy": "am", "Va": "አማርኛ", "KuGwz": "🇪🇹", "So": "Amharic", "ToKz": "am" },
	// { "Vy": "ar", "Va": "العربية", "KuGwz": "🇸🇦", "So": "Arabic", "ToKz": "ar" },
	// { "Vy": "az", "Va": "Azərbaycan dili", "KuGwz": "🇦🇿", "So": "Azerbaijani", "ToKz": "az" },
	// { "Vy": "be", "Va": "Беларуская", "KuGwz": "🇧🇾", "So": "Belarusian", "ToKz": "be" },
	// { "Vy": "bg", "Va": "Български", "KuGwz": "🇧🇬", "So": "Bulgarian", "ToKz": "bg" },
	// { "Vy": "bn", "Va": "বাংলা", "KuGwz": "🇧🇩", "So": "Bengali", "ToKz": "bn" },
	// { "Vy": "ca", "Va": "Català", "KuGwz": "🇪🇸", "So": "Catalan", "ToKz": "ca" },
	// { "Vy": "cs", "Va": "Čeština", "KuGwz": "🇨🇿", "So": "Czech", "ToKz": "cs" },
	// { "Vy": "da", "Va": "Dansk", "KuGwz": "🇩🇰", "So": "Danish", "ToKz": "da" },
	// { "Vy": "de", "Va": "Deutsch", "KuGwz": "🇩🇪", "So": "German", "ToKz": "de" },
	// { "Vy": "el", "Va": "Ελληνικά", "So": "Greek", "KuGwz": "🇬🇷", "ToKz": "el" },

	// en
	{ "Vy": "en", "Va": "English", "KuGwz": "🇺🇸", "So": "English", "ToKz": "en" },
	{ "Vy": "en-AU", "Va": "English (Australia)", "KuGwz": "🇦🇺", "So": "English", "ToKz": "en" },
	{ "Vy": "en-CA", "Va": "English (Canada)", "KuGwz": "🇨🇦", "So": "English", "ToKz": "en" },
	{ "Vy": "en-GB", "Va": "English (United Kingdom)", "KuGwz": "🇬🇧", "So": "English", "ToKz": "en" },

	// es
	{ "Vy": "es", "Va": "Español (España)", "So": "Spanish (Spain)", "KuGwz": "🇪🇸", "ToKz": "es" },
	{ "Vy": "es-419", "Va": "Español (Latinoamérica)", "So": "Spanish (Latin America)", "KuGwz": "🌎", "ToKz": "es" },
	{ "Vy": "es-US", "Va": "Español (Estados Unidos)", "So": "Spanish (United States)", "KuGwz": "🇺🇸", "ToKz": "es" },

	// { "Vy": "et", "Va": "Eesti", "KuGwz": "🇪🇪", "So": "Estonian", "ToKz": "et" },
	// { "Vy": "eu", "Va": "Euskara", "KuGwz": "🇪🇸", "So": "Basque", "ToKz": "eu" },
	// { "Vy": "fa", "Va": "فارسی", "KuGwz": "🇮🇷", "So": "Persian", "ToKz": "fa" },
	// { "Vy": "fi", "Va": "Suomi", "KuGwz": "🇫🇮", "So": "Finnish", "ToKz": "fi" },
	// { "Vy": "fr-CA", "Va": "Français (Canada)", "KuGwz": "🇨🇦", "So": "French", "ToKz": "fr" },
	// { "Vy": "fr-FR", "Va": "Français (France)", "KuGwz": "🇫🇷", "So": "French", "ToKz": "fr" },
	// { "Vy": "gl", "Va": "Galego", "KuGwz": "🇪🇸", "So": "Galician", "ToKz": "gl" },
	// { "Vy": "gu", "Va": "ગુજરાતી", "KuGwz": "🇮🇳", "So": "Gujarati", "ToKz": "gu" },
	// { "Vy": "he", "Va": "עברית", "KuGwz": "🇮🇱", "So": "Hebrew", "ToKz": "he" },
	// { "Vy": "hi", "Va": "हिन्दी", "KuGwz": "🇮🇳", "So": "Hindi", "ToKz": "hi" },
	// { "Vy": "hr", "Va": "Hrvatski", "KuGwz": "🇭🇷", "So": "Croatian", "ToKz": "hr" },
	// { "Vy": "hu", "Va": "Magyar", "KuGwz": "🇭🇺", "So": "Hungarian", "ToKz": "hu" },
	// { "Vy": "hy", "Va": "Հայերեն", "KuGwz": "🇦🇲", "So": "Armenian", "ToKz": "hy" },
	// { "Vy": "id", "Va": "Indonesia", "KuGwz": "🇮🇩", "So": "Indonesian", "ToKz": "id" },
	// { "Vy": "is", "Va": "Íslenska", "KuGwz": "🇮🇸", "So": "Icelandic", "ToKz": "is" },
	// { "Vy": "it", "Va": "Italiano", "KuGwz": "🇮🇹", "So": "Italian", "ToKz": "it" },
	// { "Vy": "ja", "Va": "日本語", "KuGwz": "🇯🇵", "So": "Japanese", "ToKz": "ja" },
	// { "Vy": "ka", "Va": "ქართული", "KuGwz": "🇬🇪", "So": "Georgian", "ToKz": "ka" },
	// { "Vy": "kk", "Va": "Қазақ тілі", "KuGwz": "🇰🇿", "So": "Kazakh", "ToKz": "kk" },
	// { "Vy": "km", "Va": "ខ្មែរ", "KuGwz": "🇰🇭", "So": "Khmer", "ToKz": "km" },
	// { "Vy": "kn", "Va": "ಕನ್ನಡ", "KuGwz": "🇮🇳", "So": "Kannada", "ToKz": "kn" },
	// { "Vy": "ko", "Va": "한국어", "KuGwz": "🇰🇷", "So": "Korean", "ToKz": "ko" },
	// { "Vy": "ky", "Va": "Кыргызча", "KuGwz": "🇰🇬", "So": "Kyrgyz", "ToKz": "ky" },
	// { "Vy": "lo", "Va": "ລາວ", "KuGwz": "🇱🇦", "So": "Lao", "ToKz": "lo" },
	// { "Vy": "lt", "Va": "Lietuvių", "KuGwz": "🇱🇹", "So": "Lithuanian", "ToKz": "lt" },
	// { "Vy": "lv", "Va": "Latviešu", "KuGwz": "🇱🇻", "So": "Latvian", "ToKz": "lv" },
	// { "Vy": "mk", "Va": "Македонски", "KuGwz": "🇲🇰", "So": "Macedonian", "ToKz": "mk" },
	// { "Vy": "ml", "Va": "മലയാളം", "KuGwz": "🇮🇳", "So": "Malayalam", "ToKz": "ml" },
	// { "Vy": "mn", "Va": "Монгол", "KuGwz": "🇲🇳", "So": "Mongolian", "ToKz": "mn" },
	// { "Vy": "mr", "Va": "मराठी", "KuGwz": "🇮🇳", "So": "Marathi", "ToKz": "mr" },
	// { "Vy": "ms", "Va": "Bahasa Melayu", "KuGwz": "🇲🇾", "So": "Malay", "ToKz": "ms" },
	// { "Vy": "ms-MY", "Va": "Bahasa Melayu (Malaysia)", "KuGwz": "🇲🇾", "So": "Malay (Malaysia)", "ToKz": "ms" },
	// { "Vy": "my", "Va": "ဗမာ", "KuGwz": "🇲🇲", "So": "Burmese", "ToKz": "my" },
	// { "Vy": "ne", "Va": "नेपाली", "KuGwz": "🇳🇵", "So": "Nepali", "ToKz": "ne" },
	// { "Vy": "nl", "Va": "Nederlands", "KuGwz": "🇳🇱", "So": "Dutch", "ToKz": "nl" },
	// { "Vy": "no", "Va": "Norsk", "KuGwz": "🇳🇴", "So": "Norwegian", "ToKz": "no" },
	// { "Vy": "pa", "Va": "ਪੰਜਾਬੀ", "KuGwz": "🇮🇳", "So": "Punjabi", "ToKz": "pa" },
	// { "Vy": "pl", "Va": "Polski", "KuGwz": "🇵🇱", "So": "Polish", "ToKz": "pl" },
	// { "Vy": "pt-BR", "Va": "Português (Brasil)", "KuGwz": "🇧🇷", "So": "Portuguese (Brazil)", "ToKz": "pt" },
	// { "Vy": "pt-PT", "Va": "Português (Portugal)", "KuGwz": "🇵🇹", "So": "Portuguese (Portugal)", "ToKz": "pt" },
	// { "Vy": "rm", "Va": "Rumantsch", "KuGwz": "🇨🇭", "So": "Romansh", "ToKz": "rm" },
	// { "Vy": "ro", "Va": "Română", "KuGwz": "🇷🇴", "So": "Romanian", "ToKz": "ro" },
	// { "Vy": "ru", "Va": "Русский", "KuGwz": "🇷🇺", "So": "Russian", "ToKz": "ru" },
	// { "Vy": "si", "Va": "සිංහල", "KuGwz": "🇱🇰", "So": "Sinhala", "ToKz": "si" },
	// { "Vy": "sk", "Va": "Slovenčina", "KuGwz": "🇸🇰", "So": "Slovak", "ToKz": "sk" },
	// { "Vy": "sl", "Va": "Slovenščina", "KuGwz": "🇸🇮", "So": "Slovenian", "ToKz": "sl" },
	// { "Vy": "sq", "Va": "Shqip", "KuGwz": "🇦🇱", "So": "Albanian", "ToKz": "sq" },
	// { "Vy": "sr", "Va": "Српски", "KuGwz": "🇷🇸", "So": "Serbian", "ToKz": "sr" },
	// { "Vy": "sv", "Va": "Svenska", "So": "Swedish", "KuGwz": "🇸🇪", "ToKz": "sv" },
	// { "Vy": "sw", "Va": "Kiswahili", "KuGwz": "🇹🇿", "So": "Swahili", "ToKz": "sw" },
	// { "Vy": "ta", "Va": "தமிழ்", "KuGwz": "🇮🇳", "So": "Tamil", "ToKz": "ta" },
	// { "Vy": "te", "Va": "తెలుగు", "KuGwz": "🇮🇳", "So": "Telugu", "ToKz": "te" },
	// { "Vy": "th", "Va": "ไทย", "KuGwz": "🇹🇭", "So": "Thai", "ToKz": "th" },
	// { "Vy": "tl", "Va": "Filipino", "KuGwz": "🇵🇭", "So": "Filipino", "ToKz": "tl" },
	// { "Vy": "tr", "Va": "Türkçe", "KuGwz": "🇹🇷", "So": "Turkish", "ToKz": "tr" },
	// { "Vy": "uk", "Va": "Українська", "KuGwz": "🇺🇦", "So": "Ukrainian", "ToKz": "uk" },
	// { "Vy": "ur", "Va": "اردو", "KuGwz": "🇵🇰", "So": "Urdu", "ToKz": "ur" },
	// { "Vy": "vi", "Va": "Tiếng Việt", "KuGwz": "🇻🇳", "So": "Vietnamese", "ToKz": "vi" },
	// { "Vy": "zh", "Va": "中文（简体）", "KuGwz": "🇨🇳", "So": "Chinese (Simplified)", "ToKz": "zh" },
	// { "Vy": "zh-HK", "Va": "中文（香港）", "KuGwz": "🇭🇰", "So": "Chinese (Hong Kong)", "ToKz": "zh" },
	// { "Vy": "zh-TW", "Va": "中文（繁體）", "KuGwz": "🇹🇼", "So": "Chinese (Traditional)", "ToKz": "zh" },
	// { "Vy": "zu", "Va": "Zulu", "KuGwz": "🇿🇦", "So": "Zulu", "ToKz": "zu" },
];


//-------------------------------------------------
// INIT CULTURE DEFAULTS
//-------------------------------------------------
function Hre1_Dru__BriYa()
{
	//@@@
	// FILL ENTRIES
	const TaKeDru_v = document.getElementById( 'TaKeDru' );
	while ( TaKeDru_v.firstChild )
	{
		TaKeDru_v.removeChild( TaKeDru_v.lastChild );
	}

	Hre1_Dru__Gra_v.forEach
	(
		function( Ti_v, Vx )
		{
			// console.log( "------ Vx:", Vx, Ti_v.Va );

			const Kz_v = document.createElement('button');
			Kz_v.innerHTML = `${Ti_v.KuGwz} ${Ti_v.Va}`;

			//&&&
			// ADD BTN
			let JiTra_vutf8 =`Hre1_Dru__ChyKeDru( '${Ti_v.Vy}' );`;
			// console.log( JiTra_vutf8 );
			Kz_v.setAttribute( "onclick", JiTra_vutf8 );
			Kz_v.className = 'Dx__BTN';

			// var elemm = document.createElement('rvml:image');
			// elemm.src = 'blah.png';
			// elemm.className = 'rvml';
			// elemm.onclick = "alert('blah')";
			// document.body.appendChild(elemm);
			// elemm.id = "gogo";
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
	const TrzFi__Gi_l = new Date( 823230245000 );
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
	console.log( "Words: " + KeKu__ToKz_vutf8 + " Locale: " + Fe__KeKu_vutf8 + " Lang: " + Fe__KeDru_vutf8 + " Country: " + ( Fe__KuVa_vutf8 ? Fe__KuVa_vutf8 : "Global" ) );


	//&&&
	// TEXT_DIR
	// Set text direction
	const rtlLanguages = ['ar', 'he', 'fa'];
	if( rtlLanguages.includes( Fe__KeDru_vutf8 ) )
		{ document.body.dir = 'rtl'; }
	else { document.body.dir = 'ltr'; }


	//@@@
	// LANG_FILE
	KeDru_v = await ToKz__JSON_v( 'SuSmi03__KeDru/', `KeDru.${KeKu__ToKz_vutf8}` );
	if( !KeDru_v ) alert( "NO LANGUAGE FILE!" );

	//&&&
	// TERMS
	document.getElementById('VyDa').innerHTML = `${KeDru_v.TERMS.DaVa}${BriDzYz.MoDzDa} ${TrzFi__Gi_vutf8}`;
	document.getElementById('VyGiZe').innerHTML = `${KeDru_v.TERMS.TrzZeVa} ${TrzZe__Gi_vutf8}`;
	document.getElementById('KeDruVa').innerHTML = `${KeKu_l.KuGwz} ${KeKu_l.Va}`;
	// document.getElementById('VyKo__HrzBy_Kri').innerHTML = `<span class="GwzDo GwzDo_${Ko__HrzByVy_vutf8}"></span><br>${Ko__HrzByVy_vutf8}_${Ko__KaBz_vutf8}`;


	//&&&
	// LABELS
	SmaDx__Kz_JSON( KeDru_v.LABELS );
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
	// TOPICS
	SmaDx__Ta_JSON( KeDru_v.TOPICS );

	// UPDATE LIST
	await JoNz__Chy( JoNz__Fe_wu % JoNz__Fo_wu );
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
        alert( 'Browser OUT of DATE: WebGL2 is Required! Please Update.');
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
let Fe__JiJa_wu = 0;

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
// PROG_JiJa
//-------------------------------------------------
const JiJa_v =
[
	Hrz6_Tro__TrzJiJa( "JiJa00__HEX", gl, VS_wik, JiJa00__HEX_vkutf8 )
	, Hrz6_Tro__TrzJiJa( "JiJa01__DROPZ", gl, VS_wik, JiJa01__DROPZ_vkutf8 )
	, Hrz6_Tro__TrzJiJa( "JiJa02__PLAZ", gl, VS_wik, JiJa02__PLAZ_vkutf8 )
	, Hrz6_Tro__TrzJiJa( "JiJa03__ETHER", gl, VS_wik, JiJa03__ETHER_vkutf8 )

	, Hrz6_Tro__TrzJiJa( "JiJa04__AURORA", gl, VS_wik, JiJa04__AURORA_vkutf8 )
	, Hrz6_Tro__TrzJiJa( "JiJa05__PILLAR", gl, VS_wik, JiJa05__PILLAR_vkutf8 )
	, Hrz6_Tro__TrzJiJa( "JiJa06__SMOKE", gl, VS_wik, JiJa06__SMOKE_vkutf8 )
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
const ToTy__Vy_v =
[
	gl.getUniformLocation( JiJa_v[ 0 ], 'ToTy_vwf4' )
	, gl.getUniformLocation( JiJa_v[ 1 ], 'ToTy_vwf4' )
	, gl.getUniformLocation( JiJa_v[ 2 ], 'ToTy_vwf4' )
	, gl.getUniformLocation( JiJa_v[ 3 ], 'ToTy_vwf4' )
	, gl.getUniformLocation( JiJa_v[ 4 ], 'ToTy_vwf4' )
	, gl.getUniformLocation( JiJa_v[ 5 ], 'ToTy_vwf4' )
	, gl.getUniformLocation( JiJa_v[ 6 ], 'ToTy_vwf4' )
	, gl.getUniformLocation( JiJa_v[ 7 ], 'ToTy_vwf4' )
];


//-------------------------------------------------
// CANVAS UPDATE
//-------------------------------------------------
function Hry5_Smz__ChyYe( Fe__GiDri_wf )
{
	//@@@
	// CRAFT
	Fe__JiJa_wu = JoJiJa__Fe_wu;

	//@@@
	// FRAME_SIZE
	let GyKri_wu = 512;
	let ASP_wf = MxSi.clientWidth / MxSi.clientHeight;
	let MxVeGx_wu = Math.ceil( ( ASP_wf >= 1. ) ? GyKri_wu : GyKri_wu * ASP_wf );
	let MxVeGa_wu = Math.ceil( ( ASP_wf < 1. ) ? GyKri_wu : GyKri_wu / ASP_wf );

	// clientDim is always below
	//let Ku_w = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	//let Ku_h = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
 	if( MxSi.width !== MxVeGx_wu || MxSi.height !== MxVeGa_wu )
	{
		//console.log(  "Fr# " + MxSi__YeFo_wu + " DPR: " + window.devicePixelRatio + " ASP: " + ( MxSi.clientWidth / MxSi.clientHeight )  );
		// console.log( "MxSi_HrzBu: " + MxSi.clientWidth + ", " + MxSi.clientHeight );
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
	if( JoTra_y || Hry5_Smz__KriYe )
	{
		if( Fi__GiDri_wf > 0 )
		{
			Fe__GiPa_wf += ( Fe__GiDri_wf - Fi__GiDri_wf ) * 0.001;
		}
		Fi__GiDri_wf = Fe__GiDri_wf;

		Bri__Dri6_wf = ( Fe__GiPa_wf % 6000.0 ) / 6000.0;


		//@@@
		// DRAW
		gl.clear( gl.COLOR_BUFFER_BIT );

		// VERTS
		gl.bindBuffer(gl.ARRAY_BUFFER, KuTo__QUAD_vwf2);
		gl.vertexAttribPointer( ToGe__Vy_v[ Fe__JiJa_wu ], 2, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray( ToGe__Vy_v[ Fe__JiJa_wu ] );

		gl.useProgram( JiJa_v[ Fe__JiJa_wu ] );
		gl.uniform4fv
		(
			ToBri__Vy_v[ Fe__JiJa_wu ]
			, [
				// TIME, FRAME, HEIGHT/WIDTH
				Fe__GiPa_wf, MxSi__YeFo_wu, MxSi.width, MxSi.height
				// RSVRD
				, 0.0, 0.0, 0.0, 0.0
			]
		);
		gl.uniform4fv
		(
			ToTy__Vy_v[ Fe__JiJa_wu ]
			, [
				// PALETTE
				0.2, 0.2, Bri__Dri6_wf, 1.0
				, 0.2, Bri__Dri6_wf, 0.2, 1.0
				, Bri__Dri6_wf, 0.2, 0.2, 1.0
				, 0.2, 0.2, Bri__Dri6_wf, 1.0

				, 0.2, Bri__Dri6_wf, 0.2, 1.0
				, Bri__Dri6_wf, 0.2, 0.2, 1.0
				, 0.2, 0.2, Bri__Dri6_wf, 1.0
				, 0.2, Bri__Dri6_wf, 0.2, 1.0
			]
		);

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
	Ti_l.offsetHeight; /* trigger reflow */
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
	window.location.assign( EXE_URL );

	ToMi_JaPe__Ya();
	//document.getElementById('ToMi').style.display='none';
}

function DOWNLOAD_Fe()
{
	const EXE = Ko__HrzByVy_vutf8 +"_" + Ko__KaBz_vutf8 + ".w." + Ko__ToKzJy_vutf8;
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
function Hry5_Smz__ToMi_ChyDry()
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
	Hry5_Smz__ToMi_ChyDry();
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
		// NAVI
		case 'ArrowUp':JoNz__ChyZo(-1); break;
		case 'ArrowDown':JoNz__ChyZo(1); break;

		case 'ArrowLeft': JoJz__ChyZo(-1); break;

		case 'Tab':
		case 'ArrowRight':
			 JoJz__ChyZo(1);
		break;

		// DNLOAD or LEARN
		case 'Escape':
		case 'Cancel':
			Hry5_Smz__ToMi_ChyDry();
		break;

		// Play/Pause
		case 'Enter':
		case ' ':
			Hry5_Smz__JoTra_ChyDry();
		 break;

		// OTHERWISE
		default: return;
	}
});


//==============================================
// 7.0
// Hrz5_Ki ENGINE
//==============================================
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
		function( Ti_v, Vx )
		{
			console.log( "[" + Vx + "]------------" );
			SmaDx__Kz_JSON( Ti_v );
		}
	);
}

//-------------------------------------------------
// LOAD JSON
//-------------------------------------------------
async function ToKz__JSON_v( ChaKuTu_vutf8, ToKzVa_vutf8 )
{
	try
	{
		let KuTu_vutf8 = `https://powerourpeople.com/Mx07__SuSmi_WEBPG/${ChaKuTu_vutf8}${ToKzVa_vutf8}.json`;
		console.log( `FILE: ${KuTu_vutf8}`);

		const res = await fetch( KuTu_vutf8, { headers: { Accept: 'application/json' }} );
		const json = await res.json();
		return json;
	}
	catch( err )
	{ alert( `FileRead_Error: ${err}` ); }
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
	BriDzYz_v = await ToKz__JSON_v( 'SuSmi04__NzJz/', 'BriDzYz' );
	if( !BriDzYz_v ) alert( "NO STATUS FILE!" );

	Hre7_Me__TrzGiYe();

	//@@@
	// CULTURE
	await Hre1_Dru__BriYa();


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
	Hry5_Smz__ToMi_ChyDry();
	Hry5_Smz__KriYe = true;
	Hry5_Smz__ChyYe();
}
)();


//===================================
// SyDz_Yi
//===================================