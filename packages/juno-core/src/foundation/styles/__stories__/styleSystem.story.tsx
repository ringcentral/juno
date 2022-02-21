import React from 'react';

import {
  css,
  darken,
  ellipsis,
  fakeBorder,
  flexCenterStyle,
  flexWidth,
  focusVisibleShadowStyle,
  getContrastBgColor,
  getParsePaletteColor,
  lighten,
  lineClamp,
  nonStyleButton,
  nonTouchHoverMedia,
  opacity,
  palette2,
  paletteContrastText,
  radius,
  RcBox,
  RcTheme,
  setOpacity,
  shadows,
  spacing,
  styled,
  typography,
  zIndex,
} from '@ringcentral/juno';
import { Meta, Story } from '@storybook/react';

export default {
  title: '💅 Style system/utils',
  argTypes: {},
} as Meta;

const Basic = styled.div`
  margin: 1em;
  width: 100px;
  height: 100px;
  color: ${palette2('neutral', 'f06')};
`;

const Block = styled(Basic)`
  margin: 1em;
  width: 100px;
  height: 100px;
  background-color: ${palette2('interactive', 'b02')};
`;

const Darken = styled(Block)`
  background-color: ${darken(palette2('interactive', 'b02'), 0.5)};
`;
export const DarkenExample: Story<{}> = () => {
  return <Darken>darken</Darken>;
};
DarkenExample.storyName = 'darken';

const Lighten = styled(Block)`
  background-color: ${lighten(palette2('interactive', 'b02'), 0.5)};
`;
export const LightenExample: Story<{}> = () => {
  return <Lighten>Lighten</Lighten>;
};
LightenExample.storyName = 'lighten';

const Opacity = styled(Block)`
  opacity: ${opacity('48')};
`;
export const OpacityExample: Story<{}> = () => {
  return <Opacity>Opacity</Opacity>;
};
OpacityExample.storyName = 'opacity';

const PaletteContrastText = styled(Block)`
  color: ${paletteContrastText(palette2('interactive', 'b02'))};
`;
export const PaletteContrastTextExample: Story<{}> = () => {
  return <PaletteContrastText>PaletteContrastText</PaletteContrastText>;
};
PaletteContrastTextExample.storyName = 'paletteContrastText';

const Radius = styled(Block)`
  border-radius: ${radius('circle')};
`;
export const RadiusExample: Story<{}> = () => {
  return <Radius />;
};
RadiusExample.storyName = 'radius';

const Shadows = styled(Radius)`
  box-shadow: ${shadows('16')};
`;
export const ShadowsExample: Story<{}> = () => {
  return <Shadows />;
};
ShadowsExample.storyName = 'shadows';

const Padding = styled(Radius)`
  padding: ${spacing(6)};
  box-sizing: border-box;
`;
const Margin = styled(Padding)`
  margin: ${spacing(10)};
`;
export const SpacingExample: Story<{}> = () => {
  return (
    <>
      <Padding>padding</Padding>
      <Margin>margin</Margin>
    </>
  );
};
SpacingExample.storyName = 'spacing';

const ContrastBgColor = styled(Block)`
  ${({ theme }) => {
    const [currColor, contrastBgColor] = getContrastBgColor({
      theme,
      color: 'interactive.b02',
    });

    return css`
      color: ${currColor};
      background-color: ${contrastBgColor};
    `;
  }};
`;
const ContrastBgColor2 = styled(Block)`
  ${({ theme }) => {
    const [currColor, contrastBgColor] = getContrastBgColor({
      theme,
      color: 'highlight.b01',
    });

    return css`
      color: ${currColor};
      background-color: ${contrastBgColor};
    `;
  }};
`;
export const ContrastBgColorExample: Story<{}> = () => {
  return (
    <>
      <ContrastBgColor>getContrastBgColor2</ContrastBgColor>
      <ContrastBgColor2>getContrastBgColor2</ContrastBgColor2>
    </>
  );
};
ContrastBgColorExample.storyName = 'getContrastBgColor';

const Typography = styled.div`
  ${typography('display1')}
`;
export const TypographyExample: Story<{}> = () => {
  return <Typography>Typography display1</Typography>;
};
TypographyExample.storyName = 'typography';

const FakeBorder = styled(Block)`
  ${
    // default will use `palette2('highContrast')`, that will only show in highContrast theme
    fakeBorder()
  }
`;
const FakeBorder2 = styled(Block)`
  ${fakeBorder({
    color: palette2('neutral', 'l03'),
  })}
`;
export const FakeBorderExample: Story<{}> = () => {
  return (
    <>
      <FakeBorder>border in highContrast theme</FakeBorder>
      <FakeBorder2>fakeborder</FakeBorder2>
    </>
  );
};
FakeBorderExample.storyName = 'fakeBorder';

const FlexCenter = styled(Block)`
  ${flexCenterStyle}
`;
export const FlexCenterExample: Story<{}> = () => {
  return <FlexCenter>flex center</FlexCenter>;
};
FlexCenterExample.storyName = 'FlexCenter';

type FlexWidthProps = {
  width: string;
  height?: string;
  color?: any;
};
const FlexWidth = styled(Block)<FlexWidthProps>`
  ${({ width }) => flexWidth(width)};
  height: ${({ height }) => height};
  background: ${({ color }) => getParsePaletteColor(color)};
`;
export const FlexWidthExample: Story<{}> = () => {
  return (
    <RcBox display="flex" width="100%">
      <FlexWidth width="300px" />
      <FlexWidth width="auto" color="neutral.b04" />
      <FlexWidth width="200px" />
    </RcBox>
  );
};
FlexWidthExample.storyName = 'flexWidth';

const FocusVisible = styled(Basic)`
  outline: none;
  position: relative;
  ${focusVisibleShadowStyle};
`;
export const FocusVisibleExample: Story<{}> = () => {
  return <FocusVisible tabIndex={0}>focus visible</FocusVisible>;
};
FocusVisibleExample.storyName = 'focusVisibleShadowStyle';

const Ellipsis = styled(Block)`
  ${ellipsis}
`;
export const EllipsisExample: Story<{}> = () => {
  return <Ellipsis>line 1 line 2 line 3</Ellipsis>;
};
EllipsisExample.storyName = 'ellipsis';

const LineClamp = styled(Basic)`
  outline: none;
  position: relative;
  ${lineClamp(2, 38)};
`;
export const LineClampExample: Story<{}> = () => {
  return (
    <LineClamp>
      line 1 <br />
      line 2 <br />
      line 3 <br />
    </LineClamp>
  );
};
LineClampExample.storyName = 'lineClamp';

const Palette = styled(Basic)`
  background-color: ${palette2('highlight', 'b03')};
`;
export const PaletteExample: Story<{}> = () => {
  return <Palette>Palette</Palette>;
};
PaletteExample.storyName = 'palette';

const NonStyleButton = styled.button`
  ${nonStyleButton};
  margin: 1em;
  width: 100px;
  height: 100px;
  color: ${palette2('neutral', 'f06')};
  background-color: ${palette2('highlight', 'b02')};
`;
export const NonStyleButtonExample: Story<{}> = () => {
  return <NonStyleButton>NonStyleButton</NonStyleButton>;
};
NonStyleButtonExample.storyName = 'nonStyleButton';

const NonTouchHoverMedia = styled(NonStyleButton)`
  ${nonTouchHoverMedia} {
    &:hover {
      background-color: ${setOpacity(palette2('highlight', 'b02'), '24')};
    }
  }
`;
export const NonTouchHoverMediaExample: Story<{}> = () => {
  return <NonTouchHoverMedia>NonTouchHoverMedia</NonTouchHoverMedia>;
};
NonTouchHoverMediaExample.storyName = 'nonTouchHoverMedia';

const ZIndex = styled(FlexWidth)<{ zIndex: keyof RcTheme['zIndex'] }>`
  position: absolute;
  z-index: ${({ zIndex: value }) => zIndex(value)};
`;
export const ZIndexExample: Story<{}> = () => {
  return (
    <FlexCenter>
      <ZIndex zIndex="snackbar" width="30px" height="30px">
        snackbar
      </ZIndex>
      <ZIndex zIndex="modal" width="100px" color="highlight.b01">
        modal
      </ZIndex>
    </FlexCenter>
  );
};
ZIndexExample.storyName = 'zIndex';
// Interaction state
// https://wiki.ringcentral.com/pages/viewpage.action?pageId=424536658
