import {
    createStore,
    combineReducers
} from 'redux';

import authReducer from './reducers/authreducer';

/**
 * @param { authReducer }
 * @name rootReducer
 * @description 
 *      Can easily later add more reducers and functionality to application beyond scope.
 *      declare a reducer type and assign the imported reducer. All will be combined into
 *      the same store
 */
const rootReducer = combineReducers({
    auth: authReducer
});

/**
 * @param { }
 * @name configureStore
 * @description 
 *      Creates a Redux store that holds the complete state tree of the application.
 *      There should only be a single store within any given application
 */
const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;