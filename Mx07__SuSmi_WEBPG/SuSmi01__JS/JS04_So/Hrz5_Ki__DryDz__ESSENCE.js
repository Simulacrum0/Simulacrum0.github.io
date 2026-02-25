//===================================
// SyDz_Ya
//===================================

//==============================================
// Hry5_Smz SPATIAL
//==============================================

//-------------------------------------------------
// WEBGL
//-------------------------------------------------
function Hry5_Smz__Ya()
{
	const gl = MxSi.getContext( 'webgl2' );
	if ( !gl )
	{
		SmaTrx( 'Browser OUT of DATE: WebGL2 is Required! Please Update.' );
		return;
	}

	gl.clearColor( 0.0, 0.0, 0.0, 1.0 );
	return gl;
}

//-------------------------------------------------
// VERTEX
//-------------------------------------------------
const JiJa__Ge_vkutf8 = `#version 300 es
    in vec4 Ge_wf4;
    void main(void)
	{ gl_Position = Ge_wf4; }
`;

//-------------------------------------------------
// LOAD SHADER
//-------------------------------------------------
function Hrz6_Tro__ChyJiKz( Va_vkutf8, gl, type, JiSi_vkutf8 )
{
	const JiKz_l = gl.createShader( type );
	gl.shaderSource( JiKz_l, JiSi_vkutf8 );
	gl.compileShader( JiKz_l );

	if ( !gl.getShaderParameter( JiKz_l, gl.COMPILE_STATUS ) )
	{
		console.log( "Si: " + Va_vkutf8 );
		console.error( 'GLSL_Err: ', gl.getShaderInfoLog( JiKz_l ) );
		gl.deleteShader( JiKz_l );
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

	gl.attachShader( JiJa_l, vs );
	gl.attachShader( JiJa_l, fs );
	gl.linkProgram( JiJa_l );

	if ( !gl.getProgramParameter( JiJa_l, gl.LINK_STATUS ) )
	{
		console.log( "Si: " + Va_vkutf8 );
		console.error( 'WEBGL_Link: ', gl.getProgramInfoLog( JiJa_l ) );
		return null;
	}

	return JiJa_l;
}

//-------------------------------------------------
// VERT BUFFER
//-------------------------------------------------
function KuTo__QUAD_Trz( gl )
{
	const Ge_wf2 = new Float32Array( [
		-1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0
	] );

	const KuTo__QUAD_vwf2 = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, KuTo__QUAD_vwf2 );
	gl.bufferData( gl.ARRAY_BUFFER, Ge_wf2, gl.STATIC_DRAW );

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
const MxSi = document.getElementById( 'VyMxSi' );
const gl = Hry5_Smz__Ya();
const KuTo__QUAD_vwf2 = KuTo__QUAD_Trz( gl );
const VS_wik = Hrz6_Tro__ChyJiKz( "QUAD_VERT", gl, gl.VERTEX_SHADER, JiJa__Ge_vkutf8 );

//-------------------------------------------------
// HUE_SHIFT_SuTy
//-------------------------------------------------
const JoSuTy__Fo_wuk = 8;
const JoSuTy__Fx_wuk = ( JoSuTy__Fo_wuk - 1 );

const SuTy__Va_wu = {
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

const JiJa__Va_wu = {
	"HEXCIRC": 0,
	"DROPZ": 1,
	"PLAZ": 2,
	"ETHER": 3,

	"AURORA": 4,
	"HEXSCROLL": 5,
	"SUNRISE": 6,
	"CODEX": 7
};

const JiJa_v = [
	Hrz6_Tro__TrzJiJa( "JiJa00__HEXCIRC", gl, VS_wik, JiJa00__HEXCIRC_vkutf8 ), Hrz6_Tro__TrzJiJa( "JiJa01__DROPZ", gl, VS_wik, JiJa01__DROPZ_vkutf8 ), Hrz6_Tro__TrzJiJa( "JiJa02__PLAZ", gl, VS_wik, JiJa02__PLAZ_vkutf8 ), Hrz6_Tro__TrzJiJa( "JiJa03__ETHER", gl, VS_wik, JiJa03__ETHER_vkutf8 )

	, Hrz6_Tro__TrzJiJa( "JiJa04__AURORA", gl, VS_wik, JiJa04__AURORA_vkutf8 ), Hrz6_Tro__TrzJiJa( "JiJa05__HEXSCROLL", gl, VS_wik, JiJa05__HEXSCROLL_vkutf8 ), Hrz6_Tro__TrzJiJa( "JiJa06__SUNRISE", gl, VS_wik, JiJa06__SUNRISE_vkutf8 ), Hrz6_Tro__TrzJiJa( "JiJa07__CODEX", gl, VS_wik, JiJa07__CODEX_vkutf8 )
];

const ToGe__Vy_v = [
	gl.getAttribLocation( JiJa_v[ 0 ], 'Ge_wf4' ), gl.getAttribLocation( JiJa_v[ 1 ], 'Ge_wf4' ), gl.getAttribLocation( JiJa_v[ 2 ], 'Ge_wf4' ), gl.getAttribLocation( JiJa_v[ 3 ], 'Ge_wf4' ), gl.getAttribLocation( JiJa_v[ 4 ], 'Ge_wf4' ), gl.getAttribLocation( JiJa_v[ 5 ], 'Ge_wf4' ), gl.getAttribLocation( JiJa_v[ 6 ], 'Ge_wf4' ), gl.getAttribLocation( JiJa_v[ 7 ], 'Ge_wf4' )
];
const ToBri__Vy_v = [
	gl.getUniformLocation( JiJa_v[ 0 ], 'ToBri_vwf4' ), gl.getUniformLocation( JiJa_v[ 1 ], 'ToBri_vwf4' ), gl.getUniformLocation( JiJa_v[ 2 ], 'ToBri_vwf4' ), gl.getUniformLocation( JiJa_v[ 3 ], 'ToBri_vwf4' ), gl.getUniformLocation( JiJa_v[ 4 ], 'ToBri_vwf4' ), gl.getUniformLocation( JiJa_v[ 5 ], 'ToBri_vwf4' ), gl.getUniformLocation( JiJa_v[ 6 ], 'ToBri_vwf4' ), gl.getUniformLocation( JiJa_v[ 7 ], 'ToBri_vwf4' )
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
const JoJiJa__Fe_wu = 5;
const JoSuTy__Fe_wu = 0;

function Hry5_Smz__ChyYe( Fe__GiDri_wf )
{
	//@@@
	// GFX_CFG
	const Fe__JiJa_wuk = ( JoJiJa__Fe_wu );
	const Fe__SuTy_wuk = ( JoSuTy__Fe_wu );

	//@@@
	// RESIZE_DETECT
	// clientDim is always below
	let Ku_w = Math.max( document.documentElement.clientWidth || 0, window.innerWidth || 0 );
	let Ku_h = Math.max( document.documentElement.clientHeight || 0, window.innerHeight || 0 );
	if ( MxSi.clientWidth !== Ku_w || MxSi.clientHeight !== Ku_h )
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

	if ( MxSi.width !== MxVeGx_wu || MxSi.height !== MxVeGa_wu )
	{
		// console.log( "MxSi_VeFi: " + MxSi.width + ", " + MxSi.height );

		MxSi.width = MxVeGx_wu;
		MxSi.height = MxVeGa_wu;
		// console.log( "MxSi_VeFe: " + MxSi.width + ", " + MxSi.height );

		// STYLE requires UPDATE
		// !!!
		// 2025.04: Firefox gives ERROR: Error in parsing value for ‘width’.  Declaration dropped.
		// yet, we NEED these lines
		MxSi.style.width = MxSi.clientWidth + 'px';
		MxSi.style.height = MxSi.clientHeight + 'px';

		// console.log( "TiGy: " + MxSi.clientWidth/ MxVeGx_wu + ", " + MxSi.clientHeight / MxVeGa_wu );

		Hry5_Smz__KriYe = true;
	}

	//@@@
	// PLAY_PAUSE ANIM
	{
		if ( Fi__GiDri_wf > 0 )
		{
			Fe__GiPa_wf += ( Fe__GiDri_wf - Fi__GiDri_wf ) * 0.001;
		}
		Fi__GiDri_wf = Fe__GiDri_wf;

		Bri__Dri6_wf = ( Fe__GiPa_wf % 6000.0 ) / 6000.0;

		//@@@
		// DRAW
		gl.viewport( 0, 0, gl.canvas.width, gl.canvas.height );
		gl.clear( gl.COLOR_BUFFER_BIT );

		// VERTS
		gl.bindBuffer( gl.ARRAY_BUFFER, KuTo__QUAD_vwf2 );
		gl.vertexAttribPointer( ToGe__Vy_v[ Fe__JiJa_wuk ], 2, gl.FLOAT, false, 0, 0 );
		gl.enableVertexAttribArray( ToGe__Vy_v[ Fe__JiJa_wuk ] );

		gl.useProgram( JiJa_v[ Fe__JiJa_wuk ] );
		gl.uniform4fv(
			ToBri__Vy_v[ Fe__JiJa_wuk ], [
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
		gl.drawArrays( gl.TRIANGLE_FAN, 0, 4 );

		MxSi__YeFo_wu++;
	}
	requestAnimationFrame( Hry5_Smz__ChyYe );

	Hry5_Smz__KriYe = false;
}

//==============================================
// 5.0
// ToMi DOWNLOAD
//==============================================
function DOWNLOAD_Dy( EXE )
{
	const EXE_URL = "Mx02__TxKuCho_WVERSE/Essence__" + EXE;
	window.location.assign( EXE_URL );
	ToMi_JaPe__Ya();
}


//@@@
// AUDIO PLAY
let ToMi_JaPe = document.getElementById( "ToMi_JaPe" );

function ToMi_JaPe__Ya()
{
	ToMi_JaPe.play();
}

function ToMi_JaPe__Yi()
{
	ToMi_JaPe.pause();
}


//==============================================
// 7.0
// Hrz5_Ki ENGINE
//==============================================

//-------------------------------------------------
// ERR
//-------------------------------------------------
function SmaTrx( Trx_vbg )
{
	console.error( Trx_vbg );
	alert( Trx_vbg );
}

//-------------------------------------------------
// APP INIT
// ! ONLY Global Func to Run @ Startup
( function BriDz__Ya()
	//-------------------------------------------------
	{
		//@@@
		// VISUAL
		Hry5_Smz__ChyYe();
	}
)();

//===================================
// SyDz_Yi
//===================================
