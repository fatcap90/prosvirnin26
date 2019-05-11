import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom'
import history from './history'

import App from 'ui/app';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>
    , document.getElementById('root'));
