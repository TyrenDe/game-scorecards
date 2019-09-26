import produce, { Draft } from 'immer';
import * as types from './Types';

const initialState: types.ISplitState = {
  scores: {},
};

function createEmptyScore(): Record<types.SplitRanks, number> {
  return { A: 0, K: 0, Q: 0, J: 0, 10: 0, 9: 0, 8: 0, 7: 0, 6: 0, 5: 0, 4: 0, 3: 0, 2: 0, Negative: 0};
}

export function splitReducer(state = initialState, action: types.SplitActionTypes): types.ISplitState {
  return produce(state, (draft: Draft<types.ISplitState>) => {
    switch (action.type) {
      case types.SPLIT_RESET_ALL: {
        draft.scores = {};
        break;
      }
      case types.SPLIT_ADD_VALUE: {
        if (!draft.scores[action.name]) {
          draft.scores[action.name] = {
            values: createEmptyScore(),
          };
        }

        const value = draft.scores[action.name].values[action.rank];
        const max: number = (action.rank === types.SplitRanks.Negative) ? 500 : 6;
        draft.scores[action.name].values[action.rank] = (value + 1) % max;
        break;
      }
      case types.SPLIT_REMOVE_VALUE: {
        if (!draft.scores[action.name]) {
          draft.scores[action.name] = {
            values: createEmptyScore(),
          };
        }

        const value = draft.scores[action.name].values[action.rank];
        draft.scores[action.name].values[action.rank] = Math.max(0, value - 1);
        break;
      }
    }
  });
}
