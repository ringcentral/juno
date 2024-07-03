import React, { ComponentProps, useEffect, useState } from 'react';

import {
  RcDialerPadSoundsMPEG,
  RcDialPad,
  RcDialPadButton,
  spacing,
  styled,
  RcMenuItem,
  RcSelect,
} from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Dialer/DialPad',
  component: RcDialPad,
  argTypes: {
    ...sortInDocTable<keyof DialPadProps>([]),
    ...notControlInDocTable<keyof DialPadProps>([]),
    ...notShowInDocTable<keyof DialPadProps>([]),
  },
} as Meta;

type DialPadProps = ComponentProps<typeof RcDialPad>;

const Wrapper = styled.div`
  width: 280px;
  resize: horizontal;
  overflow: hidden;
`;

export const DialPad: Story<DialPadProps> = ({ children, ...args }) => {
  return (
    <Wrapper>
      <RcDialPad
        sounds={RcDialerPadSoundsMPEG}
        getDialPadButtonProps={(v) => ({ 'data-test-id': `${v}` })}
        {...args}
      />
    </Wrapper>
  );
};

export const DialPadWithCustomAudio: Story<DialPadProps> = ({
  children,
  ...args
}) => {
  const [sinkId, setSinkId] = useState<string | undefined>(undefined);
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  useEffect(() => {
    (async () => {
      try {
        await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });

        const audioDevice = (
          await navigator.mediaDevices.enumerateDevices()
        ).filter((device) => device.kind === 'audiooutput');
        console.log('🐞 ~ audioDevice:', audioDevice);

        setDevices(audioDevice);
      } catch (error) {
        //
      }
    })();
  }, []);

  return (
    <Wrapper>
      <RcSelect
        fullWidth
        placeholder="Select audio output"
        value={sinkId}
        onChange={(e) => {
          setSinkId(e.target.value as any);
        }}
      >
        <RcMenuItem value={undefined}>default</RcMenuItem>
        {devices.map((item) => (
          <RcMenuItem value={item.deviceId} key={item.deviceId}>
            {item.label || 'unknown'}
          </RcMenuItem>
        ))}
      </RcSelect>
      <RcDialPad
        sinkId={sinkId}
        sounds={RcDialerPadSoundsMPEG}
        getDialPadButtonProps={(v) => ({ 'data-test-id': `${v}` })}
        {...args}
      />
    </Wrapper>
  );
};

const CustomWrapper = styled.div`
  width: 195px;
  overflow: hidden;

  ${RcDialPadButton} {
    margin: ${spacing(2)};
  }
`;

export const CustomDialPad: Story<DialPadProps> = ({ children, ...args }) => {
  return (
    <CustomWrapper>
      <RcDialPad
        sounds={RcDialerPadSoundsMPEG}
        getDialPadButtonProps={(v) => ({
          'data-test-id': `${v}`,
          size: 'large',
          variant: 'contained',
          color: 'neutral.b03',
          elevation: '0',
          activeElevation: '0',
        })}
        autoSize={false}
        {...args}
      />
    </CustomWrapper>
  );
};

DialPad.storyName = 'DialPad';

DialPad.args = {};

DialPad.argTypes = {
  ...notControlInDocTable<keyof DialPadProps>([]),
};

DialPad.parameters = {
  tags: [
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
