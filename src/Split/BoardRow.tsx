import * as React from "react";
import styled from "styled-components";

import { IStorecardThemeProps } from "../Theme";
import { CardRank } from "./CardRank";

const SquareHeader = styled.button`
  background: ${ (props: IStorecardThemeProps) => props.theme!.SecondaryBackgroundColor };
  color: ${ (props: IStorecardThemeProps) => props.theme!.PrimaryColor };
  border: 1px solid ${ (props: IStorecardThemeProps) => props.theme!.InverseBackgroundColor };
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
  background: ${ (props: IStorecardThemeProps) => props.theme!.InverseBackgroundColor };
  border: 1px solid ${ (props: IStorecardThemeProps) => props.theme!.SecondaryBackgroundColor };
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
  color: ${ (props: IStorecardThemeProps) => props.theme!.InverseColor };

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
  selected: number;
}

class BoardRow extends React.Component<IRowProp, IRowState> {
  constructor(props: IRowProp) {
    super(props);

    this.state = {
      selected: 0,
    };
  }

  public static getRankValues(rank: CardRank): number[] {
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

  private addOne() {
    this.setState({ selected: (this.state.selected + 1) % 6 });
  }

  render() {
    let values = BoardRow.getRankValues(this.props.rank);
    return (<div className="splitRow">
      <SquareHeader onClick={() => { this.addOne(); }}>{this.props.rank}</SquareHeader>
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
