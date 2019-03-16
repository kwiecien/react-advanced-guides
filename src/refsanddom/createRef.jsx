import * as React from "react";

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef;
    }


    render() {
        return (
            <div ref={this.myRef} />
        );
    }

}