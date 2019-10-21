import * as Mui from '@material-ui/core';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { bind } from 'decko';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from 'Store';
import * as mu from 'Store/Mu';
import ScoreCard from './ScoreCard';
import ScoreHandDialog from './ScoreHandDialog';
import StalemateDialog from './StalemateDialog';
import ConfirmationDialog from '../ConfirmationDialog';

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
  showConfirmationDialog: boolean;
}

class Mu extends React.Component<IAllMuProps, IMuState> {
  constructor(p: IAllMuProps) {
    super(p);

    this.state = {
      showScoreDialog: false,
      showStalemateDialog: false,
      showConfirmationDialog: false,
    };
  }

  public render(): JSX.Element {
    if (this.props.names.length < 4) {
      return (
        <React.Fragment>
          <Mui.Typography variant='h5'>
            This tab can be used to track scores for the game of Mü.
          </Mui.Typography>
          <Mui.Typography variant='h6'>
            <b>NOTE:</b> You currently have less than 4 players defined.  To add new players, click <Link color='secondary' to='/'>here</Link> to return home.  You will find the option to add and remove players at the bottom.
          </Mui.Typography>
        </React.Fragment>
      );
    }

    if (this.props.names.length > 6) {
      return (
        <React.Fragment>
          <Mui.Typography variant='h5'>
          This tab can be used to track scores for the game of Mü.
          </Mui.Typography>
          <Mui.Typography variant='h6'>
            <b>NOTE:</b> You currently have more than 6 players defined.  To remove players, click <Link color='secondary' to='/'>here</Link> to return home.  You will find the option to add and remove players at the bottom.
          </Mui.Typography>
        </React.Fragment>
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
        <ConfirmationDialog onClose={this.handleConfirmation} showDialog={this.state.showConfirmationDialog}/>
      </React.Fragment>
    );
  }

  @bind
  private handleDialogClose(): void {
    this.setState({
      showScoreDialog: false,
      showStalemateDialog: false,
      showConfirmationDialog: false,
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
  private handleConfirmation(answer: boolean): void {
    if (answer) {
      this.props.reset();
    }

    this.setState({
      showConfirmationDialog: false,
    });
  }

  @bind
  private handleReset(): void {
    this.setState({
      showConfirmationDialog: true,
    });
  }
}

const mapStateToProps = (state: AppState): IMuProps => ({
  names: state.system.names,
});

const mapDispatchToProps = (dispatch: Dispatch): IMuActions => ({
  reset: () => dispatch(mu.resetAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mui.withStyles(localStyles)(Mu));
