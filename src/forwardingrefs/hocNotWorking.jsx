import FancyButton from './forwardingRefsInHigherOrderComponents';
import React from "react";

const ref = React.createRef();

// The FancyButton component we imported is the LogProps HOC.
// Even though the rendered output will be the same,
// Our ref will point to LogProps instead of the inner FancyButton component!
// This means we can't call e.g. ref.current.focus()
<FancyButton
    label="Click Me"
    handleClick={handleClick}
    ref={ref}
/>;