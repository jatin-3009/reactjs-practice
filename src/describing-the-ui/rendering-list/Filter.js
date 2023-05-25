import people from "./data";

function ShowListUsingFilterAndMapMethods() {
    const filteredPeople = people.filter(person => person.id % 2 === 0);
    const mappedPeople = filteredPeople.map(person =>
        <li key={person.id}>
            <p><b>{person.name}</b></p>
            <p><b>Sin: </b>{person.sin}</p>
        </li>
    );
    return (
        <>
            <h2>Rendering list using Filter and Map methods.</h2>
            <ol>{mappedPeople}</ol>
        </>
    );
}

export default ShowListUsingFilterAndMapMethods;