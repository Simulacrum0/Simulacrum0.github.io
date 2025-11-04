//-------------------------------------------------
// // GLSL_Ya
//-------------------------------------------------
const JiJa04__AURORA_vkutf8 = `#version 300 es
#line 7
precision highp float;
uniform vec4 ToBri_vwf4[ 2 ];
// uniform vec4 ToTy_vwf4[ 4 ];
out vec4 Se_wfa4;

	float Gi_wfk;
	vec2 VeGy_wf2;

#define TAU 6.2831853071

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
	Gi_wfk = ToBri_vwf4[ 0 ].x;
	VeGy_wf2 = ToBri_vwf4[ 0 ].zw;

    vec2 seed = gl_FragCoord.xy;
	vec2 uv = gl_FragCoord.xy / VeGy_wf2.xy;

    float d = 0.125 * abs( sin( uv.y + 3. * uv.x + Gi_wfk * 0.125));

    float v = uv.y + d * 0.1;
    v = 1.0 - abs(v * 2.0 - 1.0);
    v = pow(v, 2.0 + sin((Gi_wfk * 0.2 + d * 0.25) * TAU) * 0.5);

    vec3 color = vec3(0.0);

    float x = (1.0 - uv.x * 0.75);
    float y = 1.0 - abs(uv.y * 2.0 - 1.0);
    color += vec3(x * 0.5, y, x) * v;

    vec2 r = vec2( fract(sin((seed.x * 12.9898) + (seed.y * 78.2330)) * 43758.5453), fract(sin((seed.x * 53.7842) + (seed.y * 47.5134)) * 43758.5453) );

    float s = mix(r.x, (sin((Gi_wfk * 2.5 + 60.0) * r.y) * 0.5 + 0.5) * ((r.y * r.y) * (r.y * r.y)), 0.04);
    color += pow(s, 70.0) * (1.0 - v);

	Se_wfa4 = vec4( PoChyGo_wf3( color, ToBri_vwf4[ 1 ].x ), 1.0 );

}

`;
//-------------------------------------------------
// GLSL_Yi
//-------------------------------------------------
