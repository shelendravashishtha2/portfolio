import Tilt from "react-parallax-tilt";
import BookSectionSeperator from "./seperator";

const AuthorDetailContainer = ({ book }) => {
  return (
    <>
      <p
        style={{
          fontFamily: "UnifrakturCook, cursive",
          textShadow: "2px 2px 4px #000000",
          fontSize: "2rem",
          color: "var(--primary-color)",
        }}
      >
        About Author
      </p>
      <div
        className="book-detail-container"
        style={{
          minHeight: "300px",
          width: "calc(100% - 20px)",
          display: "flex",
          marginTop: "20px",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <div
          style={{
            width: "calc(100% - 250px)",
          }}
        >
          <p
            style={{
              color: "#adbac7",
              textAlign: "justify",
            }}
          >
            {book.writerDescription}
          </p>
        </div>
        <div
          style={{
            height: "250px",
            width: "230px",
            float: "end",
          }}
        >
          <div>
            <Tilt
              className="parallax-effect-img"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={800}
              transitionSpeed={1500}
              gyroscope={true}
            >
              <img
                src={book.writerPic}
                height="250px"
                width="230px"
                style={{
                  boxShadow: "rgb(0,0,0,0.5) 0px 5px 15px",
                  borderRadius: "5px",
                }}
                alt=""
              />
            </Tilt>
            <div
              className="author-name"
              style={{
                margin: "10px 0",
                fontFamily: "",
                fontSize: "1.2rem",
                color: "var(--primary-color)",
              }}
            >
              {book.writerName}
            </div>
          </div>
        </div>
      </div>
      <BookSectionSeperator />
    </>
  );
};

export default AuthorDetailContainer;
