import { combineReducers } from "redux";
import { getAwardsReducer } from "./awards/reducer";
import { getEducationReducer } from "./education/reducers";
import { getExperienceReducer } from "./experience/reducer";
import { getProjectReducer } from "./reducers";
import { getPlaylistReducer } from "./music/reducer";
import { getBooksReducer } from "./book/books/reducers";
import { getPoetryReducer } from "./poetry/reducers";
import { getBookReviewReducer } from "./book/reviews/reducers";

let rootReducer = combineReducers({
  experience: getExperienceReducer,
  awards: getAwardsReducer,
  projects: getProjectReducer,
  education: getEducationReducer,
  playlist: getPlaylistReducer,
  books: getBooksReducer,
  poetries: getPoetryReducer,
  bookReviews: getBookReviewReducer,
});

export default rootReducer;
