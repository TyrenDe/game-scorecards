import * as types from './Types';

export function resetAll(): types.GenericActionTypes {
  return {
    type: types.GENERIC_RESET_ALL,
  };
}

export function addScore(name: string, value: number): types.GenericActionTypes {
  return {
    name,
    value,
    type: types.GENERIC_ADD_SCORE,
  };
}
