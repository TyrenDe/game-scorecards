import * as Mui from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../../Store';
import ScoreCard from './ScoreCard';

const localStyles = (theme: Mui.Theme) => Mui.createStyles({
  splitWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

interface ISplitProps {
  names: string[];
}

type IAllSplitProps =
  ISplitProps &
  Mui.WithStyles<typeof localStyles>;

class Split extends React.Component<IAllSplitProps, {}> {
  public render(): JSX.Element {
    return (
      <div className={this.props.classes.splitWrapper}>
        {this.props.names.map((name) => <ScoreCard key={name} name={name}/>)}
      </div>
    );
  }
}
const mapStateToProps = (state: AppState): ISplitProps => ({
  names: state.system.names,
});

const mapDispatchToProps = (dispatch: Dispatch): {} => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Mui.withStyles(localStyles)(Split));
