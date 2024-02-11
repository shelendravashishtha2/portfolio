import {
  fetchPoetryCompleted,
  fetchPoetryErr,
  fetchPoetryInit,
} from "../../constants/reduxConstants";

let initState = {
  loading: false,
  err: null,
  data: [],
};

export const getPoetryReducer = (state = initState, action) => {
  switch (action.type) {
    case fetchPoetryInit:
      return { ...state, loading: true };
    case fetchPoetryCompleted:
      return { ...state, loading: false, data: action.payload };
    case fetchPoetryErr:
      return { ...state, loading: false, err: action.payload };
    default:
      return state;
  }
};
