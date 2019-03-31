import React from "react";

class HelloMessage extends React.Component {
    render() {
        return <div>Hello <x-search>{this.props.name}</x-search>!</div>;
    }
}

function classInsteadOfClassName() {
    function BrickFlipbox() {
        return (
            <brick-flipbox class="demo">
                <div>front</div>
                <div>back</div>
            </brick-flipbox>
        );
    }
}