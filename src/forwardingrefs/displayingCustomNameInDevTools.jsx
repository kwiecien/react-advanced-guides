import React from "react";

const WrappedComponent = React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
});

/**
 * If you name the render function, DevTools will also include its name (e.g. ”ForwardRef(myFunction)”):
 */
const WrappedComponent = React.forwardRef(
    function myFunction(props, ref) {
        return <LogProps {...props} forwardedRef={ref} />;
    }
);

/**
 * You can even set the function’s displayName property to include the component you’re wrapping:
 */
function logProps(Component) {
    class LogProps extends React.Component {
        // ...
    }

    function forwardRef(props, ref) {
        return <LogProps {...props} forwardedRef={ref} />;
    }

    // Give this component a more helpful display name in DevTools.
    // e.g. "ForwardRef(logProps(MyComponent))"
    const name = Component.displayName || Component.name;
    forwardRef.displayName = `logProps(${name})`;

    return React.forwardRef(forwardRef);
}