/* eslint-disable import/no-duplicates */
/* eslint-disable spaced-comment */
/* eslint-disable camelcase */
import { applyMiddleware, combineReducers, compose, createStore } from "redux";

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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
