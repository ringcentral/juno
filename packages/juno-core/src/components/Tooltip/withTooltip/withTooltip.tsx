import React, { forwardRef } from 'react';
import type {
  ComponentPropsWithoutRef,
  ElementRef,
  ComponentType,
} from 'react';

import { RcTooltip, RcTooltipProps } from '../Tooltip';

type WithTooltipProps<P extends {} = {}> = {
  /** title on list root */
  title?: RcTooltipProps['title'] | (P extends { title: infer T } ? T : never);
  /** html native title or not, default `false` */
  useRcTooltip?: boolean;
  /** props for pass into `RcTooltip` when useRcTooltip is `true` */
  TooltipProps?: Partial<RcTooltipProps>;
} & Omit<P, 'title'>;

/**
 * Make a component can be use with `RcTooltip` and Tooltip Props
 */
function withTooltip<C extends ComponentType<unknown>>(Component: C) {
  type ComponentProps = ComponentPropsWithoutRef<C>;
  type SafeProps = ComponentProps extends object ? ComponentProps : {};
  type Props = WithTooltipProps<SafeProps>;
  type Ref = ElementRef<C>;

  const WithTooltip = forwardRef<Ref, Props>((props, ref) => {
    const { title, useRcTooltip, TooltipProps, ...rest } = props;
    const restProps = rest as SafeProps;
    const ComponentWithRef = Component as unknown as React.ComponentType<
      SafeProps & { ref?: React.Ref<Ref> }
    >;

    if (title && useRcTooltip) {
      return (
        <RcTooltip title={title as RcTooltipProps['title']} {...TooltipProps}>
          <ComponentWithRef {...restProps} ref={ref} />
        </RcTooltip>
      );
    }

    return (
      <ComponentWithRef {...({ ...restProps, title } as SafeProps)} ref={ref} />
    );
  });

  return WithTooltip as React.ForwardRefExoticComponent<
    React.PropsWithoutRef<Props> & React.RefAttributes<Ref>
  > &
    React.ComponentType<Props>;
}

export { withTooltip };
export type { WithTooltipProps };
