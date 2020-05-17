import * as Mui from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { bind } from 'decko';

import { AppState } from 'Store';
import * as qwixx from 'Store/Qwixx';
import ScoreCard from './ScoreCard';
import ConfirmationDialog from '../ConfirmationDialog';

const localStyles = (theme: Mui.Theme) => Mui.createStyles({
  qwixxWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

interface IQwixxProps {
}

interface IQwixxActions {
  reset(): void;
}

type IAllQwixxProps =
  IQwixxProps &
  IQwixxActions &
  Mui.WithStyles<typeof localStyles>;

interface IQwixxState {
  showConfirmationDialog: boolean;
}

class Qwixx extends React.Component<IAllQwixxProps, IQwixxState> {
  constructor(p: IAllQwixxProps) {
    super(p);

    this.state = {
      showConfirmationDialog: false,
    };
  }

  @bind
  public render(): React.ReactNode {
    return (
      <React.Fragment>
        <div className={this.props.classes.qwixxWrapper}>
          <ScoreCard />
        </div>
        <Mui.Button color='primary' variant='contained' onClick={this.handleReset}>Reset All</Mui.Button>
        <ConfirmationDialog onClose={this.handleConfirmation} showDialog={this.state.showConfirmationDialog} />
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
const mapStateToProps = (state: AppState): IQwixxProps => ({
});

const mapDispatchToProps = (dispatch: Dispatch): IQwixxActions => ({
  reset: () => dispatch(qwixx.resetAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mui.withStyles(localStyles)(Qwixx));
