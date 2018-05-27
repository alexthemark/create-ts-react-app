import { StyleRulesCallback, WithStyles, withStyles } from "@material-ui/core";
import React from "react";

export interface IHomePageProps extends WithStyles<"HomePage"> {
  // empty
}

class UnstyledHomePage extends React.PureComponent<IHomePageProps, {}> {
  public render() {
    return <div className={this.props.classes.HomePage}>HomePage</div>;
  }
}

const HomePageStyle: StyleRulesCallback<"HomePage"> = () => ({
  HomePage: {}
});
export const HomePage = withStyles(HomePageStyle)(UnstyledHomePage);
