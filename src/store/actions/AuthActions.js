import {
    LOG_IN,
    LOG_OUT
} from './actionTypes';

export const userLogin = () => {
    return {
        type: LOG_IN,
        payload: true
    }
}

export const userLogout = () => {
    return {
        type: LOG_OUT,
        payload: false
    }
}