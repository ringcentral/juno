import React from 'react';

import {
  css,
  flexCenterStyle,
  radius,
  RcThemedStyled,
  typography,
} from '../../../foundation';
import { RcAlertProps } from '../Alert';
import { RcAlertClasses, RcAlertColors, RcAlertSpacings } from '../utils';

const textColor: RcThemedStyled<RcAlertProps> = ({ severity }) =>
  RcAlertColors[severity!].text;

const backgroundColor: RcThemedStyled<RcAlertProps> = ({ severity }) =>
  RcAlertColors[severity!].background;

const rootSpacing: RcThemedStyled<RcAlertProps> = ({ size }) =>
  RcAlertSpacings[size!];

export const EmptyIcon = <></>;

export const AlertStyle: RcThemedStyled<RcAlertProps, any> = ({
  align,
  square,
  icon,
}) => {
  const isEmpty = icon === undefined;

  return css`
    &.${RcAlertClasses.root} {
      background-color: ${backgroundColor};
      display: flex;
      padding: ${rootSpacing};
      word-break: break-word;
      border-radius: ${square && radius('zero')};
    }

    .${RcAlertClasses.message} {
      ${typography('body1')};
      color: ${textColor};
      text-align: ${align};
      flex: 1 1 auto;
      padding: 0;
    }

    .${RcAlertClasses.icon} {
      ${flexCenterStyle};
      ${isEmpty && `margin: 0`};
      padding: 0;
    }
  `;
};
