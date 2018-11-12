import * as React from "react";

import BasePage from "../BasePage";
import SplitBoard from "./SplitBoard";

class Split extends BasePage {
  public getPageName(): string {
    return "Split";
  }

  render() {
    return (
      <SplitBoard/>
    );
  }
}

export default Split;