import React, { ComponentProps, useState } from 'react';

import { Meta, Story } from '@storybook/react';

import { Add, BubbleLines, BubbleLinesBorder } from '../../../../../icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
} from '../../../../../storybook';
import { RcIcon } from '../../../../Icon';
import { RcListItem, RcListItemIcon, RcListItemText } from '../../../../List';
import { RcTypography } from '../../../../Typography';
import { RcPlainSelect } from '../PlainSelect';

export default {
  title: '🚀 Cleanup Components/Selects/PlainSelect',
  component: RcPlainSelect,
  argTypes: {
    ...sortInDocTable<keyof PlainSelectProps>([
      'variant',
      'size',
      'virtualize',
      'disabled',
      'fullWidth',
      'autoFocus',
    ]),
    ...notControlInDocTable<keyof PlainSelectProps>(['value']),
    ...notShowInDocTable<keyof PlainSelectProps>([]),
  },
} as Meta;

const menuList = [
  { id: 1, value: 'One', symbol: BubbleLinesBorder },
  { id: 2, value: 'Two', symbol: BubbleLines },
  { id: 3, value: 'Three', symbol: Add },
];

type PlainSelectProps = ComponentProps<typeof RcPlainSelect>;

export const PlainSelect: Story<PlainSelectProps> = ({ ...args }) => {
  const [value, setValue] = useState<number>(1);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const id = Number(event.target.value);
    setValue(id);
  };

  return (
    <RcPlainSelect
      {...args}
      value={value}
      onChange={handleChange}
      data-test-automation-id="demo"
      onOpen={(e) => {
        console.log('open', e);
      }}
      onClose={(e) => {
        console.log(e);
      }}
    >
      {menuList.map((item) => (
        <RcListItem value={item.id} key={item.id}>
          {item.value}
        </RcListItem>
      ))}
    </RcPlainSelect>
  );
};

PlainSelect.storyName = 'PlainSelect';

PlainSelect.args = {};
PlainSelect.parameters = {
  tags: [
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

export const PlainSelectExamples: Story<PlainSelectProps> = () => {
  const [value, setValue] = useState<number>(1);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const id = Number(event.target.value);
    setValue(id);
  };

  return (
    <>
      <RcTypography color="neutral.f04">text</RcTypography>
      <RcPlainSelect value={value} onChange={handleChange} variant="text">
        {menuList.map((item) => (
          <RcListItem value={item.id} key={item.id}>
            {item.value}
          </RcListItem>
        ))}
      </RcPlainSelect>
      <br />
      <br />
      <RcTypography color="neutral.f04">plain</RcTypography>
      <RcPlainSelect value={value} onChange={handleChange} variant="plain">
        {menuList.map((item) => (
          <RcListItem value={item.id} key={item.id}>
            <RcListItemIcon color="inherit">
              <RcIcon symbol={item.symbol} />
            </RcListItemIcon>
            <RcListItemText
              primaryTypographyProps={{ color: 'inherit' }}
              primary={item.value}
            />
          </RcListItem>
        ))}
      </RcPlainSelect>
      <br />
      <br />
      <RcTypography color="neutral.f04">round</RcTypography>
      <RcPlainSelect value={value} onChange={handleChange} variant="round">
        {menuList.map((item) => (
          <RcListItem value={item.id} key={item.id}>
            <RcIcon symbol={item.symbol} />
          </RcListItem>
        ))}
      </RcPlainSelect>
      <br />
      <br />
      <RcTypography color="neutral.f04">plainIcon</RcTypography>
      <RcPlainSelect value={value} onChange={handleChange} variant="plainIcon">
        {menuList.map((item) => (
          <RcListItem value={item.id} key={item.id}>
            <RcIcon symbol={item.symbol} />
          </RcListItem>
        ))}
      </RcPlainSelect>
    </>
  );
};

PlainSelectExamples.storyName = 'PlainSelect Examples';
