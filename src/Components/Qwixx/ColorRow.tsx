import * as Mui from '@material-ui/core';
import { bind } from 'decko';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from 'Store';
import * as qwixx from 'Store/Qwixx';

const localStyles = (theme: Mui.Theme) => Mui.createStyles({
  scoreCardPaper: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  right: {
    textAlign: 'right',
  },
  center: {
    textAlign: 'center',
  },
});

interface IColorRowProps {
  color: qwixx.QwixxRanks;
}

interface IColorRowMappedProps {
}

interface IColorRowActions {
  addValue(rank: qwixx.QwixxRanks, number: number): void;
  removeValue(rank: qwixx.QwixxRanks, number: number): void;
}

type IAllColorRowProps =
  IColorRowProps &
  IColorRowMappedProps &
  IColorRowActions &
  Mui.WithStyles<typeof localStyles>;

class ColorRow extends React.Component<IAllColorRowProps, {}> {
  @bind
  public render(): React.ReactNode {
    return (
      <Mui.Paper className={this.props.classes.scoreCardPaper}>
      </Mui.Paper>
    );
  }
}

const mapStateToProps = (state: AppState): IColorRowMappedProps => ({
  values: state.qwixx.values,
});

const mapDispatchToProps = (dispatch: Dispatch): IColorRowActions => ({
  addValue: (rank: qwixx.QwixxRanks, number: number) => dispatch(qwixx.addValue(rank, number)),
  removeValue: (rank: qwixx.QwixxRanks, number: number) => dispatch(qwixx.removeValue(rank, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mui.withStyles(localStyles)(ColorRow));
