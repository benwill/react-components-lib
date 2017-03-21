import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

// Components
import { Button } from '../index';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Example 1</Button>
  ))
  .add('another example', () => (
    <div>
      <Button onClick={action('clicked')}>Hello Button</Button>
    </div>
  ))
