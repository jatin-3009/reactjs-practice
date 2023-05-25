function Item({ name, isRequired }) {
    if (isRequired) {
        return <li>{name} ✔</li>;
    } else {
        return <li>{name} ✘</li>;
    }

    /*
    // The above code can be written using Ternary Operator also.
    return(
        <>
            <li>{name} { isRequired? "✔" : "✘" }</li>
        </>
    );
    */
}

function ItemsForOffice() {
    return (
        <>
            <h2>Conditional Rendering using If and Else</h2>
            <ol>
                <Item
                    name="Mobile"
                    isRequired={true}
                />
                <Item
                    name="Laptop"
                    isRequired={true}
                />
                <Item
                    name="Charger"
                    isRequired={true}
                />
                <Item
                    name="Video Games"
                    isRequired={false}
                />
                <Item
                    name="Treadmill"
                    isRequired={false}
                />
            </ol>
        </>
    );
}

export default ItemsForOffice;