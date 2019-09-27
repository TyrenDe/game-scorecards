export interface IMilleBornesState {
  readonly scores: Record<string, number>;
}

export const MILLE_BORNES_RESET_ALL = 'MILLE_BORNES_RESET_ALL';
export const MILLE_BORNES_ADD_SCORE = 'MILLE_BORNES_ADD_SCORE';

export interface IMilleBornesResetAllAction {
  type: typeof MILLE_BORNES_RESET_ALL;
}

export interface IMilleBornesAddScoreAction {
  name: string;
  value: number;
  type: typeof MILLE_BORNES_ADD_SCORE;
}

export type MilleBornesActionTypes =
  IMilleBornesResetAllAction |
  IMilleBornesAddScoreAction;
