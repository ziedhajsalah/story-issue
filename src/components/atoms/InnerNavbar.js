import styled from 'styled-components';

export const UlNav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${props => (props.color ? props.color : '#333')};
`;

export const ItemNav = styled.li`
  float: ${props => (props.align === 'left' ? 'left' : 'right')};
  span {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  a > span:hover {
    background-color: ${props => (props.hover ? props.hover : '#111')};
  }
`;
