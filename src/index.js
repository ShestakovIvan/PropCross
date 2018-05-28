import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import App from './app';
import InitialState from './components/Search';
import ResultsList from './components/Results';
import Navbar from './components/Navbar';
import history from './history';
import { Router, BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'react-router-redux';
import './css/mainPage.css';
import './css/favorites-button.css';
import './css/faves.css';
import './css/results.css';
import './css/property.css';
import './css/error.css';

render(
  <Provider store={store}>
    <Router history={history}>
    <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
</Provider>,
  document.getElementById('app')
);

module.hot.accept();

