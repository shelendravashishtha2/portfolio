// components/EpubViewer.js
import React, { useEffect, useRef, useState } from "react";
import ePub from "epubjs"; // Specify the version

const EpubViewer = ({ epubUrl, onChapterChange }) => {
  const [book, setBook] = useState(null);
  const viewRef = useRef(null);
  useEffect(() => {
    const loadBook = async () => {
      const loadedBook = ePub(epubUrl);
      //   setBook(loadedBook);

      const rendition = loadedBook.renderTo("viewer", {
        width: "100%",
        height: "100%",
      });
      setBook(rendition);

      rendition.display();
      
      // Handle chapter changes
      rendition.on("relocated", (location) => {
        console.log(rendition.book.spine);

        onChapterChange(location.start.index);
      });
    };

    if (!book) {
      loadBook();
    }

    return () => {
      //   if (book) {
      //     // Remove the 'relocated' event listener
      //     if (book.rendition) {
      //       book.off("relocated", null, true);
      //     }
      //     book.destroy();
      //   }
    };
  }, [epubUrl, onChapterChange, book]);

  const nextChapter = () => {
    if (book) {
      book.next();
    }
  };

  const prevChapter = () => {
    if (book) {
      book.prev();
    }
  };

  return (
    <div ref={viewRef}>
      <div
        id="viewer"
        style={{ width: "100%", height: "90vh", background: "white" }}
      />
      <div>
        <button onClick={prevChapter}>Previous Chapter</button>
        <button onClick={nextChapter}>Next Chapter</button>
        <button
          onClick={() => {
            viewRef.current.webkitRequestFullscreen();
          }}
        >
          Open Full Screen
        </button>
      </div>
    </div>
  );
};

export default EpubViewer;
