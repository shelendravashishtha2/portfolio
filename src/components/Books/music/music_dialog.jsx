import { useRef } from "react";
import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import ModalDialog from "@mui/joy/ModalDialog";
import MusicPlayer from "./MusicPlayer";
import { PlaybackProvider } from "./playback_context";

export const playlist = [
  {
    title:
      "Luminary Luminary Luminary Luminary Luminary Luminary Luminary Luminary Luminary Luminary Luminary Luminary Luminary Luminary Luminary Luminary",
    url: "luminary.mp3",
    artist: "Joel Sunny",
  },
  {
    title: "Ram Dhun",
    artist: "Kailash Khair",
    url: "ramdhun.mp3",
  },

  // Add more songs to the playlist as needed
];

const MusicDialog = ({ isOpen, onClose }) => {
  const cancelRef = useRef();

  return (
    <>
      <Modal open={isOpen} onClose={onClose}>
        <ModalDialog
          style={{
            border: "1px solid var(--primary-color)",
            background: "var(--intro-canvas)",
            minHeight: "300px",
            maxHeight: "70%",
            overflow: "scroll",
            borderRadius: "30px",
            width: "40%",
            color: "var(--primary-color)",
          }}
          variant="plain"
        >
          {/* <ModalClose /> */}
          <div
            style={{
              fontSize: "2rem",
              fontFamily: "Shadows Into Light, cursive",
              marginBottom: "15px",
            }}
          >
            Music
          </div>
          <MusicPlayer playlist={playlist} />
        </ModalDialog>
      </Modal>
    </>
  );
};

export default MusicDialog;
