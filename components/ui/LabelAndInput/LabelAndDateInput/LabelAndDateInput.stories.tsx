import React from 'react';
import { Story, Meta } from '@storybook/react';

import { LabelAndDateInput, LabelAndDateInputProps } from './LabelAndDateInput';

export default {
  title: 'Example/LabelAndDateInput',
} as Meta;

const Template: Story<LabelAndDateInputProps> = (args) => {
  return (
    <LabelAndDateInput {...args}>
      <LabelAndDateInput.SelectYear />
      <LabelAndDateInput.SelectMonth />
      <LabelAndDateInput.SelectDay />
    </LabelAndDateInput>
  )
}

export const Default = Template.bind({});
Default.args = {
  label: '誕生日'
};