import * as React from "react";
import "./App.css";

abstract class BasePage<P = {}, S = {}, SS = any> extends React.Component<P, S, SS> {
  public abstract getPageName(): string;

  componentDidMount() {
    document.title="Game Scorecards: " + this.getPageName();
  }

  render() {
    return (
      <div>
        Split!!!!
      </div>
    );
  }
};

export default BasePage;