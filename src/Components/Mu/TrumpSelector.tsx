import * as Mui from '@material-ui/core';
import * as React from 'react';
import { bind } from 'decko';

import Trumps from './Trumps';

const localStyles = (theme: Mui.Theme) => Mui.createStyles({
  selectBox: {
    width: 180,
  },
});

interface ITrumpSelectorProps {
  label: string;
  trump: Trumps;
  onTrumpChanged(value: Trumps): void;
}

type IAllTrumpSelectorProps =
  ITrumpSelectorProps &
  Mui.WithStyles<typeof localStyles>;

class TrumpSelector extends React.Component<IAllTrumpSelectorProps, {}> {
  public render(): JSX.Element {
    return (
      <Mui.FormControl variant='filled' className={this.props.classes.selectBox}>
        <Mui.InputLabel htmlFor='trump'>
          {this.props.label}
        </Mui.InputLabel>
        <Mui.Select
          value={this.props.trump}
          onChange={this.handleTrumpChanged}
          inputProps={{
            name: 'trump',
            id: 'trump',
          }}
        >
          <Mui.MenuItem value={Trumps.Black}>Black</Mui.MenuItem>
          <Mui.MenuItem value={Trumps.Blue}>Blue</Mui.MenuItem>
          <Mui.MenuItem value={Trumps.Green}>Green</Mui.MenuItem>
          <Mui.MenuItem value={Trumps.Red}>Red</Mui.MenuItem>
          <Mui.MenuItem value={Trumps.Yellow}>Yellow</Mui.MenuItem>
          <Mui.Divider />
          <Mui.MenuItem value={Trumps.One}>1</Mui.MenuItem>
          <Mui.MenuItem value={Trumps.Seven}>7</Mui.MenuItem>
          <Mui.Divider />
          <Mui.MenuItem value={Trumps.Zero}>0</Mui.MenuItem>
          <Mui.MenuItem value={Trumps.Two}>2</Mui.MenuItem>
          <Mui.MenuItem value={Trumps.Three}>3</Mui.MenuItem>
          <Mui.MenuItem value={Trumps.Four}>4</Mui.MenuItem>
          <Mui.MenuItem value={Trumps.Five}>5</Mui.MenuItem>
          <Mui.MenuItem value={Trumps.Six}>6</Mui.MenuItem>
          <Mui.MenuItem value={Trumps.Eight}>8</Mui.MenuItem>
          <Mui.MenuItem value={Trumps.Nine}>9</Mui.MenuItem>
          <Mui.Divider />
          <Mui.MenuItem value={Trumps.None}>No Trump</Mui.MenuItem>
        </Mui.Select>
      </Mui.FormControl>
    );
  }

  @bind
  private handleTrumpChanged(event: React.ChangeEvent<{ name?: string; value: unknown }>): void {
    this.props.onTrumpChanged(event.target.value as Trumps);
  }
}

export default Mui.withStyles(localStyles)(TrumpSelector);
