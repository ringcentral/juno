import React, { useRef, useState } from 'react';

import {
  RcBox,
  RcDialog,
  RcDialogContent,
  RcDialogTitle,
  RcIconButton,
  RcSwitch,
  RcZoomFrom,
  styled,
} from '@ringcentral/juno';
import { Close } from '@ringcentral/juno-icon';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/🌈Animations/Transition/ZoomFrom',
} as Meta;

const Img = styled.img`
  height: 200px;
  width: 200px;
  right: 100px;
  top: 100px;
  position: absolute;
`;

export const ZoomFrom: Story<any> = () => {
  const [open, setOpen] = useState(false);

  const sourceRef = useRef<HTMLImageElement>(null);

  const toggleOpen = () => setOpen(!open);

  return (
    <>
      <RcSwitch
        checked={open}
        label="Show"
        onClick={() => {
          setOpen(!open);
        }}
      />
      <br />
      <br />
      <img
        alt=""
        style={{ width: 100, height: 100 }}
        role="presentation"
        ref={sourceRef}
        src="./assets/logo.png"
        onClick={toggleOpen}
      />
      <RcZoomFrom
        from={sourceRef}
        in={open}
        onEnter={() => console.log('Enter')}
        onEntering={() => console.log('Entering')}
        onEntered={() => console.log('Entered')}
        onExit={() => console.log('Exit')}
        onExiting={() => console.log('Exiting')}
        onExited={() => console.log('Exited')}
      >
        <Img
          alt=""
          role="presentation"
          src="./assets/logo.png"
          onClick={toggleOpen}
        />
      </RcZoomFrom>
    </>
  );
};

ZoomFrom.storyName = 'ZoomFrom';

ZoomFrom.args = {};

ZoomFrom.argTypes = {};

ZoomFrom.parameters = {
  tags: [
    {
      name: 'Source',
      value: 'react-transition-group',
      href: 'http://reactcommunity.org/react-transition-group/transition',
    },
  ],
};

export const ZoomFromWithDialog: Story<any> = () => {
  const [open, setOpen] = useState(false);

  const sourceRef = useRef<HTMLImageElement>(null);

  const toggleOpen = () => setOpen(!open);

  return (
    <>
      <RcSwitch
        checked={open}
        label="Show"
        onClick={() => {
          setOpen(!open);
        }}
      />
      <br />
      <br />
      <img
        alt=""
        style={{ width: 100, height: 100 }}
        role="presentation"
        ref={sourceRef}
        src="./assets/logo.png"
        onClick={toggleOpen}
      />
      <RcDialog open={open} fullScreen onClose={toggleOpen}>
        <RcDialogTitle display="flex" disableTypography space={6}>
          <RcBox flex="1 1 auto" alignItems="center" display="flex" />
          <RcIconButton title="Close" symbol={Close} onClick={toggleOpen} />
        </RcDialogTitle>
        <RcDialogContent>
          <RcZoomFrom
            from={sourceRef}
            in={open}
            onEnter={() => console.log('Enter')}
            onEntering={() => console.log('Entering')}
            onEntered={() => console.log('Entered')}
            onExit={() => console.log('Exit')}
            onExiting={() => console.log('Exiting')}
            onExited={() => console.log('Exited')}
          >
            <Img
              alt=""
              role="presentation"
              src="./assets/logo.png"
              onClick={toggleOpen}
            />
          </RcZoomFrom>
        </RcDialogContent>
      </RcDialog>
    </>
  );
};

ZoomFromWithDialog.storyName = 'ZoomFromWithDialog';

ZoomFromWithDialog.args = {};

ZoomFromWithDialog.argTypes = {};
