import {
  fetchPlaylistCompleted,
  fetchPlaylistErr,
  fetchPlaylistInit,
} from "../../../constants/reduxConstants";

let initState = {
  loading: false,
  err: null,
  data: null,
};

export const getPlaylistReducer = (state = initState, action) => {
  switch (action.type) {
    case fetchPlaylistInit:
      return { ...state, loading: true };
    case fetchPlaylistCompleted:
      return { ...state, loading: false, data: action.payload };
    case fetchPlaylistErr:
      return { ...state, loading: false, err: action.payload };
    default:
      return state;
  }
};
