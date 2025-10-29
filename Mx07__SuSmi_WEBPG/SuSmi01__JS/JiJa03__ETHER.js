//-------------------------------------------------
// // GLSL_Ya
//-------------------------------------------------
const JiJa03__ETHER_vkutf8 = `#version 300 es
#line 7
precision highp float;
uniform vec4 ToBri_vwf4[ 2 ];
// uniform vec4 ToTy_vwf4[ 4 ];
out vec4 Se_wfa4;

float Gi_wfk;
vec2 VeGy_wf2;


#define NUM_OCTAVES 6


mat3 rotX(float a) {
    float c = cos(a);
    float s = sin(a);
    return mat3(
    1, 0, 0,
    0, c, -s,
    0, s, c
    );
}
mat3 rotY(float a) {
    float c = cos(a);
    float s = sin(a);
    return mat3(
    c, 0, -s,
    0, 1, 0,
    s, 0, c
    );
}


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


float random(vec2 pos)
{
    return fract(sin(dot(pos.xy, vec2(13.9898, 78.233))) * 43758.5453123);
}

float noise(vec2 pos)
{
    vec2 i = floor(pos);
    vec2 f = fract(pos);
    float a = random(i + vec2(0.0, 0.0));
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 pos)
{
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i=0; i<NUM_OCTAVES; i++)
	{
        float dir = mod(float(i), 2.0) > 0.5 ? 1.0 : -1.0;
        v += a * noise(pos - 0.05 * dir * Gi_wfk);

        pos = rot * pos * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}

void main(void)
{
	Gi_wfk = 3. *  ToBri_vwf4[ 0 ].x;
	VeGy_wf2 = ToBri_vwf4[ 0 ].zw;


    vec2 p = (gl_FragCoord.xy * 3.0 - VeGy_wf2.xy) / min(VeGy_wf2.x, VeGy_wf2.y);
    p -= vec2(12.0, 0.0);

    float t = 0.0, d;

    float time2 = 100.0;

    vec2 q = vec2(0.0);
    q.x = fbm(p + 0.00 * time2);
    q.y = fbm(p + vec2(1.0));
    vec2 r = vec2(0.0);
    r.x = fbm(p + 1.0 * q + vec2(1.7, 1.2) + 0.15 * time2);
    r.y = fbm(p + 1.0 * q + vec2(8.3, 2.8) + 0.126 * time2);
    float f = fbm(p + r);
    vec3 color = mix(

    vec3(1.0, 1.0, 2.0),
    vec3(1.0, 1.0, 1.0),

    //vec3(10.90, 0.2, 0.1),
    //vec3(10.50, 0.07, 0.07),

    clamp((f * f) * 5.5, 1.2, 15.5)
    );

    color = mix(
    color,
    vec3(1.0, 1.0, 1.0),
    //vec3(0.4, 0.1, 0.0),
    clamp(length(q), 2.0, 2.0)
    );


    color = mix(
    color,
    //vec3(0.0, 1.0, 0.0),
    vec3(0.3, 0.2, 1.0),
    clamp(length(r.x), 0.0, 5.0)
    );

    color = (f * f * f * 1.0 + 0.5 * 1.7 * 0.0 + 0.9 * f) * color;

    vec2 uv = gl_FragCoord.xy / VeGy_wf2.xy;
    float alpha = 50.0 - max(pow(100.0 * distance(uv.x, -1.0), 0.0), pow(2.0 * distance(uv.y, 0.5), 5.0));

    // Se_wfa4 = vec4(color * 100.0, color.r);

	Se_wfa4  =vec4( PoChyGo_wf3( color, ToBri_vwf4[ 1 ].x ), alpha * color.r );
}
`;
//-------------------------------------------------
// GLSL_Yi
//-------------------------------------------------
