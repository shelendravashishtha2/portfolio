import Tilt from "react-parallax-tilt";
import BookContainerStats from "./stats";
import BookSectionSeperator from "./seperator";
import { useNavigate } from "react-router-dom";
import AuthorDetailContainer from "./author-detail";
import GenericReview from "../../Reviews/generic-review";
import GenericWriteAReview from "../../Reviews/write-a-review";
const BookDetailContainer = ({ book }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "300px",
        width: "calc(100% - 20px)",
        margin: "10px auto 0 auto",
        padding: "20px",
        background: "#1c2128",
        display: "flex",
        boxShadow: "rgb(0, 0, 0, 0.5) 0px 5px 15px",
        borderRadius: "10px",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      <div
        className="book-detail-container"
        style={{
          minHeight: "300px",
          width: "calc(100% - 20px)",
          padding: "20px",
          display: "flex",
          borderRadius: "10px",
          alignItems: "start",
        }}
      >
        <div
          style={{
            height: "250px",
            width: "230px",
          }}
        >
          <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={800}
            transitionSpeed={1500}
            gyroscope={true}
          >
            <img
              src={book.bookCover}
              height="250px"
              width="230px"
              style={{
                boxShadow: "rgb(0,0,0,0.5) 0px 5px 15px",
                borderRadius: "5px",
              }}
              alt=""
            />
          </Tilt>
        </div>
        <div
          style={{
            minHeight: "250px",
            marginLeft: "20px",
            background: "#423e3ea",
          }}
          className="book-detail-container"
        >
          <p
            style={{
              width: "fit-content",
              fontSize: "1.7rem",
              fontFamily: "UnifrakturCook, cursive",
              color: "var(--primary-color)",
              textShadow: "2px 2px 4px #000000",
              fontWeight: "bolder",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {book.title}
            {book.buyLink ? (
              <span
                style={{
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
              >
                <a href={book.buyLink} target="_blank">
                  <img
                    style={{
                      boxShadow: "2px 2px 4px #000000",
                      borderRadius: "50%",
                    }}
                    height="30px"
                    width="30px"
                    src="/amazon.png"
                  ></img>
                </a>
              </span>
            ) : (
              ""
            )}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              margin: "10px auto",
            }}
          >
            {book.genre &&
              book.genre.map((category) => {
                return (
                  <p
                    style={{
                      width: "fit-content",
                      color: "#864AF9",
                      fontWeight: "bolder",
                      display: "flex",
                      justifyContent: "center",
                      textShadow: "2px 2px 4px #000000",
                      alignItems: "center",
                      marginRight: "6px",
                    }}
                  >
                    <span
                      style={{
                        marginRight: "3px",
                      }}
                      className="material-symbols-outlined"
                    >
                      token
                    </span>{" "}
                    {category}
                  </p>
                );
              })}
          </div>
          <p
            style={{
              marginTop: "2px",
              color: "#adbac7",
              textAlign: "justify",
              fontWeight: "bolder",
              textShadow: "2px 2px 4px #000000",
            }}
          >
            {book.bookDescription}
          </p>

          <div
            className="stats"
            style={{
              display: "grid",
              width: "fit-content",
              gridTemplateColumns: "auto auto auto",
              gap: "10px",
              margin: "20px 0",
            }}
          >
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
            style={{
              background: "#347d39",
              padding: "12px",
              borderRadius: "12px",
              width: "fit-content",
              boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.5)",
              margin: "10px 0 10px 0",
              userSelect: "none",
              cursor: "pointer",
              color: "white",
            }}
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
