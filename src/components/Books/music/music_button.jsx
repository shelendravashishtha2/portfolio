import { useState } from "react";
import "../../../css/books/music/music.css";
import MusicDialog from "./music_dialog";
const Music = () => {
  const [open, setOpen] = useState(false);

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
          border: "1px solid var(--primary-color)",
          borderRadius: "10px",
          padding: "8px",
          display: "flex",
          cursor: "pointer",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="music2"></div>

        <div className="music1"></div>
        <div className="music2"></div>
        <div className="music3"></div>
        <div className="music2"></div>
      </div>
      <MusicDialog onClose={onToggle} isOpen={open} />
    </>
  );
};

export default Music;
