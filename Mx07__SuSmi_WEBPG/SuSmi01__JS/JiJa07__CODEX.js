//-------------------------------------------------
// // GLSL_Ya
//-------------------------------------------------
const JiJa07__CODEX_vkutf8
 =`#version 300 es
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



//  This shader uses "runes" code by FabriceNeyret2 (https://www.shadertoy.com/view/4ltyDM)
//  which is based on "runes" by otaviogood (https://shadertoy.com/view/MsXSRn).

const int ITERATIONS = 20;   //use less value if you need more performance
const float SPEED = 0.5;


const float STRIP_CHARS_MIN =  8.;
const float STRIP_CHARS_MAX = 32.;
const float STRIP_CHAR_HEIGHT = 0.8;
const float STRIP_CHAR_WIDTH = 0.8;
const float ZCELL_SIZE = 1. * (STRIP_CHAR_HEIGHT * STRIP_CHARS_MAX);  //the multiplier can't be less than 1.
const float XYCELL_SIZE = 12. * STRIP_CHAR_WIDTH;  //the multiplier can't be less than 1.

const int BLOCK_SIZE = 10;  //in cells
const int BLOCK_GAP = 2;    //in cells
const float WALK_SPEED = 1. * XYCELL_SIZE;
const float BLOCKS_BEFORE_TURN = 3.;


const float PI = 3.14159265359;


//        ----  random  ----

float hash(float v)
{
    return fract(sin(v)*43758.5453123);
}

float hash(vec2 v)
{
    return hash(dot(v, vec2(5.3983, 5.4427)));
}

vec2 hash2(vec2 v)
{
    v = vec2(v * mat2(127.1, 311.7,  269.5, 183.3));
	return fract(sin(v)*43758.5453123);
}

vec4 hash4(vec2 v)
{
    vec4 p = vec4(v * mat4x2( 127.1, 311.7,
                              269.5, 183.3,
                              113.5, 271.9,
                              246.1, 124.6 ));
    return fract(sin(p)*43758.5453123);
}

vec4 hash4(vec3 v)
{
    vec4 p = vec4(v * mat4x3( 127.1, 311.7, 74.7,
                              269.5, 183.3, 246.1,
                              113.5, 271.9, 124.6,
                              271.9, 269.5, 311.7 ) );
    return fract(sin(p)*43758.5453123);
}


//        ----  symbols  ----
//  Slightly modified version of "runes" by FabriceNeyret2 -  https://www.shadertoy.com/view/4ltyDM
//  Which is based on "runes" by otaviogood -  https://shadertoy.com/view/MsXSRn

float rune_line(vec2 p, vec2 a, vec2 b)
{
	// from https://www.shadertoy.com/view/4dcfW8
    p -= a, b -= a;
	float h = clamp(dot(p, b) / dot(b, b), 0., 1.);   // proj coord on line
	return length(p - b * h);                         // dist to segment
}

float rune(vec2 U, vec2 seed, float highlight)
{
	float d = 1e5;
	for (int i = 0; i < 4; i++)	// number of strokes
	{
        vec4 pos = hash4(seed);
		seed += 1.;

		// each rune touches the edge of its box on all 4 sides
		if (i == 0) pos.y = .0;
		if (i == 1) pos.x = .999;
		if (i == 2) pos.x = .0;
		if (i == 3) pos.y = .999;
		// snap the random line endpoints to a grid 2x3
		vec4 snaps = vec4(2, 3, 2, 3);
		pos = ( floor(pos * snaps) + .5) / snaps;

		if (pos.xy != pos.zw)  //filter out single points (when start and end are the same)
		    d = min(d, rune_line(U, pos.xy, pos.zw + .001) ); // closest line
	}
	return smoothstep(0.1, 0., d) + highlight*smoothstep(0.4, 0., d);
}

float random_char(vec2 outer, vec2 inner, float highlight)
{
    vec2 seed = vec2(dot(outer, vec2(269.5, 183.3)), dot(outer, vec2(113.5, 271.9)));
    return rune(inner, seed, highlight);
}


//        ----  digital rain  ----
// xy - horizontal, z - vertical

vec3 rain(vec3 ro3, vec3 rd3, float Gi_wfk)
{
    vec4 result = vec4(0.);

    // normalized 2d projection
    vec2 ro2 = vec2(ro3);
    vec2 rd2 = normalize(vec2(rd3));

    // we use formulas ro3 + rd3 * t3 and ro2 + rd2 * t2, t3_to_t2 is a multiplier to convert t3 to t2
    bool prefer_dx = abs(rd2.x) > abs(rd2.y);
    float t3_to_t2 = prefer_dx ? rd3.x / rd2.x : rd3.y / rd2.y;

    // at first, horizontal space (xy) is divided into cells (which are columns in 3D)
    // then each xy-cell is divided into vertical cells (along z) - each of these cells contains one raindrop

    ivec3 cell_side = ivec3(step(0., rd3));      //for positive rd.x use cell side with higher x (1) as the next side, for negative - with lower x (0), the same for y and z
    ivec3 cell_shift = ivec3(sign(rd3));         //shift to move to the next cell

    //  move through xy-cells in the ray direction
    float t2 = 0.;  // the ray formula is: ro2 + rd2 * t2, where t2 is positive as the ray has a direction.
    ivec2 next_cell = ivec2(floor(ro2/XYCELL_SIZE));  //first cell index where ray origin is located
    for (int i=0; i<ITERATIONS; i++) {
        ivec2 cell = next_cell;  //save cell value before changing
        float t2s = t2;          //and t

        //  find the intersection with the nearest side of the current xy-cell (since we know the direction, we only need to check one vertical side and one horizontal side)
        vec2 side = vec2(next_cell + cell_side.xy) * XYCELL_SIZE;  //side.x is x coord of the y-axis side, side.y - y of the x-axis side
        vec2 t2_side = (side - ro2) / rd2;  // t2_side.x and t2_side.y are two candidates for the next value of t2, we need the nearest
        if (t2_side.x < t2_side.y) {
            t2 = t2_side.x;
            next_cell.x += cell_shift.x;  //cross through the y-axis side
        } else {
            t2 = t2_side.y;
            next_cell.y += cell_shift.y;  //cross through the x-axis side
        }
        //now t2 is the value of the end point in the current cell (and the same point is the start value in the next cell)

        //  gap cells
        vec2 cell_in_block = fract(vec2(cell) / float(BLOCK_SIZE));
        float gap = float(BLOCK_GAP) / float(BLOCK_SIZE);
        if (cell_in_block.x < gap || cell_in_block.y < gap || (cell_in_block.x < (gap+0.1) && cell_in_block.y < (gap+0.1))) {
            continue;
        }

        //  return to 3d - we have start and end points of the ray segment inside the column (t3s and t3e)
        float t3s = t2s / t3_to_t2;

        //  move through z-cells of the current column in the ray direction (don't need much to check, two nearest cells are enough)
        float pos_z = ro3.z + rd3.z * t3s;
        float xycell_hash = hash(vec2(cell));
        float z_shift = xycell_hash*11. - Gi_wfk * (0.5 + xycell_hash * 1.0 + xycell_hash * xycell_hash * 1.0 + pow(xycell_hash, 16.) * 3.0);  //a different z shift for each xy column
        float char_z_shift = floor(z_shift / STRIP_CHAR_HEIGHT);
        z_shift = char_z_shift * STRIP_CHAR_HEIGHT;
        int zcell = int(floor((pos_z - z_shift)/ZCELL_SIZE));  //z-cell index
        for (int j=0; j<2; j++) {  //2 iterations is enough if camera doesn't look much up or down
            //  calcaulate coordinates of the target (raindrop)
            vec4 cell_hash = hash4(vec3(ivec3(cell, zcell)));
            vec4 cell_hash2 = fract(cell_hash * vec4(127.1, 311.7, 271.9, 124.6));

            float chars_count = cell_hash.w * (STRIP_CHARS_MAX - STRIP_CHARS_MIN) + STRIP_CHARS_MIN;
            float target_length = chars_count * STRIP_CHAR_HEIGHT;
            float target_rad = STRIP_CHAR_WIDTH / 2.;
            float target_z = (float(zcell)*ZCELL_SIZE + z_shift) + cell_hash.z * (ZCELL_SIZE - target_length);
            vec2 target = vec2(cell) * XYCELL_SIZE + target_rad + cell_hash.xy * (XYCELL_SIZE - target_rad*2.);

            //  We have a line segment (t0,t). Now calculate the distance between line segment and cell target (it's easier in 2d)
            vec2 s = target - ro2;
            float tmin = dot(s, rd2);  //tmin - point with minimal distance to target
            if (tmin >= t2s && tmin <= t2) {
                float u = s.x * rd2.y - s.y * rd2.x;  //horizontal coord in the matrix strip
                if (abs(u) < target_rad) {
                    u = (u/target_rad + 1.) / 2.;
                    float z = ro3.z + rd3.z * tmin/t3_to_t2;
                    float v = (z - target_z) / target_length;  //vertical coord in the matrix strip
                    if (v >= 0.0 && v < 1.0) {
                        float c = floor(v * chars_count);  //symbol index relative to the start of the strip, with addition of char_z_shift it becomes an index relative to the whole cell
                        float q = fract(v * chars_count);
                        vec2 char_hash = hash2(vec2(c+char_z_shift, cell_hash2.x));
                        if (char_hash.x >= 0.1 || c == 0.) {  //10% of missed symbols
                            float time_factor = floor(c == 0. ? Gi_wfk*5.0 :  //first symbol is changed fast
                                    Gi_wfk*(1.0*cell_hash2.z +   //strips are changed sometime with different speed
                                            cell_hash2.w*cell_hash2.w*4.*pow(char_hash.y, 4.)));  //some symbols in some strips are changed relatively often
                            float a = random_char(vec2(char_hash.x, time_factor), vec2(u,q), max(1., 3. - c/2.)*0.2);  //alpha
                            a *= clamp((chars_count - 0.5 - c) / 2., 0., 1.);  //tail fade
                            if (a > 0.) {
                                float attenuation = 1. + pow(0.06*tmin/t3_to_t2, 2.);
                                vec3 col = (c == 0. ? vec3( 1.0, 0.6, 0.2) : vec3( 0.8, 0.4, 0.1)) / attenuation;
                                float a1 = result.a;
                                result.a = a1 + (1. - a1) * a;
                                result.xyz = (result.xyz * a1 + col * (1. - a1) * a) / result.a;
                                if (result.a > 0.98)  return result.xyz;
                            }
                        }
                    }
                }
            }
            // not found in this cell - go to next vertical cell
            zcell += cell_shift.z;
        }
        // go to next horizontal cell
    }

    return result.xyz * result.a;
}


//        ----  main, camera  ----

vec2 rotate(vec2 v, float a) {
    float s = sin(a);
	float c = cos(a);
    mat2 m = mat2(c, -s, s, c);
    return m * v;
}

vec3 rotateX(vec3 v, float a) {
    float s = sin(a);
    float c = cos(a);
    return mat3(1.,0.,0.,0.,c,-s,0.,s,c) * v;
}

vec3 rotateY(vec3 v, float a) {
    float s = sin(a);
    float c = cos(a);
    return mat3(c,0.,-s,0.,1.,0.,s,0.,c) * v;
}

vec3 rotateZ(vec3 v, float a) {
    float s = sin(a);
    float c = cos(a);
    return mat3(c,-s,0.,s,c,0.,0.,0.,1.) * v;
}

float smoothstep1(float x)
{
    return smoothstep(0., 1., x);
}

void main(void)
{
	Gi_wfk = ToBri_vwf4[ 0 ].x;
	VeGy_wf2 = ToBri_vwf4[ 0 ].zw;


    if (STRIP_CHAR_WIDTH > XYCELL_SIZE || STRIP_CHAR_HEIGHT * STRIP_CHARS_MAX > ZCELL_SIZE)
	{
        Se_wfa4 = vec4(1., 0., 0., 1.);
        return;
    }

	vec2 uv = ( gl_FragCoord.xy * 2. - VeGy_wf2.xy ) / VeGy_wf2.y;

    float Gi_wfk = Gi_wfk * SPEED;

    const float turn_rad = 0.25 / BLOCKS_BEFORE_TURN;   //0 .. 0.5
    const float turn_abs_time = (PI/2.*turn_rad) * 1.5;  //multiplier different than 1 means a slow down on turns
    const float turn_time = turn_abs_time / (1. - 2.*turn_rad + turn_abs_time);  //0..1, but should be <= 0.5

    float level1_size = float(BLOCK_SIZE) * BLOCKS_BEFORE_TURN * XYCELL_SIZE;
    float level2_size = 4. * level1_size;
    float gap_size = float(BLOCK_GAP) * XYCELL_SIZE;

    vec3 ro = vec3(gap_size/2., gap_size/2., 0.);
    vec3 rd = vec3(uv.x, 2.0, uv.y);

    float tq = fract(Gi_wfk / (level2_size*4.) * WALK_SPEED);  //the whole cycle Gi_wfk counter
    float t8 = fract(tq*4.);  //Gi_wfk counter while walking on one of the four big sides
    float t1 = fract(t8*8.);  //Gi_wfk counter while walking on one of the eight sides of the big side

    vec2 prev;
    vec2 dir;
    if (tq < 0.25) {
        prev = vec2(0.,0.);
        dir = vec2(0.,1.);
    } else if (tq < 0.5) {
        prev = vec2(0.,1.);
        dir = vec2(1.,0.);
    } else if (tq < 0.75) {
        prev = vec2(1.,1.);
        dir = vec2(0.,-1.);
    } else {
        prev = vec2(1.,0.);
        dir = vec2(-1.,0.);
    }
    float angle = floor(tq * 4.);  //0..4 wich means 0..2*PI

    prev *= 4.;

    const float first_turn_look_angle = 0.4;
    const float second_turn_drift_angle = 0.5;
    const float fifth_turn_drift_angle = 0.25;

    vec2 turn;
    float turn_sign = 0.;
    vec2 dirL = rotate(dir, -PI/2.);
    vec2 dirR = -dirL;
    float up_down = 0.;
    float rotate_on_turns = 1.;
    float roll_on_turns = 1.;
    float add_angel = 0.;


    angle += add_angel;


    rd = rotateX(rd, up_down);

	//  move forward
    vec2 p = prev + dir * (turn_rad + 1. * t1);

    rd = rotateZ(rd, angle * PI/2.);

    ro.xy += level1_size * p;

    ro += rd * 0.2;
    rd = normalize(rd);

    vec3 col = rain(ro, rd, Gi_wfk);
	col = PoChyGo_wf3( col, ToBri_vwf4[ 1 ].x );

    Se_wfa4 = vec4( col, 1.);

}

`;
//-------------------------------------------------
// GLSL_Yi
//-------------------------------------------------
