import React from 'react';
import { Story, Meta } from '@storybook/react';

import { LabelAndTextareaInput, LabelAndTextareaInputProps  } from './LabelAndTextareaInput';

export default {
  title: 'Example/LabelAndTextareaInput',
  component: LabelAndTextareaInput,
} as Meta;

const Template: Story<LabelAndTextareaInputProps> = (args) => <LabelAndTextareaInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Your Detail'
};

export const IsError = Template.bind({});
IsError.args = {
  label: 'Your Detail',
  errorMessage: 'errorが発生しました'
};
