import React from 'react';
import { useState } from 'react';
import { pauseButton, playButton, nextButton, prevButton, shuffleButton, repeatButton } from '../../assets';

const BottomRow = () => {
    const [isPaused, setIsPaused] = useState(true);
    const links = [{"image":shuffleButton, "tag":"Shuffle"}, {"image":prevButton, "tag":"Prev."}, {"image":pauseButton, "tag":"pause"}
                ,{"image":nextButton, "tag":"Nex."}, {"image":repeatButton, "tag":"Repeat"}]

    const handlePlayPause = () => {
        setIsPaused(!isPaused);
        console.log(isPaused);

    }

    const BottomButton = ({icon, text}) => {
        return (
        <div>
            { text === "pause" ? (
                <button 
                    onClick={ handlePlayPause }
                    className="transition duration-1000 hover:bg-primary text-gray-100 font-bold py-2 px-4 rounded items-center"
                >
                    <img className="w-10 l-10" src={ isPaused == true ? pauseButton : playButton }></img>
                    { isPaused == true ? "Pause" : "Play" }
                </button>
            ) : ( 
                <button className="hover:bg-primary text-gray-100 font-bold py-2 px-4 rounded transition duration-600 items-center">
                    <img className="w-10 l-10 ml-2" src={ icon }></img> 
                    { text }
                </button>
            )}
        
        </div>)
    }

    return (
        <div className="bg-gray-200 fixed bottom-0 left-0 w-screen flex justify-center">
           { links.map((link, index) => (
            <BottomButton 
                key={ link["tag"] }
                icon={ link["image"] }
                text={ link["tag"] }
            />            
            )) }
        </div>
  );
};



export default BottomRow;