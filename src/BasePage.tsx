import * as React from "react";

abstract class BasePage<P = {}, S = {}, SS = any> extends React.Component<P, S, SS> {
  public abstract getPageName(): string;

  componentDidMount() {
    document.title = "Game Scorecards: " + this.getPageName();
  }
}

export default BasePage;