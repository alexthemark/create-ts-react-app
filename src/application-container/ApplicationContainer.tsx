import React from "react";

export interface IApplicationContainerProps {
    // empty
}

export class ApplicationContainer extends React.PureComponent<IApplicationContainerProps, {}> {
    public render() {
        return (
            <div>
                Hello World
            </div>
        );
    }
}
