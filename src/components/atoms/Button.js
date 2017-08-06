// @flow
import React from 'react';

type ButtonPropTypes = {
  text: string,
  icon?: string,
  color?: string,
  size?: string,
  active?: boolean,
  fill?: boolean
};

export default function Button({
  text,
  icon,
  color,
  size,
  active,
  fill,
  ...props
}: ButtonPropTypes) {
  return (
    <button
      className={`pt-button${size ? ` pt-${size}` : ''}${icon
        ? ` pt-icon-${icon}`
        : ''}${color ? ` pt-intent-${color}` : ''}${active
        ? ' pt-active'
        : ''}${fill ? ' pt-fill' : ''}`}
      {...props}
    >
      {text}
    </button>
  );
}
