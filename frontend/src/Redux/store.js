// Import necessary Redux functions and middleware
import { createStore, combineReducers, applyMiddleware } from "redux";
import { deleteNotes, getNotes, loginUser, registerUser } from "./userReducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Combine your reducers into a single rootReducer
const rootReducer = combineReducers({
  // You can use UserReducer to manage notes state
  user: registerUser,
  loginUser: loginUser,
  getNotes: getNotes,
  deleteNotes: deleteNotes,
});

// Create the Redux store with rootReducer, apply middleware, and enable Redux DevTools
const store = createStore(
  rootReducer, // Pass the combined rootReducer
  composeWithDevTools(applyMiddleware(thunkMiddleware)) // Enable Redux DevTools and apply Redux Thunk middleware
);

export default store; // Export the created Redux store
