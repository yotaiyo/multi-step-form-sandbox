import React from 'react';
import { Story, Meta } from '@storybook/react';

import { LabelAndNumberInput, LabelAndNumberInputProps  } from './LabelAndNumberInput';

export default {
  title: 'Example/LabelAndNumberInput',
  component: LabelAndNumberInput,
} as Meta;

const Template: Story<LabelAndNumberInputProps> = (args) => <LabelAndNumberInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Your Age',
  defaultValue: 20,
  min: 0,
  max: 150,
  step: 1
};

export const IsError = Template.bind({});
IsError.args = {
  label: 'Your Age',
  defaultValue: 20,
  min: 0,
  max: 150,
  step: 1,
  errorMessage: 'errorが発生しました'
};
