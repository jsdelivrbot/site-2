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

String.prototype.hashCode = () => {
  if(!this)
    return
  var hash = 0, i, chr, len;
  if (this.length === 0) return hash;
  for (i = 0, len = this.length; i < len; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

const root = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    {getRoutes(history)}
  </Provider>,
  root
)

