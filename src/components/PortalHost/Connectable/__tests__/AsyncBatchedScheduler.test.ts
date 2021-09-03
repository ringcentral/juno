import { ThrottleScheduler } from '../ThrottleScheduler';
import { createPromise } from '../../PortalManager';

it('Should batch task and async process task', async () => {
  const scheduler = new ThrottleScheduler();
  const [promise, resolve] = createPromise<void>();
  const task1 = jest.fn(() => resolve());
  const task2 = jest.fn(() => resolve());
  const task3 = jest.fn(() => resolve());

  scheduler.schedule(task1);
  scheduler.schedule(task2);
  scheduler.schedule(task3);

  // async process task
  expect(task1).not.toHaveBeenCalled();
  expect(task2).not.toHaveBeenCalled();
  expect(task3).not.toHaveBeenCalled();

  await promise;

  // batch task
  expect(task1).not.toHaveBeenCalled();
  expect(task2).not.toHaveBeenCalled();
  expect(task3).toHaveBeenCalled();
});
