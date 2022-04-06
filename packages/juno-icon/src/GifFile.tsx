import { useTheme, PaletteType } from '@material-ui/core';
import React, { forwardRef, memo } from 'react';
import GifFileD from './GifFileD';

const GifFile = memo(
  forwardRef(
    (
      inProps: React.SVGProps<SVGSVGElement> & {
        themeType?: PaletteType;
      },
      svgRef?: React.Ref<SVGSVGElement>,
    ) => {
      const theme = useTheme();
      const { themeType = theme.palette.type, ...props } = inProps;
      return themeType === 'dark' ? (
        <GifFileD {...props} ref={svgRef} />
      ) : (
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}
          {...props}
        >
          <path
            fill="var(--color2, #fff)"
            opacity={0.992}
            d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
          />
          <path
            fill="var(--color57, #4975ed)"
            opacity={0.16}
            d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
          />
          <path
            fill="var(--color58, #4b77f1)"
            d="M9.778 7.111h12.444a2.667 2.667 0 012.667 2.667v12.444a2.667 2.667 0 01-2.667 2.667H9.778a2.667 2.667 0 01-2.667-2.667V9.778a2.667 2.667 0 012.667-2.667z"
          />
          <path
            fill="var(--color2, #fff)"
            d="M12.396 19.627c.264 0 .51-.014.738-.042s.442-.07.642-.127c.2-.056.388-.128.564-.216s.346-.19.509-.309v-2.6h-2.138v.676c0 .062.022.115.067.158s.105.064.182.064h.804V18.4c-.181.086-.371.153-.571.202s-.435.073-.704.073c-.305 0-.587-.053-.844-.158s-.48-.257-.667-.456c-.187-.198-.332-.442-.436-.731s-.156-.619-.156-.989c0-.344.049-.655.147-.933s.237-.517.418-.716c.181-.199.399-.351.656-.458s.543-.16.86-.16a2.765 2.765 0 01.922.142c.12.041.23.09.329.147l.291.169a.407.407 0 00.218.071c.113 0 .203-.055.271-.164l.347-.542c-.267-.249-.592-.451-.976-.607s-.838-.233-1.362-.233c-.513 0-.975.08-1.387.24s-.762.385-1.051.676c-.289.29-.512.637-.669 1.04s-.236.846-.236 1.329c0 .477.081.917.242 1.32s.386.75.673 1.04c.287.29.628.517 1.022.68s.825.244 1.293.244zm4.915-.071v-6.427h-1.2v6.427h1.2zm2.649 0v-2.618h2.404v-.956H19.96V14.08h2.849v-.951h-4.053v6.427h1.204z"
          />
        </svg>
      );
    },
  ),
);
GifFile.displayName = 'GifFile';
GifFile['iconName'] = 'gif-file';
export default GifFile;
