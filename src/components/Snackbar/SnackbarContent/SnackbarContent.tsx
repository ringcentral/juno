import MuiSnackbarContent from '@material-ui/core/SnackbarContent';
import React, {
  ComponentProps,
  forwardRef,
  isValidElement,
  useMemo,
} from 'react';

import {
  combineClasses,
  isRcElement,
  RcBaseProps,
  RcBaseSize,
  styled,
  withDeprecatedCheck,
  useThemeProps,
} from '../../../foundation';
import { RcCircularProgress } from '../../Progress/CircularProgress';
import { snackbarContentStyle } from './styles';
import {
  RcSnackbarContentClasses,
  RcSnackbarContentLoadingSizes,
} from './utils';

type RcSnackbarContentMessageAlignment = 'left' | 'center' | 'right';
type RcSnackbarContentSize = RcBaseSize<'small' | 'medium'>;
type RcSnackbarContentType = 'warn' | 'success' | 'error' | 'info';

type RcSnackbarContentProps = {
  /** message type */
  type?: RcSnackbarContentType;
  /** message size, default is `medium` */
  size?: RcSnackbarContentSize;
  /** message align  */
  messageAlign?: RcSnackbarContentMessageAlignment;
  /**
   * If `true`, the input will take up the full width of its container
   * when fullWidth the square will be `true`, if you still want square
   * set square={false}
   */
  fullWidth?: boolean;
  /** is use loading in action */
  loading?: boolean;
  /** @deprecated please use `aria-label` directly */
  ariaLabel?: string;
} & RcBaseProps<
  ComponentProps<typeof MuiSnackbarContent>,
  'variant' | 'elevation'
>;

/** @release */
const _RcSnackbarContent = forwardRef<any, RcSnackbarContentProps>(
  (inProps: RcSnackbarContentProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcSnackbarContent' });
    const {
      classes: classesProp,
      loading,
      size,
      messageAlign,
      type,
      fullWidth,
      action: actionProp,
      ...rest
    } = props;

    const classes = useMemo(
      () => combineClasses(RcSnackbarContentClasses, classesProp),
      [classesProp],
    );

    const action = useMemo(() => {
      const getItem = (item: any) => {
        if (isValidElement(item) && isRcElement(item, ['RcSnackbarAction'])) {
          /** when size is not equal default size, that mean user want to custom size */
          if (size !== RcSnackbarContent.defaultProps!.size) {
            return item;
          }

          return React.cloneElement(item as JSX.Element, { size });
        }
        return item;
      };

      if (actionProp instanceof Array) {
        return actionProp.map(getItem);
      }

      return getItem(actionProp);
    }, [actionProp, size]);

    return (
      <MuiSnackbarContent
        {...rest}
        ref={ref}
        classes={classes}
        action={
          loading ? (
            <RcCircularProgress
              color="inherit"
              size={RcSnackbarContentLoadingSizes[size!]}
            />
          ) : (
            action
          )
        }
      />
    );
  },
);

const RcSnackbarContent = styled(
  withDeprecatedCheck(
    _RcSnackbarContent,
    [
      {
        prop: 'ariaLabel',
        time: '2021-3',
        comment: `please use \`aria-label\` directly `,
      },
    ],
    'RcSnackbarContent',
  ),
)`
  ${snackbarContentStyle}
`;

RcSnackbarContent.defaultProps = {
  type: 'success',
  messageAlign: 'center',
  size: 'medium',
};

RcSnackbarContent.displayName = 'RcSnackbarContent';

export {
  RcSnackbarContent,
  RcSnackbarContentProps,
  RcSnackbarContentSize,
  RcSnackbarContentType,
};
