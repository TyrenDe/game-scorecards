export interface IScorecardTheme {
  readonly PrimaryBackgroundColor: string;
  readonly SecondaryBackgroundColor: string;
  readonly InverseBackgroundColor: string;
  readonly PrimaryColor: string;
  readonly InverseColor: string;
  readonly LinkColor: string;
  readonly LinkHoverColor: string;
}

export interface IStorecardThemeProps {
  readonly theme?: IScorecardTheme;
}

export const DarkTheme: IScorecardTheme = {
  PrimaryBackgroundColor: "#41464e",
  SecondaryBackgroundColor: "#282c34",
  InverseBackgroundColor: "#EEE9E1",
  
  PrimaryColor: "white",
  InverseColor: "black",
  
  LinkColor: "#61dafb",
  LinkHoverColor: "#acf1ff",
}