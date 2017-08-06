// @flow
import React from 'react';

type CardPropTypes = {
  children: React$Element<*> | string,
  elevation?: string,
  interactive?: boolean
};

export default function Card({
  children,
  elevation = '0',
  interactive = false,
}: CardPropTypes) {
  return (
    <div
      className={`pt-card${elevation &&
        ` pt-elevation-${elevation}`}${interactive ? ' pt-interactive' : ''}`}
    >
      {children}
    </div>
  );
}
