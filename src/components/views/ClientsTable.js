// @flow
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import ClientRow from '../organisms/ClientRow';
import type { clientType } from '../../types/types';

type ClientsTablePropTypes = {
  clients: clientType[]
};

export default function ClientsTable({ clients }: ClientsTablePropTypes) {
  return (
    <table className="pt-table pt-striped pt-interactive">
      <thead>
        <tr>
          <th>
            <FormattedMessage id="label.name" />
          </th>
          <th>
            <FormattedMessage id="label.codeTva" />
          </th>
          <th>
            <FormattedMessage id="label.address" />
          </th>
          <th>
            <FormattedMessage id="label.phoneNumber" />
          </th>
          <th>
            <FormattedMessage id="label.email" />
          </th>
          <th>
            <FormattedMessage id="label.operations" />
          </th>
        </tr>
      </thead>
      <tbody>
        {clients.map(client => <ClientRow key={client._id} client={client} />)}
      </tbody>
    </table>
  );
}
