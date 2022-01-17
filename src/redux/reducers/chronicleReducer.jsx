import * as types from "./../actionType.jsx";

const initialState = {
    chronicles: [],
    chronicle: {},
    loading: false
}

const chronicleReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_DATA:
            return {
                ...state,
                chronicles: action.payload,
                loading: false
            }
        case types.DELETE_DATA:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}
export default chronicleReducer;