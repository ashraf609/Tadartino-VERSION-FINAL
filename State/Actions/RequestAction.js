import axios from "axios";
import {
  GET_ALL_REQUESTS_FAIL,
  GET_ALL_REQUESTS_REQUEST,
  GET_ALL_REQUESTS_SUCCESS,
  GET_REQUEST_REQUEST,
  GET_REQUEST_SUCCESS,
  GET_REQUEST_FAIL,
  ADD_REQUEST_REQUEST,
  ADD_REQUEST_SUCCESS,
  ADD_REQUEST_FAIL,
  DELETE_REQUEST_REQUEST,
  DELETE_REQUEST_SUCCESS,
  DELETE_REQUEST_FAIL,
  UPDATE_REQUEST_REQUEST,
  UPDATE_REQUEST_SUCCESS,
  UPDATE_REQUEST_FAIL,
} from "../Constants/RequestConstants";

//get all REQUESTs
export const get_all_requests_action = (token) => async (dispatch) => {
  dispatch({ type: GET_ALL_REQUESTS_REQUEST });
  try {
    const { data } = await axios.get(
      "https://tadartino.ma/api/REQUEST/get-all-REQUESTs",
      {
        headers: {
          token,
        },
      }
    );
    dispatch({ type: GET_ALL_REQUESTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_REQUESTS_FAIL, payload: error.response });
  }
};

//get REQUEST
export const get_request_action = (token, id) => async (dispatch) => {
  dispatch({ type: GET_REQUEST_REQUEST });
  try {
    const { data } = await axios.get(
      "https://tadartino.ma/api/request/get-request",
      {
        headers: {
          token,
        },
        params: {
          id,
        },
      }
    );
    dispatch({ type: GET_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_REQUEST_FAIL, payload: error.response });
  }
};

//add REQUEST
export const add_request_action = (token, info) => async (dispatch) => {
  dispatch({ type: ADD_REQUEST_REQUEST });
  try {
    const { data } = await axios.post(
      "https://tadartino.ma/api/request/create-request",
      info,
      {
        headers: {
          token,
        },
      }
    );
    dispatch({ type: ADD_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_REQUEST_FAIL, payload: error.response });
  }
};
//add REQUEST
export const update_request_action = (token, info) => async (dispatch) => {
  dispatch({ type: UPDATE_REQUEST_REQUEST });
  try {
    const { data } = await axios.post(
      "https://tadartino.ma/api/request/update-request",
      info,
      {
        headers: {
          token,
        },
      }
    );
    dispatch({ type: UPDATE_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_REQUEST_FAIL, payload: error.response });
  }
};
//delete request
export const delete_request_action = (token, id) => async (dispatch) => {
  dispatch({ type: DELETE_REQUEST_REQUEST });
  try {
    const { data } = await axios.delete(
      "https://tadartino.ma/api/request/delete-request",
      {
        headers: {
          token,
        },
        params: {
          id,
        },
      }
    );
    dispatch({ type: DELETE_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DELETE_REQUEST_FAIL, payload: error.response });
  }
};
