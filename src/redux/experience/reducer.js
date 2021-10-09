import {
  fetchEducationErr,
  fetchExperienceCompleted,
  fetchExperienceInit,
} from "../../constants/reduxConstants";

let initState = {
  loading: false,
  err: null,
  data: null,
};

export const getExperienceReducer = (state = initState, action) => {
  switch (action.type) {
    case fetchExperienceInit:
      return { ...state, loading: true };
    case fetchExperienceCompleted:
      return { ...state, loading: false, data: action.payload };
    case fetchEducationErr:
      return { ...state, loading: false, data: action.payload };
    default:
      return state;
  }
};
