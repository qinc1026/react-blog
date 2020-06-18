import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import "antd/dist/antd.css";

import App from './components/App';
import Store from './store'; 

ReactDOM.render(
    <Provider store={Store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
    , document.querySelector('#root'));