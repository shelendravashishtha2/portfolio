import { useEffect, useState } from "react";
import GenericReviewForm from "./generic-form";
import { firestore } from "../../firebase";

const GenericWriteAReview = ({ id, isBook }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <>
      <div
        style={{
          width: "fit-content",
          position: "fixed",
          width: open ? "80%" : 0,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          transition: "1s",
          bottom: open ? "60px" : "-100%",
        }}
      >
        <div
          style={{
            transition: "500ms",
            width: "100%",
            borderRadius: "10px",
            height: "300px",
            background: "var(--intro-canvas)",
          }}
          className="div"
        >
          <div
            style={{
              display: open ? "block" : "none",
              width: "100%",
              borderRadius: "10px",
              height: "100%",
              zIndex: "2",
              overflowY: "scroll",
              padding: "8px",
              border: "1px solid var(--primary-color)",
              position: "relative",
            }}
            className="main-read-book-sidebar"
          >
            <GenericReviewForm
              id={id}
              isBook={isBook}
              handleClose={handleOpen}
            ></GenericReviewForm>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          transition: "300ms",
          position: "fixed",
          bottom: "10px",
          left: 0,
          color: "white",
          userSelect: "none",
          cursor: "pointer",
          width: "100%",
          alignItems: "center",
        }}
        className="main-review-book-forward-icon"
        onClick={handleOpen}
      >
        <div
          style={{
            padding: "8px",
            margin: "auto",
            transition: "300ms",
            alignSelf: "center",
            width: "fit-content",
            transform: "translateX (-50%)",
            borderRadius: open ? "50%" : "10px",
            display: "flex",
            bottom: "10px",
            background: "var(--github-green-color)",
          }}
        >
          <span
            style={{
              transition: "300ms",
              marginRight: open ? 0 : "10px",
              padding: 0,
              margin: 0,
            }}
            className="material-symbols-outlined"
          >
            {open ? "clear" : "keyboard_arrow_up"}
          </span>
          <p
            style={{
              padding: 0,
              margin: 0,
            }}
          >
            {open ? "" : "Write a review"}
          </p>
        </div>
      </div>
    </>
  );
};

export default GenericWriteAReview;
