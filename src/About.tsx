import * as React from "react";
import BasePage from "./BasePage";

class About extends BasePage {
  public getPageName(): string {
    return "About";
  }

  render() {
    return (
      <div>
        This site was created by Shane DeSerannoa and Donald Gill to aid in game scoring.
      </div>
    );
  }
};

export default About;