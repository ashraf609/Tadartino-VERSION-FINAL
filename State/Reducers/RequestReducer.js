import { ADD_REQUEST_FAIL, ADD_REQUEST_REQUEST, ADD_REQUEST_SUCCESS, DELETE_REQUEST_FAIL, DELETE_REQUEST_REQUEST, DELETE_REQUEST_SUCCESS, GET_ALL_REQUESTS_FAIL, GET_ALL_REQUESTS_REQUEST, GET_ALL_REQUESTS_SUCCESS, GET_REQUEST_FAIL, GET_REQUEST_REQUEST, GET_REQUEST_SUCCESS, UPDATE_REQUEST_FAIL, UPDATE_REQUEST_REQUEST, UPDATE_REQUEST_SUCCESS } from "../Constants/RequestConstants";


//get all REQUESTs
export const get_all_requests_reducer = (state={},action)=>{
    switch(action.type){
        case GET_ALL_REQUESTS_REQUEST:
            return {loading:true};
        case GET_ALL_REQUESTS_SUCCESS:
            return {loading:false,data:action.payload};
        case GET_ALL_REQUESTS_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

//get REQUEST 
export const get_request_reducer = (state={},action)=>{
    switch(action.type){
        case GET_REQUEST_REQUEST:
            return {loading:true};
        case GET_REQUEST_SUCCESS:
            return {loading:false,data:action.payload};
        case GET_REQUEST_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

//add REQUEST
export const add_request_reducer = (state={},action)=>{
    switch(action.type){
        case ADD_REQUEST_REQUEST:
            return {loading:true};
        case ADD_REQUEST_SUCCESS:
            return {loading:false,data:action.payload};
        case ADD_REQUEST_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

//update REQUEST 
export const update_request_reducer = (state={},action)=>{
    switch(action.type){
        case UPDATE_REQUEST_REQUEST:
            return {loading:true};
        case UPDATE_REQUEST_SUCCESS:
            return {loading:false,data:action.payload};
        case UPDATE_REQUEST_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

//delete REQUEST 
export const delete_request_reducer = (state={},action)=>{
    switch(action.type){
        case DELETE_REQUEST_REQUEST:
            return {loading:true};
        case DELETE_REQUEST_SUCCESS:
            return {loading:false,data:action.payload};
        case DELETE_REQUEST_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}