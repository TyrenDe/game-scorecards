import { lightBlue, indigo } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeOptions } from "./Store/System/Types";
import { PaletteType } from "@material-ui/core";

const lightTheme = {
  palette: {
    primary: indigo,
    secondary: lightBlue,
    type: "light" as PaletteType,
  },
};

const darkTheme = {
  palette: {
    primary: indigo,
    secondary: lightBlue,
    type: "dark" as PaletteType,
  },
};

export class Themes {
  public static getTheme(option: ThemeOptions) {
    switch (option) {
      case ThemeOptions.Light:
        return Themes.light;
    }

    return Themes.dark;
  }

  private static light = createMuiTheme(lightTheme);
  private static dark = createMuiTheme(darkTheme);
}
