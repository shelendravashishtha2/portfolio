// CustomMusicPlayer.js
import React, { useEffect, useRef, useState } from "react";
import { usePlayback } from "./playback_context";

const MusicPlayer = ({ playlist }) => {
  const { isPlaying, currentTrackIndex, playPauseToggle, playNextTrack } =
    usePlayback();
  const audioRef = useRef(null);
  const [firstTime, setFirstTime] = useState(true);
  useEffect(() => {
    const audio = audioRef.current;
    if (!firstTime) {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    } else {
      setFirstTime(false);
    }
  }, [isPlaying]);

  return (
    <div>
      {playlist.map((music, index) => {
        return (
          <div
            key={index}
            style={{
              height: "80px",
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid var(--primary-color)",
            }}
          >
            <div
              style={{
                height: "60px",
                width: "60px",
                background: "red",
                borderRadius: "5px",
                marginRight: "10px",
                userSelect: "none",
              }}
              className="music-image-container"
            >
              <img
                src="https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg"
                height="100%"
                style={{
                  borderRadius: "5px",
                  objectFit: "cover",
                }}
                width="100%"
              />
            </div>
            <div
              style={{
                marginRight: "10px",
                height: "60px",
                width: "70%",
                textOverflow: "ellipsis",
                maxLines: 1,
                overflow: "hidden",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  maxLines: "1",
                  height: "30px",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                {music.title}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    maxLines: "1",
                    height: "30px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    color: "#735316",
                  }}
                >
                  {music.artist}
                </p>
                {isPlaying && currentTrackIndex === index && (
                  <img src="/music-waves.gif" width="50%" height="30px"></img>
                )}
              </div>
            </div>
            <div
              style={{
                height: "60px",
                width: "60px",
                borderRadius: "50%",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                border: "1px solid var(--primary-color)",
                background: "#423e3ea",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => playPauseToggle(index)}
            >
              <span
                style={{
                  fontSize: "40px",
                  userSelect: "none",
                  cursor: "pointer",
                }}
                className="material-symbols-outlined"
              >
                {currentTrackIndex === index && isPlaying
                  ? "pause"
                  : "play_arrow"}
              </span>
            </div>
          </div>
        );
      })}
      {!playlist.length ? (
        <></>
      ) : (
        <audio ref={audioRef} src={playlist[currentTrackIndex].url} />
      )}
    </div>
  );
};

export default MusicPlayer;
