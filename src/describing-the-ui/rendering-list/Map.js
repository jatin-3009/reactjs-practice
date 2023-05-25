function ShowListUsingMapMethod() {
    const people = [
        "Meliodas: Dragon's Sin of Wrath",
        "Diane: Serpent's Sin of Envy",
        "Ban: Fox's Sin of Greed",
        "King: Grizzly's Sin of Sloth",
        "Gowther: Goat's Sin of Lust",
        "Merlin: Boar's Sin of Gluttony",
        "Escanor: Lion's Sin of Pride"
    ];
    const listOfPeople = people.map(person => <li>{person}</li>);
    return (
        <>
            <h2>Rendering List using Map method</h2>
            <ol>{listOfPeople}</ol>
        </>
    );
}

export default ShowListUsingMapMethod;