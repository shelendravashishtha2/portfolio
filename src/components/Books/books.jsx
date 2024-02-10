// import SearchBar from "./searchBar";
import "../../css/books/searchBar.css";
import { useEffect, useRef, useState } from "react";
import useCustomMediaQuery from "../../hooks/custom_media_query";
import "../../css/books/books.css";
import Tilt from "react-parallax-tilt";
import BooksContainer from "./books-container";
import EpubViewer from "./epub_viewer";
import SubmitBookDialog from "./submit-book/submit-book-dialog";
// import EpubViewer from "./epub_viewer";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooksList } from "../../redux/book/books/actions";
import SearchBar from "./searchBar";

const Books = () => {
  const [isDialogOpened, setIsIsDialogOpened] = useState(false);
  const books = useSelector((data) => data.books);
  const dispatch = useDispatch();
  const handleTouch = () => {
    // setIsTouched((prevVal) => !prevVal);
  };

  const handleDialogToggle = () => {
    setIsIsDialogOpened((prevVal) => !prevVal);
  };

  useEffect(() => {
    dispatch(fetchBooksList());
  }, []);

  return (
    <>
      <SearchBar />
      <div
        className="books-heading"
        style={{
          display: "flex",
          textShadow: "2px 2px 4px #000000",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "UnifrakturCook, cursive",
          }}
        >
          Books
        </h1>
        <div
          style={{
            width: "40%",
          }}
          className="quote"
        >
          <span
            style={{
              fontSize: "2rem",
              fontFamily: "Caveat, cursive",
              textShadow: "2px 2px 4px #000000",
              color: "var(--primary-color)",
            }}
          >
            &ldquo; One glance at a book and you hear the voice of another
            person, perhaps someone dead for 1,000 years. To read is to voyage
            through time.&rdquo;
          </span>
          <span
            style={{
              display: "block",
              color: "white",
              fontSize: "1.1rem",
              display: "flex",
              justifyContent: "end",
            }}
          >
            – Carl Sagan
          </span>
        </div>
      </div>
      <div className="books-content">
        {books.data.map((book) => (
          <BooksContainer handleTouch={handleTouch} book={book} />
        ))}
      </div>
      <div
        className="submit-book"
        style={{
          position: "fixed",
          height: "50px",
          width: "50px",
          background: "var(--primary-color)",
          bottom: "10px",
          right: "10px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          userSelect: "none",
          cursor: "pointer",
        }}
        onClick={handleDialogToggle}
      >
        <span class="material-symbols-outlined">add_notes</span>
      </div>
      <SubmitBookDialog
        isOpen={isDialogOpened}
        onClose={handleDialogToggle}
      ></SubmitBookDialog>
    </>
  );
};

export default Books;
