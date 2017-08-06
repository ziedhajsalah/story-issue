import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { UlNav, ItemNav } from '../components/atoms/InnerNavbar';

storiesOf('UlNav', module)
  .add('basic', () =>
    <UlNav>
      <ItemNav>
        <span>
          <a>Go</a>
        </span>
      </ItemNav>
    </UlNav>
  )
  .add('left and right', () =>
    <UlNav>
      <ItemNav>
        <span>
          <a>Logout</a>
        </span>
      </ItemNav>
      <ItemNav align="left">
        <span>
          <a href="/home">Home</a>
        </span>
      </ItemNav>
    </UlNav>
  );
