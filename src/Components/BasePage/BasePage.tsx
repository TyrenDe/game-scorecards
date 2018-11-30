import * as React from "react";

abstract class BasePage<P = {}, S = {}, SS = any> extends React.Component<P, S, SS> {
  protected abstract getPageName(): string;

  public componentDidMount(): void {
    document.title = "Game Scorecards: " + this.getPageName();
  }
}

export default BasePage;
