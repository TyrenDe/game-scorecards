import * as Mui from '@material-ui/core';
import { bind } from 'decko';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../../Store';
import * as milleBornes from '../../Store/MilleBornes';
import SafetyRow from './SafetyRow';

const localStyles = (theme: Mui.Theme) => Mui.createStyles({
  marginTop: {
    marginTop: 10,
  },
  right: {
    textAlign: 'right',
  },
  center: {
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  scoreButton: {
    margin: theme.spacing(1),
  },
  scoreCardPaper: {
    margin: theme.spacing(1),
    width: 170,
    padding: theme.spacing(1),
    textAlign: 'center',
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
  distance: number;
  rightOfWayPlayed: boolean;
  rightOfWayPlayedCF: boolean;
  drivingAcePlayed: boolean;
  drivingAcePlayedCF: boolean;
  fuelTankPlayed: boolean;
  fuelTankPlayedCF: boolean;
  punctureProofPlayed: boolean;
  punctureProofPlayedCF: boolean;
  delayedAction: boolean;
  safeTrip: boolean;
  extension: boolean;
  shutout: boolean;
}

class ScoreCard extends React.Component<IAllScoreCardProps, IScoreCardState> {
  constructor(p: IAllScoreCardProps) {
    super(p);

    this.state = {
      showScoreDialog: false,
      distance: 0,
      rightOfWayPlayed: false,
      rightOfWayPlayedCF: false,
      drivingAcePlayed: false,
      drivingAcePlayedCF: false,
      fuelTankPlayed: false,
      fuelTankPlayedCF: false,
      punctureProofPlayed: false,
      punctureProofPlayedCF: false,
      delayedAction: false,
      safeTrip: false,
      extension: false,
      shutout: false,
    };
  }

  public render(): JSX.Element {
    return (
      <React.Fragment>
        <Mui.Paper className={this.props.classes.scoreCardPaper}>
          <Mui.Typography variant='h5'>{this.props.name}: {this.getScore()}</Mui.Typography>
          <Mui.Divider />
          <Mui.Button className={this.props.classes.scoreButton} color='primary' variant='contained' onClick={this.handleScoreRound}>Add Score</Mui.Button>
        </Mui.Paper>

        <Mui.Dialog open={this.state.showScoreDialog} maxWidth='xs' fullWidth={true} onClose={this.handleDialogClose}>
          <Mui.DialogTitle>
            Scoring for: {this.props.name}
          </Mui.DialogTitle>

          <Mui.Divider />

          <Mui.DialogContent>
            <Mui.Typography id='distance-slider' gutterBottom={true}>Distance</Mui.Typography>
            <Mui.Slider
              aria-labelledby='distance-slider'
              valueLabelDisplay='on'
              step={25}
              min={0}
              max={1000}
              marks={true}
              value={this.state.distance}
              onChange={this.handleDistanceChanged}
            />

            <Mui.Grid container={true}>
              <Mui.Grid item={true} xs={6} className={this.props.classes.right}></Mui.Grid>
              <Mui.Grid item={true} xs={3} className={this.props.classes.center}><Mui.Typography>Played</Mui.Typography></Mui.Grid>
              <Mui.Grid item={true} xs={3} className={this.props.classes.center}><Mui.Typography>Coup-fourré</Mui.Typography></Mui.Grid>

              <SafetyRow name='Right of Way' hideCoupFourre={true} played={this.state.rightOfWayPlayed} coupFourre={this.state.rightOfWayPlayedCF} togglePlayed={this.handleToggleRightOfWay} toggleCoupFourre={this.handleToggleRightOfWayCF} />
              <SafetyRow name='Driving Ace' played={this.state.drivingAcePlayed} coupFourre={this.state.drivingAcePlayedCF} togglePlayed={this.handleToggleDrivingAce} toggleCoupFourre={this.handleToggleDrivingAceCF} />
              <SafetyRow name='Extra Tank' played={this.state.fuelTankPlayed} coupFourre={this.state.fuelTankPlayedCF} togglePlayed={this.handleToggleFuelTank} toggleCoupFourre={this.handleToggleFuelTankCF} />
              <SafetyRow name='Puncture Proof' played={this.state.punctureProofPlayed} coupFourre={this.state.punctureProofPlayedCF} togglePlayed={this.handleTogglePunctureProof} toggleCoupFourre={this.handleTogglePunctureProofCF} />

              <Mui.Grid item={true} xs={4} className={this.props.classes.right}>
                <Mui.Typography className={this.props.classes.marginTop}>Delayed Action:</Mui.Typography>
              </Mui.Grid>
              <Mui.Grid item={true} xs={2} className={this.props.classes.center}><Mui.Checkbox disabled={this.state.distance < 1000} checked={this.state.delayedAction} onChange={this.handleToggleDelayedAction} /></Mui.Grid>

              <Mui.Grid item={true} xs={4} className={this.props.classes.right}>
                <Mui.Typography className={this.props.classes.marginTop}>Safe Trip:</Mui.Typography>
              </Mui.Grid>
              <Mui.Grid item={true} xs={2} className={this.props.classes.center}><Mui.Checkbox disabled={this.state.distance < 1000} checked={this.state.safeTrip} onChange={this.handleToggleSafeTrip} /></Mui.Grid>

              {/* <Mui.Grid item={true} xs={4} className={this.props.classes.right}>
                <Mui.Typography className={this.props.classes.marginTop}>Extension:</Mui.Typography>
              </Mui.Grid>
              <Mui.Grid item={true} xs={2} className={this.props.classes.center}><Mui.Checkbox checked={this.state.extension} onChange={this.handleToggleExtension} /></Mui.Grid> */}

              <Mui.Grid item={true} xs={4} className={this.props.classes.right}>
                <Mui.Typography className={this.props.classes.marginTop}>Shutout:</Mui.Typography>
              </Mui.Grid>
              <Mui.Grid item={true} xs={2} className={this.props.classes.center}><Mui.Checkbox disabled={this.state.distance < 1000} checked={this.state.shutout} onChange={this.handleToggleShutout} /></Mui.Grid>
            </Mui.Grid>
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
  private handleDistanceChanged(event: React.ChangeEvent<{}>, value: number | number[]): void {
    if (Array.isArray(value)) {
      value = value[value.length - 1];
    }

    this.setState({
      distance: value,
    });
  }

  @bind
  private handleToggleDelayedAction(): void {
    this.setState({
      delayedAction: !this.state.delayedAction,
    });
  }

  @bind
  private handleToggleShutout(): void {
    this.setState({
      shutout: !this.state.shutout,
    });
  }

  @bind
  private handleToggleSafeTrip(): void {
    this.setState({
      safeTrip: !this.state.safeTrip,
    });
  }

  @bind
  private handleToggleRightOfWay(): void {
    this.setState({
      rightOfWayPlayed: !this.state.rightOfWayPlayed,
      rightOfWayPlayedCF: false,
    });
  }

  @bind
  private handleToggleRightOfWayCF(): void {
    this.setState({
      rightOfWayPlayedCF: !this.state.rightOfWayPlayedCF,
    });
  }

  @bind
  private handleToggleDrivingAce(): void {
    this.setState({
      drivingAcePlayed: !this.state.drivingAcePlayed,
      drivingAcePlayedCF: false,
    });
  }

  @bind
  private handleToggleDrivingAceCF(): void {
    this.setState({
      drivingAcePlayedCF: !this.state.drivingAcePlayedCF,
    });
  }

  @bind
  private handleToggleFuelTank(): void {
    this.setState({
      fuelTankPlayed: !this.state.fuelTankPlayed,
      fuelTankPlayedCF: false,
    });
  }

  @bind
  private handleToggleFuelTankCF(): void {
    this.setState({
      fuelTankPlayedCF: !this.state.fuelTankPlayedCF,
    });
  }

  @bind
  private handleTogglePunctureProof(): void {
    this.setState({
      punctureProofPlayed: !this.state.punctureProofPlayed,
      punctureProofPlayedCF: false,
    });
  }

  @bind
  private handleTogglePunctureProofCF(): void {
    this.setState({
      punctureProofPlayedCF: !this.state.punctureProofPlayedCF,
    });
  }

  @bind
  private handleDialogClose(): void {
    this.setState({
      showScoreDialog: false,
    });
  }

  @bind
  private handleUpdateScore(): void {
    let score: number = 0;

    score += this.state.distance;

    if (this.state.drivingAcePlayed) {
      score += 100;
      if (this.state.drivingAcePlayedCF) {
        score += 300;
      }
    }

    if (this.state.fuelTankPlayed) {
      score += 100;
      if (this.state.fuelTankPlayedCF) {
        score += 300;
      }
    }

    if (this.state.punctureProofPlayed) {
      score += 100;
      if (this.state.punctureProofPlayedCF) {
        score += 300;
      }
    }

    if (this.state.rightOfWayPlayed) {
      score += 100;
      if (this.state.rightOfWayPlayedCF) {
        score += 300;
      }
    }

    if (this.state.drivingAcePlayed && this.state.fuelTankPlayed && this.state.punctureProofPlayed && this.state.rightOfWayPlayed) {
      score += 300;
    }

    if (this.state.distance === 1000) {
      score += 400;

      if (this.state.shutout) {
        score += 500;
      }

      if (this.state.safeTrip) {
        score += 300;
      }

      if (this.state.extension) {
        score += 200;
      }

      if (this.state.delayedAction) {
        score += 300;
      }
    }

    this.props.addScore(this.props.name, score);
    this.setState({
      showScoreDialog: false,
      distance: 0,
      rightOfWayPlayed: false,
      rightOfWayPlayedCF: false,
      drivingAcePlayed: false,
      drivingAcePlayedCF: false,
      fuelTankPlayed: false,
      fuelTankPlayedCF: false,
      punctureProofPlayed: false,
      punctureProofPlayedCF: false,
      delayedAction: false,
      safeTrip: false,
      extension: false,
      shutout: false,
    });
  }

  @bind
  private getScore(): number {
    const score = this.props.scores[this.props.name];
    return score ? score : 0;
  }

  @bind
  private handleScoreRound(): void {
    this.setState({
      showScoreDialog: true,
    });
  }
}

const mapStateToProps = (state: AppState): IScoreCardMappedProps => ({
  scores: state.milleBornes.scores,
});

const mapDispatchToProps = (dispatch: Dispatch): IScoreCardActions => ({
  addScore: (name: string, value: number) => dispatch(milleBornes.addScore(name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mui.withStyles(localStyles)(ScoreCard));
