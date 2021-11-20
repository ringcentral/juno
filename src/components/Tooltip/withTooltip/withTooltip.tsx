import React, { ComponentType, forwardRef } from 'react';

import { RcTooltip, RcTooltipProps } from '../Tooltip';

type WithTooltipProps = {
  /** title on list root */
  title?: RcTooltipProps['title'];
  /** html native title or not, default `false` */
  useRcTooltip?: boolean;
  /** props for pass into `RcTooltip` when useRcTooltip is `true` */
  TooltipProps?: Partial<RcTooltipProps>;
};

/**
 * Make a component can be use with `RcTooltip` and Tooltip Props
 */
function withTooltip<T extends object>(Component: ComponentType<T>) {
  return forwardRef<any, WithTooltipProps & T>((props, ref) => {
    const { title, useRcTooltip, TooltipProps, ...rest } = props;

    if (title && useRcTooltip) {
      return (
        <RcTooltip title={title} {...TooltipProps}>
          <Component {...(rest as any)} ref={ref} />
        </RcTooltip>
      );
    }

    return <Component title={title} {...(rest as any)} ref={ref} />;
  });
}

export { withTooltip };
export type { WithTooltipProps };
