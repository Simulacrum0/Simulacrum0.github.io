// SySmz.v.Du
"use strict";
const SySPK = { VaSy: "SySPK" };
window.SySPK = SySPK;

//==============================================
// QUALITIES
/*
SSML:
- BraHi = 32K

<emphasis>

<lang>: Specify the natural language of the enclosed content
	<speak>The French word for cat is <lang xml:lang=\"fr-FR\">chat</lang>.</speak>

<audio>: Embed < 120s, 24kHz, MP3, 5MiB, Mono, audio clips via URL
	<speak>Now Bixby can play animal sounds! <audio src=\"https://example.com/animal.mp3\"></audio></speak>

<say-as>: Specify how to interpret a text construction (for example, as a cardinal or ordinal number)
	<speak>There are <say-as interpret-as=\"cardinal\">12</say-as> options.</speak>
	cardinal: Interprets the value as a cardinal number. <say-as interpret-as=\"cardinal\">12345</say-as> will be spoken as "twelve thousand three hundred forty-five".
	ordinal: Interprets the value as an ordinal number. <say-as interpret-as=\"ordinal\">31</say-as> will be spoken as "thirty-first".
	spell-out: Spells out the value letter by letter, rather than trying to pronounce it as a word or phrase. <say-as interpret-as=\"spell-out\">abc</say-as> will be spoken as "a, b, c".
	fraction: Interprets the value as a fraction.
	<say-as interpret-as=\"fraction\">1/2</say-as> will be spoken as "one half".
	<say-as interpret-as=\"fraction\">3/4</say-as> will be spoken as "three quarters".
	Mixed fractions using the + symbol as a separator: <say-as interpret-as=\"fraction\">2+1/2</say-as> will be spoken as "two and one half".
	digits: Spells out a numeric value digit by digit, rather than trying to pronounce it as a cardinal or ordinal number. <say-as interpret-as=\"digits\">12345</say-as> will be spoken as "1, 2, 3, 4, 5".

<break>: Introduce a variable length break within longer speech
	<s>: Mark sentences for appropriate breaks within longer speech
	<p>: Mark paragraphs for appropriate breaks within longer speech
	<speak><s>This is the first sentence.</s><s>This is the second sentence.</s></speak>

	<break> tag, which lets you specify a break with either the strength or time attribute:
		strength specifies a duration in relative values, from no pause (none) to the equivalent of a paragraph break (x-strong). The following are possible values:
		none
		x-weak
		weak
		medium(default)
		strong
		x-strong
		<speak>Take a deep breath.<break time=\"200ms\"/>Exhale.<break strength=\"strong\"/>Dance.</speak>

<sub>: Provide an alternate pronunciation for an acronym or a term Bixby has trouble pronouncing
		<speak>The speed is 50 <sub alias=\"miles per hour\">mph</sub>.</speak>

<prosody>: Modify the rate, pitch, and volume of the speech
		rate values:
		x-slow: 50% of normal speed
		slow: 75%
		medium: 100% (default)
		fast: 125%
		x-fast : 150%
		percentage: increase or decrease the speed of speech, from 20% to 200%
		pitch values:
		x-low: -25% below normal pitch
		low: -10%
		medium: normal pitch (default)
		high: +10%
		x-high : +25%
		percentage: increase or decrease the pitch, from -33.3% to +50%
		volume values:
		silent: no volume
		x-soft: -4db below normal volume
		soft: -2db
		medium: no change in volume (default)
		loud: +2db
		x-loud : +4db
		decibels: increase or decrease the volume in decibels, from -6db to +6db

		"<speak>Normal volume for the first sentence. <prosody volume=\"x-loud\">
		Louder volume for the second sentence</prosody>. When I wake up,
		<prosody rate=\"x-slow\">I speak quite slowly</prosody>. I can speak with my
		normal pitch, <prosody pitch=\"x-high\">but also with a much higher
		pitch</prosody>, and also <prosody pitch=\"low\">with a lower pitch</prosody>.
		</speak>"
*/
//==============================================
const ViTe_qk = Object.freeze
({
	ViTe0: 0
	, ViTe1: 1
	, ViTe2: 2

});


//==============================================
// ACTIONS
//==============================================

//-------------------------------------------------
SySPK.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaSme( "Service Example: ", this.VaSy );

	Object.keys( ViTe_qk ).forEach( _Va => {	SmaSme( _Va ); });
	Object.values( ViTe_qk ).forEach( _Vi => { SmaSme( _Vi );	});
}


//==============================================
// LIFE
//==============================================

//-------------------------------------------------
SySPK.BriYi = function( Sa_l )
//-------------------------------------------------
{
}

//-------------------------------------------------
SySPK.BriYa = function( Yz )
//-------------------------------------------------
{
	const Sa_l = { Ji: SySPK };


	return Sa_l;
}


//-------------------------------------------------
SyTe.Mo = function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{

	const synth = window.speechSynthesis;

	const ssmlText = `
	<speak>
	<voice name="en-US-Wavenet-D">
		Hello! This is an example of <emphasis>SSML</emphasis> in action.
		<break time="1s"/>
		I can also include <say-as interpret-as="characters">SSML</say-as> tags.
	</voice>
	</speak>
	`;

	const utterance = new SpeechSynthesisUtterance(ssmlText);
	utterance.lang = 'en-US';

	synth.speak(utterance);


}

//==============================================
// END
//==============================================
