import * as types from './Types';

export function resetAll(): types.MuActionTypes {
  return {
    type: types.MU_RESET_ALL,
  };
}

export function addScore(name: string, value: number): types.MuActionTypes {
  return {
    name,
    value,
    type: types.MU_ADD_SCORE,
  };
}
