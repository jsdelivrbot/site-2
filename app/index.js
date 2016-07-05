import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, applyMiddleware } from 'redux'
import createStore from './createStore'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import getRoutes from './routes.js'
require('es6-promise').polyfill();
require('isomorphic-fetch');
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