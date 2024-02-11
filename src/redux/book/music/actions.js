import {
  fetchPlaylistCompleted,
  fetchPlaylistErr,
  fetchPlaylistInit,
} from "../../../constants/reduxConstants";

import { firestore } from "../../../firebase";

export const fetchPlaylistCreator = () => {
  return { type: fetchPlaylistInit };
};

export const getPlaylistCreator = (data) => {
  return { type: fetchPlaylistCompleted, payload: data };
};

export const getPlaylistErrCreator = (err) => {
  return { type: fetchPlaylistErr, payload: err };
};

export const fetchPlaylist = () => {
  return (dispatch) => {
    try {
      dispatch(fetchPlaylistCreator());
      firestore
        .collection("music")
        .get()
        .then((musicDocs) => {
          const musicPlaylist = [];
          musicDocs.docs.forEach((value) => {
            let data = value.data();
            if (data.createdAt) {
              data.createdAt = data.createdAt.toMillis();
            }
            musicPlaylist.push(data);
          });
          dispatch(getPlaylistCreator(musicPlaylist));
        });

      // .then((data) => {
      //   dispatch(getPlaylistCreator(data.data()));
      // })
      // .catch((err) => getPlaylistErrCreator(err));
    } catch (e) {
      getPlaylistErrCreator("Some Error Occurred");
    }
  };
};
