import aboutReducer from "./about/reducer";
import indexReducer from "./index/reducer";
import postsReducer from "./posts/reducer";
import currentPost from "./post/id/postId";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  about: aboutReducer,
  index: indexReducer,
  posts: postsReducer,
  currentPost,
});
export default rootReducer;
