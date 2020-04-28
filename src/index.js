import * as serviceWorker from './serviceWorker';
import store from "./components/redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


ReactDOM.render(
    <BrowserRouter basename = {process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>, document.getElementById('root'));


serviceWorker.unregister();