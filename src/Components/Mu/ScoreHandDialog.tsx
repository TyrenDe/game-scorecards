import * as Mui from '@material-ui/core';
import * as React from 'react';
import { bind } from 'decko';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from 'Store';
import * as mu from 'Store/Mu';
import Trumps from './Trumps';
import TrumpSelector from './TrumpSelector';

const localStyles = (theme: Mui.Theme) => Mui.createStyles({
  center: {
    marginTop: 8,
  },
});

const PointsPerBid = [0, 0, 0, 0, 2, 3, 4];
function getChiefTeamBidMade(playerCount: number, points: number): number {
  let currentPoints = 62 - playerCount; // Hacky, but works, as 4 player = 58, 5 player = 57, 6 player = 56
  let currentBid = 60 / playerCount;
  while (currentPoints > points) {
    currentBid--;
    currentPoints -= PointsPerBid[playerCount];
  }

  return Math.max(0, currentBid);
}

function getChiefTeamBonus(overTrump: Trumps, bid: number): number {
  switch (overTrump) {
    case Trumps.Black:
    case Trumps.Blue:
    case Trumps.Green:
    case Trumps.Red:
    case Trumps.Yellow:
      return 10 * Math.min(10, bid);

    case Trumps.One:
    case Trumps.Seven:
      return 10 + 10 * Math.min(9, bid);

    case Trumps.None:
      return 30 + 10 * Math.min(7, bid);
  }

  // 0, 2, 3, 4, 5, 6, 8, 9
  return 20 + 10 * Math.min(6, bid);
}

interface IScoreHandDialogMappedProps {
  names: string[];
}

interface IScoreHandDialogProps {
  showDialog: boolean;
  onClose(): void;
}

interface IScoreHandDialogActions {
  addScore(name: string, value: number): void;
}

type IAllScoreHandDialogProps =
  IScoreHandDialogMappedProps &
  IScoreHandDialogProps &
  IScoreHandDialogActions &
  Mui.WithStyles<typeof localStyles>;

interface IScoreHandDialogState {
  bid: number;
  overTrump: Trumps;
  underTrump: Trumps;
  chief: string;
  vice: string;
  partner: string;
  points: Record<string, string>;
}

class ScoreHandDialog extends React.Component<IAllScoreHandDialogProps, IScoreHandDialogState> {
  constructor(p: IAllScoreHandDialogProps) {
    super(p);

    this.state = this.getDefaultState();
  }

  public componentDidUpdate(prevProps: IAllScoreHandDialogProps): void {
    if (!prevProps.showDialog && this.props.showDialog) {
      this.setState(this.getDefaultState());
    }
  }

  @bind
  public render(): React.ReactNode {
    return (
      <Mui.Dialog open={this.props.showDialog} maxWidth='sm' fullWidth={true} onClose={this.handleDialogClose}>
          <Mui.DialogContent>
            <Mui.Grid container={true} spacing={2}>
              <Mui.Grid item={true} sm={4} xs={12}>
                <Mui.Typography>Bid</Mui.Typography>
                <Mui.Slider
                  value={this.state.bid}
                  onChange={this.handleBidChanged}
                  min={1}
                  max={60 / this.props.names.length}
                  step={1}
                  valueLabelDisplay='on'
                  marks={true}
                />
              </Mui.Grid>
              <Mui.Grid item={true} sm={4} xs={12}>
                <TrumpSelector label='Over Trump' trump={this.state.overTrump} onTrumpChanged={this.handleOverTrumpChanged}/>
              </Mui.Grid>
              <Mui.Grid item={true} sm={4} xs={12}>
              <TrumpSelector label='Under Trump' trump={this.state.underTrump} onTrumpChanged={this.handleUnderTrumpChanged}/>
              </Mui.Grid>

              <Mui.Grid item={true} xs={2}>Name</Mui.Grid>
              <Mui.Grid item={true} xs={2}>Chief</Mui.Grid>
              <Mui.Grid item={true} xs={2}>Vice</Mui.Grid>
              <Mui.Grid item={true} xs={2}>Partner</Mui.Grid>
              <Mui.Grid item={true} xs={4}></Mui.Grid>
              <Mui.Grid item={true} xs={12}><Mui.Divider /></Mui.Grid>

              {this.props.names.map((name) => this.createPlayerRow(name))}
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
              disabled={!this.canSave()}
            >
              Add
            </Mui.Button>
          </Mui.DialogActions>
        </Mui.Dialog>
    );
  }

  @bind
  private getDefaultState(): IScoreHandDialogState {
    const points: Record<string, string> = {};
    for (const name of this.props.names) {
      points[name] = '0';
    }

    return {
      bid: 1,
      overTrump: Trumps.Black,
      underTrump: Trumps.Blue,
      chief: '',
      vice: '',
      partner: '',
      points,
    };
  }

  @bind
  private handlePointsChange(name: string, value: string): void {
    const newPoints = Object.assign({}, this.state.points);
    newPoints[name] = value;
    this.setState({
      points: newPoints,
    });
  }

  @bind
  private handleChief(name: string): void {
    this.setState({
      chief: name,
      vice: (this.state.vice === name) ? '' : this.state.vice,
      partner: (this.state.partner === name) ? '' : this.state.partner,
    });
  }

  @bind
  private handleVice(name: string): void {
    this.setState({
      chief: (this.state.chief === name) ? '' : this.state.chief,
      vice: name,
      partner: (this.state.partner === name) ? '' : this.state.partner,
    });
  }

  @bind
  private handlePartner(name: string): void {
    this.setState({
      chief: (this.state.chief === name) ? '' : this.state.chief,
      vice: (this.state.vice === name) ? '' : this.state.vice,
      partner: name,
    });
  }

  @bind
  private handleOverTrumpChanged(value: Trumps): void {
    this.setState({
      overTrump: value,
    });
  }

  @bind
  private handleUnderTrumpChanged(value: Trumps): void {
    this.setState({
      underTrump: value,
    });
  }

  @bind
  private handleUpdateScore(): void {
    // First check to see if the chief team made it
    const chiefTeamPoints = parseInt(this.state.points[this.state.chief], 10) + parseInt(this.state.points[this.state.partner], 10);
    const chiefTeamBidMade = getChiefTeamBidMade(this.props.names.length, chiefTeamPoints);

    if (chiefTeamBidMade >= this.state.bid) {
      // Chief made it!
      for (const name of this.props.names) {
        let score: number = parseInt(this.state.points[name], 10);
        if (name === this.state.chief || name === this.state.partner) {
          score += getChiefTeamBonus(this.state.overTrump, this.state.bid);
        }

        this.props.addScore(name, score);
      }
    } else {
      // Chief missed it!
      const missedBy = this.state.bid - chiefTeamBidMade;
      for (const name of this.props.names) {
        let score: number = parseInt(this.state.points[name], 10);
        if (name === this.state.chief) {
          score -= 10 * missedBy;
        } else if (name !== this.state.partner) {
          score += 5 * missedBy;
        }

        this.props.addScore(name, score);
      }
    }

    this.props.onClose();
  }

  @bind
  private createPlayerRow(name: string): JSX.Element {
    return (
      <React.Fragment key={name}>
        <Mui.Grid className={this.props.classes.center} item={true} xs={2}>{name}</Mui.Grid>
        <Mui.Grid item={true} xs={2}><Mui.Checkbox onClick={() => this.handleChief(name)} checked={this.state.chief === name} /></Mui.Grid>
        <Mui.Grid item={true} xs={2}><Mui.Checkbox onClick={() => this.handleVice(name)} checked={this.state.vice === name} /></Mui.Grid>
        <Mui.Grid item={true} xs={2}><Mui.Checkbox onClick={() => this.handlePartner(name)} checked={this.state.partner === name} /></Mui.Grid>
        <Mui.Grid item={true} xs={4}>
          <Mui.TextField
            type='number'
            value={this.state.points[name]}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handlePointsChange(name, event.target.value)}
            label='Points'
            fullWidth={true}
          />
        </Mui.Grid>
        <Mui.Grid item={true} xs={12}><Mui.Divider /></Mui.Grid>
      </React.Fragment>
    );
  }

  @bind
  private canSave(): boolean {
    if (this.state.chief.length === 0) {
      return false;
    }

    if (this.state.partner.length === 0) {
      return false;
    }

    let sum: number = 0;
    for (const name of this.props.names) {
      sum += parseInt(this.state.points[name], 10);
    }

    if (sum !== 60) {
      return false;
    }

    return true;
  }

  @bind
  private handleBidChanged(event: React.ChangeEvent<{}>, value: number | number[]): void {
    if (Array.isArray(value)) {
      value = value[value.length - 1];
    }

    this.setState({
      bid: value,
    });
  }

  @bind
  private handleDialogClose(): void {
    this.props.onClose();
  }
}

const mapStateToProps = (state: AppState): IScoreHandDialogMappedProps => ({
  names: state.system.names,
});

const mapDispatchToProps = (dispatch: Dispatch): IScoreHandDialogActions => ({
  addScore: (name: string, value: number) => dispatch(mu.addScore(name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mui.withStyles(localStyles)(ScoreHandDialog));
