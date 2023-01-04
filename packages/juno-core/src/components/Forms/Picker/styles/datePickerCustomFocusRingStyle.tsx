import {
  css,
  focusVisible,
  palette2,
  RcThemedStyled,
  shadowBorder,
  UnitMap,
} from '../../../../foundation';
import { RcDatePickerSize } from '../DatePicker';
import { PickerBaseIconButtonProps } from './PickerBaseIconButton';

export const RcPickerFocusInsetBorderSizes: UnitMap<RcDatePickerSize, number> =
  {
    small: 1,
    medium: 2,
  };

export const datePickerCustomFocusRingStyle: RcThemedStyled<
  PickerBaseIconButtonProps,
  any
> = ({ size, selected, radius = 'circle' }) => {
  const focusInsetBorderSizes = RcPickerFocusInsetBorderSizes[size!];

  return (
    selected &&
    css`
      ${focusVisible} {
        ${shadowBorder(
          radius,
          palette2('neutral', 'b01'),
          true,
          focusInsetBorderSizes,
        )}
        &:after {
          top: ${focusInsetBorderSizes}px;
          right: ${focusInsetBorderSizes}px;
          bottom: ${focusInsetBorderSizes}px;
          left: ${focusInsetBorderSizes}px;
        }
        &:before {
          background-color: unset !important;
        }
      }
    `
  );
};
