import axios from "axios";

//Export to UserReducer
export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const REGISTER_NOTE_REQUEST = "REGISTER_NOTE_REQUEST";
export const REGISTER_NOTE_SUCCESS = "REGISTER_NOTE_SUCCESS";
export const REGISTER_NOTE_FAILURE = "REGISTER_NOTE_FAILURE";

export const FETCH_NOTES_REQUEST = "FETCH_NOTES_REQUEST";
export const FETCH_NOTES_SUCCESS = "FETCH_NOTES_SUCCESS";
export const FETCH_NOTES_FAILURE = "FETCH_NOTES_FAILURE";

export const DELETE_NOTE_REQUEST = "DELETE_NOTE_REQUEST";
export const DELETE_NOTE_SUCCESS = "DELETE_NOTE_SUCCESS";
export const DELETE_NOTE_FAILURE = "DELETE_NOTE_FAILURE";

// Register User

export const register = (userData, navigate) => {
  return async (dispatch) => {
    dispatch({ type: REGISTER_USER_REQUEST });

    try {
      const { data } = await axios.post(
        "http://localhost:5003/user/registeruser",
        userData
      );
      navigate("/signin");
      console.log("Register API Response", data);

      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAILURE,
        payload: error.message,
      });
    }
  };
};

// Login User

export const login = (userData, navigate) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_USER_REQUEST });

    try {
      const { data } = await axios.post(
        "http://localhost:5003/user/login",
        userData
      );

      localStorage.setItem("LoginUser", JSON.stringify(data));
      navigate("/note");

      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_USER_FAILURE,
        payload: error.message,
      });
    }
  };
};

// Add Note Card

export const addTask = (userData, navigate) => {
  debugger;
  return async (dispatch) => {
    dispatch({ type: REGISTER_NOTE_REQUEST });

    try {
      const { data } = await axios.post(
        "http://localhost:5003/task/addtask",
        userData
      );

      navigate("/note");

      dispatch({
        type: REGISTER_NOTE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: REGISTER_NOTE_FAILURE,
        payload: error.message,
      });
    }
  };
};

// All Notes
export const allTasks = () => {
  const user = JSON.parse(localStorage.getItem("LoginUser"));
  const userId = user.id;

  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_NOTES_REQUEST });

      const { data } = await axios.get(
        `http://localhost:5003/task/getAlltasks/${userId}`
      );
      // localStorage.setItem("alldata", JSON.stringify(data.alltasks));
      dispatch({
        type: FETCH_NOTES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_NOTES_FAILURE,
        payload: error.message,
      });
    }
  };
};

// Delete Record
export const deleteRecord = (itemId) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("LoginUser"));
  const userId = user.id;
  dispatch({ type: DELETE_NOTE_REQUEST });

  try {
    const { data } = await axios.delete(
      `http://localhost:5003/task/deletetask/${itemId}`,
      {
        data: {
          userId: userId,
        },
      }
    );

    dispatch({
      type: DELETE_NOTE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_NOTE_FAILURE,
      payload: error.message,
    });
  }
};
