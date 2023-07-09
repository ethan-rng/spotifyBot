import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "../../../redux/features/playerSlice";
import { PlayPause } from "../../Utils";


const SongCard = ({ jsonList, isPlaying, activeSong, data }) => {
  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i}))
    dispatch(playPause(true));
  };

  return (
    <div className="w-[16.5rem] animate-slideup">
      <div
        className="
            bg-gray-200
            hover:bg-gray-100
            transition duration-500 ease-in-out
            rounded-md
            grid grid-cols-1 grid-rows-2 justify-center items-center 
            m-6 pl-8 pr-8 pt-3 h-60
          "
      >
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === jsonList.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={jsonList}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <div className="top-0 mt-8 flex justify-center">
          <img
            src={jsonList.image}
            alt="song_img"
            className="w-32 h-32 object-cover top-0 rounded-t-md"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="m-3 relative bottom-0 text-white hover:text-secondary">
          <a href={jsonList.spotifyLink}>
            <h1 className="font-semibold text-lg truncate">{jsonList.title}</h1>
          </a>
          <a href={jsonList.artistLink}>
            <h2 className="text-sm mt-1 truncate">By: {jsonList.artist}</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
