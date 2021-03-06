import { combineReducers } from "redux";
import { getAwardsReducer } from "./awards/reducer";
import { getEducationReducer } from "./education/reducers";
import { getExperienceReducer } from "./experience/reducer";
import { getProjectReducer } from "./reducers";

let rootReducer = combineReducers({
  experience: getExperienceReducer,
  awards: getAwardsReducer,
  projects: getProjectReducer,
  education: getEducationReducer,
});

export default rootReducer;
