import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Styles/css/style.css';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import store from './State/store';
import moment from 'moment';
import Moment from 'react-moment';

export const history = createBrowserHistory();

Moment.globalMoment = moment;
Moment.globalLocale = 'pl';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
