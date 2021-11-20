import { Meta, Story } from '@storybook/react';
import React, { ComponentProps, useState } from 'react';

import { spacing, styled } from '../../../../../foundation';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../../storybook';
import { Title } from '../../../../../storybook/components';
import { RcButton } from '../../../../Buttons/Button';
import { RcTypography } from '../../../../Typography';
import { RcTimePicker, RcTimePickerProps } from '../TimePicker';
import { getTimestampFromHourAndMin } from '../utils';

export default {
  title: '🚀 Cleanup Components/Forms/TimePicker',
  component: RcTimePicker,
  argTypes: {
    ...sortInDocTable<keyof TimePickerProps>([
      'size',
      'label',
      'value',
      'placeholder',
      'disabled',
      'max',
      'min',
      'fullWidth',
      'helperText',
      'clearBtn',
      'clearButtonProps',
    ]),
    ...notControlInDocTable<keyof TimePickerProps>([]),
    ...notShowInDocTable<keyof TimePickerProps>(['times']),
  },
} as Meta;

type TimePickerProps = ComponentProps<typeof RcTimePicker>;

export const TimePicker: Story<TimePickerProps> = ({
  value: valueProp,
  ...args
}) => {
  switchToControlKnobs();

  const [value, setValue] = useState<number | Date | undefined>(valueProp);

  const handleChange = (time: number) => {
    console.log('time', time);
    setValue(time);
  };

  return (
    <RcTimePicker
      value={value}
      onChange={handleChange}
      {...args}
      {...accessibilityProps}
    />
  );
};

TimePicker.storyName = 'TimePicker';

TimePicker.args = {
  label: 'Time',
  value: 58500000,
  placeholder: "what's time?",
};

TimePicker.argTypes = {
  ...notControlInDocTable<keyof TimePickerProps>([]),
};

TimePicker.parameters = {
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

const accessibilityProps = {
  HourPickerProps: {
    'aria-describedby': 'this is hour button',
    getScreenReaderLabel: (hour: string) =>
      `Hour is ${hour}, use up or down arrow keys to change the value`,
  } as RcTimePickerProps['HourPickerProps'],
  MinutePickerProps: {
    'aria-describedby': 'this is min button',
    getScreenReaderLabel: (minute: string) =>
      `Minute is ${minute}, use up or down arrow keys to change the value`,
  } as RcTimePickerProps['MinutePickerProps'],
  PeriodToggleProps: {
    'aria-describedby': 'this is period button',
    getScreenReaderLabel: (period: string) =>
      `Period is ${period}, use up or down arrow keys to switch the value`,
  } as RcTimePickerProps['PeriodToggleProps'],
};

export const TimePickerExamples: Story<TimePickerProps> = () => {
  // 58500000
  // new Date('2021-01-20T01:30:00.000Z'),
  const [times1, setTimes1] = useState<number>(58500000);
  const [times2, setTimes2] = useState<Date>();
  const [times3, setTimes3] = useState<number>();
  const [times4, setTimes4] = useState<Date>();

  const handleChange1 = (times: number) => {
    console.log('time', times);
    setTimes1(times);
  };

  const handleChange2 = (DateTime: Date) => {
    console.log('DateTime', DateTime);
    setTimes2(DateTime);
  };

  const handleChange3 = (times: number) => {
    console.log('time', times);
    setTimes3(times);
  };

  const handleChange4 = (DateTime: Date) => {
    console.log('DateTime', DateTime);
    setTimes4(DateTime);
  };

  return (
    <>
      <RcTypography color="interactive.f01">Timestamp Mode</RcTypography>
      <br />
      <RcTimePicker
        value={times1}
        onChange={handleChange1}
        inputProps={{
          announcementText: 'press enter or space to change the time',
        }}
        gutterBottom
        placeholder="what's time?"
        PopoverProps={{
          PaperProps: {
            'aria-label':
              'press Enter to save the time or use Tab to make further changes or Escape to cancel',
          },
        }}
        {...accessibilityProps}
      />
      <RcTypography color="interactive.f01">Date Mode</RcTypography>
      <br />
      <RcTimePicker
        value={times2}
        onChange={handleChange2}
        dateMode
        placeholder="what's time?"
        inputProps={{
          'data-test-automation-id': 'eventEditEndTimePicker',
          announcementText: 'press enter or space to change the time',
        }}
        PopoverProps={{
          PaperProps: {
            'aria-label':
              'press Enter to save the time or use Tab to make further changes or Escape to cancel',
          },
        }}
        InputProps={{
          fullWidth: true,
          required: true,
        }}
        fullWidth
        {...accessibilityProps}
        isTwelveHourSystem
      />
      <RcTypography color="danger.f02">
        if that is date format, we couldn't reset to undefined, that will miss
        that date information.
      </RcTypography>
      <br />
      <br />
      <RcTypography variant="headline1" color="neutral.f06">
        Has min and max
      </RcTypography>
      <br />
      <div style={{ display: 'flex' }}>
        <div>
          <RcTypography color="interactive.f01">Timestamp Mode</RcTypography>
          <br />
          <RcTimePicker
            value={times3}
            placeholder="what's time?"
            onChange={handleChange3}
            inputProps={{
              announcementText: 'press enter or space to change the time',
            }}
            PopoverProps={{
              PaperProps: {
                'aria-label':
                  'press Enter to save the time or use Tab to make further changes or Escape to cancel',
              },
            }}
            min={58500000} // 16:10
            max={66606000} // 18:31
            {...accessibilityProps}
          />
        </div>
        <div style={{ marginLeft: '30px' }}>
          <RcTypography color="interactive.f01">Date Mode</RcTypography>
          <br />
          <RcTimePicker
            value={times4}
            placeholder="what's time?"
            onChange={handleChange4}
            min={new Date('2020/01/01 16:10')}
            max={new Date('2020/01/01 18:31')}
            dateMode
            inputProps={{
              'data-test-automation-id': 'eventEditEndTimePicker',
              announcementText: 'press enter or space to change the time',
            }}
            PopoverProps={{
              PaperProps: {
                'aria-label':
                  'press Enter to save the time or use Tab to make further changes or Escape to cancel',
              },
            }}
            InputProps={{
              fullWidth: true,
              required: true,
            }}
            {...accessibilityProps}
          />
        </div>
      </div>
      <br />
      <br />
      <RcTypography variant="headline1" color="neutral.f06">
        Twelve Hour System
      </RcTypography>
      <br />
      <div style={{ display: 'flex' }}>
        <div>
          <RcTypography color="interactive.f01">Timestamp Mode</RcTypography>
          <br />
          <RcTimePicker
            value={times3}
            placeholder="what's time?"
            onChange={handleChange3}
            isTwelveHourSystem
            inputProps={{
              announcementText: 'press enter or space to change the time',
            }}
            PopoverProps={{
              PaperProps: {
                'aria-label':
                  'press Enter to save the time or use Tab to make further changes or Escape to cancel',
              },
            }}
            min={58500000} // 16:10
            max={66606000} // 18:31
            {...accessibilityProps}
          />
        </div>
        <div style={{ marginLeft: '30px' }}>
          <RcTypography color="interactive.f01">Date Mode</RcTypography>
          <br />
          <RcTimePicker
            value={times4}
            placeholder="what's time?"
            onChange={handleChange4}
            isTwelveHourSystem
            min={new Date('2020/01/01 16:10')}
            max={new Date('2020/01/01 18:31')}
            dateMode
            inputProps={{
              'data-test-automation-id': 'eventEditEndTimePicker',
              announcementText: 'press enter or space to change the time',
            }}
            PopoverProps={{
              PaperProps: {
                'aria-label':
                  'press Enter to save the time or use Tab to make further changes or Escape to cancel',
              },
            }}
            InputProps={{
              fullWidth: true,
              required: true,
            }}
            {...accessibilityProps}
          />
        </div>
      </div>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  > * + * {
    margin-left: ${spacing(2)};
  }
`;

export const TimePickerChangeRange: Story<TimePickerProps> = () => {
  // new Date('2021-01-20T01:30:00.000Z'),
  const [times, setTimes] = useState<number>(38500000);
  const [times2, setTimes2] = useState<number>(38500000);
  const [min, setMin] = useState(38500000);
  const [max, setMax] = useState(58500000);

  const [isTwelveHourSystem, setIsTwelveHourSystem] = useState(false);

  const minButtons = [
    { hour: 5, minute: 15 },
    { hour: 16, minute: 0 },
    { hour: 16, minute: 15 },
  ];

  const maxButtons = [
    { hour: 11, minute: 15 },
    { hour: 16, minute: 0 },
    { hour: 19, minute: 0 },
    { hour: 19, minute: 15 },
  ];

  return (
    <>
      <Wrapper>
        <div>
          <Title>Min and Max</Title>
          <RcTimePicker
            value={times}
            onChange={(value: number) => {
              console.log('time', value);
              setTimes(value);
            }}
            min={min}
            max={max}
            isTwelveHourSystem={isTwelveHourSystem}
            gutterBottom
            placeholder="what's time?"
            PopoverProps={{
              PaperProps: {
                'aria-label':
                  'press Enter to save the time or use Tab to make further changes or Escape to cancel',
              },
            }}
            {...accessibilityProps}
            inputProps={{
              announcementText: 'press enter or space to change the time',
            }}
          />
        </div>
        <div>
          <Title>Only min</Title>
          <RcTimePicker
            value={times2}
            onChange={(value: number) => {
              console.log('time', value);
              setTimes2(value);
            }}
            min={min}
            isTwelveHourSystem={isTwelveHourSystem}
            gutterBottom
            placeholder="what's time?"
            PopoverProps={{
              PaperProps: {
                'aria-label':
                  'press Enter to save the time or use Tab to make further changes or Escape to cancel',
              },
            }}
            {...accessibilityProps}
            inputProps={{
              announcementText: 'press enter or space to change the time',
            }}
          />
        </div>
      </Wrapper>
      <br />
      <RcButton
        color="highlight.b03"
        onClick={() => {
          setIsTwelveHourSystem(!isTwelveHourSystem);
        }}
      >
        switch to twelve hour system
      </RcButton>
      <br />
      <br />
      <Wrapper>
        {minButtons.map((x) => {
          const toSetTimestamp = getTimestampFromHourAndMin(x);

          const showValue = `reset min to ${x.hour}:${x.minute}`;

          return (
            <RcButton
              key={showValue}
              disabled={max < toSetTimestamp}
              onClick={() => {
                setMin(toSetTimestamp);
              }}
            >
              {showValue}
            </RcButton>
          );
        })}
      </Wrapper>
      <br />
      <Wrapper>
        {maxButtons.map((x) => {
          const toSetTimestamp = getTimestampFromHourAndMin(x);

          const showValue = `reset max to ${x.hour}:${x.minute}`;

          return (
            <RcButton
              key={showValue}
              disabled={min > toSetTimestamp}
              onClick={() => {
                setMax(toSetTimestamp);
              }}
            >
              {showValue}
            </RcButton>
          );
        })}
      </Wrapper>
    </>
  );
};

TimePickerExamples.storyName = 'TimePicker Examples';
