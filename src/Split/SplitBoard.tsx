import * as React from "react";

import styled from "../Theme";
import CardRank from "./CardRank";
import BoardRow from "./BoardRow";
import { throws } from "assert";

type CardRankMap = {[TKey in CardRank]: number};

const ScoreHeader = styled.div`
  width: ${55 * 7}px;
  margin-bottom: 10px;

   ::after {
    clear: both;
    content: "";
    display: table;
  }
`;

const Score = styled.div`
  float: left;
  margin: 0px 20px 0px 20px;
`;

const ScoreValue = styled(Score)`
  margin: 0px 0px 0px 40px;
`;

const ScoreButton = styled.button`
  float: left;
`;

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

  private static getRankValues(rank: CardRank): number[] {
    switch (rank) {
      case CardRank.Ace: return [0, 30, 70, 120, 180, 200];
      case CardRank.King:
      case CardRank.Queen:
      case CardRank.Jack:
        return [0, 20, 50, 90, 140, 200];
      case CardRank.Ten:
      case CardRank.Nine:
      case CardRank.Eight:
      case CardRank.Seven:
      case CardRank.Six:
      case CardRank.Five:
      case CardRank.Four:
      case CardRank.Three:
        return [0, 10, 30, 60, 100, 200];
      case CardRank.Two: return [0, 5, 20, 40, 70, 200];
      default: return [];
    }
  }

  private calculateScore(): number {
    return this.state.negatives * -5 + 
      Split.getRankValues(CardRank.Ace)[this.state.values[CardRank.Ace]] +
      Split.getRankValues(CardRank.King)[this.state.values[CardRank.King]] +
      Split.getRankValues(CardRank.Queen)[this.state.values[CardRank.Queen]] +
      Split.getRankValues(CardRank.Jack)[this.state.values[CardRank.Jack]] +
      Split.getRankValues(CardRank.Ten)[this.state.values[CardRank.Ten]] +
      Split.getRankValues(CardRank.Nine)[this.state.values[CardRank.Nine]] +
      Split.getRankValues(CardRank.Eight)[this.state.values[CardRank.Eight]] +
      Split.getRankValues(CardRank.Seven)[this.state.values[CardRank.Seven]] +
      Split.getRankValues(CardRank.Six)[this.state.values[CardRank.Six]] +
      Split.getRankValues(CardRank.Five)[this.state.values[CardRank.Five]] +
      Split.getRankValues(CardRank.Four)[this.state.values[CardRank.Four]] +
      Split.getRankValues(CardRank.Three)[this.state.values[CardRank.Three]] +
      Split.getRankValues(CardRank.Two)[this.state.values[CardRank.Two]];
  }

  renderRow(rank: CardRank) {
    return (
      <BoardRow rank={rank} values={Split.getRankValues(rank)} selected={this.state.values[rank]} onClick={event => { this.addOne(rank); }}/>
    );
  }

  private addOne(rank: CardRank) {
    let newState = { ...this.state };

    newState.values[rank] = (newState.values[rank] + 1) % 6;

    this.setState(newState);
  }

  private addNegative() {
    let newState = { ...this.state };

    newState.negatives++;

    this.setState(newState);
  }

  private subNegative() {
    let newState = { ...this.state };

    newState.negatives--;
    if (newState.negatives < 0) {
      newState.negatives = 0;
    }

    this.setState(newState);
  }

  render() {
    const allRanks = [
      CardRank.Ace,
      CardRank.King,
      CardRank.Queen,
      CardRank.Jack,
      CardRank.Ten,
      CardRank.Nine,
      CardRank.Eight,
      CardRank.Seven,
      CardRank.Six,
      CardRank.Five,
      CardRank.Four,
      CardRank.Three,
      CardRank.Two];
    return (
      <div>
        <ScoreHeader>
          <ScoreButton onClick={() => this.addNegative()}>-5</ScoreButton>
          <Score>Negative: {this.state.negatives * -5}</Score>
          <ScoreButton onClick={() => this.subNegative()}>+5</ScoreButton>
          <ScoreValue>Score: {this.calculateScore()}</ScoreValue>
        </ScoreHeader>
        { allRanks.map((rank) => <BoardRow rank={rank} values={Split.getRankValues(rank)} selected={this.state.values[rank]} onClick={event => { this.addOne(rank); }}/>)}
      </div>
    );
  }
}

export default Split;