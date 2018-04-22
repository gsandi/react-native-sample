import {
    LOG_IN,
    LOG_OUT
} from '../actions/actionTypes';

const initialState = {
    isAuth: false,
    user: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOG_IN:
            return {
                ...state,
                isAuth: true,
                user: action.payload
            }
        case LOG_OUT:
            return {
                ...state,
                isAuth: false
            }
        default:
            return {
                ...state
            }
    }
};

export default reducer;