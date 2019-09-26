import * as Mui from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { bind } from 'decko';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../../Store';
import * as system from '../../Store/System';

const localStyles = (theme: Mui.Theme) => Mui.createStyles({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  chip: {
    margin: theme.spacing(1),
  },
  chipWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

interface IFooterProps {
  names: string[];
}

interface IFooterActions {
  addName(name: string): void;
  removeName(name: string): void;
}

type IAllFooterProps =
  IFooterProps &
  IFooterActions &
  Mui.WithStyles<typeof localStyles>;

interface IFooterState {
  error: string;
  newName: string;
  showAddPlayerDialog: boolean;
}

class Footer extends React.Component<IAllFooterProps, IFooterState> {
  private dialogInputRef: React.RefObject<HTMLInputElement>;

  constructor(p: IAllFooterProps) {
    super(p);

    this.dialogInputRef = React.createRef();
    this.state = {
      error: '',
      newName: '',
      showAddPlayerDialog: false,
    };
  }

  public render(): JSX.Element {
    return (
      <React.Fragment>
        <Mui.AppBar position='fixed' className={this.props.classes.appBar}>
          <div className={this.props.classes.chipWrapper}>
            <Mui.Chip icon={<AddIcon />} label='Add Player' variant='outlined' className={this.props.classes.chip} onClick={this.handleAdd} />
            {this.props.names.map((name) => <Mui.Chip key={name} label={name} variant='outlined' className={this.props.classes.chip} onDelete={() => this.handleDelete(name)} />)}
          </div>
        </Mui.AppBar>

        <Mui.Dialog open={this.state.showAddPlayerDialog} maxWidth='xs' fullWidth={true} onClose={this.handleDialogClose}>
          <Mui.DialogContent>
            <Mui.TextField
              fullWidth={true}
              required={true}
              autoFocus={true}
              value={this.state.newName}
              onChange={this.handleNewNameChange}
              onKeyPress={this.handleKeyPress}
              label='Player or Team Name'
              ref={this.dialogInputRef}
            />
            {(this.state.error.length !== 0) ? <Mui.FormHelperText error={true}>{this.state.error}</Mui.FormHelperText> : null}
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
              disabled={this.state.error.length !== 0 || this.state.newName.length === 0}
              onClick={this.handleAddName}
              variant='contained'
              color='primary'
            >
              Add
            </Mui.Button>
          </Mui.DialogActions>
        </Mui.Dialog>
      </React.Fragment>
    );
  }

  @bind
  private handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.key === 'Enter') {
      if (this.state.error.length === 0) {
        this.handleAddName();
      }

      event.preventDefault();
    }

  }

  @bind
  private handleNewNameChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const newName: string = event.target.value.trim();

    let error: string = '';
    const existingProfile: string | undefined = this.props.names.find((profile) => profile.toLowerCase() === newName.toLowerCase());
    if (existingProfile) {
      error = 'Player or team already exists';
    }

    this.setState({
      error,
      newName: event.target.value,
    });
  }

  @bind
  private handleAddName(): void {
    const newName: string = this.state.newName.trim();

    if (newName.length > 0) {
      this.props.addName(newName);
      this.setState({
        newName: '',
      });

      if (this.dialogInputRef.current) {
        this.dialogInputRef.current.focus();
      }
    }
  }

  @bind
  private handleDialogClose(): void {
    this.setState({
      showAddPlayerDialog: false,
      newName: '',
    });
  }

  @bind
  private handleAdd(): void {
    this.setState({
      showAddPlayerDialog: true,
    });

    if (this.dialogInputRef.current) {
      this.dialogInputRef.current.focus();
    }
  }

  @bind
  private handleDelete(name: string): void {
    this.props.removeName(name);
  }
}

const mapStateToProps = (state: AppState): IFooterProps => ({
  names: state.system.names,
});

const mapDispatchToProps = (dispatch: Dispatch): IFooterActions => ({
  addName: (name: string) => dispatch(system.addName(name)),
  removeName: (name: string) => dispatch(system.removeName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mui.withStyles(localStyles)(Footer));
