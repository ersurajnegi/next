import { combineReducers } from "redux";

const indexState = (state = 0, action) => {
  switch (action.type) {
    case "CHANGE_INDEX_STATE": {
      return state - 1;
    }
    default:
      return state || 100;
  }
};

const indexReducer = combineReducers({
  indexState,
});

export default indexReducer;
