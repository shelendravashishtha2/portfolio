import { motion } from "framer-motion";
import { useEffect } from "react";
import useCustomMediaQuery from "../../hooks/custom_media_query";
import MusicDialog from "./music/music_dialog";
import Music from "./music/music_button";

const SearchBar = () => {
  const {
    scrollExtent,
    windowHeight,
    windowWidth,
    isMobile,
    isTablet,
    isDesktop,
  } = useCustomMediaQuery();

  useEffect(() => {
    console.log(scrollExtent);
  }, [scrollExtent]);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "110px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Music />
        <div
          style={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            width: "50%",
            borderRadius: "22px",
            height: "70px",
          }}
        >
          <motion.div
            className="hero-container"
            whileHover={{ scale: 1.1 }}
            style={{
              width: "100%",
              height: "70px",
              background: "rgb(45,44,43)",
              cursor: "text",
              borderRadius: "22px",
              display: "flex",
              padding: "12px",
              color: "rgb(108,107,106)",
              alignItems: "center",
              userSelect: "none",
              justifyItems: "center",
            }}
          >
            <span
              style={{
                color: "rgb(173,170,168)",
                fontSize: "40px",
                marginRight: "20px",
              }}
              className="material-symbols-outlined"
            >
              search
            </span>
            <input
              style={{
                fontSize: "30px",
                height: "100%",
                width: "100%",
                border: "none",
                fontWeight: "bolder",
                outline: "none",
                background: "rgb(45,44,43)",
                color: "var(--primary-color)",
                caretColor: "var(--primary-color)",
              }}
              autoFocus={true}
              autoComplete="true"
              placeholder="Search Keyword...."
            ></input>
          </motion.div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default SearchBar;
