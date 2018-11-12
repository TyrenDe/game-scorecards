export interface IScorecardTheme {
  readonly PrimaryBackgroundColor: string;
  SecondaryBackgroundColor: string;
  InverseBackgroundColor: string;
  PrimaryColor: string;
  InverseColor: string;
  LinkColor: string;
  LinkHoverColor: string;
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