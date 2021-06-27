import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

import { createWrapper } from "next-redux-wrapper";

// // const INITIAL_STATE: State;
// const store = createStore(rootReducer, applyMiddleware(logger));

// create a makeStore function
const makeStore = (context) =>
  createStore(rootReducer, applyMiddleware(logger));

// export an assembled wrapper
const wrapper = createWrapper(makeStore, { debug: true });

export { wrapper };
