import React, { ComponentProps, FunctionComponent, useState } from 'react';

import {
  RcBox,
  RcGrid,
  RcIcon,
  RcListItem,
  RcListItemIcon,
  RcListItemText,
  RcPlainSelect,
  RcTypography,
} from '@ringcentral/juno';
import { Add, BubbleLines, BubbleLinesBorder } from '@ringcentral/juno-icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  paletteChoice,
  sortInDocTable,
  Title,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Selects/PlainSelect',
  component: RcPlainSelect,
  argTypes: {
    color: {
      options: paletteChoice,
      control: {
        type: 'select',
      },
    },
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
    <RcGrid container>
      <RcGrid item xs={6}>
        <Title>controlled mode</Title>
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
      </RcGrid>
      <RcGrid item xs={6}>
        <Title>uncontrolled mode</Title>
        <RcPlainSelect
          {...args}
          defaultValue={1}
          onChange={(e, v) => {
            console.log('value change', e, v);
          }}
          data-test-automation-id="demo"
        >
          {menuList.map((item) => (
            <RcListItem value={item.id} key={item.id}>
              {item.value}
            </RcListItem>
          ))}
        </RcPlainSelect>
      </RcGrid>
    </RcGrid>
  );
};

PlainSelect.storyName = 'PlainSelect';

PlainSelect.args = {};
PlainSelect.parameters = {
  tags: [
    {
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/master/commits/5f4a29ef1221c8ef2a1e199b44a17b202b96e5df/files/8ffaf9bc-6939-4ef9-9bd1-6aa5b460e2ae/layers/3D1C7D1B-2973-4396-AFA9-349A5D2F2393',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

const PlainSelectComponent: FunctionComponent<Partial<PlainSelectProps>> = ({
  color,
}) => {
  const [value, setValue] = useState<number>(1);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const id = Number(event.target.value);
    setValue(id);
  };

  return (
    <div>
      <RcTypography color="neutral.f04">text</RcTypography>
      <RcPlainSelect
        color={color}
        value={value}
        onChange={handleChange}
        variant="text"
      >
        {menuList.map((item) => (
          <RcListItem value={item.id} key={item.id}>
            {item.value}
          </RcListItem>
        ))}
      </RcPlainSelect>
      <br />
      <br />
      <RcTypography color="neutral.f04">plain</RcTypography>
      <RcPlainSelect
        color={color}
        value={value}
        onChange={handleChange}
        variant="plain"
      >
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
      <RcPlainSelect
        color={color}
        value={value}
        onChange={handleChange}
        variant="round"
      >
        {menuList.map((item) => (
          <RcListItem value={item.id} key={item.id}>
            <RcIcon symbol={item.symbol} />
          </RcListItem>
        ))}
      </RcPlainSelect>
      <br />
      <br />
      <RcTypography color="neutral.f04">plainIcon</RcTypography>
      <RcPlainSelect
        color={color}
        value={value}
        onChange={handleChange}
        variant="plainIcon"
      >
        {menuList.map((item) => (
          <RcListItem value={item.id} key={item.id}>
            <RcIcon symbol={item.symbol} />
          </RcListItem>
        ))}
      </RcPlainSelect>
    </div>
  );
};

export const PlainSelectExamples: Story<PlainSelectProps> = () => {
  return (
    <RcBox display="flex">
      <PlainSelectComponent />
      <PlainSelectComponent color="success.f11" />
    </RcBox>
  );
};

PlainSelectExamples.storyName = 'PlainSelect Examples';
