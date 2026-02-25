//-------------------------------------------------
// // GLSL_Ya
//-------------------------------------------------
const JiJa00__De_vkutf8 = `#version 300 es
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


#define ROT(a)      mat2(cos(a), sin(a), -sin(a), cos(a))
#define PI          3.141592654
#define TAU         (2.0*PI)



// License: Unknown, author: Unknown, found: don't remember
float tanh_approx(float x)
{
  //  Found this somewhere on the interwebs
  //  return tanh(x);
  float x2 = x*x;
  return clamp(x*(27.0 + x2)/(27.0+9.0*x2), -1.0, 1.0);
}

// License: WTFPL, author: sam hocevar, found: https://stackoverflow.com/a/17897228/418488
const vec4 hsv2rgb_K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 hsv2rgb(vec3 c)
{
  vec3 p = abs(fract(c.xxx + hsv2rgb_K.xyz) * 6.0 - hsv2rgb_K.www);
  return c.z * mix(hsv2rgb_K.xxx, clamp(p - hsv2rgb_K.xxx, 0.0, 1.0), c.y);
}

// License: WTFPL, author: sam hocevar, found: https://stackoverflow.com/a/17897228/418488
//  Macro version of above to enable compile-Gi_wfk constants
#define HSV2RGB(c)  (c.z * mix(hsv2rgb_K.xxx, clamp(abs(fract(c.xxx + hsv2rgb_K.xyz) * 6.0 - hsv2rgb_K.www) - hsv2rgb_K.xxx, 0.0, 1.0), c.y))


float hash(vec2 co)
{
  return fract(sin(dot(co.xy ,vec2(12.9898,58.233))) * 13758.5453);
}


vec2 hextile(inout vec2 p)
{
  const vec2 sz       = vec2(1.0, sqrt(3.0));
  const vec2 hsz      = 0.5*sz;

  vec2 p1 = mod(p, sz)-hsz;
  vec2 p2 = mod(p - hsz, sz)-hsz;
  vec2 p3 = dot(p1, p1) < dot(p2, p2) ? p1 : p2;
  vec2 n = ((p3 - p + hsz)/sz);
  p = p3;

  n -= vec2(0.5);
  // Rounding to make hextile 0,0 well behaved
  return round(n*2.0)*0.5;
}


float hexagon(vec2 p, float r)
{
  const vec3 k = vec3(-0.866025404,0.5,0.577350269);
  p = abs(p);
  p -= 2.0*min(dot(k.xy,p),0.0)*k.xy;
  p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);
  return length(p)*sign(p.y);
}

float shape(vec2 p)
{
  return hexagon(p.yx, 0.4)-0.075;
}

float cellHeight(float h)
{
  return 0.05*2.0*(-h);
}

vec3 cell(vec2 p, float h)
{
  float hd = shape(p);

  const float he = 0.0075*2.0;
  float aa = he;
  float hh = -he*smoothstep(aa, -aa, hd);

  return vec3(hd, hh, cellHeight(h));
}

float height(vec2 p, float h)
{
  return cell(p, h).y;
}

vec3 normal(vec2 p, float h)
{
  vec2 e = vec2(4.0/VeGy_wf2.y, 0);

  vec3 n;
  n.x = height(p + e.xy, h) - height(p - e.xy, h);
  n.y = height(p + e.yx, h) - height(p - e.yx, h);
  n.z = 2.0*e.x;

  return normalize(n);
}

vec3 planeColor(vec3 ro, vec3 rd, vec3 lp, vec3 pp, vec3 pnor, vec3 bcol, vec3 pcol)
{
  vec3  ld = normalize(lp-pp);
  float dif  = pow(max(dot(ld, pnor), 0.0), 1.0);
  vec3 col = pcol;
  col = mix(bcol, col, dif);
  return col;
}

const mat2 rots[6] = mat2[]
(
    ROT(0.0*TAU/6.0)
  , ROT(1.0*TAU/6.0)
  , ROT(2.0*TAU/6.0)
  , ROT(3.0*TAU/6.0)
  , ROT(4.0*TAU/6.0)
  , ROT(5.0*TAU/6.0)
);

const vec2 off = vec2(1.0, 0.0);

const vec2 offs[6] = vec2[](
    off*rots[0]
  , off*rots[1]
  , off*rots[2]
  , off*rots[3]
  , off*rots[4]
  , off*rots[5]
  );

float cutSlice(vec2 p, vec2 off)
{
  p.x = abs(p.x);
  off.x *= 0.5;

  vec2 nn = normalize(vec2(off));
  vec2 n  = vec2(nn.y, -nn.x);

  float d0 = length(p-off);
  float d1 = -(p.y-off.y);
  float d2 = dot(n, p);

  bool b = p.x > off.x && (dot(nn, p)-dot(nn, off)) < 0.0;

  return b ? d0 : max(d1, d2);
}

float hexSlice(vec2 p, int n)
{
  n = 6-n;
  n = n%6;
  p *= rots[n];
  p = p.yx;
  const vec2 dim  = vec2((0.5)*2.0/sqrt(3.0), (0.5));
  return cutSlice(p, dim);
}

vec3 HryKuNa_wf3(vec2 p, vec2 q)
{
  const float z = 0.327;
  float aa = 2.0/(z*VeGy_wf2.y);

  p.yx = p;

  vec3 lp = vec3(3.0, 0.0, 1.0);

  p -= vec2(0.195, 0.);
  p /= z;

  float toff = 0.2*Gi_wfk;
  p.x += toff;
  lp.x += toff;

  vec2 hp  = p;
  vec2 hn  = hextile(hp);
  float hh = hash(hn);
  vec3 c   = cell(hp, hh);
  float cd = c.x;
  float ch = c.z;

  vec3 fpp = vec3(p, ch);
  vec3 bpp = vec3(p, 0.0);

  vec3 ro = vec3(0.0, 0.0, 1.0);
  vec3 rd = normalize(fpp-ro);

  vec3  bnor = vec3(0.0, 0.0, 1.0);
  vec3  bdif = lp-bpp;
  float bl2  = dot(bdif, bdif);

  vec3  fnor = normal(hp, hh);
  vec3  fld  = normalize(lp-fpp);

  float sf = 0.0;

  for (int i = 0; i < 6; ++i)
  {
    vec2  ioff= offs[i];
    vec2  ip  = p+ioff;
    vec2  ihn = hextile(ip);
    float ihh = hash(ihn);
    float ich = cellHeight(ihh);
    float iii = (ich-ch)/fld.z;
    vec3  ipp = vec3(hp, ch)+iii*fld;

    float hsd = hexSlice(ipp.xy, i);
    if (ich > ch)
	{
      sf += exp(-20.0*tanh_approx(1.0/(10.0*iii))*max(hsd+0., 0.0));
    }
  }

  const float sat = 0.23;
  vec3 bpcol = planeColor(ro, rd, lp, bpp, bnor, vec3(0.0), HSV2RGB(vec3(240.0/36.0, sat, 0.14)));
  vec3 fpcol = 16. * planeColor(ro, rd, lp, fpp, fnor, bpcol, HSV2RGB(vec3(240.0/36.0, sat, 0.19)));

  vec3 col = bpcol;
  col = mix(col, fpcol, smoothstep(aa, -aa, cd));
  col *= 1.0-tanh_approx(sf);

  float fo = exp(-0.025*max(bl2-0., 0.0));
//  col *= fo;
  col = mix(bpcol, col, fo);


  return col;
}


void main(void)
{
	Gi_wfk = ToBri_vwf4[ 0 ].x;
	VeGy_wf2 = ToBri_vwf4[ 0 ].zw;

  vec2 q = 0.4 * gl_FragCoord.xy / VeGy_wf2.xy;
  vec2 p = -1. + 2. * q;
  p.x *= VeGy_wf2.x/VeGy_wf2.y;

  vec3 col = HryKuNa_wf3(p, q);
  col = PoChyGo_wf3( col, ToBri_vwf4[ 1 ].x );
  Se_wfa4 = vec4(col,1.0);
}

`;
//-------------------------------------------------
// GLSL_Yi
//-------------------------------------------------
