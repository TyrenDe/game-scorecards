import * as Mui from '@material-ui/core';
import { bind } from 'decko';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import LockIcon from '@material-ui/icons/LockTwoTone';
import LockOpenIcon from '@material-ui/icons/LockOpenTwoTone';

import { AppState } from 'Store';
import * as qwixx from 'Store/Qwixx';

const localStyles = (theme: Mui.Theme) => Mui.createStyles({
  scoreCardPaper: {
    margin: theme.spacing(0),
    padding: theme.spacing(0),
  },
  right: {
    textAlign: 'right',
  },
  center: {
    textAlign: 'center',
  },
  button: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    textShadow: '-1px 1px 2px white, -1px -1px 2px white, 1px -1px 2px white, 1px 1px 2px white',
  },
  disabledButton: {
    color: '#BBBBBB',
    fontWeight: 'bold',
    fontSize: 24,
    textShadow: '-1px 1px 2px white, -1px -1px 2px white, 1px -1px 2px white, 1px 1px 2px white',
  },
});

interface IColorRowProps {
  color: qwixx.QwixxRanks;
}

interface IColorRowMappedProps {
  readonly isLocked: Record<qwixx.QwixxRanks, boolean>;
  readonly values: Record<qwixx.QwixxRanks, number[]>;
}

interface IColorRowActions {
  addValue(rank: qwixx.QwixxRanks, number: number): void;
  removeValue(rank: qwixx.QwixxRanks, number: number): void;
  lock(rank: qwixx.QwixxRanks): void;
  unlock(rank: qwixx.QwixxRanks): void;
}

type IAllColorRowProps =
  IColorRowProps &
  IColorRowMappedProps &
  IColorRowActions &
  Mui.WithStyles<typeof localStyles>;

class ColorRow extends React.Component<IAllColorRowProps, {}> {
  @bind
  public render(): React.ReactNode {
    if (this.props.color === qwixx.QwixxRanks.Negative) {
      return this.renderNegative();
    }

    const isRedOrYellow: boolean = (this.props.color === qwixx.QwixxRanks.Red) || (this.props.color === qwixx.QwixxRanks.Yellow);

    const buttonList: React.ReactNode[] = [];
    for (let index = 2; index <= 12; index += 1) {
      buttonList.push(this.getButton(index));
    }

    if (!isRedOrYellow) {
      buttonList.reverse();
    }

    return (
      <Mui.Grid container={true} style={{backgroundColor: this.props.color}}>
        {buttonList}

        { this.getLockIcon() }
      </Mui.Grid>
    );
  }

  @bind
  private renderNegative(): React.ReactNode {
    const buttonList: React.ReactNode[] = [];

    for (let index = 0; index < 4; index++) {
      buttonList.push(this.getNegativeButton(index));
    }

    return (
      <Mui.Grid container={true}>
        {buttonList}

        <Mui.Grid item={true} xs={1}></Mui.Grid>

        {this.renderScore()}
      </Mui.Grid>
    );
  }

  @bind
  private renderScore(): React.ReactNode {
    const redScore: number = this.calcScore(qwixx.QwixxRanks.Red);
    const yellowScore: number = this.calcScore(qwixx.QwixxRanks.Yellow);
    const greenScore: number = this.calcScore(qwixx.QwixxRanks.Green);
    const blueScore: number = this.calcScore(qwixx.QwixxRanks.Blue);
    const negScore: number = this.calcScore(qwixx.QwixxRanks.Negative);

    return (
      <React.Fragment>
        <Mui.Grid item={true} xs={1}><Mui.Typography style={{color: 'red', marginTop: 5}} variant='h4'>{redScore}</Mui.Typography></Mui.Grid>
        <Mui.Grid item={true} xs={1}><Mui.Typography style={{color: 'yellow', marginTop: 5}} variant='h4'>{yellowScore}</Mui.Typography></Mui.Grid>
        <Mui.Grid item={true} xs={1}><Mui.Typography style={{color: 'green', marginTop: 5}} variant='h4'>{greenScore}</Mui.Typography></Mui.Grid>
        <Mui.Grid item={true} xs={1}><Mui.Typography style={{color: 'blue', marginTop: 5}} variant='h4'>{blueScore}</Mui.Typography></Mui.Grid>
        <Mui.Grid item={true} xs={1}><Mui.Typography style={{color: '#BBBBBB', marginTop: 5}} variant='h4'>{negScore}</Mui.Typography></Mui.Grid>
        <Mui.Grid item={true} xs={1}></Mui.Grid>
        <Mui.Grid item={true} xs={1}><Mui.Typography style={{marginTop: 5}} variant='h4'>{redScore + yellowScore + greenScore + blueScore + negScore}</Mui.Typography></Mui.Grid>
      </React.Fragment>
    );
  }

  @bind
  private calcScore(color: qwixx.QwixxRanks): number {
    const scoreMap: number[] = [ 0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78 ];
    const values = this.props.values[color];

    if (color === qwixx.QwixxRanks.Negative) {
      return -5 * values.length;
    }

    const isRedOrYellow: boolean = (color === qwixx.QwixxRanks.Red) || (color === qwixx.QwixxRanks.Yellow);
    var count = values.length;
    if ((isRedOrYellow && values.includes(12)) || (!isRedOrYellow && values.includes(2)))
    {
      // They earned an extra X
      count++;
    }

    return scoreMap[count];
  }

  @bind
  private getNegativeButton(index: number): React.ReactNode {
    const values = this.props.values[this.props.color];

    if (values.includes(index)) {
      return (
        <Mui.Grid item={true} xs={1}><Mui.Button className={this.props.classes.disabledButton} onClick={() => this.removeValue(index)}>X</Mui.Button></Mui.Grid>
      );
    } else {
      return (
        <Mui.Grid item={true} xs={1}><Mui.Button className={this.props.classes.button} onClick={() => this.addValue(index)}>-5</Mui.Button></Mui.Grid>
      );
    }
  }

  @bind
  private getLockIcon(): React.ReactNode {
    const icon = this.props.isLocked[this.props.color] ? <LockIcon/> : <LockOpenIcon/>;

    return (
      <Mui.Grid item={true} xs={1}>
        <Mui.Button style={{marginTop: 6}} className={this.props.classes.button} onClick={() => this.toggleLock()}>
          { icon }
        </Mui.Button>
      </Mui.Grid>
    );
  }

  @bind
  private toggleLock(): void {
    if (this.props.isLocked[this.props.color]) {
      this.props.unlock(this.props.color);
    } else {
      this.props.lock(this.props.color);
    }
  }

  @bind
  private getButton(index: number): React.ReactNode {
    const values = this.props.values[this.props.color];
    const isRedOrYellow: boolean = (this.props.color === qwixx.QwixxRanks.Red) || (this.props.color === qwixx.QwixxRanks.Yellow);

    const highestValue: number = isRedOrYellow ? Math.max(...values) : Math.min(...values);

    if (highestValue === index) {
      let text: string = 'X';

      if ((isRedOrYellow && index === 12) || (!isRedOrYellow && index === 2)) {
        text = 'XX';
      }
      return (
        <Mui.Grid item={true} xs={1}><Mui.Button className={this.props.classes.button} onClick={() => this.removeValue(index)}>{text}</Mui.Button></Mui.Grid>
      );
    } else if (values.includes(index)) {
      return (
        <Mui.Grid item={true} xs={1}><Mui.Button className={this.props.classes.button}>X</Mui.Button></Mui.Grid>
      );
    } else if (this.props.isLocked[this.props.color] || values.find((value) => (isRedOrYellow && value > index) || (!isRedOrYellow && value < index))) {
      return (
        <Mui.Grid item={true} xs={1}><Mui.Button className={this.props.classes.button}>--</Mui.Button></Mui.Grid>
      );
    } else {
      let buttonClass: string = this.props.classes.button;
      if (isRedOrYellow && index === 12 && values.length < 5) {
        buttonClass = this.props.classes.disabledButton;
      } else if (!isRedOrYellow && index === 2 && values.length < 5) {
        buttonClass = this.props.classes.disabledButton;
      }
      return (
        <Mui.Grid item={true} xs={1}><Mui.Button className={buttonClass} onClick={() => this.addValue(index)}>{index}</Mui.Button></Mui.Grid>
      );
    }
  }

  @bind
  private addValue(index: number): void {
    const values = this.props.values[this.props.color];
    const isRedOrYellow: boolean = (this.props.color === qwixx.QwixxRanks.Red) || (this.props.color === qwixx.QwixxRanks.Yellow);

    if (this.props.color !== qwixx.QwixxRanks.Negative) {
      if (isRedOrYellow && index === 12 && values.length < 5) {
        return;
      } else if (!isRedOrYellow && index === 2 && values.length < 5) {
        return;
      }
    }

    this.props.addValue(this.props.color, index);
  }

  @bind
  private removeValue(index: number): void {
    if (this.props.isLocked[this.props.color]) {
      // Can't do this if it's locked!
      return;
    }

    this.props.removeValue(this.props.color, index);
  }
}

const mapStateToProps = (state: AppState): IColorRowMappedProps => ({
  isLocked: state.qwixx.isLocked,
  values: state.qwixx.values,
});

const mapDispatchToProps = (dispatch: Dispatch): IColorRowActions => ({
  addValue: (rank: qwixx.QwixxRanks, number: number) => dispatch(qwixx.addValue(rank, number)),
  removeValue: (rank: qwixx.QwixxRanks, number: number) => dispatch(qwixx.removeValue(rank, number)),
  lock: (rank: qwixx.QwixxRanks) => dispatch(qwixx.lock(rank)),
  unlock: (rank: qwixx.QwixxRanks) => dispatch(qwixx.unlock(rank)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mui.withStyles(localStyles)(ColorRow));
