import React from 'react';

type ProgressBarProptypes = {
  color?: string,
  size?: number,
  unanimated?: boolean,
  unstripped?: boolean
};

export default function ProgressBar({
  color,
  size,
  unanimated = false,
  unstripped = false,
}: ProgressBarProptypes) {
  return (
    <div
      className={`pt-progress-bar${color
        ? ` pt-intent-${color}`
        : ''}${unanimated ? ' pt-no-animation' : ''}${unstripped
        ? ' pt-no-stripes'
        : ''}`}
    >
      <div className="pt-progress-meter" style={{ width: `${size}%` }} />
    </div>
  );
}
