import React from 'react';
import { Router, Route, browserHistory,IndexRoute } from 'react-router'
import { ReduxRouter } from 'redux-router'
import Main from './container/main.jsx'
import App from './container/app.jsx'
import Home from './container/home.jsx'
import Blogs from './container/blogs.jsx'
import About from './container/about.jsx'


import Admin from './container/admin.jsx'


export default function(history,store){

   return (<Router history={history}>
            <Route path="/" component={App}>
              <IndexRoute component={Main} />
              <Route path="/blogs" component={Blogs} />
              <Route path="/about" component={About} />
            </Route>
             <Route path="/admin">
                  <IndexRoute component={Admin} />
             </Route>
          </Router>
    )
}