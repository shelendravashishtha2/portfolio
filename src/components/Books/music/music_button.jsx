import { useState } from "react";
import "../../../css/books/music/music.css";
import MusicDialog from "./music_dialog";
import { usePlayback } from "./playback_context";
const Music = () => {
  const [open, setOpen] = useState(false);
  const { isPlaying } = usePlayback();
  const onToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        onClick={onToggle}
        style={{
          height: "60px",
          width: "60px",
          marginLeft: "10px",
          // border: "1px solid var(--primary-color)",
          // padding: "8px",
          display: "flex",
          cursor: "pointer",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <img
            src={!isPlaying ? "/music.svg" : "/music.gif"}
            alt=""
            height="100%"
            width="100%"
            style={{
              objectFit: "fill",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>
      <MusicDialog onClose={onToggle} isOpen={open} />
    </>
  );
};

export default Music;
