import * as React from "react";
import BasePage from "./BasePage";

class Home extends BasePage {
  public getPageName(): string {
    return "Home";
  }

  render() {
    return (
      <div>
        <p>This is the home page where we provide useful details.</p>
      </div>
    );
  }
};

export default Home;