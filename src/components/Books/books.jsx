import SearchBar from "./searchBar";
import "../../css/books/searchBar.css";
import EpubViewer from "./epub_viewer";
import { useState } from "react";

const Books = () => {
  const [currentChapter, setCurrentChapter] = useState(0);

  const handleChapterChange = (index) => {
    setCurrentChapter(index);
  };
  return (
    <>
      <SearchBar />
      <EpubViewer  epubUrl={"book.epub"}  onChapterChange={handleChapterChange}/>
    </>
  );
};

export default Books;
