import * as React from "react";
import styled from "styled-components";

import * as Theme from "../Theme";
import { CardRank } from "./CardRank";

const SquareHeader = styled.button`
  background: ${ Theme.SecondaryBackgroundColor };
  color: ${ Theme.PrimaryColor };
  border: 1px solid ${ Theme.InverseBackgroundColor };
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 55px;
`;

const Square = styled.div`
  background: ${ Theme.InverseBackgroundColor };
  border: 1px solid ${ Theme.SecondaryBackgroundColor };
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 55px;
  color: ${ Theme.InverseColor };

  ::after {
    clear: both;
    content: "";
    display: table;
  }
`;

interface IRowProp {
  rank: CardRank;
}

interface IRowState {
  selected?: number;
}

class BoardRow extends React.Component<IRowProp, IRowState> {
  constructor(props: IRowProp) {
    super(props);
    this.state = {
      selected: 0,
    };
  }

  getRankString(): string {
    switch (this.props.rank) {
      case CardRank.Ace: return "A";
      case CardRank.King: return "K";
      case CardRank.Queen: return "Q";
      case CardRank.Jack: return "J";
      case CardRank.Ten: return "10";
      case CardRank.Nine: return "9";
      case CardRank.Eight: return "8";
      case CardRank.Seven: return "7";
      case CardRank.Six: return "6";
      case CardRank.Five: return "5";
      case CardRank.Four: return "4";
      case CardRank.Three: return "3";
      case CardRank.Two: return "2";
      default: return "";
    }
  }

  getRankValues(): number[] {
    switch (this.props.rank) {
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

  render() {
    let values = this.getRankValues();
    return (<div className="splitRow">
      <SquareHeader onClick={() => { this.setState({ selected: 0 }); }}>{this.getRankString()}</SquareHeader>
      <Square>{values[0]}</Square>
      <Square>{values[1]}</Square>
      <Square>{values[2]}</Square>
      <Square>{values[3]}</Square>
      <Square>{values[4]}</Square>
      <Square>{values[5]}</Square>
    </div>);
  }
}

export default BoardRow;
