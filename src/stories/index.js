import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Button from '../app/components/atoms/Button';
import Hint from '../app/components/atoms/Hint';
import { UlNav, ItemNav } from '../app/components/atoms/InnerNavbar';

storiesOf('UlNav', module).add('test', () =>
  (<UlNav>
    <ItemNav>here</ItemNav>
  </UlNav>),
);

storiesOf('Hint', module).add('with text', () =>
  <Hint color="success" text="alert" />,
);

storiesOf('Button', module).add('with text', () =>
  <Button onClick={action('clicked')} color="success" text="here" />,
);
