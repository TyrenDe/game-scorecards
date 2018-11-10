import * as React from "react";
import BasePage from "./BasePage";
import "./App.css";

class About extends BasePage {
  public getPageName(): string {
    return "About";
  }

  render() {
    return (
      <div>
        About the site!
      </div>
    );
  }
};

export default About;