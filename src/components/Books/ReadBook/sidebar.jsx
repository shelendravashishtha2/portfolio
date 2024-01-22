import { useState } from "react";
import "../../../css/books/ReadBook/read-book.css";
const ReadBookSidebar = ({ changeColor }) => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("#fff");
  const setTextColor = (el) => {
    console.log(el.target.value);
    setColor(el.target.value);
    changeColor(el.target.value);
  };
  const handleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <>
      <div
        style={{
          width: "fit-content",
          position: "absolute",
          height: "100%",
          display: "flex",
          top: 0,
          marginTop: "60px",
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
            }}
            className="main-read-book-sidebar"
          >
            <div
              style={{
                width: "100%",
                color: "white",
                height: "60px",
              }}
              className="main-read-book-sidebar-link"
            >
              <span
                onClick={handleOpen}
                style={{
                  padding: "10px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "end",
                  cursor: "pointer",
                }}
                className="material-symbols-outlined"
              >
                clear
              </span>
            </div>
            <input type="color" value={color} onChange={setTextColor} />
          </div>
        </div>
        <div
          style={{
            height: "100%",
            display: "flex",
            transition: "300ms",
            alignItems: "center",
            background: open ? "var(--intro-canvas)" : "transparent",
          }}
          className="main-read-book-icons"
        >
          <span
            style={{
              transition: "300ms",
              background: open ? "transparent" : "var(--github-green-color)",
            }}
            onClick={handleOpen}
            className="material-symbols-outlined main-read-book-forward-icon"
          >
            {open ? "arrow_back_ios" : "arrow_forward_ios"}
          </span>
        </div>
      </div>
    </>
  );
};

export default ReadBookSidebar;
