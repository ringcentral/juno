import React, { FunctionComponent, useRef } from 'react';

import '@testing-library/jest-dom/extend-expect';
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import { RcDialog } from '../../Dialog';
import { RcPortalHost } from '../PortalHost';
import {
  ControlledProps,
  PortalController,
  PortalManager,
} from '../PortalManager';

const TestComponentString = 'TestComponent';

const TestComponent: FunctionComponent<
  ControlledProps<{ text?: string; feedback?: string }, string>
> = ({ open, onClose, text, feedback = 'feedback', ...rest }) => {
  const timeRef = useRef(+new Date());
  return (
    <RcDialog open={open} onClose={() => onClose(feedback)} {...rest}>
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

type ManagerHandlerProps<P extends {} = {}> = {
  controller: PortalController<P>;
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
          screen.getByRole('dialog'),
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
      'portalController.updateProps',
      ({ controller }: ManagerHandlerProps<{ text?: string }>) => {
        controller.updateProps((pre) => ({
          text: `${pre?.text}4`,
        }));
      },
    ],
    [
      'manager.updatePropsByID',
      ({ manager, controller }: ManagerHandlerProps) => {
        manager.updatePropsByID(controller.id, { text: '244' });
      },
    ],
    [
      'manager.updatePropsByID',
      ({ manager, controller }: ManagerHandlerProps) => {
        manager.updatePropsByID<{ text?: string }>(controller.id, (pre) => ({
          text: `${pre?.text}4`,
        }));
      },
    ],
  ])('Should update props correctly (%s)', async (_, handleUpdate) => {
    const manager = new PortalManager();
    render(<RcPortalHost manager={manager} />);

    const controller = manager.open(TestComponent, {
      props: { text: '24' },
    });

    // wait open
    let dialogs = await screen.findAllByText('24');

    expect(dialogs).toHaveLength(1);
    expect(screen.queryAllByText('244')).toHaveLength(0);

    handleUpdate({
      controller,
      manager,
    });

    // wait update
    dialogs = await screen.findAllByText('244');

    expect(dialogs).toHaveLength(1);
    expect(screen.queryAllByText('24')).toHaveLength(0);
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

describe('feedback', () => {
  it('Should get feedback correctly after close dialog', async () => {
    const portalManager = new PortalManager();
    render(<RcPortalHost manager={portalManager} />);

    const controller1 = portalManager.open(TestComponent, {
      props: { feedback: 'feed1' },
    });
    const controller2 = portalManager.open(TestComponent, {
      props: { feedback: 'back2' },
    });

    // wait open
    const dialogs = await screen.findAllByRole('dialog', { hidden: true });

    expect(dialogs).toHaveLength(2);

    // close top dialog
    fireEvent(
      dialogs[1],
      new KeyboardEvent('keydown', {
        bubbles: true,
        cancelable: true,
        key: 'Escape',
      }),
    );

    let feedback: string | undefined;

    await waitForElementToBeRemoved(dialogs[1]);

    await act(async () => {
      feedback = await controller2.onClosed;
    });

    expect(feedback).toBe('back2');

    // close second dialog
    fireEvent(
      dialogs[0],
      new KeyboardEvent('keydown', {
        bubbles: true,
        cancelable: true,
        key: 'Escape',
      }),
    );

    await waitForElementToBeRemoved(dialogs[0]);

    await act(async () => {
      feedback = await controller1.onClosed;
    });

    expect(feedback).toBe('feed1');
  });

  it('Should get feedback `undefined` after close all dialog', async () => {
    const portalManager = new PortalManager();
    render(<RcPortalHost manager={portalManager} />);

    const controller1 = portalManager.open(TestComponent, {
      props: { feedback: 'feed1' },
    });
    const controller2 = portalManager.open(TestComponent, {
      props: { feedback: 'back2' },
    });

    // wait open
    const dialogs = await screen.findAllByRole('dialog', { hidden: true });

    expect(dialogs).toHaveLength(2);

    portalManager.closeAll();

    let feedback: string | undefined;

    await act(async () => {
      feedback = await controller2.onClosed;
    });

    expect(feedback).toBeUndefined();

    await act(async () => {
      feedback = await controller1.onClosed;
    });

    expect(feedback).toBeUndefined();
  });

  it('Should clean `portalManager._feedbackMap` after close dialog', async () => {
    const portalManager = new PortalManager();
    render(<RcPortalHost manager={portalManager} />);

    const controller = portalManager.open(TestComponent, {
      props: { feedback: 'feeeed' },
    });

    const dialog = await screen.findByRole('dialog', { hidden: true });

    fireEvent(
      dialog,
      new KeyboardEvent('keydown', {
        bubbles: true,
        cancelable: true,
        key: 'Escape',
      }),
    );

    expect(portalManager['_feedbackMap'].get(controller.id)).toBe('feeeed');

    let feedback: string | undefined;

    await waitForElementToBeRemoved(dialog);

    await act(async () => {
      feedback = await controller.onClosed;
    });

    expect(feedback).toBe('feeeed');

    expect(portalManager['_feedbackMap'].size).toBe(0);
  });
});
