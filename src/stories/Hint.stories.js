import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Hint from '../components/atoms/Hint';

storiesOf('Hint/success', module).add('with text only', () =>
  <Hint color="success" text="lorum ipsum dolor amet" />
);

storiesOf('Hint/danger', module).add('with icon', () =>
  <Hint color="danger" icon="info-sign" text="lorum ipsum dolor amet" />
);

storiesOf('Hint/warning', module).add('with icon', () =>
  <Hint color="warning" icon="info-sign" text="lorum ipsum dolor amet" />
);

storiesOf('Hint/primary', module).add('with icon and title', () =>
  <Hint
    color="primary"
    icon="info-sign"
    text="lorum ipsum dolor amet"
    title="title"
  />
);
