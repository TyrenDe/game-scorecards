import * as Mui from '@material-ui/core';
import { bind } from 'decko';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from 'Store';
import * as generic from 'Store/Generic';

const localStyles = (theme: Mui.Theme) => Mui.createStyles({
  scoreCardPaper: {
    margin: theme.spacing(1),
    width: 170,
    padding: theme.spacing(1),
    textAlign: 'center',
  },
  scoreButton: {
    margin: theme.spacing(1),
  },
});

interface IScoreCardProps {
  name: string;
}

interface IScoreCardMappedProps {
  scores: Record<string, number>;
}

interface IScoreCardActions {
  addScore(name: string, value: number): void;
}

type IAllScoreCardProps =
  IScoreCardProps &
  IScoreCardMappedProps &
  IScoreCardActions &
  Mui.WithStyles<typeof localStyles>;

interface IScoreCardState {
  showScoreDialog: boolean;
  value: string;
}

class ScoreCard extends React.Component<IAllScoreCardProps, IScoreCardState> {
  constructor(p: IAllScoreCardProps) {
    super(p);

    this.state = {
      showScoreDialog: false,
      value: '',
    };
  }

  @bind
  public render(): React.ReactNode {
    const myScore: number = this.props.scores[this.props.name] ? this.props.scores[this.props.name] : 0;

    return (
      <React.Fragment>
        <Mui.Paper className={this.props.classes.scoreCardPaper}>
          <Mui.Typography variant='h5'>{this.props.name}: {myScore}</Mui.Typography>
          <Mui.Divider />
          <Mui.Button className={this.props.classes.scoreButton} color='primary' variant='contained' onClick={this.handleScoreRound}>Add Score</Mui.Button>
        </Mui.Paper>

        <Mui.Dialog open={this.state.showScoreDialog} maxWidth='xs' fullWidth={true} onClose={this.handleDialogClose}>
          <Mui.DialogTitle>
            Scoring for: {this.props.name}
          </Mui.DialogTitle>

          <Mui.Divider />

          <Mui.DialogContent>
            <Mui.TextField
              value={this.state.value}
              type='number'
              onChange={this.handleChange}
              label='Points'
              onKeyPress={this.handleKeyPress}
              fullWidth={true}
              autoFocus={true}
            />
          </Mui.DialogContent>
          <Mui.DialogActions>
            <Mui.Button
              variant='contained'
              color='primary'
              onClick={this.handleDialogClose}
            >
              Cancel
            </Mui.Button>

            <Mui.Button
              onClick={this.handleUpdateScore}
              variant='contained'
              color='primary'
            >
              Add
            </Mui.Button>
          </Mui.DialogActions>
        </Mui.Dialog>
      </React.Fragment>
    );
  }

  @bind
  private handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.key === 'Enter') {
      this.handleUpdateScore();
      event.preventDefault();
    }
  }

  @bind
  private handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      value: event.target.value,
    });
  }

  @bind
  private handleDialogClose(): void {
    this.setState({
      showScoreDialog: false,
    });
  }

  @bind
  private handleScoreRound(): void {
    this.setState({
      showScoreDialog: true,
      value: '',
    });
  }

  @bind
  private handleUpdateScore(): void {
    const value = parseInt(this.state.value, 10);
    if (!isNaN(value)) {
      this.props.addScore(this.props.name, value);
    }

    this.setState({
      showScoreDialog: false,
    });
  }
}

const mapStateToProps = (state: AppState): IScoreCardMappedProps => ({
  scores: state.generic.scores,
});

const mapDispatchToProps = (dispatch: Dispatch): IScoreCardActions => ({
  addScore: (name: string, value: number) => dispatch(generic.addScore(name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mui.withStyles(localStyles)(ScoreCard));
