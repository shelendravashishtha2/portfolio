import { useEffect, useState } from "react";
import SlateEditor from "./SlateEditor/Editor";
import { Slate } from "slate-react";
import DisabledSlateEditor from "./SlateEditor/DisabledEditor";

const PoetryContainer = ({ poem }) => {
  console.log("PoetryContainer", poem);
  return !poem ? (
    <>loading</>
  ) : (
    <>
      <div
        style={{
          padding: "10px",
          background: "rgb(33, 42, 54)",
          width: "100%",
          color: "white",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      >
        <DisabledSlateEditor disabled={true} editorValue={poem.poetry} />
      </div>
    </>
  );
};

export default PoetryContainer;
