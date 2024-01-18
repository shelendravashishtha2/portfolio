// PlaybackContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { playlist } from "./music_dialog";

const PlaybackContext = createContext();

export const PlaybackProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = React.useRef(new Audio());

  const playPauseToggle = (index) => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    setCurrentTrackIndex(index);
  };

  const playNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  useEffect(() => {
    const audio = audioRef.current;

    audio.src = playlist[currentTrackIndex].url;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      // Cleanup on component unmount
      audio.pause();
      audio.src = "";
    };
  }, [isPlaying, currentTrackIndex]);

  const value = {
    isPlaying,
    currentTrackIndex,
    playPauseToggle,
    playNextTrack,
  };

  return (
    <PlaybackContext.Provider value={value}>
      {children}
    </PlaybackContext.Provider>
  );
};

export const usePlayback = () => {
  return useContext(PlaybackContext);
};
