import { useState, useEffect } from "react";
import "../../../css/books/ReadBook/read-book.css";
import "../../../css/books/ReadBook/sidebar.css";
import SetSidebarColor from "./set_sidebar_color";
import SetSidebarBackground from "./set_background";
import SetSidebarFontSize from "./set_font_size";
import SetSidebarTextAlign from "./set_text_align";
import SetSidebarLineHeight from "./set_line_height";
const ReadBookSidebar = ({ changeEpubConfig }) => {
  const [open, setOpen] = useState(false);
  const [config, setConfig] = useState({
    color: "#ffffff",
    background: "#ffffff",
    textAlign: "justify",
    fontSize: "12px",
    lineHeight: "1em",
  });

  useEffect(() => {
    let configMap = localStorage.getItem("epubState");
    if (configMap) {
      setConfig(JSON.parse(configMap));
    }
  }, []);

  const setEpubConfig = ({
    color,
    background,
    textAlign,
    fontSize,
    lineHeight,
  }) => {
    console.log(config);
    setConfig({
      color: color,
      background: background,
      textAlign: textAlign,
      fontSize,
      lineHeight,
    });
    console.log(config);

    changeEpubConfig({
      color,
      background,
      textAlign,
      fontSize,
      lineHeight,
    });
  };

  const handleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <>
      <div
        style={{
          width: "fit-content",
          position: "fixed",
          height: "calc(100% - 60px)",
          display: "flex",
          top: "60px",
        }}
      >
        <div
          style={{
            width: open ? "300px" : "0px",
            transition: "500ms",
            height: "fit-content",
            minHeight: "100%",
            background: "var(--intro-canvas)",
          }}
          className="div"
        >
          <div
            style={{
              display: open ? "block" : "none",
              width: "100%",
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
              minHeight: "100%",
              zIndex: "2",
              overflowY: "scroll",
              padding: "8px",
              position: "relative",
            }}
            className="main-read-book-sidebar"
          >
            <span
              onClick={handleOpen}
              style={{
                width: "fit-content",
                color: "#adbac7",
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
              }}
              className="material-symbols-outlined clear"
            >
              clear
            </span>
            <SetSidebarColor setEpubConfig={setEpubConfig} config={config} />
            <SetSidebarBackground
              setEpubConfig={setEpubConfig}
              config={config}
            />
            <SetSidebarFontSize setEpubConfig={setEpubConfig} config={config} />
            <SetSidebarTextAlign
              setEpubConfig={setEpubConfig}
              config={config}
            />
            <SetSidebarLineHeight
              setEpubConfig={setEpubConfig}
              config={config}
            />
          </div>
        </div>
        <div
          style={{
            height: "100%",
            display: "flex",
            transition: "300ms",
            alignItems: "center",
          }}
          className="main-read-book-icons"
        >
          <span
            style={{
              transition: "300ms",
              background: "var(--github-green-color)",
            }}
            onClick={handleOpen}
            className="material-symbols-outlined main-read-book-forward-icon"
          >
            {open ? "arrow_back" : "arrow_forward_ios"}
          </span>
        </div>
      </div>
    </>
  );
};

export default ReadBookSidebar;
