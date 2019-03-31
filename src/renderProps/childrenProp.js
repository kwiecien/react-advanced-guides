function f() {
    <Mouse children={mouse => (
        <p>The mouse position is {mouse.x}, {mouse.y}</p>
    )} />;
}

function f1() {
    <Mouse>
        {mouse => (
            <p>The mouse position is {mouse.x}, {mouse.y}</p>
        )}
    </Mouse>

    Mouse.propTypes = {
        children: PropTypes.func.isRequired
    };
}