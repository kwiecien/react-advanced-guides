import React from "react";
import * as ReactDOM from "react-dom";

const e = React.createElement;

ReactDOM.render(
    e('div', null, 'Hello World'),
    document.getElementById('root')
);