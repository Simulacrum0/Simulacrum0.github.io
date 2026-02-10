// SySmz.v.Du
"use strict";
const DoSAY = { SyTu_vsg: "Do", VaDy_vsg: "SAY" };
window.DoSAY = DoSAY;

//==============================================
// QUALITIES
/*
Character	Escape code
"	&quot;
&	&amp;
'	&apos;
<	&lt;
>	&gt;


Periods (.): Indicate a full stop and a longer pause. Use them to separate complete thoughts and create clear sentence boundaries.
Commas (,): Signal shorter pauses within sentences. Use them to separate clauses, list items, or introduce brief breaks for breath.
Ellipses (...): Represent a longer, more deliberate pause. They can indicate trailing thoughts, hesitation, or a dramatic pause.
Example: "And then... it happened."
Hyphens (-): Can be used to indicate a brief pause or a sudden break in thought.
Example: "I wanted to say - but I couldn't."


platform (string) - Determines the formatter to use to render SSML. Valid values are:

"amazon-alexa"
"amazon-polly"
"amazon-polly-neural"
"apple-avspeechsynthesizer"
"google-assistant"
"ibm-watson"
"microsoft-azure"
"microsoft-sapi"
"w3c"
"samsung-bixby"
"elevenlabs"

*/
//==============================================
// TRAITS
/*

SSML:
- BraHi = 32K

<voice>
	gender: One of "male", "female" or "neutral".
	<voice language="en-GB" gender="male" required="gender">a flying bird </voice>
	KyGOOG_TaGra: https://docs.cloud.google.com/text-to-speech/docs/list-voices-and-types

<emphasis>
		strong
		moderate
		none
		reduced
		<emphasis level="moderate">This is an important announcement</emphasis>

<lang>: Specify the natural language of the enclosed content
	<speak>The French word for cat is <lang xml:lang=\"fr-FR\">chat</lang>.</speak>

<phoneme>
	Can use IPA or X-SAMPA: https://en.wikipedia.org/wiki/X-SAMPA

<audio>: Embed < 120s, 24kHz, MP3, 5MiB, Mono, audio clips via URL
	<speak>Now Bixby can play animal sounds! <audio src=\"https://example.com/animal.mp3\"></audio></speak>

<say-as>: Specify how to interpret a text construction (for example, as a cardinal or ordinal number)
	<speak>There are <say-as interpret-as=\"cardinal\">12</say-as> options.</speak>

	cardinal: Interprets the value as a cardinal number. <say-as interpret-as=\"cardinal\">12345</say-as> will be spoken as "twelve thousand three hundred forty-five".
	ordinal: Interprets the value as an ordinal number. <say-as interpret-as=\"ordinal\">31</say-as> will be spoken as "thirty-first".

	<say-as interpret-as="characters">can</say-as>
	spell-out: Spells out the value letter by letter, rather than trying to pronounce it as a word or phrase. <say-as interpret-as=\"spell-out\">abc</say-as> will be spoken as "a, b, c".
	fraction: Interprets the value as a fraction.

	<say-as interpret-as=\"fraction\">1/2</say-as> will be spoken as "one half".
	<say-as interpret-as=\"fraction\">3/4</say-as> will be spoken as "three quarters".
	Mixed fractions using the + symbol as a separator: <say-as interpret-as=\"fraction\">2+1/2</say-as> will be spoken as "two and one half".

	digits: Spells out a numeric value digit by digit, rather than trying to pronounce it as a cardinal or ordinal number. <say-as interpret-as=\"digits\">12345</say-as> will be spoken as "1, 2, 3, 4, 5".

	DATE: <say-as interpret-as="date" format="yyyymmdd" detail="1">1960-09-10 </say-as>
	TIME: <say-as interpret-as="time" format="hms12">2:30pm</say-as>

	EXPLETIVE: <say-as interpret-as="expletive">censor this</say-as>  uses 'bleep'

	PLURAL_UNITS:
	<say-as interpret-as="unit">10 foot</say-as>

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

	RATE VALUES:
		x-slow: 50% of normal speed
		slow: 75%
		medium: 100% (default)
		fast: 125%
		x-fast : 150%
		percentage: increase or decrease the speed of speech, from 20% to 200%

	PITCH VALUES:
		x-low: -25% below normal pitch
		low: -10%
		medium: normal pitch (default)
		high: +10%
		x-high : +25%
		percentage: increase or decrease the pitch, from -33.3% to +50%

	VOLUME VALUES:
		silent: no volume
		x-soft: -4db below normal volume
		soft: -2db
		medium: no change in volume (default)
		loud: +2db
		x-loud : +4db
		decibels: increase or decrease the volume in decibels, from -6db to +6db

	JaPeTe:
		"<speak>Normal volume for the first sentence. <prosody volume=\"x-loud\">
		Louder volume for the second sentence</prosody>. When I wake up,
		<prosody rate=\"x-slow\">I speak quite slowly</prosody>. I can speak with my
		normal pitch, <prosody pitch=\"x-high\">but also with a much higher
		pitch</prosody>, and also <prosody pitch=\"low\">with a lower pitch</prosody>.
		</speak>"

	SEMI-TONE: +/-#st
		prosody rate="slow" pitch="-2st">Can you hear me now?</prosody>

<mark> Get Events based on markup to lipsync ?
		Go from <mark name="here"/> here, to <mark name="there"/> there!
*/

//==============================================
/*

The following voices can speak in multiple styles:
en-US-Neural2-F
en-US-Neural2-J
Use the <google:style> tag to control what style to use. Only use the tag around full sentences.

Example:



<speak><google:style name="lively">Hello I'm so happy today!</google:style></speak>
The name field supports the following values:

apologetic
calm
empathetic
firm
lively
*/
//==============================================
const SAY = Object.freeze
({
	SAY0_qk: 0
	, SAY1_qk: 1
	, SAY2_qk: 2

});


//==============================================
// ACTIONS
//==============================================

//-------------------------------------------------
DoSAY.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaJe( "[" + this.VaDy_vsg + "] SmaYz" );

}


//==============================================
// LIFE
//==============================================

//-------------------------------------------------
DoSAY.BriYi = function( Sa_l )
//-------------------------------------------------
{
}

//-------------------------------------------------
DoSAY.BriYa = function( Yz_k )
//-------------------------------------------------
{
	const Sa_l = SySmz__YaFz_v( DoSAY );


	if (!window.speechSynthesis)
		{
	  alert("Your device does not support the SpeechSynthesis API");
	}
	else
	{
	  let availableVoices = speechSynthesis.getVoices();
	  let utterance = new SpeechSynthesisUtterance();
	  utterance.text = "Text into Voice Test";

	  utterance.voice = availableVoices[ 0 ];

	  //utterance.voice = availableVoices.find(o => o.voiceURI === document.getElementById('voice-choice').value) || availableVoices[0];
	  // utterance.pitch = document.getElementById('pitch').value;
	 // utterance.rate = document.getElementById('rate').value;

	  speechSynthesis.speak(utterance);
	}
  }


	return SySmz__YaFx_v( Sa_l );
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
