//==============================================
// SyGL
//==============================================
"use strict";
const SyGL = { VaSy: "SyGL" };
window.SyGL = SyGL;

//==============================================
// SyGL_Trx
//==============================================
SyGL.Trx = function( err )
{
	SmaSme( "SyGL_Trx: " + err );
}


//==============================================
// SyGL_BriYe
//==============================================
SyGL.SmaYz = function( Sa_l )
{
	// REPORT
	SmaSme( "--------------------------------------------" );
	SmaSme( "SyGL_Yz" );
	SmaSme( "--------------------------------------------" );
	// SmaSme( "Adapter: " + Sa_l.adapter );
	// SmaSme( "Dev: " + Sa_l.device );
	// SmaSme( "Surf: " + Sa_l.texture );
	SmaSme( "--------------------------------------------" );
}


//==============================================
// SyGL_BriYi
//==============================================
SyGL.BriYi = function( Sa_l )
{
	SmaSme( this.VaSy );

	const gl = Sa_l.gl;

	gl.bindBuffer( gl.ARRAY_BUFFER, null );
	gl.deleteBuffer( Sa_l.positionBuffer );

	gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, null );
	gl.deleteBuffer( Sa_l.indicesBuffer );

	// gl.deleteTexture(texture);

	gl.useProgram( null );
	// gl.deleteProgram(Sa_l.JiJa_v0 );
	// gl.deleteVertexArray(vertexArray);

}

//==============================================
// SyGL_BriYa
//==============================================
SyGL.BriYa = async function( Yz_l )
{
	// MAKE SESSION with Ji INTERFACE
	const Sa_l = { Ji: SyGL };
	Sa_l.KaVy = Yz_l.KaVy;


	await Module._HEAPO_wf;
	//const gl = document.getElementById( "MxPo_De" ).getContext( "webgl2", { xrCompatible: true } );
	const gl = document.getElementById( "MxPo_De" ).getContext( "webgl2" );
	if ( !gl )
	{
		SyGL.Trx( "WebGL2 required: Please check your Browser" );
		return;
	}
	Sa_l.gl = gl;

	Sa_l.tex = gl.createTexture();
	gl.activeTexture( gl.TEXTURE0 );
	gl.bindTexture( gl.TEXTURE_2D_ARRAY, Sa_l.tex );
	gl.texStorage3D
	(
		gl.TEXTURE_2D_ARRAY // topo
		, 1 // levels

		// fmt
		, gl.RGBA8
		// DIM
		, 512, 512, 2
	);

	gl.texParameteri( gl.TEXTURE_2D_ARRAY, gl.TEXTURE_MIN_FILTER, gl.NEAREST );
	gl.texParameteri( gl.TEXTURE_2D_ARRAY, gl.TEXTURE_MAG_FILTER, gl.NEAREST );
	//gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

	gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_WRAP_R, gl.CLAMP_TO_EDGE);


	//!!!
	// As needed
	SyGL.SyCho_JxRe( Sa_l );
	SyGL.SyCho_JaKu( Sa_l );
	SyGL.SyCho_JiJa( Sa_l );


	return Sa_l;
}


//==============================================
// SyGL_RESIZE
//==============================================
SyGL.KuGyChy_Je = function( Sa_l, MxPo_l )
{
	const width = MxPo_l.clientWidth;
	const height = MxPo_l.clientHeight;
	const needResize = width !== MxPo_l.width || height !== MxPo_l.height;
	if ( needResize )
	{
		MxPo_l.width = width;
		MxPo_l.height = height;
	}
	return needResize;
}

//==============================================
// SyGL_BriYe
//==============================================
SyGL.BriYe = function( Sa_l, GiDri_duk  )
{
	const gl = Sa_l.gl;


	// SmaSme( "SyGL_BriYe ", Sa_l );

	const time = GiDri_duk * 0.001;


	SyGL.SyCho_JaKu( Sa_l );


	//const tic = Module._HEAPO_wf();
	// HEAPO_wf(); // Module["HEAPU8"][ 0 ];
	//console.log( "Tic" + tic );
	SyGL.KuGyChy_Je( Sa_l, gl.canvas );


	gl.viewport( 0, 0, gl.canvas.width, gl.canvas.height );

	gl.enable( gl.DEPTH_TEST );
	gl.enable( gl.CULL_FACE );
	gl.clearColor( 0.7, 0.1, 0.6, 1.0 );
	gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );

	gl.useProgram( Sa_l.JiJa_v0 );



	const projection = mat4.perspective(
		( 30 * Math.PI ) / 180, gl.canvas.clientWidth / gl.canvas.clientHeight, 0.5, 10
	);
	const eye = [ 1, 4, -2 ];
	const target = [ 0, 0, 0 ];
	const up = [ 0, 1, 0 ];

	const view = mat4.lookAt( eye, target, up );
	const viewProjection = mat4.multiply( projection, view );
	const world = mat4.rotationY( time );

	gl.uniform3fv( Sa_l.u_lightDirectionLoc, vec3.normalize( [ 1, 8, -10 ] ) );
	gl.uniform1i( Sa_l.u_diffuseLoc, 0 );

	gl.uniformMatrix4fv(
		Sa_l.u_worldInverseTransposeLoc, false, mat4.transpose( mat4.inverse( world ) )
	);
	gl.uniformMatrix4fv(
		Sa_l.u_worldViewProjectionLoc, false, mat4.multiply( viewProjection, world )
	);


	gl.bindBuffer( gl.ARRAY_BUFFER, Sa_l.positionBuffer );
	gl.vertexAttribPointer( Sa_l.positionLoc, 3, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( Sa_l.positionLoc );

	gl.bindBuffer( gl.ARRAY_BUFFER, Sa_l.normalBuffer );
	gl.vertexAttribPointer( Sa_l.normalLoc, 3, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( Sa_l.normalLoc );

	gl.bindBuffer( gl.ARRAY_BUFFER, Sa_l.texcoordBuffer );
	gl.vertexAttribPointer( Sa_l.texcoordLoc, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( Sa_l.texcoordLoc );

	gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, Sa_l.indicesBuffer );

	gl.drawElements( gl.TRIANGLES, 6 * 6, gl.UNSIGNED_SHORT, 0 );
}

//==============================================
//
//==============================================
SyGL.SyCho_JiJa = function( Sa_l )
{
	const gl = Sa_l.gl;
	SmaSme( "SyGL JiJa: CLONE PROG" );

	// VS
	const vSrc =
	`#version 300 es
  uniform mat4 u_worldViewProjection;
  uniform mat4 u_worldInverseTranspose;

  in vec4 a_position;
  in vec3 a_normal;
  in vec2 a_texcoord;

  out vec2 v_texCoord;
  out vec3 v_normal;

  void main()
  {
    gl_Position = u_worldViewProjection * a_position;
    v_texCoord = a_texcoord;
    v_normal = (u_worldInverseTranspose * vec4(a_normal, 0)).xyz;
  }
  `;

  // FS
  const fSrc =
  `#version 300 es
  precision highp float;
  precision highp sampler2DArray;

  in vec2 v_texCoord;
  in vec3 v_normal;

  uniform sampler2DArray u_diffuse;
  uniform vec3 u_lightDirection;

  out vec4 Me_wf4;
  void main()
  {
    vec4 diffuseColor = texture( u_diffuse, vec3( v_texCoord, 0 ) );

    vec3 a_normal = normalize(v_normal);

	float l = dot(a_normal, u_lightDirection) * 0.5 + 0.5;


	Me_wf4 = vec4(diffuseColor.rgb * 0.25 + 0.75 * l, 1.0 );


	}
	`;
	//	Me_wf4 = vec4(diffuseColor.rgb * l, diffuseColor.a);



	function createShader( gl, type, source )
	{
		const sh = gl.createShader( type );
		gl.shaderSource( sh, source );
		gl.compileShader( sh );
		if ( !gl.getShaderParameter( sh, gl.COMPILE_STATUS ) )
		{
			throw new Error( gl.getShaderInfoLog( sh ) );
		}
		return sh;
	}

	function createProgram( gl, vs, fs )
	{
		const prg = gl.createProgram();
		gl.attachShader( prg, vs );
		gl.attachShader( prg, fs );
		gl.linkProgram( prg );
		if ( !gl.getProgramParameter( prg, gl.LINK_STATUS ) )
		{
			throw new Error( gl.getProgramInfoLog( prg ) );
		}
		return prg;
	}


	const vs = createShader( gl, gl.VERTEX_SHADER, vSrc );
	const fs = createShader( gl, gl.FRAGMENT_SHADER, fSrc );

	const JiJa_v0 = createProgram( gl, vs, fs );
	Sa_l.JiJa_v0 = JiJa_v0;

	Sa_l.u_lightDirectionLoc = gl.getUniformLocation( JiJa_v0, "u_lightDirection" );
	Sa_l.u_diffuseLoc = gl.getUniformLocation( JiJa_v0, "u_diffuse" );
	Sa_l.u_worldInverseTransposeLoc = gl.getUniformLocation( JiJa_v0, "u_worldInverseTranspose" );
	Sa_l.u_worldViewProjectionLoc = gl.getUniformLocation( JiJa_v0, "u_worldViewProjection" );

	Sa_l.positionLoc = gl.getAttribLocation( JiJa_v0, "a_position" );
	Sa_l.normalLoc = gl.getAttribLocation( JiJa_v0, "a_normal" );
	Sa_l.texcoordLoc = gl.getAttribLocation( JiJa_v0, "a_texcoord" );

}

//==============================================
//
//==============================================
SyGL.SyCho_JxRe = function( Sa_l )
{
	const gl = Sa_l.gl;
	SmaSme( "SyWG_SyCho_JxRe: CLONE SEQ" );

	function createBuffer( gl, data, type = gl.ARRAY_BUFFER )
	{
		const buf = gl.createBuffer();
		gl.bindBuffer( type, buf );
		gl.bufferData( type, data, gl.STATIC_DRAW );
		return buf;
	}

	const positions = new Float32Array( [
		1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, -1, 1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1,
	] );
	const normals = new Float32Array( [
		1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
	] );
	const texcoords = new Float32Array( [
		1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1,
	] );
	const indices = new Uint16Array( [
		0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23,
	] );

	Sa_l.positionBuffer = createBuffer( gl, positions );
	Sa_l.normalBuffer = createBuffer( gl, normals );
	Sa_l.texcoordBuffer = createBuffer( gl, texcoords );
	Sa_l.indicesBuffer = createBuffer( gl, indices, gl.ELEMENT_ARRAY_BUFFER );
}


//==============================================
//
//==============================================
SyGL.SyCho_JaKu = function( Sa_l )
{
	//SmaSme( "SyWG_SyCho_JaPo: ENGINE CLONE FORM" );
	const gl = Sa_l.gl;

	gl.activeTexture( gl.TEXTURE0 );
	gl.bindTexture( gl.TEXTURE_2D_ARRAY, Sa_l.tex );


	var JaPo_Si = document.getElementById('MxPo_De');

	gl.texSubImage3D
	(
		gl.TEXTURE_2D_ARRAY

		// MIP
		, 0
		// OFS
		, 0, 0, 0
		// DIM
		, 512, 512, 1

		// FMT
		, gl.RGBA
		, gl.UNSIGNED_BYTE

		// SRC
		//, new Uint8Array( [	255, 255, 128, 255, 0, 0, 0, 255, 255, 0, 0, 255, 255, 128, 0, 255 ] )
		, JaPo_Si

	);

}


//==============================================
//
//==============================================
SyGL.TxCho_JaKu = function( Sa_l )
{
	const gl = Sa_l.gl;
	// SmaSme( "SyWG_TxCho_JaPo: PSB CLONE FORM" );


}


//==============================================
// CLN-CMDs READ
//==============================================
SyGL.TaMo_Mi = function( Sa_l )
{
	const gl = Sa_l.gl;
	// SmaSme( "CMD READ" );



}


//==============================================
// SyGL_MoYy
//==============================================
SyGL.BriYo = function( Sa_l )
{
	SmaSme( "SyGL_BriYo" );

}


//==============================================
// END
//==============================================
