import {
    fetchAwardsCompleted,
    fetchAwardsErr,
    fetchAwardsInit,
    fetchEducationCompleted,
    fetchEducationErr,
    fetchEducationInit,
  } from "../../constants/reduxConstants";
  
  let initState = {
    loading: false,
    err: null,
    data: null,
  };
  
  export const getAwardsReducer = (state = initState, action) => {
    switch (action.type) {
      case fetchAwardsInit:
        return { ...state, loading: true };
      case fetchAwardsCompleted:
        return { ...state, loading: false, data: action.payload };
      case fetchAwardsErr:
        return { ...state, loading: false, data: action.payload };
      default:
        return state;
    }
  };
  