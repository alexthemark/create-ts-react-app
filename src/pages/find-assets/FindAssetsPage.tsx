import { StyleRulesCallback, WithStyles, withStyles } from "@material-ui/core";
import React from "react";

export interface IFindAssetsPageProps extends WithStyles<"FindAssetsPage"> {
  // empty
}

class UnstyledFindAssetsPage extends React.PureComponent<
  IFindAssetsPageProps,
  {}
> {
  public render() {
    return (
      <div className={this.props.classes.FindAssetsPage}>FindAssetsPage</div>
    );
  }
}

const FindAssetsPageStyle: StyleRulesCallback<"FindAssetsPage"> = () => ({
  FindAssetsPage: {}
});
export const FindAssetsPage = withStyles(FindAssetsPageStyle)(
  UnstyledFindAssetsPage
);
