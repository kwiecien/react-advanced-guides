function logPropsWrong(InputComponent) {
    InputComponent.prototype.componentWillReceiveProps = function(nextProps) {
        console.log('Current props: ', this.props);
        console.log('Next props: ', nextProps);
    };
    // The fact that we're returning the original input is a hint that it has
    // been mutated.
    return InputComponent;
}

// EnhancedComponent will log whenever props are received
const EnhancedComponent = logProps(InputComponent);
k
function logPropsOk(WrappedComponent) {
    return class extends React.Component {
        componentWillReceiveProps(nextProps) {
            console.log('Current props: ', this.props);
            console.log('Next props: ', nextProps);
        }
        render() {
            // Wraps the input component in a container, without mutating it. Good!
            return <WrappedComponent {...this.props} />;
        }
    }
}