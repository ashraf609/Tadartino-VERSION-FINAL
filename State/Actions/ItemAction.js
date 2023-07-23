import axios from "axios";
import {
  GET_ALL_ITEMS_FAIL,
  GET_ALL_ITEMS_REQUEST,
  GET_ALL_ITEMS_SUCCESS,
  GET_ITEM_REQUEST,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAIL,
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAIL,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAIL,
  UPDATE_ITEM_REQUEST,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_FAIL,
  SEARCH_ITEM_REQUEST,
  SEARCH_ITEM_SUCCESS,
  SEARCH_ITEM_FAIL,
  SEARCH_ITEMS_REQUEST,
  SEARCH_ITEMS_SUCCESS,
  SEARCH_ITEMS_FAIL,
  GET_LATEST_ITEM_PER_TYPE_REQUEST,
  GET_LATEST_ITEM_PER_TYPE_SUCCESS,
  GET_LATEST_ITEM_PER_TYPE_FAIL,
  LIKE_ITEM_REQUEST,
  LIKE_ITEM_SUCCESS,
  LIKE_ITEM_FAIL,
  GET_LIKE_ITEM_REQUEST,
  GET_LIKE_ITEM_SUCCESS,
  GET_LIKE_ITEM_FAIL,
  GET_USER_ITEM_REQUEST,
  GET_USER_ITEM_SUCCESS,
  GET_USER_ITEM_FAIL,
} from "../Constants/ItemConstants";

//get all items
export const get_all_items_action = (token) => async (dispatch) => {
  dispatch({ type: GET_ALL_ITEMS_REQUEST });
  try {
    const { data } = await axios.get(
      "https://tadartino.ma/api/item/get-all-items",
      {
        headers: {
          token,
        },
      }
    );
    dispatch({ type: GET_ALL_ITEMS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_ITEMS_FAIL, payload: error.response });
  }
};

//get item
export const get_item_action = (token, id) => async (dispatch) => {
  dispatch({ type: GET_ITEM_REQUEST });
  try {
    const { data } = await axios.get("https://tadartino.ma/api/item/get-item", {
      headers: {
        token,
      },
      params: {
        id,
      },
    });
    dispatch({ type: GET_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ITEM_FAIL, payload: error.response });
  }
};

//get user items
export const get_user_items_action =
  (token, id = null) =>
  async (dispatch) => {
    dispatch({ type: GET_USER_ITEM_REQUEST });
    try {
      const { data } = await axios.get(
        "https://tadartino.ma/api/item/get-user-items",
        {
          headers: {
            token,
          },
          params: {
            id,
          },
        }
      );
      dispatch({ type: GET_USER_ITEM_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_USER_ITEM_FAIL, payload: error.response });
    }
  };

//get item per type
export const get_latest_item_per_type_action =
  (token, types) => async (dispatch) => {
    dispatch({ type: GET_LATEST_ITEM_PER_TYPE_REQUEST });
    try {
      const { data } = await axios.get(
        "https://tadartino.ma/api/item/get-latest-item",
        {
          headers: {
            token,
          },
          params: {
            types,
          },
        }
      );
      dispatch({ type: GET_LATEST_ITEM_PER_TYPE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_LATEST_ITEM_PER_TYPE_FAIL,
        payload: error.response,
      });
    }
  };
//search item
export const search_item_action = (token, info) => async (dispatch) => {
  dispatch({ type: SEARCH_ITEM_REQUEST });
  try {
    const { data } = await axios.get(
      "https://tadartino.ma/api/item/search-item",
      {
        headers: {
          token,
        },
        params: info,
      }
    );
    dispatch({ type: SEARCH_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SEARCH_ITEM_FAIL, payload: error.response });
  }
};

//search items
//to make search request through any table using any queries
export const search_items_action = (token, info) => async (dispatch) => {
  dispatch({ type: SEARCH_ITEMS_REQUEST });
  try {
    const { data } = await axios.post(
      "https://tadartino.ma/api/item/search-items",
      info,
      {
        headers: {
          token,
        },
      }
    );
    dispatch({ type: SEARCH_ITEMS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SEARCH_ITEMS_FAIL, payload: error.response });
  }
};

//add item
export const add_item_action = (token, info) => async (dispatch) => {
  dispatch({ type: ADD_ITEM_REQUEST });
  try {
    const { data } = await axios.post(
      "https://tadartino.ma/api/item/create-item",
      info,
      {
        headers: {
          token,
        },
      }
    );
    dispatch({ type: ADD_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_ITEM_FAIL, payload: error.response });
  }
};

//like item
export const like_item_action = (token, info) => async (dispatch) => {
  dispatch({ type: LIKE_ITEM_REQUEST });
  try {
    const { data } = await axios.post(
      "https://tadartino.ma/api/item/like-item",
      info,
      {
        headers: {
          token,
        },
      }
    );
    dispatch({ type: LIKE_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LIKE_ITEM_FAIL, payload: error.response });
  }
};

//get liked item
export const get_liked_item_action =
  (token, id = null) =>
  async (dispatch) => {
    dispatch({ type: GET_LIKE_ITEM_REQUEST });
    try {
      const { data } = await axios.get(
        "https://tadartino.ma/api/item/get-liked-items",
        {
          headers: {
            token,
          },
          params: {
            id,
          },
        }
      );
      dispatch({ type: GET_LIKE_ITEM_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_LIKE_ITEM_FAIL, payload: error.response });
    }
  };

//update item
export const update_item_action = (token, info) => async (dispatch) => {
  dispatch({ type: UPDATE_ITEM_REQUEST });
  try {
    const { data } = await axios.post(
      "https://tadartino.ma/api/item/update-item",
      info,
      {
        headers: {
          token,
        },
      }
    );
    dispatch({ type: UPDATE_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_ITEM_FAIL, payload: error.response });
  }
};
//delete item
export const delete_item_action = (token, id) => async (dispatch) => {
  dispatch({ type: DELETE_ITEM_REQUEST });
  try {
    const { data } = await axios.delete(
      "https://tadartino.ma/api/item/delete-item",
      {
        headers: {
          token,
        },
        params: {
          id,
        },
      }
    );
    dispatch({ type: DELETE_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DELETE_ITEM_FAIL, payload: error.response });
  }
};
