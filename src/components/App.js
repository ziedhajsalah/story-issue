// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import Layout from './Layout/Layout';

export default class App extends Component {
  props: {
    children: Children
  };

  render() {
    return (
      <Layout>
        {this.props.children}
      </Layout>
    );
  }
}
