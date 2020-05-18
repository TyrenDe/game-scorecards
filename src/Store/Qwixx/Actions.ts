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

export function lock(rank: types.QwixxRanks): types.QwixxActionTypes {
  return {
    rank,
    type: types.QWIXX_LOCK,
  };
}

export function unlock(rank: types.QwixxRanks): types.QwixxActionTypes {
  return {
    rank,
    type: types.QWIXX_UNLOCK,
  };
}

export function resetAll(): types.QwixxActionTypes {
  return {
    type: types.QWIXX_RESET_ALL,
  };
}
