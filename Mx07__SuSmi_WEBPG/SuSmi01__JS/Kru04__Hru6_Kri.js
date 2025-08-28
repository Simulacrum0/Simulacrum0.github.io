// Check if the browser supports the Web Speech API


const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";


const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = true;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const diagnostic = document.querySelector(".output");
const bg = document.querySelector("html");

document.body.onclick = () => {
  recognition.start();
  console.log("Ready to receive a color command.");
};

recognition.onresult = (event) =>
{
  const color = event.results[0][0].transcript;

document.getElementById('result').innerText = `Result received: ${color}`;

  bg.style.backgroundColor = color;
};

/*


if (!('webkitSpeechRecognition' in window))
{
	console.log('SPEAK NOT-CONNECTED');

	alert("Your browser doesn't support the Web Speech API. Please use Chrome or Edge.");
}
else
	{
    // Create a new instance of SpeechRecognition
    const recognition = new webkitSpeechRecognition();

	console.log('SPEAK CONNECTED');

    // Set properties
    recognition.continuous = true; // FALSE = Capture only one result
    recognition.interimResults = true; // FALSE = Get the final result, not partial results

    recognition.lang = 'en-US'; // Set the language to English

    // Start button click event
    document.getElementById('LISTEN').onclick = () =>
	{
        recognition.start(); // Start listening
    };


    // Handle the result when speech is detected
    recognition.onresult = (event) =>
		{
        const transcript = event.results[0][0].transcript; // Get the speech result

    var interim_transcript = '';

		for (var i = event.resultIndex; i < event.results.length; ++i) {
			if (event.results[i].isFinal) {
				final_transcript += event.results[i][0].transcript;
			} else {
				interim_transcript += event.results[i][0].transcript;
			}
		}
		final_transcript = capitalize(final_transcript);
		final_span.innerHTML = linebreak(final_transcript);
		interim_span.innerHTML = linebreak(interim_transcript);
		};


		console.log( transcript );
        document.getElementById('result').innerText = `You said: ${transcript}`;
    };


nomatch
Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the confidence threshold. Also available via the onnomatch property.

result
Fired when the speech recognition service returns a result — a word or phrase has been positively recognized and this has been communicated back to the app. Also available via the onresult property.

soundstart
Fired when any sound — recognizable speech or not — has been detected. Also available via the onsoundstart property.

soundend
Fired when any sound — recognizable speech or not — has stopped being detected. Also available via the onsoundend property.



    // Handle any errors
    recognition.onerror = (event) =>
	{
        console.error('Speech recognition error:', event.error);
    };

    // Log when the speech recognition service starts or ends
    recognition.onstart = () => {
        console.log('Speech recognition started');
    };
    recognition.onend = () => {
        console.log('Speech recognition ended');
    };
}

*/