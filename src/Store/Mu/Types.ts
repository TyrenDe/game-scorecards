export interface IMuState {
  readonly scores: Record<string, number>;
}

export const MU_RESET_ALL = 'MU_RESET_ALL';
export const MU_ADD_SCORE = 'MU_ADD_SCORE';

export interface IMuResetAllAction {
  type: typeof MU_RESET_ALL;
}

export interface IMuAddScoreAction {
  name: string;
  value: number;
  type: typeof MU_ADD_SCORE;
}

export type MuActionTypes =
  IMuResetAllAction |
  IMuAddScoreAction;
