import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import React, { FunctionComponent, useRef } from 'react';
import { RcDialog } from '../../Dialog';
import { RcPortalHost } from '../PortalHost';
import {
  ControlledProps,
  PortalController,
  PortalManager,
} from '../PortalManager';

const TestComponentString = 'TestComponent';

const TestComponent: FunctionComponent<
  ControlledProps<{ text?: string }, string>
> = ({ open, onClose, text, ...rest }) => {
  const timeRef = useRef(+new Date());
  return (
    <RcDialog open={open} onClose={() => onClose('feedback')} {...rest}>
      <div>{TestComponentString}</div>
      <div>{text}</div>
      <div data-test-automation-id="create-time">{timeRef.current}</div>
    </RcDialog>
  );
};

afterEach(cleanup);
describe('Open portal', () => {
  it('Should open portal correctly', async () => {
    const portalManager = new PortalManager();
    render(<RcPortalHost manager={portalManager} />);

    portalManager.open(TestComponent);
    portalManager.open(TestComponent);
    portalManager.open(TestComponent);

    const dialogs = await screen.findAllByText(TestComponentString);

    expect(dialogs).toHaveLength(3);
  });

  it('Should show portals which opened before connected', async () => {
    const portalManager = new PortalManager();

    // open portal before connected
    portalManager.open(TestComponent);
    portalManager.open(TestComponent);
    portalManager.open(TestComponent);

    // connect
    render(<RcPortalHost manager={portalManager} />);

    const dialogs = await screen.findAllByText(TestComponentString);

    // show correctly
    expect(dialogs).toHaveLength(3);
  });

  it('Should do nothing when open by same ID', async () => {
    const portalManager = new PortalManager();
    render(<RcPortalHost manager={portalManager} />);

    portalManager.open(TestComponent, { id: '233' });

    const componentID1 = (await screen.findByTestId('create-time')).textContent;

    expect(componentID1).not.toBeNull();

    // would be log warning, ignore
    portalManager.open(TestComponent, { id: '233' });

    const componentID2 = (await screen.findByTestId('create-time')).textContent;

    expect(componentID2).toBe(componentID1);
  });
});

type ManagerHandlerProps = {
  controller: PortalController;
  manager: PortalManager;
};

describe('Close portal', () => {
  it.each([
    [
      'portalController.close',
      ({ controller }: ManagerHandlerProps) => {
        controller.close();
      },
    ],
    [
      'manager.closeByID',
      ({ manager, controller }: ManagerHandlerProps) => {
        manager.closeByID(controller.id);
      },
    ],
    [
      'onClose prop',
      () => {
        fireEvent(
          screen.getByRole('presentation'),
          new KeyboardEvent('keydown', {
            bubbles: true,
            cancelable: true,
            key: 'Escape',
          }),
        );
      },
    ],
  ])('Should close portal correctly (%s)', async (_, handleClose) => {
    const manager = new PortalManager();
    render(<RcPortalHost manager={manager} />);

    const controller = manager.open(TestComponent);

    // wait open
    const dialogs = await screen.findAllByText(TestComponentString);

    expect(dialogs).toHaveLength(1);

    handleClose({
      controller,
      manager,
    });

    // wait close
    await waitFor(() => {
      expect(screen.queryAllByText(TestComponentString)).toHaveLength(0);
    });
  });

  it('Should close all portal after invoke manager.closeAll', async () => {
    const portalManager = new PortalManager();
    render(<RcPortalHost manager={portalManager} />);

    portalManager.open(TestComponent);
    portalManager.open(TestComponent);
    portalManager.open(TestComponent);

    // wait open
    const dialogs = await screen.findAllByText(TestComponentString);

    expect(dialogs).toHaveLength(3);

    portalManager.closeAll();

    // wait close
    await waitFor(() => {
      expect(screen.queryAllByText(TestComponentString)).toHaveLength(0);
    });
  });
});

describe('Update props', () => {
  it.each([
    [
      'portalController.updateProps',
      ({ controller }: ManagerHandlerProps) => {
        controller.updateProps({ text: '244' });
      },
    ],
    [
      'manager.updatePropsByID',
      ({ manager, controller }: ManagerHandlerProps) => {
        manager.updatePropsByID(controller.id, { text: '244' });
      },
    ],
  ])('Should update props correctly (%s)', async (_, handleUpdate) => {
    const manager = new PortalManager();
    render(<RcPortalHost manager={manager} />);

    const controller = manager.open(TestComponent, {
      props: { text: '233' },
    });

    // wait open
    let dialogs = await screen.findAllByText('233');

    expect(dialogs).toHaveLength(1);
    expect(screen.queryAllByText('244')).toHaveLength(0);

    handleUpdate({
      controller,
      manager,
    });

    // wait update
    dialogs = await screen.findAllByText('244');

    expect(dialogs).toHaveLength(1);
    expect(screen.queryAllByText('233')).toHaveLength(0);
  });
});

describe('Check order', () => {
  it('The last one to open should be at the top', async () => {
    const manager = new PortalManager();
    render(<RcPortalHost manager={manager} />);

    manager.open(TestComponent, {
      props: { 'data-test-automation-id': 'A' } as any,
    });

    // wait open
    const dialogA = await screen.findByTestId('A');

    manager.open(TestComponent, {
      props: { 'data-test-automation-id': 'B' } as any,
    });

    // wait open
    const dialogB = await screen.findByTestId('B');

    expect(dialogA.nextElementSibling).toBe(dialogB);
  });
});
