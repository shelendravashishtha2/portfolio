// components/ChapterList.js
import React from "react";

const ChapterList = ({ bookTitle }) => {
  return (
    <div className="chapter-list">
      <h2>{bookTitle}</h2>
    </div>
  );
};

export default ChapterList;
