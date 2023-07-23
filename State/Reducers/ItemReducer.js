import {
  ADD_ITEM_FAIL,
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  DELETE_ITEM_FAIL,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  GET_ALL_ITEMS_FAIL,
  GET_ALL_ITEMS_REQUEST,
  GET_ALL_ITEMS_SUCCESS,
  GET_ITEM_FAIL,
  GET_ITEM_REQUEST,
  GET_ITEM_SUCCESS,
  GET_LATEST_ITEM_PER_TYPE_FAIL,
  GET_LATEST_ITEM_PER_TYPE_REQUEST,
  GET_LATEST_ITEM_PER_TYPE_SUCCESS,
  GET_LIKE_ITEM_FAIL,
  GET_LIKE_ITEM_REQUEST,
  GET_LIKE_ITEM_SUCCESS,
  GET_USER_ITEM_FAIL,
  GET_USER_ITEM_REQUEST,
  GET_USER_ITEM_SUCCESS,
  LIKE_ITEM_FAIL,
  LIKE_ITEM_REQUEST,
  LIKE_ITEM_SUCCESS,
  SEARCH_ITEMS_FAIL,
  SEARCH_ITEMS_REQUEST,
  SEARCH_ITEMS_SUCCESS,
  SEARCH_ITEM_FAIL,
  SEARCH_ITEM_REQUEST,
  SEARCH_ITEM_SUCCESS,
  UPDATE_ITEM_FAIL,
  UPDATE_ITEM_REQUEST,
  UPDATE_ITEM_SUCCESS,
} from "../Constants/ItemConstants";

//get all items
export const get_all_items_reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_ITEMS_REQUEST:
      return { loading: true };
    case GET_ALL_ITEMS_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_ALL_ITEMS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//get item
export const get_item_reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ITEM_REQUEST:
      return { loading: true };
    case GET_ITEM_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_ITEM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//get user items
export const get_user_items_reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_ITEM_REQUEST:
      return { loading: true };
    case GET_USER_ITEM_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_USER_ITEM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//get latest item per type
export const get_latest_item_reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_LATEST_ITEM_PER_TYPE_REQUEST:
      return { loading: true };
    case GET_LATEST_ITEM_PER_TYPE_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_LATEST_ITEM_PER_TYPE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//search item
export const search_item_reducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_ITEM_REQUEST:
      return { loading: true };
    case SEARCH_ITEM_SUCCESS:
      return { loading: false, data: action.payload };
    case SEARCH_ITEM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//search items
export const search_items_reducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_ITEMS_REQUEST:
      return { loading: true };
    case SEARCH_ITEMS_SUCCESS:
      return { loading: false, data: action.payload };
    case SEARCH_ITEMS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//add item
export const add_item_reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ITEM_REQUEST:
      return { loading: true };
    case ADD_ITEM_SUCCESS:
      return { loading: false, data: action.payload };
    case ADD_ITEM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//like item
export const like_item_reducer = (state = {}, action) => {
  switch (action.type) {
    case LIKE_ITEM_REQUEST:
      return { loading: true };
    case LIKE_ITEM_SUCCESS:
      return { loading: false, data: action.payload };
    case LIKE_ITEM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//get liked item
export const get_liked_item_reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_LIKE_ITEM_REQUEST:
      return { loading: true };
    case GET_LIKE_ITEM_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_LIKE_ITEM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//update item
export const update_item_reducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ITEM_REQUEST:
      return { loading: true };
    case UPDATE_ITEM_SUCCESS:
      return { loading: false, data: action.payload };
    case UPDATE_ITEM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//delete item
export const delete_item_reducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ITEM_REQUEST:
      return { loading: true };
    case DELETE_ITEM_SUCCESS:
      return { loading: false, data: action.payload };
    case DELETE_ITEM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
