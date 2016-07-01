import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, applyMiddleware } from 'redux'
import createStore from './reducers/createStore'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import reducers from './reducers'
import getRoutes from './routes.js'

// Add the reducer to your store on the `routing` key
const initialState = window.___INITIAL_STATE__
const store = createStore(initialState, browserHistory)
const history = syncHistoryWithStore(browserHistory, store)


var root = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    {getRoutes(history)}
  </Provider>,
  root
)