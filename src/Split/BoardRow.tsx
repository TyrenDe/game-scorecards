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

const SelectedSquare = styled(Square)`
  background: ${ (props: IStorecardThemeProps) => props.theme!.PrimaryBackgroundColor };
  color: ${ (props: IStorecardThemeProps) => props.theme!.PrimaryColor };
  border: 1px dashed ${ (props: IStorecardThemeProps) => props.theme!.PrimaryColor };
`;

interface IRowProp {
  rank: CardRank;
  values: number[];
  selected: number;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

class BoardRow extends React.Component<IRowProp> {
  constructor(props: IRowProp) {
    super(props);
  }

  private handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
    this.props.onClick(event);
  }

  renderValue(index: number) {
    if (this.props.selected == index) {
      return (
        <SelectedSquare>{this.props.values[index]}</SelectedSquare>
      );
    }
    else {
      return (
        <Square>{this.props.values[index]}</Square>
      );
    }
  }

  render() {
    return (<div className="splitRow">
      <SquareHeader onClick={(event) => { this.handleClick(event); }}>{this.props.rank}</SquareHeader>
      {this.renderValue(0)}
      {this.renderValue(1)}
      {this.renderValue(2)}
      {this.renderValue(3)}
      {this.renderValue(4)}
      {this.renderValue(5)}
    </div>);
  }
}

export default BoardRow;
