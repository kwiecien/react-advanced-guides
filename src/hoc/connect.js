// connect is a function that returns another function
const enhance = connect(commentListSelector, commentListActions);
// The returned function is a HOC, which returns a component that is connected
// to the Redux store
const ConnectedComment = enhance(CommentList);

// In other words, connect is a higher-order function that returns a higher-order component!



// Instead of doing this...
const EnhancedComponent = withRouter(connect(commentSelector)(WrappedComponent))

// ... you can use a function composition utility
// compose(f, g, h) is the same as (...args) => f(g(h(...args)))
const enhance = compose(
    // These are both single-argument HOCs
    withRouter,
    connect(commentSelector)
)
const EnhancedComponent = enhance(WrappedComponent)