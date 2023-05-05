import React, {useState} from "react";
import {postPlaylist, getPlaylist, getRecommender} from '../apiCalls';


function Tester() {
    const [predict, setPredict] = useState("");

    function handleGetRecommender() {
        getRecommender()
        .then(data => {
            setPredict(data["close"].map((item) => item.toString()).join(", "));
        })
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
                <button onClick={getPlaylist}>
                Click to Test GET
                </button>
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