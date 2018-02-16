import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import socket from '../socket';


// ACTION TYPES

const SOME_ACTION_TYPE = 'SOME_ACTION_TYPE';


// ACTION CREATORS

export function someActionCreator(channels) {
    const action = { type: SOME_ACTION_TYPE, channels };
    return action;
}


// THUNK CREATORS


export function postChannel(channel, ownProps) {

    return function thunk(dispatch) {
        return axios.post('/api/channels', channel)
            .then(res => res.data)
            .then(newChannel => {
                const action = getChannel(newChannel);
                dispatch(action);
                socket.emit('new-channel', newChannel);
                ownProps.history.push(`/channels/${newChannel.name}`)
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
                item: [...state.item, action.item]

            };

        default:
            return state;
    }
}

// INITIAL STATE

const someInitialState = {
    someItem: [], // or something else
};