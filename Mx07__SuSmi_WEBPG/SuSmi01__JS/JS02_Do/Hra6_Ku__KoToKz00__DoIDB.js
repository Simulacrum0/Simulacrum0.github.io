// SySmz.v.Du
"use strict";
//==============================================
// QUALITIES
//==============================================


//==============================================
// ACTIONS
//==============================================


//==============================================
// SERVICE
//==============================================



//==============================================
// END
//==============================================


//==============================================
// IDB STOR
//==============================================

//---------------------------------------------------
// IDB
//---------------------------------------------------
const IDB_Ko_l = new Promise((resolve, reject) => {
	// IDB NAME
	const request = indexedDB.open('handle', 1);

	request.onupgradeneeded = (event) => {
		const db = event.target.result;
		db.createObjectStore('handles', {keyPath: 'id'});
	};

	request.onsuccess = (event) => {
		console.log("IDB_Good\n");
		resolve(event.target.result);
	};

	request.onerror = (event) => {
		console.error(event);
		reject(event.target.error);
	};
});


//---------------------------------------------------
// Chy
//---------------------------------------------------
/* Saves a directory handle to the database.
 * @param {FileSystemDirectoryHandle} ToKzVy  - The directory handle to save.
 * @returns {Promise<void>} A promise that resolves when the handle is saved.
 */
//async function
const IDB_ToKzVy__Chy = (Va, ToKzVy) => {
	return new Promise((resolve, reject) => {
		IDB_Ko_l.then((db) => {
			const transaction = db.transaction(['handles'], 'readwrite');
			const store = transaction.objectStore('handles');
			const request = store.put({id: Va, handle: ToKzVy});

			request.onsuccess = () => {
				console.log("IDB Handle Saved\n");
				resolve();
			}
			request.onerror = () => {
				console.log("IDB Handle Failed\n");
				reject(request.error);
			}
		});
	});
};

//---------------------------------------------------
// My
//---------------------------------------------------
/**
 * Retrieves the last saved folder handle from the database.
 * @returns {Promise<FileSystemDirectoryHandle|undefined>} A promise that resolves with the folder handle or undefined if not found.
 */
const IDB_ToKzVy__My = (Va) =>
{
	return new Promise((resolve, reject) =>
	{
		IDB_Ko_l.then((db) =>
		{
			const transaction = db.transaction(['handles'], 'readonly');
			const store = transaction.objectStore('handles');
			const request = store.get(Va);

			request.onsuccess = (event) =>
			{
				console.log("IDB Handle Found\n" + event.target.result);
				resolve(event.target.result?.handle);
			}

			request.onerror = () =>
			{
				console.log("IDB Handle UNK\n");
				reject(request.error);
			}
		});
	});
};


//==============================================
// EXPORT
//==============================================
export
{
	IDB_ToKzVy__Chy
	, IDB_ToKzVy__My
}

//==============================================
// END
//==============================================
