import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import AppSetState from './AppSetState.js';
import AppFindDom from './AppFindDom.js';
import AppLifeCycle from './AppLifeCycle.js';
import AppRoute from './AppRoute.js';
import {Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import {Home,About,Contact} from './AppRoute.js';

//ReactDOM.render(<App />, document.getElementById('app'));
//ReactDOM.render(<AppSetState />, document.getElementById('app'));
//ReactDOM.render(<AppFindDom />, document.getElementById('app'));
//ReactDOM.render(<AppLifeCycle />, document.getElementById('app'));

//setTimeout(() => {
//    ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);



    ReactDOM.render((
        <Router history={browserHistory}>
           <Route path="/" component = {AppRoute}>
              <IndexRoute component = {Home} />
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Route path="/home" component = {Home} />
              <Route path="/about" component = {About} />
              <Route path="/contact" component = {Contact} />
           </Route>
        </Router>
     ), document.getElementById('app'));