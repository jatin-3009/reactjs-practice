function Child({ person, style, time = new Date() }) {
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
            <p>Time is: {time.toString()}</p>
        </div>
    );
}

function DefaultPropsValue() {
    return (
        <>
            <h2>Default Props Value - I am the parent component.</h2>
            <Child
                person={{
                    firstName: "Jatin",
                    lastName: "Ninawe"
                }}
                style={{
                    color: "white",
                    backgroundColor: "black"
                }}
            />
        </>
    );
}

export default DefaultPropsValue;