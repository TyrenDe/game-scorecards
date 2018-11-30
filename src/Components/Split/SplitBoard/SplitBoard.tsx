import * as React from "react";

import { Board, ScoreHeader, ScoreValue, Score, ScoreButton } from "./Styles";

import { CardRank, AllRanks, getRankValues } from "../CardRank";
import BoardRow from "../BoardRow/BoardRow";

type CardRankMap = {[TKey in CardRank]: number};

export interface IBoardState {
  negatives: number,
  values: CardRankMap,
}

class Split extends React.Component<{}, IBoardState> {
  constructor(props: any) {
    super(props);

    this.state = {
      negatives: 0,
      values: {
        "A": 0,
        "K": 0,
        "Q": 0,
        "J": 0,
        "10": 0,
        "9": 0,
        "8": 0,
        "7": 0,
        "6": 0,
        "5": 0,
        "4": 0,
        "3": 0,
        "2": 0,
      },
    };
  }

  private calculateScore(): number {
    let total = this.state.negatives * -5;
    for (let rank of AllRanks) {
      total += getRankValues(rank)[this.state.values[rank]];
    }
    return total;
  }

  private addOne(rank: CardRank): void {
    let newState = { ...this.state };

    newState.values[rank] = (newState.values[rank] + 1) % 6;

    this.setState(newState);
  }

  private addNegative(): void {
    let newState = { ...this.state };

    newState.negatives++;

    this.setState(newState);
  }

  private subNegative(): void {
    let newState = { ...this.state };

    newState.negatives--;
    if (newState.negatives < 0) {
      newState.negatives = 0;
    }

    this.setState(newState);
  }

  public render(): React.ReactNode {
    return (
      <Board>
        <ScoreHeader>
          <ScoreButton onClick={() => this.addNegative()}>-5</ScoreButton>
          <Score>Negative: {this.state.negatives * -5}</Score>
          <ScoreButton onClick={() => this.subNegative()}>+5</ScoreButton>
          <ScoreValue>{this.calculateScore()}</ScoreValue>
        </ScoreHeader>
        { AllRanks.map((rank) => <BoardRow key={rank} rank={rank} values={getRankValues(rank)} selected={this.state.values[rank]} onClick={event => { this.addOne(rank); }}/>)}
      </Board>
    );
  }
}

export default Split;
