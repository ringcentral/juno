import MuiDialog from '@material-ui/core/Dialog';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  combineProps,
  RcBaseProps,
  RcBaseSize,
  styled,
  useRcPortalWindowContext,
  useThemeProps,
  withDeprecatedCheck,
} from '../../foundation';
import { useUnmountPortalHandler } from '../PortalHost';
import { DialogStyle } from './styles';
import { RcDialogChildrenSize, RcDialogClasses } from './utils';
import { RcDialogContext } from './utils/DialogContext';

type RcDialogSize =
  | RcBaseSize<'xsmall' | 'small' | 'medium' | 'large'>
  | 'fullScreen';

type RcDialogProps = {
  /**
   * @deprecated size of dialog,
   * please use `maxWidth` and `fullScreen` directly
   *
   * - 'fullScreen' => false
   * - 'large' => `md`
   * - 'medium' => `sm`
   * - 'small' => `xs`
   * - 'xsmall' => no longer exist, should custom by yourself
   */
  size?: RcDialogSize;
  /** size apply to all dialog children */
  childrenSize?: RcDialogChildrenSize;
} & RcBaseProps<ComponentProps<typeof MuiDialog>>;

const _RcDialog = forwardRef<any, RcDialogProps>(
  (inProps: RcDialogProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcDialog' });
    const {
      classes: classesProp,
      size = 'medium',
      maxWidth: maxWidthProp,
      fullWidth = true,
      childrenSize,
      children,
      TransitionProps: TransitionPropsProp,
      ...rest
    } = props;
    const classes = useMemo(
      () => combineClasses(RcDialogClasses, classesProp),
      [classesProp],
    );

    const { externalWindow } = useRcPortalWindowContext();

    const maxWidth = useMemo<
      ComponentProps<typeof MuiDialog>['maxWidth']
    >(() => {
      if (maxWidthProp) return maxWidthProp;

      switch (size) {
        case 'fullScreen':
        case 'xsmall':
          return false;
        case 'large':
          return 'md';
        case 'medium':
          return 'sm';
        case 'small':
        default:
          return 'xs';
      }
    }, [maxWidthProp, size]);

    const contextValue = useMemo(() => ({ size: childrenSize }), [
      childrenSize,
    ]);

    const onExited = useUnmountPortalHandler(TransitionPropsProp?.onExited);

    const TransitionProps = useMemo(
      () => combineProps({ onExited }, TransitionPropsProp),
      [TransitionPropsProp, onExited],
    );

    return (
      <MuiDialog
        ref={ref}
        fullWidth={fullWidth}
        container={externalWindow?.document.body}
        maxWidth={maxWidth}
        fullScreen={size === 'fullScreen' ? true : undefined}
        classes={classes}
        TransitionProps={TransitionProps}
        {...rest}
      >
        <RcDialogContext.Provider value={contextValue}>
          {children}
        </RcDialogContext.Provider>
      </MuiDialog>
    );
  },
);

const RcDialog = styled(
  withDeprecatedCheck(
    _RcDialog,
    [
      {
        prop: 'size',
        time: '2021-11',
        comment: `
   * please use \`maxWidth\` and \`fullScreen\` directly
   *
   * - 'fullScreen' => false
   * - 'large' => \`md\`
   * - 'medium' => \`sm\`
   * - 'small' => \`xs\`
   * - 'xsmall' => no longer exist, should custom by yourself
   */`,
      },
    ],
    'RcDialog',
  ),
)`
  ${DialogStyle}
`;

RcDialog.defaultProps = {};

RcDialog.displayName = 'RcDialog';

export { RcDialog, RcDialogProps, RcDialogSize, RcDialogContext };
