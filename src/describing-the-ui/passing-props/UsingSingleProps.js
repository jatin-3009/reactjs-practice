function Child(props) {
    const style = props.style;
    const person = props.person;
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

function UsingSinglePropsObject() {
    return (
        <>
            <h2>Using Single Props Object - I am the parent component.</h2>
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

export default UsingSinglePropsObject;