import * as Mui from '@material-ui/core';
import * as React from 'react';
import { withStyles } from '@material-ui/styles';

const localStyles = (theme: Mui.Theme) => Mui.createStyles({
  marginTop: {
    marginTop: 10,
  },
  right: {
    textAlign: 'right',
  },
  center: {
    textAlign: 'center',
    verticalAlign: 'middle',
  },
});

interface ISafetyRowProps {
  name: string;
  played: boolean;
  coupFourre: boolean;
  togglePlayed(): void;
  toggleCoupFourre(): void;
}

type IAllSafetyRowProps =
  ISafetyRowProps &
  Mui.WithStyles<typeof localStyles>;

class SafetyRow extends React.Component<IAllSafetyRowProps, {}> {
  public render(): JSX.Element {
    return (
      <React.Fragment>
        <Mui.Grid item={true} xs={6} className={this.props.classes.right}>
          <Mui.Typography className={this.props.classes.marginTop}>{this.props.name}:</Mui.Typography>
        </Mui.Grid>
        <Mui.Grid item={true} xs={3} className={this.props.classes.center}><Mui.Checkbox checked={this.props.played} onChange={this.props.togglePlayed} /></Mui.Grid>
        <Mui.Grid item={true} xs={3} className={this.props.classes.center}><Mui.Checkbox disabled={!this.props.played} checked={this.props.coupFourre} onChange={this.props.toggleCoupFourre} /></Mui.Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(localStyles)(SafetyRow);
