import React, { ComponentProps, FunctionComponent } from 'react';

import {
  RcButton,
  RcDefaultDarkTheme,
  RcIcon,
  RcThemeProvider,
  RcThemeSwitcherProvider,
  styled,
  useThemeSwitcher,
} from '@ringcentral/juno';
import { Add, DefaultFile, Phone } from '@ringcentral/juno-icon';
import {
  notShowInDocTable,
  paletteChoice,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Icon',
  component: RcIcon,
  argTypes: {
    color: {
      options: paletteChoice,
      control: {
        type: 'select',
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
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/master/commits/fdfe21d224a1083661c84a4ff73ab05d8677c51c/files/8ffaf9bc-6939-4ef9-9bd1-6aa5b460e2ae/layers/86290A52-4AC2-4996-A5A3-3F7F1ABB4CBA?mode=design&sha=fdfe21d224a1083661c84a4ff73ab05d8677c51c',
    },
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
          <RcThemeProvider>
            <ThemeSwitcher />
            <RcIcon symbol={DefaultFile} />
          </RcThemeProvider>
        </RcThemeSwitcherProvider>
      </li>
    </Wrapper>
  );
};
