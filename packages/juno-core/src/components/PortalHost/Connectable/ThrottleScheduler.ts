import { Scheduler } from './types';

export class ThrottleScheduler implements Scheduler {
  private _lastTask: (() => void) | null = null;

  private _timeoutID?: number;

  schedule(task: () => void) {
    if (!this._timeoutID) {
      this._timeoutID = window.setTimeout(() => {
        this._timeoutID = undefined;
        this._lastTask?.();
      });
    }

    this._lastTask = task;
  }

  clear() {
    window.clearTimeout(this._timeoutID);
    this._lastTask = null;
    this._timeoutID = undefined;
  }
}
