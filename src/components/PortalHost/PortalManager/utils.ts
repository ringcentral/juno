import { UniqID } from './types';

type ResolveFn<T> = (value: T | PromiseLike<T>) => void;

export const createPromise = <T>(): [Promise<T>, ResolveFn<T>] => {
  let resolvePromise: ResolveFn<T> | null = null;
  const promise = new Promise<T>((resolve) => {
    resolvePromise = resolve;
  });
  return [promise, resolvePromise!];
};

export class UniqIdUtil {
  private _currentNumber = 0;

  get(): UniqID {
    return String(this._currentNumber++);
  }
}
