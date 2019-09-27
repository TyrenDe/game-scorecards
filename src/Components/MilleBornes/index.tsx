import * as React from 'react';
import * as Mui from '@material-ui/core';
import { bind } from 'decko';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../../Store';
import * as milleBornes from '../../Store/MilleBornes';
import ScoreCard from './ScoreCard';

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

class MilleBornes extends React.Component<IAllMilleBornesProps, {}> {
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
        <div className={this.props.classes.milleBornesWrapper}>
          {this.props.names.map((name) => <ScoreCard key={name} name={name} />)}
        </div>
        <Mui.Button color='primary' variant='contained' onClick={this.handleReset}>Reset All</Mui.Button>
      </React.Fragment>
    );
  }

  @bind
  private handleReset(): void {
    this.props.reset();
  }
}

const mapStateToProps = (state: AppState): IMilleBornesProps => ({
  names: state.system.names,
});

const mapDispatchToProps = (dispatch: Dispatch): IMilleBornesActions => ({
  reset: () => dispatch(milleBornes.resetAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mui.withStyles(localStyles)(MilleBornes));
