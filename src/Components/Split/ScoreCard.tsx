import * as Mui from '@material-ui/core';
import { bind } from 'decko';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from 'Store';
import * as split from 'Store/Split';

const localStyles = (theme: Mui.Theme) => Mui.createStyles({
  scoreCardPaper: {
    margin: theme.spacing(1),
    width: 360,
    minWidth: 360,
    padding: theme.spacing(1),
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
  scores: Record<string, split.ISplitScore>;
}

interface IScoreCardActions {
  addValue(name: string, rank: split.SplitRanks): void;
  removeValue(name: string, rank: split.SplitRanks): void;
}

type IAllScoreCardProps =
  IScoreCardProps &
  IScoreCardMappedProps &
  IScoreCardActions &
  Mui.WithStyles<typeof localStyles>;

const ValueMap: Record<split.SplitRanks, number[]> = {
  A: [0, 30, 70, 120, 180, 200],
  K: [0, 20, 50, 90, 140, 200],
  Q: [0, 20, 50, 90, 140, 200],
  J: [0, 20, 50, 90, 140, 200],
  10: [0, 10, 30, 60, 100, 200],
  9: [0, 10, 30, 60, 100, 200],
  8: [0, 10, 30, 60, 100, 200],
  7: [0, 10, 30, 60, 100, 200],
  6: [0, 10, 30, 60, 100, 200],
  5: [0, 10, 30, 60, 100, 200],
  4: [0, 10, 30, 60, 100, 200],
  3: [0, 10, 30, 60, 100, 200],
  2: [0, 5, 20, 40, 70, 200],

  Negative: [],
};

class ScoreCard extends React.Component<IAllScoreCardProps, {}> {
  private readonly ScoreName: string = 'SplitScore';

  public render(): JSX.Element {
    const myScore: split.ISplitScore = this.props.scores[this.ScoreName];

    return (
      <Mui.Paper className={this.props.classes.scoreCardPaper}>
        <Mui.Grid container={true}>
          <Mui.Grid item={true} xs={6} className={this.props.classes.right}>
            <Mui.Typography variant='h5'>
              Total:
            </Mui.Typography>
          </Mui.Grid>
          <Mui.Grid item={true} xs={6} className={this.props.classes.center}>
            <Mui.Typography variant='h5'>
              {this.calculateScore(myScore)}
            </Mui.Typography>
          </Mui.Grid>
        </Mui.Grid>
        <Mui.Divider variant='middle' />
        {this.createRow(myScore, split.SplitRanks.A)}
        {this.createRow(myScore, split.SplitRanks.K)}
        {this.createRow(myScore, split.SplitRanks.Q)}
        {this.createRow(myScore, split.SplitRanks.J)}
        {this.createRow(myScore, split.SplitRanks.Ten)}
        {this.createRow(myScore, split.SplitRanks.Nine)}
        {this.createRow(myScore, split.SplitRanks.Eight)}
        {this.createRow(myScore, split.SplitRanks.Seven)}
        {this.createRow(myScore, split.SplitRanks.Six)}
        {this.createRow(myScore, split.SplitRanks.Five)}
        {this.createRow(myScore, split.SplitRanks.Four)}
        {this.createRow(myScore, split.SplitRanks.Three)}
        {this.createRow(myScore, split.SplitRanks.Two)}
        <Mui.Grid container={true} justify='center' alignItems='center' className={this.props.classes.row}>
          <Mui.Grid item={true} xs={4}>
            <Mui.Button variant='outlined' onClick={() => this.handleIncrease(split.SplitRanks.Negative)}>
              -5
            </Mui.Button>
          </Mui.Grid>
          <Mui.Grid item={true} xs={4} className={this.props.classes.center}>
            <Mui.Typography variant='h5'>{this.getRankValues(myScore, split.SplitRanks.Negative)}</Mui.Typography>
          </Mui.Grid>
          <Mui.Grid item={true} xs={4} className={this.props.classes.right}>
            <Mui.Button variant='outlined' onClick={() => this.handleDecrease(split.SplitRanks.Negative)}>
              +5
        </Mui.Button>
          </Mui.Grid>
        </Mui.Grid>
      </Mui.Paper>
    );
  }

  @bind
  private getRankValues(myScore: split.ISplitScore, rank: split.SplitRanks): number {
    const index = myScore ? myScore.values[rank] : 0;

    if (rank === split.SplitRanks.Negative) {
      return -5 * index;
    }

    return ValueMap[rank][index];
  }

  @bind
  private calculateScore(myScore: split.ISplitScore): number {
    return this.getRankValues(myScore, split.SplitRanks.Negative) +
      this.getRankValues(myScore, split.SplitRanks.A) +
      this.getRankValues(myScore, split.SplitRanks.K) +
      this.getRankValues(myScore, split.SplitRanks.Q) +
      this.getRankValues(myScore, split.SplitRanks.J) +
      this.getRankValues(myScore, split.SplitRanks.Ten) +
      this.getRankValues(myScore, split.SplitRanks.Nine) +
      this.getRankValues(myScore, split.SplitRanks.Eight) +
      this.getRankValues(myScore, split.SplitRanks.Seven) +
      this.getRankValues(myScore, split.SplitRanks.Six) +
      this.getRankValues(myScore, split.SplitRanks.Five) +
      this.getRankValues(myScore, split.SplitRanks.Four) +
      this.getRankValues(myScore, split.SplitRanks.Three) +
      this.getRankValues(myScore, split.SplitRanks.Two);
  }

  @bind
  private handleIncrease(rank: split.SplitRanks): void {
    this.props.addValue(this.ScoreName, rank);
  }

  @bind
  private handleDecrease(rank: split.SplitRanks): void {
    this.props.removeValue(this.ScoreName, rank);
  }

  @bind
  private createRow(myScore: split.ISplitScore, rank: split.SplitRanks): JSX.Element {
    const selectedIndex = myScore ? myScore.values[rank] : 0;

    const avatars: JSX.Element[] = [];
    for (let index = 0; index < 6; index++) {
      let avatarClass = this.props.classes.avatar;
      if (index === selectedIndex) {
        avatarClass = `${avatarClass} ${this.props.classes.selectedAvatar}`;
      }

      avatars.push(<Mui.Avatar key={`${rank.toString()}-${index}`} className={avatarClass}>{ValueMap[rank][index]}</Mui.Avatar>);
    }

    return (
      <React.Fragment>
        <Mui.Grid container={true} justify='center' alignItems='center' className={this.props.classes.row}>
          <Mui.Button variant='outlined' onClick={() => this.handleIncrease(rank)} style={{ marginRight: 10 }}>
            {rank.toString()}
          </Mui.Button>
          {avatars}
        </Mui.Grid>
        <Mui.Divider />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: AppState): IScoreCardMappedProps => ({
  scores: state.split.scores,
});

const mapDispatchToProps = (dispatch: Dispatch): IScoreCardActions => ({
  addValue: (name: string, rank: split.SplitRanks) => dispatch(split.addValue(name, rank)),
  removeValue: (name: string, rank: split.SplitRanks) => dispatch(split.removeValue(name, rank)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mui.withStyles(localStyles)(ScoreCard));
