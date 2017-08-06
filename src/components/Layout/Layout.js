import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Main = styled.div`
  transition: margin-left .5s;
  margin-left: ${props => (props.isOpen ? '250px' : '50px')};
`;

const Content = styled.div`padding: 20px;`;

class Layout extends Component {
  props: {
    children: React$Element
  };

  state = {
    sidebarOpened: true,
  };

  toggleSideBar = () =>
    this.setState(prevState => ({ sidebarOpened: !prevState.sidebarOpened }));

  render() {
    return (
      <div>
        <Sidebar isOpen={this.state.sidebarOpened} />
        <Main isOpen={this.state.sidebarOpened}>
          <Navbar toggleSideBar={this.toggleSideBar} />
          <Content>
            {this.props.children}
          </Content>
        </Main>
      </div>
    );
  }
}

export default Layout;
