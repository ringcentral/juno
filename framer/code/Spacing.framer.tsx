import { addPropertyControls, ControlType, RenderTarget } from 'framer';
import { useState } from 'react';

import * as lib from '../src';

const { styled, css, spacing } = lib;

const items = {
  '1': '#ef99b7',
  '2': '#79ecfa',
  '3': '#e479f7',
  '4': '#f8a58b',
  '5': '#91a0f9',
  '6': '#f9cf7a',
  '8': '#79d7e4',
  '10': '#79c4be',
  '12': '#a88ec9',
};

type SpaceItemProps = { vertical?: boolean; count: number; cmdHold: boolean };

const defaultSize = '100px';

const SpaceItem = styled.div<SpaceItemProps>`
  background: ${({ color }) => color};
  opacity: ${({ cmdHold }) => (cmdHold ? '1' : '0')};

  ${({ vertical, count }) => {
    if (vertical) {
      return css`
        width: ${defaultSize};
        height: ${spacing(count)};
      `;
    }

    return css`
      width: ${spacing(count)};
      height: ${defaultSize};
    `;
  }};
`;

const RcSpacing: React.ComponentType<SpaceItemProps> = ({ count, ...rest }) => {
  const [cmdHold, setCmdHold] = useState(false);
  const current = RenderTarget.current();

  lib.useEventListener(document, 'keydown', (e: any) => {
    if (e.key === 'Meta') {
      setCmdHold(true);
    }
  });

  lib.useEventListener(document, 'keyup', () => {
    setCmdHold(false);
  });

  return (
    <lib.RcThemeProvider>
      <SpaceItem
        {...rest}
        count={count}
        color={(items as any)[count]}
        cmdHold={cmdHold || current === RenderTarget.canvas}
      />
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcSpacing, {
  count: {
    title: 'count',
    type: ControlType.Enum,
    /** description: "", */
    options: ['1', '2', '3', '4', '5', '6', '8', '10', '12'],
    defaultValue: '4',
  },
  vertical: {
    title: 'vertical',
    type: ControlType.Boolean,
    /** description: "If `true`, the `input` element will be required.", */
    defaultValue: false,
  },
});

export default RcSpacing;
