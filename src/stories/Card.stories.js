import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Card from '../components/atoms/Card';

storiesOf('Card', module)
  .add('default', () =>
    <Card>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Card>
  )
  .add('with elevation 0', () =>
    <Card elevation="0">
      legam noster esse quem ipsum velit tamen irure legam illum duis sunt quae
      amet irure esse esse export quem multos labore quem nulla sint nisi amet
      amet tamen dolore dolore
    </Card>
  )
  .add('with elevation 1', () =>
    <Card elevation="1">
      legam noster esse quem ipsum velit tamen irure legam illum duis sunt quae
      amet irure esse esse export quem multos labore quem nulla sint nisi amet
      amet tamen dolore dolore
    </Card>
  )
  .add('with elevation 2', () =>
    <Card elevation="2">
      legam noster esse quem ipsum velit tamen irure legam illum duis sunt quae
      amet irure esse esse export quem multos labore quem nulla sint nisi amet
      amet tamen dolore dolore
    </Card>
  )
  .add('with elevation 3', () =>
    <Card elevation="3">
      legam noster esse quem ipsum velit tamen irure legam illum duis sunt quae
      amet irure esse esse export quem multos labore quem nulla sint nisi amet
      amet tamen dolore dolore
    </Card>
  )
  .add('with elevation 4', () =>
    <Card elevation="4">
      legam noster esse quem ipsum velit tamen irure legam illum duis sunt quae
      amet irure esse esse export quem multos labore quem nulla sint nisi amet
      amet tamen dolore dolore
    </Card>
  )
  .add('interactive', () =>
    <Card interactive>
      <h5>Lorem</h5>
      <p>
        legam noster esse quem ipsum velit tamen irure legam illum duis sunt
        quae amet irure esse esse export quem multos labore quem nulla sint nisi
        amet amet tamen dolore dolore
      </p>
    </Card>
  )
  .add('interactive with skeleton', () =>
    <Card interactive skeleton>
      <h5 className="pt-skeleton">Lorem</h5>
      <p className="pt-skeleton">
        legam noster esse quem ipsum velit tamen irure legam illum duis sunt
        quae amet irure esse esse export quem multos labore quem nulla sint nisi
        amet amet tamen dolore dolore
      </p>
    </Card>
  );
