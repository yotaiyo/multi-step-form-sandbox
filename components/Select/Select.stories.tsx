import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Select, SelectProps  } from './Select';

export default {
  title: 'Example/Select',
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => {
  return (
    <Select {...args}>
      <option>option1</option>
      <option>option2</option>
      <option>option3</option>
    </Select>
  )
}

export const Default = Template.bind({});
Default.args = {};