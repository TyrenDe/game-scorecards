export enum QwixxRanks {
  Red = 'Red',
  Yellow = 'Yellow',
  Green = 'Green',
  Blue = 'Blue',

  Negative = 'Negative',
}

export interface IQwixxState {
  readonly isLocked: Record<QwixxRanks, boolean>;
  readonly values: Record<QwixxRanks, number[]>;
}

export const QWIXX_RESET_ALL = 'QWIXX_RESET_ALL';
export const QWIXX_ADD_VALUE = 'QWIXX_ADD_VALUE';
export const QWIXX_REMOVE_VALUE = 'QWIXX_REMOVE_VALUE';
export const QWIXX_LOCK = 'QWIXX_LOCK';
export const QWIXX_UNLOCK = 'QWIXX_UNLOCK';

export interface IQwixxAddValueAction {
  rank: QwixxRanks;
  number: number;
  type: typeof QWIXX_ADD_VALUE;
}

export interface IQwixxRemoveValueAction {
  rank: QwixxRanks;
  number: number;
  type: typeof QWIXX_REMOVE_VALUE;
}

export interface IQwixxResetAllAction {
  type: typeof QWIXX_RESET_ALL;
}

export interface IQwixxLockAction {
  rank: QwixxRanks;
  type: typeof QWIXX_LOCK;
}

export interface IQwixxUnlockAction {
  rank: QwixxRanks;
  type: typeof QWIXX_UNLOCK;
}

export type QwixxActionTypes =
  IQwixxAddValueAction |
  IQwixxRemoveValueAction |
  IQwixxResetAllAction |
  IQwixxLockAction |
  IQwixxUnlockAction;
