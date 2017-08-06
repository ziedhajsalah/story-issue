import React from 'react';
import styled from 'styled-components';
import SidebarContent from './SidebarContent';

const Sidenav = styled.div`
  height: 100%; /* 100% Full-height */
  width: ${props => (props.isOpen ? '250px' : '50px')};
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  background-color: #c0d9da;
  top: 0;
  left: 0;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: ${props => (props.isOpen ? '5px' : '60px')};
  transition: 0.5s;
`;

type SidebarProps = {
  isOpen: boolean
};

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <Sidenav isOpen={isOpen}>
      {isOpen && 'compta'}
      <SidebarContent isOpen={isOpen} />
    </Sidenav>
  );
}
