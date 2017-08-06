import React from 'react';

const withColor = color => Component => props =>
  <Component {...props} color={color} />;

export default withColor;

export const withColorSuccess = withColor('success');
export const withColorPrimary = withColor('primary');
export const withColorWarning = withColor('warning');
export const withColorDanger = withColor('danger');
