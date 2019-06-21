import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import AppSetState from './AppSetState.js';
import AppFindDom from './AppFindDom.js';
import AppLifeCycle from './AppLifeCycle.js';

//ReactDOM.render(<App />, document.getElementById('app'));
//ReactDOM.render(<AppSetState />, document.getElementById('app'));
//ReactDOM.render(<AppFindDom />, document.getElementById('app'));
ReactDOM.render(<AppLifeCycle />, document.getElementById('app'));

setTimeout(() => {
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);