import React, { ComponentProps, forwardRef, useMemo } from 'react';

import MuiCheckBox from '@material-ui/core/Checkbox';

import {
  combineClasses,
  combineProps,
  omit,
  RcBaseProps,
  RcClassesProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { Check as CheckIcon } from '@ringcentral/juno-icon';
import { RcIcon } from '../../Icon';
import { useRcCardContext } from '../Card/CardContext';
import { CardSelectionAreaStyle } from './styles';
import { RcCardSelectionAreaClasses } from './utils';

type RcCardSelectionAreaClassKey = RcClassesProps<
  'iconOuterCircle' | 'iconInnerCircle' | 'icon'
>;

type RcCardSelectionAreaProps = {} & RcCardSelectionAreaClassKey &
  RcBaseProps<
    ComponentProps<typeof MuiCheckBox>,
    | 'icon'
    | 'checkedIcon'
    | 'size'
    | 'color'
    | 'edge'
    | 'centerRipple'
    | 'disableRipple'
    | 'disableTouchRipple'
    | 'TouchRippleProps'
    | 'TouchRippleProps'
    | 'focusRipple'
    | 'disableFocusRipple'
    | 'readOnly'
    | 'required'
    | 'indeterminate'
    | 'indeterminateIcon'
  >;

const SelectionIcon = ({ checked }: { checked?: boolean }) => {
  const { iconOuterCircle, iconInnerCircle, icon } = RcCardSelectionAreaClasses;
  return (
    <div className={iconOuterCircle}>
      <div className={iconInnerCircle}>
        {checked && (
          <RcIcon
            className={icon}
            symbol={CheckIcon}
            size="small"
            color="neutral.f01"
          />
        )}
      </div>
    </div>
  );
};

const _RcCardSelectionArea = forwardRef<any, RcCardSelectionAreaProps>(
  (inProps, ref) => {
    const props = useThemeProps({
      props: inProps,
      name: 'RcCardSelectionArea',
    });
    const { classes: classesProp, onFocusVisible, onBlur, ...rest } = props;
    const { setFocusVisible } = useRcCardContext();

    const events = useMemo(
      () =>
        combineProps(
          {
            onFocusVisible: () => setFocusVisible(true),
            onBlur: () => setFocusVisible(false),
          },
          {
            onFocusVisible,
            onBlur,
          },
        ),
      [onBlur, onFocusVisible, setFocusVisible],
    );

    const classes = useMemo(
      () =>
        omit(combineClasses(RcCardSelectionAreaClasses, classesProp), [
          'iconInnerCircle',
          'iconOuterCircle',
          'icon',
        ]),
      [classesProp],
    );

    return (
      <MuiCheckBox
        {...rest}
        {...events}
        ref={ref}
        classes={classes}
        icon={<SelectionIcon />}
        checkedIcon={<SelectionIcon checked />}
        disableRipple
      />
    );
  },
);

const RcCardSelectionArea = styled(_RcCardSelectionArea)`
  ${CardSelectionAreaStyle}
`;

RcCardSelectionArea.defaultProps = {};

RcCardSelectionArea.displayName = 'RcCardSelectionArea';

export { RcCardSelectionArea };
export type { RcCardSelectionAreaProps };
