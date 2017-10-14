import React from 'react'
import ReactDom from 'react-dom'
import {createStore, combineReducers } from 'redux'

import App from './components/App'

const store = createStore();

ReactDom.render(<App />, document.getElementById('root'))