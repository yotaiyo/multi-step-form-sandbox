import React from 'react';
import { Story, Meta } from '@storybook/react';

import { LabelAndTextInput, LabelAndTextInputProps  } from './LabelAndTextInput';

export default {
  title: 'Example/LabelAndTextInput',
  component: LabelAndTextInput,
} as Meta;

const Template: Story<LabelAndTextInputProps> = (args) => <LabelAndTextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Your Name'
};

export const IsError = Template.bind({});
IsError.args = {
  label: 'Your Name',
  errorMessage: 'errorが発生しました'
};
