import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import "antd/dist/antd.css";

import App from './components/App';
import Store from './store'; 
import BlogList from './components/BlogList';
import BlogPage from './components/BlogPage';

ReactDOM.render(
    <Provider store={Store}>
        <HashRouter>
            <App >
                <Switch>
                    <Route exact path='/blog/:number' component={BlogPage}/>
                    <Route exact path='/' component={BlogList}/>
                </Switch>
            </App>
        </HashRouter>
    </Provider>
    , document.querySelector('#root'));