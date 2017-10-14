import React from 'react'
import ReactDom from 'react-dom'
import {createStore, combineReducers } from 'redux'

import App from './components/App'



const articlesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ARTICLE':
            console.log('')
            action.payload.id = Date.now();
            return [...state, action.payload]
        default:
            return state;
    }
};


const store = createStore(combineReducers({articles:articlesReducer}));

ReactDom.render(<App />, document.getElementById('root'))