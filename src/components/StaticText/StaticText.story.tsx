import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';

import StaticText from './StaticText';

storiesOf('StaticText', module)
  .addDecorator(withKnobs)
  .addDecorator(storyFn => <div style={{ textAlign: 'center', margin: '20px', position: 'relative' }}>{storyFn()}</div>)
  .add('default', () => <StaticText {...object('text', { text: 'default' })} />)
  .add('with different theme', () => <StaticText text="Text with Different Theme" />);
