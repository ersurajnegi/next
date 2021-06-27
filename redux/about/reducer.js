import { combineReducers } from "redux";

const aboutState = (state = 0, action) => {
  switch (action.type) {
    case "CHANGE_ABOUT_STATE": {
      return state - 1;
    }
    default:
      return state || 100;
  }
};

const aboutReducer = combineReducers({
  aboutState,
});

export default aboutReducer;
