import { Connector, ConnectSymbol, Scheduler } from './types';

export class Connectable<T> {
  constructor(private scheduler?: Scheduler) {}

  private _connector: Connector<T> | null = null;

  private get _isConnected() {
    return Boolean(this._connector);
  }

  [ConnectSymbol](connector: Connector<T>) {
    if (this._isConnected) {
      throw Error('Only one connector is allowed to connect!');
    }

    this._connector = connector;

    this.onConnected();

    return () => {
      this.onDisconnected();
    };
  }

  protected onConnected() {}

  protected onDisconnected() {
    this.scheduler?.clear();
    this._connector = null;
  }

  protected emit(value: T) {
    if (!this._isConnected) return;

    const task = () => {
      this._connector?.(value);
    };

    if (this.scheduler) {
      this.scheduler.schedule(task);
    } else {
      task();
    }
  }
}
