import {
  OverridableComponent,
  OverridableTypeMap,
} from '@material-ui/core/OverridableComponent';
import { ComponentType, FunctionComponent } from 'react';

import styled, { Interpolation, ThemedStyledProps } from './styled-components';
import { RcTheme } from './theme/theme.type';

export type CustomStyledComponentResult<T> = Interpolation<
  ThemedStyledProps<T, RcTheme>
> &
  FunctionComponent<T>;

export interface OverridableStyled {
  <M extends Omit<OverridableTypeMap, 'classKey'>>(component: ComponentType): (
    strings: TemplateStringsArray,
    ...interpolations: Array<
      Interpolation<ThemedStyledProps<M['props'], RcTheme>>
    >
  ) => OverridableComponent<M & { classKey: '' }> &
    CustomStyledComponentResult<M['props']>;
}

/**
 * just type to make styled-component work with Mui dynamic component type,
 *
 * you need custom Map type like below, define the defaultComponent type and provide that static Props
  *
 *
 * @example
 *
 * ```ts
 *  interface RcPaginationItemTypeMap<D extends React.ElementType = 'div'> {
      props: RcPaginationItemProps;
      defaultComponent: D;
    }
   ```
 */
export const overridableStyled: OverridableStyled = styled as any;
