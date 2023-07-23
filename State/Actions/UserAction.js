import axios from "axios";
import {
  DELETE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  GET_PERSONAL_INFO_FAIL,
  GET_PERSONAL_INFO_REQUEST,
  GET_PERSONAL_INFO_SUCCESS,
  GET_USERS_FAIL,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../Constants/UserConstants";

//register user
export const registerAction = (user) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST });
  try {
    const { data } = await axios.post(
      "https://tadartino.ma/api/auth/register",
      user
    );
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.response });
  }
};

//login user
export const loginAction = (info) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });
  try {
    const { data } = await axios.post(
      "https://tadartino.ma/api/auth/login",
      info
    );
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: error.response });
  }
};

//get all users
export const get_personal_info_action =
  (token, id = null) =>
  async (dispatch) => {
    dispatch({ type: GET_PERSONAL_INFO_REQUEST });
    try {
      const { data } = await axios.get(
        "https://tadartino.ma/api/user/personal",
        {
          headers: {
            token,
          },
          params: {
            id,
          },
        }
      );
      dispatch({ type: GET_PERSONAL_INFO_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_PERSONAL_INFO_FAIL, payload: error.response });
    }
  };

//get all users
export const get_all_users_action = () => async (dispatch) => {
  dispatch({ type: GET_USERS_REQUEST });
  try {
    const { data } = await axios.get("https://tadartino.ma/api/user/get-users");
    dispatch({ type: GET_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_USERS_FAIL, payload: error.response });
  }
};

//update user
export const update_user_action = (token, info) => async (dispatch) => {
  dispatch({ type: UPDATE_USER_REQUEST });
  try {
    const { data } = await axios.post(
      "https://tadartino.ma/api/user/update-user-data",
      info,
      {
        headers: {
          token,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    dispatch({ type: UPDATE_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_USER_FAIL, payload: error.response });
  }
};

//delete user
export const delete_user_action =
  (token, id = null) =>
  async (dispatch) => {
    dispatch({ type: DELETE_USER_REQUEST });
    try {
      const { data } = await axios.delete(
        "https://tadartino.ma/api/user/delete-user",
        {
          headers: {
            token,
          },
          params: {
            id,
          },
        }
      );
      dispatch({ type: DELETE_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: DELETE_USER_FAIL, payload: error.response });
    }
  };

//logout
export const logout_action = (token) => async (dispatch) => {
  dispatch({ type: LOGOUT_REQUEST });
  try {
    const { data } = await axios.post("https://tadartino.ma/api/auth/logout", {
      headers: {
        token,
      },
    });
    dispatch({ type: LOGOUT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response });
  }
};
