import {
  fetchPoetryCompleted,
  fetchPoetryErr,
  fetchPoetryInit,
} from "../../constants/reduxConstants";
import { firestore } from "../../firebase";

export const fetchPoetryCreator = () => {
  return { type: fetchPoetryInit };
};

export const getPoetryCreator = (data) => {
  return { type: fetchPoetryCompleted, payload: data };
};

export const getPoetryErrCreator = (err) => {
  return { type: fetchPoetryErr, payload: err };
};

export const fetchPoetriesList = () => {
  return (dispatch) => {
    try {
      dispatch(fetchPoetryCreator());
      firestore
        .collection("poetry")
        .get()
        .then((poetryDocs) => {
          const poetryList = [];
          poetryDocs.docs.forEach((value) => {
            let data = value.data();
            if (data.createdAt) {
              data.createdAt = data.createdAt.toMillis();
            }
            poetryList.push(data);
          });
          dispatch(getPoetryCreator(poetryList));
        });
    } catch (e) {
      getPoetryErrCreator("Some Error Occurred");
    }
  };
};
