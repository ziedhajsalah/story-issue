import React from 'react';

const withText = text => Component => props =>
  <Component {...props} text={text} />;

export default withText;
