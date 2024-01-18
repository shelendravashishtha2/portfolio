import {
  fetchEducationCompleted,
  fetchEducationErr,
  fetchEducationInit,
} from "../../constants/reduxConstants";

let initState = {
  loading: false,
  err: null,
  data: null,
};

export const getEducationReducer = (state = initState, action) => {
  switch (action.type) {
    case fetchEducationInit:
      return { ...state, loading: true };
    case fetchEducationCompleted:
      return { ...state, loading: false, data: action.payload };
    case fetchEducationErr:
      return { ...state, loading: false, data: action.payload };
    default:
      return state;
  }
};
