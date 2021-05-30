import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Box } from '@chakra-ui/react'

import { Pagination, PaginationProps } from './Pagination';

export default {
  title: 'Example/Pagination',
  component: Pagination,
} as Meta;

const Template: Story<PaginationProps> = (args) => {
  return (
    <Box width='512px'>
      <Pagination {...args} />
    </Box>
  )
}

export const Default = Template.bind({});
Default.args = {
  previousTitle: 'previousTitle',
  nextTitle: 'nextTitle'
};