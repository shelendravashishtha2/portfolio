import Tilt from "react-parallax-tilt";
import BookContainerStats from "./stats";
import BookSectionSeperator from "./seperator";
import { useNavigate } from "react-router-dom";
import AuthorDetailContainer from "./author-detail";
import GenericReview from "../../Reviews/generic-review";
import GenericWriteAReview from "../../Reviews/write-a-review";
import "../../../css/books/Details/book-detail-container.css";
const BookDetailContainer = ({ book }) => {
  const navigate = useNavigate();
  return (
    <div className="book-detail-container">
      <div className="book-detail-container-inner">
        <div className="book-cover-container">
          <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={800}
            transitionSpeed={1500}
            gyroscope={true}
          >
            <img src={book.bookCover} height="250px" width="230px" alt="" />
          </Tilt>
        </div>
        <div className="book-details">
          <p className="book-title">
            {book.title}
            {book.buyLink ? (
              <span
                style={{
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
              >
                <a href={book.buyLink} target="_blank">
                  <img height="30px" width="30px" src="/amazon.png"></img>
                </a>
              </span>
            ) : (
              ""
            )}
          </p>
          <div className="book-genres">
            {book.genre &&
              book.genre.map((category, index) => {
                return (
                  <p key={index} className="book-genre">
                    <span className="material-symbols-outlined">token</span>{" "}
                    {category}
                  </p>
                );
              })}
          </div>
          <p className="book-description">{book.bookDescription}</p>

          <div className="book-stats">
            <BookContainerStats
              icon={"language_japanese_kana"}
              heading={"Language"}
              statValue={book.language}
            />
            <BookContainerStats
              icon={"star"}
              heading={"Review"}
              statValue={"4.6"}
            />
            <BookContainerStats
              icon={"description"}
              heading={"Pages"}
              statValue={book.pages}
            />
          </div>
          <div
            className="read-book-button"
            onClick={() => {
              navigate(`/read-book/${book.id}`);
            }}
          >
            Read This Book
          </div>
        </div>
      </div>

      <BookSectionSeperator />
      <AuthorDetailContainer book={book} />
      <GenericReview id={book.id} isBook={true} />
      <GenericWriteAReview id={book.id} />
    </div>
  );
};

export default BookDetailContainer;
