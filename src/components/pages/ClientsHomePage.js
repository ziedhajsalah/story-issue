// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import ClientPage from './ClientPage';
import ClientsPage from './ClientsPage';
import ClientAddPage from './ClientAddPage';
import { fetchClients, addClient } from '../../actions';
import type { clientType } from '../../types/types';

type ClientsHomePagePropTypes = {
  clients: clientType[],
  fetchClients: () => void,
  addClient: () => void
};

class ClientsHomePage extends Component<void, ClientsHomePagePropTypes, void> {
  componentWillMount() {
    this.props.fetchClients();
  }
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/clients"
            render={() => <ClientsPage clients={this.props.clients} />}
          />
          <Route
            exact
            path="/clients/add"
            render={() =>
              (<ClientAddPage
                addClient={this.props.addClient}
                indicators={this.props.indicators.clients}
              />)}
          />
          <Route
            path="/clients/:id"
            render={() => <ClientPage clients={this.props.clients} />}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ clients, indicators }) => ({ clients, indicators });

const mapDispatchToProps = dispatch => ({
  fetchClients() {
    dispatch(fetchClients());
  },
  addClient(data) {
    dispatch(addClient(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientsHomePage);
