/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './components/App';
import HomePage from './components/pages/HomePage';
import ClientsHomePage from './components/pages/ClientsHomePage';

export default () =>
  (<App>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/clients" component={ClientsHomePage} />
    </Switch>
  </App>);
