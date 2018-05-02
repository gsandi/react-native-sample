import {
    LOG_IN,
    LOG_OUT
} from '../actions/actionTypes';


/**
 * @param { }
 * @name initialState
 * @description 
 *      Set initial state object
 */
const initialState = {
    isAuth: false,
    user: []
};

/**
 * @param { }
 * @name reducer
 * @description 
 *      Switch statement to manage global state modifications
 *      Declare an action type and write a case for it below.
 *      This allows for state to be accessed to all containers
 *      within the application without declaring multiple props
 *      between components and containers.
 */
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