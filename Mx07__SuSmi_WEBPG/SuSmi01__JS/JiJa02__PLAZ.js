//-------------------------------------------------
// // GLSL_Ya
//-------------------------------------------------
const JiJa02__PLAZ_vkutf8
 =`#version 300 es
#line 7
precision highp float;
uniform vec4 ToBri_vwf4[ 2 ];
uniform vec4 ToTy_vwf4[ 4 ];
out vec4 Se_wfa4;

float Gi_wfk;
vec2 VeGy_wf2;

// Simple hash function
float hash(float n)
{
    return fract(sin(n) * 78757.5757 + cos(n) * 71767.8727);
}

// 2D noise function
float noise(vec2 p)
{
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(mix(hash(i.x + hash(i.y)), hash(i.x + 1.0 + hash(i.y)), u.x),
               mix(hash(i.x + hash(i.y + 1.0)), hash(i.x + 1.0 + hash(i.y + 1.0)), u.x), u.y);
}


// Random function to create jitter
float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}


// Glitchy particle effect
vec3 glitchyParticles(vec2 uv, float intensity)
{
    float t = Gi_wfk * 10.0; // Adjust speed
    float noiseValue = noise(uv * 1000.0 + t);

    // Create glitchy particle-like movement
    uv += mix(vec2(0.0), vec2(sin(noiseValue), cos(noiseValue)), intensity);

    return vec3(1., .5, .5) * clamp((1.0 - smoothstep(0.0, 0.99, length(fract(uv) - 0.5))), 0.0, 1.0);
}


// Aurora layer function with morphing scaleXY and reduced intensity
vec3 auroraLayer(vec2 uv, float speed, float intensity, vec3 color)
{
    float t = Gi_wfk * speed;
    vec2 scaleXY = vec2(2.0 + sin(t) * 0.5, 5.0 + cos(t) * 0.5); // Morphing scale factors
    vec2 movement = vec2(2.0, -2.0);
    vec2 p = uv * scaleXY + t * movement;
    float n = noise(p + noise(color.xy + p + t));
    float aurora = smoothstep(0.0, 0.05, n - uv.y) * (1.0 - smoothstep(0.0, 0.2, n - uv.y)); // Reduced intensity

    return aurora * intensity * color;
}


void main(void)
{
	Gi_wfk =  ToBri_vwf4[ 0 ].x;
	VeGy_wf2 = ToBri_vwf4[ 0 ].zw;


    vec2 uv = gl_FragCoord.xy / VeGy_wf2.xy;
    uv.x *= VeGy_wf2.x / VeGy_wf2.y;


    // Add jitter effect
    uv += vec2(rand(uv), rand(uv)) * 0.005;

    vec3 color = vec3(0.0);

    // Glitchy Particle Effect
    color += glitchyParticles(uv, 0.1);

    // Aurora Layer
    color += auroraLayer(uv, 0.55, 0.3, vec3(0.0, 0.3, 0.1)); // Reduced intensity
    color += auroraLayer(uv, 0.1, 0.3, vec3(0.1, 0.6, 0.4));   // Reduced intensity
    color += auroraLayer(uv, 0.15, 0.3, vec3(0.2, 0.1, 0.8));  // Reduced intensity
    color += auroraLayer(uv, 0.07, 0.3, vec3(0.2, 0.1, 0.5));  // Reduced intensity

    // Background Variation
    vec3 skyColor1 = vec3(0.1, 0.0, 0.1);
    vec3 skyColor2 = vec3(0.0, 0.1, 0.6);
    color += skyColor2 * (1.0 - smoothstep(0.0, 2.0, uv.y));
    color += skyColor1 * (1.0 - smoothstep(0.0, 1.0, uv.y));

    Se_wfa4 = vec4( vec3( color.g ), 1.0);
}

`;
//-------------------------------------------------
// GLSL_Yi
//-------------------------------------------------
