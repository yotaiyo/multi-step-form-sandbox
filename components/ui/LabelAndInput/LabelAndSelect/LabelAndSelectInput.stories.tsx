import React from 'react';
import { Story, Meta } from '@storybook/react';

import { LabelAndSelectInput, LabelAndSelectInputProps  } from './LabelAndSelectInput';

export default {
  title: 'Example/LabelAndSelectInput',
  component: LabelAndSelectInput,
} as Meta;

const Template: Story<LabelAndSelectInputProps> = (args) => {
  return (
    <LabelAndSelectInput {...args}>
      <option>option1</option>
      <option>option2</option>
      <option>option3</option>
    </LabelAndSelectInput>
  )
}

export const Default = Template.bind({});
Default.args = {
  label: 'Select options'
};
