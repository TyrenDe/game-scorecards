import * as Mui from '@material-ui/core';
import * as React from 'react';
import { withStyles } from '@material-ui/styles';
import { bind } from 'decko';

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
  hidden: {
    display: 'none',
  },
});

interface ISafetyRowProps {
  name: string;
  played: boolean;
  coupFourre: boolean;
  hideCoupFourre?: boolean;
  togglePlayed(): void;
  toggleCoupFourre(): void;
}

type IAllSafetyRowProps =
  ISafetyRowProps &
  Mui.WithStyles<typeof localStyles>;

class SafetyRow extends React.Component<IAllSafetyRowProps, {}> {
  @bind
  public render(): React.ReactNode {
    return (
      <React.Fragment>
        <Mui.Grid item={true} xs={6} className={this.props.classes.right}>
          <Mui.Typography className={this.props.classes.marginTop}>{this.props.name}:</Mui.Typography>
        </Mui.Grid>
        <Mui.Grid item={true} xs={3} className={this.props.classes.center}><Mui.Checkbox checked={this.props.played} onChange={this.props.togglePlayed} /></Mui.Grid>
        <Mui.Grid className={this.props.hideCoupFourre ? this.props.classes.hidden : this.props.classes.center} item={true} xs={3}><Mui.Checkbox disabled={!this.props.played} checked={this.props.coupFourre} onChange={this.props.toggleCoupFourre} /></Mui.Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(localStyles)(SafetyRow);
