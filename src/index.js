import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from './reducer/reducer'
import {Provider} from 'react-redux'
import {BrowserRouter as router}from 'react-router-dom'

import 'bulma/css/bulma.css';
import './styles.scss';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <router>
            
            <App />

        </router>
    </Provider>
    , 
    
    rootElement);
