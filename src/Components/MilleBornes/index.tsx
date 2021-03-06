import * as React from 'react';
import * as Mui from '@material-ui/core';
import { Link } from 'react-router-dom';
import { bind } from 'decko';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from 'Store';
import * as milleBornes from 'Store/MilleBornes';
import ScoreCard from './ScoreCard';
import ConfirmationDialog from '../ConfirmationDialog';

const localStyles = (theme: Mui.Theme) => Mui.createStyles({
  milleBornesWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

interface IMilleBornesProps {
  names: string[];
}

interface IMilleBornesActions {
  reset(): void;
}

type IAllMilleBornesProps =
  IMilleBornesProps &
  IMilleBornesActions &
  Mui.WithStyles<typeof localStyles>;

interface IMilleBornesState {
  showConfirmationDialog: boolean;
}

class MilleBornes extends React.Component<IAllMilleBornesProps, IMilleBornesState> {
  constructor(p: IAllMilleBornesProps) {
    super(p);

    this.state = {
      showConfirmationDialog: false,
    };
  }

  @bind
  public render(): React.ReactNode {
    if (this.props.names.length === 0) {
      return (
        <React.Fragment>
          <Mui.Typography variant='h5'>
            This tab can be used to track scores for the game Mille Bornes.
          </Mui.Typography>
          <Mui.Typography variant='h6'>
            <b>NOTE:</b> You currently have no players defined.  To add new players, click <Link color='secondary' to='/'>here</Link> to return home.  You will find the option to add and remove players at the bottom.
          </Mui.Typography>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <div className={this.props.classes.milleBornesWrapper}>
          {this.props.names.map((name) => <ScoreCard key={name} name={name} />)}
        </div>
        <Mui.Button color='primary' variant='contained' onClick={this.handleReset}>Reset All</Mui.Button>
        <ConfirmationDialog onClose={this.handleConfirmation} showDialog={this.state.showConfirmationDialog}/>
      </React.Fragment>
    );
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

const mapStateToProps = (state: AppState): IMilleBornesProps => ({
  names: state.system.names,
});

const mapDispatchToProps = (dispatch: Dispatch): IMilleBornesActions => ({
  reset: () => dispatch(milleBornes.resetAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mui.withStyles(localStyles)(MilleBornes));
