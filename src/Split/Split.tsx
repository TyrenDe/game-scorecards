import * as React from "react";

import BasePage from "../BasePage";
import SplitBoard from "./SplitBoard";

class Split extends BasePage {
  protected getPageName(): string {
    return "Split";
  }

  public render(): React.ReactNode {
    return (
      <SplitBoard/>
    );
  }
}

export default Split;