// @flow
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>
          <FormattedMessage id="label.home" />
        </h2>
      </div>
    );
  }
}
