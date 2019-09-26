import * as types from './Types';

export function changeTheme(newTheme: types.ThemeOptions): types.SystemActionTypes {
  return {
    newTheme,
    type: types.SYSTEM_CHANGE_THEME,
  };
}

export function addName(name: string): types.SystemActionTypes {
  return {
    name,
    type: types.SYSTEM_ADD_NAME,
  };
}

export function removeName(name: string): types.SystemActionTypes {
  return {
    name,
    type: types.SYSTEM_REMOVE_NAME,
  };
}
