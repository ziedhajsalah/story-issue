// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { IntlProvider } from 'react-intl';
import { flattenMessages } from '../utils/i18n/helpers';
import messages from '../utils/i18n/messages';
import Routes from '../routes';

type RootType = {
  store: {},
  history: {}
};

export default function Root({ store, history }: RootType) {
  const locale = store.getState().locale || 'fr-FR';
  return (
    <Provider store={store}>
      <IntlProvider
        locale={locale}
        messages={flattenMessages(messages[locale])}
      >
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </IntlProvider>
    </Provider>
  );
}
