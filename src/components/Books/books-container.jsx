import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BooksContainer = ({ handleTouch, book }) => {
  const navigate = useNavigate();
  console.log(book);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className="tilt-container">
      <Tilt glareEnable={false} glareColor={"transparent"}>
        <div className="book-card" onClick={handleTouch}>
          <div
            style={{
              width: "100%",
              borderRadius: "8px",
            }}
            className="book-container"
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
                src={book.src}
                height="200px"
                width="200px"
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
              marginTop: "155px",
              fontSize: "14px",
              color: "var(--primary-color)",
              width: "100%",
              padding: "10px",
              textAlign: "start",
            }}
          >
            <h2
              style={{
                maxLines: 1,
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              {book.title}
            </h2>
            <p
              style={{
                maxLines: 1,
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              {book.author}
            </p>
          </div>
          <div
            onClick={() => {
              navigate(`/book-details/${book.id}`);
            }}
            className="bottom-container"
          >
            View Details
            <span class="material-symbols-outlined">navigate_next</span>
          </div>
        </div>
      </Tilt>
    </div>
  );
};
export default BooksContainer;
