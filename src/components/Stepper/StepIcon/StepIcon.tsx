import React, { ComponentProps, forwardRef, useMemo } from 'react';

import MuiStepIcon from '@material-ui/core/StepIcon';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import Check from '../../../icon/Check';
import Edit from '../../../icon/Edit';
import { StepIconStyle } from './styles';
import { StyledCircleIcon } from './styles/StyledCircleIcon';
import { RcStepIconClasses, useIsEditable } from './utils';

type RcStepIconProps = {
  /** is that icon editable */
  editable?: boolean;
} & RcBaseProps<ComponentProps<typeof MuiStepIcon>>;

const _RcStepIcon = forwardRef<any, RcStepIconProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcStepIcon' });
  const {
    icon: iconProp,
    classes: classesProp,
    editable,
    completed,
    children,
    ...rest
  } = props;

  const classes = useMemo(
    () => combineClasses(RcStepIconClasses, classesProp),
    [classesProp],
  );

  // * get current value again
  const isEdit = useIsEditable(props);

  const icon = useMemo(() => {
    if (editable) {
      return <StyledCircleIcon isEdit symbol={Edit} size="small" />;
    }

    return completed ? (
      <StyledCircleIcon
        isEdit={isEdit}
        symbol={isEdit ? Edit : Check}
        size="small"
      />
    ) : (
      iconProp
    );
  }, [editable, completed, isEdit, iconProp]);

  return <MuiStepIcon {...rest} ref={ref} classes={classes} icon={icon} />;
});

/** inner component */
const RcStepIcon = styled(_RcStepIcon)`
  ${StepIconStyle}
`;

RcStepIcon.defaultProps = {};

RcStepIcon.displayName = 'RcStepIcon';

export { RcStepIcon };
export type { RcStepIconProps };
