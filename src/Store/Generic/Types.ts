export interface IGenericState {
  readonly scores: Record<string, number>;
}

export const GENERIC_RESET_ALL = 'GENERIC_RESET_ALL';
export const GENERIC_ADD_SCORE = 'GENERIC_ADD_SCORE';

export interface IGenericResetAllAction {
  type: typeof GENERIC_RESET_ALL;
}

export interface IGenericAddScoreAction {
  name: string;
  value: number;
  type: typeof GENERIC_ADD_SCORE;
}

export type GenericActionTypes =
  IGenericResetAllAction |
  IGenericAddScoreAction;
