import LeftPanelPoetryBox from "./left_panel_poetry_box";
import { useNavigate } from "react-router-dom";
import "../../css/poetry/left-panel.css";
import { useState } from "react";
const LeftPanel = ({ poetries, selectedIndex }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen((prevVal) => !prevVal);
  };
  return (
    <>
      <div
        style={{
          position: "sticky",
          left: 0,
          top: "60px",
          bottom: 0,
          transition: "500ms",
          width: open ? "300px" : 0,
          display: "flex",
          height: "calc(100vh - 60px)",
        }}
        className="left-panel-container"
      >
        <div
          style={{
            padding: "10px",
            height: "100%",
            width: "100%",
            overflowY: "scroll",
            display: open ? "flex" : "none",
            transition: "500ms",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="poetry-left-panel"
        >
          <img
            src="/poetry.png"
            style={{
              mixBlendMode: "color-dodge",
              marginBottom: "10px",
            }}
            width="150px"
            height="150px"
            alt=""
          />

          <p
            style={{
              fontSize: "1.5vw",
              color: "white",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Poetry
          </p>

          {poetries &&
            poetries.map((poetry, index) => (
              <LeftPanelPoetryBox
                handleSelectedIndex={() =>
                  navigate(`/poetry/${index}/${poetry.id}`)
                }
                selectedIndex={selectedIndex}
                key={index}
                poetry={poetry}
              />
            ))}
        </div>
      </div>
      <div
        className="floatingbtn"
        style={{
          position: "fixed",
          height: "30px",
          width: "30px",
          right: "90%",
          transition: "500ms",
          borderRadius: "50%",
          left: open ? "220px" : "10px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "var(--github-green-color)",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          zIndex: 10000,
        }}
        onClick={handleOpen}
      >
        <span class="material-symbols-outlined">
          {open ? "arrow_back" : "arrow_right_alt"}
        </span>{" "}
      </div>
    </>
  );
};

export default LeftPanel;
