//==============================================
// QUALITIES
//==============================================
const SySmz_l = Object.freeze
({
	HrxKu: 0

	, HraBru_KiFET: 1
	, HraBru_KiP2P: 2

	, HrySmz_KiGL: 3
	, HrySmz_KiWG: 4
	, HrySmz_KiXR: 5
});


//==============================================
// ACTIONS
//==============================================


//==============================================
// SERVICE
//==============================================
window.createRobo = function createRobo(model)
{
	return {



		model: model,

	//-------------------------------------------------
	//
	//-------------------------------------------------
    Sma: function()
	{
      console.log(`Model: ${this.model}`);

		Object.keys( SySmz_l ).forEach( SySmz_Va => {
			//console.log( SySmz_Va );
		});

		Object.values( SySmz_l ).forEach( SySmz_Vi => {
			//console.log( SySmz_Vi );
		});


    }
  };
}


//==============================================
// SERVICE
//==============================================
export default createRobo;

//==============================================
// END
//==============================================
