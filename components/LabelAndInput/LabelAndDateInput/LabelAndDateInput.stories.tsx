import React from 'react';
import { Story, Meta } from '@storybook/react';

import { LabelAndDateInput, LabelAndDateInputProps  } from './LabelAndDateInput';

export default {
  title: 'Example/LabelAndDateInput',
  component: LabelAndDateInput,
} as Meta;

const Template: Story<LabelAndDateInputProps> = (args) => <LabelAndDateInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Your Birthday'
};

export const IsError = Template.bind({});
IsError.args = {
  label: 'Your Birthday',
};
