export interface Scheduler {
  schedule(task: () => void): void;
  clear(): void;
}

// ****** Connectable ******
export type Connector<T> = (value: T) => void;

export type DisconnectHandler = () => void;

export const ConnectSymbol = Symbol('connect');
