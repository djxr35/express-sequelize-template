import { createStore, applyMiddleware, combineReducers } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
// or import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


import reducer from './reducer';
import reducer2 from './reducer2';


const reducer = combineReducers({
    reducer,
    reducer2,
})


export default store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(
        thunkMiddleware,
        loggingMiddleware
    ))
)

// export default store;