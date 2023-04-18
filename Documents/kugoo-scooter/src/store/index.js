import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import scooters from "../reducer/scooters";
import user from "../reducer/user";

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({
      type: action,
    });
  }
  return next(action);
};
const store = createStore(
  combineReducers({ scooters, user }),
  compose(
    applyMiddleware(ReduxThunk, stringMiddleware),
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()) ||
      compose
  )
);
export default store;
