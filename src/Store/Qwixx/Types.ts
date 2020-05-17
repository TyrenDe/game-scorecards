export enum QwixxRanks {
  Red = 'Red',
  Yellow = 'Yellow',
  Green = 'Green',
  Blue = 'Blue',

  Negative = 'Negative',
}

export interface IQwixxState {
  readonly values: Record<QwixxRanks, number[]>;
}

export const QWIXX_RESET_ALL = 'QWIXX_RESET_ALL';
export const QWIXX_ADD_VALUE = 'QWIXX_ADD_VALUE';
export const QWIXX_REMOVE_VALUE = 'QWIXX_REMOVE_VALUE';

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

export type QwixxActionTypes =
  IQwixxAddValueAction |
  IQwixxRemoveValueAction |
  IQwixxResetAllAction;
