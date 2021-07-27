import { Meta, Story } from '@storybook/react/types-6-0';
import React, { FunctionComponent } from 'react';

import { RcButtonProps, RcText } from '../../components';
import { RcThemeInput, RcThemeProvider, useThemeProps } from '../theme';

export default {
  title: '🔧 Foundation/Hooks/useThemeProps',
  argTypes: {},
} as Meta;

const RcButtonExample: FunctionComponent<RcButtonProps> = (inProps) => {
  const props = useThemeProps({ props: inProps, name: 'RcButton' });
  console.log(props);
  const { loading } = props;

  return <RcText>loading: {`${loading}`}</RcText>;
};

RcButtonExample.defaultProps = {
  size: 'large',
};

export const useThemePropsExample: Story<{}> = () => {
  const theme: RcThemeInput = {
    props: {
      RcButton: {
        loading: true,
      },
    },
  };

  return (
    <>
      <RcText highlight>Origin: </RcText>
      <RcButtonExample />

      <RcText highlight>Custom Component Theme: </RcText>
      <RcThemeProvider theme={theme}>
        <RcButtonExample />
      </RcThemeProvider>
    </>
  );
};

useThemePropsExample.args = {};
useThemePropsExample.storyName = 'useThemeProps';
