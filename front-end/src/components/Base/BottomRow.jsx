import React from 'react';
import { useState, useRef, useEffect } from 'react';
import useSound from 'use-sound';
import { pauseButton, playButton, nextButton, prevButton, shuffleButton, repeatButton } from '../../assets';
import { getSong } from '../../ApiCalls'

const BottomRow = () => {
    const [isPaused, setIsPaused] = useState(true);
    const [currSong, setCurrSong] = useState("test2.mp3");
    const links = [{ "image": shuffleButton, "tag": "Shuffle" }, { "image": prevButton, "tag": "Prev." }, { "image": pauseButton, "tag": "pause" }
        , { "image": nextButton, "tag": "Nex." }, { "image": repeatButton, "tag": "Repeat" }]


    const handlePlayPause = () => {
        setIsPaused(!isPaused);
        console.log(isPaused);
    }

    const BottomButton = ({ icon, text }) => {
        return (
            <div>
                {text === "pause" ? (
                    <button
                        onClick={handlePlayPause}
                        className="transition duration-1000 hover:bg-primary text-gray-100 font-bold py-2 px-4 rounded items-center"
                    >
                        <img className="w-10 l-10" src={isPaused == true ? pauseButton : playButton}></img>
                        {isPaused == true ? "Pause" : "Play"}
                    </button>
                ) : (
                    <button className="hover:bg-primary text-gray-100 font-bold py-2 px-4 rounded transition duration-600 items-center">
                        <img className="w-10 l-10 ml-2" src={icon}></img>
                        {text}
                    </button>
                )}

            </div>)
    }

    const Player = ({ audioSrc }) => {
        return (<></>)
    }

    return (
        <div className="bg-gray-200 fixed bottom-0 left-0 w-screen flex flex-col z-20">
            <div className="flex flex-row items-center ml-80">
                <Player audioSrc={getSong()}/>
            </div>
            <div className='flex flex-row justify-center items-center'>
                {links.map((link, index) => (
                    <BottomButton
                        key={link["tag"]}
                        icon={link["image"]}
                        text={link["tag"]}
                    />
                ))}
            </div>
        </div>
    );
};



export default BottomRow;