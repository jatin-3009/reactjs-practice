function Name({ name, isAllowed }) {
    return <li>
        {name} {isAllowed && "✔"}
    </li>;

    /*
    // The above code can be written using normal if and else also, by conditionally assigning jsx to a variable.
    let itemName = name;
    if (isAllowed) {
        itemName += " ✔";
    }
    return (<li>{itemName}</li>);
    */
}

function ListOfNames() {
    return (
        <>
            <h2>Conditional Rendering using Logical AND Operator(&&)</h2>
            <h3>List of items allowed in an examination hall</h3>
            <ol>
                <Name
                    name="Pencil"
                    isAllowed={true}
                />
                <Name
                    name="Pen"
                    isAllowed={true}
                />
                <Name
                    name="Ruler"
                    isAllowed={true}
                />
                <Name
                    name="Cheating Sheet"
                    isAllowed={false}
                />
                <Name
                    name="Whitener"
                    isAllowed={true}
                />
                <Name
                    name="Mobile"
                    isAllowed={false}
                />
            </ol>
        </>
    );
}

export default ListOfNames;