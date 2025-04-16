//===================================
// SyDz_Ya
//===================================

//==============================================
// CTX
// Var Kept in FN sections for clarity
//==============================================

//==============================================
// JoKu_TOPIC
//==============================================

//-------------------------------------------------
// TOPIC & THOTS
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

function JoNz__Chy( n )
{
	JoNz__Fe_wu = n;

	// 	let i;
	// let x = document.getElementsByClassName("TOUR__TaJaPo");

	// if (n > x.length) {slideIndex = 1}
	// if (n < 1) {slideIndex = x.length}
	// for (i = 0; i < x.length; i++)
	// 	{
	// 		x[i].style.display = "none";
	// 	}
	// 	x[slideIndex-1].style.display = "block";

	// FN( 'JoKz_BzVa' );
	// FN( 'JoKz_KeDru' );
	// FN( 'JoKz_ToHry' );
	// FN( 'JoKz_SuKz' );


	//@@@
	// RESET SHADER
	Fi__GiDri_wf = 0;
	Fe__GiPa_wf = 0;

	JoJz__ChyYe();
}

//@@@
// INCREMENT TOPIC/THOT
function JoNz__ChyZo( Zo_wi )
{
	JoNz__Fe_wu += Zo_wi;
	if( JoNz__Fe_wu < 0 ){ JoNz__Fe_wu = JoNz__Fo_wu - 1; }
	else if( JoNz__Fe_wu >= JoNz__Fo_wu ){ JoNz__Fe_wu = 0; }

	JoJz__ChyYe();
}

function JoJz__ChyZo( Zo_wi )
{
	JoJz__Fe_wu += Zo_wi;
	if( JoJz__Fe_wu < 0 ){ JoJz__Fe_wu = JoJz__Fo_wu - 1; }
	else if( JoJz__Fe_wu >= JoJz__Fo_wu ){ JoJz__Fe_wu = 0; }

	JoJz__ChyYe();
}

//@@@
// THOT_UPDATE
function JoJz__ChyYe()
{
	JoJiJa__Fe_wu = JoJz__Fe_wu;
	Hry5_Smz__KriYe = true;

	document.getElementById('VyYz').innerHTML = `Deck: ${JoNz__Fe_wu}/${JoNz__Fo_wu} Slide: ${JoJz__Fe_wu}/${JoJz__Fo_wu} ` + ( JoTra_y ? "Play" : "Pause" ) ;

	// RESET FADEIN
	Hry5_Smz__ChyBriYa( 'ToKro' );
	Hry5_Smz__ChyBriYa( 'ToMi' );
}


//==============================================
// Hre1_Dru CULTURE
//==============================================

//-------------------------------------------------
// LANG/LOCALE
//-------------------------------------------------
let KeDru_l = 'en';
let KuDru_l = '?';

let VyBzVa_vutf8 = 'ESSENCE LAB';
let VyDa_vutf8 = 'Ver: 4.19';

let BriDzToMi_vutf8 = 'Get ESSENCE';
let BriDzToKro_vutf8 = 'About ESSENCE';
let JoNzVa_vutf8 = 'TOPICS';
let JoJzVa_vutf8 = 'SLIDES';


let BriDz__ToFz_v;

//-------------------------------------------------
// LOAD JSON
//-------------------------------------------------
const ToKz__JSON_v = () =>
{
	fetch( '../SuSmi03__KeDru/KeDru.en.json' )


	.then((res) => res.json())
	.then((data) => {
	  return data;
	 })

	.catch((err) => console.error('Error:', err ));
	return null;
};


//-------------------------------------------------
// LOAD LANG DEFAULTS
//-------------------------------------------------
function Hre1_Dru__ChyKeDru()
{
	//@@@
	// CHG LANG
	console.log( "Lang: " + KeDru_l );
	console.log( "Country: " + KuDru_l );


	//&&&
	// TEXT_DIR
	// Set text direction
	const rtlLanguages = ['ar', 'he', 'fa'];
	if( rtlLanguages.includes( KeDru_l ) )
		{ document.body.dir = 'rtl'; }
	else { document.body.dir = 'ltr'; }


	//&&&
	// DATETIME
	const GiFe_l = Date.now();
	const GiKwu_FeDx = new Intl.DateTimeFormat(navigator.languages).format(GiFe_l);
	console.log( "Date: " + GiKwu_FeDx );

	var d = new Date();
	const GiVuKe = d.toLocaleTimeString();
	console.log( "Time: " + GiVuKe );


	document.getElementById('JoNzVa').innerHTML = '&#x1F4D2' + JoNzVa_vutf8;
	document.getElementById('JoJzVa').innerHTML = '&#x1F4C4' + JoJzVa_vutf8;
	document.getElementById('KeDruVa').innerHTML = `&#x1F310 ${KeDru_l}_${KuDru_l}`;

	document.getElementById('VyGi').innerHTML = `${GiKwu_FeDx} ${GiVuKe}`;


	//&&&
	// VER
	document.getElementById('VyBzVa').innerHTML = `<b>${VyBzVa_vutf8}</b>`;
	document.getElementById('VyDa').innerHTML = `${VyDa_vutf8} ${GiKwu_FeDx}`;

	//@@@
	// ITER UNIQUE IDs & ASSIGN
//	BriDz__ToFz_v = ToKz__JSON_v();

	if( BriDz__ToFz_v )	console.log( BriDz__ToFz_v );

	//@@@
	// ITER DECK COUNT


}


//==============================================
// NODE
//==============================================


//-------------------------------------------------
// NODE
//-------------------------------------------------
// USER FACING
let Ko__HrzBzVa_vutf8 = "Unknown";
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
		Ko__HrzBzVa_vutf8 = navigator.userAgentData.platform;
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
		// Ko__HrzBzVa_vutf8
		// MOST ANDROID shows LINUX
		if( NAV_NODE.includes("ANDROID") )
		{Ko__HrzBzVa_vutf8 = "Android"; Ko__HrzByVy_vutf8 = "DRD"; Ko__ToKzJy_vutf8 = "apk"; }
		else if( NAV_NODE.includes("LINUX") || NAV_NODE.includes("X11")  || NAV_NODE.includes("WAYLAND") )
		{Ko__HrzBzVa_vutf8  = "Linux"; Ko__HrzByVy_vutf8 = "LNX"; Ko__ToKzJy_vutf8 = "elf"; }
		else if( NAV_NODE.includes("IPHONE") || NAV_NODE.includes("IPAD") )
		{Ko__HrzBzVa_vutf8  = "iOS"; Ko__HrzByVy_vutf8 = "IOS"; Ko__ToKzJy_vutf8 = "ipa"; }
		else if( NAV_NODE.includes("MAC") )
		{Ko__HrzBzVa_vutf8  = "Mac"; Ko__HrzByVy_vutf8 = "MAC";  Ko__ToKzJy_vutf8 = "app"; }
		else if( NAV_NODE.includes("WINDOWS") )
		{Ko__HrzBzVa_vutf8  = "Windows"; Ko__HrzByVy_vutf8 = "WIN"; Ko__ToKzJy_vutf8 = "exe"; }

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
	// Smx
//	document.getElementById('NODE_Detected').innerHTML = "<i>Click to Download *this machine's* detected Ko__HrzByVy_vutf8: " + NODE + "</i>";
	document.getElementById('VyKo').innerHTML = `Running: <b>${Ko__HrzBzVa_vutf8}_${Ko__KaBz_vutf8}</b>`;

	//@@@
	// LOG
	console.log( `Node: ${Ko__HrzBzVa_vutf8}_${Ko__KaBz_vutf8}` );
}


//==============================================
// Hry5_Smz
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
		MxSi.style.width = MxSi.clientWidth;
		MxSi.style.height = MxSi.clientHeight;

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
	document.getElementById('JoTraYz').innerHTML = JoTra_y ? `&#x23F8` : `&#x23F5`
}

function Hry5_Smz__ChyBriYa( Vy )
{
	var Ti_l = document.getElementById( Vy );
	Ti_l.style.animation = 'none';
	Ti_l.offsetHeight; /* trigger reflow */
	Ti_l.style.animation = null;
}

//==============================================
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

	document.getElementById('BriDzToMi').innerHTML = ( ToMi_y ? `&#x1F4E5 ${BriDzToMi_vutf8}` : `&#x1F4E4 ${BriDzToKro_vutf8}` );

	document.getElementById('ToKro').style.display= ToMi_y ? 'none' : 'block';
	document.getElementById('ToMi').style.display= ToMi_y ? 'block' : 'none';

	JoJz__ChyYe();
}


//==============================================
// MoMiKz
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
// Hrz5_Ki
//==============================================

//-------------------------------------------------
function MENU_Toggle()
//-------------------------------------------------
{
  var x = document.getElementById("VyTaNe");
  if (x.className === "Dx__NAVI") {
    x.className += " responsive";
  } else {
    x.className = "Dx__NAVI";
  }
}

//-------------------------------------------------
// APP INIT
// ! ONLY Global Func to Run @ Startup
(function BriDz__Ya()
//-------------------------------------------------
{
	//&&&
	// NODE
	BriDz__Ha()

	//&&&
	// CULTURE STARTUP
	KeDru_l = navigator.language.split("-")[0]
	KuDru_l = navigator.language.split("-")[1]
	if (KuDru_l == ""){ KuDru_l = "?"; }


	//&&&
	// STATUS
	Hre1_Dru__ChyKeDru();
	JoNz__Chy(0);
	Hry5_Smz__JoTra_ChyDry();
	Hry5_Smz__ToMi_ChyDry();

	//&&&
	// SPATIAL RUN
	Hry5_Smz__KriYe = true;
	Hry5_Smz__ChyYe();
}
)();


//===================================
// SyDz_Yi
//===================================