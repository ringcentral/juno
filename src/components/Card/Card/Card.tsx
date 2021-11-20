import MuiCard from '@material-ui/core/Card';
import clsx from 'clsx';
import React, { ComponentProps, forwardRef, useMemo, useState } from 'react';

import {
  combineClasses,
  RcBaseProps,
  RcClassesProps,
  omit,
  useThemeProps,
} from '../../../foundation';
import styled from '../../../foundation/styled-components';
import { RcCardContext } from './CardContext';
import { CardStyle } from './styles';
import { RcCardClasses } from './utils';

type RcCardClassKey = RcClassesProps<'root' | 'selected' | 'focusVisible'>;

type RcCardProps = {
  /** applies the visual style of selection, only applied when variant outline */
  selected?: boolean;
  /** sets the visible style of focus if the focus target is delegated to a child component, only applied when variant outline */
  focusVisible?: boolean;
} & RcCardClassKey &
  RcBaseProps<ComponentProps<typeof MuiCard>, 'classes' | 'raised'>;

const _RcCard = forwardRef<any, RcCardProps>((inProps: RcCardProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcCard' });
  const {
    classes: classesProp,
    className: classNameProp,
    selected,
    focusVisible: focusVisibleProp,
    ...rest
  } = props;
  const [focusVisible, setFocusVisible] = useState(false);

  const classes = useMemo(
    () =>
      combineClasses(
        omit(RcCardClasses, ['selected', 'focusVisible']),
        classesProp,
      ),
    [classesProp],
  );

  const className = clsx(classNameProp, {
    [RcCardClasses.focusVisible]: focusVisibleProp || focusVisible,
    [RcCardClasses.selected]: selected,
  });

  return (
    <RcCardContext.Provider value={{ focusVisible, setFocusVisible }}>
      <MuiCard {...rest} className={className} ref={ref} classes={classes} />
    </RcCardContext.Provider>
  );
});

const RcCard = styled(_RcCard)`
  ${CardStyle}
`;

RcCard.displayName = 'RcCard';

RcCard.defaultProps = {};

export { RcCard };
export type { RcCardProps };
