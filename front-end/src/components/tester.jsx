import React, {useState, useEffect} from "react";
import {postPlaylist, getPlaylist, getRecommender} from '../apiCalls';


function Tester() {
    const [predict, setPredict] = useState("");
    const [song, setSong] = useState("");
    const [d, setD] = useState(false)

    useEffect(() => {
        fetch("http://192.168.39.188:5000/test/")
            .then(response => response.blob())
            .then(stream => setSong(stream))
    }, [d])

    function handleGetRecommender() {
        getRecommender()
        .then(data => {
            setPredict(data["close"].map((item) => item.toString()).join(", "));
        })
    }

    function handleGetPlaylist() {
        getPlaylist("asdf")
        .then(mp3File => { 
            console.log(typeof(mp3File))
            mp3File.play();
            setSong(mp3File); })
    }
    return(
        <div>
            <div id="playlistRetierval">
                <br/>
                // Playlist Content
                <br/>
                <button onClick={postPlaylist}>
                Click to Test POST
                </button>
                <button onClick={ getPlaylist }>
                Click to Test GET
                </button>

                <audio src= { song } />
            </div>
            
            <div id="downloadButton">
                <br/>
                // Download Content
                <br/>
                <button onClick={getPlaylist}>
                Click to Test GET
                </button>
                <button onClick={getPlaylist}>
                Click to Test GET
                </button>
            </div> 
            
            <div id="recommendation">
                <br/>
                // Recommendation System
                <br/>
                <button onClick={handleGetRecommender}>
                Click to Test GET
                </button>

                <button onClick={() => {setPredict("")}}>
                    Click to Clear
                </button>

                <p> {predict} </p>
            </div>
        </div>    
    ); 
}

export default Tester;