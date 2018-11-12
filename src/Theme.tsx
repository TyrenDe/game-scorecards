import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

interface IScorecardTheme {
  readonly PrimaryBackgroundColor: string;
  readonly SecondaryBackgroundColor: string;
  readonly InverseBackgroundColor: string;
  readonly PrimaryColor: string;
  readonly InverseColor: string;
  readonly LinkColor: string;
  readonly LinkHoverColor: string;
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

export const LightTheme: IScorecardTheme = {
  PrimaryBackgroundColor: "#CEC9C1",
  SecondaryBackgroundColor: "#EEE9E1",
  InverseBackgroundColor: "#41464e",
  
  PrimaryColor: "black",
  InverseColor: "black",
  
  LinkColor: "#219acb",
  LinkHoverColor: "#1156aa",
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<IScorecardTheme>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;