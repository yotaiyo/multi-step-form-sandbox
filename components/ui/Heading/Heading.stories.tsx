import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Heading, HeadingProps } from './Heading';

export default {
  title: 'Example/Heading',
  component: Heading,
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args}>Title</Heading>;

export const ScreenTitle = Template.bind({});
ScreenTitle.args = {
  variant: 'screenTitle'
};

export const SectionTitle = Template.bind({});
SectionTitle.args = {
  variant: 'sectionTitle'
};

export const BlockTitle = Template.bind({});
BlockTitle.args = {
  variant: 'blockTitle'
};

export const SubBlockTitle = Template.bind({});
SubBlockTitle.args = {
  variant: 'subBlockTitle'
};

