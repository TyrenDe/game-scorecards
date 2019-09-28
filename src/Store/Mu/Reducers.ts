import produce, { Draft } from 'immer';
import * as types from './Types';

const initialState: types.IMuState = {
  scores: {},
};

export function muReducer(state = initialState, action: types.MuActionTypes): types.IMuState {
  return produce(state, (draft: Draft<types.IMuState>) => {
    switch (action.type) {
      case types.MU_RESET_ALL: {
        draft.scores = {};
        break;
      }
      case types.MU_ADD_SCORE: {
        if (!draft.scores[action.name]) {
          draft.scores[action.name] = 0;
        }

        draft.scores[action.name] = draft.scores[action.name] + action.value;
        break;
      }
    }
  });
}
