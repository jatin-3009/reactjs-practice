function Child({ person, style }) {
    return (
        <div style={{
            color: style.color,
            backgroundColor: style.backgroundColor
        }}>
            <h2>I am the child component.</h2>
            <p>These are the props passed to me:</p>
            <ul>
                <li>First Name : {person.firstName}</li>
                <li>Last Name : {person.lastName}</li>
            </ul>
        </div>
    );
}

function UsingSeparateProps() {
    return (
        <>
            <h2>Using Separate Props Object - I am the parent component.</h2>
            <Child person={{
                firstName: "Jatin",
                lastName: "Ninawe"
            }} style={{
                color: "white",
                backgroundColor: "black"
            }} />
        </>
    );
}

export default UsingSeparateProps;