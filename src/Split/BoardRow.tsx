import * as React from "react";

import styled from "../Theme";
import { CardRank } from "./CardRank";

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(30px, auto);

  padding-top: 5px;
`;

const SquareHeader = styled.button`
  color: ${ props => props.theme.ButtonColor };
  background-color: ${ props => props.theme.ButtonBackgroundColor };
  border-bottom: 1px solid ${ props => props.theme.ButtonColor };

  font-weight: bold;
`;

const Square = styled<{isSelected: boolean}, "div">("div")`
  background: ${ props => props.isSelected ? props.theme.PrimaryBackgroundColor : props.theme.InverseBackgroundColor };
  color: ${ props => props.isSelected ? props.theme.PrimaryColor : props.theme.InverseColor };
  border: 1px solid ${ props => props.isSelected ? props.theme.PrimaryColor : props.theme.SecondaryBackgroundColor };

  text-align: center;
  padding-top: 2px;
  font-weight: ${ props => props.isSelected ? "bold" : "normal" };
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

  public render(): React.ReactNode {
    return (<Row>
      <SquareHeader onClick={(event) => { this.handleClick(event); }}>{this.props.rank}</SquareHeader>
      { this.props.values.map((value, index) =>
        <Square
          key={index}
          isSelected={(this.props.selected == index)}>
          {this.props.values[index]}
        </Square>)}
    </Row>);
  }
}

export default BoardRow;
