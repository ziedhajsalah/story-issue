import React from 'react';
import { UlNav, ItemNav } from '../atoms/InnerNavbar';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import ClientAddForm from '../organisms/ClientAddForm';

export default function ClientAddPage({ addClient, indicators }) {
  return (
    <div>
      <UlNav>
        <ItemNav align="left">
          <Link to="/clients">
            <FormattedMessage id="label.back" />
          </Link>
        </ItemNav>
        <ItemNav>
          <Link to="/clients/add">
            <FormattedMessage id="label.add" />
          </Link>
        </ItemNav>
      </UlNav>
      <h2>Add client</h2>
      <ClientAddForm addClient={addClient} indicators={indicators} />
    </div>
  );
}
