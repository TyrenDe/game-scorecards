import * as Mui from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../../Store';
import * as split from '../../Store/Split';
import ScoreCard from './ScoreCard';
import { bind } from 'decko';

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

class Split extends React.Component<IAllSplitProps, {}> {
  public render(): JSX.Element {
    if (this.props.names.length === 0) {
      return (
        <Mui.Typography>
          Go back to Home and add some players first!
        </Mui.Typography>
      );
    }

    return (
      <React.Fragment>
        <Mui.Button color="primary" variant="contained" onClick={this.handleReset}>Reset All</Mui.Button>
        <div className={this.props.classes.splitWrapper}>
          {this.props.names.map((name) => <ScoreCard key={name} name={name} />)}
        </div>
      </React.Fragment>
    );
  }

  @bind
  private handleReset(): void {
    this.props.reset();
  }
}
const mapStateToProps = (state: AppState): ISplitProps => ({
  names: state.system.names,
});

const mapDispatchToProps = (dispatch: Dispatch): ISplitActions => ({
  reset: () => dispatch(split.resetAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mui.withStyles(localStyles)(Split));
