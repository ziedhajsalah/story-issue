import React from 'react';

type HintProptypes = {
  text: string | React$Element,
  color?: 'primary' | 'success' | 'warning' | 'danger',
  title?: string | React$Element,
  icon?: string
};

export default function Hint({ color, title, text, icon }: HintProptypes) {
  return (
    <div
      className={`pt-callout${icon ? ` pt-icon-${icon}` : ''}${color
        ? ` pt-intent-${color}`
        : ''}`}
    >
      {title &&
        <h5>
          {title}
        </h5>}
      {text}
    </div>
  );
}
