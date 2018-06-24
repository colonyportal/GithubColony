import * as React from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import * as classNames from "classnames";
import { withStyles } from "@material-ui/core";

import HeaderStyle from "components/presentation/Header/styles";

type ParentProps = {
  onNavHome: () => void;
  onExpand: () => void;

  sideBarOpen: boolean;
}

type Props = ParentProps & { classes: StyleClassNames };

type State = {}

class Header extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    const { classes, sideBarOpen, onNavHome, onExpand } = this.props;

    return (
      <AppBar
        position="absolute"
        className={classNames(classes.appBar, sideBarOpen && classes.appBarShift)}
      >
        <Toolbar disableGutters={!sideBarOpen}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={onExpand}
            className={classNames(classes.menuButton, sideBarOpen && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Button className={classes.title} onClick={()=>{ onNavHome() }} >
            Colony Portal
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

type StyleClassNames =
{
  appBar: string,
  appBarShift: string,
  title: string,
  menuButton: string,
  hide: string
}

export default withStyles(HeaderStyle)<ParentProps>(Header as any);