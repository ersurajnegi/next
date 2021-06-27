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
    case "FILLE_POST_ARRAY": {
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
