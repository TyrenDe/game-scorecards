import * as React from "react";
import CardRank from "./CardRank";
import BoardRow from "./BoardRow";

export interface IBoardState {
  negatives: number,
}

class Split extends React.Component {
  render() {
    return (
      <div>
        <BoardRow rank={CardRank.Ace} />
        <BoardRow rank={CardRank.King} />
        <BoardRow rank={CardRank.Queen} />
        <BoardRow rank={CardRank.Jack} />
        <BoardRow rank={CardRank.Ten} />
        <BoardRow rank={CardRank.Nine} />
        <BoardRow rank={CardRank.Eight} />
        <BoardRow rank={CardRank.Seven} />
        <BoardRow rank={CardRank.Six} />
        <BoardRow rank={CardRank.Five} />
        <BoardRow rank={CardRank.Four} />
        <BoardRow rank={CardRank.Three} />
        <BoardRow rank={CardRank.Two} />
      </div>
    );
  }
}

export default Split;