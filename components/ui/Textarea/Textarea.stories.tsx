import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Textarea, TextareaProps  } from './Textarea';

export default {
  title: 'Example/Textarea',
  component: Textarea,
} as Meta;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'placeholder'
};

export const IsError = Template.bind({});
IsError.args = {
  placeholder: 'placeholder',
  isError: true
};
