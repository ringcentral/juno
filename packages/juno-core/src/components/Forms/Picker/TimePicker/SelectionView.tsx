import React, { FunctionComponent } from 'react';

import { StyledSelectionItem, StyledSelectionView } from './styles';
import { RcClickFiledStyleProps } from './TimePicker';
import { HALF_DAY_HOURS, parseNumberToString } from './utils';

type SelectionViewProps = {
  /** dataSource, 12-hour, 24-hour or minutes */
  source: number[];
  /** selected value of source */
  value: number;
  /** handle user change value */
  onClick: (value: number) => void;
  /** automationId, used for test */
  automationId?: string;
  /** min time */
  min?: number;
  /** max time */
  max?: number;
} & RcClickFiledStyleProps;

const SelectionView: FunctionComponent<SelectionViewProps> = (props) => {
  const {
    source,
    onClick,
    value,
    automationId,
    size,
    min: minProp,
    max: maxProp,
    isTwelveHourSystem,
  } = props;

  const min =
    minProp !== undefined && isTwelveHourSystem
      ? minProp % HALF_DAY_HOURS
      : minProp;

  const max =
    maxProp !== undefined && isTwelveHourSystem
      ? maxProp % HALF_DAY_HOURS
      : maxProp;

  const handleClick = (toValue: number, disabled: boolean) => {
    if (disabled) {
      return undefined;
    }
    return () => onClick(toValue);
  };

  const showValue = parseNumberToString(value, isTwelveHourSystem);

  return (
    <StyledSelectionView size={size}>
      {source.map((v) => {
        const disabled = !!(
          (max !== undefined && v > max) ||
          (min !== undefined && v < min)
        );
        const itemShowValue = parseNumberToString(v, isTwelveHourSystem);

        return (
          <StyledSelectionItem
            disabled={disabled}
            radius="round"
            wrapperSize={size}
            key={v}
            onClick={handleClick(v, disabled)}
            selected={itemShowValue === showValue}
            data-test-automation-id={
              automationId && `${automationId}-${itemShowValue}`
            }
            itemLength={source.length}
          >
            <>{itemShowValue}</>
          </StyledSelectionItem>
        );
      })}
    </StyledSelectionView>
  );
};

SelectionView.displayName = 'SelectionView';

export { SelectionView };
export type { SelectionViewProps };
