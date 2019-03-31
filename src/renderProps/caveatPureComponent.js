import React from "react";

function problem() {
    class Mouse extends React.PureComponent {
        // Same implementation as above...
    }

    class MouseTracker extends React.Component {
        render() {
            return (
                <div>
                    <h1>Move the mouse around!</h1>

                    {/*
          This is bad! The value of the `render` prop will
          be different on each render.
                    */}
                    <Mouse render={mouse => (
                        <Cat mouse={mouse} />
                    )} />
                </div>
            );
        }
    }
}

function solution() {
    class MouseTracker extends React.Component {
        // Defined as an instance method, `this.renderTheCat` always
        // refers to *same* function when we use it in render
        renderTheCat(mouse) {
            return <Cat mouse={mouse} />;
        }

        render() {
            return (
                <div>
                    <h1>Move the mouse around!</h1>
                    <Mouse render={this.renderTheCat} />
                </div>
            );
        }
    }

}