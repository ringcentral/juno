import { Meta, Story } from '@storybook/react';
import React, { ComponentProps, FunctionComponent } from 'react';

import {
  styled,
  RcDefaultDarkTheme,
  useThemeSwitcher,
  RcThemeSwitcherProvider,
  RcSubThemeProvider,
} from '../../../foundation';
import Add from '../../../icon/Add';
import Phone from '../../../icon/Phone';
import {
  notShowInDocTable,
  paletteChoice,
  switchToControlKnobs,
} from '../../../storybook';
import { RcIcon } from '../Icon';
import { DefaultFile } from '../../../icon';
import { RcButton } from '../../Buttons';

export default {
  title: '🚀 Cleanup Components/Icon',
  component: RcIcon,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: paletteChoice,
      },
    },
  },
} as Meta;

type IconProps = ComponentProps<typeof RcIcon>;

export const Icon: Story<IconProps> = ({ children, ...args }) => {
  switchToControlKnobs();

  return <RcIcon {...args} />;
};

Icon.parameters = {
  tags: [
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

Icon.args = {
  symbol: Add,
};

Icon.argTypes = {
  ...notShowInDocTable<keyof IconProps>([
    'useLoading',
    'loadingSize',
    'icon',
    'iconColor',
    'iconSize',
    'desc',
  ]),
};

const Wrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    list-style: none;
    display: flex;
    > * + * {
      margin-left: 1em;
    }
  }

  li + li {
    margin-top: 1em;
  }
`;

export const IconWithSymbol: Story<IconProps> = () => {
  switchToControlKnobs();

  return (
    <Wrapper>
      <li>
        <RcIcon symbol={Add} />
        <RcIcon symbol={Phone} />
      </li>
    </Wrapper>
  );
};

export const IconWithCustomColor: Story<IconProps> = () => {
  switchToControlKnobs();

  return (
    <Wrapper>
      <li>
        <RcIcon color="danger.b03" symbol={Add} />
        <RcIcon color="success.b03" symbol={Add} />
        <RcIcon color="highlight.b03" symbol={Add} />
        <RcIcon color="informative.b01" symbol={Add} />
      </li>
    </Wrapper>
  );
};

export const IconWithCustomSize: Story<IconProps> = () => {
  switchToControlKnobs();

  return (
    <Wrapper>
      <li>
        <RcIcon symbol={Add} size="xsmall" />
        <RcIcon symbol={Add} size="small" />
        <RcIcon symbol={Add} size="medium" />
        <RcIcon symbol={Add} size="large" />
        <RcIcon symbol={Add} size="xlarge" />
        <RcIcon symbol={Add} size="xxlarge" />
        <RcIcon symbol={Add} size="xxxlarge" />
      </li>
    </Wrapper>
  );
};

const ThemeSwitcher: FunctionComponent<{}> = () => {
  const { setTheme, themeMap = {} } = useThemeSwitcher();

  return (
    <>
      {Object.keys(themeMap).map((value) => (
        <RcButton
          key={value}
          onClick={() => {
            if (setTheme) {
              setTheme(value);
            }
          }}
        >
          {value}
        </RcButton>
      ))}
    </>
  );
};

export const IconWithDarkTheme: Story<IconProps> = () => {
  switchToControlKnobs();
  const themeMap = {
    light: {},
    dark: RcDefaultDarkTheme,
  };

  return (
    <Wrapper>
      <li>
        <RcThemeSwitcherProvider defaultTheme="light" themeMap={themeMap}>
          <RcSubThemeProvider>
            <ThemeSwitcher />
            <RcIcon symbol={DefaultFile} />
          </RcSubThemeProvider>
        </RcThemeSwitcherProvider>
      </li>
    </Wrapper>
  );
};
