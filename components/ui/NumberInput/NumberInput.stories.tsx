import React from 'react';
import { Story, Meta } from '@storybook/react';

import { NumberInput, NumberInputProps  } from './NumberInput';

export default {
  title: 'Example/NumberInput',
  component: NumberInput,
} as Meta;

const Template: Story<NumberInputProps> = (args) => <NumberInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultValue: 10,
  min: 10,
  max: 100,
  step: 5,
};

export const IsError = Template.bind({});
IsError.args = {
  defaultValue: 10,
  min: 10,
  max: 100,
  step: 5,
  isError: true
};
