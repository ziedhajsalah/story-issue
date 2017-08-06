import React from 'react';
import R from 'ramda';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Button from '../components/atoms/Button';
import withColor from '../components/HOCs/withColor';
import withIcon from '../components/HOCs/withIcon';
import withSize from '../components/HOCs/withSize';
import withText from '../components/HOCs/withText';

storiesOf('Button/default', module)
  .add('basic usage', () => <Button text="my text" icon="menu" size="large" />)
  .add('disabled', () =>
    <Button onClick={action('clicked')} text="here" disabled />
  )
  .add('withIcon', () => {
    const ButtonAdd = withIcon('add')(Button);
    return <ButtonAdd text="Add" />;
  })
  .add('small', () => {
    const SmallButton = withSize('small')(Button);
    return <SmallButton text="small" />;
  })
  .add('small with icon', () => {
    const SmallButtonWithIcon = R.compose(withSize('small'), withIcon('trash'))(
      Button
    );
    return <SmallButtonWithIcon text="tiny" />;
  })
  .add('fill parent button', () => <Button fill text="filled" />)
  .add('fill parent button with icon', () => {
    const ButtonPerson = withIcon('person')(Button);
    return <ButtonPerson text="add user" fill />;
  })
  .add('with text', () => {
    const ButtonWithText = withText('text')(Button);
    return <ButtonWithText />;
  });

storiesOf('Button/success', module).add('large button', () => {
  const LargeGreenButton = R.compose(withSize('large'), withColor('success'))(
    Button
  );
  return <LargeGreenButton text="green" />;
});

storiesOf('Button/primary', module).add('large button', () => {
  const LargeBlueButton = R.compose(withSize('large'), withColor('primary'))(
    Button
  );
  return <LargeBlueButton text="blue like the sky" />;
});

storiesOf('Button/warning', module).add('large button', () => {
  const LargeOrangeButton = R.compose(withSize('large'), withColor('warning'))(
    Button
  );
  return <LargeOrangeButton text="Orange" />;
});

storiesOf('Button/danger', module).add('large button', () => {
  const LargeRedButton = R.compose(
    withIcon('trash'),
    withSize('large'),
    withColor('danger')
  )(Button);
  return <LargeRedButton text="red" />;
});

storiesOf('Button/active', module).add('large button', () => {
  const LargeRedButton = R.compose(
    withIcon('trash'),
    withSize('large'),
    withColor('danger')
  )(Button);
  return <LargeRedButton text="red" active />;
});

storiesOf('Button/allInOne', module).add('default', () => {
  const SmallButton = withSize('small')(Button);
  const LargeButton = withSize('large')(Button);
  const FilledButton = <Button fill text="filled" />;
  return (
    <div>
      <div>
        <SmallButton text="small" />
      </div>
      <div>
        <Button text="default size" />
      </div>
      <div>
        <LargeButton text="large" />
      </div>
      {FilledButton}
    </div>
  );
});
