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
      .doc("LPVBDVv7OvxN5PXNOVJ8")
      .get()
      .then((data) => {
        dispatch(getEducationCreator(data.data()));
      })
      .catch((err) => getEducationErrCreator(err));
  };
};
