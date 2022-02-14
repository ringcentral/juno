import React, { ComponentProps, useState } from 'react';

import { SpeakerMute, SpeakerUp, Star } from '@ringcentral/juno-icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  paletteChoice,
  sortInDocTable,
  switchToControlKnobs,
  Title,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import { RcGrid } from '../../../Grid';
import { RcIcon } from '../../../Icon';
import { RcTextField } from '../../TextField';
import { RcSlider } from '../Slider';

export default {
  title: '🚀 Cleanup Components/Forms/Slider',
  component: RcSlider,
  argTypes: {
    color: {
      options: paletteChoice,
      control: {
        type: 'select',
      },
    },
    ...sortInDocTable<keyof SliderProps>([
      'defaultValue',
      'valueLabelDisplay',
      'value',
      'onChange',
      'onChangeCommitted',
      'disabled',
      'track',
      'step',
      'marks',
      'orientation',
      'max',
      'min',
      'scale',
    ]),
    ...notControlInDocTable<keyof SliderProps>([]),
    ...notShowInDocTable<keyof SliderProps>([]),
  },
} as Meta;

type SliderProps = ComponentProps<typeof RcSlider>;

export const Slider: Story<SliderProps> = ({ value: valueProp, ...args }) => {
  switchToControlKnobs();
  const [value, setValue] = useState<number | number[]>(valueProp || 0);

  return <RcSlider value={value} onChange={(e, v) => setValue(v)} {...args} />;
};

Slider.args = {};

Slider.argTypes = {
  ...notControlInDocTable<keyof SliderProps>([]),
};

Slider.parameters = {
  tags: [
    // {
    //   name: 'Spec',
    //   href: '',
    // },
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/slider/#slider',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

export const SliderExamples: Story<SliderProps> = ({
  value: valueProp,
  color,
  ...args
}) => {
  switchToControlKnobs();
  const [value, setValue] = useState<number | number[]>(valueProp || 0);
  const [value2, setValue2] = useState<number | number[]>(valueProp || 0);
  const [value3, setValue3] = useState<number | number[]>(valueProp || 0);

  const handleChange = (
    _e: React.ChangeEvent<{}>,
    v: number | number[],
  ): void => setValue(v);
  const handleChange2 = (
    _e: React.ChangeEvent<{}>,
    v: number | number[],
  ): void => setValue2(v);
  const handleChange3 = (
    _e: React.ChangeEvent<{}>,
    v: number | number[],
  ): void => setValue3(v);

  return (
    <>
      <Title>Slider with icon</Title>
      <RcGrid container spacing={4} alignItems="center">
        <RcGrid item>
          <RcIcon symbol={Star} color={color} size="medium" />
        </RcGrid>
        <RcGrid item xs>
          <RcSlider
            value={value}
            aria-labelledby="input-slider"
            onChange={handleChange}
            color={color}
            {...args}
          />
        </RcGrid>
        <RcGrid item>
          <RcIcon symbol={Star} color={color} size="medium" />
        </RcGrid>
      </RcGrid>
      <br />
      <br />
      <Title>Slider with TextField</Title>
      <RcGrid container spacing={4} alignItems="center">
        <RcGrid item>
          <RcIcon symbol={Star} color={color} size="medium" />
        </RcGrid>
        <RcGrid item xs>
          <RcSlider
            value={value2}
            onChange={handleChange2}
            aria-labelledby="input-slider"
            color={color}
            {...args}
          />
        </RcGrid>
        <RcGrid item>
          <RcTextField
            value={value2}
            style={{ width: '2em' }}
            InputProps={{
              readOnly: true,
            }}
            clearBtn={false}
          />
        </RcGrid>
      </RcGrid>
      <br />
      <br />
      <Title>Slider with Volume</Title>
      <RcGrid container spacing={4} alignItems="center">
        <RcGrid item>
          <RcIcon symbol={SpeakerUp} color={color} size="medium" />
        </RcGrid>
        <RcGrid item xs>
          <RcSlider
            value={value3}
            onChange={handleChange3}
            aria-labelledby="input-slider"
            valueLabelFormat={(x) => `${x}%`}
            color={color}
            {...args}
          />
        </RcGrid>
        <RcGrid item>
          <RcIcon symbol={SpeakerMute} color={color} size="medium" />
        </RcGrid>
      </RcGrid>
    </>
  );
};
