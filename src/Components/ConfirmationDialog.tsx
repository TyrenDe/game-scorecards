import * as Mui from '@material-ui/core';
import * as React from 'react';
import { bind } from 'decko';

interface IConfirmationDialogProps {
  showDialog: boolean;
  onClose(answer: boolean): void;
}

type IAllConfirmationDialogProps =
  IConfirmationDialogProps;

class ConfirmationDialog extends React.Component<IAllConfirmationDialogProps, {}> {
  public render(): JSX.Element {
    return (
      <Mui.Dialog open={this.props.showDialog} maxWidth='xs' fullWidth={true} onClose={this.handleDialogClose}>
        <Mui.DialogContent>
          <Mui.Typography>Are you sure you want to clear the scores?</Mui.Typography>
        </Mui.DialogContent>

        <Mui.DialogActions>
          <Mui.Button
            variant='contained'
            color='primary'
            onClick={this.handleDialogClose}
          >
            No
            </Mui.Button>

          <Mui.Button
            onClick={this.handleDialogConfirm}
            variant='contained'
            color='primary'
          >
            Yes
            </Mui.Button>
        </Mui.DialogActions>
      </Mui.Dialog>
    );
  }

  @bind
  private handleDialogConfirm(): void {
    this.props.onClose(true);
  }

  @bind
  private handleDialogClose(): void {
    this.props.onClose(false);
  }
}

export default ConfirmationDialog;
