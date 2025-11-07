
//==============================================
// OPFS
//==============================================

//@@@
// GLOBAL
var opfs = OPFS();

async function OPFS_SmeStx()
{
	await opfs.writeFile('MEFS_A.txt', 'Hello World');
	const fileData = await opfs.readFile('MEFS_A.txt');
	console.log(await fileData.toText()); // "Hello World"

	await opfs.appendFile('MEFS_A.txt', '\nMore');
	// await opfs.renameFile('MEFS_A.txt', 'MEFS_B.txt');
	await opfs.copyFile('MEFS_A.txt', 'copy.txt');

	const exists = await opfs.fileExists('copy.txt');
	console.log("Copy Exists: " + exists); // true

	const files = await opfs.listFiles('.');
	console.log("List Files: " + files);
}


//==============================================
// EXPORT
//==============================================
export
{
	OPFS_SmeStx
}
//==============================================
// END
//==============================================
