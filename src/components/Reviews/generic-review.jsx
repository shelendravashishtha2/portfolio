import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookReviewsList } from "../../redux/book/reviews/actions";
import { firestore } from "../../firebase";
import { useNavigate, useParams } from "react-router-dom";
import { set } from "lodash";

const GenericReview = ({ id, isBook }) => {
  const dispatch = useDispatch();
  // const reviews = useSelector((state) => state.bookReviews);
  const [reviews, setReviews] = useState([]);
  const params = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    if (isBook) {
      let ref = firestore
        .collection("books")
        .doc(params.id)
        .collection("reviews");
      ref.onSnapshot((snapshot) => {
        let revArr = snapshot.docs.map((review) => review.data());
        console.log(revArr);

        revArr.sort((a, b) => b.createdAt - a.createdAt);
        setReviews(revArr);
        console.log(revArr);
        setLoading(false);
      });
    } else {
      let ref = firestore
        .collection("poetry")
        .doc(params.docid)
        .collection("reviews");
      ref.onSnapshot((snapshot) => {
        let revArr = snapshot.docs.map((review) => review.data());
        console.log(revArr);

        revArr.sort((a, b) => b.createdAt - a.createdAt);
        setReviews(revArr);
        console.log(revArr);
        setLoading(false);
      });
    }
    // dispatch(fetchBookReviewsList({ id: book.id }));
  }, [params]);
  return (
    <>
      <p
        style={{
          fontFamily: "UnifrakturCook, cursive",
          textShadow: "2px 2px 4px #000000",
          fontSize: "2rem",
          color: "var(--primary-color)",
          margin: "10px auto",
        }}
      >
        Reviews
      </p>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          alignItems: "start",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "30%",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <img
            src="/review_image.png"
            style={{
              width: "100%",
              height: "300px",
            }}
          ></img>
          <div
            style={{
              width: "1px",
              height: "200px",
              background: "var(--primary-color)",
            }}
          ></div>
        </div>
        <div
          style={{
            width: "68%",
            minHeight: "200px",
          }}
        >
          {loading ? (
            <>Loading....</>
          ) : !reviews.length ? (
            <p
              style={{
                color: "var(--primary-color)",
              }}
            >
              No Reviews Found {reviews.length}
            </p>
          ) : (
            reviews.map((review) => (
              <div
                className="review"
                style={{
                  width: "100%",
                  padding: "10px",
                  background: "#29313c",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              >
                <p
                  style={{
                    margin: "8px 0 10px 0",
                    color: "var(--primary-color)",
                  }}
                >
                  {review.review}
                </p>
                <div
                  className="review-user-info"
                  style={{
                    display: "flex",
                    color: "#aaa",
                  }}
                >
                  <img
                    style={{
                      height: "30px",
                      width: "30px",
                      borderRadius: "50%",
                      // mixBlendMode: "multiply",
                      marginRight: "10px",
                    }}
                    height="50px"
                    width="50px"
                    src="/user.jpg"
                  ></img>
                  <p>{review.name}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default GenericReview;
