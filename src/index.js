import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'
import store from './redux/configureStore'
import {
    Router as Router,
    Route,
    Link,
} from 'react-router-dom';
import history from "./lib/history";
import flexible from "./lib/flexible";

import App from './containers/App.jsx';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'));