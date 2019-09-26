import * as Mui from '@material-ui/core';
import * as React from 'react';

const localStyles = (theme: Mui.Theme) => Mui.createStyles({
  scoreCardPaper: {
    margin: theme.spacing(1),
    width: 250,
  },
});

interface IScoreCardProps {
  name: string;
}

type IAllScoreCardProps =
  IScoreCardProps &
  Mui.WithStyles<typeof localStyles>;

class ScoreCard extends React.Component<IAllScoreCardProps, {}> {
  public render(): JSX.Element {
    return (
      <Mui.Paper className={this.props.classes.scoreCardPaper}>
        <Mui.Typography align='center'>
          {this.props.name}: 123
        </Mui.Typography>
        <Mui.Divider/>
        <Mui.Divider/>
        <Mui.Grid container={true}>
          <Mui.Grid item={true} xs={3}>Test</Mui.Grid>
          <Mui.Grid item={true} xs={3}>Test</Mui.Grid>
          <Mui.Grid item={true} xs={3}>Test</Mui.Grid>
          <Mui.Grid item={true} xs={3}>Test</Mui.Grid>

          <Mui.Grid item={true} xs={3}>Test</Mui.Grid>
          <Mui.Grid item={true} xs={3}>Test</Mui.Grid>
          <Mui.Grid item={true} xs={3}>Test</Mui.Grid>
          <Mui.Grid item={true} xs={3}>Test</Mui.Grid>
        </Mui.Grid>
      </Mui.Paper>
    );
  }
}

export default Mui.withStyles(localStyles)(ScoreCard);
