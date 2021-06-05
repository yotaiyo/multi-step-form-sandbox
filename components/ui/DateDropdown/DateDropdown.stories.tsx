import React from 'react';
import { Story, Meta } from '@storybook/react';

import { DateDropdown } from './DateDropdown';

export default {
  title: 'Example/DateDropdown',
} as Meta;

const Template: Story = () => {
  return (
    <DateDropdown.Wrapper>
      <DateDropdown.SelectYear />
      <DateDropdown.SelectMonth />
      <DateDropdown.SelectDay />
    </DateDropdown.Wrapper>
  )
}

export const Default = Template.bind({});
Default.args = {};