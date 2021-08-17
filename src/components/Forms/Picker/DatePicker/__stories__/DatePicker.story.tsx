import { Meta, Story } from '@storybook/react/types-6-0';
import moment from 'moment';
import React, { ComponentProps, useMemo, useState } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../../storybook';
import { RcTypography } from '../../../../Typography';
import { RcDatePicker } from '../DatePicker';

export default {
  title: '🚀 Cleanup Components/Forms/DatePicker',
  component: RcDatePicker,
  argTypes: {
    ...sortInDocTable<keyof DatePickerProps>([
      'size',
      'label',
      'value',
      'placeholder',
      'disabled',
      'disableFuture',
      'disablePast',
      'max',
      'min',
      'locale',
      'fullWidth',
      'helperText',
      'todayButtonText',
      'formatString',
      'renderDay',
      'shouldDisableDate',
      'clearBtn',
      'clearButtonProps',
    ]),
    ...notControlInDocTable<keyof DatePickerProps>([]),
    ...notShowInDocTable<keyof DatePickerProps>(['minDate', 'maxDate', 'date']),
  },
} as Meta;

type DatePickerProps = ComponentProps<typeof RcDatePicker>;

export const DatePicker: Story<DatePickerProps> = ({ value, ...args }) => {
  switchToControlKnobs();

  const [selectedDate, handleDateChange] = useState<Date | null | undefined>(
    value,
  );

  const handleChange = (date: Date | null) => {
    handleDateChange(date);
  };

  return (
    <RcDatePicker value={selectedDate} onChange={handleChange} {...args} />
  );
};

DatePicker.storyName = 'DatePicker';

DatePicker.args = {
  label: RcDatePicker.defaultProps!.label,
  value: new Date('2019-11-15'),
  placeholder: 'when?',
};

DatePicker.argTypes = {};

DatePicker.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/pickers/',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

// * if you want to custom moment option, you need set that global by yourself
moment.locale('zh-cn', {
  months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split(
    '_',
  ),
  weekdaysShort: '(日)_(一)_(二)_(三)_(四)_(五)_(六)'.split('_'),
});

type DatePickerExamplesProps = ComponentProps<typeof RcDatePicker>;

export const DatePickerExamples: Story<DatePickerProps> = () => {
  const [selectedDate, handleDateChange] = useState<Date | null>(
    new Date('2019-11-15'),
  );

  const handleChange = (date: Date | null) => {
    handleDateChange(date);
  };

  const screenReaderProps = useMemo(
    () => ({
      getMonthYearAriaLabel: (monthLabel?: string, expanded?: boolean) => {
        return expanded
          ? `${monthLabel} press enter to access date selector`
          : `${monthLabel}
       press enter to access year selector`;
      },
      getYearAriaLabel: (year?: string, selected?: boolean) => {
        return selected
          ? `Year ${year}, selected. Use arrow keys to navigate`
          : `Year ${year}, press Enter to select and continue`;
      },
      getSwitchMonthAriaLabel: (isNext?: boolean, currentMonth?: string) => {
        return isNext
          ? `Go to next month, current month ${currentMonth}`
          : `Go to previous month, current month ${currentMonth}`;
      },
      getBackToTodayAriaLabel: () => {
        return `Select today as date, press enter to select and return to form`;
      },
      getDayAriaLabel: (selected?: boolean, day?: string) => {
        return selected
          ? `${day}, selected. Use arrow keys to navigate and choose another date`
          : `${day}, press enter to select and return to form. Use arrow keys to navigate to another date`;
      },
    }),
    [],
  );

  return (
    <>
      <RcDatePicker
        placeholder="when?"
        inputProps={{
          announcementText: 'press enter or space to change the time',
        }}
        PopoverProps={{
          PaperProps: {
            'aria-label':
              'press Enter to save the time or use Tab to make further changes or Escape to cancel',
          },
        }}
        value={selectedDate}
        onChange={handleChange}
        onClick={(e) => console.log('click', e)}
        onClear={(e: any) => console.log('clear', e)}
        onClose={() => console.log('close')}
        onKeyDown={(e) => console.log('keydown', e)}
        locale="en"
        gutterBottom
      />
      <RcDatePicker
        screenReaderProps={screenReaderProps}
        value={selectedDate}
        onChange={handleChange}
        placeholder="when?"
        locale="en"
        fullWidth
        clearButtonProps={{ title: 'clear' }}
        gutterBottom
      />
      <br />
      <RcTypography variant="display1" color="neutral.f06">
        Locale
      </RcTypography>
      <RcDatePicker
        clearBtn={false}
        screenReaderProps={screenReaderProps}
        inputProps={{
          'aria-describedby': 'text-field-today',
        }}
        value={selectedDate}
        placeholder="when?"
        onChange={handleChange}
        onClick={(e) => console.log('click', e)}
        onClear={(e: any) => console.log('clear', e)}
        onClose={() => console.log('close')}
        onKeyDown={(e) => console.log('keydown', e)}
        locale="zh-cn"
        todayButtonText="今天"
        label="日期"
        helperText="选择日期"
      />
    </>
  );
};

DatePickerExamples.storyName = 'DatePicker Examples';
