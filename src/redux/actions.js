import {
  fetchCompleted,
  fetchErr,
  fetchInit,
} from "../constants/reduxConstants";
import { firestore } from "../firebase";

export const getProjectInitCreator = () => {
  return {
    type: fetchInit,
  };
};

export const getProjectFetchCreator = (data) => {
  return { type: fetchCompleted, payload: data };
};

export const getProjectErrCreator = (err) => {
  return { type: fetchErr, payload: err };
};

export const fetchProjects = () => {
  return (dispatch) => {
    dispatch(getProjectInitCreator());
    firestore
      .collection("projects")
      .doc("IVP4y0GWRmWWWOCD5XNo")
      .get()
      .then((data) => {
        dispatch(getProjectFetchCreator(data.data()));
      })
      .catch((error) => {
          
        dispatch(getProjectErrCreator(error));
      });
  };
};
