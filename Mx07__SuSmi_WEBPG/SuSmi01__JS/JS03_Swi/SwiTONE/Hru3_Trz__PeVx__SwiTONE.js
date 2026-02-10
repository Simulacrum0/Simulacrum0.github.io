// SySmz.v.Du
"use strict";
const SwiTONE = { SyTu_vsg: "Swi", VaDy_vsg: "TONE" };
window.SwiTONE = SwiTONE;

//==============================================
// QUALITIES
//==============================================
const ViTONE = Object.freeze
({
	Va0_qk: 0
	, Va1_qk: 1
	, Va2_qk: 2
});

//==============================================
// ACTIONS
//==============================================

//-------------------------------------------------
SwiTONE.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaJe( "[" + this.VaDy_vsg + "] SmaYz" );
}


//==============================================
// LIFE
//==============================================

//-------------------------------------------------
SwiTONE.BriYi = function( Sa_l )
//-------------------------------------------------
{
}

//-------------------------------------------------
SwiTONE.BriYa = function( Yz_k )
//-------------------------------------------------
{
	const Sa_l = SySmz__YaFz_v( SwiTONE );


	return SySmz__YaFx_v( Sa_l );
}


//-------------------------------------------------
SwiTONE.Mo = function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{
}


<script src="https://unpkg.com/tone"></script>

	async function playNote()
	{
		await Tone.start();

		// create a synth
		// const synth = new Tone.Synth().toDestination();

		// //play a middle 'C' for the duration of an 8th note
		// synth.triggerAttackRelease("C4", "8n");

		// const now = Tone.now();
		// // trigger the attack immediately
		// synth.triggerAttack("C4", now);
		// // wait one second before triggering the release
		// synth.triggerRelease(now + 1);

		const osc = new Tone.Oscillator().toDestination();
		// start at "C4"
		osc.frequency.value = "C5";
		// ramp to "C2" over 2 seconds
		osc.frequency.rampTo("C1", 0.5 );
		// start the oscillator for 2 seconds
		osc.start().stop("+0.5");

	}

	async function ClikClam()
	{
		const synth = new Tone.Synth().toDestination();
		synth.triggerAttackRelease("C4", "8n");
	}

	async function PolySynth()
	{
		const synth = new Tone.PolySynth(Tone.Synth).toDestination();
		const now = Tone.now();
		synth.triggerAttack("D4", now);
		synth.triggerAttack("F4", now + 0.5);
		synth.triggerAttack("A4", now + 1);
		synth.triggerAttack("C5", now + 1.5);
		synth.triggerAttack("E5", now + 2);
		synth.triggerRelease(["D4", "F4", "A4", "C5", "E5"], now + 4);
	}


//==============================================
// END
//==============================================
