import React, {
  ComponentProps,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import moment from 'moment';

import {
  isTestEnv,
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
  Title,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import { RcButton } from '../../../../Buttons';
import { RcGrid } from '../../../../Grid';
import { RcTypography } from '../../../../Typography';
import { RcTimePicker } from '../../TimePicker';
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
  const ref = useRef(null);

  const [date, setDate] = useState<Date | null | undefined>(value);

  useEffect(() => {
    console.log(ref);
  }, []);

  return <RcDatePicker ref={ref} value={date} onChange={setDate} {...args} />;
};

DatePicker.storyName = 'DatePicker';

DatePicker.args = {
  label: RcDatePicker.defaultProps!.label,
  value: isTestEnv ? new Date('2019-11-15') : undefined,
  placeholder: 'when?',
};

DatePicker.argTypes = {};

DatePicker.parameters = {
  tags: [
    {
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/master/commits/5f99d35470270f99f34bb2db645816331d1bdf7a/files/8ffaf9bc-6939-4ef9-9bd1-6aa5b460e2ae/layers/068C0B4C-7869-4F18-9BA3-BDD5C5AE7DC1',
    },
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

const minDate = new Date();

// TODO: need fix snapshot mock with date
if (!isTestEnv) {
  minDate.setDate(minDate.getDate() + 1);
}

const maxDate = new Date('2025-11-15');

export const DatePickerWithRange: Story<DatePickerProps> = ({
  value,
  ...args
}) => {
  switchToControlKnobs();

  const [date, setDate] = useState<Date | null | undefined>(value);

  return (
    <RcGrid container spacing={4}>
      <RcGrid item>
        <Title>Min</Title>
        <RcDatePicker min={minDate} {...args} />
      </RcGrid>
      <RcGrid item>
        <Title>Max</Title>
        <RcDatePicker max={maxDate} {...args} />
      </RcGrid>
      <RcGrid item>
        <Title>Min and Max</Title>
        <RcDatePicker min={minDate} max={maxDate} {...args} />
      </RcGrid>
      <RcGrid item>
        <Title>disablePast</Title>
        <RcDatePicker disablePast {...args} />
      </RcGrid>
      <RcGrid item>
        <Title>disableFuture</Title>
        <RcDatePicker disableFuture {...args} />
      </RcGrid>
      <RcGrid item>
        <Title>init value invalid(2019-11-16~2020-11-20)</Title>
        <RcDatePicker
          min={new Date('2019-11-16')}
          max={new Date('2020-11-20')}
          value={date}
          onChange={setDate}
          {...args}
        />
        <br /> <br />
        <RcButton
          onClick={() => {
            setDate(new Date('2019-11-14'));
          }}
        >
          set past date of min(will auto reset to valid min range)
        </RcButton>
        <br /> <br />
        <RcButton
          onClick={() => {
            setDate(new Date('2020-11-25'));
          }}
        >
          set future date of max(will auto reset to valid max range)
        </RcButton>
      </RcGrid>
    </RcGrid>
  );
};

DatePickerWithRange.storyName = 'DatePicker with range';

DatePickerWithRange.args = {
  label: RcDatePicker.defaultProps!.label,
  value: new Date('2019-11-15'),
  placeholder: 'when?',
};

DatePickerWithRange.argTypes = {};

// * if you want to custom moment option, you need set that global by yourself
moment.locale('zh-cn', {
  months:
    '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split(
      '_',
    ),
  weekdaysShort: '(日)_(一)_(二)_(三)_(四)_(五)_(六)'.split('_'),
});

export const DatePickerExamples: Story<DatePickerProps> = () => {
  const [date, setDate] = useState<Date | null>(new Date('2019-11-15'));

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
        value={date}
        onChange={setDate}
        onClick={(e) => console.log('click', e)}
        onClear={(e: any) => console.log('clear', e)}
        onClose={() => console.log('close')}
        onKeyDown={(e) => console.log('keydown', e)}
        locale="en"
        gutterBottom
      />
      <RcDatePicker
        screenReaderProps={screenReaderProps}
        value={date}
        onChange={setDate}
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
        value={date}
        placeholder="when?"
        onChange={setDate}
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

export const DatePickerWithTimePick: Story<DatePickerProps> = ({
  value,
  ...args
}) => {
  switchToControlKnobs();
  const ref = useRef(null);

  const [date, setDate] = useState<Date | null>(value || null);
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    console.log(ref);
  }, []);

  return (
    <>
      <RcDatePicker ref={ref} value={date} onChange={setDate} {...args} />
      <br />
      <RcTimePicker dateMode value={time} onChange={(v) => setTime(v)} />
    </>
  );
};

DatePickerWithTimePick.storyName = 'DatePicker with TimePick';
