import * as types from './Types';

export function addValue(name: string, rank: types.SplitRanks): types.SplitActionTypes {
  return {
    name,
    rank,
    type: types.SPLIT_ADD_VALUE,
  };
}

export function resetAll(): types.SplitActionTypes {
  return {
    type: types.SPLIT_RESET_ALL,
  };
}
