const BriDzSa__Gi_vsg="2026-03-23--13:57"; 
 const BriDzSa__Da_vsg = "PUB_v0.264"; 
 const BriDzSa__Da_wuk = "264"; 
 const BriDz__Mx_KuTu_vsg = "https://powerourpeople.com/"; 

//----------------------------
// LIFE_STATE^BriYz
//----------------------------
const BriYz = Object.freeze
({
	HxHo_qk: 0
	, Trx_qk: 1
	, Cho_qk: 2
	, Che_qk: 3

	, Ya_qk: 4
	, Ye_qk: 5
	, Yo_qk: 6
	, Yi_qk: 7
});


//----------------------------
// MACHINE_TYPE^KoJy
//----------------------------
const Hra0_KoJy = Object.freeze
({
	KoBeDru_qk: 0 // PHONE
	, KoBeGwa_qk: 1 // TABLET
	, KoBa_qk: 2 // STATION
	, KoBeMz_qk: 3 // XR
});


//----------------------------
// SYSTEM LOG
//----------------------------
// ONLY SAVE last 64 log lines
const SmaBraHi_wuk = 64;
const SmaViKa_wuk = ( SmaBraHi_wuk - 1 );

//----------------------------
// SYSTEM SERVICE_GOVERNOR
//----------------------------
let Ko =
{
	//@@@
	// BOOT
	WASM64_yk: false
	, Trx_vsg: null

	//@@@
	// LOG
	// Sma_vvsg
	, SmaFe_wu: 0
	, Sma_vvsg: [ SmaBraHi_wuk ].fill( null )

	//@@@
	// NODE

	// DEVICE
	, Hra0_Ko__Jy_q: Hra0_KoJy.KoBa_qk
	// OS
	, Hrz3_By__VaDe_vsg: "Unknown"
	, Hrz3_By__Gwz_vsg: null
	// BROWSER
	, Hrz4_Bu__VaDe_vsg: "Unknown"
	, Hrz4_Bu__Gwz_vsg: null

	// CPU
	, KaBz__VaDe_vsg: "Unknown"
	, KaBz__Gwz_vsg: null
	// GPU
	, KaBx__VaDe_vsg: "Unknown"
	, KaBx__Gwz_vsg: null
	// NPU
	, KaBa__VaDe_vsg: "None"
	, KaBa__Gwz_vsg: null


	//@@@
	// SERV
	// Setup @ KoDz__YaFz
	, Ji: {}

	//@@@
	// CFG
	// by User
	, TaKeDy_l: {}


	//@@@
	// TIME
	, MoDzYa__GiDri_duk: 0
	, BriYa_GiDri_df: 0.0
	, BriYe_GiDri_df: 0.0
	, YeWi_df: 0.0
	, YeFo_wu: 0
};


//==============================================
// LAUNCH_CFG VERSION
// Triggers a Reset
//==============================================
const KoSy__KwiYz__Da_wuk = 1;

//==============================================
// TEK_MSG_END
//==============================================
//==============================================
// LANG/COUNTRY BEGIN
//==============================================
const Hre1_Dru__ToKz_v =
[
	// DEFAULT SRC
	"en"

	, " ar" // 0
	, " bg" // 1
	, " bn" // 2
	, " cs" // 3
	, " da" // 4
	, " de" // 5
	, " el" // 6
	, " es-ES" // 7
	, " es-419" // 8
	, " fi" // 9
	, " fr-CA" // 10
	, " fr-FR" // 11
	, " he" // 12
	, " hi" // 13
	, " hr" // 14
	, " hu" // 15
	, " id" // 16
	, " it" // 17
	, " ja" // 18
	, " kn" // 19
	, " ko" // 20
	, " lt" // 21
	, " mr" // 22
	, " nl" // 23
	, " no" // 24
	, " pl" // 25
	, " pt-BR" // 26
	, " pt-PT" // 27
	, " ro" // 28
	, " ru" // 29
	, " sk" // 30
	, " sl" // 31
	, " sv" // 32
	, " ta" // 33
	, " te" // 34
	, " th" // 35
	, " tr" // 36
	, " uk" // 37
	, " vi" // 38
	, " zh" // 39
	, " zh-HK" // 40
	, " zh-TW" // 41
];


//-------------------------------------------------
//
// Vy: CODE
// Va: Local Name
// So: Reference English
// KuGwz: Flag as Emoji
//-------------------------------------------------
const Hre1_Dru__Gra_v =
[

	//=================================================================
	// GENERIC ENGLISH
	{
		"Vy": "en",
		"Va": "U.N. English",
		"KuGwz": "🌐",
		"So": "U.N. English",
		"ToKz": "en"
	},

	//=================================================================

	{ "Vy": "af", "Va": "Afrikaans", "KuGwz": "🇿🇦", "So": "Afrikaans", "ToKz": "af" },
	{ "Vy": "am", "Va": "አማርኛ", "KuGwz": "🇪🇹", "So": "Amharic", "ToKz": "am" },
	{ "Vy": "ar", "Va": "العربية", "KuGwz": "🇸🇦", "So": "Arabic", "ToKz": "ar" },
	{ "Vy": "az", "Va": "Azərbaycan dili", "KuGwz": "🇦🇿", "So": "Azerbaijani", "ToKz": "az" },
	{ "Vy": "be", "Va": "Беларуская", "KuGwz": "🇧🇾", "So": "Belarusian", "ToKz": "be" },
	{ "Vy": "bg", "Va": "Български", "KuGwz": "🇧🇬", "So": "Bulgarian", "ToKz": "bg" },
	{ "Vy": "bn", "Va": "বাংলা", "KuGwz": "🇧🇩", "So": "Bengali", "ToKz": "bn" },

	{ "Vy": "ca", "Va": "Català", "KuGwz": "🇪🇸", "So": "Catalan", "ToKz": "ca" },
	{ "Vy": "cs", "Va": "Čeština", "KuGwz": "🇨🇿", "So": "Czech", "ToKz": "cs" },
	{ "Vy": "da", "Va": "Dansk", "KuGwz": "🇩🇰", "So": "Danish", "ToKz": "da" },
	{ "Vy": "de", "Va": "Deutsch", "KuGwz": "🇩🇪", "So": "German", "ToKz": "de" },
	{ "Vy": "el", "Va": "Ελληνικά", "So": "Greek", "KuGwz": "🇬🇷", "ToKz": "el" },


	//=================================================================
	// en
	{
		"Vy": "en",
		"Va": "English",
		"KuGwz": "🇺🇸",
		"So": "English",
		"ToKz": "en"
	},
	{
		"Vy": "en-AU",
		"Va": "English (Australia)",
		"KuGwz": "🇦🇺",
		"So": "English",
		"ToKz": "en"
	},
	{
		"Vy": "en-CA",
		"Va": "English (Canada)",
		"KuGwz": "🇨🇦",
		"So": "English",
		"ToKz": "en"
	},
	{
		"Vy": "en-GB",
		"Va": "English (United Kingdom)",
		"KuGwz": "🇬🇧",
		"So": "English",
		"ToKz": "en"
	},

	//=================================================================
	// es
	{
		"Vy": "es-ES",
		"Va": "Español (España)",
		"So": "Spanish (Spain)",
		"KuGwz": "🇪🇸",
		"ToKz": "es-ES"
	},
	{
		"Vy": "es-419",
		"Va": "Español (Latinoamérica)",
		"So": "Spanish (Latin America)",
		"KuGwz": "🌎",
		"ToKz": "es-419"
	},
	{
		"Vy": "es-US",
		"Va": "Español (Estados Unidos)",
		"So": "Spanish (United States)",
		"KuGwz": "🇺🇸",
		"ToKz": "es-419"
	},

	//=================================================================


	{ "Vy": "et", "Va": "Eesti", "KuGwz": "🇪🇪", "So": "Estonian", "ToKz": "et" },
	{ "Vy": "eu", "Va": "Euskara", "KuGwz": "🇪🇸", "So": "Basque", "ToKz": "eu" },
	{ "Vy": "fa", "Va": "فارسی", "KuGwz": "🇮🇷", "So": "Persian", "ToKz": "fa" },
	{ "Vy": "fi", "Va": "Suomi", "KuGwz": "🇫🇮", "So": "Finnish", "ToKz": "fi" },
	{ "Vy": "fr-CA", "Va": "Français (Canada)", "KuGwz": "🇨🇦", "So": "French", "ToKz": "fr-CA" },
	{ "Vy": "fr-FR", "Va": "Français (France)", "KuGwz": "🇫🇷", "So": "French", "ToKz": "fr-FR" },
	{ "Vy": "gl", "Va": "Galego", "KuGwz": "🇪🇸", "So": "Galician", "ToKz": "gl" },
	{ "Vy": "gu", "Va": "ગુજરાતી", "KuGwz": "🇮🇳", "So": "Gujarati", "ToKz": "gu" },

	{ "Vy": "he", "Va": "עברית", "KuGwz": "🇮🇱", "So": "Hebrew", "ToKz": "he" },
	{ "Vy": "hi", "Va": "हिन्दी", "KuGwz": "🇮🇳", "So": "Hindi", "ToKz": "hi" },
	{ "Vy": "hr", "Va": "Hrvatski", "KuGwz": "🇭🇷", "So": "Croatian", "ToKz": "hr" },
	{ "Vy": "hu", "Va": "Magyar", "KuGwz": "🇭🇺", "So": "Hungarian", "ToKz": "hu" },
	{ "Vy": "hy", "Va": "Հայերեն", "KuGwz": "🇦🇲", "So": "Armenian", "ToKz": "hy" },
	{ "Vy": "id", "Va": "Indonesia", "KuGwz": "🇮🇩", "So": "Indonesian", "ToKz": "id" },
	{ "Vy": "is", "Va": "Íslenska", "KuGwz": "🇮🇸", "So": "Icelandic", "ToKz": "is" },
	{ "Vy": "it", "Va": "Italiano", "KuGwz": "🇮🇹", "So": "Italian", "ToKz": "it" },
	{ "Vy": "ja", "Va": "日本語", "KuGwz": "🇯🇵", "So": "Japanese", "ToKz": "ja" },

	{ "Vy": "ka", "Va": "ქართული", "KuGwz": "🇬🇪", "So": "Georgian", "ToKz": "ka" },
	{ "Vy": "kk", "Va": "Қазақ тілі", "KuGwz": "🇰🇿", "So": "Kazakh", "ToKz": "kk" },
	{ "Vy": "km", "Va": "ខ្មែរ", "KuGwz": "🇰🇭", "So": "Khmer", "ToKz": "km" },
	{ "Vy": "kn", "Va": "ಕನ್ನಡ", "KuGwz": "🇮🇳", "So": "Kannada", "ToKz": "kn" },
	{ "Vy": "ko", "Va": "한국어", "KuGwz": "🇰🇷", "So": "Korean", "ToKz": "ko" },
	{ "Vy": "ky", "Va": "Кыргызча", "KuGwz": "🇰🇬", "So": "Kyrgyz", "ToKz": "ky" },
	{ "Vy": "lo", "Va": "ລາວ", "KuGwz": "🇱🇦", "So": "Lao", "ToKz": "lo" },
	{ "Vy": "lt", "Va": "Lietuvių", "KuGwz": "🇱🇹", "So": "Lithuanian", "ToKz": "lt" },
	{ "Vy": "lv", "Va": "Latviešu", "KuGwz": "🇱🇻", "So": "Latvian", "ToKz": "lv" },

	{ "Vy": "mk", "Va": "Македонски", "KuGwz": "🇲🇰", "So": "Macedonian", "ToKz": "mk" },
	{ "Vy": "ml", "Va": "മലയാളം", "KuGwz": "🇮🇳", "So": "Malayalam", "ToKz": "ml" },
	{ "Vy": "mn", "Va": "Монгол", "KuGwz": "🇲🇳", "So": "Mongolian", "ToKz": "mn" },
	{ "Vy": "mr", "Va": "मराठी", "KuGwz": "🇮🇳", "So": "Marathi", "ToKz": "mr" },
	{ "Vy": "ms", "Va": "Bahasa Melayu", "KuGwz": "🇲🇾", "So": "Malay", "ToKz": "ms" },
	{ "Vy": "ms-MY", "Va": "Bahasa Melayu (Malaysia)", "KuGwz": "🇲🇾", "So": "Malay (Malaysia)", "ToKz": "ms" },
	{ "Vy": "my", "Va": "ဗမာ", "KuGwz": "🇲🇲", "So": "Burmese", "ToKz": "my" },
	{ "Vy": "ne", "Va": "नेपाली", "KuGwz": "🇳🇵", "So": "Nepali", "ToKz": "ne" },
	{ "Vy": "nl", "Va": "Nederlands", "KuGwz": "🇳🇱", "So": "Dutch", "ToKz": "nl" },
	{ "Vy": "no", "Va": "Norsk", "KuGwz": "🇳🇴", "So": "Norwegian", "ToKz": "no" },

	{ "Vy": "pa", "Va": "ਪੰਜਾਬੀ", "KuGwz": "🇮🇳", "So": "Punjabi", "ToKz": "pa" },
	{ "Vy": "pl", "Va": "Polski", "KuGwz": "🇵🇱", "So": "Polish", "ToKz": "pl" },
	{ "Vy": "pt-BR", "Va": "Português (Brasil)", "KuGwz": "🇧🇷", "So": "Portuguese (Brazil)", "ToKz": "pt-BR" },
	{ "Vy": "pt-PT", "Va": "Português (Portugal)", "KuGwz": "🇵🇹", "So": "Portuguese (Portugal)", "ToKz": "pt-PT" },
	{ "Vy": "rm", "Va": "Rumantsch", "KuGwz": "🇨🇭", "So": "Romansh", "ToKz": "rm" },
	{ "Vy": "ro", "Va": "Română", "KuGwz": "🇷🇴", "So": "Romanian", "ToKz": "ro" },
	{ "Vy": "ru", "Va": "Русский", "KuGwz": "🇷🇺", "So": "Russian", "ToKz": "ru" },

	{ "Vy": "si", "Va": "සිංහල", "KuGwz": "🇱🇰", "So": "Sinhala", "ToKz": "si" },
	{ "Vy": "sk", "Va": "Slovenčina", "KuGwz": "🇸🇰", "So": "Slovak", "ToKz": "sk" },
	{ "Vy": "sl", "Va": "Slovenščina", "KuGwz": "🇸🇮", "So": "Slovenian", "ToKz": "sl" },
	{ "Vy": "sq", "Va": "Shqip", "KuGwz": "🇦🇱", "So": "Albanian", "ToKz": "sq" },
	{ "Vy": "sr", "Va": "Српски", "KuGwz": "🇷🇸", "So": "Serbian", "ToKz": "sr" },
	{ "Vy": "sv", "Va": "Svenska", "So": "Swedish", "KuGwz": "🇸🇪", "ToKz": "sv" },
	{ "Vy": "sw", "Va": "Kiswahili", "KuGwz": "🇹🇿", "So": "Swahili", "ToKz": "sw" },

	{ "Vy": "ta", "Va": "தமிழ்", "KuGwz": "🇮🇳", "So": "Tamil", "ToKz": "ta" },
	{ "Vy": "te", "Va": "తెలుగు", "KuGwz": "🇮🇳", "So": "Telugu", "ToKz": "te" },
	{ "Vy": "th", "Va": "ไทย", "KuGwz": "🇹🇭", "So": "Thai", "ToKz": "th" },
	{ "Vy": "tl", "Va": "Filipino", "KuGwz": "🇵🇭", "So": "Filipino", "ToKz": "tl" },
	{ "Vy": "tr", "Va": "Türkçe", "KuGwz": "🇹🇷", "So": "Turkish", "ToKz": "tr" },

	{ "Vy": "uk", "Va": "Українська", "KuGwz": "🇺🇦", "So": "Ukrainian", "ToKz": "uk" },
	{ "Vy": "ur", "Va": "اردو", "KuGwz": "🇵🇰", "So": "Urdu", "ToKz": "ur" },
	{ "Vy": "vi", "Va": "Tiếng Việt", "KuGwz": "🇻🇳", "So": "Vietnamese", "ToKz": "vi" },

	{ "Vy": "zh", "Va": "中文（简体）", "KuGwz": "🇨🇳", "So": "Chinese (Simplified)", "ToKz": "zh" },
	{ "Vy": "zh-HK", "Va": "中文（香港）", "KuGwz": "🇭🇰", "So": "Chinese (Hong Kong)", "ToKz": "zh-HK" },
	{ "Vy": "zh-TW", "Va": "中文（繁體）", "KuGwz": "🇹🇼", "So": "Chinese (Traditional)", "ToKz": "zh-TW" },
	{ "Vy": "zu", "Va": "Zulu", "KuGwz": "🇿🇦", "So": "Zulu", "ToKz": "zu" }
];


//==============================================
// LANG/COUNTRY END
//==============================================
//==============================================
// CORE MSGS
//==============================================
const KoOPT__SaPy__ToKz_v=
[
	"1.png"
];

//-------------------------------------------------
// TOPIC NUMBERS (Shortcuts)
const KoOPT__NzVx_v =
//-------------------------------------------------
[
	"1️⃣"
	, "2️⃣"
	, "3️⃣"
	, "4️⃣"
	, "5️⃣"
	, "6️⃣"
	, "7️⃣"
	, "8️⃣"
	, "9️⃣"
	, "🔟"
];


//-------------------------------------------------
// BG MODES
//-------------------------------------------------
const KoOPT__PoKu_v =
[
	// WHITE GRAFPAPER:
	"#EEEEFF", "#AAAAFF", "#8888FF"
	// BLUEPRINT:
	, "#8888BB", "#9999CC", "#BBBBEE"
	// GREYGRAF
	, "#999999", "#FFFFFF", "#222222"
	// PURPLE
	, "#993399", "#999999", "#CCCCCC"

	// CHARCOAL
	, "#555555", "#BBBBBB", "#DDDDDD"
	// DEEP BLUE
	, "#333355", "#9999CC", "#BBBBEE"
	// FADE
	, "#333333", "#666666", "#999999"
	// DARK
	, "#000000", "#555555", "#888888"
];

//-------------------------------------------------
// CLR MODES
//-------------------------------------------------
const KoOPT__PoSz_v =
[
	{
		Va: "Classic Light Mode"
		, PoGwyFz: "#CCCA"	//  Outermost Base Panel

		, PoKuDe: "#DDDA" // Panel for Paragraphs & Headers
		, PoKuTraHo: "#CCC8" // MENU TITLE BG
		, PoKuTraHy: "#FFF8" // MENU SELECT TITLE BG
		, PoKuTz: "#CCCF" // DOMAIN BG
		, PoKuStuVo: "#AAA8" // SECTION LINE

		, PoBre: "#BBB" //  Panel of Choices
		, PoBreHu: "#BBB4"	// CHOOSE GROUP
		, PoBreVo: "#BBB8"	// FADED ELM
		, PoBreSpo: "#BBBF" // SPRITE SELECTOR

		, PoSeVu:"#666" // CFG VALUE
		, PoSoSmo: "#555"	// TXT SHADOW

		, PoSi: "#000" // MAIN TXT
		, PoSiVoHu:"#0003" // FADED TXT
		, PoSiSpo: "#000F" // ACTIVE

		, PoSmo: "#BBB" // FONT 3D SHADOW
		, PoSmuTra: "#D22"	// ACTIVATE
		, PoSmuSe: "#2A2" // GO
	}
	,
	{
		Va: "Classic Dark Mode"
		, PoGwyFz: "#000A" // Outermost Base Panel

		, PoKuDe: "#222A" // Panel for Paragraphs & Headers
		, PoKuTraHy: "#0008" //MENU SELECT TITLE BG
		, PoKuTraHo: "#4448" //MENU TITLE BG
		, PoKuTz: "#444F" //DOMAIN BG
		, PoKuStuVo: "#6668" //SECTION LINE

		, PoBre: "#888" // Panel of Choices
		, PoBreHu: "#8884" //CHOOSE GROUP
		, PoBreVo: "#8888" //FADED ELM
		, PoBreSpo: "#888F" //SPRITE SELECTOR

		, PoSeVu:"#CCC" //CFG VALUE
		, PoSoSmo: "#999" // TXT SHADOW

		, PoSi: "#FFF" //MAIN TXT
		, PoSiVoHu:"#003" // FADED TXT
		, PoSiSpo: "#FFFF" //ACTIVE

		, PoSmo: "#777" //FONT 3D SHADOW
		, PoSmuTra: "#D22" //ACTIVATE
		, PoSmuSe: "#2A2" // GO
	}
	,
	{
		Va: "Velvet Dark Mode"
		, PoGwyFz: "#4007" // Outermost Base Panel

		, PoKuDe: "#500A" // Panel for Paragraphs & Headers
		, PoKuTraHy: "#7118" //MENU SELECT TITLE BG
		, PoKuTraHo: "#A118" //MENU TITLE BG
		, PoKuTz: "#A11F" //DOMAIN BG
		, PoKuStuVo: "#D008" //SECTION LINE

		, PoBre: "#D66" // Panel of Choices
		, PoBreHu: "#D664" //CHOOSE GROUP
		, PoBreVo: "#D888" //FADED ELM
		, PoBreSpo: "#D88F" //SPRITE SELECTOR

		, PoSeVu:"#FCC" //CFG VALUE
		, PoSoSmo: "#A66" // TXT SHADOW

		, PoSi: "#FFF" //MAIN TXT
		, PoSiVoHu:"#FFF3" // FADED TXT
		, PoSiSpo: "#FFFF" //ACTIVE

		, PoSmo: "#B66" //FONT 3D SHADOW
		, PoSmuTra: "#DD2" //ACTIVATE
		, PoSmuSe: "#2A2" // GO
	}
	,
	{
		Va: "Deep Sea Dark Mode"
		, PoGwyFz: "#0047" // Outermost Base Panel

		, PoKuDe: "#005A" // Panel for Paragraphs & Headers
		, PoKuTraHy: "#1178" //MENU SELECT TITLE BG
		, PoKuTraHo: "#11A8" //MENU TITLE BG
		, PoKuTz: "#11AF" //DOMAIN BG
		, PoKuStuVo: "#DD28" //SECTION LINE

		, PoBre: "#66D" // Panel of Choices
		, PoBreHu: "#66D4" //CHOOSE GROUP
		, PoBreVo: "#88D8" //FADED ELM
		, PoBreSpo: "#88DF" //SPRITE SELECTOR

		, PoSeVu:"#CCF" //CFG VALUE
		, PoSoSmo: "#66A" // TXT SHADOW

		, PoSi: "#FFF" //MAIN TXT
		, PoSiVoHu:"#FFF3" // FADED TXT
		, PoSiSpo: "#FFFF" //ACTIVE

		, PoSmo: "#66B" //FONT 3D SHADOW
		, PoSmuTra: "#EE2" //ACTIVATE
		, PoSmuSe: "#2A2" // GO
	}

];

//-------------------------------------------------
//STYLE END
//-------------------------------------------------
//==============================================
// OPT BEGIN
//==============================================
//-------------------------------------------------
// GUI_TYPES
const JyOPT = Object.freeze
//-------------------------------------------------
({
	Tz_MoKu_qk: 0 // Domain Cmds
	, Tz_ToKu_qk: 1 // Domain Info

	, Nz_Gwx_qk: 2 // Topic Line by Line
	, Nz_GwaHu_qk: 3 // Topic Small Areas
	, Nz_GwaHi_qk: 4 // Topic Large Areas

	, Ka_To_qk: 5 // Body Info
	, Ka_Ne_qk: 6 // Body Choice

	, Ne_Tra_qk: 7 // Btn
	, Ne_HyHo_qk: 8 // Toggle
	, Ne_VxBra_qk: 9 // Slider

	, Ne_TaGwx_qk: 10 // List
	, Ne_TaGwa_qk: 11 // Grid
	, Ne_KeDru_Tre_qk: 12 // Text Edit
	, Ne_KeDru_Che_qk: 13 // Pwd Edit

	// Tooltip + VisToggle
	// List Item
	// Grid Item
	// YouTube Link/Thumbnail

	, To_TzBz_qk: 14 // Domain Headline
	, To_NzBz_qk: 15 // Title under Topic
	, To_VaDe_qk: 16 // Choice Label
	, To_KeDru_GyHi_qk: 17 // Paragraph

	, To_GyDe_qk: 18 // Info Horizontal
	, To_GoGa_qk: 19 // Info Vertical
	, To_VaSpo_qk: 20 // Label
	, To_VuSpo_qk: 21 // Value

	, To_JaPoBz_qk: 22 // IMG Title Sized w/ EDGE
	, To_JaPoSi_qk: 23 // Img Src Sized
	, To_JaPoVa_qk: 24 // IMG Txt Sized
	, To_JaPoVa_Kwu_qk: 25 // IMG Txt Size w/ EDGE

	, To_TuVa_qk: 26 // Txt Link

	, Kru_TraVa_qk: 27 // TXT BTN
	, Kru_TraJaPo_qk: 28 // IMG BTN
	, Kru_TiVa_qk: 29 // TXT ITEM
	, Kru_TiJaPo_qk: 30 // IMG ITEM

});

//-------------------------------------------------
// GUI TYPE DATA
const KoOPT__JyTy_v =
//-------------------------------------------------
[
	//--------------------------------------
	// DOMAIN CMD, INFO
	//--------------------------------------
	  { elm: "div", class: "NeKuJy Gz02__HreJo_Ne" }
	, { elm: "div", class: "NeKuJy Gz02__HreJo_To" }


	//--------------------------------------
	// TOPIC Nz Va, NiNe, HyHo
	//--------------------------------------
	, { elm: "div", class: "Gz04__NzNe_Gwx" }
	, { elm: "div", class: "Gz04__NzNe_GwaHu" }
	, { elm: "div", class: "Gz04__NzNe_GwaHi" }


	//--------------------------------------
	// SPACE
	//--------------------------------------
	// Ka_To_qk SPACE INFO
	, { elm: "div", class: "Gz05__KaTo" }
	// Ka_Ne_qk SPACE CHOICE
	, { elm: "div", class: "Gz05__KaNe" }


	//--------------------------------------
	// CHOICE
	//--------------------------------------
	// Ne_Tra_qk BTN
	, { elm: "button", class: "HriNe_Tra TreHy WaDru_Va" }
	// Ne_HyHo_qk TOGGLE
	, { elm: "input", class: "HriNe_HyHo_Mz" }
	// Ne_VxBra_qk SLIDER
	, { elm: "input", class: "HriNe_Vo" }

	// Ne_TaGwx_qk LIST
	, { elm: "div", class: "HriNe_Ta__NeKu HriNeTi WaDru_Vu" }
	// Ne_TaGwa_qk GRID
	, { elm: "div", class: "HriNe_Ta__NeKu HriNeTi WaDru_Vu" }
	// Ne_KeDru_Tre_qk TEXT EDIT
	, { elm: "div", class: "" }
	// Ne_KeDru_Che_qk PWD EDIT
	, { elm: "div", class: "" }


	//--------------------------------------
	// INFO
	//--------------------------------------

	// To_TzBz_qk DOMAIN HEADLINE
	, { elm: "p", class: "KeDru_NeVa KeDruBz WaDru_Va" }
	// To_NzBz_qk TOPIC HEADLINE
	, { elm: "p", class: "KeDru_NeVa KeDruNz WaDru_Va " }
	// To_VaDe_qk CHOICE LABEL
	, { elm: "span", class: "KeDru_NeVa WaDru_Va" }
	// Ne_KeDru_Hi_qk PGRPH
	, { elm: "span", class: "KeDruSkx WaDru_Vu" }


	// To_GyDe_qk INFO HORIZONTAL
	, { elm: "div", class: "KeDruSkx WaDru_Vu" }
	// To_GoGa_qk INFO VERTICAL
	, { elm: "div", class: "KeDru_GoGa WaDru_Vu" }
	// To_VaSpo_qk LABEL
	, { elm: "p", class: "KeDru_NeVa WaDru_Vu" }
	// To_VuSpo_qk VALUE
	, { elm: "div", class: "KeDru_ToVu WaDru_Vu" }


	// To_JaPoBz_qk IMG TITLE EDGE
	, { elm: "img", class: "BriDz_FzVa JaPo__GyBzHu_Kwu" }
	// To_JaPoSi_qk IMG SRC Sized
	, { elm: "img", class: "JaPo__GyBzHu JaPo__GyBzDe_Kwu" }
	// To_JaPoVa_qk IMG TXT Sized
	, { elm: "img", class: "JaPo__Va" }
	// To_JaPoVa_Kwu_qk IMG TXT EDGE
	, { elm: "img", class: "JaPo__Va_Kwu" }

	// To_TuVa_qk TXT LINK
	, { elm: "span", class: "KeDru_NeVa WaDru_Vu TreHy KeDru_TraGyHu" }

	//--------------------------------------
	// TOOLS
	//--------------------------------------

	// Kru_TraVa_qk TXT BTN
	, { elm: "div", class: "KeDru_NeVa WaDru_Va KruTra KeDru_TraGyHu" }
	// Kru_TraJaPo_qk IMG BTN
	, { elm: "img", class: "JaPo__GyBzDe_Gwa TreHy" }

	// Kru_TiVa_qk TXT ITEM
	, { elm: "div", class: "KeDru_NeVa WaDru_Va KruTra KeDru_TraGyHu" }
	// Kru_TiJaPo_qk IMG ITEM
	, { elm: "img", class: "JaPo__Va_Kwu" }


];

//=====================================
//  OPT END
//=====================================
//==============================================
// LOG BEGIN
//==============================================

//==============================================
// LOGS
// Skipped usual 8 layers for minimal JS
//==============================================
// 'arguments object' is a builtin Array -like object.
// Array.prototype.slice.call(arguments) converts *array-like* 'arguments' to a TRUE array 'ARG_v:
// function LOG(){ let ARG_v = Array.prototype.slice.call(arguments); console.log.apply(console, ARG_v); }


//----------------------------------
const SmaJy_vsg =
//----------------------------------
[
	// LOG ICONS:
	// Sy, Je, Dre, Trx
	'🤖', '✅', '😕','🤯'
	// '⚙️', 'ℹ️', '⚠️', '🚫'
];

//----------------------------------
function SmaTro_vsg( SmaJy_wu, ARG_v )
//----------------------------------
{
	//@@@
	// FILTER by TAG before collapsing ARG into String?
	// if( ARG_v[0] === "[CFG]" ) return;

	//@@@
	// PAD '3' digits
	const Me_vsg = SmaJy_vsg[ SmaJy_wu ] + Ko.SmaFe_wu.toString().padStart( 3, "0" ) + " ➡️ " + ARG_v.join( ' ' );

	// Increment line & wrap as valid entry
	const SmaFe_wuk = (( Ko.SmaFe_wu ) & SmaViKa_wuk );
	++Ko.SmaFe_wu;

	Ko.Sma_vvsg[ SmaFe_wuk ] = Me_vsg;
	return Me_vsg
}

//----------------------------------
// LOG by AUDIENCE
//----------------------------------
function SmaSy(){ let ARG_v = Array.prototype.slice.call(arguments); console.log( SmaTro_vsg( 0, ARG_v ) );}
function SmaJe(){ let ARG_v = Array.prototype.slice.call(arguments); console.log( SmaTro_vsg( 1, ARG_v ) );}
function SmaDre(){ let ARG_v = Array.prototype.slice.call(arguments); console.warn( SmaTro_vsg( 2, ARG_v ) );}
function SmaTrx(){ let ARG_v = Array.prototype.slice.call(arguments); console.error( SmaTro_vsg( 3, ARG_v ) );}

function SmaGwxHu(){ SmaJe( "[" + this.VaDy_vsg + "]----------------------------------" ); }
function SmaGwxDe(){ SmaJe( "[" + this.VaDy_vsg + "]=============================" ); }
function SmaGwxHi(){ SmaJe( "[" + this.VaDy_vsg + "]################################" ); }

//----------------------------------
// OBJ CONSOLE
function SmaDBG()
//----------------------------------
{
	let ARG_v = Array.prototype.slice.call(arguments);
	console.log.apply(console, ARG_v);
}

//----------------------------------
// OBJ LOG
function SmaKzFu( Kz_k )
//----------------------------------
{
	Object.keys( Kz_k ).forEach( _Va => { SmaDBG( _Va ); });
	Object.values( Kz_k ).forEach( _Vu => { SmaDBG( _Vu ); });
}

//==============================================
// REPORT__IF_INVALID
//==============================================
function SmaSy__NxHo_y( Va, Kri_y )
{
	if( !Kri_y )
	{
		SmaSy( Va + " @ " + Kri_y );
		return true;
	}
	return false;
}


//=====================================
// LOG END
//=====================================
//==============================================
// ERR BEGIN
//==============================================

//==============================================
// ERR STRING (FINAL CALL)
//==============================================
function MoDzTrx__KeDru( Trx_vsg )
{
	//@@@
	// CFG
	// If already 'Err' exit
	if( Ko.Trx_vsg ) return;

	Ko.Trx_vsg = Trx_vsg;
	KoDz__YzChy( BriYz.Trx_qk );

	//@@@
	// MSGBOX: not helpful
	// alert( Trx_vsg );

	//@@@
	// LOG
	SmaTrx( "[FAIL] ERR:", Trx_vsg );
	SmaTrx( "[FAIL] STK:", jsStackTrace() );

	//@@@
	// DISPLAY ERR
	KoDz_GyHa();

	//@@@
	// SERV END ALL
	KoDz__Yi();
}


//==============================================
// ERR HANDLE ( GLOBAL TRANSLATION)
//==============================================
function MoDzTrx__Vy( Vy_vsg )
{
	//@@@
	// CFG
	const Trx_vsg = Ko.OPT__KeDru.KiJe[ Vy_vsg ];
	MoDzTrx__KeDru( Trx_vsg );
}

//==============================================
// FAIL__IF_INVALID
//==============================================
function NxHo__MoDzTrx__Vy_y( Vy_vsg, Kri_y )
{
	if( !Kri_y )
	{
		const Trx_vsg = Ko.OPT__KeDru.KiJe[ Vy_vsg ];
		SmaTrx( Trx_vsg + " @ " + Kri_y );
		MoDzTrx__KeDru( Trx_vsg );
		return true;
	}
	return false;
}


//=====================================
// ERR PREBOOT
// Stores String Handle, not actual string;
//=====================================
function MoDzTrx__PREBOOT_ChyVy( TrxVy_vsg )
{
	Ko.Trx_vsg =TrxVy_vsg;
}

async function MoDzTrx__PREBOOT_Tra()
{
	//&&&
	// IF BOOT FAILED EARLIER
	// THEN wait till we're here
	// to LOAD LANG file
	const KeDru_wuk = Hre1_Dru__KeDru_VaFyVx_wu( navigator.language );
	await Hre1_Dru__KeDru_Cha( KeDru_wuk );

	// to SHOW ERR screen
	// GOAL: Not Missed or Ignored.
	// REQ: save existing error as property-name, load lang string & clear error-string
	const TrxVy_vsg = Ko.Trx_vsg;
	Ko.Trx_vsg = null;
	MoDzTrx__Vy( TrxVy_vsg );
}

//==============================================
// JS_ERR
//==============================================
function MoDzTrx__Je( e )
{
	let Trx_vsg;

	// LOG ERR EVT
	if( e.type === "error" )
	{
		Trx_vsg = e.message + " SRC: " + e.filename + ":" + e.lineno + ":" + e.colno;
		SmaDBG( "[FAIL] HTML:", e );
	}
	else if( e.type === "unhandledrejection" )
	{
		Trx_vsg = e.reason.message;

		const STK_vsg = e.reason.stack;
		if( STK_vsg )
		{
			// REGEX to match https://.*
			const ToKz_vsg = STK_vsg.match(/https?:\/\/[^\s\)]+/)[0];
			if( ToKz_vsg )
			{
				SmaTrx( "[FAIL] URL:", ToKz_vsg );
				// Must use 2nd STRING in Split Array
				const So_vsg = ToKz_vsg.split(/\S*Mx00__SuSmi_WEBPG/)[ 1 ];
				SmaTrx( "[FAIL] REF:", So_vsg );
			}
		}
		SmaDBG( "[FAIL] PROMISE:", e );
	}
	else
	{
		Trx_vsg = ( e.toString() );
	}

	//@@@
	// PRESENT ERR & STOP HANDLER
	MoDzTrx__KeDru( Trx_vsg );
	e.preventDefault();
}

//=====================================
// ERR END
//=====================================
//=====================================
// CUL BEGIN
//=====================================

//=====================================
// CULTURE MATCH LANG STRING to IDs
//=====================================
function Hre1_Dru__KeDru_VaFyVx_wu( KeKuMi_vbg )
{
	//-------------------------------------------------
	// LANG/LOCALE
	//-------------------------------------------------
	let Fe__KeDru_vsg = 'en';
	let Fe__KeVa_vsg = "";

	//@@@
	// LANG BASICS
	Fe__KeKu_vbg = KeKuMi_vbg;
	Fe__KeDru_vsg = KeKuMi_vbg.split( "-" )[ 0 ]
	Fe__KeVa_vsg = KeKuMi_vbg.split( "-" )[ 1 ]

	//&&&
	// CHECK LOCALE
	let KeKu_wu = Hre1_Dru__Gra_v.findIndex( ( Ti_l ) => ( Ti_l.Vy === Fe__KeKu_vbg ) );
	// IF NOT LOCALE
	// CHECK just LANG
	if( !KeKu_wu )
	{
		KeKu_wu = Hre1_Dru__Gra_v.findIndex( ( Ti_l ) => ( Ti_l.Vy === Fe__KeDru_vsg ) );
	}

	//&&&
	if( KeKu_wu <= 0 )
	{
		KeKu_wu = 0;
	}

	//!!!
	// LOG MATCH ( used when generating 'Default' users )
	SmaJe( "[CUL] Src: " + Hre1_Dru__Gra_v[ KeKu_wu ].ToKz + " Locale: " + Fe__KeKu_vbg + " Lang: " + Fe__KeDru_vsg + " Country: " + ( Fe__KeVa_vsg ? Fe__KeVa_vsg : "Global" ) );

	return KeKu_wu;
}


//=====================================
// CULTURE LOAD LANG
//=====================================
async function Hre1_Dru__KeDru_Cha( KeDru_wuk )
{
	//@@@
	// LANG DETAILS
	const Dru_l = Hre1_Dru__Gra_v[ KeDru_wuk ];

	//@@@
	// LOAD LANG_FILE
	const KeKu__ToKz_vksg = Dru_l.ToKz;
	const SiKeDru__ToKz_vksg = BriDz__Mx_KuTu_vsg + "Mx01__SuKz_MEDIA/SuKz00_KeDru__TXT/" + window.TzVa +"/" + window.TzVa + ".";

	// SmaDre( "[CUL]", KeDru_wuk, SiKeDru__ToKz_vksg + KeKu__ToKz_vksg + ".js" );

	try{ await import( SiKeDru__ToKz_vksg + KeKu__ToKz_vksg + ".js" ); }
	catch( e )
	{
		SmaTrx( "[CUL] TzKwi." + KeKu__ToKz_vksg + ".js has SYNTAX ERRORS or NOT AVAIL!!!", e );

		// TRY 'en' INSTEAD
		if( KeKu__ToKz_vksg !== "en" )
		{
			SmaDre( "[CUL] Cannot load <", KeKu__ToKz_vksg, "> Langugage File so will use U.N. English" );
			try{ await import( SiKeDru__ToKz_vksg + "en.js" ); }
			catch( e ){ SmaTrx( "[CUL] TzKwi.en.js ALSAO has SYNTAX ERRORS or NOT AVAIL!!!", e ); }
		}
	}// SYNTAX FAILURE

	//@@@
	// DEV_CHECK
	// (Only in Development as NO ERRORS have TXT w/o LANG File)
	NxHo__MoDzTrx__Vy_y( "TrxJy04__KeDruGraHo_vsg", Ko.OPT__KeDru );
	if( !Ko.OPT__KeDru ) return;


	//@@@
	// TEXT_DIR
	const KeDru_RTL_v = [ "ar", "he", "fa" ];
	document.body.dir = ( KeDru_RTL_v.includes( Dru_l.ToKz ) )? "rtl" : "ltr";


	//@@@
	// UPDATE LABELS
	// Need Here! for 'Error Page', prior to most GUI Elms created via OPT
	Object.entries( Ko.OPT__KeDru.HriNe ).forEach( function( [ Vy_vsg, Vu_k ] )
	{
		let Smx_vsg = "";

		if( Array.isArray( Vu_k ) )
		{
			// SmaJe( `[CUL] *OPT ARRAY*: ${Vy_vsg}`, Vu_k );
			Vu_k.forEach( function( Ti_k, Vx_wu )
			{
				// Smx_vsg += "\n" + ( 1 + Vx_wu ) +") " + Ti_k;
				Smx_vsg += "\n" + Ti_k;
			});
		}
		else if( typeof Vu_k === "string" )
		{
			Smx_vsg = Vu_k;

			// SmaJe( `[CUL] *LABEL MATCH*: ${Vy_vsg}`, Vu_k );

			//$$$
			// REPORT WASTED TXT
			//if( !document.getElementById( Vy_vsg ))	{ SmaTrx( "[CUL] *-------OPT HriNe UNUSED-------*:", Vy_vsg ); }
		}
		else
		{
			 SmaTrx( "[CUL] *--------- OPT ENTRY FAIL-------*:", Vy_vsg );
		}

		//&&&
		// UPDATE GUI_ELM DISPLAY NAME
		HriNeDe__ChyVaDe( Vy_vsg, Smx_vsg );
	});
}


//=====================================
// CULTURE LOAD & UPDATE LANG
//=====================================
async function Hre1_Dru__KeDru_Cha_ChyYe( KeDru_wuk )
{
	//---------------
	// UPDATE LANG FILE & FIXED TEXT in UI
	//---------------
	// ONLY Changes on LANG
	await Hre1_Dru__KeDru_Cha( KeDru_wuk );

	//---------------
	// UPDATE CONTAINERS & FIXED TEXT in UI
	//---------------
	// ONLY Changes on LANG
	Object.entries( Ko.OPT__KeDru.TaGwx ).forEach( function( [ Ta_vsg, Ta_l ] )
	{
		const Do_l = document.getElementById( Ta_vsg );
		if( Do_l )
		{
			Ta_l.Ti_v.forEach( function( Ti_k, Vx_wu )
			{
				const Kz_l = document.createElement( "span" );

				Kz_l.className = "HriNe_Ta__Va HriNe_Ta__VaVo";

				//Kz_l.onclick = new Function( `function() { ${Ta_l.Tra} }`;
				// Kz_l.onclick = new Function( Vx_wu, Ta_l.Tra );
				Kz_l.id = Vx_wu.toString();
				Kz_l.onclick = new Function( "e", Ta_l.Tra + "( " + Vx_wu + " );" );


				Kz_l.innerText = Ti_k;

				Do_l.appendChild( Kz_l );
			});
		}
	});



	//---------------
	// SPECIAL CONTAINERS
	//---------------

	//@@@
	// WHO

	//@@@
	// SECURITY

	//@@@
	// LANG

	//@@@
	// COUNTRY

	//@@@
	// WHERE


	//---------------
	// SERIALIZE
	//---------------

	//@@@
	// SAVE CFG *IF* Different!
	const KwiYz_k = Ko.TaKeDy_l.KwiYz_v[ Ko.TaKeDy_l.KeDy_wu ];
	if( KwiYz_k.KeDru_wu !== KeDru_wuk )
	{
		KwiYz_k.KeDru_wu = KeDru_wuk;
		Hrz4_Bu__TaKeDy__ChyGry();
	}

	//@@@
	// GUI_SYNC ALL
	Hrz4_Bu__HriNe__ChyKwiYz();
}

//=====================================
//  CUL END
//=====================================
//==============================================
// MODULE BEGIN
//==============================================

//==============================================
// ONE APP only
// PREVENT MULTI_TAB
//==============================================
function MoDz__DzStxGru()
{
	if( !window.BroadcastChannel )
	{
		SmaJe( "[LAUNCH] !!! Unknown if Duplicate Tab." );
		return;
	}

	// STORE TIME by SESSION
	Ko.MoDzYa__GiDri_duk = (new Date()).getTime();
	sessionStorage.setItem( 'KoGi', Ko.MoDzYa__GiDri_duk );

	// TAB-CONNECTIONS = Broadcast Type
	let BCHN_l = new BroadcastChannel( "MoDz__DzStxGru" );

	//@@@
	//SEND MSG
	// Compare Time
	BCHN_l.postMessage( "MxVy:KoGi" );

	//@@@
	// RECV MSG
	BCHN_l.onmessage = function( e )
	{
		// Split by Colon
		let PKT_k = e.data.split(':');

		if( PKT_k[0] == "KrzVy" )
		{
			// If Newer; Error on Self
			if( Ko.MoDzYa__GiDri_duk > parseInt( PKT_k[1] ))
			{
				SmaTrx( "[LAUNCH] !!! FAIL Duplicate Tab" );
				BCHN_l = null;

				// INDIRECT ERROR: Set 'STRING'
				MoDzTrx__PREBOOT_ChyVy( "TrxJy02__MoDzStxGru_vsg" );
			}
			else
			{
				SmaTrx( "[LAUNCH] First Tab" );
			}
		}
		else if( PKT_k[0] == "MxVy" )
		{
			// SmaSy('Send Time to Test if Duplicate Tab.');
			BCHN_l.postMessage( "KrzVy:" + Ko.MoDzYa__GiDri_duk );
		}
	}
}


//==============================================
// BOOTUP
//
// !!!
// NOTE: Errors must be saved to show later
// !!!
//
//==============================================
function MoDz__BOOT()
{
	//----------------------------------
	// SECURITY
	//----------------------------------
	KoDz__YzChy( BriYz.HxHo_qk );

	//@@@
	// ERR HANDLERS
	window.addEventListener( "error", MoDzTrx__Je );
	window.addEventListener( "unhandledrejection", MoDzTrx__Je );


	//@@@
	// CORS must RUN FIRST
	// Can CFG as below:
	// window.coi = { coepCredentialless: () => true };
	SmaSy( "[LAUNCH] Web_Security via CORS: " + (window.crossOriginIsolated ?  "✅😀" : "❌😞" ) + " RES:" + ( window.credentialless ? "CredentialLESS" : "RequireCORP" ) );

	if( !window.crossOriginIsolated )
	{
		// MSG should display @ DOM
		// SmaTrx( "[LAUNCH] No CORS Security" );
		MoDzTrx__PREBOOT_ChyVy( "TrxJy00__HrxCheHo__CORS_vsg" );
	}


	//----------------------------------
	// WASM64 preferred
	//----------------------------------
	try
	{
		//$$$
		// TEST PURPOSES?
		// Ko.WASM64_yk = false;
		Ko.WASM64_yk = WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,5,3,1,4,1]));
	}
	catch(e)
	{
		// WebAssembly is not supported at all
		// SmaTrx( "[LAUNCH] No Web Assembly:", e );
		MoDzTrx__PREBOOT_ChyVy( "TrxJy01__HrzMoHo__WASM_vsg" );
	}

	Ko.KaBx__TiFo_wuk = navigator.hardwareConcurrency;
	SmaSy( "[LAUNCH] Web_Assembly: " + ( Ko.WASM64_yk ? "64" : "32" ) + "bit:" + ( Ko.WASM64_yk ? "✅😀" : "🆗😐") + " CPUs:", Ko.KaBx__TiFo_wuk );

	//----------------------------------
	// DOM STARTUP
	//----------------------------------
	document.addEventListener( 'readystatechange', function()
	{
		// if(document.readyState === 'interactive')
		// {
		// 	SmaSy( "[LAUNCH] WebPage_DOM Interactive" );
		// }

		if(document.readyState === 'complete')
		{
			SmaSy( "[LAUNCH] Web_DOM Fully_Loaded" );
		}
	});

	//----------------------------------
	// RESIZE
	//----------------------------------
	window.addEventListener( "resize", KoDz_GyHa );

	//----------------------------------
	// ENSURE ONLY ONE INSTANCE!
	//----------------------------------
	MoDz__DzStxGru();


	//----------------------------------
	// LOAD ENGINE WASM
	//----------------------------------
	const BriDz_Fz_js = document.createElement("script");
	BriDz_Fz_js.src = "Mx00__SuSmi_WEBPG/SuSmi03__WASM/KoKri__BriDz" + ( Ko.WASM64_yk ? 64:32 ) + ".js";
	document.head.appendChild(BriDz_Fz_js);
}

//==============================================
// MODULE INTERFACE for EMSCRIPTEN ENGINE
//==============================================
// MUST BE "var"
var Module =
{
	// ERR STATUS
	Trx_vsg: null,
	// REQ: Input
	canvas: document.getElementById('MxPo_Bri'),
	// REQ: load
	totalDependencies: 0,

	//@@@
	// EMCC NOTIFY
	// Define how notification messages from Emscripten are displayed via Module.print attribute.
	'print': function ( Sma_vsg ) { SmaJe( "[MSG]" + Sma_vsg ); },
	'printErr': function ( Sma_vsg ) { SmaTrx( "[ERR]" + Sma_vsg ); },
	'onAbort': function ( Sma_vsg ) { MoDzTrx__KeDru( "[ABORT]" + Sma_vsg ); },


	//@@@
	// RUN when WASM_LOADED
	onRuntimeInitialized: function()
	{
		// SmaSy( "WASM module is ready" );
		//!!!
		// CATCH the '3' TrxJy0x__ errors HERE
		if( Ko.Trx_vsg )
		{
			MoDzTrx__PREBOOT_Tra();
			return;
		}
		// BEGIN SYSTEM
		KoDz__YaFz();

		// ERR TEST
		// const ERR_v = new Array(-1);
    },

	//@@@
	// LOAD
	monitorRunDependencies( Fo_k )
	{
		//!!!
		// REQUIRED
		this.totalDependencies = Math.max( this.totalDependencies, Fo_k );
		// NO NEED TO REPORT CURRENTLY ( just 1 goes to 0 )
		// SmaJe( "[LAUNCH]", Fo_k, "Modules Remain of ", this.totalDependencies );
	},

};


//==============================================
// MODULE END
//==============================================
//==============================================
// NODE BEGIN
//==============================================

//=====================================
// OS & CPU
//=====================================
async function Hrz3_By__FyTo()
{
	const NODE_vksg = navigator.userAgent.toUpperCase();
	SmaSy( "[DEVICE] Browser_ID:", NODE_vksg );

	//@@@
	// IN CASE of NO MATCHES?
	if( navigator.userAgentData )
	{
		Ko.Hrz3_By__VaDe_vsg = navigator.userAgentData.platform;
		//MOBILE = navigator.userAgentData.mobile;
		//
		// FAIL on Ko.KaBz__VaDe_vsg as it doesn't match below
		// navigator.userAgentData.getHighEntropyValues( ["architecture", "platformVersion"])
		// .then( ua =>
		// {
		// 	// Ko.KaBz__VaDe_vsg = ua.architecture;
		// 	// VER = ua.platformVersion;
		// } );
	}

	//@@@
	// MATCH OS
	if( NODE_vksg.includes( "LINUX" ) || NODE_vksg.includes( "X11" ) || NODE_vksg.includes( "WAYLAND" ) )
	{
		Ko.Hrz3_By__Gwz_vsg = "LNX";
		Ko.Hrz3_By__VaDe_vsg = "Linux";
	}
	else if( NODE_vksg.includes( "IPAD" ) )
	{
		Ko.Hrz3_By__Gwz_vsg = "IPAD";
		Ko.Hrz3_By__VaDe_vsg = "iPadOS";

		Ko.KaBz__Gwz_vsg = "ARM";
		Ko.KaBz__VaDe_vsg = "ARM64";

		Ko.Hra0_Ko__Jy_q = Hra0_KoJy.KoBeGwa_qk;
	}
	else if( NODE_vksg.includes( "IPHONE" ) )
	{
		Ko.Hrz3_By__Gwz_vsg = "IOS";
		Ko.Hrz3_By__VaDe_vsg = "iOS";

		Ko.KaBz__Gwz_vsg = "ARM";
		Ko.KaBz__VaDe_vsg = "ARM64";

		Ko.Hra0_Ko__Jy_q = Hra0_KoJy.KoBeDru_qk;
	}
	else if( NODE_vksg.includes( "MAC" ) )
	{
		Ko.Hrz3_By__Gwz_vsg = "MAC";
		Ko.Hrz3_By__VaDe_vsg = "Mac";

		Ko.KaBz__Gwz_vsg = "ARM";
		Ko.KaBz__VaDe_vsg = "ARM64";
	}
	else if( NODE_vksg.includes( "WINDOWS" ) )
	{
		Ko.Hrz3_By__Gwz_vsg = "WIN";
		Ko.Hrz3_By__VaDe_vsg = "Windows";
	}

	//&&&
	// MOST ANDROID shows LINUX in platform so MUST COME AFTER!
	if( NODE_vksg.includes( "ANDROID" ) )
	{
		Ko.Hrz3_By__Gwz_vsg = "DRD";
		Ko.Hrz3_By__VaDe_vsg = "Android";

		// Default CPU in case not listed
		Ko.KaBz__Gwz_vsg = "ARM";
		Ko.KaBz__VaDe_vsg = "ARM64";

		// Mobile
		Ko.Hra0_Ko__Jy_q = true;
		Ko.Hra0_Ko__Jy_q = Hra0_KoJy.KoBeDru_qk;
	}


	//@@@
	// CPU
	if( NODE_vksg.includes( "X86_64" ) || NODE_vksg.includes( "X64" ) )
	{
		Ko.KaBz__Gwz_vsg = "INTEL";
		Ko.KaBz__VaDe_vsg = "X64";
	}
	else if( NODE_vksg.includes( "ARM" ) || NODE_vksg.includes( "AARCH" ) )
	{
		Ko.KaBz__Gwz_vsg = "ARM";
		Ko.KaBz__VaDe_vsg = "ARM64";
	}
	else if( NODE_vksg.includes( "RISCV" ) || NODE_vksg.includes( "RISC-V" ) )
	{
		Ko.KaBz__Gwz_vsg = "RISCV";
		Ko.KaBz__VaDe_vsg = "RISC-V 64";
	}

}

//=====================================
// BROWSER VERSION (Browser & App )
//=====================================
async function Hrz4_Bu__FyTo()
{
	//@@@
	// SEARCH

	// USR AGENT
	const HrzByHx_vsg = navigator.userAgent;
	SmaSy( "[CFG] HrzByHx:", HrzByHx_vsg, navigator.appName, navigator.appVersion );

	// /i IGNORE CASE
	// Matches "Name/Ver", "Name", "Ver" for 3 strings in 'match-Array' result
	let Ni_vsg = HrzByHx_vsg.match(/(chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+\.\d+)/i) || [];
	// SmaSy( Ni_vsg );

	// CHILD of CHROME
	let NiNo_vsg = HrzByHx_vsg.match(/(OPR|Edg|OculusBrowser|SamsungBrowser(?=\/))\/?\s*(\d+\.\d+)/i) || [];

	// CLONE name & version#
	if( NiNo_vsg[2] ){ Ni_vsg = NiNo_vsg; }

	// ELSE UNKNOWN
	Ni_vsg = Ni_vsg[2] ? [ Ni_vsg[1], Ni_vsg[2] ] : [ navigator.appName, navigator.appVersion, '-?' ];

	//@@@
	// MATCH BROWSER TYPE
	// DETECT
	if( (navigator.brave && await navigator.brave.isBrave() || false) ){ Ni_vsg[ 0 ] = "Brave"; }
	// REPLACE
	Ni_vsg[ 0 ] = Ni_vsg[ 0 ].replace( /edg/i, "Edge" );
	Ni_vsg[ 0 ] = Ni_vsg[ 0 ].replace( /OculusBrowser/i, "Meta" );
	Ni_vsg[ 0 ] = Ni_vsg[ 0 ].replace( /opr/i, "Opera" );
	Ni_vsg[ 0 ] = Ni_vsg[ 0 ].replace( /SamsungBrowser/i, "Samsung" );
	Ni_vsg[ 0 ] = Ni_vsg[ 0 ].replace( /Vivaldi/i, "Vivaldi" );

	// ICON
	const Hrz4_Bu__FeDy_vsg = Ni_vsg[ 0 ].toUpperCase();
	const Hrz4_Bu__TaDy_vvsg = [ "BRAVE" , "CHROME" , "EDGE" , "FIREFOX" , "META", "OPERA", "SAFARI", "SAMSUNG", "VIVALDI"	];
	if( Hrz4_Bu__TaDy_vvsg.includes( Hrz4_Bu__FeDy_vsg ) )
	{
		Ko.Hrz4_Bu__Gwz_vsg = Hrz4_Bu__FeDy_vsg;
	}

	// STORE
	Ko.Hrz4_Bu__VaDe_vsg = Ni_vsg[ 0 ];
	Ko.Hrz4_Bu__Da_wfk = parseFloat( Ni_vsg[ 1 ] );
	if( isNaN( Ko.Hrz4_Bu__Da_wfk ) ){ Ko.Hrz4_Bu__Da_wfk = 0.0; }

	SmaJe( "[DEVICE] HrzBy_VaDa", Ko.Hrz4_Bu__VaDe_vsg, " v", Ko.Hrz4_Bu__Da_wfk );

	// NOT WELL SUPPORTED 2026
	// if( navigator.userAgentData && navigator.userAgentData.brands )
	// { SmaJe(  "[DEVICE] BRAND:", navigator.userAgentData.brands ); }
}

//=====================================
// MACHINE TYPE
//=====================================
async function Hra0_Ko__FyTo()
{
	//@@@
	// META is AR currently
	if( Ko.Hrz4_Bu__VaDe_vsg === "Meta" )
	{ Ko.Hra0_Ko__Jy_q = Hra0_KoJy.KoBeMz_qk; }

	//@@@
	// API
	// SKIP as most phones report AR
	// if( navigator.xr )
	// {
	// 	const KriYz_k =
	// 	{
	// 		requiredFeatures: [ "local" ]
	// 	};
	// 	const AR_yk = await navigator.xr.isSessionSupported( "immersive-ar", KriYz_k );
	// 	const VR_yk = await navigator.xr.isSessionSupported( "immersive-vr", KriYz_k );

	// 	if( AR_yk ){ Ko.Hra0_Ko__Jy_q = Hra0_KoJy.KoBeMz_qk; }
	// 	else if( VR_yk ){ Ko.Hra0_Ko__Jy_q = Hra0_KoJy.KoBeMz_qk; }
	// }

	//@@@
	// if 'PHONE' check if TABLET or actually PHONE using WIDTH
	if( Ko.Hra0_Ko__Jy_q ===Hra0_KoJy.KoBeDru_qk )
	{
		// TABLET
		if( window.matchMedia( "(min-width: 768px)" ).matches )
		{ Ko.Hra0_Ko__Jy_q = Hra0_KoJy.KoBeGwa_qk; }
	}
}

//=====================================
// EXE EVAL
//=====================================
async function KoDz__SyHa()
{
	await Hrz3_By__FyTo();
	await Hrz4_Bu__FyTo();
	await Hra0_Ko__FyTo();
}

//==============================================
// END
//==============================================
//==============================================
// CFG
//------------------------------------
// KwiYz__ChyDe: CFG WRITE DEFAULT
// HriNe__ChyKwiYz: GUI WRITE CFG
// KwiYz__ChyHriNe: CFG WRITE GUI
//==============================================

//==============================================
// CFG_WRITE_DEFAULT for ONE USER
//==============================================
function Hrz4_Bu__KwiYz__ChyDe( Va_vksg, HriNe_Ta__wuk, KeDru_wuk )
{
	const KwiYz_k = Ko.TaKeDy_l.KwiYz_v[ Ko.TaKeDy_l.KeDy_wu ];

	//---------------------------------
	// Ne00__WHO
	//---------------------------------
	if( Va_vksg  !== null )
		{ KwiYz_k.KeDy_vsg = Va_vksg; }

	if( KeDru_wuk === -1 )
	{
		KwiYz_k.KeDru_wu = Hre1_Dru__KeDru_VaFyVx_wu( navigator.language );
	}
	else if( KeDru_wuk !== null )
	{
		KwiYz_k.KeDru_wu = KeDru_wuk;
	}

	if( HriNe_Ta__wuk !== null )
	{ KwiYz_k.HriNe_Ta__wu = HriNe_Ta__wuk; }

	KwiYz_k.TzKe__NzChe_y = false;


	//---------------------------------
	// Ne01__NODE
	//---------------------------------


	//---------------------------------
	// Ne02__AUDIO
	//---------------------------------

	// MUTE
	KwiYz_k.TzHru__NzMx__PeHo_y = true;
	// VOLUME
	KwiYz_k.TzHru__NzMx__PeVu_sa = 1.0;

	//!!!
	// METHOD
	// MOBILE
	if( Ko.Hra0_Ko__Jy_q < Hra0_KoJy.KoBa_qk )
	{
		// KwiYz_k.Ne02_Hru0__
	}
	// STATION
	else
	{
	}


	//---------------------------------
	// Ne03__VISUAL
	//---------------------------------

	KwiYz_k.TzHry__NzSy__HriKe_y = false;


	//!!!
	// METHOD
	// MOBILE
	if( Ko.Hra0_Ko__Jy_q < Hra0_KoJy.KoBa_qk )
	{
		KwiYz_k.TzHry__NzSy__SmzYz_q = 0;
		KwiYz_k.TzHry__NzSy__GyBraHi_bu = 0;
	}
	// STATION
	else
	{
		KwiYz_k.TzHry__NzSy__SmzYz_q = 1;
		KwiYz_k.TzHry__NzSy__GyBraHi_bu = 1;
		// "TzHry__NzSy__SmzYz_vsg" Method
		// "TzHry__NzSy__TyGy_vsg" Detail
	}


	//@@@
	// NODE
	KwiYz_k.TzTru__NzCha__KoDz_YoHo_y = true;
	//KwiYz_k.TzTru__NzCha__KoDz_YoHo_y = false;


}


//==============================================
// GUI_WRITE CFG
//==============================================
function Hrz4_Bu__HriNe__ChyKwiYz()
{
	SmaJe( "[CFG] GUI_SYNC" );
	const KwiYz_k = Ko.TaKeDy_l.KwiYz_v[ Ko.TaKeDy_l.KeDy_wu ];

	//---------------------------------
	// SUBMIT BTN
	//---------------------------------

	HriNeDe__ChyJaPoKeDy( "BriDz__KeDy", "Di7__Mx.jpg" );
	HriNeDe__ChyJaPoJoDi( "BriDz__JoDi", "JoDi07" );
	HriNeDe__ChyJaPoKuPy( "BriDz__KuPy", "us" );


	//---------------------------------
	// Ne00__WHO
	//---------------------------------

// HAINT
/*


	const Dru_l = Hre1_Dru__Gra_v[ KwiYz_k.KeDru_wuk ];
	HriNeDe__ChyVaDe( "TzKu__NzTrz__NiKeDru_q", Dru_l.KuGwz );

	const TzKu__NzKeDru__Ta_l = document.getElementById( 'TzKu__NzKeDru__Ta_l' );
	SmaJe( "CHG!", TzKu__NzKeDru__Ta_l );


	//@@@
	// LANG LIST SELECTION
	document.getElementById( "TzKu__NzKeDru__Ta_l" ).selectedIndex = KwiYz_k.KeDru_wu;

	//@@@
	// SET LANG_ICON
	document.getElementById( "TzKu__NzTrz__NiKeDru_q" ).innerText = Hre1_Dru__Gra_v[ KwiYz_k.KeDru_wu ].KuGwz;


	//@@@
	// ADD USR ENTRIES
	{
		const TaKeDy_l = document.getElementById( 'TzKe__NzDz__Ta_l' );
		HriNeDe__Ta_ChyStz( TaKeDy_l );

		const SaNo__TaKeDy_l = Ko.TaKeDy_l.KwiYz_v;
		SaNo__TaKeDy_l.forEach( function( Ti_k, Vx_wu )
		{
			// SmaSy( "------ Vx_wu:", Vx_wu, Ti_k.KeDy_vsg );

			//&&&
			// ADD BTN
			const Kz_l = document.createElement( 'option' );
			Kz_l.className = 'HriNeTi WaDru_Vu';
			Kz_l.innerText = `${KoOPT__SaPy__ToKz_v[ Ti_k.HriNe_Ta__wu ]} ${Ti_k.KeDy_vsg }` + ( Vx_wu & 1 ? "🔒":"🔓" );
			Kz_l.value = Vx_wu;
			TaKeDy_l.appendChild( Kz_l );
		});

		TaKeDy_l.selectedIndex = Ko.TaKeDy_l.KeDy_wu;
	}

	//@@@
	// USER NAME
	document.getElementById( "TzKe__NzDz_vsg" ).value = "NOMBraaaaay";

	//@@@
	// SET PROFILE_ICON
	document.getElementById( "Ne01_KeDy03__SaJaPo_q" ).innerText = KoOPT__SaPy__ToKz_v[ KwiYz_k.HriNe_Ta__wu ];

	//@@@
	// USE_SECURITY
	const TraChe_yk = KwiYz_k.TzKe__NzChe_y;
	HriNeDe__ChyHyHo( "TzKe__NzChe_y", TraChe_yk );

	//&&&
	// AUTHORIZED
	// EVAL or SAVE ANSWER
	const CheRi_y = false;
	// if Use_Security & Guard_Cool NOT, then Eval_Answer & Disable Others
	const SmxHa_yk = TraChe_yk && !CheRi_y;
	const SmxFo_wu = 0;


	//$$$
	// REPORT
	SmaSy( "[CFG] TraChe:", TraChe_yk, " SmxFo:", SmxFo_wu, " SmxHa:", SmxHa_yk );


	//@@@
	// USER LOCK
	HriNeDe__ChyHryVoHu( "BriDz01__TraKwi_vsg", SmxHa_yk );

	// SECURITY AREA
	HriNeDe__ChyHry( "Ne01_KeDy06__CheHaKri", SmxHa_yk );


	//&&&
	// Security Status & Buttons
	HriNeDe__ChyKuHi( "TzKe__NzChe__Krz", SmxHa_yk );
	HriNeDe__ChyKuHi( "TzKe__NzChe__Chy", !SmxHa_yk );

	// 3 SCENARIOS ( Need Answers or Ready )
	// ✖️Incorrect Answer
	HriNeDe__ChyKuHu( "TzKe__NzChe__Trx", SmxHa_yk && ( SmxFo_wu !== 0 ) );
	// Requires Answer
	HriNeDe__ChyKuHu( "TzKe__NzChe__TraHo", SmxHa_yk && ( SmxFo_wu === 0 ) );
	// User Ready
	HriNeDe__ChyKuHu( "TzKe__NzChe__TraHy", !SmxHa_yk );


	//&&&
	// PANELS
	HriNeDe__ChyHryVoHu( "Tz02_vsg", SmxHa_yk );
	HriNeDe__ChyHryVoHu( "Tz03_vsg", SmxHa_yk );
	HriNeDe__ChyHryVoHu( "Tz05_vsg", SmxHa_yk );
	HriNeDe__ChyHryVoHu( "Tz04_vsg", SmxHa_yk );
	HriNeDe__ChyHryVoHu( "Tz06_vsg", SmxHa_yk );

	//&&&
	// Name
	HriNeDe__ChyTraHo( "TzKe__NzDz__VaTre_Sma_vsg", SmxHa_yk );

	//&&&
	// Avatar
	HriNeDe__ChyHryVoHu( "Ne01_KeDy03__SaJaPo__TaJaPo_l", SmxHa_yk );

	//&&&
	// Question-Lock
	HriNeDe__ChyTraHo( "TzKe__NzChe__MaKz_vsg", SmxHa_yk );
	HriNeDe__ChyTraHo( "TzKe__NzChe__MaKz__Sma_vsg", SmxHa_yk );

	// Answer-Key
	HriNeDe__ChyTraHo( "TzKe__NzChe__SmzKz_vsg", SmxHa_yk );
	// SmaSy( "ANSWER: ", document.getElementById("TzKe__NzChe__SmzKz__Sma_vsg").value );



	//---------------------------------
	// Ne01__NODE
	//---------------------------------
	//@@@
	// TzTru__NzBri__BruYoHo_vsg
	document.getElementById( "TzTru__NzCha__HraBru_Tra_y" ).value = KwiYz_k.TzTru__NzCha__HraBru_Tra_y;
	// TzTru__NzBri__SpeSz_vsg
	document.getElementById( "TzTru__NzCha__SpeVu_y" ).value = KwiYz_k.TzTru__NzCha__SpeVu_y;
	// TzTru__NzDrx__MzKu_vsg
	document.getElementById( "TzTru__NzDrx__MzKu_y" ).value = KwiYz_k.TzTru__NzDrx__MzKu_y;
	// TzTru__NzCha__KoDz_YoHo_y
	document.getElementById( "TzTru__NzCha__KoDz_YoHo_y" ).value = KwiYz_k.TzTru__NzCha__KoDz_YoHo_y;


	//---------------------------------
	// Ne02__AUDIO
	//---------------------------------
	//@@@
	// TzHru__NzMx__PeHo_y
	document.getElementById( "TzHru__NzMx__PeHo_y" ).value = KwiYz_k.TzHru__NzMx__PeHo_y;
	// TzHru__NzMx__PeVo_ba
	document.getElementById( "TzHru__NzMx__PeVo_ba" ).value = KwiYz_k.TzHru__NzMx__PeVo_ba;
	// , "TzHru__NzMz__PeVo_vsg": "Mic"
	// , "TzTru__NzBri__HruYoHo_vsg": "♾️Always Audible"
	// , "TzHru__NzSy__SmzYz_vsg": "📊Method"
	// , "TzHru__NzSy__GyBraHi_vsg": "📈Quality"

	//---------------------------------
	// Ne03__VISUAL
	//---------------------------------

	//@@@
	// , "TzHry__NzSy__KeDruGy_vsg": "Legible Size"
	// , "TzHry__NzSy__MzPo_vsg": "Camera"
	document.getElementById( "TzHry__NzSy__HriKe_y" ).checked = KwiYz_k.TzHry__NzSy__HriKe_y;
	// , "TzHry__NzSy__MxPoGyHi_vsg": "Fullscreen"
	// , "TzHry__NzSy__MxPoGry_vsg": "All Screens"
	// , "TzHry__NzSy__PoGy_vsg": "HDR"
	// , "TzHry__NzSy__SmzYz_vsg": "Method"
	// , "TzHry__NzSy__GyBraHi_vsg": "Quality"
	// , "TzHry__NzSy__TyGy_vsg": "Detail"


	document.getElementById( "TzHry__NzSy__HriKe_y" ).checked = KwiYz_k.TzHry__NzSy__HriKe_y;
*/

}

//==============================================
// SYS_UPDATE as CFG_WRITE
//==============================================
function Hrz4_Bu__KwiYz__ChyHriNe()
{
	SmaSy( "[CFG] SYS_UPDATE" );
	const KwiYz_k = Ko.TaKeDy_l.KwiYz_v[ Ko.TaKeDy_l.KeDy_wu ];

	// HAINT
	/*

	//---------------------------------
	// Ne01__WHO
	//---------------------------------


	// NAME
	// KwiYz_k.KeDy_vsg = STRING.value;


	//!!!
	// PROFILE
	// Only changes via EVT

	//&&&
	// USE SECURITY
	const Fi__TraChe_yk = KwiYz_k.TzKe__NzChe_y;

	KwiYz_k.TzKe__NzChe_y = document.getElementById( "TzKe__NzChe_y" ).checked;
	if( Fi__TraChe_yk != KwiYz_k.TzKe__NzChe_y )
	{
		SmaJe( "SECURITY CHANGED to ", KwiYz_k.TzKe__NzChe_y );
		// Reload
		Hrz4_Bu__HriNe__ChyKwiYz();
	}

	//---------------------------------
	// Ne01__NODE
	//---------------------------------
	KwiYz_k.TzTru__NzCha__KoDz_YoHo_y = document.getElementById( "TzTru__NzCha__KoDz_YoHo_y" ).value;


	//---------------------------------
	// Ne02__AUDIO
	//---------------------------------
	KwiYz_k.TzHru__NzMx__PeHo_y = document.getElementById( "TzHru__NzMx__PeHo_y" ).value;
	KwiYz_k.TzHru__NzMx__PeVo_ba = document.getElementById( "TzHru__NzMx__PeVo_ba" ).value;

	//document.getElementById( "TzHru__NzSmzYz_Ta_l" ).selectedIndex = KwiYz_k.KeDru_wu;

	//---------------------------------
	// Ne03__VISUAL
	//---------------------------------

	KwiYz_k.TzHry__NzSy__HriKe_y = false; // document.getElementById( "TzHry__NzSy__HriKe_y" ).value;

	//document.getElementById( "TzHry__NzSy__Ta_l" ).selectedIndex = KwiYz_k.KeDru_wu;

*/

	//@@@
	// SAVE
	Hrz4_Bu__TaKeDy__ChyGry();
}

//-------------------------------------------------
// USR_PROFILE__EDIT
//-------------------------------------------------
function Hrz4_Bu__KwiYz__SaPy_ChyYe( e )
{
	//@@@
	// SPECIAL UPDATE ( based on CLICK, no 'select' to read )
	const KwiYz_k = Ko.TaKeDy_l.KwiYz_v[ Ko.TaKeDy_l.KeDy_wu ];
	KwiYz_k.HriNe_Ta__wu = e;

	//@@@
	// SAVE CFG
	Hrz4_Bu__TaKeDy__ChyGry();

	//@@@
	// GUI_SYNC
	Hrz4_Bu__HriNe__ChyKwiYz();
}


//=====================================
// END
//=====================================
//=====================================
// USR BEGIN
//=====================================

//-------------------------------------------------
// SECURE_COMPARE
//-------------------------------------------------
function Hrz4_Bu__Che00_Krz__Tra()
{
	SmaDre( "[ROST] SECURE COMPARE" );

}


//-------------------------------------------------
// SECURE_SAVE
//-------------------------------------------------
function Hrz4_Bu__Che01_Chy__Tra()
{
	SmaDre( "[ROST] SECURE SAVE" );

}


//=====================================
// USR SINGLE
//=====================================

//-------------------------------------------------
// ERASE USR
//-------------------------------------------------
function TzKe__NzDz__Chi_Tra()
{
	const KeDyChi_wu = Ko.TaKeDy_l.KeDy_wu;

	if( Ko.TaKeDy_l.KeDy_wu > 0 ){ Ko.TaKeDy_l.KeDy_wu--; }

	Ko.TaKeDy_l.KwiYz_v = Ko.TaKeDy_l.KwiYz_v.splice( KeDyChi_wu, 1 );

	// IF NONE LEFT, ADD DEFAULTS
	if( Ko.TaKeDy_l.KwiYz_v.length === 0 )
	{
		Hrz4_Bu__TaKeDy__FyGry();
	}
}

//-------------------------------------------------
// ADD USR
//-------------------------------------------------
function TzKe__NzDz__Cha_Tra( FeCho_yk )
{
	//@@@
	// CREATE
	if( FeCho_yk )
	{
		structuredClone
	}
	//@@@
	// CREATE DEFAULT
	else
	{
		Ko.TaKeDy_l.KwiYz_v.push();
		Hrz4_Bu__KwiYz__ChyDe( "New Name", 0, -1 );
	}

	// CFG_STOR
	Hrz4_Bu__TaKeDy__ChyGry();

	// GUI_SYNC w/ NEW USER NAMES/CFG
	Hrz4_Bu__HriNe__ChyKwiYz();
}

//-------------------------------------------------
// CHG USR
//-------------------------------------------------
function Ne01_KeDy01__NiKeDy__JeChy()
{
	//@@@
	// VALID CHOICE
	const TaKeDy_l = document.getElementById( 'TzKe__NzDz__Ta_l' );
	if( TaKeDy_l.selectedIndex < 0 ) return;


	//@@@
	// SAVE USER
	Ko.TaKeDy_l.KeDy_wu = TaKeDy_l.selectedIndex;

	//@@@
	// CHG to USR LANG
	const KwiYz_k = Ko.TaKeDy_l.KwiYz_v[ Ko.TaKeDy_l.KeDy_wu ];

	Hre1_Dru__KeDru_Cha_ChyYe( KwiYz_k.KeDru_wu );


	//@@@
	// GUI_SYNC w/ USER SETUP
	Hrz4_Bu__HriNe__ChyKwiYz();


	//@@@
	// NAME/PWD
	// Turn SECURITY on/off
	// ( TaKeDy_l.value );
	// Check Answer to QUERY


	SmaJe( "[ROST] Chy", TaKeDy_l.value, TaKeDy_l.selectedIndex );
}


//=====================================
// USR LIST ALL
//=====================================

//-------------------------------------------------
// RE-INSTALL ALL
// WIPES OUT ALL USR LAUNCH CFGs
//-------------------------------------------------
function Hrz4_Bu__TaKeDy_ChxGry()
{
	SmaDre( "[ROST] CLEAR ALL LOCAL STORAGE" );
	localStorage.clear();
	Hrz4_Bu__TaKeDy__ChyTaDe();
}

//-------------------------------------------------
// LOAD USERS DEFAULT GUI
//-------------------------------------------------
function Hrz4_Bu__TaKeDy__ChyTaDe()
{
	// SmaJe( "[ROST] TaKeDy__ChyTaDe" );
	const KeDy__DeFo_wuk = 4;

	// Creates an array of length N, with a unique empty object in each slot
	Ko.TaKeDy_l.KwiYz_v = Array.from( { length: KeDy__DeFo_wuk }, () => ({} ) );

	Ko.TaKeDy_l.Da_wu = KoSy__KwiYz__Da_wuk;

	//@@@
	// GUEST
	Ko.TaKeDy_l.KeDy_wu = 0;
	Hrz4_Bu__KwiYz__ChyDe( "Guest", 0, -1 );


	//@@@
	// GHOST
	Ko.TaKeDy_l.KeDy_wu = 1;
	Hrz4_Bu__KwiYz__ChyDe( "Ghost", 1, -1 );


	//@@@
	// KIOSK
	Ko.TaKeDy_l.KeDy_wu = 2;
	Hrz4_Bu__KwiYz__ChyDe( "Kiosk", 2, -1 );


	//@@@
	// PRO
	Ko.TaKeDy_l.KeDy_wu = 3;
	Hrz4_Bu__KwiYz__ChyDe( "Pro", 3, -1 );


	//@@@
	// INITIAL USER
	Ko.TaKeDy_l.KeDy_wu = 0;

	//@@@
	// GUI_SYNC
	Hrz4_Bu__HriNe__ChyKwiYz();

	// CFG_STORE
	Hrz4_Bu__TaKeDy__ChyGry();
}

//-------------------------------------------------
// LOAD LAUNCH CFG
//-------------------------------------------------
function Hrz4_Bu__TaKeDy__FyGry()
{
	//@@@
	// LOAD
	const KwiYz_vsg = localStorage.getItem( "KwiYz_l" );

	// if( KwiYz_vsg )
	if( false )
	{
		Ko.TaKeDy_l = JSON.parse( KwiYz_vsg );

		// IF NO MEMBERS *OR* WRONG VERSION
		if( ( Ko.TaKeDy_l.KwiYz_v.length === 0 ) || ( Ko.TaKeDy_l.Da_wu !== KoSy__KwiYz__Da_wuk ) )
		{
			// FORCE DEFAULT
			Hrz4_Bu__TaKeDy__ChyTaDe();
		}

		SmaDBG( "[ROST] TaKeDy__FyGry:", Ko.TaKeDy_l );
	}
	else
	// FORCE DEFAULT
	{
		Hrz4_Bu__TaKeDy__ChyTaDe();
	}
}

//-------------------------------------------------
// SAVE LAUNCH CFG
//-------------------------------------------------
function Hrz4_Bu__TaKeDy__ChyGry()
{
	localStorage.setItem( "KwiYz_l", JSON.stringify( Ko.TaKeDy_l ) );
	SmaDBG( "[ROST] KwiYz_Chy:", Ko.TaKeDy_l );
}

//=====================================
// USR END
//=====================================
//==============================================
// THEME BEGIN
// TINTS & LIGHT vs DARK MODEs
//==============================================

//-------------------------------------------------
// SET MODES
//-------------------------------------------------
function HriNeDe__PoSzChy( Sz_q )
{
	const PoSz_k = KoOPT__PoSz_v[ Sz_q ];
	const FzKz_k = document.documentElement;

	for( const Ty_k in PoSz_k )
	{
		FzKz_k.style.setProperty( "--" + Ty_k, PoSz_k[ Ty_k ] );
	};
}

//-------------------------------------------------
// HANDLE CHANGE
//-------------------------------------------------
function HriNeDe__PoSzJe( e )
{
	if( e.matches )
	{
    	SmaSy( "`[THEME] Dark mode" );
		HriNeDe__PoSzChy( 1 );
  	}
	else
	{
    	SmaSy( "[THEME] Light mode" );
		HriNeDe__PoSzChy( 0 );
  	}
}


//-------------------------------------------------
// STARTUP
//-------------------------------------------------
function HriNeDe__PoSzYa()
{
	//@@@
	// GET LIGHT/DARK MODE
	const PoSz_Stz_k = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
	if( !PoSz_Stz_k ) return;

	//@@@
	// USE CFG
	//const KwiYz_k = Ko.TaKeDy_l.KwiYz_v[ Ko.TaKeDy_l.KeDy_wu ];
	// HriNeDe__PoSzChy( KwiYz_k.THEME_TINT_wu );

	// SYS PREF
	// HriNeDe__PoSzJe( PoSz_Stz_k );

	// HACKED to specific mode
	HriNeDe__PoSzChy( 1 );

	//@@@
	// EVT LISTENER
	PoSz_Stz_k.addEventListener('change', HriNeDe__PoSzJe);
}


//=====================================
// THEME END
//=====================================
//==============================================
// GUI BEGIN
// SHOW/HIDE
//==============================================

//@@@
// SHOW/HIDE ELM
function HriNeDe__ChyHry( Vy_vsg, Hry_yk )
{
	const e = document.getElementById( Vy_vsg );
	e.hidden = !Hry_yk;
}

//@@@
// DISPLAY_FLEX ELM
function HriNeDe__ChyKuHu( Vy_vsg, Ku_yk )
{
	const e = document.getElementById( Vy_vsg );
	e.style.display = Ku_yk ? "inline-flex" : "none";
}
//&&&
// TOGGLE DISPLAY_FLEX
function HriNeDe__ChyKuHu_Dry( Vy_vsg )
{
	const e = document.getElementById( Vy_vsg );
	e.style.display = ( e.style.display === "none") ? "inline-flex" : "none";
}

//@@@
// DISPLAY_BLOCK ELM
function HriNeDe__ChyKuHi( Vy_vsg, Ku_yk )
{
	const e = document.getElementById( Vy_vsg );
	e.style.display = Ku_yk ? "block" : "none";
}

function HriNeDe__ChyKuGwa_Dry( Vy_vsg )
{
	const e = document.getElementById( Vy_vsg );
	e.style.display = ( e.style.display === "none") ? "grid" : "none";
}

//@@@
// DISABLE & ACCENT ELM
function HriNeDe__ChyTraHo( Vy_vsg, TraHo_yk )
{
	const e = document.getElementById( Vy_vsg );
	if( TraHo_yk )
	{
		e.disabled = true;
		e.classList.add( "HriNe_TraHo" );
	}
	else
	{
		e.disabled = false;
		e.classList.remove( "HriNe_TraHo" );
	}
}

//@@@
// DISABLE & DIM ELM
function HriNeDe__ChyHryVoHu( Vy_vsg, HryVoHu_yk )
{
	const e = document.getElementById( Vy_vsg );
	if( HryVoHu_yk )
	{
		e.disabled = true;
		e.classList.add( "HriNe_HryHo" );
	}
	else
	{
		e.disabled = false;
		e.classList.remove( "HriNe_HryHo" );
	}
}

//==============================================
// SHOW VALUES
//==============================================

//@@@
// TEXT
// VaSy = textContent is FAST
// VaDe = innerText converts '\n'
function HriNeDe__ChyVaSy( Vy_vsg, KeDru_vksg )
{
	const Kz_l = document.getElementById( Vy_vsg );
	if( Kz_l ){ Kz_l.textContent = KeDru_vksg; }
}

function HriNeDe__ChyVaDe( Vy_vsg, KeDru_vksg )
{
	const Kz_l = document.getElementById( Vy_vsg );
	if( Kz_l ){ Kz_l.innerText = KeDru_vksg; }
}


//@@@
// IMAGE
function HriNeDe__ChyJaPo( Vy_vsg, JaPo_vksg )
{
	document.getElementById( Vy_vsg ).src = BriDz__Mx_KuTu_vsg + "Mx01__SuKz_MEDIA/SuKz02_JaPo__IMG/" + JaPo_vksg;
}

//&&&
// CORE_SYSTEM
function HriNeDe__ChyJaPoKo( Vy_vsg, Jy_vksg, Gwz_vksg )
{
	// Designed to accept NULL and skip
	if( Gwz_vksg )
	{
		HriNeDe__ChyJaPo( Vy_vsg, "JaPo00__Ko/" + Jy_vksg + Gwz_vksg + ".svg" );
	}
}

//&&&
// SCENE
function HriNeDe__ChyJaPoJoDi( Vy_vsg, KeDy_vksg )
{
	HriNeDe__ChyJaPo( Vy_vsg, "JaPo03__JoDi/" + KeDy_vksg + ".jpg" );
}

//&&&
// AVATAR
function HriNeDe__ChyJaPoKeDy( Vy_vsg, ToKz_vksg )
{
	HriNeDe__ChyJaPo( Vy_vsg, "JaPo04__KeDy/" + ToKz_vksg );
}

//&&&
// LANG
function HriNeDe__ChyJaPoKuPy( Vy_vsg, KuPy_vksg )
{
	HriNeDe__ChyJaPo( Vy_vsg, "JaPo06__KuPy/" + KuPy_vksg + ".svg" );
}


//==============================================
// TOPIC CONTAINER
//==============================================
function HriNe__NzNoKz__ChyHry( HryVoVy_vsg, Nz_l, HryDx_vsg, HryVo_yk )
{
	if( HryVo_yk )
	{
		// SHOWN Bnt is for Hide
		// HriNeDe__ChyVaSy( HryVoVy_vsg, "⛔🔼" );
		HriNeDe__ChyVaSy( HryVoVy_vsg, "🔼" );
		Nz_l.className = HryDx_vsg;
	}
	else
	{
		// HIDDEN Btn is for 'Show'
		//HriNeDe__ChyVaSy( HryVoVy_vsg, "👁️🔽" );
		HriNeDe__ChyVaSy( HryVoVy_vsg, "🔽" );
		Nz_l.className = "Gz04__NzNe_Smo";
	}
}

//@@@
// TOGGLE using className
function HriNe__NzNoKz__ChyDryHry( HryVoVy_vsg, NzVy_vsg, HryDx_vsg )
{
	const Nz_l = document.getElementById( NzVy_vsg );
	if( Nz_l.className === "Gz04__NzNe_Smo" )
	{
		HriNe__NzNoKz__ChyHry( HryVoVy_vsg, Nz_l, HryDx_vsg, true );
	}
	else
	{
		HriNe__NzNoKz__ChyHry( HryVoVy_vsg, Nz_l, HryDx_vsg, false );
	}
}


//==============================================
// TOPIC TOOLTIP
//==============================================
function HriNe__KeMeTo__ChyHry( KzVy_vsg, Hry_yk )
{
	const KeMeTra_vsg = KzVy_vsg.replace( "_vsg", "__KeMeTra" );
	const KeMeTo_vsg = KzVy_vsg.replace( "_vsg", "__KeMeTo" );

	//@@@
	// REMOVE
	if( !Hry_yk )
	{
		const KeMeTo_k = document.getElementById( KeMeTo_vsg );
		KeMeTo_k.remove();
		HriNeDe__ChyKuHu( KeMeTra_vsg, true );
	}
	//@@@
	// ADD
	else
	{
		const Kz_l = document.getElementById( KzVy_vsg );
		const Bz_l = Kz_l.parentElement;

		let KeMeTo_l = Hri4_Bu__ChaKz_l( Bz_l, "p", KeMeTo_vsg, "WaDru_Va KeMe_To TreHy", null );

		KeMeTo_l.textContent = Ko.OPT__KeDru.KeMeTo[ KzVy_vsg ] ? Ko.OPT__KeDru.KeMeTo[ KzVy_vsg ] : "⚠️WARN: Missing"  + KzVy_vsg;
		KeMeTo_l.onclick = function() { HriNe__KeMeTo__ChyHry( KzVy_vsg, false ); }

		HriNeDe__ChyKuHu( KeMeTra_vsg, false );
		Bz_l.insertBefore( KeMeTo_l, Kz_l );
	}
}

//==============================================
// EDIT VALUES`
//===============================`===============

//@@@
// TOGGLE
function HriNeDe__ChyHyHo( Vy_vsg, HyHo_yk )
{
	const e = document.getElementById( Vy_vsg );
	e.checked = HyHo_yk;
}

//@@@
// CLN CLEAR
function HriNeDe__Ta_ChyStz( Ta_v )
{
	while ( Ta_v.firstChild )
	{
		Ta_v.removeChild( Ta_v.lastChild );
	}
}

//==============================================
// ELM FOCUS
//==============================================
function HriNeDe__ChySeTra( Vy_vsg )
{
	//@@@
	// SUBMIT BTN
	const e = document.getElementById( Vy_vsg );
	e.focus();
}


//=====================================
// ELM ADD TOGGLE CHOICE
//=====================================
function Hri4_Bu__ChaHyHoKz_l( Bz_l, NeJy_k, Ti_k, VaJy_k )
{
	//@@@
	// Va
	// LABEL
	let Va_l = Hri4_Bu__ChaKz_l( Bz_l, "span", Ti_k.Vy, VaJy_k, null );

	//@@@
	// Ka
	// BODY
	let Ka_l = Hri4_Bu__ChaKz_l( Bz_l, "label", null, "HriNe_HyHo_Ka", null );
	const VuVy_vsg = Ti_k.Vy.replace( "_vsg", "_y" );
	Ka_l.setAttribute( "for", VuVy_vsg );

	//@@@
	// Mz
	// INPUT
	let Vu_l = Hri4_Bu__ChaKz_l( Ka_l, NeJy_k.elm, VuVy_vsg, NeJy_k.class, Ti_k );
	Vu_l.setAttribute( "type", "checkbox" );
	Vu_l.setAttribute( "checked", "false" );

	//@@@
	// Vu
	// VALUE inside INPUT
	let Dre_l = Hri4_Bu__ChaKz_l( Ka_l, "span", null, "HriNe_HyHo_Vu", null );
}


//=====================================
// ELM ADD
//=====================================
function Hri4_Bu__ChaKz_l( DoKz_l, elm, id, className, Dy_l )
{
	//@@@
	// STD
	let Kz_l = document.createElement( elm );
	if( id ){ Kz_l.id = id; }
	if( className ){ Kz_l.className = className; }

	//@@@
	// UNIQUE
	if( Dy_l )
	{
		// ARIA ROLE
		if( Dy_l.Sz ){ Kz_l.setattribute( "role", Dy_l.Sz ); }

		// ACTION
		if( Dy_l.Tra ){ Kz_l.onclick = Dy_l.Tra; }

		// IMG
		if( Dy_l.JaPo )
		{
			Kz_l.src = ( BriDz__Mx_KuTu_vsg + "Mx01__SuKz_MEDIA/SuKz02_JaPo__IMG/" + Dy_l.JaPo );
			// Kz_l.setAttribute( "alt", "Image of" + Dy_l.Va );
			Kz_l.setAttribute( "loading", "lazy" );
		}

		// TAB_INDEX
		if( Dy_l.SeVx ){ Kz_l.tabindex = Dy_l.SeVx; }

		//&&&
		//if( Dy_l.x ){ Kz_l.?? = Dy_l.x; }
		//if( Dy_l.x ){ Kz_l.?? = Dy_l.x; }
		//if( Dy_l.x ){ Kz_l.?? = Dy_l.x; }
	}

	DoKz_l.append( Kz_l );
	return Kz_l;
}


//=====================================
// GUI END
//=====================================
//==============================================
// OPT ELEMENTS
/*
- Using HTML Web PAGE to setup initial CFG ( w/o WG GUI ):
- *However: Already loading WG, so could use GUI or ERR*
- *Given need to invite others and limited time, am continuing HTML for now*

- OPT has
	a) Checkbox: Y or N wq @ HriNe_HyHo_Ka, HriNe_HyHo_Vu
	b) Slider: 0...to N wu
	c) List: scrollable choices 1D vertical or 2D grid 0...Fo wu
	d) Text: utf8 as Label or Value or Edit
	e) Buttons: run action ( show tabs, add/remove users, reset-settings, & launch )

- EDIT: TreHy Can be hover-highlighted to show "editable"
*/

//=====================================
// REMOVE GUI ITEMS
//=====================================
function Hri4_Bu__KoOPT__ChiKri()
{
	if( !Ko.TaNe_v ) return;

	//-------------------------------------------------
	// REMOVE CLNS
	//-------------------------------------------------
	const DoFz_k = document.getElementById( "Ku01_KeMeKwi02__TzBx" );
	Ko.TaNe_v.forEach( function( Ti_k, Vx_wu )
	{
		HriNeDe__Ta_ChyStz( Ti_k );
	});

	//-------------------------------------------------
	// REMOVE KEYMAPPER
	//-------------------------------------------------
	document.removeEventListener( "keyup", Hri4_Bu__MzBuDru_Je );
}


//=====================================
// INIT GUI DEFAULTS
// STATIC ITEMS
//=====================================
async function Hri4_Bu__KoOPT__ChaKri()
{
	const TaTz_k = document.getElementById( "Ku01_KeMeKwi02__TzBx" );
	const KwiYz_k = Ko.TaKeDy_l.KwiYz_v[ Ko.TaKeDy_l.KeDy_wu ];

	//-------------------------------------------------
	{
		//@@@
		// ANCESTRY TREE
		const DoFz_k = document.createDocumentFragment();

		let Tz_l = null;
		let Nz_l = null;
		let Ka_l = null;
		let Nz_Fo_wu = 0;

		const Ku_NeDx__Jy_vsg = KoOPT__JyTy_v[ JyOPT.Ka_Ne_qk ].class;
		const To_NzBz__Jy_vsg = KoOPT__JyTy_v[ JyOPT.To_NzBz_qk ].class;

		//@@@
		// ELM
		Ko.TaNe_v.forEach( function( Ti_k, Vx_wu )
		{
			//@@@
			// Wz
			const NeJy_qk = Ti_k.Jy;
			const NeJy_k = KoOPT__JyTy_v[ NeJy_qk ];

			const DoTzNz_k = ( Nz_l ? Nz_l : Tz_l );
			const DoNe_k = ( Ka_l ? Ka_l : DoTzNz_k );

			//$$$
			// LOG
			// SmaSy( "[OPT]----<OPT>----:", Vx_wu, Ti_k.Va );
			if( !NeJy_k.elm ){ SmaDre( "[OPT]--BROKE----:", Vx_wu, Ti_k.Va ); }

			//@@@
			// ELM ADD TYPE
			switch( NeJy_qk )
			{
				//-------------------------------------------------
				// DOMAIN
				//-------------------------------------------------
				case JyOPT.Tz_MoKu_qk:
				case JyOPT.Tz_ToKu_qk:
				{
					// RESET DOMAIN MARKERS
					Tz_l = Hri4_Bu__ChaKz_l( DoFz_k, NeJy_k.elm, Ti_k.Vy, NeJy_k.class, Ti_k );
					Nz_l = null;
					Ka_l = null;
					Nz_Fo_wu = 0;



					break;
				}

				//-------------------------------------------------
				// TOPIC
				//-------------------------------------------------
				case JyOPT.Nz_Gwx_qk:
				case JyOPT.Nz_GwaHu_qk:
				case JyOPT.Nz_GwaHi_qk:
				{
					// CREATE DOMAIN TOPIC SPACE
					let TzNz_l = Hri4_Bu__ChaKz_l( Tz_l, "div", null, "Gz03__NzGwa", null );

					//&&&
					// INNER ZONE BOX & # 1/4
					let Bz_l = Hri4_Bu__ChaKz_l( TzNz_l, "div", null, "KeDru_TraGyHu", null );
					// CLAMP 1 to 10 aka [ 0..9 ]
					Bz_l.innerText = KoOPT__NzVx_v[ ( Nz_Fo_wu % 10 ) ];


					//&&&
					// VIS TOGGLE 2/4
					const NzVy_vsg = Ti_k.Vy.replace( "_vsg", "_NzVy_vsg" );
					const HryVoVy_vsg = Ti_k.Vy.replace( "_vsg", "_HryVo_l" );
					{
						let Kz_l = Hri4_Bu__ChaKz_l( Bz_l, "span", HryVoVy_vsg, KoOPT__JyTy_v[ JyOPT.Kru_TraVa_qk ].class, null );
						Kz_l.onclick = function() { HriNe__NzNoKz__ChyDryHry( HryVoVy_vsg, NzVy_vsg, NeJy_k.class ); }
						Kz_l.tabindex = Nz_Fo_wu + 8;
					}

					//&&&
					// TOPIC NAME 3/4
					// const NzVa_l =
					Hri4_Bu__ChaKz_l( Bz_l, "span", Ti_k.Vy, To_NzBz__Jy_vsg, null );

					//&&&
					// TOPIC TOOLTIP 4/4
					{
						const KeMeTra_vsg = Ti_k.Vy.replace( "_vsg", "__KeMeTra" );
						let Kz_l = Hri4_Bu__ChaKz_l( Bz_l, "span", KeMeTra_vsg, KoOPT__JyTy_v[ JyOPT.Kru_TraVa_qk ].class, null );
						// Kz_l.textContent = "💬ℹ️";
						Kz_l.textContent = "💬";
						Kz_l.onclick = function() { HriNe__KeMeTo__ChyHry( Ti_k.Vy, true ); }
					}

					//&&&
					// SPACE for TOPIC BODIES
					Nz_l = Hri4_Bu__ChaKz_l( TzNz_l, NeJy_k.elm, NzVy_vsg, NeJy_k.class, null );


					//&&&
					// CLEAR CHOICE_BODY
					Ka_l = null;
					Nz_Fo_wu++;
					break;
				}

				//-------------------------------------------------
				// SPACE
				//-------------------------------------------------
				case JyOPT.Ka_To_qk:
				{
					// UPDATE 'Ka_l' here!
					Ka_l = Hri4_Bu__ChaKz_l( DoTzNz_k, NeJy_k.elm, null, NeJy_k.class, Ti_k );
					break;
				}

				//-------------------------------------------------
				// CHOICES
				//-------------------------------------------------
				//@@@
				// CHOICE  BTN
				case JyOPT.Ne_Tra_qk:
				{
					let Bz_l = Hri4_Bu__ChaKz_l( DoNe_k, "div", null, Ku_NeDx__Jy_vsg, null );
					let Kz_l = Hri4_Bu__ChaKz_l( Bz_l, NeJy_k.elm, Ti_k.Vy, NeJy_k.class, Ti_k );
					Kz_l.type = "button";

					break;
				}

				//@@@
				// CHOICE TOGGLE
				case JyOPT.Ne_HyHo_qk:
				{
					const VaJy_k = KoOPT__JyTy_v[ JyOPT.To_VaDe_qk ].class;
					let Bz_l = Hri4_Bu__ChaKz_l( DoNe_k, "div", null, Ku_NeDx__Jy_vsg, null );
					Hri4_Bu__ChaHyHoKz_l( Bz_l, NeJy_k, Ti_k, VaJy_k );
					break;
				}

				//@@@
				// CHOICE SLIDER
				case JyOPT.Ne_VxBra_qk:
				{
					let Bz_l = Hri4_Bu__ChaKz_l( DoNe_k, "div", null, Ku_NeDx__Jy_vsg, null );

					//&&&
					// LABEL
					let Va_l = Hri4_Bu__ChaKz_l( Bz_l, "label", Ti_k.Vy, KoOPT__JyTy_v[ JyOPT.To_VaDe_qk ].class, null );
					const VuVy_vsg = Ti_k.Vy.replace( "_vsg", "__Vu_wf" );
					Va_l.setAttribute( "for", VuVy_vsg );

					//&&&
					// INPUT
					let Vu_l = Hri4_Bu__ChaKz_l( Bz_l, NeJy_k.elm, VuVy_vsg, NeJy_k.class, Ti_k );
					Vu_l.setAttribute( "type", "range" );
					Vu_l.setAttribute( "min", 0 );
					Vu_l.setAttribute( "max", 100 );
					Vu_l.setAttribute( "value", 50 );
					Vu_l.setAttribute( "list", "BrzHuHi" );

					break;
				}

				//@@@
				// CHOICE TXT/PWD
				// "🔤"
				//  "*️⃣"


				//@@@
				// CHOICE LIST
				case JyOPT.Ne_TaGwx_qk:
				{
					// List (selection text)
					let Kz_l = Hri4_Bu__ChaKz_l( DoNe_k, NeJy_k.elm, Ti_k.Vy, NeJy_k.class, Ti_k );

						// Va_l = Hri4_Bu__ChaKz_l( Bz_l, "label", Ti_k.Vy, To_NzBz__Jy_vsg, null );
						// const TaVy_vsg = Ti_k.Vy.replace( "_vsg", "__Ta_l" );
						// Va_l.setAttribute( "for", TaVy_vsg );

						// // select
						// // Tra & SeVx EXPECTED
						// Hri4_Bu__ChaKz_l( Bz_l, "select", TaVy_vsg, KoOPT__JyTy_v[ JyOPT.Ne_KeDru_Tre_qk ].class, Ti_k );

					break;
				}

				//@@@
				// CHOICE GRID
				case JyOPT.Ne_TaGwa_qk:
				{
					// Img Grid
					let Kz_l = Hri4_Bu__ChaKz_l( DoNe_k, NeJy_k.elm, Ti_k.Vy, NeJy_k.class, Ti_k );

					break;
				}

				//-------------------------------------------------
				// INFO
				//-------------------------------------------------

				// DOMAIN HEADLINE
				case JyOPT.To_TzBz_qk:
				// TOPIC HEADLINE
				case  JyOPT.To_NzBz_qk:

				// CHOICE LABEL
				case JyOPT.To_VaDe_qk:
				// PGRAF LABEL
				case JyOPT.To_KeDru_GyHi_qk:

				// INFO HORIZON & VERTICAL
				case JyOPT.To_GyDe_qk:
				case JyOPT.To_GoGa_qk:

				// INFO LABEL & VALUE
				case JyOPT.To_VaSpo_qk:
				case JyOPT.To_VuSpo_qk:

				// IMG
				case  JyOPT.To_JaPoBz_qk:
				case  JyOPT.To_JaPoSi_qk:
				case  JyOPT.To_JaPoVa_qk:
				case  JyOPT.To_JaPoVa_Kwu_qk:
				{
					let Kz_l = Hri4_Bu__ChaKz_l( DoNe_k, NeJy_k.elm, Ti_k.Vy, NeJy_k.class, Ti_k );
					break;
				}

				// VIDEO LINK
				case  JyOPT.To_TuVa_qk:
				{
					let Kz_l = Hri4_Bu__ChaKz_l( DoNe_k, NeJy_k.elm, Ti_k.Vy, NeJy_k.class, Ti_k );


					break;
				}

				//-------------------------------------------------
				// TOOLS
				//-------------------------------------------------
				case  JyOPT.Kru_TraVa_qk:
				case  JyOPT.Kru_TraJaPo_qk:
				case  JyOPT.Kru_TiVa_qk:
				case  JyOPT.Kru_TiJaPo_qk:
				{
					// ALL CALL REMOTELY: Nothing to do here
					SmaTrx( "[OPT] TOOL Mistakenly Added:", Ti_k.Vy, NeJy_k.class );
					break;
				}

				//-------------------------------------------------
				// UNHANDLED
				//-------------------------------------------------
				default:
				{
					SmaTrx( "[OPT] UNHANDLED ELM:", Ti_k.Vy, NeJy_k.class );
				}
			};//SWITCH  ADD ELM

		}); // ITER ELM


		//@@@
		// CONNECT DoFz_k to DOM all at once
		TaTz_k.appendChild( DoFz_k );
	}// OPT ALL ALL

	//-------------------------------------------------
	// TOPIC TOGGLES
	//-------------------------------------------------

	//const TaTz_k = document.getElementById( "Ku01_KeMeKwi02__TzBx" );
	// [id^='someId'] will match all ids starting with someId.
	// [id$='someId'] will match all ids ending with someId.
	// [id*='someId'] will match all ids containing someId.
//	TaTz_k.querySelectorAll( ".Gz04__NzNe_GwaHu, .Gz04__NzNe_GwaHi" ).forEach(( Nz_l ) =>
	TaTz_k.querySelectorAll( ".Gz04__NzNe_Gwx, .Gz04__NzNe_GwaHu, .Gz04__NzNe_GwaHi" ).forEach(( Nz_l ) =>
	{
		SmaDBG( Nz_l );

		const NzVy_vsg = Nz_l.id;

		// TOPIC SHOW/HIDE
		const HryVoVy_vsg = NzVy_vsg.replace( "_NzVy_vsg", "_HryVo_l" );
		HriNe__NzNoKz__ChyHry( HryVoVy_vsg, Nz_l, Nz_l.className, true );

		// TOOLTIP
		const NzVa_vsg = NzVy_vsg.replace( "_NzVy_vsg", "_vsg" );

		SmaJe( NzVa_vsg );
		// HriNe__KeMeTo__ChyHry( NzVa_vsg, true );
	});







	//-------------------------------------------------
	// CULTURE
	//-------------------------------------------------
//HAINT
if( false )
	{
		//@@@
		// LANG DROPDOWN LIST
		const TzKu__NzKeDru__Ta_l = document.getElementById( "TzKu__NzKeDru__Ta_l" );
		// LANGUAGE PICKER
		const KeDru__TaJaPo_l = document.getElementById("TzKu__NzTrz__KeDru_TaJaPo_l");

		//&&&
		// LIST CLEAR
		HriNeDe__Ta_ChyStz( TzKu__NzKeDru__Ta_l );
		HriNeDe__Ta_ChyStz( KeDru__TaJaPo_l );

		//&&&
		// LIST FILL ENTRIES
		const KeDruGri_v = [ "en", "es" ];

		Hre1_Dru__Gra_v.forEach( function( Ti_k, Vx_wu )
		{
			// SmaSy( "------ Vx_wu:", Vx_wu, Ti_k.Va );

			//&&&
			// CHOOSE LANG DROPDOWN ADD BTNS
			if( KeDruGri_v.includes( Ti_k.ToKz ) )
			{
				const Kz_l = document.createElement( "option" );
				Kz_l.className = "HriNeTi WaDru_Ku";
				Kz_l.innerText = `${Ti_k.KuGwz} ${Ti_k.Va}`;
				Kz_l.value = Ti_k.Vy;

				TzKu__NzKeDru__Ta_l.appendChild( Kz_l );
			}

			//&&&
			// LANG FLAG GRID ADD BTN
			{
				const Kz_l = document.createElement( "div" );

				if( KeDruGri_v.includes( Ti_k.ToKz ) )
				{
					Kz_l.className = "HriNe_Ta__Va HriNe_Ta__VaGri WaDru_Ku";
					Kz_l.onclick = function() { TzKu__NzTrz__NiKeDru__JeChy( Vx_wu ); }
				}
				else
				{
					Kz_l.className = "HriNe_Ta__Va HriNe_Ta__VaRu WaDru_Ku";
				}

				Kz_l.innerText = Ti_k.KuGwz;

				// LOCALE REVEAL
				// Ti_k.Va + "\n" + Ti_k.So );

				KeDru__TaJaPo_l.appendChild( Kz_l );
			}
		});

		//@@@
		// STARTING LANG
		TzKu__NzKeDru__Ta_l.selectedIndex = KwiYz_k.KeDru_wu;
	}


	//-------------------------------------------------
	// CULTURE
	//-------------------------------------------------
	Hre1_Dru__KeDru_Cha_ChyYe( KwiYz_k.KeDru_wu );





	// HAINT
	if( false )
	{

	//-------------------------------------------------
	// XP PICKER
	// Changed "per user"
	//-------------------------------------------------
	// Hri4_Bu__TaJo_Chy();


	//-------------------------------------------------
	// PROFILE PICKER
	//-------------------------------------------------
	const SaJaPo__TaJaPo_l = document.getElementById("Ne01_KeDy03__SaJaPo__TaJaPo_l");
	HriNeDe__Ta_ChyStz( SaJaPo__TaJaPo_l );

	//@@@
	for( let Vx_wu = 0; Vx_wu< KoOPT__SaPy__ToKz_v.length; Vx_wu++ )
	{
		//&&&
		// ADD BTN
		const Kz_l = document.createElement( "span" );

		Kz_l.className = "HriNe_Ta__Va HriNe_Ta__VaVo";
		Kz_l.onclick = function() { Hrz4_Bu__KwiYz__SaPy_ChyYe( Vx_wu ); }

		Kz_l.innerText = KoOPT__SaPy__ToKz_v[ Vx_wu ];
		SaJaPo__TaJaPo_l.appendChild( Kz_l );
	}

	//-------------------------------------------------
	// AUD_METHODS
	//-------------------------------------------------
	{
		const TaKeDy_l = document.getElementById( "TzHru__NzSmzYz_Ta_l" );
		HriNeDe__Ta_ChyStz( TaKeDy_l );

		//@@@
		const SaNo__TaKeDy_l = Ko.TaKeDy_l.KwiYz_v;
		SaNo__TaKeDy_l.forEach( function( Ti_k, Vx_wu )
		{
			// SmaSy( "------ Vx_wu:", Vx_wu, Ti_k.KeDy_vsg );

			//&&&
			// ADD BTN
			const Kz_l = document.createElement( "option" );
			Kz_l.className = "HriNeTi WaDru_Vu";
			Kz_l.innerText = `${KoOPT__SaPy__ToKz_v[ Ti_k.HriNe_Ta__wu ]} ${Ti_k.KeDy_vsg }` + ( Vx_wu & 1 ? "🔒":"🔓" );
			Kz_l.value = Vx_wu;
			TaKeDy_l.appendChild( Kz_l );
		});

		TaKeDy_l.selectedIndex = Ko.TaKeDy_l.KeDy_wu;
	}

	//-------------------------------------------------
	// VIS_METHODS
	//-------------------------------------------------
	{
		const TaKeDy_l = document.getElementById( "TzHry__NzSy__Ta_l" );
		HriNeDe__Ta_ChyStz( TaKeDy_l );

		//@@@
		const SaNo__TaKeDy_l = Ko.TaKeDy_l.KwiYz_v;
		SaNo__TaKeDy_l.forEach( function( Ti_k, Vx_wu )
		{
			// SmaSy( "------ Vx_wu:", Vx_wu, Ti_k.KeDy_vsg );

			//&&&
			// ADD BTN
			const Kz_l = document.createElement( "option" );
			Kz_l.className = "HriNeTi WaDru_Vu";
			Kz_l.innerText = `${KoOPT__SaPy__ToKz_v[ Ti_k.HriNe_Ta__wu ]} ${Ti_k.KeDy_vsg }` + ( Vx_wu & 1 ? "🔒":"🔓" );
			Kz_l.value = Vx_wu;
			TaKeDy_l.appendChild( Kz_l );
		});

		TaKeDy_l.selectedIndex = Ko.TaKeDy_l.KeDy_wu;
	}

//HAINT
	}


	//-------------------------------------------------
	// STATIC_LABELS
	// via Calculated Info (FIXED)
	//-------------------------------------------------

	//@@@
	// APP VERSION
	HriNeDe__ChyVaDe( "BriDzSa__Gi", BriDzSa__Gi_vsg );
	HriNeDe__ChyVaDe( "BriDzSa__Da", BriDzSa__Da_vsg );


	//@@@
	// NODE

	//&&&
	// DEVICE
	const Hra0_Ko__TaJy_vvsg = [ "MOBILE", "TABLET",  "STATION", "XR" ];
	const Hra0_Ko__VaDe_vsg = Hra0_Ko__TaJy_vvsg[ Ko.Hra0_Ko__Jy_q ];
	HriNeDe__ChyVaDe( "Hra0_Ko__VaDe", Hra0_Ko__VaDe_vsg );
	HriNeDe__ChyJaPoKo( "Hra0_Ko__Gwz", "HraKo_", Hra0_Ko__VaDe_vsg.toUpperCase() );

	//&&&
	// OS
	HriNeDe__ChyVaDe( "Hrz3_By__VaDe", Ko.Hrz3_By__VaDe_vsg );
	HriNeDe__ChyJaPoKo( "Hrz3_By__Gwz", "HrzBy_", Ko.Hrz3_By__Gwz_vsg );

	//&&&
	// BROWSER
	HriNeDe__ChyVaDe( "Hrz4_Bu__VaDe", Ko.Hrz4_Bu__VaDe_vsg + ": v" + Ko.Hrz4_Bu__Da_wfk );
	HriNeDe__ChyJaPoKo( "Hrz4_Bu__Gwz", "HrzBu_", Ko.Hrz4_Bu__Gwz_vsg );


	//@@@
	// CHIPS
	HriNeDe__ChyVaDe( "KaBz__VaDe", Ko.KaBz__VaDe_vsg );
	HriNeDe__ChyJaPoKo( "KaBz__Gwz", "Ky", Ko.KaBz__Gwz_vsg );

	HriNeDe__ChyVaDe( "KaBx__VaDe", Ko.KaBx__VaDe_vsg );
	HriNeDe__ChyJaPoKo( "KaBx__Gwz", "Ky", Ko.KaBx__Gwz_vsg );

	HriNeDe__ChyVaDe( "KaBa__VaDe", Ko.KaBa__VaDe_vsg );
	HriNeDe__ChyJaPoKo( "KaBa__Gwz", "Ky", Ko.KaBa__Gwz_vsg );


	//-------------------------------------------------
	// KEY CTLS
	//-------------------------------------------------
	document.addEventListener( "keyup", Hri4_Bu__MzBuDru_Je );


}

//=====================================
// OPT END
//=====================================
//==============================================
// STAGE
//==============================================


//=====================================
// DRAW_2D_HEX
//=====================================

//---------------------------------
// HEX CONST
//---------------------------------
const TAU_wfk = 2. * Math.PI;
const GwxFo_wuk = 6;
const GoKwu_wfk = TAU_wfk / GwxFo_wuk;
const GwxZiStaFo_wuk = 3;
const GoSti_wfk = TAU_wfk / GwxZiStaFo_wuk;

//---------------------------------
function HrySxDe__ChyHEX( Sx_l, x, y, r, KuPo_l, KwzPo_l, KwaPo_l, NOTCH_yk )
//---------------------------------
{
	//@@@
	// SHRINK RADIUS
	r *= 0.95;

	//@@@
	// 6 SIDES
	Sx_l.lineWidth = 3.5;
	Sx_l.strokeStyle = KwaPo_l;

	Sx_l.beginPath();
	for( let i = 0; i < GwxFo_wuk; i++)
	{
		Sx_l.lineTo( x + r * Math.cos( GoKwu_wfk * i ), y + r * Math.sin( GoKwu_wfk * i ) );
	}
	Sx_l.closePath();

	Sx_l.fillStyle = KuPo_l;
  	Sx_l.fill();

  	Sx_l.stroke();

	//@@@
	// NOTCHES
	if( NOTCH_yk )
	{
		const n = r * 0.9;

		Sx_l.strokeStyle = KwaPo_l;
		Sx_l.lineWidth = 1.5;

		Sx_l.beginPath();
		let i = GwxFo_wuk;
		while( i > 0 )
		{
			i--;
			const GoFz_wfk = -GoKwu_wfk * i;
			Sx_l.moveTo( x + n * Math.cos( GoFz_wfk ), y + n * Math.sin( GoFz_wfk ) );

			i--;
			const GoFx_wfk = -GoKwu_wfk * i;
			Sx_l.lineTo( x + n * Math.cos( GoFx_wfk ), y + n * Math.sin( GoFx_wfk ) );
		}
		Sx_l.closePath();
	  	Sx_l.stroke();

	}
	else
	//@@@
	// CUBE INNER LINES
	{
		Sx_l.strokeStyle = KwzPo_l;
		Sx_l.lineWidth = 1.5;
		for( let i = 0; i < GwxZiStaFo_wuk; i++)
		{
			Sx_l.beginPath();
			Sx_l.moveTo( x, y ); Sx_l.lineTo( x + r * Math.cos( GoSti_wfk * i), y + r * Math.sin( GoSti_wfk * i) );
			Sx_l.closePath();
			Sx_l.stroke();
		}
	}
}

//---------------------------------
function HrySxDe__ChyHEXGRID( Sx_l, GxGy_wfk, GaGy_wfk, r, KuPo_l, KwzPo_l, KwaPo_l, NOTCH_yk )
//---------------------------------
{
	const BiGy_wfk = r * ( Math.sin( GoKwu_wfk ));
	const KaGy_wfk = r * (1 + Math.cos( GoKwu_wfk ));

	// Use
	const KwxGy_wfk = r;
	const GxYi_wfk = GxGy_wfk + KwxGy_wfk;
	const GaYi_wfk = GaGy_wfk + KwxGy_wfk;
	const KeDru_GxZo_wfk = r / 3.0;
	const KeDru_GaZo_wfk = r / 2.0;


	let v = 0;
	let GaFe_wf = -KwxGy_wfk;

  	while( GaFe_wf < GaYi_wfk )
	{
		let x = -KwxGy_wfk;
		let h = 0;

		let y = GaFe_wf;
		while( x < GxYi_wfk )
		{
			//@@@
			// INNER FILL & EDGES
			HrySxDe__ChyHEX( Sx_l, x, y, r, KuPo_l, KwzPo_l, KwaPo_l, NOTCH_yk );

			//@@@
			// TEXT DBG
			// if( false )
			{
				Sx_l.font = "16px sans-serif";
				Sx_l.textAlign = "center";
				Sx_l.fillStyle = KwaPo_l;

				if( NOTCH_yk )
				{
					Sx_l.fillText( "(" + h.toString().padStart( 2, "0" )  + "," + v.toString().padStart( 2, "0" ) + ")", x, y );
				}
				else
				{
					Sx_l.save();
					Sx_l.translate( x, y );
					Sx_l.rotate( TAU_wfk / 54.0 );

					Sx_l.fillText( h.toString().padStart( 2, "0" )  + "," + v.toString().padStart( 2, "0" ), KeDru_GxZo_wfk, KeDru_GaZo_wfk );

					Sx_l.restore();
				}
			}

			//@@@
			// NEXT HEX
			x += KaGy_wfk;
			y += (( -1) ** h ) * BiGy_wfk;
			h++;
    	}
		v++;

 		GaFe_wf += 2. * BiGy_wfk;
  	}
}

//=====================================
// DRAW_2D_PTRN
//=====================================
function Hry_DriBrz( MxVa_vsg, NOTCH_yk, KuPo_l, KwzPo_l, KwaPo_l )
{
	//@@@
	// 1/4
	// CANVAS RESIZE
	const Mx_l = document.getElementById( MxVa_vsg );
	if( !Mx_l ) return;

	const KuGy_wfk = window.devicePixelRatio;
	Mx_l.width = KuGy_wfk * Mx_l.clientWidth;
	Mx_l.height = KuGy_wfk * Mx_l.clientHeight;

	//@@@
	// CTX
	// 2/4
	const Sx_l = Mx_l.getContext("2d");
	if( !Sx_l )return;

	Sx_l.imageSmoothingEnabled= true;
	Sx_l.resetTransform();
	Sx_l.scale( 1.0, 1.0 );


	//@@@
	// 3/4
	// FILL SCREEN
	Sx_l.beginPath();
	Sx_l.fillStyle = KuPo_l;
	Sx_l.fillRect( 0, 0, Mx_l.width, Mx_l.height );

	//@@@
	// 4/4 PATTERN
	HrySxDe__ChyHEXGRID( Sx_l, Mx_l.width, Mx_l.height, 80.0, KuPo_l, KwzPo_l, KwaPo_l, NOTCH_yk );
}


//=====================================
// RESIZE_00 BOOT VISUAL
//=====================================
function HryMx00_KeMeHxHo()
{
	//---------------------------------
	// VIEWS
	//---------------------------------
	HriNeDe__ChyKuHi( "Ku00_KoYa",true );
	HriNeDe__ChyKuHi( "Ku01_KeMeKwi", false );
	HriNeDe__ChyKuHi( "Ku02_KeMeTrx", false );
	HriNeDe__ChyKuHi( "Ku03_KeMeBri", false );

	HriNeDe__ChyKuHi( "Ku04_KeDruTre", false );

	//---------------------------------
	// CANVAS
	//---------------------------------
	// BLUEPRINT on DARK MODE #1
	HriNeDe__PoSzChy( 1 );
	Hry_DriBrz( "MxPo_HxHo", false, "#8888BB", "#9999CC", "#BBBBEE" );


	//---------------------------------
	// NO
	//  GUI_SYNC
	//---------------------------------
}

//=====================================
// RESIZE_01 LAUNCH_CFG
//=====================================
function HryMx01_KeMeKwi()
{
	//---------------------------------
	// VIEWS
	//---------------------------------
	HriNeDe__ChyKuHi( "Ku00_KoYa", false );
	HriNeDe__ChyKuHi( "Ku01_KeMeKwi", true );
	HriNeDe__ChyKuHi( "Ku02_KeMeTrx", false );
	HriNeDe__ChyKuHi( "Ku03_KeMeBri", false );

	HriNeDe__ChyKuHi( "Ku04_KeDruTre", false );

	//---------------------------------
	// CANVAS
	//---------------------------------
	const KwiYz_k = Ko.TaKeDy_l.KwiYz_v[ Ko.TaKeDy_l.KeDy_wu ];
	// HriNeDe__PoSzChy( KwiYz_k.THEME_BG_wu );

	// INDEX[ 8 ] by 3
	// const FePo_k = KwiYz_k.BG_wu;
	const FePo_k = ( BriDzSa__Da_wuk & 7 ) * 3;
	Hry_DriBrz( "MxPo_Kwi", false, KoOPT__PoKu_v[ FePo_k + 0 ],KoOPT__PoKu_v[ FePo_k + 1 ],KoOPT__PoKu_v[ FePo_k + 2 ] );

	//---------------------------------
	// GUI_SYNC
	//---------------------------------
	Hrz4_Bu__HriNe__ChyKwiYz();
}


//==============================================
// RESIZE_02 FAIL
//==============================================
function HryMx01_KeMeTrx()
{
	//---------------------------------
	// VIEWS
	//---------------------------------
	Hri4_Bu__KoOPT__ChiKri();

	HriNeDe__ChyKuHi( "Ku00_KoYa", false );
	HriNeDe__ChyKuHi( "Ku01_KeMeKwi", false );
	HriNeDe__ChyKuHi( "Ku02_KeMeTrx", true );
	HriNeDe__ChyKuHi( "Ku03_KeMeBri", false );

	HriNeDe__ChyKuHi( "Ku04_KeDruTre", false );

	//---------------------------------
	// CANVAS
	//---------------------------------
	// RICH_RED on DARK MODE #1
	HriNeDe__PoSzChy( 1 );
	Hry_DriBrz( "MxPo_Trx", true, "#990c0c", "#CC9999", "#FFBBBB" );


	//---------------------------------
	// MSG
	//---------------------------------
	HriNeDe__ChyVaDe( "TrxBz", Ko.OPT__KeDru.HriNe.BriDz00__VaDe_vsg + " " + Ko.OPT__KeDru.KiJe.BriDz__TrxBz_vsg );
	HriNeDe__ChyVaDe( "TrxKa", Ko.Trx_vsg );
	HriNeDe__ChyVaDe( "TrxDa", BriDzSa__Da_vsg + " " + BriDzSa__Gi_vsg );


	//@@@
	// LOG
	const Sma_vvsg = Ko.Sma_vvsg;
	const SmaFo_wuk = Math.min( Ko.SmaFe_wu, SmaBraHi_wuk );
	const GeZo_wuk = Math.max( 0, Ko.SmaFe_wu - SmaFo_wuk );

	const TrxSma_Ta_k = document.getElementById("TrxSma_Ta");
	TrxSma_Ta_k.innerText = null;

	for( let i = 0; i < SmaFo_wuk; i++)
	{
		const Vy_wuk = ( ( i + GeZo_wuk ) & SmaViKa_wuk );
		TrxSma_Ta_k.innerText += Sma_vvsg[ Vy_wuk ] + "\n";
	}
}


//==============================================
// RESIZE_03 LIFE
//==============================================
function HryMx03_KeMeBri()
{
	Hri4_Bu__KoOPT__ChiKri();

	//---------------------------------
	// VIEWS
	//---------------------------------
	HriNeDe__ChyKuHi( "Ku00_KoYa", false );
	HriNeDe__ChyKuHi( "Ku01_KeMeKwi", false );
	HriNeDe__ChyKuHi( "Ku02_KeMeTrx", false );
	HriNeDe__ChyKuHi( "Ku03_KeMeBri", true );

	HriNeDe__ChyKuHi( "Ku04_KeDruTre", false );

}

//==============================================
// TEK_TAB as SECTION
// CHANGE VISIBLE
//==============================================
function Hrz4_Bu__ChyNeKu( Tz_wu, Nz_wu )
{
	//@@@
	// SAFE CLASS CLNs
	const NzVa_v = document.getElementsByClassName( "KeDru_NzVa__TraKz" );
	const NeKuJy_v = document.getElementsByClassName( "NeKuJy" );
	if( ( Tz_wu > NzVa_v.length ) || ( Tz_wu < 0 ) || ( NzVa_v.length !== NeKuJy_v.length )) { return;}

	//@@@
	// GET CURRENT FOCUS
	//


	//@@@
	// SELECT MENU

	//!!!
	// WATCH STRING SPACES
	const NzVa__FeDe_vsg = "KeDru_NzVa__TraKz WaDru_Va";
	const NzVa__Se_vsg = NzVa__FeDe_vsg + " KeDru_NzVa_Se__TraKz";

	for( let i = 0; i < NzVa_v.length; i++)
	{
		NzVa_v[i].className = ( Tz_wu === i ) ? NzVa__Se_vsg : NzVa__FeDe_vsg;
		if( Tz_wu === i )
		{
			//&&&
			// FOCUS on 'first' element to skip MENU tab-run
			if( Nz_wu === 0 )
			{
				NzVa_v[i].focus();
			}
			//&&&
			// SELECT CHILD
			else
			{
				NzVa_v[i].firstElementChild.focus();
			}
		}
	}

	//@@@
	// SHOW/HIDE SECTIONS
	for( let i = 0; i < NeKuJy_v.length; i++)
	{
		// ALL SECTIONS are GRID
		NeKuJy_v[i].style.display = ( Tz_wu === i ) ? "grid" : "none";
	}
}

//==============================================
// RUN LIFE
// via LAUNCH BTN
//==============================================
function Tra_KeMeBri()
{
	HryMx03_KeMeBri();
	const KwiYz_k = Ko.TaKeDy_l.KwiYz_v[ Ko.TaKeDy_l.KeDy_wu ];

	//!!!
	// RELOAD VISUALS
	// if different now, must redo WG
	//!!!

	// const Cha__YzVi_q =  document.getElementById( "WG" ).value;
	//const Cha__YzVi_q = 0;
	const Cha__YzVi_q = KwiYz_k.TzHry__NzSy__SmzYz_q;
	if( Cha__YzVi_q !== KwiYz_k.TzHry__NzSy__SmzYz_q )
	{
		KwiYz_k.TzHry__NzSy__SmzYz_q = Cha__YzVi_q;

		// Restart WG
		const SyWG_k = Ko.SySmz_v[ SyVx.WG_qk ];
		SyWG_k.KaSmz_l.destroy();
	}

	Hrz4_Bu__KwiYz__ChyHriNe();

	//---------------------------------
	// LAUNCH HERE
	//---------------------------------

	//@@@
	// ECOSYS PLAY
	SmaJe( "[GUI] User:", KwiYz_k.KeDy_vsg, " NEVER_PAUSE:", KwiYz_k.TzTru__NzCha__KoDz_YoHo_y );
	if( KoDz__YzYa_y() )
	{
		SmaSy( "[GUI] ACTIVE via Resume" );

		//&&&
		// LAUNCH SERVICES that REQUIRE a "click"
		KoDz__YaFx();
		//&&&
		// PAUSE so "RESUME" triggers
		KoDz__YzChy( BriYz.Yo_qk );
		//&&&
		// RESUME Update
		KoDz__YuChy();
	}
}

//==============================================
// RESIZE
//==============================================
function KoDz_GyHa()
{
	//@@@
	// UPDATE MODE
	if( KoDz__YzTrx_y() ){ HryMx01_KeMeTrx(); }
	else if( KoDz__YzHxHo_y() ){ HryMx00_KeMeHxHo(); }
	else if( KoDz__YzYa_y() ){ HryMx01_KeMeKwi(); }
	else { HryMx03_KeMeBri(); }

	//@@@
	// EM SIZE
	Ko.em2px_wfk = Number(window.getComputedStyle(document.body).getPropertyValue("font-size").match(/\d+/)[0]);

	//@@@
	// MxPo^SCREEN
	// SmaSy( "[GUI] GyHa: ", window.innerWidth, window.innerHeight, " Legible Px/Em: ", Ko.em2px_wfk );

	//$$$
	// UNNEEDED
	// REFRESH @ INTERVALS
	// Ko.Trx_GyHa = setInterval( KoDz_GyHa, 2000 );
	// if( Ko.Trx_GyHa  ){ clearInterval( Ko.Trx_GyHa ); }

}

//==============================================
// END
//==============================================
//==============================================
// CHG BEGIN
//==============================================

//=====================================
// KEY CTL
//
// MODIFIERS
// if (e.shiftKey) {/*shift is down*/}
// if (e.altKey) {/*alt is down*/}
// if (e.ctrlKey) {/*ctrl is down*/}
// if (e.metaKey) {/*cmd is down*/}
//=====================================
function Hri4_Bu__MzBuDru_Je( e )
{
	//@@@
	// ELM ID & TYPE
	const Kz_l = document.activeElement;
	if( Kz_l )
	{
		// SmaJe( "ELM", Kz_l?.id );
	}

	//@@@
	// NAVI
	switch( e.key )
	{
		// case( "Enter" ):
	 	// case( " " ):
		// {
		// 	SmaJe( "GO IN" );
		// 	break;
		// }

		case "Cancel":
		case( "Escape" ):
		{
			Hrz4_Bu__ChyNeKu( 0, 0 );
			break;
		}

		case( "`" ):
		{
			//HriNeDe__PoSzChy( 0 );
			if( Kz_l )
			{
				SmaJe( "[GUI] Elm", Kz_l?.id, " TIDX:", Kz_l?.tabindex );
			}

			break;
		}

		// case( "ArrowLeft" ):
		// {
		// 	//HriNeDe__PoSzChy( 0 );
		// 	break;
		// }
		// case( "ArrowRight" ):
		// {
		// 	// HriNeDe__PoSzChy( 1 );
		// 	break;
		// }

		case "Home": { HriNeDe__PoSzChy( 0 ); break; }
		case "End": { HriNeDe__PoSzChy( 1 ); break; }
		case "PageUp": { HriNeDe__PoSzChy( 2 ); break; }
		case "PageDown": { HriNeDe__PoSzChy( 3 ); break; }


		case "Numpad8":
		case( "ArrowUp" ):
		{
			const FzKz_k = document.documentElement;
			const WaDru__DoGy_vsg = FzKz_k.style.fontSize;
			// Parse the value (remove "px" and convert to number)
			let WaDruGy_wfk = parseFloat( WaDru__DoGy_vsg );
			if( Number.isNaN(WaDruGy_wfk) ) { WaDruGy_wfk = 16.0; }
			//SmaJe( "CUR fnt:", WaDru__DoGy_vsg, WaDruGy_wfk );
			if( WaDruGy_wfk < 64.0) { WaDruGy_wfk += 1.0;}
			FzKz_k.style.fontSize = WaDruGy_wfk.toString() + "px";
			break;
		}

		case "Numpad2":
		case( "ArrowDown" ):
		{
			const FzKz_k = document.documentElement;
			const WaDru__DoGy_vsg = FzKz_k.style.fontSize;
			// Parse the value (remove "px" and convert to number)
			let WaDruGy_wfk = parseFloat( WaDru__DoGy_vsg );
			if( Number.isNaN(WaDruGy_wfk) ) { WaDruGy_wfk = 16.0; }
			//SmaJe( "CUR fnt:", WaDru__DoGy_vsg, WaDruGy_wfk );
			if( WaDruGy_wfk > 2.0) { WaDruGy_wfk -= 1.0;}
			FzKz_k.style.fontSize = WaDruGy_wfk.toString() + "px";
			break;
		}

		case( "0" ):
		{
			HriNeDe__ChySeTra( "BriDz01__TraKwi_vsg" );
			break;
		}

		case( "1" ):
		case( "2" ):
		case( "3" ):
		case( "4" ):
		case( "5" ):
		case( "6" ):
		case( "7" ):

		// case( "8" ):
		// case( "9" ):
		{
			// SmaJe( "#" + e.key );
			if( true )
			// CHANGE DOMAIN MENU
			{
				Hrz4_Bu__ChyNeKu( parseInt( e.key ) - 1, 0 );
			}
			else
			// CHANGE TOPIC AREA
			{
				Hrz4_Bu__ChyNeKu( 0, parseInt( e.key ) - 1 );
			}

			break;
		}
	}// End Switch Key
}


//==============================================
// IMAGE
//==============================================

//TzKe__NzDz__Ta_l
					// let KaDry_l = Hri4_Bu__ChaKz_l( Bz_l, "span", null, "TreHy WaDru_Va", null );
					// KaDry_l.innerHTML ="<img class='TreHy BriDz_FzVa JaPo__GyBzHu_Kwu Kz_BriDzDy' src='Mx01__SuKz_MEDIA/SuKz02_JaPo__IMG/JaPo05__SaTrz/SaTrz00__Gx.jpg' onclick='TzHry__NzSy__SmzYz__Chy()'></img>";

					// "<img class='TreHy BriDz_FzVa JaPo__GyBzHu_Kwu Kz_BriDzDy' src='Mx01__SuKz_MEDIA/SuKz02_JaPo__IMG/JaPo05__SaTrz/SaTrz00__Gx.jpg' onclick='TzHry__NzSy__SmzYz__Chy()'></img>";



//==============================================
//
//==============================================
function TzHry__NzSy__SmzYz__Chy()
{
	SmaJe( "[CHG] HrySmz:" );
}


//==============================================
// SELECT WHERE
//==============================================
function TzKu__NzJo__Chy()
{
	SmaJe( "[CHG] Jo:" );
}



//=====================================
// SPACETIME FILL by USER
//=====================================
function Hri4_Bu__TaJo_Chy()
{
	const TaJo_l = document.getElementById( "TzKe__NzDz__Ta_l" );
	HriNeDe__Ta_ChyStz( TaJo_l );

	//@@@
	const SaNo__TaJo_l = Ko.TaKeDy_l.KwiYz_v;
	SaNo__TaJo_l.forEach( function( Ti_k, Vx_wu )
	{
		// SmaSy( "------ Vx_wu:", Vx_wu, Ti_k.KeDy_vsg );

		//&&&
		// ADD BTN
		const Kz_l = document.createElement( "option" );
		Kz_l.className = "HriNeTi WaDru_Vu";
		Kz_l.innerText = `${KoOPT__SaPy__ToKz_v[ Ti_k.HriNe_Ta__wu ]} ${Ti_k.KeDy_vsg }`;
		Kz_l.value = Vx_wu;

		TaJo_l.appendChild( Kz_l );
	});

	TaJo_l.selectedIndex = 1;
}

//==============================================
// CHG END
//==============================================
//==============================================
// SYSLIFE
//==============================================

//==============================================
// JSON_RD^ToKz_My
//==============================================
async function Hra6_Ku__ToKz_My__vJSON( ChaKuTu_vsg, ToKzVa_vsg )
{
	let KuTu_vbg = BriDz__Mx_KuTu_vsg + ChaKuTu_vsg + ToKzVa_vsg;
	SmaJe( "[USR_STOR] FILE seeking JSON: " + KuTu_vbg );
	try
	{
		const Smx_k = await fetch( KuTu_vbg, { headers: { Accept: 'application/json' } } );
		const ToKz_v = await Smx_k.json();
		//SmaJe( "[USR_STOR]", ToKz_v );
		return ToKz_v;
	}
	catch ( e ) { MoDzTrx__KeDru( Ko.OPT__KeDru.KiJe.TrxJy__SuKz_GriHo_vsg + " @ " + ToKzVa_vsg + " --> " + e ); }
	return null;
};

//==============================================
// TXT_RD^ToKz_My
//==============================================
async function Hra6_Ku__ToKz_My__vsg( ChaKuTu_vsg, ToKzVa_vsg )
{
	let KuTu_vbg = BriDz__Mx_KuTu_vsg + ChaKuTu_vsg + ToKzVa_vsg;
	//SmaJe( "[USR_STOR] FILE seeking TEXT: " + KuTu_vbg );
	try
	{
		const Smx_k = await fetch( KuTu_vbg );
		const ToKz_v = await Smx_k.text();
		// SmaJe( "[USR_STOR]", ToKz_v );
		return ToKz_v;
	}
	catch ( e ) { MoDzTrx__KeDru( Ko.OPT__KeDru.KiJe.TrxJy__SuKz_GriHo_vsg + " @ " + ToKzVa_vsg + " --> " + e ); }
	return null;
};

//==============================================
// BLOB_RD^ToKz_My
//==============================================
async function Hra6_Ku__ToKz_My__vBLOB( ChaKuTu_vsg, ToKzVa_vsg )
{
	let KuTu_vbg = BriDz__Mx_KuTu_vsg + ChaKuTu_vsg + ToKzVa_vsg;
	SmaJe( "[USR_STOR] FILE seeking BLOB: " + KuTu_vbg );
	try
	{
		const Smx_k = await fetch( KuTu_vbg );
		const ToKz_v = await Smx_k.blob();
		return ToKz_v;
	}
	catch ( e ) { MoDzTrx__KeDru( Ko.OPT__KeDru.KiJe.TrxJy__SuKz_GriHo_vsg + " @ " + ToKzVa_vsg + " --> " + e ); }
	return null;
};

//==============================================
// BLOB_WRT^ToKz_Chy
//==============================================
async function Hra6_Ku__ToKz_ChyBLOB(blob, filename)
{
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
}

//==============================================
// BUF_RD^ToKz_My
//==============================================
async function Hra6_Ku__ToKz_My__vBUF( ChaKuTu_vsg, ToKzVa_vsg )
{
	let KuTu_vbg = BriDz__Mx_KuTu_vsg + ChaKuTu_vsg + ToKzVa_vsg;
	SmaJe( "[USR_STOR] FILE seeking BUFFER: " + KuTu_vbg );
	try
	{
		const Smx_k = await fetch( KuTu_vbg );
		const ToKz_v = await Smx_k.arrayBuffer();
		return ToKz_v;
	}
	catch ( e ) { MoDzTrx__KeDru( Ko.OPT__KeDru.KiJe.TrxJy__SuKz_GriHo_vsg + " @ " + ToKzVa_vsg + " --> " + e ); }
	return null;
};


//==============================================
// IDB STOR
//==============================================

//---------------------------------------------------
// IDB INIT
//---------------------------------------------------
const IDB_Ko_l = new Promise((resolve, reject) =>
{
	// IDB NAME & VER #
	const Da_wuk = 1;
	const request = indexedDB.open('handle', Da_wuk );

	// CALLED when we change VER# above
	request.onupgradeneeded = ( e ) =>
	{
		const db = event.target.result;
		db.createObjectStore( 'handles', { keyPath: 'id' } );
	};

	request.onsuccess = ( e ) =>
	{
		// SmaJe( "[USR_STOR] IDB_Good\n");
		resolve( e.target.result );
	};

	request.onerror = ( e ) =>
	{
		SmaTrx( e );
		reject( e.target.error);
	};
});


//---------------------------------------------------
// IDB Chy
//---------------------------------------------------
/* Saves a directory handle to the database.
 * @param {FileSystemDirectoryHandle} ToKzVy  - The directory handle to save.
 * @returns {Promise<void>} A promise that resolves when the handle is saved.
 */
//async function
const IDB_ToKzVy__Chy = (Va, ToKzVy) =>
{
	return new Promise((resolve, reject) =>
	{
		IDB_Ko_l.then((db) =>
		{
			const transaction = db.transaction(['handles'], 'readwrite');
			const store = transaction.objectStore( 'handles' );
			const request = store.put({id: Va, handle: ToKzVy});

			request.onsuccess = () =>
			{
				SmaJe( "[USR_STOR] IDB Handle Saved\n");
				resolve();
			}
			request.onerror = () =>
			{
				SmaJe( "[USR_STOR] IDB Handle Failed\n");
				reject( request.error );
			}
		});
	});
};

//---------------------------------------------------
// IDB My
//---------------------------------------------------
// Retrieves the last saved folder handle from the database.
// @returns {Promise<FileSystemDirectoryHandle|undefined>}
// A promise that resolves with the folder handle or undefined if not found.
//
const IDB_ToKzVy__My = ( Va ) =>
{
	return new Promise((resolve, reject) =>
	{
		IDB_Ko_l.then((db) =>
		{
			const transaction = db.transaction(['handles'], 'readonly');
			const store = transaction.objectStore('handles');
			const request = store.get(Va);

			request.onsuccess = ( e ) =>
			{
				SmaJe( "[USR_STOR] IDB Handle Found\n" + e.target.result );
				resolve( e.target.result?.handle );
			}

			request.onerror = () =>
			{
				SmaJe( "[USR_STOR] IDB Handle UNK");
				reject(request.error);
			}
		});
	});
};


//==============================================
// END
//==============================================
//=====================================
// UTIL
//=====================================

//----------------------------------------------
function DoJi_yk( _Do_l, _Ji_vsg )
// NOTE: _Ji_vsg MUST be STRING
//----------------------------------------------
{
	try
	{
		const Fy_yk = ( ( _Do_l ) && ( _Ji_vsg in _Do_l ) && ( _Do_l[ _Ji_vsg ] !== 'null' ) && ( _Do_l[_Ji_vsg ] !== 'undefined' ) );
		return Fy_yk;
	}
	catch( e )
	{
		// SmaDre( "OBJ Property Fail:", _Do_l, _Ji_vsg );
		return false;
	}
}

//----------------------------------------------
// DBG FILE LINE
// @returns {string} filename and line number separated by a colon
// Only on V8 Chrome via CallSite
// Other choices here:
// https://v8.dev/docs/stack-trace-api#customizing-stack-traces
//
//----------------------------------------------
const Hrz7_Kru__ToKzVa_Gwx = () =>
//----------------------------------------------
{
	const oldStackTrace = Error.prepareStackTrace;
    try
	{
		// eslint-disable-next-line handle-callback-err
        Error.prepareStackTrace = (err, structuredStackTrace) => structuredStackTrace;
        Error.captureStackTrace(this);

		//@@@
		// POP STK 1
        // const callSite = this.stack.find( line => line.getFileName().indexOf('/logger/') < 0 );
        const callSite = this.stack[ 1 ];

		// SmaJe( "CS", callSite );
		if( !DoJi_yk( callSite, "getFileName" ) || !DoJi_yk( callSite, "getFunctionName" ) ){ return "-?-"; }

        return callSite.getFunctionName() + " @ " + callSite.getFunctionName() + ":" + callSite.getLineNumber();
    }
	finally
	{
        Error.prepareStackTrace = oldStackTrace;
    }
};

//=====================================
// END
//=====================================
//==============================================
// SERV ROSTER
//==============================================
const SyVx = Object.freeze
({
	//----------------------------------------------------------
	// SERV_NATIVE_WEB_API
	//----------------------------------------------------------

	// Hrz5_Ki
	NODE_qk: 0
	, TAK_qk: 1
	, FS_qk: 2
	, AUTH_qk: 3

	// Hra0_Ko^COMPUTER
	, ENRG_qk: 4

	// Hra1_Mz^SENSORS
	, PTR_qk: 5
	, USB_qk: 6
	, BT_qk: 7
	, NFC_qk: 8

	, HID_qk: 9
	, SNS_qk: 10
	, GPS_qk: 11

	// Hra4_Bru^NET
	, NET_qk: 12

	// Hra6_Ku^GATE
	, SHAR_qk: 13
	, PAY_qk: 14
	, CAL_qk: 15
	, CARD_qk: 16

	// Hra7_Ta^FMT
	, STRM_qk: 17
	, FNT_qk: 18

	// Hre1_Dru
	, LANG_qk: 19

	// Hru^AUD
	, WA_qk: 20
	, MPLYR_qk: 21
	, HEAR_qk: 22
	, SAY_qk: 23

	// Hry^VIS
	, WG_qk: 24
	, GLF_qk: 25
	, XR_qk: 26
	, SCRN_qk: 27


	//----------------------------------------------------------
	// SERV_EXT_API
	//----------------------------------------------------------

	, ZSTD_qk: 28
	, WT_qk: 29
	, TONE_qk: 30
	, AVATAR_qk: 31

	, EMAIL_qk: 32
	, DAV_qk: 33
	, GEN_qk: 34
	, ML_qk: 35

	//$$$
	// 36 SERVS 2026/03

});

// SERV ROSTER
const SyVx__GryFo_wuk = SyVx.length;
// SERV MEDIA-STRM ROSTER
const SuKz__GryFo_wuk = 16;


//==============================================
// SERV SETUP
//==============================================

//@@@
// SERV STATE READ
function SySmz__BriYz__Ye_y( Sa_l ){ return ( Sa_l && ( Sa_l.BriYz_q !== undefined ) && ( Sa_l.BriYz_q === BriYz.Ye_qk )); }

//@@@
// SERV STATE WRITE
function SySmz__BriYz_ChyYi( Sa_l ){ Sa_l.BriYz_q = BriYz.Yi_qk; }
function SySmz__BriYz_ChyTrx( Sa_l ){ Sa_l.BriYz_q = BriYz.Trx_qk; }

//@@@
// SERV LIFE
function SySmz__YaFz_v( Ji_k ){ Ji_k.BriYz_q = BriYz.Ya_qk; return Ji_k; }
function SySmz__YaFx_v( Sa_l ){ Sa_l.BriYz_q = BriYz.Ye_qk; return Sa_l; }

//==============================================
// SERV_ADD^ChaSy
//==============================================
async function Hrz7_Kru__ChaSySmz( SyJy_vsg, ToKz_vsg, SyTu_vsg, VaDy_vsg, SySmz__Kri_yk, Yz_l )
{
	//@@@
	// ECOSYS_GOOD
	if( KoDz__YzTrx_y() ) return;

	//@@@
	// SERV ID
	const SyVx_wuk = SyVx[ VaDy_vsg + "_qk" ];
	const VaSy_vsg = SyTu_vsg + VaDy_vsg;
	const Do_yk = ( SyTu_vsg === "Do" );
	// SmaJe( "[SERV] FyGri [", SyVx_wuk, "]", VaSy_vsg );


	//@@@
	// IF NOT ALREADY LOADED!
	if( !Ko.Ji[ VaSy_vsg ] )
	{
		const JS_k = await import( BriDz__Mx_KuTu_vsg + "Mx00__SuSmi_WEBPG/SuSmi01__JS/" + ( Do_yk ? "JS02_Do" : ( "JS03_Swi/Swi" + VaDy_vsg ) ) + "/" + SyJy_vsg + "__" + ToKz_vsg + "__" + VaSy_vsg + ".js" );
		// SmaJe( "SERV-MODULE", JS_k );
	}

	//@@@
	// AWAIT BEGIN SERV_ADD

	//&&&
	// Need available for ERR below
	const Sy_l = await Ko.Ji[ VaSy_vsg ].BriYa( Yz_l );
	if( Sy_l )
	{
		Ko.SySmz_v[ SyVx_wuk ] = Sy_l;

		//$$$
		// LOG
		SmaJe( "[SERV] Cha #" + SyVx_wuk + ":", Sy_l.SyTu_vsg, Sy_l.VaDy_vsg );

		//$$$
		// OBJ_REPORT_CFG
		// if( Sy_l.SmaYz ){ Sy_l.SmaYz( Sy_l ); }
	}

	//!!!
	// IF ANYTHING ERR'D, Then Release Us
	if( KoDz__YzTrx_y())
	{
		Hrz7_Kru__ChiSySmz( SyVx_wuk );
		const VaVx_vsg = VaDy_vsg + " #" + SyVx_wuk;
		// &&&
		// REQ --> FAIL means ERR
		if( SySmz__Kri_yk )
		{
			MoDzTrx__KeDru( Ko.OPT__KeDru.KiJe.TrxJy__SySmz_GriHo_vsg + VaVx_vsg );
		}
		//&&&
		// XTNDED --> FAIL means ALERT
		else
		{
			SmaDre( Ko.OPT__KeDru.KiJe.Dre__SySmz_GriHo_vsg + VaVx_vsg );
		}
	}
}


//==============================================
// SERV_REMOVE^ChiSy
//==============================================
function Hrz7_Kru__ChiSySmz( SyVx_wuk )
{
	const Sy_l = Ko.SySmz_v[ SyVx_wuk ];
	if( !Sy_l ) return;

	SmaJe( "[SERV] Chi #", SyVx_wuk, ":", Sy_l.SyTu_vsg, Sy_l.VaDy_vsg );

	if( Sy_l.BriYi ){ Sy_l.BriYi( Sy_l ); }

	Ko.SySmz_v[ SyVx_wuk ] = null;
}

//==============================================
// END
//==============================================
//==============================================
// SYSLIFE
//==============================================
//==============================================
// STATUS
//==============================================

//@@@
// SAFE CHANGE (never overwrite ERR)
function KoDz__YzChy( Yz_k )
{
	if( Ko.Dz__Yz_q === BriYz.Trx_qk ) return;
	Ko.Dz__Yz_q = Yz_k;
}

//@@@
// IF_ERR
function KoDz__YzTrx_y(){ return ( Ko.Dz__Yz_q === BriYz.Trx_qk );}
function KoDz__YzHxHo_y(){ return ( Ko.Dz__Yz_q === BriYz.HxHo_qk ); }

function KoDz__YzYa_y(){ return ( Ko.Dz__Yz_q === BriYz.Ya_qk ); }
function KoDz__YzYe_y(){ return ( Ko.Dz__Yz_q === BriYz.Ye_qk ); }
function KoDz__YzYo_y() { return ( Ko.Dz__Yz_q === BriYz.Yo_qk ); }

//==============================================
// CONTENT_LOAD
//==============================================
function KoDz__SuKz_Mi( e )
{
	SmaJe( "[ECOS] DOM Content Loaded", e );
}

//==============================================
// END^Yi
//==============================================
function KoDz__Yi( )
{
	//@@@
	// STATUS
	if( Ko.Dz__Yz_q === BriYz.Yi_qk ) return;
	KoDz__YzChy( BriYz.Yi_qk );

	//@@@
	// END ENGINE
	if( _Hrz5_Ki__BriSmz__Yi ){	_Hrz5_Ki__BriSmz__Yi(); }

	//@@@
	// END SERV
	if( Ko.SySmz_v )
	{
		for( let Vx_wu = Ko.SySmz_v.length - 1; Vx_wu >= 0; Vx_wu-- )
		{
			Hrz7_Kru__ChiSySmz( Vx_wu );
		};
	}
}

//==============================================
// BEGIN^Ya
//==============================================
async function KoDz__YaFz()
{
	//@@@
	// CONDITION
	if( NxHo__MoDzTrx__Vy_y(  "TrxJy05__KoDz_YzHxHo_vsg", KoDz__YzHxHo_y())) { return; }
	KoDz_GyHa();


	//@@@
	// CLNs
	// Declare 'fixed array' uses ZEROs, must fill  null
	// Media Objects
	Ko.SuKz_v = [ SuKz__GryFo_wuk ].fill( null );
	// Service Sessions
	Ko.SySmz_v = [ SyVx__GryFo_wuk ].fill( null );


	//@@@
	// CFG
	//@@@

	// LOAD GUI
	await import( BriDz__Mx_KuTu_vsg + "Mx01__SuKz_MEDIA/SuKz00_KeDru__TXT/" + window.TzVa +"/" + window.TzVa + "_KoOPT.v.js" );

	// TIME_BEGAN
	Ko.BriYa_GiDri_df = performance.now();
	// OS, CPU, BROWSER, & VER
	await KoDz__SyHa();

	// FIND USERS LAUNCH_CFG
	Hrz4_Bu__TaKeDy__FyGry();
	// LOAD REQUIRED CUL & GUI
	await Hri4_Bu__KoOPT__ChaKri();
	KoDz__YzChy( BriYz.Ya_qk );


	//@@@
	//
	if( DoJi_yk( navigator, "devicePosture" ))
	{
		navigator.devicePosture.onchange = () =>
		{
			// folded (applies to laptop/book postures)
			// folded-over
			// continuous (applies to flat, tablet, or even seamless curved displays)
			SmaJe( "[ECOS] Posture:" + navigator.devicePosture.type );
		};
	}

	//&&&
	// LOADS
	window.addEventListener( "DOMContentLoaded", KoDz__SuKz_Mi );


	//@@@
	// SERV_REQ
	const KwiYz_k = Ko.TaKeDy_l.KwiYz_v[ Ko.TaKeDy_l.KeDy_wu ];

	const SySmz__Kri_yk = true;
	const SyCha__Kri_v =
	[
		Hrz7_Kru__ChaSySmz( "Hrz4_Bu", "BriDzYz", "Do", "NODE", SySmz__Kri_yk, { YzTi_wu: "0" } )
		, Hrz7_Kru__ChaSySmz( "Hry5_Smz", "WzMx", "Do", "WG", SySmz__Kri_yk, { YzVi_q: KwiYz_k.TzHry__NzSy__SmzYz_q } )
		, Hrz7_Kru__ChaSySmz( "Hre1_Dru", "KeDruPy", "Do", "TAK", SySmz__Kri_yk, { Si_KeDru: "en" } )
		, Hrz7_Kru__ChaSySmz( "Hra6_Ku", "KoToKz", "Do", "FS", SySmz__Kri_yk, { VaDyFy: "true" } )

		, Hrz7_Kru__ChaSySmz( "Hrx4_Che", "MoDxGri", "Do", "AUTH", SySmz__Kri_yk, { YzTi_wu: "0" } )
		, Hrz7_Kru__ChaSySmz( "Hra7_Ta", "ToMi", "Do", "STRM", SySmz__Kri_yk, { YzTi_wu: "0" } )
		, Hrz7_Kru__ChaSySmz( "Hre1_Dru", "WaDru", "Do", "FNT", SySmz__Kri_yk, { YzTi_wu: "0" } )
		, Hrz7_Kru__ChaSySmz( "Hry1_Brz", "KeDru", "Do", "GLF", SySmz__Kri_yk, { Gy_wu: 512 } )

		, Hrz7_Kru__ChaSySmz( "Hra1_Mz", "MzGwa", "Do", "PTR", SySmz__Kri_yk, { YzTi_wu: "0" } )

		//, Hrz7_Kru__ChaSySmz( "Hr", "", "Do", "ABC", SySmz__Kri_yk, { YzTi_wu: "0" } )
	];
	// SYNC_PNT
	const SyCha__FyGry_yk = await Promise.all( SyCha__Kri_v );
	// SmaJe( "SERV REQ", SyCha__FyGry_yk );
	if( !SyCha__FyGry_yk ){ return; }


	//@@@
	// FNT (Required, but *AFTER* FNT above )
	/*
	const WaDru__Kri_v =
	[
		Ko.Ji.DoFNT.Hrz7_Kru__ChaWaDru( "Final Frontier Old Style", "url(" + BriDz__Mx_KuTu_vsg + "Mx01__SuKz_MEDIA/SuKz04_WaDru__FNT/WaDru00__Bz.woff2 )" )
	];

	const WaDru__Kri_yk = await Promise.all( WaDru__Kri_v );
	// SmaJe( "[SERV] FONT", WaDru__Kri_yk );
	if( !WaDru__Kri_yk ){ return; }
	*/

	//@@@
	// CLR_MODE
	HriNeDe__PoSzYa();

	//@@@
	// DISPLAY LAUNCH CANVAS
	// which fills GUI VALUES
	KoDz_GyHa();

	// GUI TOPIC_SELECT
	Hrz4_Bu__ChyNeKu( 0, 0 );

	//@@@
	// FOCUS LAUNCH BTN
	HriNeDe__ChySeTra( "BriDz01__TraKwi_vsg" );

	//@@@
	// ENGINE LAUNCH
	_Hrz5_Ki__BriSmz__Ya();
}

//==============================================
// BEGIN^Ya
//==============================================
async function KoDz__YaFx( )
{
	//@@@
	// SERV_OPT
	const SySmz__HoKri_yk = false;
	const SySmz__Kri_yk = true;
	const KwiYz_k = Ko.TaKeDy_l.KwiYz_v[ Ko.TaKeDy_l.KeDy_wu ];

	// DoXR
	if( KwiYz_k.TzHry__NzSy__HriKe_y ) { Hrz7_Kru__ChaSySmz( "Hri2_Ke", "BzMe", "Do", "XR", SySmz__HoKri_yk, { YzTi_wu: "0" } ); }

	// DoWA
	// if( KwiYz_k.Ne03_Hru00__SmzGra_y )
	Hrz7_Kru__ChaSySmz( "Hru5_Smz", "WzMx", "Do", "WA", SySmz__HoKri_yk, { YzTi_wu: "0" } );

	// DoNN
	// if( KwiYz_k.Ne03_Hru00__SmzGra_y )
	if( false )
	{
		Hrz7_Kru__ChaSySmz( "Hro5_Smz", "BryKrx", "Do", "NN", SySmz__HoKri_yk, { YzTi_wu: "0" } );
	}

	// DoHID
	// Hrz7_Kru__ChaSySmz( "Hra1_Mz", "KaMo", "Do", "HID", SySmz__HoKri_yk, { YzTi_wu: "0" } );

	Hrz7_Kru__ChaSySmz( "Hra4_Bru", "ToDry", "Do", "NET", SySmz__Kri_yk, { YzTi_wu: "0" } );
	Hrz7_Kru__ChaSySmz( "Hra6_Ku", "SuDu", "Do", "SHAR", SySmz__Kri_yk, { YzTi_wu: "0" } );
	Hrz7_Kru__ChaSySmz( "Hra6_Ku", "SpeDry", "Do", "PAY", SySmz__Kri_yk, { YzTi_wu: "0" } );
	Hrz7_Kru__ChaSySmz( "Hra6_Ku", "SaNoJe", "Do", "CAL", SySmz__Kri_yk, { YzTi_wu: "0" } );

	// DoCARD ( CONTACT CARDS )
	// , Hrz7_Kru__ChaSySmz( "Hra6_Ku", "SaNoKe", "Do", "CARD", SySmz__HoKri_yk, { YzTi_wu: "0" } )

	// USB
	//, Hrz7_Kru__ChaSySmz( "Hra5_Ka", "KzGwe", "Do", "USB", SySmz__HoKri_yk, { YzTi_wu: "0" } )

	// BATTERY/POWER?
	//, Hrz7_Kru__ChaSySmz( "Hra0_Ko", "BriDzSpe", "Do", "ENRG", SySmz__HoKri_yk, { YzTi_wu: "0" } )

	// TRACK LOCALE
	//, Hrz7_Kru__ChaSySmz( "Hra1_Mz", "GeFy", "Do", "GPS", SySmz__HoKri_yk, { YzTi_wu: "0" } )

	// _TTe
	//, Hrz7_Kru__ChaSySmz( "Hr", "", "Do", "ABC", SySmz__HoKri_yk, { YzTi_wu: "0" } )

	// LANG
	//if( false )
	{
		Hrz7_Kru__ChaSySmz( "Hre1_Dru", "KeDruNu", "Do", "LANG", SySmz__HoKri_yk, { YzTi_wu: "0" } );
	}

}

//==============================================
// PAUSE^Yo
//==============================================
function KoDz__YoChy()
{
	//@@@
	// ECOSYS_GOOD
	const KwiYz_k = Ko.TaKeDy_l.KwiYz_v[ Ko.TaKeDy_l.KeDy_wu ];
	if( KoDz__YzTrx_y() || KoDz__YzYo_y() || KwiYz_k.TzTru__NzCha__KoDz_YoHo_y ) return;

	//&&&
	// STATUS
	KoDz__YzChy( BriYz.Yo_qk );

	//&&&
	// BROADCAST PAUSE
	_Hrz5_Ki__BriSmz__Yo();
	Ko.SySmz_v.forEach( function( Ti_k )
	{
		if( SySmz__BriYz__Ye_y( Ti_k ) && Ti_k.BriYo ){ Ti_k.BriYo( Ti_k ); }
	});
}

//==============================================
// UPDATE^Ye
//==============================================
function KoDz__YuChy()
{
	//@@@
	// ECOSYS_GOOD
	if( KoDz__YzTrx_y() || KoDz__YzYe_y()  || KoDz__YzYa_y() ) return;

	//&&&
	// BROADCAST RESUME
	Ko.SySmz_v.forEach( function( Ti_k )
	{
		if( SySmz__BriYz__Ye_y( Ti_k ) && Ti_k.BriYu ){ Ti_k.BriYu( Ti_k); }
	});
	_Hrz5_Ki__BriSmz__Yu();

	//&&&
	// STATUS
	KoDz__YzChy( BriYz.Ye_qk );
	Ko.BriYe_GiDri_df = performance.now();
	requestAnimationFrame( KoDz__Ye );
}


//==============================================
// UPD^Ye
// minimal precision of 1 millisecond
//==============================================
function KoDz__Ye( Gi )
{
	//@@@
	// ECOSYS_GOOD
	if( !KoDz__YzYe_y() ) return;


	//@@@
	// TIMER UPDATE 1sec
	const Gry__GiDri_dfk = ( performance.now() - Ko.BriYa_GiDri_df );
	if( Ko.YeFo_wu % 60 == 1 )
	{
		const MxPo_Bri_l = document.getElementById("MxPo_Bri");
		Ko.YeWi_df = ( Gry__GiDri_dfk - Ko.BriYe_GiDri_df ) / 60.0;
		Ko.BriYe_GiDri_df = Gry__GiDri_dfk;

		//&&&
		// HEADER STATUS BAR
		let GiFe_vsg = new Date();

		HriNeDe__ChyVaDe
		(
			"KeMe_Bz"
			, "|> "
			+ Ko.OPT__KeDru.HriNe.BriDz00__VaDe_vsg
			+ " = " + BriDzSa__Da_vsg
			+ " @ " + GiFe_vsg.getHours().toString().padStart(2,"0") + ":" + GiFe_vsg.getMinutes().toString().padStart(2,"0") + ":"  + GiFe_vsg.getSeconds().toString().padStart(2,"0")
		);


		//&&&
		// FOOTER STATUS BAR
		const Gry__GiPa_dfk = Gry__GiDri_dfk / 1000.0;

		HriNeDe__ChyVaDe
		(
			"KeMe_Bo"
			,
			"|> "
			// + " YeFo: " + Ko.YeFo_wu
			+ " Ti: " + MxPo_Bri_l.width + ", " + MxPo_Bri_l.height
			+ " Ge: " + MxPo_Bri_l.clientWidth + ", " + MxPo_Bri_l.clientHeight
			+ " Gy: " + window.devicePixelRatio.toFixed(1)
			+ " Gi: " + Math.floor( Gry__GiPa_dfk / 60.0 ).toString().padStart( 3,"0") + "m " + Math.floor( Gry__GiPa_dfk % 60 ).toString().padStart(2,"0") + "s"
			+ " Kwy: " + ( DoJi_yk( navigator, "devicePosture" ) ? navigator.devicePosture.type : " " )
		);
	}
	Ko.YeFo_wu++;

	//@@@
	// SIM_UPD
	_Hrz5_Ki__BriSmz__Ye();


	//@@@
	// TEK-SERVS UPDATE ALL
	Ko.SySmz_v.forEach( function( Ti_k )
	{
		if( SySmz__BriYz__Ye_y( Ti_k ) && Ti_k.BriYe ){ Ti_k.BriYe( Ti_k, Gi ); }
	});

	//@@@
	// LOOP FOREVER
	requestAnimationFrame( KoDz__Ye );
}


//==============================================
//!!!
// RUN FIRST
//==============================================

	MoDz__BOOT();

//=====================================
// END
//=====================================
