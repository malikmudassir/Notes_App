import {
  DELETE_NOTE_FAILURE,
  DELETE_NOTE_REQUEST,
  DELETE_NOTE_SUCCESS,
  FETCH_NOTES_FAILURE,
  FETCH_NOTES_REQUEST,
  FETCH_NOTES_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from "./action";

// Register User From action

export const registerUser = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return { loading: true };
    case REGISTER_USER_SUCCESS:
      return { loading: false, success: true, user: action.payload };
    case REGISTER_USER_FAILURE:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

// Login Reducer from action
export const loginUser = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return { loading: true };
    case LOGIN_USER_SUCCESS:
      return { loading: false, success: true, loginUser: action.payload };
    case LOGIN_USER_FAILURE:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

// Get All Notes from action
export const getNotes = (state = {}, action) => {
  switch (action.type) {
    case FETCH_NOTES_REQUEST:
      return { loading: true };
    case FETCH_NOTES_SUCCESS:
      return { loading: false, success: true, getNotes: action.payload };
    case FETCH_NOTES_FAILURE:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

// delete notes from action
export const deleteNotes = (state = {}, action) => {
  switch (action.type) {
    case DELETE_NOTE_REQUEST:
      return { loading: true };
    case DELETE_NOTE_SUCCESS:
      return { loading: false, success: true, deleteNotes: action.payload };
    case DELETE_NOTE_FAILURE:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};
