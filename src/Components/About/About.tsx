import * as React from "react";

import BasePage from "../BasePage/BasePage";

class About extends BasePage {
  protected getPageName(): string {
    return "About";
  }

  public render(): React.ReactNode {
    return (
      <div>
        This site was created by Shane DeSeranno, Donald Gill, and Lara Ramey to aid in scoring games.
      </div>
    );
  }
}

export default About;
