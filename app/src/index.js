import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { store }  from './redux/store';
import * as Sentry from '@sentry/browser';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

if(process.env.NODE_ENV==='production'){
  Sentry.init({dsn: "https://747a35a1e33b43fb97c181cb0c4a8c7f@sentry.io/1823579"});
}

ReactDOM.render(
  <Provider store={store()}>
    <Router>
      <Route path="/:filter?" component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
