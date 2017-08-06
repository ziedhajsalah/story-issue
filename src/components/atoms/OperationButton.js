// @flow
import React from 'react';
import { Tooltip } from '@blueprintjs/core';

type OperationButtonPropTypes = {
  action: (id: string) => void,
  icon: string,
  id: string,
  hint: React$Element<*>
};

export default function OperationButton({
  action,
  icon,
  id,
  hint,
  ...props
}: OperationButtonPropTypes) {
  return (
    <Tooltip content={hint}>
      <button
        onClick={() => action(id)}
        className={`pt-button pt-icon-${icon}`}
        {...props}
      />
    </Tooltip>
  );
}
