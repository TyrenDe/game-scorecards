import * as React from "react";

import BasePage from "../BasePage/BasePage";

enum GameStates {
  EnterNames,
  Playing,
  GameOver
}

interface IMilleBornesState {
  gameState: GameStates;
  team1Name: string;
  team2Name: string;
}

class MilleBornes extends BasePage<{}, IMilleBornesState> {
  protected getPageName(): string {
    return "Mille Bornes";
  }

  constructor(props: {}) {
    super(props);

    this.state = {
      gameState: GameStates.EnterNames,
      team1Name: "",
      team2Name: "",
    }
  }

  private handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    switch (this.state.gameState) {
      case GameStates.EnterNames:
        this.setState({ gameState: GameStates.Playing });
        break;
      case GameStates.Playing:
        this.setState({ gameState: GameStates.GameOver });
        break;
      case GameStates.EnterNames:
        this.setState({ gameState: GameStates.EnterNames });
        break;
    };
    event.preventDefault();
  }

  private handleTextChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const target = event.target;
    const name = target.name;

    if (name == "team1Name") {
      this.setState({
        team1Name: target.value
      });
    } else {
      this.setState({
        team2Name: target.value
      });
    }
  }

  private CurrentState(): React.ReactNode {
    switch (this.state.gameState) {
      case GameStates.EnterNames:
        return (
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <label>
              Team 1:
              <input type="text" name="team1Name" onChange={(event) => this.handleTextChange(event)} />
            </label>

            <label>
              Team 2:
              <input type="text" name="team2Name" />
            </label>

            <input type="submit" value="Start Game" />
          </form>
        );
      case GameStates.Playing:
        return (
          <div>
            Add new round -&gt; Enter values for each team
        </div>
        );
      case GameStates.GameOver:
        return (
          <div>
          <div>Miles Traveled (if == 1000 then finished +400)</div>
          <div>Safety Cards (1-4, if == 4 then +300(</div>
          <div>Coup Fourré (1-4, *300)</div>
          <div>Delayed Action (+300)</div>
          <div>Safe trip (+300)</div>
          <div>Shutout (+500)</div>
        </div>
        );
    }

    return (<div>Error?</div>);
  }

  public render(): React.ReactNode {
    return this.CurrentState();
  }
}

export default MilleBornes;