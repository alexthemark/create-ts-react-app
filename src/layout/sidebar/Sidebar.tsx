import {
  Drawer,
  Hidden,
  ListItem,
  ListItemIcon,
  ListItemText,
  StyleRulesCallback,
  WithStyles,
  withStyles
} from "@material-ui/core";
import { Inbox, Search, ShowChart } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../pages/Routes";
import {
  boxShadow,
  drawerWidth,
  headerHeight
} from "../jss/create-ts-react-app";

export interface ISidebarProps extends WithStyles<"sidebar"> {
  isOpen: boolean;
  toggleOpen: () => void;
}

class UnstyledSidebar extends React.PureComponent<ISidebarProps, {}> {
  public render() {
    const list = (
      <>
        <Link to={ROUTES.HOME}>
          <ListItem button={true}>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="Overview" />
          </ListItem>
        </Link>
        <Link to={ROUTES.ASSETS}>
          <ListItem button={true}>
            <ListItemIcon>
              <ShowChart />
            </ListItemIcon>
            <ListItemText primary="My Assets" />
          </ListItem>
        </Link>
        <Link to={ROUTES.SEARCH}>
          <ListItem button={true}>
            <ListItemIcon>
              <Search />
            </ListItemIcon>
            <ListItemText primary="Find Assets" />
          </ListItem>
        </Link>
      </>
    );
    return (
      <>
        <Hidden mdUp={true}>
          <Drawer
            variant="temporary"
            anchor="left"
            open={this.props.isOpen}
            classes={{ paper: this.props.classes.sidebar }}
            onClose={this.props.toggleOpen}>
            {list}
          </Drawer>
        </Hidden>
        <Hidden smDown={true}>
          <Drawer
            anchor="left"
            variant="permanent"
            open={true}
            classes={{ paper: this.props.classes.sidebar }}>
            {list}
          </Drawer>
        </Hidden>
      </>
    );
  }
}

const SidebarStyle: StyleRulesCallback<"sidebar"> = theme => ({
  sidebar: {
    border: "none",
    bottom: 0,
    left: 0,
    position: "fixed",
    top: headerHeight,
    zIndex: 1,
    ...boxShadow,
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      height: "100%",
      position: "fixed",
      width: drawerWidth
    },
    [theme.breakpoints.down("sm")]: {
      ...boxShadow,
      borderTop: "none",
      display: "block",
      height: "100vh",
      overflowY: "visible",
      paddingLeft: 0,
      top: 0,
      paddingRight: 0,
      position: "fixed",
      textAlign: "left",
      transform: `translate3d(${drawerWidth}px, 0, 0)`,
      visibility: "visible",
      width: drawerWidth,
      zIndex: "1032"
    }
  }
});

export const Sidebar = withStyles(SidebarStyle)(UnstyledSidebar);
