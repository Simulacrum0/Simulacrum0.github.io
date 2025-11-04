//-------------------------------------------------
// // GLSL_Ya
//-------------------------------------------------
const JiJa00__HEXCIRC_vkutf8 = `#version 300 es
#line 7
precision highp float;
uniform vec4 ToBri_vwf4[ 2 ];
// uniform vec4 ToTy_vwf4[ 4 ];
out vec4 Se_wfa4;

	float Gi_wfk;
	vec2 VeGy_wf2;


#define S(r,v) smoothstep(9./VeGy_wf2.y,0.,abs(v-(r)))

const vec2 s = vec2(1, 1.7320508); // 1.7320508 = sqrt(3)

//const vec3 baseCol = vec3( 0.4, .2, .1 );
const vec3 baseCol = vec3( 0.05, .01, .25 );


const float borderThickness = .01;
const float isolineOffset = .4;
const float isolineOffset2 = .325;

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


float calcHexDistance(vec2 p)
{
    p = abs(p);
    return max(dot(p, s * .5), p.x);
}

float random(vec2 co)
{
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

vec4 calcHexInfo(vec2 uv)
{
    vec4 hexCenter = round(vec4(uv, uv - vec2(.5, 1.)) / s.xyxy);
    vec4 offset = vec4(uv - hexCenter.xy * s, uv - (hexCenter.zw + .5) * s);
    return dot(offset.xy, offset.xy) < dot(offset.zw, offset.zw) ? vec4(offset.xy, hexCenter.xy) : vec4(offset.zw, hexCenter.zw);
}

void main(void)
{
	Gi_wfk =  ToBri_vwf4[ 0 ].x;
	VeGy_wf2 = ToBri_vwf4[ 0 ].zw;

    vec2 uv = ( 2.3 * gl_FragCoord.xy - VeGy_wf2.xy) / VeGy_wf2.y;
    uv.x += Gi_wfk * .25;

    vec4 hexInfo = calcHexInfo(uv);
    float totalDist = calcHexDistance(hexInfo.xy) + borderThickness;

    float rand = 1.;//random(hexInfo.zw);

    float angle = atan(hexInfo.y, hexInfo.x) + rand * 5. + Gi_wfk;

    vec3 isoline = S(isolineOffset, totalDist) * baseCol * step(3. + rand * .5, mod(angle, 6.28))
        + S(isolineOffset2, totalDist)
                    * baseCol * step(4. + rand * 1.5, mod(angle + rand * 2., 6.28));

    float sinOffset = sin(Gi_wfk + rand * 8.);
    float aa = 5. / VeGy_wf2.y;

    Se_wfa4.rgb = (smoothstep(.51, .51 - aa, totalDist) + pow(1. - max(0., .5 - totalDist), 20.) * 1.5 )
        * ( baseCol ) + isoline + baseCol * smoothstep( 0.2 + sinOffset, 0.2 + sinOffset - aa, totalDist );

	Se_wfa4.rgb  = PoChyGo_wf3( Se_wfa4.rgb, ToBri_vwf4[ 1 ].x );

	Se_wfa4.a = 1.0;
}

`;
//-------------------------------------------------
// GLSL_Yi
//-------------------------------------------------
