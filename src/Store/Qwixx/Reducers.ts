import produce, { Draft } from 'immer';
import * as types from './Types';

const initialState: types.IQwixxState = {
  values: createEmptyValues(),
};

function createEmptyValues(): Record<types.QwixxRanks, number[]> {
  return {
    Red: [],
    Yellow: [],
    Green: [],
    Blue: [],

    Negative: [],
  };
}

export function qwixxReducer(state = initialState, action: types.QwixxActionTypes): types.IQwixxState {
  return produce(state, (draft: Draft<types.IQwixxState>) => {
    switch (action.type) {
      case types.QWIXX_RESET_ALL: {
        draft.values = createEmptyValues();
        break;
      }
      case types.QWIXX_ADD_VALUE: {
        draft.values[action.rank].push(action.number);
        break;
      }
      case types.QWIXX_REMOVE_VALUE: {
        const search_index = draft.values[action.rank].indexOf(action.number);
        if (search_index >= 0) {
          draft.values[action.rank].splice(search_index, 1);
        }
        break;
      }
    }
  });
}
