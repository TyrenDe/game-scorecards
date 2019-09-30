import * as Mui from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../../Store';
import * as generic from '../../Store/Generic';
import ScoreCard from './ScoreCard';
import { bind } from 'decko';
import ConfirmationDialog from '../ConfirmationDialog';

const localStyles = (theme: Mui.Theme) => Mui.createStyles({
  genericWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

interface IGenericProps {
  names: string[];
}

interface IGenericActions {
  reset(): void;
}

type IAllGenericProps =
  IGenericProps &
  IGenericActions &
  Mui.WithStyles<typeof localStyles>;

interface IGenericState {
  showConfirmationDialog: boolean;
}

class Generic extends React.Component<IAllGenericProps, IGenericState> {
  constructor(p: IAllGenericProps) {
    super(p);

    this.state = {
      showConfirmationDialog: false,
    };
  }
  public render(): JSX.Element {
    if (this.props.names.length === 0) {
      return (
        <React.Fragment>
          <Mui.Typography variant='h5'>
            This tab can be used to track generic scores where you just add or subtract values from the player.  For example, Hearts, Five Crowns, Spades, Sticheln, or any other game.
          </Mui.Typography>
          <Mui.Typography variant='h6'>
            <b>NOTE:</b> You currently have no players defined.  To add new players, click <Mui.Link color='secondary' href='/'>here</Mui.Link> to return home.  You will find the option to add and remove players at the bottom.
          </Mui.Typography>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <div className={this.props.classes.genericWrapper}>
          {this.props.names.map((name) => <ScoreCard key={name} name={name} />)}
        </div>
        <Mui.Button color='primary' variant='contained' onClick={this.handleReset}>Reset All</Mui.Button>

        <ConfirmationDialog onClose={this.handleConfirmation} showDialog={this.state.showConfirmationDialog} />
      </React.Fragment>
    );
  }

  @bind
  private handleConfirmation(answer: boolean): void {
    if (answer) {
      this.props.reset();
    }

    this.setState({
      showConfirmationDialog: false,
    });
  }

  @bind
  private handleReset(): void {
    this.setState({
      showConfirmationDialog: true,
    });
  }
}
const mapStateToProps = (state: AppState): IGenericProps => ({
  names: state.system.names,
});

const mapDispatchToProps = (dispatch: Dispatch): IGenericActions => ({
  reset: () => dispatch(generic.resetAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mui.withStyles(localStyles)(Generic));
