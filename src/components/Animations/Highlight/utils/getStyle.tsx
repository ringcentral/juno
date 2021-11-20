import {
  getParsePaletteColor,
  palette2,
  RcPaletteProp,
  RcTheme,
  setOpacity,
} from '../../../../foundation';

type GetHighlightStyle = {
  backgroundColorProp?: RcPaletteProp;
  theme: RcTheme;
};

export function getHighlightStyle({
  backgroundColorProp,
  theme,
}: GetHighlightStyle) {
  const backgroundColor = (
    backgroundColorProp
      ? getParsePaletteColor(backgroundColorProp)
      : setOpacity(palette2('warning', 'b03'), '12')
  )({ theme });

  const styles = {
    entering: {
      backgroundColor,
    },
    entered: {
      backgroundColor,
    },
    exiting: {
      backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    exited: {
      backgroundColor: '',
    },
  };

  return styles;
}
