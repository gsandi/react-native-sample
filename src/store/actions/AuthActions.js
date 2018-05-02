import {
    LOG_IN,
    LOG_OUT
} from './actionTypes';

/**
 * @param { }
 * @name userLogin
 * @description 
 *      Send payload to store to modify state for application to detext if the user logged in
 */
export const userLogin = (user) => {
    return {
        type: LOG_IN,
        payload: user
    }
}

/**
 * @param { }
 * @name userLogout
 * @description 
 *      Send payload to store to modify state for application to detext if the user logged out
 */
export const userLogout = () => {
    return {
        type: LOG_OUT,
        payload: []
    }
}