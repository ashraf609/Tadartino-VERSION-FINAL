import { ADD_SUB_FAIL, ADD_SUB_REQUEST, ADD_SUB_SUCCESS, DELETE_SUB_FAIL, DELETE_SUB_REQUEST, DELETE_SUB_SUCCESS, GET_ALL_SUBS_FAIL, GET_ALL_SUBS_REQUEST, GET_ALL_SUBS_SUCCESS, GET_SUB_FAIL, GET_SUB_REQUEST, GET_SUB_SUCCESS, UPDATE_SUB_FAIL, UPDATE_SUB_REQUEST, UPDATE_SUB_SUCCESS } from "../Constants/SubConstants";


//get all SUBs
export const get_all_subs_reducer = (state={},action)=>{
    switch(action.type){
        case GET_ALL_SUBS_REQUEST:
            return {loading:true};
        case GET_ALL_SUBS_SUCCESS:
            return {loading:false,data:action.payload};
        case GET_ALL_SUBS_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

//get SUB 
export const get_sub_reducer = (state={},action)=>{
    switch(action.type){
        case GET_SUB_REQUEST:
            return {loading:true};
        case GET_SUB_SUCCESS:
            return {loading:false,data:action.payload};
        case GET_SUB_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

//add SUB
export const add_sub_reducer = (state={},action)=>{
    switch(action.type){
        case ADD_SUB_REQUEST:
            return {loading:true};
        case ADD_SUB_SUCCESS:
            return {loading:false,data:action.payload};
        case ADD_SUB_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

//update SUB 
export const update_sub_reducer = (state={},action)=>{
    switch(action.type){
        case UPDATE_SUB_REQUEST:
            return {loading:true};
        case UPDATE_SUB_SUCCESS:
            return {loading:false,data:action.payload};
        case UPDATE_SUB_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

//delete SUB 
export const delete_sub_reducer = (state={},action)=>{
    switch(action.type){
        case DELETE_SUB_REQUEST:
            return {loading:true};
        case DELETE_SUB_SUCCESS:
            return {loading:false,data:action.payload};
        case DELETE_SUB_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}