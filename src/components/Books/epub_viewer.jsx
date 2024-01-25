// components/EpubViewer.js
import React, { useEffect, useRef, useState } from "react";
import ePub, { Book } from "epubjs"; // Specify the version
import { Slider } from "@mui/material";
import ReadBookSidebar from "./ReadBook/sidebar";

const EpubViewer = ({ epubUrl, onChapterChange }) => {
  const [book, setBook] = useState(null);
  const viewRef = useRef(null);
  const [just, setJust] = useState("center");
  const [loading, setLoading] = useState(false);
  const [length, setLength] = useState(0);
  const [pages, setPages] = useState([]);
  const mainTainLocalStorage = ({
    color,
    textAlign,
    font,
    background,
    fontSize,
    lineHeight,
  }) => {
    localStorage.setItem(
      "epubState",
      JSON.stringify({
        color,
        textAlign,
        font,
        background,
        fontSize,
        lineHeight,
      })
    );
  };
  const getLocalStorageItem = () => {
    return JSON.parse(localStorage.getItem("epubState"));
  };
  useEffect(() => {
    let cleanupFunc = () => {};
    const loadBook = async () => {
      setLoading(true);
      try {
        console.log(epubUrl);

        const loadedBook = ePub(epubUrl);
        
        //   setBook(loadedBook);
        const rendition = loadedBook.renderTo("viewer", {
          width: "100%",
          height: "100%",
          allowScriptedContent: true,
        });

        rendition.display();

        setBook(rendition);
        getAllPages(rendition);
        rendition.on("relocated", (location) => {
          console.log(location);
          onChapterChange(location.start.index);
          changeEpubConfig({ color: "#ffffff" }, true);
        });
        cleanupFunc = () => {
          console.log(rendition);
          rendition.off("relocated", () => {
            console.log("rendition is off");
          });
          rendition.destroy();
        };
        rendition.hooks.content.register((content, view) => {
          console.log(content);
          content.content.style.color = "#fff";
          content.content.style.textAlign = just;
        });
      } catch (e) {
        console.log(e);
      }
    };

    if (!book) {
      loadBook();
    }

    return cleanupFunc;
  }, []);
  // Helper function to extract information about all pages
  const getAllPages = (rendition) => {
    rendition.book.ready.then(async (book) => {
      // let locations = await rendition.book.locations.generate();
      // console.log("Total Pages?: ", locations.length);
      // console.log(locations);
      // setLength(locations.length);
      // setPages(locations);
      setLoading(false);
    });

    // Combine information from manifest and spine
  };
  const showChapter = (index) => {
    book.display(pages[index]);
  };
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
  const changeEpubConfig = (
    { color, textAlign, background, fontSize, lineHeight },
    isFromCallback = false
  ) => {
    console.log("color");
    let colorVal = color;
    let textAlignVal = textAlign;
    let backgroundVal = background;
    let fontSizeVal = fontSize;
    let lineHeightVal = lineHeight;
    if (isFromCallback) {
      let localStorageItems = getLocalStorageItem();
      if (localStorageItems) {
        colorVal = localStorageItems.color;
        textAlignVal = localStorageItems.textAlign;
        backgroundVal = localStorageItems.background;
        fontSizeVal = localStorageItems.fontSize;
        lineHeightVal = localStorage.lineHeight;
      }
    }
    console.log("color", colorVal, "isFromCallback", isFromCallback);
    const iframe = document.querySelector(".epub-view iframe");
    const iframeBody = iframe.contentDocument.body;
    if (iframeBody) {
      iframeBody.style.color = colorVal;
      iframeBody.style.textAlign = textAlignVal;
      iframeBody.style.background = backgroundVal;
      iframeBody.style.fontSize = fontSizeVal;
      iframeBody.style.lineHeight = lineHeightVal;
      if (!isFromCallback) {
        mainTainLocalStorage({
          color: colorVal,
          textAlign,
          background,
          fontSize,
          lineHeight,
        });
      }
    }
    console.log(book);
  };
  return (
    <>
      {loading ? (
        <>
          <div
            style={{
              height: "100vh",
              position: "absolute",
              width: "100vw",
              zIndex: "999999999",
              background: "#2F333A",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              opacity: "0.5",
            }}
          >
            <img src="/books-load.gif" alt="" />
          </div>
        </>
      ) : (
        <></>
      )}
      <>
        {" "}
        <div ref={viewRef}>
          <div
            id="viewer"
            style={{
              width: "100%",
              height: "90vh",
              background: "#222",
              // color: "white",
            }}
          />
          <div
            style={{
              width: "90%",
              margin: "auto",
            }}
          >
            {" "}
            <Slider
              aria-label="Temperature"
              defaultValue={30}
              valueLabelDisplay="auto"
              step={1}
              marks
              getAriaValueText={(e) => e + 1}
              // onChange={() => {
              //   showChapter()
              // }}
              onChangeCommitted={(e, val) => showChapter(val)}
              min={0}
              max={length}
            />
          </div>
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
            <button
              onClick={() => {
                setJust("justify");
                // console.log(book.book.spine.hooks.content.trigger());
                const iframe = document.querySelector(".epub-view iframe");
                const iframeBody = iframe.contentDocument.body;
                if (iframeBody) {
                  iframeBody.style.textAlign = "justify";
                }
                console.log(book);
                // book.hooks.content.trigger();
              }}
            >
              Open Full Screen
            </button>
          </div>
        </div>
        <ReadBookSidebar changeEpubConfig={changeEpubConfig} />
      </>
    </>
  );
};

export default EpubViewer;
