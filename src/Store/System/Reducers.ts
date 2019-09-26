import produce, { Draft } from 'immer';
import * as types from './Types';

const initialState: types.ISystemState = {
  selectedTheme: types.ThemeOptions.Dark,
  names: (process.env.NODE_ENV === 'development') ? ['Shane', 'Lara', 'Don', 'Leah'] : [],
};

export function systemReducer(state = initialState, action: types.SystemActionTypes): types.ISystemState {
  return produce(state, (draft: Draft<types.ISystemState>) => {
    switch (action.type) {
      case types.SYSTEM_CHANGE_THEME: {
        draft.selectedTheme = action.newTheme;
        break;
      }
      case types.SYSTEM_ADD_NAME: {
        draft.names.push(action.name);
        break;
      }
      case types.SYSTEM_REMOVE_NAME: {
        const index = draft.names.indexOf(action.name);
        if (index > -1) {
          draft.names.splice(index, 1);
        }
        break;
      }
    }
  });
}
