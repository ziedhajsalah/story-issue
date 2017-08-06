import React from 'react';
import { render } from 'react-dom';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import ar from 'react-intl/locale-data/ar';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import './app.css';

addLocaleData([...en, ...fr, ...ar]);

const store = configureStore();

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
