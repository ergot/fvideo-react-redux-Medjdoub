import React from 'react'
import ReactDom from 'react-dom'
import {createStore, combineReducers } from 'redux'
import {Provider} from 'react-redux'

import App from './components/App'



const articlesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ARTICLE':
            action.payload.id = Date.now();
            return [...state, action.payload]
        case 'EDIT_ARTICLE':
            const articleId = action.payload.id;
            return state.map(article => {
                if(article.id !== articleId) {
                    return article
                }
                return action.payload
            })
        default:
            return state;
    }
};


const store = createStore(combineReducers({articles:articlesReducer}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDom.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))