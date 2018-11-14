import * as React from "react";

import BasePage from "./BasePage";

class Home extends BasePage {
  protected getPageName(): string {
    return "Home";
  }

  public render(): React.ReactNode {
    return (
      <div>
        <p>This is the home page where we provide useful details.</p>
      </div>
    );
  }
}

export default Home;