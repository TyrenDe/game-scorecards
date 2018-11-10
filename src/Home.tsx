import * as React from "react";
import BasePage from "./BasePage";
import "./App.css";

class Home extends BasePage {
  public getPageName(): string {
    return "Home";
  }

  render() {
    return (
      <div>
        HOME PAGE!
      </div>
    );
  }
};

export default Home;