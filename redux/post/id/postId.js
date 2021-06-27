import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

const id = (state = 0, action) => {
  switch (action.type) {
    case HYDRATE: {
      if (
        action.payload &&
        action.payload.posts &&
        action.payload.posts.currentPost &&
        action.payload.posts.currentPost.id !== state
      )
        return { ...state, ...action.payload.posts.posts };
      else {
        return state;
      }
    }
    case "CHANGE_POSTID_STATE": {
      debugger;
      return action.payload;
    }
    default:
      return state;
  }
};

const currentPost = combineReducers({
  id,
});

export default currentPost;
