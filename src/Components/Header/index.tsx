import * as Mui from '@material-ui/core';
import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

type IAllHeaderProps =
  RouteComponentProps<any>;

class Header extends React.Component<IAllHeaderProps, {}> {
  public render(): JSX.Element {
    return (
      <React.Fragment>
        <nav>
          <Mui.AppBar position="static">
            <Mui.Tabs value={this.props.location.pathname}>
              <Mui.Tab value="/" label="Home" to="/" component={Link} />
              <Mui.Tab value="/split" label="Split" to="/split" component={Link} />
              <Mui.Tab value="/millebornes" label="Mille Bornes" to="/millebornes" component={Link} />
              <Mui.Tab value="/about" label="About" to="/about" component={Link} />
            </Mui.Tabs>
          </Mui.AppBar>
        </nav>
      </React.Fragment>
    );
  }
}

export default withRouter(Header);
