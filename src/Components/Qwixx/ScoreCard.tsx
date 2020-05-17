import * as Mui from '@material-ui/core';
import { bind } from 'decko';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from 'Store';
import * as qwixx from 'Store/Qwixx';
import scorecardImage from './qwixxscorecard.png';

const localStyles = (theme: Mui.Theme) => Mui.createStyles({
  scoreCardPaper: {
    margin: theme.spacing(1),
    width: 700,
    height: 500,
    padding: theme.spacing(1),
    backgroundImage: `url(${scorecardImage})`,
    backgroundSize: 700,
  },
  avatar: {
    fontWeight: 'bold',
    fontSize: 16,
    height: 30,
    width: 30,
    margin: theme.spacing(0.5),
  },
  selectedAvatar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  row: {
    marginTop: theme.spacing(0.25),
    marginBottom: theme.spacing(0.25),
  },
  right: {
    textAlign: 'right',
  },
  center: {
    textAlign: 'center',
  },
});

interface IScoreCardProps {
}

interface IScoreCardMappedProps {
  values: Record<qwixx.QwixxRanks, number[]>;
}

interface IScoreCardActions {
  addValue(rank: qwixx.QwixxRanks, number: number): void;
  removeValue(rank: qwixx.QwixxRanks, number: number): void;
}

type IAllScoreCardProps =
  IScoreCardProps &
  IScoreCardMappedProps &
  IScoreCardActions &
  Mui.WithStyles<typeof localStyles>;

const ValueMap: number[] = [ 0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78 ];
const LeftMap: number[] = [ 0, 0, 65, 119, 172, 225, 279, 332, 386, 439, 493, 546, 600, 655 ];

const TopMap: Map<qwixx.QwixxRanks, number> = new Map<qwixx.QwixxRanks, number>([
  [qwixx.QwixxRanks.Red, 115],
  [qwixx.QwixxRanks.Yellow, 189],
  [qwixx.QwixxRanks.Green, 263],
  [qwixx.QwixxRanks.Blue, 337],
]);

const ScoreLeftMap: Map<qwixx.QwixxRanks, number> = new Map<qwixx.QwixxRanks, number>([
  [qwixx.QwixxRanks.Red, 100],
  [qwixx.QwixxRanks.Yellow, 198],
  [qwixx.QwixxRanks.Green, 296],
  [qwixx.QwixxRanks.Blue, 490],
  [qwixx.QwixxRanks.Negative, 392],
]);

class ScoreCard extends React.Component<IAllScoreCardProps, {}> {
  public render(): JSX.Element {
    return (
      <Mui.Paper className={this.props.classes.scoreCardPaper}>
        <Mui.Typography variant='h2' style={this.getRankPosition(qwixx.QwixxRanks.Red, 2)}>X</Mui.Typography>
        <Mui.Typography variant='h2' style={this.getRankPosition(qwixx.QwixxRanks.Yellow, 5)}>X</Mui.Typography>
        <Mui.Typography variant='h2' style={this.getRankPosition(qwixx.QwixxRanks.Green, 8)}>X</Mui.Typography>
        <Mui.Typography variant='h2' style={this.getRankPosition(qwixx.QwixxRanks.Blue, 11)}>X</Mui.Typography>

        {this.getNegativeRows()}

        {this.getScoreRow(qwixx.QwixxRanks.Red)}
        {this.getScoreRow(qwixx.QwixxRanks.Yellow)}
        {this.getScoreRow(qwixx.QwixxRanks.Green)}
        {this.getScoreRow(qwixx.QwixxRanks.Blue)}
        {this.getScoreRow(qwixx.QwixxRanks.Negative)}
        {this.getTotalScoreRow()}
      </Mui.Paper>
    );
  }

  @bind
  private getNegativeRows(): React.ReactNode {
    const rows: React.ReactNode[] = [];
    if (this.props.values[qwixx.QwixxRanks.Negative].length > 0) {
      rows.push(<Mui.Typography variant='h4' style={{color: 'black', position: 'absolute', left: 593, top: 448}}>X</Mui.Typography>);
    }
    if (this.props.values[qwixx.QwixxRanks.Negative].length > 1) {
      rows.push(<Mui.Typography variant='h4' style={{color: 'black', position: 'absolute', left: 621, top: 448}}>X</Mui.Typography>);
    }
    if (this.props.values[qwixx.QwixxRanks.Negative].length > 2) {
      rows.push(<Mui.Typography variant='h4' style={{color: 'black', position: 'absolute', left: 651, top: 448}}>X</Mui.Typography>);
    }
    if (this.props.values[qwixx.QwixxRanks.Negative].length > 3) {
      rows.push(<Mui.Typography variant='h4' style={{color: 'black', position: 'absolute', left: 681, top: 448}}>X</Mui.Typography>);
    }

    return (
      <React.Fragment>
        {rows}
      </React.Fragment>
    );
  }

  @bind
  private getScoreRow(rank: qwixx.QwixxRanks): React.ReactNode {
    let score: number = ValueMap[this.props.values[rank].length];
    if (rank === qwixx.QwixxRanks.Negative) {
      score = 5 * this.props.values[rank].length;
    }
    return <Mui.Typography variant='h3' style={{color: 'black', position: 'absolute', left: ScoreLeftMap.get(rank), top: 509}}>{score}</Mui.Typography>
  }

  @bind
  private getTotalScoreRow(): React.ReactNode {
    const score: number = ValueMap[this.props.values[qwixx.QwixxRanks.Red].length] +
      ValueMap[this.props.values[qwixx.QwixxRanks.Yellow].length] +
      ValueMap[this.props.values[qwixx.QwixxRanks.Green].length] +
      ValueMap[this.props.values[qwixx.QwixxRanks.Blue].length] -
      5 * this.props.values[qwixx.QwixxRanks.Negative].length;

      return <Mui.Typography variant='h3' style={{color: 'black', position: 'absolute', left: 594, top: 509}}>{score}</Mui.Typography>
  }

  @bind
  private getRankPosition(rank: qwixx.QwixxRanks, number: number): React.CSSProperties {
    return {color: 'black', position: 'absolute', left: LeftMap[number], top: TopMap.get(rank)};
  }
}

const mapStateToProps = (state: AppState): IScoreCardMappedProps => ({
  values: state.qwixx.values,
});

const mapDispatchToProps = (dispatch: Dispatch): IScoreCardActions => ({
  addValue: (rank: qwixx.QwixxRanks, number: number) => dispatch(qwixx.addValue(rank, number)),
  removeValue: (rank: qwixx.QwixxRanks, number: number) => dispatch(qwixx.removeValue(rank, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mui.withStyles(localStyles)(ScoreCard));
