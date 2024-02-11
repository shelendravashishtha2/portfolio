import {
  fetchBookReviewsCompleted,
  fetchBookReviewsErr,
  fetchBookReviewsInit,
  fetchBooksCompleted,
  fetchBooksErr,
  fetchBooksInit,
} from "../../../constants/reduxConstants";

import { firestore } from "../../../firebase";

export const fetchBookReviewsCreator = () => {
  return { type: fetchBookReviewsInit };
};

export const getBookReviewsCreator = (data) => {
  return { type: fetchBookReviewsCompleted, payload: data };
};

export const getBookReviewsErrCreator = (err) => {
  return { type: fetchBookReviewsErr, payload: err };
};

export const fetchBookReviewsList = ({ id }) => {
  return (dispatch) => {
    try {
      dispatch(fetchBookReviewsCreator());
      firestore
        .collection("books")
        .doc(id)
        .collection("reviews")
        .get()
        .then((bookDocs) => {
          const booksList = [];

          bookDocs.docs.forEach((value) => {
             let data = value.data();
             if (data.createdAt) {
               data.createdAt = data.createdAt.toMillis();
             }
             booksList.push(data);
          });
          console.log(booksList);
          dispatch(getBookReviewsCreator(booksList));
        });
    } catch (e) {
      console.log(e);
      getBookReviewsErrCreator("Some Error Occurred");
    }
  };
};
