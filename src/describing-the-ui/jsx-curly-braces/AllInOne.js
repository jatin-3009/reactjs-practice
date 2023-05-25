import './AllInOne.css'
import profilePicture from './../../images/passport.jpg';

const person = {
    name: "Jatin Ninawe",
    image: {
        src: profilePicture,
        alt: "Jatin Ninawe",
        className: "passportSizeImage"
    },
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
}

export default function AllInOne() {
    return (
        <div className={person.theme}>
            <h1>Name: {person.name}</h1>
            <img
                className={person.image.className}
                src={person.image.src}
                alt={person.image.alt}
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}