const url = "http://127.0.0.1:5000/"

function postPlaylist(){
    let formData = new FormData();
    formData.append("link", "https://youtube.com");

    fetch(url + "playlist/", {
        method:"POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

// Expect MP3 file back
function getPlaylist(playlistID){
    return fetch(url + "playlist/jkkkkkk", {
        method:"GET"
    }) 
    .then(response => response.blob())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error(error));
}



function getRecommender(){
    return fetch(url + "model/10", {
        method:"GET"
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        return data;
    })
    .catch(error => console.error(error));
}

export {postPlaylist, getPlaylist, getRecommender};