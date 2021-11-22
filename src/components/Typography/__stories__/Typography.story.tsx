import React, { ComponentProps, useEffect, useRef } from 'react';

import { Meta, Story } from '@storybook/react';

import { palette2, styled } from '../../../foundation';
import {
  notShowInDocTable,
  switchToControlKnobs,
  textPaletteChoice,
} from '../../../storybook';
import { RcTypography } from '../Typography';
import { MuiDefaultColor } from '../utils';

export default {
  title: '🚀 Cleanup Components/Typography',
  component: RcTypography,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: [...MuiDefaultColor, ...textPaletteChoice],
      },
    },
    ...notShowInDocTable<keyof TypographyProps>([
      'style',
      'className',
      'innerRef',
    ]),
  },
} as Meta;

type TypographyProps = ComponentProps<typeof RcTypography>;

const ShowForKnowButtonMargin = styled.div`
  background: ${palette2('neutral', 'f06')};
  color: ${palette2('neutral', 'f01')};
`;

export const Typography: Story<TypographyProps> = ({
  children,
  variant,
  ...args
}) => {
  switchToControlKnobs();
  const ref = useRef();

  useEffect(() => {
    console.log(ref);
  }, []);

  return (
    <>
      <br />
      <br />
      <div style={{ maxWidth: 800 }}>
        <RcTypography ref={ref} variant={variant} {...args}>
          Current variant: {variant}
          <br />
          {children}
        </RcTypography>
      </div>
      <ShowForKnowButtonMargin>
        <RcTypography
          align="center"
          display="block"
          title="this is useRcTooltip"
          useRcTooltip
        >
          Show for you know bottom margin, when you use props
        </RcTypography>
        <RcTypography align="center" color="highlight.f02" display="block">
          paragraph: 0.35em
        </RcTypography>
        <RcTypography align="center" color="highlight.f02" display="block">
          gutterBottom: 16px
        </RcTypography>
      </ShowForKnowButtonMargin>
    </>
  );
};

Typography.args = {
  children:
    'Typography component provides you can use Juno font style with our token, make all font in your app to be uniform',
};

Typography.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/typography/#typography',
    },
  ],
};
