import aboutReducer from "./about/reducer";
import indexReducer from "./index/reducer";
import postsReducer from "./posts/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  about: aboutReducer,
  index: indexReducer,
  posts: postsReducer,
});
export default rootReducer;
