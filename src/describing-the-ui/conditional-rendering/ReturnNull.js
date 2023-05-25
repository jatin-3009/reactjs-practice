function Skill({ skill, level }) {
    if (level > 8) {
        return (
            <>
                <li><b>{skill}</b>
                    <p>Skill Level: {level} (Master)</p>
                </li>
            </>
        );
    } else if (level > 6) {
        return (
            <>
                <li><b>{skill}</b>
                    <p>Skill Level: {level} (Professional)</p>
                </li>
            </>
        );
    } else if (level > 4) {
        return (
            <>
                <li><b>{skill}</b>
                    <p>Skill Level: {level} (Rookie)</p>
                </li>
            </>
        );
    } else if (level > 2) {
        return (
            <>
                <li><b>{skill}</b>
                    <p>Skill Level: {level} (Amateur)</p>
                </li>
            </>
        );
    } else {
        return null;
    }
}

function ShowcaseSkills() {
    return (
        <>
            <h2>Using null to return nothing</h2>
            <h3>The skill levels are out of 10</h3>
            <ol>
                <Skill
                    skill="Karate"
                    level={4}
                />
                <Skill
                    skill="Kung Fu"
                    level={1}
                />
                <Skill
                    skill="Martial Arts"
                    level={0}
                />
                <Skill
                    skill="Badminton"
                    level={9}
                />
                <Skill
                    skill="Table Tennis"
                    level={7}
                />
            </ol>
        </>
    );
}

export default ShowcaseSkills;