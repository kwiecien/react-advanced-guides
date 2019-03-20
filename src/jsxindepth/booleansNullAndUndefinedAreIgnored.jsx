function f() {
    <>
        <div/>
        <div></div>
        <div>{false}</div>
        <div>{null}</div>
        <div>{undefined}</div>
        <div>{true}</div>
    </>


    return (
        <>
            <div>
                {showHeader && <Header/>}
                <Content/>
            </div>
        </>
    )
}

function f1() {
    return (
        // `One caveat is that some “falsy” values, such as the 0 number, are still rendered by React. For example,
        // this code will not behave as you might expect because 0 will be printed when props.messages is an empty array:`
        <div>
            {props.messages.length &&
            <MessageList messages={props.messages}/>
            }
        </div>
    );

    function fixed() {
        <div>
            {props.messages.length > 0 &&
            <MessageList messages={props.messages} />
            }
        </div>
    }
}

function f2() {
    return (
        // Conversely, if you want a value like false, true, null, or undefined to appear in the output,
        // you have to convert it to a string first:

        <div>
            My JavaScript variable is {String(myVariable)}.
        </div>
    );
}