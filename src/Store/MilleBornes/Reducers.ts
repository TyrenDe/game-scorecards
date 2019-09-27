import produce, { Draft } from 'immer';
import * as types from './Types';

const initialState: types.IMilleBornesState = {
  scores: {},
};

export function milleBornesReducer(state = initialState, action: types.MilleBornesActionTypes): types.IMilleBornesState {
  return produce(state, (draft: Draft<types.IMilleBornesState>) => {
    switch (action.type) {
      case types.MILLE_BORNES_RESET_ALL: {
        draft.scores = {};
        break;
      }
      case types.MILLE_BORNES_ADD_SCORE: {
        if (!draft.scores[action.name]) {
          draft.scores[action.name] = 0;
        }

        draft.scores[action.name] = draft.scores[action.name] + action.value;
        break;
      }
    }
  });
}
