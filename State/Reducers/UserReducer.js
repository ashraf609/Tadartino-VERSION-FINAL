import {
  DELETE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  GET_PERSONAL_INFO_FAIL,
  GET_PERSONAL_INFO_REQUEST,
  GET_PERSONAL_INFO_SUCCESS,
  GET_USERS_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from "../Constants/UserConstants";
import { GET_USERS_FAIL } from "../Constants/UserConstants";
import { GET_USERS_REQUEST } from "../Constants/UserConstants";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../Constants/UserConstants";

//regiter reducer
export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//login reducer
export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
    case USER_REGISTER_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_LOGIN_FAIL:
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//get user data reducer
export const get_personal_info_reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PERSONAL_INFO_REQUEST:
      return { loading: true };
    case GET_PERSONAL_INFO_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_PERSONAL_INFO_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//get users reducer
export const get_users_reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return { loading: true };
    case GET_USERS_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_USERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//update user reducer
export const update_user_reducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return { loading: true };
    case UPDATE_USER_SUCCESS:
      return { loading: false, data: action.payload };
    case UPDATE_USER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//delete user reducer
export const delete_user_reducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_USER_REQUEST:
      return { loading: true };
    case DELETE_USER_SUCCESS:
      return { loading: false, data: action.payload };
    case DELETE_USER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
