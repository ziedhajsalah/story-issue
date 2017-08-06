// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import ClientsTable from '../views/ClientsTable';
import type { clientType } from '../../types/types';
import { UlNav, ItemNav } from '../atoms/InnerNavbar';

type ClientsPagePropTypes = {
  clients: clientType[]
};

class ClientsPage extends Component<void, ClientsPagePropTypes, void> {
  render() {
    return (
      <div>
        <UlNav color="blue">
          <ItemNav align="left">
            <FormattedMessage id="label.clients" />
          </ItemNav>
          <ItemNav hover="green">
            <Link to="/clients/add">
              <FormattedMessage id="label.add" />
            </Link>
          </ItemNav>
        </UlNav>
        <ClientsTable clients={this.props.clients} />
      </div>
    );
  }
}

export default ClientsPage;
