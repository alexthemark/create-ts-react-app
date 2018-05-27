import {
  AppBar,
  Hidden,
  IconButton,
  StyleRulesCallback,
  Toolbar,
  Typography,
  WithStyles,
  withStyles
} from "@material-ui/core";
import { AccountCircle, Menu } from "@material-ui/icons";
import React from "react";

export interface IHeaderProps extends WithStyles<"header" | "title"> {
  toggleSidebar: () => void;
}

class UnstyledHeader extends React.PureComponent<IHeaderProps, {}> {
  public render() {
    return (
      <AppBar position="static" className={this.props.classes.header}>
        <Toolbar>
          <Hidden mdUp={true}>
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={this.props.toggleSidebar}>
              <Menu />
            </IconButton>
          </Hidden>
          <Typography
            variant="title"
            color="inherit"
            className={this.props.classes.title}>
            Title
          </Typography>
          <IconButton color="inherit" aria-label="Menu">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

const HeaderStyle: StyleRulesCallback<"header" | "title"> = () => ({
  header: {},
  title: {
    flex: 1
  }
});

export const Header = withStyles(HeaderStyle)(UnstyledHeader);
