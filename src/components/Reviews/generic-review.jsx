import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import { firestore } from "../../firebase";
import "../../css/Reviews/generic-review.css";

const GenericReview = ({ id, isBook }) => {
  const [reviews, setReviews] = useState([]);
  const params = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchReviews = async () => {
      let ref;
      if (isBook) {
        ref = firestore
          .collection("books")
          .doc(params.id)
          .collection("reviews");
      } else {
        ref = firestore
          .collection("poetry")
          .doc(params.docid)
          .collection("reviews");
      }

      ref.onSnapshot((snapshot) => {
        let revArr = snapshot.docs.map((review) => review.data());
        revArr.sort((a, b) => b.createdAt - a.createdAt);
        setReviews(revArr);
        setLoading(false);
      });
    };

    fetchReviews();
  }, [params, isBook]);

  return (
    <>
      <p className="review-title">Reviews</p>
      <div className="reviews-container">
        <div className="review-image-container">
          <img
            style={{
              width: "100%",
              height: "300px",
            }}
            src="/review_image.png"
          ></img>
          <div className="vertical-line"></div>
        </div>
        <div className="review-list-container">
          {loading ? (
            <>Loading....</>
          ) : !reviews.length ? (
            <p className="no-reviews-message">
              No Reviews Found {reviews.length}
            </p>
          ) : (
            reviews.map((review, index) => (
              <div key={index} className="review">
                <p className="review-text">
                  <sup>
                    <img src="/opening_quote.png"></img>
                  </sup>
                  {review.review}
                  <sub>
                    <img src="/closing_quote.png"></img>
                  </sub>
                </p>
                <div className="review-user-info">
                  <div className="user-info">
                    <img
                      className="user-avatar"
                      height="50px"
                      width="50px"
                      src="/user.jpg"
                    ></img>
                    <p className="user-name">{review.name}</p>
                  </div>
                  <div className="review-rating">
                    <Rating value={review.rating} disabled />
                  </div>
                  <div className="review-created-at">
                    <p>
                      Created At :{" "}
                      {new Date(review.createdAt).toLocaleDateString()}
                    </p>
                  </div>
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
