import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";

import {
  add_item_reducer,
  delete_item_reducer,
  get_all_items_reducer,
  get_item_reducer,
  get_latest_item_reducer,
  get_liked_item_reducer,
  get_user_items_reducer,
  like_item_reducer,
  search_item_reducer,
  search_items_reducer,
  update_item_reducer,
} from "./State/Reducers/ItemReducer";
import {
  add_payement_reducer,
  delete_payement_reducer,
  get_all_payements_reducer,
  get_payement_reducer,
  update_payement_reducer,
} from "./State/Reducers/PayementReducer";
import {
  add_request_reducer,
  delete_request_reducer,
  get_all_requests_reducer,
  get_request_reducer,
  update_request_reducer,
} from "./State/Reducers/RequestReducer";
import {
  add_sub_reducer,
  delete_sub_reducer,
  get_all_subs_reducer,
  get_sub_reducer,
  update_sub_reducer,
} from "./State/Reducers/SubReducer";
import {
  delete_user_reducer,
  get_personal_info_reducer,
  get_users_reducer,
  update_user_reducer,
} from "./State/Reducers/UserReducer";
import { registerReducer } from "./State/Reducers/UserReducer";
import { loginReducer } from "./State/Reducers/UserReducer";

const initialState = {
  user_info: {
    user: {},
  },
  user_register: {
    data: [],
  },
  personal_data: {
    data: [],
  },
  get_users: {
    data: [],
  },
  update_user: {
    data: [],
  },
  delete_user: {
    data: [],
  },
  //items
  get_all_items: {
    data: [],
  },
  get_item: {
    data: [],
  },
  get_user_items: {
    data: [],
  },
  get_latest_item: {
    data: [],
  },
  search_item: {
    data: [],
  },
  //to search for everything (included items )
  search_items: {
    data: [],
  },
  add_item: {
    data: [],
  },
  like_item: {
    data: [],
  },
  get_liked_items: {
    data: [],
  },
  update_item: {
    data: [],
  },
  delete_item: {
    data: [],
  },
  //payements
  get_all_payements: {
    data: [],
  },
  get_payement: {
    data: [],
  },
  add_payement: {
    data: [],
  },
  update_payement: {
    data: [],
  },
  delete_payement: {
    data: [],
  },
  //requests
  get_all_requests: {
    data: [],
  },
  get_request: {
    data: [],
  },
  add_request: {
    data: [],
  },
  update_request: {
    data: [],
  },
  delete_request: {
    data: [],
  },
  //subs
  get_all_subs: {
    data: [],
  },
  get_sub: {
    data: [],
  },
  add_sub: {
    data: [],
  },
  update_sub: {
    data: [],
  },
  delete_sub: {
    data: [],
  },
};

const reducer = combineReducers({
  //user
  user_info: loginReducer,
  user_register: registerReducer,
  personal_data: get_personal_info_reducer,
  get_users: get_users_reducer,
  update_user: update_user_reducer,
  delete_user: delete_user_reducer,
  //items
  get_all_items: get_all_items_reducer,
  get_item: get_item_reducer,
  get_user_items: get_user_items_reducer,
  get_latest_item: get_latest_item_reducer,
  search_item: search_item_reducer,
  //to search for everything (included items )
  search_items: search_items_reducer,
  add_item: add_item_reducer,
  like_item: like_item_reducer,
  get_liked_items: get_liked_item_reducer,
  update_item: update_item_reducer,
  delete_item: delete_item_reducer,
  //payements
  get_all_payements: get_all_payements_reducer,
  get_payement: get_payement_reducer,
  add_payement: add_payement_reducer,
  update_payement: update_payement_reducer,
  delete_payement: delete_payement_reducer,
  //requests
  get_all_requests: get_all_requests_reducer,
  get_request: get_request_reducer,
  add_request: add_request_reducer,
  update_request: update_request_reducer,
  delete_request: delete_request_reducer,
  //subs
  get_all_subs: get_all_subs_reducer,
  get_sub: get_sub_reducer,
  add_sub: add_sub_reducer,
  update_sub: update_sub_reducer,
  delete_sub: delete_sub_reducer,
});

const store = configureStore({ reducer, initialState }, applyMiddleware(thunk));

export default store;
