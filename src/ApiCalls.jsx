const url = "http://127.0.0.1:5000/"

function postPlaylist(){
    let formData = new FormData();
    formData.append("link", "https://youtube.com");

    fetch(url + "playlist/7GvYHdhlFMTQvwrJTxZRHv", {
        method:"POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

// Expect MP3 file back
function getPlaylist(playlistID){
    return {
        "Title": "SAD CS BOI HOURS P2",
        "Link": "https://open.spotify.com/playlist/7GvYHdhlFMTQvwrJTxZRHv",
        "Owner": {
            "Name": "Ethan Rong",
            "Link": "https://open.spotify.com/user/ethanrong"
        },
        "Image": "https://mosaic.scdn.co/640/ab67616d0000b273463b630bf8d0269654337905ab67616d0000b2738ac536a8b7cdb157509399a7ab67616d0000b2739489b7675f782feada134658ab67616d0000b273d5d11b6ac4242aaa41c8be69",
        "Songs": [
            {
                "title": "Ballroom Extravaganza",
                "artist": "DPR IAN",
                "youtubeLink": "https://www.youtube.com/watch?v=ymgpvXVXJPQ",
                "path": "/Users/ethanrong/Documents/GitHub/spotifyBot/music/master/Ballroom Extravaganza | DPR IAN.mp3",
                "image": "https://i.scdn.co/image/ab67616d0000b2738ac536a8b7cdb157509399a7",
                "addedAt": "2022-10-02T01:01:18Z",
                "duration_ms": "189946",
                "spotifyLink": "https://open.spotify.com/track/4vJfBno2d0mTjMcYn5lEln"
            },
            {
                "title": "You(=I)",
                "artist": "BOL4",
                "youtubeLink": "https://www.youtube.com/watch?v=P9DzbRHCfAc",
                "path": "/Users/ethanrong/Documents/GitHub/spotifyBot/music/master/You(=I) | BOL4.mp3",
                "image": "https://i.scdn.co/image/ab67616d0000b273463b630bf8d0269654337905",
                "addedAt": "2022-10-02T01:01:18Z",
                "duration_ms": "189946",
                "spotifyLink": "https://open.spotify.com/track/4vJfBno2d0mTjMcYn5lEln"
            },
            {
                "title": "ONLY",
                "artist": "LeeHi",
                "youtubeLink": "https://www.youtube.com/watch?v=1zQXPyo6WDw",
                "path": "/Users/ethanrong/Documents/GitHub/spotifyBot/music/master/ONLY | LeeHi.mp3",
                "image": "https://i.scdn.co/image/ab67616d0000b273d5d11b6ac4242aaa41c8be69",
                "addedAt": "2022-10-02T01:01:18Z",
                "duration_ms": "189946",
                "spotifyLink": "https://open.spotify.com/track/4vJfBno2d0mTjMcYn5lEln"
            },
            {
                "title": "You're Beautiful",
                "artist": "James Blunt",
                "youtubeLink": "https://www.youtube.com/watch?v=blPj53QGhXI",
                "path": "/Users/ethanrong/Documents/GitHub/spotifyBot/music/master/You're Beautiful | James Blunt.mp3",
                "image": "https://i.scdn.co/image/ab67616d0000b2739489b7675f782feada134658",
                "addedAt": "2022-10-13T06:37:32Z",
                "duration_ms": "169477",
                "spotifyLink": "https://open.spotify.com/track/6q9rCA5aHkP9xNjmnPxqzR"
            },
            {
                "title": "double take",
                "artist": "dhruv",
                "youtubeLink": "https://www.youtube.com/watch?v=uQiF1yOnzDg",
                "path": "/Users/ethanrong/Documents/GitHub/spotifyBot/music/master/double take | dhruv.mp3",
                "image": "https://i.scdn.co/image/ab67616d0000b273834f16100678d3e800fb5fb9",
                "addedAt": "2022-10-13T06:37:32Z",
                "duration_ms": "169477",
                "spotifyLink": "https://open.spotify.com/track/6q9rCA5aHkP9xNjmnPxqzR"
            },
            {
                "title": "Ring Ring Ring",
                "artist": "\u4e0d\u662f\u82b1\u706b\u5440",
                "youtubeLink": "https://www.youtube.com/watch?v=0W28WmeUfxQ",
                "path": "/Users/ethanrong/Documents/GitHub/spotifyBot/music/master/Ring Ring Ring | \u4e0d\u662f\u82b1\u706b\u5440.mp3",
                "image": "https://i.scdn.co/image/ab67616d0000b273ae6acb9f4ca95a4e0442b400",
                "addedAt": "2022-10-13T06:37:32Z",
                "duration_ms": "169477",
                "spotifyLink": "https://open.spotify.com/track/6q9rCA5aHkP9xNjmnPxqzR"
            },
            {
                "title": "Eyes Off You",
                "artist": "PRETTYMUCH",
                "youtubeLink": "https://www.youtube.com/watch?v=NWA_1lXzGnU",
                "path": "/Users/ethanrong/Documents/GitHub/spotifyBot/music/master/Eyes Off You | PRETTYMUCH.mp3",
                "image": "https://i.scdn.co/image/ab67616d0000b273d46d93ee7fb0589ef6973c5d",
                "addedAt": "2022-10-13T06:37:32Z",
                "duration_ms": "169477",
                "spotifyLink": "https://open.spotify.com/track/6q9rCA5aHkP9xNjmnPxqzR"
            },
            {
                "title": "I'm Gonna Love You",
                "artist": "D.O.",
                "youtubeLink": "https://www.youtube.com/watch?v=nhw5dlMLP1I",
                "path": "/Users/ethanrong/Documents/GitHub/spotifyBot/music/master/I'm Gonna Love You | D.O..mp3",
                "image": "https://i.scdn.co/image/ab67616d0000b27305203cde35ba2fef6ca7b970",
                "addedAt": "2022-10-13T06:37:32Z",
                "duration_ms": "169477",
                "spotifyLink": "https://open.spotify.com/track/6q9rCA5aHkP9xNjmnPxqzR"
            },
            {
                "title": "Way Back Home",
                "artist": "SHAUN",
                "youtubeLink": "https://www.youtube.com/watch?v=eNt78mQJavY",
                "path": "/Users/ethanrong/Documents/GitHub/spotifyBot/music/master/Way Back Home | SHAUN.mp3",
                "image": "https://i.scdn.co/image/ab67616d0000b2739bb453695e0776ceb13576f3",
                "addedAt": "2022-10-13T06:37:32Z",
                "duration_ms": "169477",
                "spotifyLink": "https://open.spotify.com/track/6q9rCA5aHkP9xNjmnPxqzR"
            },
            {
                "title": "double take",
                "artist": "dhruv",
                "youtubeLink": "https://www.youtube.com/watch?v=uQiF1yOnzDg",
                "path": "/Users/ethanrong/Documents/GitHub/spotifyBot/music/master/double take | dhruv.mp3",
                "image": "https://i.scdn.co/image/ab67616d0000b2736f04e53cb5309f8e88286842",
                "addedAt": "2022-10-13T06:37:32Z",
                "duration_ms": "169477",
                "spotifyLink": "https://open.spotify.com/track/6q9rCA5aHkP9xNjmnPxqzR"
            },
            {
                "title": "Plus n Minus",
                "artist": "Yein",
                "youtubeLink": "https://www.youtube.com/watch?v=cgubCDoKmAY",
                "path": "/Users/ethanrong/Documents/GitHub/spotifyBot/music/master/Plus n Minus | Yein.mp3",
                "image": "https://i.scdn.co/image/ab67616d0000b273383e7409ec12e5e9802be3e6",
                "addedAt": "2022-10-02T01:01:18Z",
                "duration_ms": "189946",
                "spotifyLink": "https://open.spotify.com/track/4vJfBno2d0mTjMcYn5lEln"
            },
            {
                "title": "Hard To Love \ub098\ub9cc \uc548\ub418\ub294 \uc5f0\uc560",
                "artist": "BOL4",
                "youtubeLink": "https://www.youtube.com/watch?v=airQW5Rp7Gc",
                "path": "/Users/ethanrong/Documents/GitHub/spotifyBot/music/master/Hard To Love \ub098\ub9cc \uc548\ub418\ub294 \uc5f0\uc560 | BOL4.mp3",
                "image": "https://i.scdn.co/image/ab67616d0000b273463b630bf8d0269654337905",
                "addedAt": "2022-10-13T06:37:32Z",
                "duration_ms": "169477",
                "spotifyLink": "https://open.spotify.com/track/6q9rCA5aHkP9xNjmnPxqzR"
            },
            {
                "title": "Stay With Me",
                "artist": "CHANYEOL",
                "youtubeLink": "https://www.youtube.com/watch?v=L4dE-AcYr_U",
                "path": "/Users/ethanrong/Documents/GitHub/spotifyBot/music/master/Stay With Me | CHANYEOL.mp3",
                "image": "https://i.scdn.co/image/ab67616d0000b2730f5c597bba60a1e0c5364baa",
                "addedAt": "2022-10-13T06:37:32Z",
                "duration_ms": "169477",
                "spotifyLink": "https://open.spotify.com/track/6q9rCA5aHkP9xNjmnPxqzR"
            },
            {
                "title": "The Happiest Girl",
                "artist": "BLACKPINK",
                "youtubeLink": "https://www.youtube.com/watch?v=kVXazE8wR1Q",
                "path": "/Users/ethanrong/Documents/GitHub/spotifyBot/music/master/The Happiest Girl | BLACKPINK.mp3",
                "image": "https://i.scdn.co/image/ab67616d0000b2734aeaaeeb0755f1d8a8b51738",
                "addedAt": "2022-10-02T01:01:18Z",
                "duration_ms": "189946",
                "spotifyLink": "https://open.spotify.com/track/4vJfBno2d0mTjMcYn5lEln"
            }
        ]
    }

    /*
    return fetch(url + "playlist/hii", {
        method:"GET"
    }) 
    .then(response => response.blob())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error(error));
    */
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
        "ID": "1F8BHx4c6QBXiGEuDmhgmP",
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