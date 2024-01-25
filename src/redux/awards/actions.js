import {
  fetchAwardsCompleted,
  fetchAwardsErr,
  fetchAwardsInit,
} from "../../constants/reduxConstants";
import { firestore } from "../../firebase";

export const fetchAwardsCreator = () => {
  return { type: fetchAwardsInit };
};

export const getAwardsCreator = (data) => {
  return { type: fetchAwardsCompleted, payload: data };
};

export const getAwardsErrCreator = (err) => {
  return { type: fetchAwardsErr, payload: err };
};

export const fetchAwards = () => {
  return (dispatch) => {
    dispatch(fetchAwardsCreator());
    firestore
      .collection("awards")
      .doc("aEaFtjVuafEjXeqipx8N")
      .get()
      .then((data) => {
        dispatch(getAwardsCreator(data.data()));
      })
      .catch((err) => getAwardsErrCreator(err));
  };
};
