import {
  fetchEducationCompleted,
  fetchEducationErr,
  fetchEducationInit,
} from "../../constants/reduxConstants";
import { firestore } from "../../firebase";

export const fetchEducationCreator = () => {
  return { type: fetchEducationInit };
};

export const getEducationCreator = (data) => {
  return { type: fetchEducationCompleted, payload: data };
};

export const getEducationErrCreator = (err) => {
  return { type: fetchEducationErr, payload: err };
};

export const fetchEducation = () => {
  return (dispatch) => {
    dispatch(fetchEducationCreator());
    firestore
      .collection("education")
      .doc("FUyPke5WyEu7QfM9DABI")
      .get()
      .then((data) => {
        console.log(data.data());
        dispatch(getEducationCreator(data.data()));
      })
      .catch((err) => getEducationErrCreator(err));
  };
};
