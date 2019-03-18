import * as React from "react";

<MyButton color="blue" shadowSize={2}>
    Click Me
</MyButton>

React.createElement(
    MyButton,
    {color: 'blue', shadowSize: 2},
    'Click Me'
)

///////////////////////////////////

<div className="sidebar" />

    React.createElement(
        'div',
        {className: 'sidebar'},
        null
    )