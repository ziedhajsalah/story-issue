import React from 'react';
import { FormattedMessage } from 'react-intl';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { UlNav, ItemNav } from '../atoms/InnerNavbar';
import Card from '../atoms/Card';

const mapStateToProps = ({ clients }, ownProps) => ({
  client: clients.find(client => client._id === ownProps.match.params.id),
});

function ClientPage({ client }) {
  return (
    <div>
      <UlNav color="blue">
        <ItemNav align="left">
          <Link to="/clients">
            <FormattedMessage id="label.back" />
          </Link>
        </ItemNav>
        <ItemNav align="left">
          <span>
            {client ? client.name : 'none'}
          </span>
        </ItemNav>
        <ItemNav hover="green">
          <Link to="/clients">Edit</Link>
        </ItemNav>
        <ItemNav hover="green">
          <Link to="/clients">Delete</Link>
        </ItemNav>
      </UlNav>
      <Card elevation="2">
        <pre>
          {JSON.stringify(client, null, 2)}
        </pre>
      </Card>
    </div>
  );
}

export default withRouter(connect(mapStateToProps)(ClientPage));
