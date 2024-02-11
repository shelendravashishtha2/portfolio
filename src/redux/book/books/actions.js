import {
  fetchBooksCompleted,
  fetchBooksErr,
  fetchBooksInit,
} from "../../../constants/reduxConstants";

import { firestore } from "../../../firebase";

export const fetchBooksCreator = () => {
  return { type: fetchBooksInit };
};

export const getBooksCreator = (data) => {
  return { type: fetchBooksCompleted, payload: data };
};

export const getBooksErrCreator = (err) => {
  return { type: fetchBooksErr, payload: err };
};

export const fetchBooksList = () => {
  return (dispatch) => {
    try {
      dispatch(fetchBooksCreator());
      firestore
        .collection("books")
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
          dispatch(getBooksCreator(booksList));
        });
    } catch (e) {
      getBooksErrCreator("Some Error Occurred");
    }
  };
};
