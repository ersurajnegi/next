import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

// const INITIAL_STATE: State;
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
