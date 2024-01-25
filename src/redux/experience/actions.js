import {
  fetchExperienceCompleted,
  fetchExperienceErr,
  fetchExperienceInit,
} from "../../constants/reduxConstants";
import { firestore } from "../../firebase";

export const fetchExperienceCreator = () => {
  return { type: fetchExperienceInit };
};

export const getExperienceCreator = (data) => {
  return { type: fetchExperienceCompleted, payload: data };
};

export const getExperieceErrCreator = (err) => {
  return { type: fetchExperienceErr, payload: err };
};

export const fetchExperience = () => {
  return (dispatch) => {
    dispatch(fetchExperienceCreator());
    firestore
      .collection("experience")
      .doc("G1XRr0BliYUKTwI9o3YP")
      .get()
      .then((data) => {
        dispatch(getExperienceCreator(data.data()));
      })
      .catch((err) => getExperieceErrCreator(err));
  };
};
