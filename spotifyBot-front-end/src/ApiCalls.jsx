const url = "http://127.0.0.1:5000/"

function postPlaylist(){
    let formData = new FormData();
    formData.append("link", "https://youtube.com");

    fetch(url + "playlist/5QwFq7iyLNBgcwxbhNOORE", {
        method:"POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

// Expect MP3 file back
function getPlaylist(playlistID){
    return fetch(url + "playlist/hii", {
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


function getMasterPlaylist(){
    return [
    {   
        "Title": "My Playlist #12",
        "Link": "https://open.spotify.com/playlist/1F8BHx4c6QBXiGEuDmhgmP",
        "ID": "1F8BHx4c6QBXiGEuDmhgm",
        "Image": "https://i.scdn.co/image/ab67616d0000b273baf89eb11ec7c657805d2da0",
    },
    {
        "Title": "boop!",
        "Link": "https://open.spotify.com/playlist/5NNCx2HDqcxEzjpa1lcdKA",
        "ID":"5NNCx2HDqcxEzjpa1lcdKA",
        "Image": "https://mosaic.scdn.co/640/ab67616d0000b2732abcc266597eb46f897a8666ab67616d0000b27347ec34af123096d55e5391e8ab67616d0000b273e1b22ace42c98117458010b4ab67616d0000b273f62169327210cf3f933da737",
    },
    {
        "Title": "The Math Ain't Mathing",
        "Link": "https://open.spotify.com/playlist/5QwFq7iyLNBgcwxbhNOORE",
        "ID":"5QwFq7iyLNBgcwxbhNOORE",
        "Image": "https://i.scdn.co/image/ab67706c0000bebb2666749b8cbbc2c30740153b",
    },
    {  
        "Title": "\ud83d\udcda",
        "Link": "https://open.spotify.com/playlist/5e8p93Fnh69ezBz2NIkY9t",
        "ID":"5e8p93Fnh69ezBz2NIkY9t",
        "Image": "https://i.scdn.co/image/ab67706c0000bebba7508c3b9bfc1ac9699f519e",
    },
    {  
        "Title": "SAD CS BOI HOURS P2",
        "Link": "https://open.spotify.com/playlist/7GvYHdhlFMTQvwrJTxZRHv",
        "ID":"7GvYHdhlFMTQvwrJTxZRHv",
        "Image": "https://mosaic.scdn.co/640/ab67616d0000b273463b630bf8d0269654337905ab67616d0000b2738ac536a8b7cdb157509399a7ab67616d0000b2739489b7675f782feada134658ab67616d0000b273d5d11b6ac4242aaa41c8be69",
    },
    {
        "Title": "The Math Ain't Mathing",
        "Link": "https://open.spotify.com/playlist/5QwFq7iyLNBgcwxbhNOORE",
        "ID":"5QwFq7iyLNBgcwxbhNOORE",
        "Image": "https://i.scdn.co/image/ab67706c0000bebb2666749b8cbbc2c30740153b",
    },
    {
        "Title": "boop!",
        "Link": "https://open.spotify.com/playlist/5NNCx2HDqcxEzjpa1lcdKA",
        "ID":"5NNCx2HDqcxEzjpa1lcdKA",
        "Image": "https://mosaic.scdn.co/640/ab67616d0000b2732abcc266597eb46f897a8666ab67616d0000b27347ec34af123096d55e5391e8ab67616d0000b273e1b22ace42c98117458010b4ab67616d0000b273f62169327210cf3f933da737",
    },
    {   
        "Title": "My Playlist #12",
        "Link": "https://open.spotify.com/playlist/1F8BHx4c6QBXiGEuDmhgmP",
        "ID": "1F8BHx4c6QBXiGEuDmhgm",
        "Image": "https://i.scdn.co/image/ab67616d0000b273baf89eb11ec7c657805d2da0",
    },
    {  
        "Title": "\ud83d\udcda",
        "Link": "https://open.spotify.com/playlist/5e8p93Fnh69ezBz2NIkY9t",
        "ID":"5e8p93Fnh69ezBz2NIkY9t",
        "Image": "https://i.scdn.co/image/ab67706c0000bebba7508c3b9bfc1ac9699f519e",
    },
    ]
       
}
export {postPlaylist, getPlaylist, getRecommender, getMasterPlaylist};