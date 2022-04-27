import React, { ComponentProps, forwardRef, useMemo } from 'react';

import MuiDrawer from '@material-ui/core/Drawer';

import {
  combineClasses,
  combineProps,
  RcBaseProps,
  RcTheme,
  styled,
  useRcPortalWindowContext,
  useThemeProps,
} from '../../foundation';
import { DrawerStyle } from './styles';
import { RcDrawerClasses } from './utils';
import { usePortalManagerWithID, useUnmountPortalHandler } from '../PortalHost';
import { HasPortalParentProvider } from '../PortalHost/context/HasPortalParentContext';

type RcDrawerProps = {
  /** custom radius for paper, default is `lg` */
  radius?: keyof RcTheme['radius'];
  /**
   * when variant is `temporary` if you want only render your children content,
   * you can set that as `true`, that will overwrite default paper
   * background as `transparent` and remove `shadow` and keep chidden in `center`
   */
  inlinePaper?: boolean;
} & RcBaseProps<ComponentProps<typeof MuiDrawer>>;

const _RcDrawer = forwardRef<any, RcDrawerProps>(
  (inProps: RcDrawerProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcDrawer' });
    const {
      inlinePaper,
      radius,
      classes: classesProp,
      children,
      PaperProps: PaperPropsProp,
      onClose,
      SlideProps: SlidePropsProp,
      ...rest
    } = props;

    const { externalWindow } = useRcPortalWindowContext();

    const PaperProps = useMemo(
      () =>
        combineProps(
          {
            ['data-mui-paper' as any]: true,
            onClick: inlinePaper
              ? (e) => {
                  if ((e.target as any)?.dataset.muiPaper) {
                    onClose?.(e, 'backdropClick');
                  }
                }
              : undefined,
          },
          PaperPropsProp,
        ),
      [PaperPropsProp, inlinePaper, onClose],
    );

    const classes = useMemo(
      () => combineClasses(RcDrawerClasses, classesProp),
      [classesProp],
    );

    const onExited = useUnmountPortalHandler(SlidePropsProp?.onExited);
    const managerWithID = usePortalManagerWithID();

    const SlideProps = {
      ...SlidePropsProp,
      onExited,
      ...(managerWithID ? { appear: true } : {}),
    };

    return (
      <HasPortalParentProvider>
        <MuiDrawer
          {...rest}
          ref={ref}
          container={externalWindow?.document.body}
          classes={classes}
          onClose={onClose}
          PaperProps={PaperProps}
          SlideProps={SlideProps}
        >
          {children}
        </MuiDrawer>
      </HasPortalParentProvider>
    );
  },
);

const RcDrawer = styled(_RcDrawer)`
  ${DrawerStyle}
`;

RcDrawer.defaultProps = {
  radius: 'lg',
};

RcDrawer.displayName = 'RcDrawer';

export { RcDrawer };
export type { RcDrawerProps };
