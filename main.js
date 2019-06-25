import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App.js';
// import AppSetState from './AppSetState.js';
// import AppFindDom from './AppFindDom.js';
// import AppLifeCycle from './AppLifeCycle.js';
// import AppRoute from './AppRoute.js';
//import {Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
//import {Home,About,Contact} from './AppRoute.js';
import todoApp1 from './reduxUsage/reducers/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppRedux from './AppRedux.jsx';
import AppAa from './animations/AppAa.jsx'
import AppELa from './animations/AppELa.jsx'

//ReactDOM.render(<App />, document.getElementById('app'));
//ReactDOM.render(<AppSetState />, document.getElementById('app'));
//ReactDOM.render(<AppFindDom />, document.getElementById('app'));
//ReactDOM.render(<AppLifeCycle />, document.getElementById('app'));

//setTimeout(() => {
//    ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);


//******* Router related */
   //  ReactDOM.render((
   //      <Router history={browserHistory}>
   //         <Route path="/" component = {AppRoute}>
   //            <IndexRoute component = {Home} />
   //            <Link to="/">Home</Link>
   //            <Link to="/about">About</Link>
   //            <Route path="/home" component = {Home} />
   //            <Route path="/about" component = {About} />
   //            <Route path="/contact" component = {Contact} />
   //         </Route>
   //      </Router>
   //   ), document.getElementById('app'));


//******* Redux related */
// function todo(state, action) {
//    switch (action.type) {
//       case ADD_TODO:
//          return {
//             id: action.id,
//             text: action.text,
//          };
//       default:
//          return state
//    }
// };

// function todos(state = [], action) {
//    switch (action.type) {
//       case ADD_TODO:
//          return [
//             ...state,
//             todo(undefined, action)
//          ];
//       default:
//          return state
//    }
// };

// let todoApp1 = combineReducers({
//    todos
// });

//export default todoApp1;

// let mystore = createStore(todoApp1);
// let rootElement = document.getElementById('app');


// ReactDOM.render( <Provider store = {mystore}>
//           <AppRedux></AppRedux>
//        </Provider>, rootElement);

//******* Animations related */
//ReactDOM.render(<AppAa/>, document.getElementById('app'));
ReactDOM.render(<AppELa/>, document.getElementById('app'));