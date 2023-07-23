import { ADD_PAYEMENT_FAIL, ADD_PAYEMENT_REQUEST, ADD_PAYEMENT_SUCCESS, DELETE_PAYEMENT_FAIL, DELETE_PAYEMENT_REQUEST, DELETE_PAYEMENT_SUCCESS, GET_ALL_PAYEMENTS_FAIL, GET_ALL_PAYEMENTS_REQUEST, GET_ALL_PAYEMENTS_SUCCESS, GET_PAYEMENT_FAIL, GET_PAYEMENT_REQUEST, GET_PAYEMENT_SUCCESS, UPDATE_PAYEMENT_FAIL, UPDATE_PAYEMENT_REQUEST, UPDATE_PAYEMENT_SUCCESS } from "../Constants/PayementConstants";


//get all payements
export const get_all_payements_reducer = (state={},action)=>{
    switch(action.type){
        case GET_ALL_PAYEMENTS_REQUEST:
            return {loading:true};
        case GET_ALL_PAYEMENTS_SUCCESS:
            return {loading:false,data:action.payload};
        case GET_ALL_PAYEMENTS_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

//get payement 
export const get_payement_reducer = (state={},action)=>{
    switch(action.type){
        case GET_PAYEMENT_REQUEST:
            return {loading:true};
        case GET_PAYEMENT_SUCCESS:
            return {loading:false,data:action.payload};
        case GET_PAYEMENT_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

//add payement
export const add_payement_reducer = (state={},action)=>{
    switch(action.type){
        case ADD_PAYEMENT_REQUEST:
            return {loading:true};
        case ADD_PAYEMENT_SUCCESS:
            return {loading:false,data:action.payload};
        case ADD_PAYEMENT_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

//update payement 
export const update_payement_reducer = (state={},action)=>{
    switch(action.type){
        case UPDATE_PAYEMENT_REQUEST:
            return {loading:true};
        case UPDATE_PAYEMENT_SUCCESS:
            return {loading:false,data:action.payload};
        case UPDATE_PAYEMENT_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

//delete payement 
export const delete_payement_reducer = (state={},action)=>{
    switch(action.type){
        case DELETE_PAYEMENT_REQUEST:
            return {loading:true};
        case DELETE_PAYEMENT_SUCCESS:
            return {loading:false,data:action.payload};
        case DELETE_PAYEMENT_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}