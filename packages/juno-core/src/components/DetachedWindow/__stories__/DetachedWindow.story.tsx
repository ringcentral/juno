import React, {
  ComponentProps,
  FunctionComponent,
  useRef,
  useState,
} from 'react';

import {
  RcButton,
  RcDetachedWindow,
  RcDetachedWindowRef,
  RcDivider,
  RcGrid,
  RcIconButton,
  RcPaper,
  RcText,
  RcTypography,
  styled,
} from '@ringcentral/juno';
import { Close } from '@ringcentral/juno-icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import {
  DialogExampleComponent,
  DialogWithResponsiveExample,
} from '../../Dialog/__stories__/Dialog.story';
import { DownshiftExamples } from '../../Downshift/__stories__/Downshift.story';
import { MultiDrawer } from '../../Drawer/__stories__/Drawer.story';
import { SubMenuExampleComponent } from '../../Menu/SubMenu/__stories__/SubMenu.story';
import { Popover } from '../../Popover/__stories__/Popover.story';
import { Popper } from '../../Popper/__stories__/Popper.story';
import { TabsExampleComponent } from '../../Tabs/Tabs/__stories__/Tabs.story';
import { VirtualizedMenu } from '../../VirtualizedMenu/__stories__/VirtualizedMenu.story';
import { VirtuosoExample } from '../../Virtuoso/__stories__/Virtuoso.story';

const Box = styled.div<any>`
  width: 50px;
  height: 50px;
  background: pink;
  transform: translateX(${({ v }) => v}px);
`;

export default {
  title: '🚀 Cleanup Components/DetachedWindow',
  component: RcDetachedWindow,
  argTypes: {
    ...sortInDocTable<keyof DetachedWindowProps>(['keep']),
    ...notControlInDocTable<keyof DetachedWindowProps>(['open', 'onUnload']),
    ...notShowInDocTable<keyof DetachedWindowProps>([]),
  },
} as Meta;

type DetachedWindowProps = ComponentProps<typeof RcDetachedWindow>;

/**
 * website url will be like
 * http://localhost:6006/iframe.html?id=%F0%9F%9A%80-cleanup-components-detachedwindow--detached-window&viewMode=story&args=
 * https://ringcentral.github.io/juno/iframe.html?id=%F0%9F%9A%80-cleanup-components-detachedwindow--detached-window&viewMode=docs&args='
 *
 * so we should split from iframe.html
 */
const websiteUrl = window.location.href.split('iframe.html')[0];

export const DetachedWindow: Story<DetachedWindowProps> = ({
  children,
  ...args
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(1);
  const ref = useRef<RcDetachedWindowRef>(null);

  return (
    <>
      <RcTypography color="neutral.f06">
        That can make render element on new window, and can shared state easy.
        <br />
        Also you can get window use <RcText highlight>ref</RcText>,{' '}
        <RcText highlight>ref.current.window</RcText>, you can get that after{' '}
        <RcText highlight>onload</RcText>, or get that in{' '}
        <RcText highlight>onOpen={`{(window) => ... }`}</RcText> trigger arg
        <br />
        count: {value}
      </RcTypography>
      <RcButton title="cool" useRcTooltip onClick={() => setValue(value + 1)}>
        +1
      </RcButton>
      <RcButton
        style={{ float: 'right' }}
        title="This is tooltip"
        useRcTooltip
        onClick={() => {
          setOpen((detached) => !detached);
        }}
      >
        {open ? 'Close' : 'Open'} this block
      </RcButton>
      <RcDetachedWindow
        {...args}
        ref={ref}
        open={open}
        onUnload={(e) => {
          // * must need for trigger open change to show children when user close window directly
          setOpen(false);
          console.dir('[onUnload] current ref', ref.current);
        }}
        onOpen={(targetWindow) => {
          console.log('[onOpen] current ref', targetWindow, ref.current);
          // when there is no resizeObserver append that
          if (targetWindow && !targetWindow['ResizeObserver']) {
            const s = targetWindow.document.createElement('script');
            s.src = `${websiteUrl}assets/ResizeObserver.global.js`;
            s.async = true;
            targetWindow.document.head.appendChild(s);
          }
        }}
        onload={(e) => {
          console.dir('[onload] current ref', ref.current);
        }}
        onBeforeunload={(e) => {
          console.dir('[onBeforeunload] current ref', ref.current);
        }}
      >
        <RcPaper>
          <RcGrid container>
            <RcGrid item xs>
              <RcTypography variant="display1" color="neutral.f06">
                Block
              </RcTypography>
            </RcGrid>
            <RcGrid item>
              <RcIconButton
                symbol={Close}
                variant="inverse"
                title="Close window"
                onClick={() => {
                  setOpen(false);
                }}
              />
            </RcGrid>
          </RcGrid>
          <br />
          <RcButton title="+1" useRcTooltip onClick={() => setValue(value + 1)}>
            +1
          </RcButton>
          <RcButton
            title="I'm disabled"
            useRcTooltip
            TooltipProps={{ ignorePointer: true }}
            disabled
          >
            disabled button with tooltip
          </RcButton>
          count: {value}
          <Box v={value} />
          <VirtualizedMenu />
          <RcDivider />
          <VirtuosoExample />
          <RcDivider />
          <TabsExampleComponent />
          <RcDivider />
          <SubMenuExampleComponent />
          <RcDivider />
          <DialogExampleComponent />
          <RcDivider />
          <DialogWithResponsiveExample />
          <RcDivider />
          <Popper />
          <RcDivider />
          <Popover />
          <RcDivider />
          <DownshiftExamples />
          <RcDivider />
          <MultiDrawer anchor="bottom" />
        </RcPaper>
      </RcDetachedWindow>
    </>
  );
};
DetachedWindow.storyName = 'DetachedWindow';

DetachedWindow.args = {
  title: 'new window',
  name: 'window',
  specs:
    'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=1200,width=400,height=400',
};

DetachedWindow.argTypes = {
  ...notControlInDocTable<keyof DetachedWindowProps>([]),
};

DetachedWindow.parameters = {
  tags: [],
};

type ContentProps = {
  setOpen: any;
  value: number;
};

const Content: FunctionComponent<ContentProps> = ({ setOpen, value }) => {
  return (
    <RcPaper>
      <RcGrid container>
        <RcGrid item xs>
          <RcTypography variant="display1" color="neutral.f06">
            Block
          </RcTypography>
        </RcGrid>
        <RcGrid item>
          <RcIconButton
            symbol={Close}
            variant="inverse"
            title="Close window"
            onClick={() => {
              setOpen(false);
            }}
          />
        </RcGrid>
      </RcGrid>
      <br />
      count: {value}
    </RcPaper>
  );
};

export const DetachedWindowExamples: Story<DetachedWindowProps> = () => {
  const [value, setValue] = useState(1);

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const ref = useRef<RcDetachedWindowRef>(null);
  const ref2 = useRef<RcDetachedWindowRef>(null);
  const ref3 = useRef<RcDetachedWindowRef>(null);

  return (
    <>
      <RcTypography color="neutral.f06">
        Control window in another window
        <br />
        count: {value}
      </RcTypography>
      <RcButton title="+1" useRcTooltip onClick={() => setValue(value + 1)}>
        +1
      </RcButton>
      <RcButton title="cool" useRcTooltip onClick={() => setOpen((o) => !o)}>
        {open ? 'close' : 'open'} 1
      </RcButton>
      <RcButton title="cool" useRcTooltip onClick={() => setOpen2((o) => !o)}>
        {open2 ? 'close' : 'open'} 2
      </RcButton>
      <RcButton title="cool" useRcTooltip onClick={() => setOpen3((o) => !o)}>
        {open3 ? 'close' : 'open'} 3
      </RcButton>
      <br />
      <RcDetachedWindow
        ref={ref}
        open={open}
        onUnload={() => setOpen(false)}
        title="new window"
        name="window1"
        specs="toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=800,width=400,height=400"
      >
        <Content setOpen={setOpen} value={value} />
        <RcButton
          title="window 2"
          useRcTooltip
          onClick={() => setOpen2((o) => !o)}
        >
          {open2 ? 'close' : 'open'} window 2
        </RcButton>
      </RcDetachedWindow>
      <RcDetachedWindow
        ref={ref2}
        open={open2}
        onUnload={() => setOpen2(false)}
        title="new window2"
        name="window2"
        specs="toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=1200,width=400,height=400"
      >
        <Content setOpen={setOpen2} value={value} />
        <RcButton
          title="window 1"
          useRcTooltip
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'close' : 'open'} window 1
        </RcButton>
        <RcButton
          title="window 3"
          useRcTooltip
          onClick={() => setOpen3((o) => !o)}
        >
          {open ? 'close' : 'open'} window 3
        </RcButton>
      </RcDetachedWindow>
      <RcDetachedWindow
        ref={ref3}
        open={open3}
        onUnload={() => setOpen3(false)}
        title="new window3"
        name="window3"
        specs="toolbar=yes,scrollbars=yes,resizable=yes,top=400,left=1200,width=400,height=400"
      >
        <Content setOpen={setOpen3} value={value} />
        <RcButton
          title="window 1"
          useRcTooltip
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'close' : 'open'} window 1
        </RcButton>
      </RcDetachedWindow>
    </>
  );
};

DetachedWindowExamples.storyName = 'DetachedWindow Examples';

export const DetachedWindowGetWindow: Story<DetachedWindowProps> = () => {
  const [value, setValue] = useState(1);

  const [open, setOpen] = useState(false);
  const ref = useRef<RcDetachedWindowRef>(null);

  return (
    <>
      <RcTypography color="neutral.f06">
        Open window with getWindow
        <br />
        count: {value}
      </RcTypography>
      <RcButton title="+1" useRcTooltip onClick={() => setValue(value + 1)}>
        +1
      </RcButton>
      <RcButton
        style={{ float: 'right' }}
        title="This is tooltip"
        useRcTooltip
        onClick={() => {
          setOpen((detached) => !detached);
        }}
      >
        {open ? 'Close' : 'Open'} this block
      </RcButton>
      <br />
      <RcDetachedWindow
        ref={ref}
        open={open}
        onUnload={() => setOpen(false)}
        getWindow={({ url, name, specs, title }) => {
          const win = window.open(url, name, specs);

          if (win) {
            win.document.title = title!;

            return win;
          }
          return null;
        }}
        title="new window"
        name="window1"
        specs="toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=800,width=400,height=400"
      >
        <Content setOpen={setOpen} value={value} />
      </RcDetachedWindow>
    </>
  );
};

DetachedWindowGetWindow.storyName = 'open window by yourself';
