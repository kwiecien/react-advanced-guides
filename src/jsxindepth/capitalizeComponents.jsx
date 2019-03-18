import React from 'react';

// Wrong! This is a component and should have been capitalized:
function hello(props) {
    // Correct! This use of <div> is legitimate because div is a valid HTML tag:
    return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
    // Wrong! React thinks <hello /> is an HTML tag because it's not capitalized:
    return <hello toWhat="World" />;
}