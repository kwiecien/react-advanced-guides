// If you really want a HOC for some reason, you can easily
// create one using a regular component with a render prop!
import React from "react";

function withMouse(Component) {
    return class extends React.Component {
        render() {
            return (
                <Mouse render={mouse => (
                    <Component {...this.props} mouse={mouse} />
                )}/>
            );
        }
    }
}