import React, { useState, useRef, useEffect } from 'react';

const MusicPlayer = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef();

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleLoadedMetadata = () => {
      setDuration(audioElement.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audioElement.currentTime);
    };

    audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);
    audioElement.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audioElement.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const handleSeek = (e) => {
    const audioElement = audioRef.current;
    audioElement.currentTime = e.target.value;
  };

  return (
    <div>
      <audio ref={audioRef} src="/music.mp3" />
      <div>
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
        />
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export default MusicPlayer;