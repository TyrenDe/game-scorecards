export enum SplitRanks {
  A = 'A',
  K = 'K',
  Q = 'Q',
  J = 'J',
  Ten = '10',
  Nine = '9',
  Eight = '8',
  Seven = '7',
  Six = '6',
  Five = '5',
  Four = '4',
  Three = '3',
  Two = '2',

  Negative = 'Negative',
}
export interface ISplitScore {
  readonly values: Record<SplitRanks, number>;
}

export interface ISplitState {
  readonly scores: Record<string, ISplitScore>;
}

export const SPLIT_RESET_ALL = 'SPLIT_RESET_ALL';
export const SPLIT_ADD_VALUE = 'SPLIT_ADD_VALUE';
export const SPLIT_REMOVE_VALUE = 'SPLIT_REMOVE_VALUE';

export interface ISplitAddValueAction {
  name: string;
  rank: SplitRanks;
  type: typeof SPLIT_ADD_VALUE;
}

export interface ISplitRemoveValueAction {
  name: string;
  rank: SplitRanks;
  type: typeof SPLIT_REMOVE_VALUE;
}

export interface ISplitResetAllAction {
  type: typeof SPLIT_RESET_ALL;
}

export type SplitActionTypes =
  ISplitAddValueAction |
  ISplitRemoveValueAction |
  ISplitResetAllAction;
