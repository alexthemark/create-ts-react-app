import { StyleRulesCallback, WithStyles, withStyles } from "@material-ui/core";
import React from "react";

export interface IMyAssetsPageProps extends WithStyles<"MyAssetsPage"> {
  // empty
}

class UnstyledMyAssetsPage extends React.PureComponent<IMyAssetsPageProps, {}> {
  public render() {
    return <div className={this.props.classes.MyAssetsPage}>MyAssetsPage</div>;
  }
}

const MyAssetsPageStyle: StyleRulesCallback<"MyAssetsPage"> = () => ({
  MyAssetsPage: {}
});
export const MyAssetsPage = withStyles(MyAssetsPageStyle)(UnstyledMyAssetsPage);
