import React, { ComponentProps } from 'react';

import { RcAlert, RcTypography } from '@ringcentral/juno';
import {
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

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
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/master/commits/61ef0d5dc04f09a714f4f7f383738f95e0826a16/files/8ffaf9bc-6939-4ef9-9bd1-6aa5b460e2ae/layers/EB8B3A28-2DC3-4DF5-995B-ED6A5E999F2B',
    },
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
