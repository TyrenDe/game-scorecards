import * as Mui from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from 'Store';

const localStyles = (theme: Mui.Theme) => Mui.createStyles({
  scoreCardPaper: {
    margin: theme.spacing(1),
    width: 170,
    padding: theme.spacing(1),
    textAlign: 'center',
  },
});

interface IScoreCardProps {
  name: string;
}

interface IScoreCardMappedProps {
  scores: Record<string, number>;
}

type IAllScoreCardProps =
  IScoreCardProps &
  IScoreCardMappedProps &
  Mui.WithStyles<typeof localStyles>;

class ScoreCard extends React.Component<IAllScoreCardProps, {}> {
  public render(): JSX.Element {
    const myScore: number = this.props.scores[this.props.name] ? this.props.scores[this.props.name] : 0;

    return (
      <React.Fragment>
        <Mui.Paper className={this.props.classes.scoreCardPaper}>
          <Mui.Typography variant='h5'>{this.props.name}: {myScore}</Mui.Typography>
        </Mui.Paper>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: AppState): IScoreCardMappedProps => ({
  scores: state.mu.scores,
});

const mapDispatchToProps = (dispatch: Dispatch): {} => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Mui.withStyles(localStyles)(ScoreCard));
