import React from 'react';

const withSize = size => Component => props =>
  <Component {...props} size={size} />;

export default withSize;

export const WithLargeSize = withSize('large');
export const WithSmallSize = withSize('small');
