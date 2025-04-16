//-------------------------------------------------
// // GLSL_Ya
//-------------------------------------------------
const JiJa04__AURORA_vkutf8
 =`#version 300 es
#line 7
precision highp float;
uniform vec4 ToBri_vwf4[ 2 ];
uniform vec4 ToTy_vwf4[ 4 ];
out vec4 Se_wfa4;

	float Gi_wfk;
	vec2 VeGy_wf2;

#define TAU 6.2831853071

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

    Se_wfa4.rgb = color;
    Se_wfa4.a = 1.0;
}

`;
//-------------------------------------------------
// GLSL_Yi
//-------------------------------------------------
