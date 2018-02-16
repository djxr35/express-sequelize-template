import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import socket from '../socket';


// ACTION TYPES

const SOME_ACTION_TYPE = 'SOME_ACTION_TYPE';


// ACTION CREATORS

export function someActionCreator(something) {
    const action = { type: SOME_ACTION_TYPE, something };
    return action;
}


// THUNK CREATORS


export function postSomething(something, ownProps) {

    return function thunk(dispatch) {
        return axios.post('/api/somethings', something)
            .then(res => res.data)
            .then(newSomething => {
                const action = getChannel(newSomething);
                dispatch(action);
                socket.emit('new-channel', newSomething);
                ownProps.history.push(`/channels/${newSomething.id}`)
            });
    }
}

export function fetchSomething() {
    return function thunk(dispatch) {
        return axios.get('/api/.....') // have ... match the server side
            .then(res => res.data)
            .then(someItem => {
                const action = someActionCreator(someItem);
                dispatch(action);
            });
    }
}

// REDUCER

export default function reducer(state = {
        someInitialState = [] //or '',
        //  can have multiple items in original object
    },
    action) {

    switch (action.type) {

        case SOME_ACTION_TYPE:
            return {
                ...state, //spread operator
                // item: action.item
                item: [...state.item, action.something]

            };

        default:
            return state;
    }
}

// INITIAL STATE

const someInitialState = {
    someItem: [], // or something else
};