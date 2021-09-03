export interface Scheduler {
  schedule(task: () => void): void;
  clear(): void;
}

// ****** Connectible ******
export type Connector<T> = (value: T) => void;

export type DisconnectHandler = () => void;

export interface ConnectibleLifecycles {
  onConnected: void;
  onDisconnected: void;
}

export const ConnectSymbol = Symbol('connect');
