import React, { forwardRef, memo } from 'react';
import { useTheme } from '../foundation';
import { PaletteType } from '@material-ui/core';
import MacPagesD from './MacPagesD';

const MacPages = memo(
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
        <MacPagesD {...props} ref={svgRef} />
      ) : (
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}
          {...props}
        >
          <path
            fill="var(--color25, #fff)"
            opacity={0.992}
            d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
          />
          <path
            fill="var(--color24, #ffbc31)"
            opacity={0.16}
            d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
          />
          <path
            fill="var(--color24, #ffbc31)"
            d="M22.667 7.111c1.227 0 2.222.995 2.222 2.222v11.689H11.163a.191.191 0 00-.039.378l.038.004h13.726v1.263a2.222 2.222 0 01-2.222 2.222H9.333a2.222 2.222 0 01-2.222-2.222V9.334c0-1.227.995-2.222 2.222-2.222h13.333zM11.537 19.85l-.303.466a.157.157 0 00.022.194.154.154 0 00.148.04l.038-.016.496-.289-.401-.395zm7.809-8.311l-7.002 7.07a2.863 2.863 0 00-.298.351l-.087.127-.344.63.469.466.627-.325c.15-.087.291-.19.419-.308l.094-.091 6.994-7.057-.872-.864zm2.001-1.11a.612.612 0 00-.814-.045l-.054.048-.982.99.873.864.982-.99a.613.613 0 00-.005-.867z"
          />
        </svg>
      );
    },
  ),
);
MacPages.displayName = 'MacPages';
MacPages['iconName'] = 'mac-pages';
export default MacPages;
