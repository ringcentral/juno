import { useTheme, PaletteType } from '@material-ui/core';
import React, { forwardRef, memo } from 'react';
import ImageBrokenD from './ImageBrokenD';

const ImageBroken = memo(
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
        <ImageBrokenD {...props} ref={svgRef} />
      ) : (
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}
          {...props}
        >
          <path
            fill="var(--color5, #fff)"
            opacity={0.992}
            d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
          />
          <path
            fill="var(--color63, #a7aaae)"
            opacity={0.16}
            d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
          />
          <path
            fill="var(--color63, #a7aaae)"
            d="M11.893 8.018L16.755 8l5.466 4.962-.024 8.878c0 .607-.204 1.118-.612 1.535s-.909.625-1.503.625h-8.154c-.594 0-1.095-.209-1.503-.625s-.612-.929-.612-1.535l-.035-11.661c0-.607.204-1.118.612-1.535s.909-.625 1.503-.625z"
          />
          <path
            fill="var(--color88, #f1f1f2)"
            d="M18.329 14.738c.585 0 .944.535 1.542 1.822l.627 1.388c.134.291.216.453.32.64.083.15.157.267.221.351l.057.069.027-.021c.255-.235.893-1.441 1.677-3.452l.195-.509.832.313-.323.84c-1.01 2.563-1.726 3.74-2.456 3.74l-.121-.005c-.444-.039-.66-.336-1.255-1.633l-.608-1.346-.151-.314c-.316-.637-.559-.994-.585-.994-.06 0-.34.43-.826 1.361l-.464.91c-.747 1.461-1.143 2.021-1.771 2.021-.595 0-1.021-.552-1.704-1.811l-.675-1.274c-.445-.822-.688-1.208-.702-1.208l-.008-.002c-.028-.016.01-.11-.16.161l-2.439 4.071-.763-.456 1.744-2.952c.081-.134.145-.241.188-.309l.211-.331c.502-.764.815-1.071 1.227-1.071l.113.004c.415.029.619.259 1.261 1.456l.784 1.487.209.374c.165.285.307.506.438.676.16.207.275.296.276.296.079 0 .382-.414.805-1.202l.36-.7.298-.587c.764-1.487 1.025-1.803 1.599-1.803z"
          />
        </svg>
      );
    },
  ),
);
ImageBroken.displayName = 'ImageBroken';
ImageBroken['iconName'] = 'image-broken';
export default ImageBroken;
