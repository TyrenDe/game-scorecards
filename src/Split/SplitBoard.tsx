import * as React from "react";

import styled from "../Theme";
import CardRank from "./CardRank";
import BoardRow from "./BoardRow";

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

  private copyState(): IBoardState {
    return {
      negatives: this.state.negatives,
      values: {
        "A": this.state.values[CardRank.Ace],
        "K": this.state.values[CardRank.King],
        "Q": this.state.values[CardRank.Queen],
        "J": this.state.values[CardRank.Jack],
        "10": this.state.values[CardRank.Ten],
        "9": this.state.values[CardRank.Nine],
        "8": this.state.values[CardRank.Eight],
        "7": this.state.values[CardRank.Seven],
        "6": this.state.values[CardRank.Six],
        "5": this.state.values[CardRank.Five],
        "4": this.state.values[CardRank.Four],
        "3": this.state.values[CardRank.Three],
        "2": this.state.values[CardRank.Two],
      },
    };
  }

  private addOne(rank: CardRank) {
    let newState = this.copyState();

    newState.values[rank] = (newState.values[rank] + 1) % 6;

    this.setState(newState);
  }

  private addNegative() {
    let newState = this.copyState();

    newState.negatives++;

    this.setState(newState);
  }

  private subNegative() {
    let newState = this.copyState();

    newState.negatives--;
    if (newState.negatives < 0) {
      newState.negatives = 0;
    }

    this.setState(newState);
  }

  render() {
    return (
      <div>
        <ScoreHeader>
          <ScoreButton onClick={() => this.subNegative()}>+5</ScoreButton>
          <Score>Negative: {this.state.negatives * -5}</Score>
          <ScoreButton onClick={() => this.addNegative()}>-5</ScoreButton>
          <ScoreValue>Score: {this.calculateScore()}</ScoreValue>
        </ScoreHeader>
        { this.renderRow(CardRank.Ace) }
        { this.renderRow(CardRank.King) }
        { this.renderRow(CardRank.Queen) }
        { this.renderRow(CardRank.Jack) }
        { this.renderRow(CardRank.Ten) }
        { this.renderRow(CardRank.Nine) }
        { this.renderRow(CardRank.Eight) }
        { this.renderRow(CardRank.Seven) }
        { this.renderRow(CardRank.Six) }
        { this.renderRow(CardRank.Five) }
        { this.renderRow(CardRank.Four) }
        { this.renderRow(CardRank.Three) }
        { this.renderRow(CardRank.Two) }
      </div>
    );
  }
}

export default Split;