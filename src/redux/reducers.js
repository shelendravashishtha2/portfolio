import {
  fetchCompleted,
  fetchErr,
  fetchInit,
} from "../constants/reduxConstants";

let initState = {
  loading: false,
  err: null,
  data: null,
};

export const getProjectReducer = (state = initState, action) => {
  switch (action.type) {
    case fetchInit:
      return { ...state, loading: true };
    case fetchCompleted:
      return { ...state, loading: false, data: action.payload };
    case fetchErr:
      return { ...state, loading: false, err: action.payload };
    default:
      return state;
  }
};
