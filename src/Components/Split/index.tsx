import * as Mui from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { bind } from 'decko';

import { AppState } from 'Store';
import * as split from 'Store/Split';
import ScoreCard from './ScoreCard';
import ConfirmationDialog from '../ConfirmationDialog';

const localStyles = (theme: Mui.Theme) => Mui.createStyles({
  splitWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

interface ISplitProps {
}

interface ISplitActions {
  reset(): void;
}

type IAllSplitProps =
  ISplitProps &
  ISplitActions &
  Mui.WithStyles<typeof localStyles>;

interface ISplitState {
  showConfirmationDialog: boolean;
}

class Split extends React.Component<IAllSplitProps, ISplitState> {
  constructor(p: IAllSplitProps) {
    super(p);

    this.state = {
      showConfirmationDialog: false,
    };
  }

  @bind
  public render(): React.ReactNode {
    return (
      <React.Fragment>
        <div className={this.props.classes.splitWrapper}>
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
const mapStateToProps = (state: AppState): ISplitProps => ({
});

const mapDispatchToProps = (dispatch: Dispatch): ISplitActions => ({
  reset: () => dispatch(split.resetAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mui.withStyles(localStyles)(Split));
