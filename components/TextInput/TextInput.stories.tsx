import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TextInput, TextInputProps  } from './TextInput';

export default {
  title: 'Example/TextInput',
  component: TextInput,
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'placeholder'
};

export const IsError = Template.bind({});
IsError.args = {
  placeholder: 'placeholder',
  isError: true
};
