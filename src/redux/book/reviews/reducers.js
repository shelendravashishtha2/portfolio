import {
  fetchBookReviewsCompleted,
  fetchBookReviewsErr,
  fetchBookReviewsInit,
} from "../../../constants/reduxConstants";

let initState = {
  loading: false,
  err: null,
  data: [],
};

export const getBookReviewReducer = (state = initState, action) => {
  switch (action.type) {
    case fetchBookReviewsInit:
      return { ...state, loading: true };
    case fetchBookReviewsCompleted:
      return { ...state, loading: false, data: action.payload };
    case fetchBookReviewsErr:
      return { ...state, loading: false, err: action.payload };
    default:
      return state;
  }
};
