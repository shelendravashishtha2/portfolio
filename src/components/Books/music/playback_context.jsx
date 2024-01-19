// PlaybackContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";

const PlaybackContext = createContext();

export const PlaybackProvider = ({ children }) => {
  const playListState = useSelector((state) => state.playlist);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = React.useRef(new Audio());
  const [playList, setPlayList] = useState([]);

  useEffect(() => {
    if (playListState.data) {
      setPlayList(playListState.data);
    }
  }, [playListState]);

  const playPauseToggle = (index) => {
    if (index === currentTrackIndex && isPlaying) {
      setIsPlaying((prevIsPlaying) => false);
    } else {
      setIsPlaying((prevIsPlaying) => true);
    }
    setCurrentTrackIndex(index);
  };

  const playNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % playList.length);
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (playList.length) {
      audio.src = playList[currentTrackIndex].url;

      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
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
