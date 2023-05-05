const url = "http://localhost:3000/"

function sendWavFile(file) {
    var formData = new FormData();
    formData.append("audio_file", file);

    console.log(formData)
    fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

function getSong(title, artist, )
//console.log(sendWavFile("University of Toronto.wav"));
//console.log(textToSpeech("sunglasses, dark glasses, shades mask, bow-tie"))
//console.log(getImage("pewds5"))
//console.log(postImage("p2", "paewds.jpeg"))