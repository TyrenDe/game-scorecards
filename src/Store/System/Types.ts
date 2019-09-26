export enum ThemeOptions {
  Light,
  Dark,
}

export interface ISystemState {
  selectedTheme: ThemeOptions;
  names: string[];
}

export const SYSTEM_CHANGE_THEME = 'SYSTEM_CHANGE_THEME';
export const SYSTEM_ADD_NAME = 'SYSTEM_ADD_NAME';
export const SYSTEM_REMOVE_NAME = 'SYSTEM_REMOVE_NAME';

export interface ISystemChangeThemeAction {
  newTheme: ThemeOptions;
  type: typeof SYSTEM_CHANGE_THEME;
}

export interface ISystemAddNameAction {
  name: string;
  type: typeof SYSTEM_ADD_NAME;
}

export interface ISystemRemoveNameAction {
  name: string;
  type: typeof SYSTEM_REMOVE_NAME;
}

export type SystemActionTypes =
  ISystemChangeThemeAction |
  ISystemAddNameAction |
  ISystemRemoveNameAction;
