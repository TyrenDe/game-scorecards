import * as types from './Types';

export function addValue(rank: types.QwixxRanks, number: number): types.QwixxActionTypes {
  return {
    rank,
    number,
    type: types.QWIXX_ADD_VALUE,
  };
}

export function removeValue(rank: types.QwixxRanks, number: number): types.QwixxActionTypes {
  return {
    rank,
    number,
    type: types.QWIXX_REMOVE_VALUE,
  };
}

export function resetAll(): types.QwixxActionTypes {
  return {
    type: types.QWIXX_RESET_ALL,
  };
}
