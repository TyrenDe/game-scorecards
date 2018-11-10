import * as React from "react";
import BasePage from "./BasePage";
import "./App.css";

class Split extends BasePage {
  public getPageName(): string {
    return "Split";
  }

  render() {
    return (
      <div>
        Split!!!!
      </div>
    );
  }
};

export default Split;