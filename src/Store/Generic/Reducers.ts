import produce, { Draft } from 'immer';
import * as types from './Types';

const initialState: types.IGenericState = {
  scores: {},
};

export function genericReducer(state = initialState, action: types.GenericActionTypes): types.IGenericState {
  return produce(state, (draft: Draft<types.IGenericState>) => {
    switch (action.type) {
      case types.GENERIC_RESET_ALL: {
        draft.scores = {};
        break;
      }
      case types.GENERIC_ADD_SCORE: {
        if (!draft.scores[action.name]) {
          draft.scores[action.name] = 0;
        }

        draft.scores[action.name] = draft.scores[action.name] + action.value;
        break;
      }
    }
  });
}
