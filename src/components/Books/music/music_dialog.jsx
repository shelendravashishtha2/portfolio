import { useRef, useEffect } from "react";
import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import MusicPlayer from "./MusicPlayer";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylist } from "../../../redux/book/music/actions";

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
  const dispatch = useDispatch();
  const playList = useSelector((state) => state.playlist);
  useEffect(() => {
    dispatch(fetchPlaylist());
  }, []);

  return (
    <>
      <Modal open={isOpen} onClose={onClose}>
        <ModalDialog
          style={{
            border: "1px solid var(--primary-color)",
            background: "var(--intro-canvas)",
            minHeight: "300px",
            maxHeight: "70%",
            scrollbarWidth: "none",
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
          <MusicPlayer
            playlist={playList && playList.data ? playList.data : []}
          />
        </ModalDialog>
      </Modal>
    </>
  );
};

export default MusicDialog;
