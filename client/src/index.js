
import React from 'react';
import ReactDOM from 'react-dom';
import App from './componets/App'
import reducers from './reducers';
import {Provider} from 'react-redux'
import { applyMiddleware, createStore } from 'redux';

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.querySelector('#root'));

