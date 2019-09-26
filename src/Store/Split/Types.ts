export enum SplitRanks {
  A = 'A',
  K = 'K',
  Q = 'Q',
  J = 'J',
  Ten = '10',
}
export interface ISplitScore {
  readonly values: Map<SplitRanks, number>;
}

export interface ISplitState {
  readonly scores: Map<string, ISplitScore>;
}

export const SPLIT_RESET_ALL = 'SPLIT_RESET_ALL';
export const SPLIT_ADD_VALUE = 'SPLIT_ADD_VALUE';

export interface ISplitAddValueAction {
  name: string;
  rank: SplitRanks;
  type: typeof SPLIT_ADD_VALUE;
}

export interface ISplitResetAllAction {
  type: typeof SPLIT_RESET_ALL;
}

export type SplitActionTypes =
  ISplitAddValueAction |
  ISplitResetAllAction;
