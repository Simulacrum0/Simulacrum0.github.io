//-------------------------------------------------
// // GLSL_Ya
//-------------------------------------------------
const JiJa01__DROPZ_vkutf8 = `#version 300 es
#line 7
precision highp float;
uniform vec4 ToBri_vwf4[ 2 ];
// uniform vec4 ToTy_vwf4[ 4 ];
out vec4 Se_wfa4;

float Gi_wfk;
vec2 VeGy_wf2;


//----------------------------------------------------------------------------------------
vec3 PoChyGo_wf3(vec3 Po_wf3, float Po_GoZo_wf)
//----------------------------------------------------------------------------------------
{
	float s = sin(Po_GoZo_wf);
	float c = cos(Po_GoZo_wf);
	return (Po_wf3 * c) + (Po_wf3 * s) * mat3(
		vec3(0.167444, 0.329213, -0.496657),
		vec3(-0.327948, 0.035669, 0.292279),
		vec3(1.250268, -1.047561, -0.202707)
	) + dot(vec3(0.299, 0.587, 0.114), Po_wf3) * (1.0 - c);
}



void main(void)
{
	Gi_wfk = -1. * ToBri_vwf4[ 0 ].x;
	VeGy_wf2 = ToBri_vwf4[ 0 ].zw;


    vec2 uv = gl_FragCoord.xy / VeGy_wf2.xy - .5;
    uv.y *= VeGy_wf2.y / VeGy_wf2.x;
    float mul = VeGy_wf2.x / VeGy_wf2.y;

    vec3 dir = vec3(uv * mul, 1.);
    float a2 = Gi_wfk * 20. + .5;
    float a1 = 1.0;

    mat2 rot1 = mat2(cos(a1), sin(a1), - sin(a1), cos(a1));
    mat2 rot2 = rot1;

    dir.xz *= rot1;
    dir.xy *= rot2;

    vec3 from = vec3(0., 0., 0.) + vec3(.0025 * Gi_wfk, .03 * Gi_wfk, - 2.);
    from.xz *= rot1;
    from.xy *= rot2;

    float s = 0.1;
	float fade = .07;
    vec3 v = vec3(0.4);


    for( int r = 0; r < 10; r++ )
	{
		vec3 p = from + s * dir * 1.5;
		p = abs(vec3(0.750) - mod(p, vec3(0.750 * 2.)));
		p.x += float(r * r) * 0.01;
		p.y += float(r) * 0.02;
		float pa, a = pa = 0.;

		for( int i = 0; i < 12; i++ )
		{
			p = abs(p) / dot(p, p) - 0.340;
			a += abs(length(p) - pa * 0.2);
			pa = length(p);
		}
		a *= a * a * 2.;
		v += vec3(s * s , s , s * s) * a * 0.0017 * fade;
		fade *= 0.960;
		s += 0.110;
    }
    v = mix(vec3(length(v)), v, 0.9);

    Se_wfa4 = vec4( v * 0.03, 1.);
	Se_wfa4.rgb  = PoChyGo_wf3( Se_wfa4.rgb, ToBri_vwf4[ 1 ].x );

}

`;
//-------------------------------------------------
// GLSL_Yi
//-------------------------------------------------
