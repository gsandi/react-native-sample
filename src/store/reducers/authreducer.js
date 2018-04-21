import {
    LOG_IN,
    LOG_OUT
} from '../actions/actionTypes';

const initialState = {
    isAuth: false
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOG_IN:
            return {
                ...state,
                isAuth: action.payload
            }
        case LOG_OUT:
            return {
                ...state,
                isAuth: action.payload
            }
        default:
            return {
                ...state
            }
    }
};

export default reducer;