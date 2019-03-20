function f() {

    <MyComponent>foo</MyComponent>;
    <MyComponent>{'foo'}</MyComponent>;



    function Item(props) {
        return <li>{props.message}</li>;
    }

    function TodoList() {
        const todos = ['finish doc', 'submit pr', 'nag dan to review'];
        return (
            <ul>
                {todos.map((message) => <Item key={message} message={message} />)}
            </ul>
        );
    }




    function Hello(props) {
        return <div>Hello {props.addressee}!</div>;
    }

}