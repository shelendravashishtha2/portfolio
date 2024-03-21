import Tilt from "react-parallax-tilt";
import BookSectionSeperator from "./seperator";
import "../../../css/books/Details/author-details.css";
const AuthorDetailContainer = ({ book }) => {
  return (
    <>
      <p className="about-author-title">About Author</p>
      <div className="author-detail-container">
        <div className="author-description">
          <p
            style={{
              color: "#adbac7",
              textAlign: "justify",
            }}
          >
            {book.writerDescription}
          </p>
        </div>
        <div className="author-image-container">
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
                  marginBottom: "10px",
                }}
                alt=""
              />
            </Tilt>
            <div className="author-name">{book.writerName}</div>
          </div>
        </div>
      </div>
      <BookSectionSeperator />
    </>
  );
};

export default AuthorDetailContainer;
