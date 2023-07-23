import axios from "axios";
import {
  GET_ALL_PAYEMENTS_FAIL,
  GET_ALL_PAYEMENTS_REQUEST,
  GET_ALL_PAYEMENTS_SUCCESS,
  GET_PAYEMENT_REQUEST,
  GET_PAYEMENT_SUCCESS,
  GET_PAYEMENT_FAIL,
  ADD_PAYEMENT_REQUEST,
  ADD_PAYEMENT_SUCCESS,
  ADD_PAYEMENT_FAIL,
  DELETE_PAYEMENT_REQUEST,
  DELETE_PAYEMENT_SUCCESS,
  DELETE_PAYEMENT_FAIL,
  UPDATE_PAYEMENT_REQUEST,
  UPDATE_PAYEMENT_SUCCESS,
  UPDATE_PAYEMENT_FAIL,
} from "../Constants/PayementConstants";

//get all payements
export const get_all_payements_action = (token) => async (dispatch) => {
  dispatch({ type: GET_ALL_PAYEMENTS_REQUEST });
  try {
    const { data } = await axios.get(
      "https://tadartino.ma/api/payement/get-all-payements",
      {
        headers: {
          token,
        },
      }
    );
    dispatch({ type: GET_ALL_PAYEMENTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_PAYEMENTS_FAIL, payload: error.response });
  }
};

//get payement
export const get_payement_action = (token, id) => async (dispatch) => {
  dispatch({ type: GET_PAYEMENT_REQUEST });
  try {
    const { data } = await axios.get(
      "https://tadartino.ma/api/payement/get-payement",
      {
        headers: {
          token,
        },
        params: {
          id,
        },
      }
    );
    dispatch({ type: GET_PAYEMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PAYEMENT_FAIL, payload: error.response });
  }
};

//add PAYEMENT
export const add_payement_action = (token, info) => async (dispatch) => {
  dispatch({ type: ADD_PAYEMENT_REQUEST });
  try {
    const { data } = await axios.post(
      "https://tadartino.ma/api/payement/create-payement",
      info,
      {
        headers: {
          token,
        },
      }
    );
    dispatch({ type: ADD_PAYEMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_PAYEMENT_FAIL, payload: error.response });
  }
};
//add payement
export const update_payement_action = (token, info) => async (dispatch) => {
  dispatch({ type: UPDATE_PAYEMENT_REQUEST });
  try {
    const { data } = await axios.post(
      "https://tadartino.ma/api/payement/update-payement",
      info,
      {
        headers: {
          token,
        },
      }
    );
    dispatch({ type: UPDATE_PAYEMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_PAYEMENT_FAIL, payload: error.response });
  }
};
//delete payement
export const delete_payement_action = (token, id) => async (dispatch) => {
  dispatch({ type: DELETE_PAYEMENT_REQUEST });
  try {
    const { data } = await axios.delete(
      "https://tadartino.ma/api/payement/delete-payement",
      {
        headers: {
          token,
        },
        params: {
          id,
        },
      }
    );
    dispatch({ type: DELETE_PAYEMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DELETE_PAYEMENT_FAIL, payload: error.response });
  }
};
