import * as React from "react";

import styled from "../Theme";
import { CardRank } from "./CardRank";

const SquareHeader = styled.button`
  background: ${ props => props.theme.SecondaryBackgroundColor };
  color: ${ props => props.theme.PrimaryColor };
  border: 1px solid ${ props => props.theme.InverseBackgroundColor };
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

const Square = styled<{isSelected: boolean}, "div">("div")`
  background: ${ props => props.isSelected ? props.theme.PrimaryBackgroundColor : props.theme.InverseBackgroundColor };
  border: 1px solid ${ props => props.isSelected ? props.theme.PrimaryColor : props.theme.SecondaryBackgroundColor };
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
  color: ${ props => props.isSelected ? props.theme.PrimaryColor : props.theme.InverseColor };

  ::after {
    clear: both;
    content: "";
    display: table;
  }
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
    return (
      <Square isSelected={(this.props.selected == index)}>{this.props.values[index]}</Square>
    )
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
