import React from 'react';
import { Story, Meta } from '@storybook/react';

import { DateDropdown, DateDropdownProps  } from './DateDropdown';

export default {
  title: 'Example/DateDropdown',
  component: DateDropdown,
} as Meta;

const Template: Story<DateDropdownProps> = (args) => {
  return (
    <DateDropdown {...args} />
  )
}

export const Default = Template.bind({});
Default.args = {
  startYear: 1900
};