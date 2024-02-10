import {
  fetchBooksInit,
  fetchBooksErr,
  fetchBooksCompleted,
} from "../../../constants/reduxConstants";

let initState = {
  loading: false,
  err: null,
  data: [],
};

export const getBooksReducer = (state = initState, action) => {
  switch (action.type) {
    case fetchBooksInit:
      return { ...state, loading: true };
    case fetchBooksCompleted:
      return { ...state, loading: false, data: action.payload };
    case fetchBooksErr:
      return { ...state, loading: false, err: action.payload };
    default:
      return state;
  }
};
