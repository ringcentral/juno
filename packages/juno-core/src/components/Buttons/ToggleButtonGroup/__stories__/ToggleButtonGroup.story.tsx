import React, { ComponentProps } from 'react';

import {
  RcGrid,
  RcToggleButton,
  RcToggleButtonGroup,
  RcToggleButtonGroupProps,
  RcToggleButtonProps,
} from '@ringcentral/juno';
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
} from '@ringcentral/juno-icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
  Title,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Buttons/ToggleButtonGroup',
  component: RcToggleButtonGroup,
  argTypes: {
    ...sortInDocTable<keyof ToggleButtonGroupProps>([
      'size',
      'variant',
      'orientation',
    ]),
    ...notControlInDocTable<keyof ToggleButtonGroupProps>(['exclusive']),
    ...notShowInDocTable<keyof ToggleButtonGroupProps>([]),
  },
} as Meta;

type ToggleButtonGroupProps = ComponentProps<typeof RcToggleButtonGroup>;

export const ToggleButtonGroup: Story<ToggleButtonGroupProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();
  const [alignment, setAlignment] = React.useState<string | null>('left');

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <RcToggleButtonGroup
      {...args}
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <RcToggleButton
        value="left"
        aria-label="left aligned"
        symbol={AlignLeft}
      />
      <RcToggleButton
        value="center"
        aria-label="centered"
        symbol={AlignCenter}
      />
      <RcToggleButton
        symbol={AlignRight}
        value="right"
        aria-label="right aligned"
        disabled
      />
      <RcToggleButton
        symbol={AlignJustify}
        value="justify"
        aria-label="justified"
      />
    </RcToggleButtonGroup>
  );
};

ToggleButtonGroup.storyName = 'ToggleButtonGroup';

ToggleButtonGroup.args = {};

ToggleButtonGroup.parameters = {
  tags: [
    {
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/3c7760bb-8d54-4def-9b30-a50638e618db/commits/4bed494768a18c9e3d10d11dec38590203d12fd3/files/8ffaf9bc-6939-4ef9-9bd1-6aa5b460e2ae/layers/450E7402-70DD-4134-9F26-27B08F55459B?mode=design',
    },
    {
      name: 'Mui',
      href: 'https://material-ui.com/api/toggle-button-group/',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

const orientations: RcToggleButtonGroupProps['orientation'][] = [
  'horizontal',
  'vertical',
];

export const ToggleButtonGroupExamples: Story<ToggleButtonGroupProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();
  const [alignment, setAlignment] = React.useState<string | null>('left');
  const [alignments, setAlignments] = React.useState<string[]>([
    'left',
    'right',
  ]);

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };

  const handleAlignments = (
    event: React.MouseEvent<HTMLElement>,
    newAlignments: string[],
  ) => {
    setAlignments(newAlignments);
  };

  const props: ({ groupTitle: string } & RcToggleButtonProps)[] = [
    { groupTitle: 'Standard', variant: 'standard' },
    { groupTitle: 'Box', variant: 'box' },
  ];

  return (
    <RcGrid container>
      {orientations.map((orientation) => (
        <RcGrid item xs={6} key={orientation} container>
          <RcGrid item xs={6}>
            <Title>Exclusive selection</Title>
            {props.map(({ groupTitle, variant }) => (
              <React.Fragment key={groupTitle}>
                <Title variant="title1">{groupTitle}</Title>
                <RcToggleButtonGroup
                  {...args}
                  orientation={orientation}
                  value={alignment}
                  exclusive
                  variant={variant}
                  onChange={handleAlignment}
                  aria-label="text alignment"
                >
                  <RcToggleButton
                    value="left"
                    aria-label="left aligned"
                    symbol={AlignLeft}
                    title="left aligned"
                    useRcTooltip
                  />
                  <RcToggleButton
                    value="center"
                    aria-label="centered"
                    symbol={AlignCenter}
                    title="centered"
                    useRcTooltip
                  />
                  <RcToggleButton
                    value="right"
                    aria-label="right aligned"
                    symbol={AlignRight}
                    title="right aligned"
                    useRcTooltip
                  />
                  <RcToggleButton
                    value="justify"
                    aria-label="justified"
                    symbol={AlignJustify}
                    title="justified"
                    useRcTooltip
                  />
                </RcToggleButtonGroup>
              </React.Fragment>
            ))}
          </RcGrid>
          <RcGrid item xs={6}>
            <Title>Multiple selection</Title>
            {props.map(({ groupTitle, variant }) => (
              <React.Fragment key={groupTitle}>
                <Title variant="title1">{groupTitle}</Title>
                <RcToggleButtonGroup
                  {...args}
                  orientation={orientation}
                  value={alignments}
                  variant={variant}
                  onChange={handleAlignments}
                  aria-label="text alignment"
                >
                  <RcToggleButton
                    value="left"
                    aria-label="left aligned"
                    symbol={AlignLeft}
                  />
                  <RcToggleButton
                    value="center"
                    aria-label="centered"
                    symbol={AlignCenter}
                  />
                  <RcToggleButton
                    value="right"
                    aria-label="right aligned"
                    symbol={AlignRight}
                  />
                  <RcToggleButton
                    value="justify"
                    aria-label="justified"
                    symbol={AlignJustify}
                  />
                </RcToggleButtonGroup>
                <br />
                <br />
              </React.Fragment>
            ))}
          </RcGrid>
        </RcGrid>
      ))}
    </RcGrid>
  );
};

ToggleButtonGroupExamples.storyName = 'ToggleButtonGroup Examples';

ToggleButtonGroupExamples.args = {};

ToggleButtonGroupExamples.argTypes = {
  ...notControlInDocTable<keyof ToggleButtonGroupProps>([
    'variant',
    'orientation',
  ]),
};
