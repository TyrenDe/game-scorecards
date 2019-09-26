import * as types from "./Types";

const initialState: types.ISystemState = {
  selectedTheme: types.ThemeOptions.Dark,
  names: [],
};

export function systemReducer(state = initialState, action: types.SystemActionTypes): types.ISystemState {
  switch (action.type) {
    case types.SYSTEM_CHANGE_THEME: {
      return {
        ...state,
        selectedTheme: action.newTheme,
      };
    }
    case types.SYSTEM_ADD_NAME: {
      return {
        ...state,
        names: state.names.concat(action.name),
      };
    }
    case types.SYSTEM_REMOVE_NAME: {
      return {
        ...state,
        names: state.names.filter((name) => name !== action.name),
      };
    }
    default:
      return state;
  }
}
