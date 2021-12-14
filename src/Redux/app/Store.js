import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./RootReducer";
import { createFirestoreInstance } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";
import firebase from "./../../utils/FirebaseConfig";

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ getFirebase }), logger)
  )
);

const rrfConfig = {};

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export default store;
