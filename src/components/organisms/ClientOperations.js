// @flow
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import type { clientType } from '../../types/types';
import OperationButton from '../atoms/OperationButton';

type ClientOperationsPropTypes = {
  client: clientType,
  redirectTo: (path: string) => void
};

const editClient = id => console.log(`edit client: ${id}`);
const deleteClient = id => console.log(`delete client: ${id}`);
const billClient = id => console.log(`bill client: ${id}`);
const devisClient = id => console.log(`devis client: ${id}`);

const ClientOperations = ({ client, redirectTo }: ClientOperationsPropTypes) =>
  (<div className="pt-button-group">
    <OperationButton
      hint={<FormattedMessage id="label.view" />}
      icon="search"
      action={id => redirectTo(`/clients/${id}`)}
      id={client._id}
    />
    <OperationButton
      hint={<FormattedMessage id="label.edit" />}
      icon="edit"
      action={editClient}
      id={client._id}
    />
    <OperationButton
      hint={<FormattedMessage id="label.delete" />}
      icon="trash"
      action={deleteClient}
      id={client._id}
    />
    <OperationButton
      hint={<FormattedMessage id="message.makeBill" />}
      icon="saved"
      action={billClient}
      id={client._id}
    />
    <OperationButton
      hint={<FormattedMessage id="message.makeDevis" />}
      icon="document"
      action={devisClient}
      id={client._id}
    />
  </div>);

const mapDispatchToProps = dispatch => ({
  redirectTo(path) {
    dispatch(push(path));
  },
});

export default connect(null, mapDispatchToProps)(ClientOperations);
