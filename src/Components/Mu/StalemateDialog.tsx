import * as Mui from '@material-ui/core';
import * as React from 'react';
import { bind } from 'decko';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from 'Store';
import * as mu from 'Store/Mu';

const localStyles = (theme: Mui.Theme) => Mui.createStyles({
  center: {
    marginTop: 8,
  },
});

interface IStalemateDialogMappedProps {
  names: string[];
}

interface IStalemateDialogProps {
  showDialog: boolean;
  onClose(): void;
}

interface IStalemateDialogActions {
  addScore(name: string, value: number): void;
}

type IAllStalemateDialogProps =
  IStalemateDialogMappedProps &
  IStalemateDialogProps &
  IStalemateDialogActions &
  Mui.WithStyles<typeof localStyles>;

interface IStalemateDialogState {
  bid: number;
  lastBidder: string;
  highestBidders: string[];
}

class StalemateDialog extends React.Component<IAllStalemateDialogProps, IStalemateDialogState> {
  constructor(p: IAllStalemateDialogProps) {
    super(p);

    this.state = {
      bid: 1,
      lastBidder: '',
      highestBidders: [],
    };
  }

  public componentDidUpdate(prevProps: IAllStalemateDialogProps): void {
    if (!prevProps.showDialog && this.props.showDialog) {
      this.setState({
        bid: 1,
        lastBidder: '',
        highestBidders: [],
      });
    }
  }

  @bind
  public render(): React.ReactNode {
    return (
      <Mui.Dialog open={this.props.showDialog} maxWidth='xs' fullWidth={true} onClose={this.handleDialogClose}>
        <Mui.DialogContent>
          <Mui.Grid container={true}>
            <Mui.Grid item={true} xs={12}>
              <Mui.Typography>Bid</Mui.Typography>
              <Mui.Slider
                value={this.state.bid}
                onChange={this.handleBidChanged}
                min={1}
                max={60 / this.props.names.length}
                step={1}
                valueLabelDisplay='on'
                marks={true}
              />
            </Mui.Grid>

            <Mui.Grid item={true} xs={4}>Name</Mui.Grid>
            <Mui.Grid item={true} xs={4}>Last Bidder</Mui.Grid>
            <Mui.Grid item={true} xs={4}>Highest Bidder</Mui.Grid>
            <Mui.Grid item={true} xs={12}><Mui.Divider /></Mui.Grid>

            {this.props.names.map((name) => this.createStalemateRow(name))}
          </Mui.Grid>
        </Mui.DialogContent>

        <Mui.DialogActions>
          <Mui.Button
            variant='contained'
            color='primary'
            onClick={this.handleDialogClose}
          >
            Cancel
            </Mui.Button>

          <Mui.Button
            onClick={this.handleUpdateStalemate}
            variant='contained'
            color='primary'
            disabled={!this.canSave()}
          >
            Add
            </Mui.Button>
        </Mui.DialogActions>
      </Mui.Dialog>
    );
  }

  @bind
  private handleUpdateStalemate(): void {
    for (const name of this.props.names) {
      if (this.state.lastBidder === name) {
        this.props.addScore(name, -10 * this.state.bid);
      } else if (this.state.highestBidders.indexOf(name) > -1) {
        this.props.addScore(name, 5 * this.state.bid);
      }
    }

    this.props.onClose();
  }

  @bind
  private handleLastBidder(name: string): void {
    const included = this.state.highestBidders.indexOf(name) !== -1;

    this.setState({
      lastBidder: name,
      highestBidders: included ? this.state.highestBidders.filter((item) => item !== name) : this.state.highestBidders,
    });
  }

  @bind
  private handleHighestBidder(name: string): void {
    const included = this.state.highestBidders.indexOf(name) !== -1;
    if (included) {
      this.setState({
        highestBidders: this.state.highestBidders.filter((item) => item !== name),
      });
    } else {
      this.setState({
        lastBidder: name === this.state.lastBidder ? '' : this.state.lastBidder,
        highestBidders: this.state.highestBidders.concat(name),
      });
    }
  }

  @bind
  private createStalemateRow(name: string): JSX.Element {
    return (
      <React.Fragment key={name}>
        <Mui.Grid className={this.props.classes.center} item={true} xs={4}>{name}</Mui.Grid>
        <Mui.Grid item={true} xs={4}><Mui.Checkbox onClick={() => this.handleLastBidder(name)} checked={this.state.lastBidder === name} /></Mui.Grid>
        <Mui.Grid item={true} xs={4}><Mui.Checkbox onClick={() => this.handleHighestBidder(name)} checked={this.state.highestBidders.indexOf(name) !== -1} /></Mui.Grid>
        <Mui.Grid item={true} xs={12}><Mui.Divider /></Mui.Grid>
      </React.Fragment>
    );
  }

  @bind
  private canSave(): boolean {
    return this.state.highestBidders.length > 0 && this.state.lastBidder.length > 0;
  }

  @bind
  private handleBidChanged(event: React.ChangeEvent<{}>, value: number | number[]): void {
    if (Array.isArray(value)) {
      value = value[value.length - 1];
    }

    this.setState({
      bid: value,
    });
  }

  @bind
  private handleDialogClose(): void {
    this.props.onClose();
  }
}

const mapStateToProps = (state: AppState): IStalemateDialogMappedProps => ({
  names: state.system.names,
});

const mapDispatchToProps = (dispatch: Dispatch): IStalemateDialogActions => ({
  addScore: (name: string, value: number) => dispatch(mu.addScore(name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mui.withStyles(localStyles)(StalemateDialog));
