import React, { FunctionComponent } from 'react';

import { Meta, Story } from '@storybook/react';

import { RcButtonProps } from '../../../components/Buttons';
import { RcText } from '../../../components/Text';
import { RcThemeInput } from '../theme.type';
import { RcThemeProvider } from '../ThemeProvider';
import { useThemeProps } from '../useThemeProps';

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