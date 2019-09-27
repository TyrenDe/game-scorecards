import * as types from './Types';

export function resetAll(): types.MilleBornesActionTypes {
  return {
    type: types.MILLE_BORNES_RESET_ALL,
  };
}

export function addScore(name: string, value: number): types.MilleBornesActionTypes {
  return {
    name,
    value,
    type: types.MILLE_BORNES_ADD_SCORE,
  };
}
