import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import { sortInDocTable, switchToControlKnobs } from '../../../storybook';
import { RcTypography } from '../../Typography';
import { RcAlert } from '../Alert';

export default {
  title: '🚀 Cleanup Components/Alert',
  component: RcAlert,
  argTypes: {
    ...sortInDocTable<keyof AlertProps>([
      'severity',
      'size',
      'align',
      'children',
      'icon',
      'square',
    ]),
  },
} as Meta;

type AlertProps = ComponentProps<typeof RcAlert>;

export const Alert: Story<AlertProps> = ({ children, ...args }) => {
  switchToControlKnobs();
  return <RcAlert {...args}>{children}</RcAlert>;
};

Alert.args = {
  children: 'example1',
};

Alert.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/alert',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

export const AlertExamples: Story<AlertProps> = () => {
  switchToControlKnobs();
  return (
    <>
      <RcTypography color="neutral.f06" variant="headline1">
        info
      </RcTypography>
      <RcAlert severity="info">Example</RcAlert>
      <br />
      <RcTypography color="neutral.f06" variant="headline1">
        error
      </RcTypography>
      <RcAlert severity="error">Example</RcAlert>
      <br />
      <RcTypography color="neutral.f06" variant="headline1">
        success
      </RcTypography>
      <RcAlert severity="success">Example</RcAlert>
      <br />
      <RcTypography color="neutral.f06" variant="headline1">
        warning
      </RcTypography>
      <RcAlert severity="warning">Example</RcAlert>
      <br />
      <RcTypography color="neutral.f06" variant="headline1">
        With default Icon
      </RcTypography>
      <RcAlert icon>With default Icon</RcAlert>
    </>
  );
};
