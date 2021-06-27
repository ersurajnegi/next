import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
const initialState = {
  number: 0,
  posts: [],
};
const number = (state = 0, action) => {
  switch (action.type) {
    case "CHANGE_POST_STATE": {
      return state - 1;
    }
    default:
      return state || 100;
  }
};
const posts = (state = [], action) => {
  switch (action.type) {
    case HYDRATE: {
      debugger;
      if (
        action.payload &&
        action.payload.posts &&
        action.payload.posts.posts &&
        action.payload.posts.posts.length
      )
        return action.payload.posts.posts;
      else {
        return state;
      }
    }
    case "FILLE_POST_ARRAY": {
      debugger;
      return action.payload || [];
    }
    default:
      return state || [];
  }
};

const postsReducer = combineReducers({
  number,
  posts,
});

export default postsReducer;
