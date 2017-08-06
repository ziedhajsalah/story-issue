import React from 'react';

const withIcon = icon => Component => props =>
  <Component {...props} icon={icon} />;

export default withIcon;
