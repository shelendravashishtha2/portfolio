import PoetryContainer from "./poetry-container";
import { useEffect, useState } from "react";
import SlateEditor from "./SlateEditor/Editor";
import GenericWriteAReview from "../Reviews/write-a-review";
import GenericReview from "../Reviews/generic-review";

const RightPanel = ({ poetry }) => {
  return poetry ? (
    <>
      <div
        style={{
          padding: "10px",
          width: "100%",
        }}
      >
        <div
          className="poetry-header"
          style={{
            padding: "10px",
            background: "rgb(33, 42, 54)",
            width: "100%",
            color: "white",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        >
          {poetry.title}
        </div>
        <PoetryContainer poem={poetry} />
        <div
          className="poetry-header"
          style={{
            padding: "10px  ",
            background: "rgb(33, 42, 54)",
            width: "100%",
            color: "white",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        >
          <h3
            style={{
              marginBottom: "8px",
            }}
          >
            Central Idea
          </h3>
          {poetry.poetryDescription}
        </div>
        <div
          className="poetry-header"
          style={{
            padding: "10px",
            background: "rgb(33, 42, 54)",
            width: "100%",
            color: "white",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        >
          {poetry.title}
        </div>
        <GenericReview id={poetry.id} isBook={false} />
        <GenericWriteAReview id={poetry.id} isBook={false} />
      </div>
    </>
  ) : (
    <></>
  );
};

export default RightPanel;
