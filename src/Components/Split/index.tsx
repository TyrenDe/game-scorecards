import * as Mui from '@material-ui/core';
import * as React from 'react';
import { Link } from 'react-router-dom';
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
  names: string[];
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

  public render(): JSX.Element {
    if (this.props.names.length === 0) {
      return (
        <React.Fragment>
          <Mui.Typography variant='h5'>
            This tab can be used to track scores for the game Split.
          </Mui.Typography>
          <Mui.Typography variant='h6'>
            <b>NOTE:</b> You currently have no players defined.  To add new players, click <Link color='secondary' to='/'>here</Link> to return home.  You will find the option to add and remove players at the bottom.
          </Mui.Typography>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <div className={this.props.classes.splitWrapper}>
          {this.props.names.map((name) => <ScoreCard key={name} name={name} />)}
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
  names: state.system.names,
});

const mapDispatchToProps = (dispatch: Dispatch): ISplitActions => ({
  reset: () => dispatch(split.resetAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mui.withStyles(localStyles)(Split));
