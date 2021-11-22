import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import { RcPaletteProp } from '../../../../foundation';
import radiusObj from '../../../../foundation/theme/assets/radius.json';
import StarIcon from '../../../../icon/Star';
import {
  notControlInDocTable,
  notShowInDocTable,
  paletteChoice,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { Title } from '../../../../storybook/components';
import { RcBox } from '../../../Box';
import { Icon } from '../../../Icon/__stories__/Icon.story';
import { RcText } from '../../../Text';
import { RcIconButton, RcIconButtonVariant } from '../IconButton';
import { RcIconButtonSizes } from '../utils';

export default {
  title: '🚀 Cleanup Components/IconButton',
  component: RcIconButton,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: paletteChoice,
        value: RcIconButton.defaultProps?.color,
      },
    },
    ...sortInDocTable<keyof IconButtonProps>([
      'symbol',
      'size',
      'variant',
      'radius',
      'disabled',
      'autoFocus',
      'useRcTooltip',
      'centerRipple',
      'loading',
      'title',
    ]),
    ...notShowInDocTable<keyof IconButtonProps>([
      'autoFocus',
      'alwaysEnableTooltip',
      'tooltipTitle',
      'tooltipPlacement',
      'disableToolTip',
      'popperProps',
      'tooltipForceHide',
      'externalLink',
      'ariaLabel',
      'download',
      'buttonRef',
      'aRef',
      'href',
    ]),
  },
} as Meta;

type IconButtonProps = ComponentProps<typeof RcIconButton>;

export const IconButton: Story<IconButtonProps> = ({ children, ...args }) => {
  switchToControlKnobs();
  return <RcIconButton {...args} symbol={StarIcon} />;
};

IconButton.storyName = 'IconButton';
IconButton.args = {};
IconButton.argTypes = {
  ...Icon.argTypes,
};
IconButton.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/api/button-base/#buttonbase-api',
      value: 'ButtonBase',
    },
  ],
};

export const IconButtonExamples: Story<IconButtonProps> = ({
  children,
  variant,
  TooltipProps,
  symbol,
  title,
  ...args
}) => {
  switchToControlKnobs();
  return (
    <RcBox display="flex" flexWrap="wrap">
      {(
        [
          'round',
          'contained',
          'inverse',
          'outline',
          'plain',
        ] as RcIconButtonVariant[]
      ).map((variant) => (
        <RcBox margin="1em" textAlign="center" key={variant}>
          <Title>{variant}</Title>
          <RcIconButton
            variant={variant}
            symbol={StarIcon}
            title="star"
            TooltipProps={{
              placement: 'top',
            }}
            {...args}
          />
          <br />
          <RcIconButton variant={variant} symbol={StarIcon} stretchIcon />
        </RcBox>
      ))}
    </RcBox>
  );
};

IconButtonExamples.storyName = 'IconButton Examples';

IconButtonExamples.argTypes = {
  ...notControlInDocTable<keyof IconButtonProps>([
    'variant',
    'TooltipProps',
    'symbol',
    'title',
  ]),
};

export const IconButtonWithElevation: Story<IconButtonProps> = () => {
  switchToControlKnobs();
  return (
    <>
      <RcBox display="flex" flexWrap="wrap">
        {[...new Array(25)].map((x, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <RcBox margin="1em" key={i} textAlign="center">
            <Title>{i}</Title>
            <RcIconButton variant="contained" symbol={StarIcon} elevation={i} />
          </RcBox>
        ))}
      </RcBox>
      <br />
      <br />{' '}
      <RcBox margin="1em" textAlign="center">
        <Title>Without elevation</Title>
        <RcIconButton
          variant="contained"
          symbol={StarIcon}
          elevation="0"
          activeElevation="0"
        />
      </RcBox>
    </>
  );
};

IconButtonWithElevation.storyName = 'IconButton with elevation';

export const IconButtonWithRadius: Story<IconButtonProps> = () => {
  switchToControlKnobs();
  return (
    <RcBox display="flex" flexWrap="wrap">
      {Object.keys(radiusObj).map((radius: any) => (
        <RcBox margin="1em" key={radius} textAlign="center">
          <Title>{radius}</Title>
          <RcIconButton variant="contained" symbol={StarIcon} radius={radius} />
        </RcBox>
      ))}
    </RcBox>
  );
};

export const IconButtonWithColorAndSize: Story<IconButtonProps> = () => {
  switchToControlKnobs();

  const colors = [
    'success.b03',
    'success.b04',
    'highlight.b01',
    'highlight.b02',
    'highlight.b03',
    'danger.b03',
    'danger.b04',
  ] as RcPaletteProp[];

  return (
    <RcBox display="flex" flexWrap="wrap">
      {Object.entries(RcIconButtonSizes).map(([size, valuePx]: any, i) => (
        <RcBox margin="1em" key={size} textAlign="center">
          <Title>
            {size}
            <br />
            <RcText color="neutral.f04">({valuePx * 2}px)</RcText>
          </Title>
          {(
            [
              'round',
              'contained',
              'inverse',
              'outline',
              'plain',
            ] as RcIconButtonVariant[]
          ).map((variant) => (
            <React.Fragment key={variant}>
              <RcIconButton
                variant={variant}
                color={colors[i]}
                symbol={StarIcon}
                size={size}
              />
              <br />
              <br />
            </React.Fragment>
          ))}
        </RcBox>
      ))}
    </RcBox>
  );
};

IconButtonWithColorAndSize.storyName = 'IconButton with color and size';

export const IconButtonWithDisabledColor: Story<IconButtonProps> = () => {
  switchToControlKnobs();
  return (
    <>
      <RcIconButton
        variant="round"
        useColorWhenDisabled
        symbol={StarIcon}
        disabled
        color="highlight.f02"
      />
      <RcIconButton
        variant="round"
        symbol={StarIcon}
        disabled
        color="highlight.f02"
      />
    </>
  );
};

IconButtonWithDisabledColor.storyName = 'IconButton with color when disabled';
