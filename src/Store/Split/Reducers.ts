import produce, { Draft } from 'immer';
import * as types from './Types';

const initialState: types.ISplitState = {
  scores: new Map<string, types.ISplitScore>(),
};

export function splitReducer(state = initialState, action: types.SplitActionTypes): types.ISplitState {
  return produce(state, (draft: Draft<types.ISplitState>) => {
    switch (action.type) {
      case types.SPLIT_RESET_ALL: {
        draft.scores.clear();
        break;
      }
      case types.SPLIT_ADD_VALUE: {
        if (!draft.scores.has(action.name)) {
          draft.scores.set(action.name, {
            values: new Map<types.SplitRanks, number>(),
          });
        }
        break;
      }
    }
  });
}
