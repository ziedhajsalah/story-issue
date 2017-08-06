import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import ProgressBar from '../components/atoms/ProgressBar';
import {
  withColorSuccess,
  withColorWarning,
  withColorDanger,
  withColorPrimary,
} from '../components/HOCs/withColor';

const GreenProgressBar = withColorSuccess(ProgressBar);
const BlueProgressBar = withColorPrimary(ProgressBar);
const OrangeProgressBar = withColorWarning(ProgressBar);
const RedProgressBar = withColorDanger(ProgressBar);

storiesOf('ProgressBar/default', module)
  .add('animated and stripped', () =>
    <div>
      <ProgressBar size={100} />
      <br />
      <ProgressBar size={75} />
      <br />
      <ProgressBar size={50} />
      <br />
      <ProgressBar size={25} />
    </div>
  )
  .add('unanimated and stripped', () =>
    <div>
      <ProgressBar size={100} unanimated />
      <br />
      <ProgressBar size={75} unanimated />
      <br />
      <ProgressBar size={50} unanimated />
      <br />
      <ProgressBar size={25} unanimated />
    </div>
  )
  .add('unstripped', () =>
    <div>
      <ProgressBar size={100} unstripped />
      <br />
      <ProgressBar size={75} unstripped />
      <br />
      <ProgressBar size={50} unstripped />
      <br />
      <ProgressBar size={25} unstripped />
    </div>
  );

storiesOf('ProgressBar/success', module)
  .add('animated and stripped', () =>
    <div>
      <GreenProgressBar size={100} />
      <br />
      <GreenProgressBar size={75} />
      <br />
      <GreenProgressBar size={50} />
      <br />
      <GreenProgressBar size={25} />
    </div>
  )
  .add('unanimated and stripped', () =>
    <div>
      <GreenProgressBar size={100} unanimated />
      <br />
      <GreenProgressBar size={75} unanimated />
      <br />
      <GreenProgressBar size={50} unanimated />
      <br />
      <GreenProgressBar size={25} unanimated />
    </div>
  )
  .add('unstripped', () =>
    <div>
      <GreenProgressBar size={100} unstripped />
      <br />
      <GreenProgressBar size={75} unstripped />
      <br />
      <GreenProgressBar size={50} unstripped />
      <br />
      <GreenProgressBar size={25} unstripped />
    </div>
  );

storiesOf('ProgressBar/primary', module)
  .add('animated and stripped', () =>
    <div>
      <BlueProgressBar size={100} />
      <br />
      <BlueProgressBar size={75} />
      <br />
      <BlueProgressBar size={50} />
      <br />
      <BlueProgressBar size={25} />
    </div>
  )
  .add('unanimated and stripped', () =>
    <div>
      <BlueProgressBar size={100} unanimated />
      <br />
      <BlueProgressBar size={75} unanimated />
      <br />
      <BlueProgressBar size={50} unanimated />
      <br />
      <BlueProgressBar size={25} unanimated />
    </div>
  )
  .add('unstripped', () =>
    <div>
      <BlueProgressBar size={100} unstripped />
      <br />
      <BlueProgressBar size={75} unstripped />
      <br />
      <BlueProgressBar size={50} unstripped />
      <br />
      <BlueProgressBar size={25} unstripped />
    </div>
  );

storiesOf('ProgressBar/warning', module)
  .add('animated and stripped', () =>
    <div>
      <OrangeProgressBar size={100} />
      <br />
      <OrangeProgressBar size={75} />
      <br />
      <OrangeProgressBar size={50} />
      <br />
      <OrangeProgressBar size={25} />
    </div>
  )
  .add('unanimated and stripped', () =>
    <div>
      <OrangeProgressBar size={100} unanimated />
      <br />
      <OrangeProgressBar size={75} unanimated />
      <br />
      <OrangeProgressBar size={50} unanimated />
      <br />
      <OrangeProgressBar size={25} unanimated />
    </div>
  )
  .add('unstripped', () =>
    <div>
      <OrangeProgressBar size={100} unstripped />
      <br />
      <OrangeProgressBar size={75} unstripped />
      <br />
      <OrangeProgressBar size={50} unstripped />
      <br />
      <OrangeProgressBar size={25} unstripped />
    </div>
  );

storiesOf('ProgressBar/danger', module)
  .add('animated and stripped', () =>
    <div>
      <RedProgressBar size={100} />
      <br />
      <RedProgressBar size={75} />
      <br />
      <RedProgressBar size={50} />
      <br />
      <RedProgressBar size={25} />
    </div>
  )
  .add('unanimated and stripped', () =>
    <div>
      <RedProgressBar size={100} unanimated />
      <br />
      <RedProgressBar size={75} unanimated />
      <br />
      <RedProgressBar size={50} unanimated />
      <br />
      <RedProgressBar size={25} unanimated />
    </div>
  )
  .add('unstripped', () =>
    <div>
      <RedProgressBar size={100} unstripped />
      <br />
      <RedProgressBar size={75} unstripped />
      <br />
      <RedProgressBar size={50} unstripped />
      <br />
      <RedProgressBar size={25} unstripped />
    </div>
  );
