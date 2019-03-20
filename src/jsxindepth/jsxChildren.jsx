<MyContainer>
    <MyFirstComponent />
    <MySecondComponent />
</MyContainer>



<div>
Here is a list:
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
    </div>



render() {
    // No need to wrap list items in an extra element!
    return [
        // Don't forget the keys :)
        <li key="A">First item</li>,
        <li key="B">Second item</li>,
        <li key="C">Third item</li>,
    ];
}