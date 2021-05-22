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
};

export const IsError = Template.bind({});
IsError.args = {
  isError: true
};
