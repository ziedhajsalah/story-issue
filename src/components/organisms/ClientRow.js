// @flow
import React from 'react';
import type { clientType } from '../../types/types';
import ClientOperations from './ClientOperations';

type ClientRowPropTypes = {
  client: clientType
};

const ClientRow = ({ client }: ClientRowPropTypes) =>
  (<tr>
    <td>
      {client.name}
    </td>
    <td>
      {client.codeTVA}
    </td>
    <td>
      {client.address}
    </td>
    <td>
      {client.phone}
    </td>
    <td>
      {client.email}
    </td>
    <td>
      <ClientOperations client={client} />
    </td>
  </tr>);

export default ClientRow;
