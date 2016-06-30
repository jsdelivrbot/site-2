import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'

import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import reducers from './reducers'
import getRoutes from './routes.js'

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    reducers,
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(browserHistory, store)

var root = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    {getRoutes(history)}
  </Provider>,
  root
)