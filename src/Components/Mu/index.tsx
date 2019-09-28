import * as Mui from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../../Store';
import * as mu from '../../Store/Mu';
import ScoreCard from './ScoreCard';
import { bind } from 'decko';

const localStyles = (theme: Mui.Theme) => Mui.createStyles({
  muWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  selectBox: {
    width: 180,
  },
  center: {
    marginTop: 8,
  },
  buttonSpacing: {
    marginLeft: theme.spacing(1),
  },
});

enum Trumps {
  Black,
  Blue,
  Green,
  Red,
  Yellow,
  One,
  Seven,
  Zero,
  Two,
  Three,
  Four,
  Five,
  Six,
  Eight,
  Nine,
  None,
}

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

interface IMuProps {
  names: string[];
}

interface IMuActions {
  addScore(name: string, value: number): void;
  reset(): void;
}

type IAllMuProps =
  IMuProps &
  IMuActions &
  Mui.WithStyles<typeof localStyles>;

interface IMuState {
  showStalemateDialog: boolean;
  showScoreDialog: boolean;
  bid: number;
  overTrump: Trumps;
  underTrump: Trumps;
  chief: string;
  vice: string;
  partner: string;
  points: Record<string, string>;

  lastBidder: string;
  highestBidders: string[];
}

class Mu extends React.Component<IAllMuProps, IMuState> {
  constructor(p: IAllMuProps) {
    super(p);

    const points: Record<string, string> = {};
    for (const name of this.props.names) {
      points[name] = '0';
    }

    this.state = this.getDefaultState();
  }

  public render(): JSX.Element {
    if (this.props.names.length < 4) {
      return (
        <Mui.Typography>
          This game requires at least 4 players, go Home and add some more players.
        </Mui.Typography>
      );
    }

    if (this.props.names.length > 6) {
      return (
        <Mui.Typography>
          This game doesn't support more than 6 players, go Home and remove some players.
        </Mui.Typography>
      );
    }

    return (
      <React.Fragment>
        <Mui.Button color='primary' variant='contained' onClick={this.handleScoreHand}>Score Hand</Mui.Button>
        <Mui.Button className={this.props.classes.buttonSpacing} color='primary' variant='contained' onClick={this.handleStalemate}>Stalemate</Mui.Button>
        <div className={this.props.classes.muWrapper}>
          {this.props.names.map((name) => <ScoreCard key={name} name={name} />)}
        </div>
        <Mui.Button color='primary' variant='contained' onClick={this.handleReset}>Reset All</Mui.Button>

        <Mui.Dialog open={this.state.showScoreDialog} maxWidth='sm' fullWidth={true} onClose={this.handleDialogClose}>
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
                  valueLabelDisplay='auto'
                  marks={true}
                />
              </Mui.Grid>
              <Mui.Grid item={true} sm={4} xs={12}>
                <Mui.FormControl variant='filled' className={this.props.classes.selectBox}>
                  <Mui.InputLabel htmlFor='over-trump'>
                    Over Trump
                  </Mui.InputLabel>
                  <Mui.Select
                    value={this.state.overTrump}
                    onChange={this.handleOverTrumpChanged}
                    inputProps={{
                      name: 'overtrump',
                      id: 'over-trump',
                    }}
                  >
                    <Mui.MenuItem value={Trumps.Black}>Black</Mui.MenuItem>
                    <Mui.MenuItem value={Trumps.Blue}>Blue</Mui.MenuItem>
                    <Mui.MenuItem value={Trumps.Green}>Green</Mui.MenuItem>
                    <Mui.MenuItem value={Trumps.Red}>Red</Mui.MenuItem>
                    <Mui.MenuItem value={Trumps.Yellow}>Yellow</Mui.MenuItem>
                    <Mui.Divider />
                    <Mui.MenuItem value={Trumps.One}>1</Mui.MenuItem>
                    <Mui.MenuItem value={Trumps.Seven}>7</Mui.MenuItem>
                    <Mui.Divider />
                    <Mui.MenuItem value={Trumps.Zero}>0</Mui.MenuItem>
                    <Mui.MenuItem value={Trumps.Two}>2</Mui.MenuItem>
                    <Mui.MenuItem value={Trumps.Three}>3</Mui.MenuItem>
                    <Mui.MenuItem value={Trumps.Four}>4</Mui.MenuItem>
                    <Mui.MenuItem value={Trumps.Five}>5</Mui.MenuItem>
                    <Mui.MenuItem value={Trumps.Six}>6</Mui.MenuItem>
                    <Mui.MenuItem value={Trumps.Eight}>8</Mui.MenuItem>
                    <Mui.MenuItem value={Trumps.Nine}>9</Mui.MenuItem>
                    <Mui.Divider />
                    <Mui.MenuItem value={Trumps.None}>No Trump</Mui.MenuItem>
                  </Mui.Select>
                </Mui.FormControl>
              </Mui.Grid>
              <Mui.Grid item={true} sm={4} xs={12}>
                <Mui.FormControl variant='filled' className={this.props.classes.selectBox}>
                  <Mui.InputLabel htmlFor='under-trump'>
                    Under Trump
                  </Mui.InputLabel>
                  <Mui.Select
                    value={this.state.underTrump}
                    onChange={this.handleUnderTrumpChanged}
                    inputProps={{
                      name: 'undertrump',
                      id: 'under-trump',
                    }}
                  >
                    <Mui.MenuItem value={Trumps.Black}>Black</Mui.MenuItem>
                    <Mui.MenuItem value={Trumps.Blue}>Blue</Mui.MenuItem>
                    <Mui.MenuItem value={Trumps.Green}>Green</Mui.MenuItem>
                    <Mui.MenuItem value={Trumps.Red}>Red</Mui.MenuItem>
                    <Mui.MenuItem value={Trumps.Yellow}>Yellow</Mui.MenuItem>
                    <Mui.Divider />
                    <Mui.MenuItem value={Trumps.One}>1</Mui.MenuItem>
                    <Mui.MenuItem value={Trumps.Seven}>7</Mui.MenuItem>
                    <Mui.Divider />
                    <Mui.MenuItem value={Trumps.Zero}>0</Mui.MenuItem>
                    <Mui.MenuItem value={Trumps.Two}>2</Mui.MenuItem>
                    <Mui.MenuItem value={Trumps.Three}>3</Mui.MenuItem>
                    <Mui.MenuItem value={Trumps.Four}>4</Mui.MenuItem>
                    <Mui.MenuItem value={Trumps.Five}>5</Mui.MenuItem>
                    <Mui.MenuItem value={Trumps.Six}>6</Mui.MenuItem>
                    <Mui.MenuItem value={Trumps.Eight}>8</Mui.MenuItem>
                    <Mui.MenuItem value={Trumps.Nine}>9</Mui.MenuItem>
                    <Mui.Divider />
                    <Mui.MenuItem value={Trumps.None}>No Trump</Mui.MenuItem>

                  </Mui.Select>
                </Mui.FormControl>
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

        <Mui.Dialog open={this.state.showStalemateDialog} maxWidth='xs' fullWidth={true} onClose={this.handleDialogClose}>
          <Mui.DialogContent>
            <Mui.Grid container={true}>
            <Mui.Grid item={true} xs={12}>
                <Mui.Typography>Bid</Mui.Typography>
                <Mui.Slider
                  value={this.state.bid}
                  onChange={this.handleBidChanged}
                  min={1}
                  max={60 / this.props.names.length}
                  step={1}
                  valueLabelDisplay='auto'
                  marks={true}
                />
              </Mui.Grid>

              <Mui.Grid item={true} xs={4}>Name</Mui.Grid>
              <Mui.Grid item={true} xs={4}>Last Bidder</Mui.Grid>
              <Mui.Grid item={true} xs={4}>Highest Bidder</Mui.Grid>
              <Mui.Grid item={true} xs={12}><Mui.Divider /></Mui.Grid>

              {this.props.names.map((name) => this.createStalemateRow(name))}
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
              onClick={this.handleUpdateStalemate}
              variant='contained'
              color='primary'
              disabled={!this.canSaveStalemate()}
            >
              Add
            </Mui.Button>
          </Mui.DialogActions>
        </Mui.Dialog>
      </React.Fragment>
    );
  }

  @bind
  private handleUpdateStalemate(): void {
    for (const name of this.props.names) {
      if (this.state.lastBidder === name) {
        this.props.addScore(name, -10 * this.state.bid);
      } else if (this.state.highestBidders.indexOf(name) > -1) {
        this.props.addScore(name, 5 * this.state.bid);
      }
    }

    this.setState({
      showScoreDialog: false,
      showStalemateDialog: false,
    });
  }

  @bind
  private createStalemateRow(name: string): JSX.Element {
    return (
      <React.Fragment key={name}>
        <Mui.Grid className={this.props.classes.center} item={true} xs={4}>{name}</Mui.Grid>
        <Mui.Grid item={true} xs={4}><Mui.Checkbox onClick={() => this.handleLastBidder(name)} checked={this.state.lastBidder === name} /></Mui.Grid>
        <Mui.Grid item={true} xs={4}><Mui.Checkbox onClick={() => this.handleHighestBidder(name)} checked={this.state.highestBidders.indexOf(name) !== -1} /></Mui.Grid>
        <Mui.Grid item={true} xs={12}><Mui.Divider /></Mui.Grid>
      </React.Fragment>
    );
  }

  @bind
  private canSaveStalemate(): boolean {
    return this.state.highestBidders.length > 0 && this.state.lastBidder.length > 0;
  }

  @bind
  private handleLastBidder(name: string): void {
    const included = this.state.highestBidders.indexOf(name) !== -1;

    this.setState({
      lastBidder: name,
      highestBidders: included ? this.state.highestBidders.filter((item) => item !== name) : this.state.highestBidders,
    });
  }

  @bind
  private handleHighestBidder(name: string): void {
    const included = this.state.highestBidders.indexOf(name) !== -1;
    if (included) {
      this.setState({
        highestBidders: this.state.highestBidders.filter((item) => item !== name),
      });
    } else {
      this.setState({
        lastBidder: name === this.state.lastBidder ? '' : this.state.lastBidder,
        highestBidders: this.state.highestBidders.concat(name),
      });
    }
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
  private handleOverTrumpChanged(event: React.ChangeEvent<{ name?: string; value: unknown }>): void {
    this.setState({
      overTrump: event.target.value as Trumps,
    });
  }

  @bind
  private handleUnderTrumpChanged(event: React.ChangeEvent<{ name?: string; value: unknown }>): void {
    this.setState({
      underTrump: event.target.value as Trumps,
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

    this.setState({
      showScoreDialog: false,
      showStalemateDialog: false,
    });
  }

  @bind
  private handleDialogClose(): void {
    this.setState({
      showScoreDialog: false,
      showStalemateDialog: false,
    });
  }

  @bind
  private handleScoreHand(): void {
    const points: Record<string, string> = {};
    for (const name of this.props.names) {
      points[name] = '0';
    }

    const defaultState = this.getDefaultState();
    defaultState.showScoreDialog = true;
    this.setState(defaultState);
  }

  @bind
  private handleStalemate(): void {
    const defaultState = this.getDefaultState();
    defaultState.showStalemateDialog = true;
    this.setState(defaultState);
  }

  @bind
  private handleReset(): void {
    this.props.reset();
  }

  @bind
  private getDefaultState(): IMuState {
    const points: Record<string, string> = {};
    for (const name of this.props.names) {
      points[name] = '0';
    }

    return {
      showStalemateDialog: false,
      showScoreDialog: false,
      bid: 1,
      overTrump: Trumps.Black,
      underTrump: Trumps.Blue,
      chief: '',
      vice: '',
      partner: '',
      points,
      lastBidder: '',
      highestBidders: [],
    };
  }
}

const mapStateToProps = (state: AppState): IMuProps => ({
  names: state.system.names,
});

const mapDispatchToProps = (dispatch: Dispatch): IMuActions => ({
  addScore: (name: string, value: number) => dispatch(mu.addScore(name, value)),
  reset: () => dispatch(mu.resetAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mui.withStyles(localStyles)(Mu));
