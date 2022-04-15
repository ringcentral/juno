import { useTheme, PaletteType } from '@material-ui/core';
import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
import MacKeynoteD from './MacKeynoteD';

const MacKeynote = memo(
  forwardRef(
    (
      inProps: SVGProps<SVGSVGElement> & {
        themeType?: PaletteType;
      },
      ref: Ref<SVGSVGElement>,
    ) => {
      const theme = useTheme();
      const { themeType = theme.palette.type, ...props } = inProps;
      return themeType === 'dark' ? (
        <MacKeynoteD {...props} ref={ref} />
      ) : (
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          ref={ref}
          {...props}
        >
          <path
            fill="#fff"
            opacity={0.992}
            d="M3.556 0h24.889a3.556 3.556 0 0 1 3.556 3.556v24.889a3.556 3.556 0 0 1-3.556 3.556H3.556A3.556 3.556 0 0 1 0 28.445V3.556A3.556 3.556 0 0 1 3.556 0z"
          />
          <path
            fill="#039dfa"
            opacity={0.16}
            d="M3.556 0h24.889a3.556 3.556 0 0 1 3.556 3.556v24.889a3.556 3.556 0 0 1-3.556 3.556H3.556A3.556 3.556 0 0 1 0 28.445V3.556A3.556 3.556 0 0 1 3.556 0z"
          />
          <path
            fill="#039dfa"
            d="M24.889 16a8.894 8.894 0 0 1-5.787 8.333 8.864 8.864 0 0 1-3.102.556 8.876 8.876 0 0 1-3.163-.579A8.89 8.89 0 1 1 24.889 16z"
          />
          <path
            fill="#f2f2f2"
            d="M9.114 17.12c0 .377.301.683.673.683h12.675a.678.678 0 0 0 .673-.683H9.114zM19.195 24.33a8.67 8.67 0 0 1-3.07.558 8.68 8.68 0 0 1-3.13-.581.357.357 0 0 1 .113-.019h1.911a.72.72 0 0 0 .714-.724v-5.307h.673v5.307c0 .4.319.724.713.724h1.911c.059 0 .116.015.165.041zM22.314 11.334a.697.697 0 0 0-.691-.663H11.34v-.788c0-.308.247-.559.551-.559h1.735c.074.261.31.452.591.452h1.387a.62.62 0 0 0 .615-.624v-.133a.62.62 0 0 0-.615-.624h-1.387a.618.618 0 0 0-.605.512H11.89a.97.97 0 0 0-.962.976v.788h-.412a.696.696 0 0 0-.691.663l-.298 5.33h13.086l-.298-5.33z"
          />
        </svg>
      );
    },
  ),
);
MacKeynote.displayName = 'MacKeynote';
MacKeynote['iconName'] = 'mac-keynote';
export default MacKeynote;
