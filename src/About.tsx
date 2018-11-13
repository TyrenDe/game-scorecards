import * as React from "react";

import BasePage from "./BasePage";

class About extends BasePage {
  public getPageName(): string {
    return "About";
  }

  render() {
    return (
      <div>
        This site was created by Shane DeSeranno, Donald Gill, and Lara Ramey to aid in game scoring.
      </div>
    );
  }
}

export default About;