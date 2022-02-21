import React, {
  ComponentProps,
  ComponentType,
  FunctionComponent,
  ReactNode,
} from 'react';

import { logInDev, useThemeProps } from '../../foundation';
import { RcBox } from '../Box';
import { RcDefaultLoadingWithDelay } from './styles';

type RcLoadingProps = {
  /** is that is loading */
  loading: boolean;
  /** Always keep the children in the DOM when `loading` */
  keepMounted?: boolean;
  /** Always keep the children visible when `loading`, that need children is valid html when `keepVisible` id `false` */
  keepVisible?: boolean;
  /** custom loading component */
  LoadingComponent?: ComponentType<RcLoadingProps['LoadingProps']>;
  /** other props pass into Loading Component */
  LoadingProps?: ComponentProps<typeof RcDefaultLoadingWithDelay>;
  /** container for wrapper loading */
  children: ReactNode;
};

/**
 * Provide a wrapper to wrap component with loading mask
 *
 * ### when `keepVisible = false` that children must be one valid html **element**, otherwise that style could not set correctly
 */
const RcLoading: FunctionComponent<RcLoadingProps> = (inProps) => {
  const props = useThemeProps({ props: inProps, name: 'RcLoading' });
  const {
    LoadingComponent = RcDefaultLoadingWithDelay,
    keepVisible = true,
    keepMounted = true,
    loading,
    LoadingProps: {
      delay = 0,
      backgroundType = 'mask',
      size = 42,
      ...LoadingProps
    } = {},
    children,
  } = props;

  const childrenWhenLoading = !keepMounted && loading ? null : children;

  const getCloneNode = () => {
    if (
      childrenWhenLoading &&
      React.isValidElement(childrenWhenLoading) &&
      childrenWhenLoading.type !== React.Fragment
    ) {
      return (
        <RcBox clone display="none">
          {childrenWhenLoading}
        </RcBox>
      );
    }

    if (process.env.NODE_ENV !== 'production') {
      logInDev({
        component: 'RcLoading',
        message:
          'please confirm your children is a valid html element to set style, when you use `keepVisible=false`',
      });
    }

    return childrenWhenLoading;
  };

  return (
    <>
      {loading && (
        <LoadingComponent
          delay={delay}
          backgroundType={backgroundType}
          size={size}
          {...LoadingProps}
        />
      )}
      {keepVisible || !loading ? childrenWhenLoading : getCloneNode()}
    </>
  );
};

export { RcLoading };
export type { RcLoadingProps };
