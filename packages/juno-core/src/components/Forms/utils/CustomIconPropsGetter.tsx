import React, { isValidElement, ReactNode } from 'react';

import { isRcElement } from '../../../foundation';
import { RcIcon, RcIconSize, SvgSymbol } from '../../Icon';

type withCustomCheckedIconOptions<T = SvgSymbol | React.ReactNode> = {
  icon?: T;
  checkedIcon?: T;
  indeterminateIcon?: T;
};

type withCustomCheckedReturnProps = {
  size?: RcIconSize;
  icon: React.ReactNode;
  checkedIcon: React.ReactNode;
  indeterminateIcon?: React.ReactNode;
};

export const CustomIconPropsGetter = (
  options: withCustomCheckedIconOptions,
) => {
  const {
    icon: defaultIcon,
    checkedIcon: defaultCheckedIcon,
    indeterminateIcon: defaultIndeterminateIcon,
  } = options;

  return (props: withCustomCheckedReturnProps) => {
    const {
      size,
      icon: iconProp,
      checkedIcon: checkedIconProp,
      indeterminateIcon: indeterminateIconProp,
    } = props;

    const resultProps: withCustomCheckedIconOptions<ReactNode> = {};

    const icon = getResultIcon(iconProp, size, defaultIcon);
    if (icon) resultProps.icon = icon;

    const checkedIcon = getResultIcon(
      checkedIconProp,
      size,
      defaultCheckedIcon,
    );
    if (checkedIcon) resultProps.checkedIcon = checkedIcon;

    const indeterminateIcon = getResultIcon(
      indeterminateIconProp,
      size,
      defaultIndeterminateIcon,
    );
    if (indeterminateIcon) resultProps.indeterminateIcon = indeterminateIcon;

    return resultProps;
  };
};

function getResultIcon(
  iconProp: React.ReactNode,
  size?: RcIconSize,
  defaultIcon?: SvgSymbol | React.ReactNode,
) {
  let icon;

  if (iconProp) {
    if (isRcElement(iconProp, ['RcIcon']) && size) {
      icon = cloneProps(iconProp, size);
    } else {
      icon = iconProp;
    }
  }

  if (!icon && defaultIcon) {
    icon = isValidElement(defaultIcon) ? (
      cloneProps(defaultIcon, size)
    ) : (
      <RcIcon symbol={defaultIcon as SvgSymbol} size={size} />
    );
  }
  return icon;
}

function cloneProps(iconProp: React.ReactNode, size?: RcIconSize): any {
  return React.cloneElement(iconProp as JSX.Element, {
    size,
  });
}
