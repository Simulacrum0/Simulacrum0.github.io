( function ( global, factory )
{
	if ( typeof define === 'function' && define.amd )
	{
		define( [ 'exports' ], factory );
	}
	else if ( typeof exports !== 'undefined' )
	{
		factory( exports );
	}
	else if ( typeof module === 'object' && module.exports )
	{
		module.exports = factory();
	}
	else
	{
		factory( global );
	}
}( typeof self !== 'undefined' ? self : this, function ( exports )
{
	function createOPFSHelper()
	{
		if ( typeof navigator === 'undefined' || !navigator.storage )
		{
			console.error( new Error( 'OPFS() requires a Browser with File System Access API Support' ) );
		}
		var rootHandle;

		async function initRootHandle()
		{
			try
			{
				if ( !rootHandle )
				{
					rootHandle = await navigator.storage.getDirectory();
				}
				return rootHandle;
			}
			catch ( error )
			{
				console.error( error );
			}
		}

		function normalizePath( path )
		{
			if ( !path ) return [];
			var segments = path.split( '/' ).filter( function ( segment )
			{
				return segment !== '';
			} );
			var resolvedSegments = [];
			for ( var i = 0; i < segments.length; i++ )
			{
				var segment = segments[ i ];
				if ( segment === '.' ) continue;
				if ( segment === '..' )
				{
					resolvedSegments.pop();
				}
				else
				{
					resolvedSegments.push( segment );
				}
			}
			return resolvedSegments;
		}

		async function getHandle( path, kind, create )
		{
			kind = kind || 'file';
			create = create || false;
			try
			{
				await initRootHandle();
				var segments = normalizePath( path );
				var currentHandle = rootHandle;
				for ( var i = 0; i < segments.length; i++ )
				{
					var segment = segments[ i ];
					var isLast = i === segments.length - 1;
					try
					{
						if ( isLast && kind === 'file' )
						{
							currentHandle = await currentHandle.getFileHandle( segment,
							{
								create: create
							} );
						}
						else
						{
							currentHandle = await currentHandle.getDirectoryHandle( segment,
							{
								create: create
							} );
						}
					}
					catch ( error )
					{
						if ( error instanceof DOMException && error.name === 'NotFoundError' )
						{
							throw new Error( 'Path not found: ' + path );
						}
						console.error( error );
					}
				}
				return currentHandle;
			}
			catch ( error )
			{
				console.error( error );
			}
		}

		function createFileDataWrapper( fileHandle )
		{
			return {
				fileHandle: fileHandle,
				toBlob: async function ()
				{
					try
					{
						var file = await fileHandle.getFile();
						return file;
					}
					catch ( error )
					{
						console.error( error );
					}
				},
				toText: async function ()
				{
					try
					{
						var file = await fileHandle.getFile();
						return await file.text();
					}
					catch ( error )
					{
						console.error( error );
					}
				},
				toJSON: async function ()
				{
					try
					{
						var text = await this.toText();
						return JSON.parse( text );
					}
					catch ( error )
					{
						console.error( error );
					}
				},
				toArrayBuffer: async function ()
				{
					try
					{
						var file = await fileHandle.getFile();
						return await file.arrayBuffer();
					}
					catch ( error )
					{
						console.error( error );
					}
				},
				toDataURL: async function ()
				{
					try
					{
						var blob = await this.toBlob();
						return new Promise( function ( resolve, reject )
						{
							var reader = new FileReader();
							reader.onload = function ()
							{
								resolve( reader.result );
							};
							reader.onerror = reject;
							reader.readAsDataURL( blob );
						} );
					}
					catch ( error )
					{
						console.error( error );
					}
				}
			};
		};

		var opfsHelper = {
			readFile: async function ( path )
			{
				try
				{
					var fileHandle = await getHandle( path, 'file' );
					return createFileDataWrapper( fileHandle );
				}
				catch ( error )
				{
					console.error( error );
				}
			},

			writeFile: async function ( path, data )
			{
				try
				{
					var fileHandle = await getHandle( path, 'file', true );
					var writable = await fileHandle.createWritable();
					if ( typeof data === 'string' || data instanceof ArrayBuffer || data instanceof Blob )
					{
						await writable.write( data );
						await writable.close();
					}
					else
					{
						await writable.close();
						throw new Error( 'Unsupported data type' );
					}
				}
				catch ( error )
				{
					console.error( error );
				}
			},

			appendFile: async function ( path, data )
			{
				try
				{
					var fileHandle = await getHandle( path, 'file' );
					var file = await fileHandle.getFile();
					var writable = await fileHandle.createWritable(
					{
						keepExistingData: true
					} );
					await writable.seek( file.size );
					if ( typeof data === 'string' || data instanceof ArrayBuffer || data instanceof Blob )
					{
						await writable.write( data );
						await writable.close();
					}
					else
					{
						await writable.close();
						throw new Error( 'Unsupported data type' );
					}
				}
				catch ( error )
				{
					console.error( error );
				}
			},

			deleteFile: async function ( path )
			{
				try
				{
					var segments = normalizePath( path );
					if ( segments.length === 0 )
					{
						throw new Error( 'Cannot delete root directory' );
					}
					var parentPath = segments.slice( 0, -1 ).join( '/' );
					var fileName = segments[ segments.length - 1 ];
					var parentHandle = await getHandle( parentPath, 'directory' );
					await parentHandle.removeEntry( fileName );
				}
				catch ( error )
				{
					console.error( error );
				}
			},

			renameFile: async function ( oldPath, newPath )
			{
				try
				{
					var file = await this.readFile( oldPath );
					var content = await file.toArrayBuffer();
					await this.writeFile( newPath, content );
					await this.deleteFile( oldPath );
				}
				catch ( error )
				{
					console.error( error );
				}
			},

			copyFile: async function ( srcPath, destPath )
			{
				try
				{
					var file = await this.readFile( srcPath );
					var content = await file.toArrayBuffer();
					await this.writeFile( destPath, content );
				}
				catch ( error )
				{
					console.error( error );
				}
			},

			fileExists: async function ( path )
			{
				try
				{
					await getHandle( path, 'file' );
					return true;
				}
				catch ( error )
				{
					return false;
				}
			},

			getFileHandle: async function ( path )
			{
				try
				{
					return await getHandle( path, 'file' );
				}
				catch ( error )
				{
					console.error( error );
				}
			},

			readDir: async function ( path )
			{
				try
				{
					var dirHandle = await getHandle( path, 'directory' );
					var result = [];
					var iterator = await dirHandle.entries();
					var entry;
					while ( !( entry = await iterator.next() ).done )
					{
						var name = entry.value[ 0 ];
						var handle = entry.value[ 1 ];
						if ( handle.kind === 'file' )
						{
							var file = await handle.getFile();
							result.push(
							{
								name: name,
								kind: 'file',
								size: file.size,
								lastModified: file.lastModified,
								type: file.type
							} );
						}
						else
						{
							result.push(
							{
								name: name,
								kind: 'directory'
							} );
						}
					}
					return result;
				}
				catch ( error )
				{
					console.error( error );
				}
			},

			listFiles: async function ( path )
			{
				try
				{
					var contents = await this.readDir( path );
					return contents.filter( function ( item )
						{
							return item.kind === 'file';
						} )
						.map( function ( file )
						{
							return file.name;
						} );
				}
				catch ( error )
				{
					console.error( error );
				}
			},

			listDirectories: async function ( path )
			{
				try
				{
					var contents = await this.readDir( path );
					return contents.filter( function ( item )
						{
							return item.kind === 'directory';
						} )
						.map( function ( dir )
						{
							return dir.name;
						} );
				}
				catch ( error )
				{
					console.error( error );
				}
			},

			readAllFiles: async function ( path )
			{
				try
				{
					var allFiles = [];
					async function walkDir( dirPath, basePath )
					{
						basePath = basePath || '';
						var contents = await opfsHelper.readDir( dirPath );
						var promises = [];
						for ( var i = 0; i < contents.length; i++ )
						{
							var item = contents[ i ];
							var fullPath = basePath ? basePath + '/' + item.name : item.name;
							if ( item.kind === 'file' )
							{
								allFiles.push( opfsHelper.joinPath( dirPath, fullPath ) );
							}
							else
							{
								promises.push( walkDir( opfsHelper.joinPath( dirPath, item.name ), fullPath ) );
							}
						}
						await Promise.all( promises );
					}
					await walkDir( path );
					return allFiles;
				}
				catch ( error )
				{
					console.error( error );
				}
			},

			readAllDirectories: async function ( path )
			{
				try
				{
					var allDirs = [ path ];
					async function walkDir( dirPath )
					{
						var contents = await opfsHelper.readDir( dirPath );
						var promises = [];
						for ( var i = 0; i < contents.length; i++ )
						{
							var item = contents[ i ];
							if ( item.kind === 'directory' )
							{
								var subDir = opfsHelper.joinPath( dirPath, item.name );
								allDirs.push( subDir );
								promises.push( walkDir( subDir ) );
							}
						}
						await Promise.all( promises );
					}
					await walkDir( path );
					return allDirs;
				}
				catch ( error )
				{
					console.error( error );
				}
			},

			createDirectory: async function ( path )
			{
				try
				{
					await getHandle( path, 'directory', true );
				}
				catch ( error )
				{
					console.error( error );
				}
			},

			deleteDirectory: async function ( path )
			{
				try
				{
					var segments = normalizePath( path );
					if ( segments.length === 0 )
					{
						throw new Error( 'Cannot delete root directory' );
					}
					var parentPath = segments.slice( 0, -1 ).join( '/' );
					var dirName = segments[ segments.length - 1 ];
					var parentHandle = await getHandle( parentPath, 'directory' );
					await parentHandle.removeEntry( dirName,
					{
						recursive: true
					} );
				}
				catch ( error )
				{
					console.error( error );
				}
			},

			renameDirectory: async function ( oldPath, newPath )
			{
				try
				{
					var allFiles = [];
					async function walkDir( dirPath, basePath )
					{
						basePath = basePath || '';
						var contents = await opfsHelper.readDir( dirPath );
						var promises = [];
						for ( var i = 0; i < contents.length; i++ )
						{
							var item = contents[ i ];
							var fullPath = basePath ? basePath + '/' + item.name : item.name;
							if ( item.kind === 'file' )
							{
								allFiles.push( dirPath + '/' + fullPath );
							}
							else
							{
								promises.push( walkDir( dirPath + '/' + item.name, fullPath ) );
							}
						}
						await Promise.all( promises );
					}

					await walkDir( oldPath );
					await this.createDirectory( newPath );
					var copyPromises = [];
					for ( var i = 0; i < allFiles.length; i++ )
					{
						var filePath = allFiles[ i ];
						var relativePath = filePath.slice( oldPath.length + 1 );
						var newFilePath = newPath + '/' + relativePath;
						var parentDir = this.getParentDirectory( newFilePath );
						if ( parentDir !== newPath )
						{
							await this.createDirectory( parentDir );
						}
						copyPromises.push( this.copyFile( filePath, newFilePath ) );
					}
					await Promise.all( copyPromises );
					await this.deleteDirectory( oldPath );
				}
				catch ( error )
				{
					console.error( error );
				}
			},

			dirExists: async function ( path )
			{
				try
				{
					await getHandle( path, 'directory' );
					return true;
				}
				catch ( error )
				{
					return false;
				}
			},

			getDirectoryHandle: async function ( path, options )
			{
				try
				{
					options = options ||
					{};
					return await getHandle( path, 'directory', options.create );
				}
				catch ( error )
				{
					console.error( error );
				}
			},

			resolvePath: function ( path )
			{
				return normalizePath( path ).join( '/' );
			},

			joinPath: function ()
			{
				var parts = Array.prototype.slice.call( arguments );
				return parts.map( function ( part )
					{
						return part.replace( /^\/|\/$/g, '' );
					} )
					.filter( Boolean )
					.join( '/' );
			},

			splitPath: function ( path )
			{
				return normalizePath( path );
			},

			getParentDirectory: function ( path )
			{
				var segments = normalizePath( path );
				if ( segments.length <= 1 ) return '';
				return segments.slice( 0, -1 ).join( '/' );
			},

			ensurePermission: async function ( handle, mode )
			{
				try
				{
					mode = mode || 'readwrite';
					var status = await handle.queryPermission(
					{
						mode: mode
					} );
					if ( status === 'granted' )
					{
						return true;
					}
					var newStatus = await handle.requestPermission(
					{
						mode: mode
					} );
					return newStatus === 'granted';
				}
				catch ( error )
				{
					console.error( error );
				}
			},

			getFileMeta: async function ( path )
			{
				try
				{
					var fileHandle = await getHandle( path, 'file' );
					var file = await fileHandle.getFile();
					return {
						name: file.name,
						kind: 'file',
						size: file.size,
						lastModified: file.lastModified,
						type: file.type
					};
				}
				catch ( error )
				{
					console.error( error );
				}
			},

			isReadable: async function ( path )
			{
				try
				{
					var handle = await getHandle( path, 'file' );
					return await this.ensurePermission( handle, 'read' );
				}
				catch ( error )
				{
					return false;
				}
			},

			isWritable: async function ( path )
			{
				try
				{
					var handle = await getHandle( path, 'file' );
					return await this.ensurePermission( handle, 'readwrite' );
				}
				catch ( error )
				{
					return false;
				}
			},

			streamFile: async function ( path )
			{
				try
				{
					var fileHandle = await getHandle( path, 'file' );
					var file = await fileHandle.getFile();
					return file.stream();
				}
				catch ( error )
				{
					console.error( error );
				}
			},

			writeStream: async function ( path )
			{
				try
				{
					var fileHandle = await getHandle( path, 'file', true );
					return await fileHandle.createWritable();
				}
				catch ( error )
				{
					console.error( error );
				}
			},

			readFileChunk: async function ( path, start, end )
			{
				try
				{
					var fileHandle = await getHandle( path, 'file' );
					var file = await fileHandle.getFile();
					if ( start < 0 ) start = 0;
					if ( end > file.size ) end = file.size;
					if ( start >= end )
					{
						return new ArrayBuffer( 0 );
					}
					var blob = file.slice( start, end );
					return await blob.arrayBuffer();
				}
				catch ( error )
				{
					console.error( error );
				}
			},

			importFile: async function ( file, destPath )
			{
				try
				{
					await this.writeFile( destPath, file );
				}
				catch ( error )
				{
					console.error( error );
				}
			},

			exportFile: async function ( path )
			{
				try
				{
					var file = await this.readFile( path );
					return await file.toBlob();
				}
				catch ( error )
				{
					console.error( error );
				}
			},

			getQuota: async function ()
			{
				try
				{
					if ( navigator.storage && navigator.storage.estimate )
					{
						var estimate = await navigator.storage.estimate();
						return {
							used: estimate.usage || 0,
							available: estimate.quota ? estimate.quota - ( estimate.usage || 0 ) : 0
						};
					}
					else
					{
						throw new Error( 'StorageManager.estimate() not available in this environment' );
					}
				}
				catch ( error )
				{
					console.error( error );
				}
			},

			clearOPFS: async function ()
			{
				try
				{
					var root = await initRootHandle();
					async function removeAll( dirHandle )
					{
						var iterator = await dirHandle.entries();
						var entry;
						while ( !( entry = await iterator.next() ).done )
						{
							var name = entry.value[ 0 ];
							var handle = entry.value[ 1 ];
							if ( handle.kind === 'file' )
							{
								await dirHandle.removeEntry( name );
							}
							else
							{
								await removeAll( handle );
								await dirHandle.removeEntry( name );
							}
						}
					}
					await removeAll( root );
				}
				catch ( error )
				{
					console.error( error );
				}
			},

			debugTree: async function ( path )
			{
				try
				{
					path = path || '';
					var output = '';
					var exists = await this.dirExists( path );
					if ( !exists && path !== '' )
					{
						console.error( new Error( 'Directory does not exist: ' + path ) );
					}
					async function buildTree( dirPath, indent )
					{
						indent = indent || '';
						var contents = await opfsHelper.readDir( dirPath );
						for ( var i = 0; i < contents.length; i++ )
						{
							var item = contents[ i ];
							var isLast = i === contents.length - 1;
							output += indent + ( isLast ? '└── ' : '├── ' ) + item.name + '\n';
							if ( item.kind === 'directory' )
							{
								await buildTree(
									opfsHelper.joinPath( dirPath, item.name ), indent + ( isLast ? '    ' : '│   ' )
								);
							}
						}
					}
					await buildTree( path );
					return output;
				}
				catch ( error )
				{
					console.error( error );
				}
			}
		};

		return opfsHelper;
	};

	Object.defineProperty( exports, '__esModule',
	{
		value: true
	} );

	exports.OPFS = createOPFSHelper;
} ) );


//==============================================
// END
//==============================================
