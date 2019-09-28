import * as Mui from '@material-ui/core';
import * as React from 'react';
import { bind } from 'decko';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../../Store';
import * as mu from '../../Store/Mu';
import ScoreCard from './ScoreCard';
import ScoreHandDialog from './ScoreHandDialog';
import StalemateDialog from './StalemateDialog';

const localStyles = (theme: Mui.Theme) => Mui.createStyles({
  muWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  buttonSpacing: {
    marginLeft: theme.spacing(1),
  },
});

interface IMuProps {
  names: string[];
}

interface IMuActions {
  reset(): void;
}

type IAllMuProps =
  IMuProps &
  IMuActions &
  Mui.WithStyles<typeof localStyles>;

interface IMuState {
  showStalemateDialog: boolean;
  showScoreDialog: boolean;
}

class Mu extends React.Component<IAllMuProps, IMuState> {
  constructor(p: IAllMuProps) {
    super(p);

    this.state = {
      showScoreDialog: false,
      showStalemateDialog: false,
    };
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

        <ScoreHandDialog onClose={this.handleDialogClose} showDialog={this.state.showScoreDialog} />
        <StalemateDialog onClose={this.handleDialogClose} showDialog={this.state.showStalemateDialog} />
      </React.Fragment>
    );
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
    this.setState({
      showScoreDialog: true,
    });
  }

  @bind
  private handleStalemate(): void {
    this.setState({
      showStalemateDialog: true,
    });
  }

  @bind
  private handleReset(): void {
    this.props.reset();
  }
}

const mapStateToProps = (state: AppState): IMuProps => ({
  names: state.system.names,
});

const mapDispatchToProps = (dispatch: Dispatch): IMuActions => ({
  reset: () => dispatch(mu.resetAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mui.withStyles(localStyles)(Mu));
