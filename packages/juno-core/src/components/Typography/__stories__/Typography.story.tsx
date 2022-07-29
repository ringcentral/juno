import React, { ComponentProps, useEffect, useRef } from 'react';

import { palette2, RcTypography, styled } from '@ringcentral/juno';
import {
  notShowInDocTable,
  textPaletteChoice,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import { MuiDefaultColor } from '../utils';

export default {
  title: '🚀 Cleanup Components/Typography',
  component: RcTypography,
  argTypes: {
    color: {
      options: [...MuiDefaultColor, ...textPaletteChoice],
      control: {
        type: 'select',
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
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/master/commits/e65d3c10bdd9553b5d21220ebb6a1ed045ff5e09/files/8ffaf9bc-6939-4ef9-9bd1-6aa5b460e2ae/layers/2159857C-AD1D-4568-9D7C-CF31EC7D61DE',
    },
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/typography/#typography',
    },
  ],
};
