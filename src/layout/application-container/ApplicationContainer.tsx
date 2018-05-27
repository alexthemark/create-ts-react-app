import {
  CssBaseline,
  StyleRulesCallback,
  WithStyles,
  withStyles
} from "@material-ui/core";
import { Location } from "history";
import React from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import { Route } from "react-router";
import { IApplicationState } from "../..";
import { ROUTES } from "../../pages/Routes";
import { FindAssetsPage } from "../../pages/find-assets/FindAssetsPage";
import { HomePage } from "../../pages/home-page/HomePage";
import { MyAssetsPage } from "../../pages/my-assets/MyAssetsPage";
import { Header } from "../header/Header";
import { drawerWidth, transition } from "../jss/create-ts-react-app";
import { Sidebar } from "../sidebar/Sidebar";

interface IApplicationContainerProps
  extends WithStyles<"application-container" | "content"> {
  // empty
}

interface IApplicationContainerStateProps {
  location: Location | null;
}

interface IApplicationContainerState {
  isSidebarOpen: boolean;
}

class ApplicationContainerInternal extends React.PureComponent<
  IApplicationContainerProps & IApplicationContainerStateProps,
  IApplicationContainerState
> {
  public state = {
    isSidebarOpen: false
  };

  public render() {
    return (
      <>
        <CssBaseline />
        <div className={this.props.classes["application-container"]}>
          <Header toggleSidebar={this.toggleSidebar} />
          <div>
            <Sidebar
              isOpen={this.state.isSidebarOpen}
              toggleOpen={this.toggleSidebar}
            />
            <div className={this.props.classes.content}>
              <Route exact={true} path={ROUTES.HOME} component={HomePage} />
              <Route path={ROUTES.ASSETS} component={MyAssetsPage} />
              <Route path={ROUTES.SEARCH} component={FindAssetsPage} />
            </div>
          </div>
        </div>
      </>
    );
  }

  private toggleSidebar = () => {
    this.setState(state => {
      return {
        isSidebarOpen: !state.isSidebarOpen
      };
    });
  };
}

const ApplicationContainerStyle: StyleRulesCallback<
  "application-container" | "content"
> = theme => ({
  "application-container": {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  content: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    float: "right",
    maxHeight: "100%",
    overflow: "auto",
    overflowScrolling: "touch",
    position: "relative",
    width: "100%",
    ...transition
  }
});

const ApplicationContainerWithStyles = withStyles(ApplicationContainerStyle)(
  ApplicationContainerInternal
);

function mapStateToProps(
  state: IApplicationState
): IApplicationContainerStateProps {
  return { location: state.router.location };
}

// while we don't use the location data directly, this is needed to trigger a rerender
const ApplicationContainerWithState = connect(mapStateToProps)(
  ApplicationContainerWithStyles
);

export const ApplicationContainer = hot(module)(ApplicationContainerWithState);
