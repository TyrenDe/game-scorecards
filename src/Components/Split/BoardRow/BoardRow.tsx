import * as React from "react";

import { Row, SquareHeader, Square } from "./Styles";

import { CardRank } from "../CardRank";

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
