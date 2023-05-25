function Child({ firstName, lastName, color, backgroundColor, time = new Date() }) {
    return (
        <div style={{
            color: color,
            backgroundColor: backgroundColor
        }}>
            <h2>I am the child component.</h2>
            <p>These are the props passed to me:</p>
            <ul>
                <li>First Name : {firstName}</li>
                <li>Last Name : {lastName}</li>
            </ul>
            <p>Time is: {time.toString()}</p>
        </div>
    );
}

function ForwardingProps(props) {
    return (
        <>
            <h2>Forwarding Props from Parent to Child Component - I am the parent component.</h2>
            <Child
                {...props}
            />
        </>
    );
}

export default ForwardingProps;