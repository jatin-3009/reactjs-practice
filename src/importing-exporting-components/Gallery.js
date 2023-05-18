import profilePicture from './../images/passport.jpg';

export function Profile() {
    return (
        <>
            <img
                src={profilePicture}
                alt="Jatin's Passport Size Pic"
            />
        </>
    );
}

function Gallery() {
    return (
        <>
            <section>
                <h2>
                    Gallery - Default Export
                </h2>
                <Profile />
                <Profile />
                <Profile />
            </section>
        </>
    );
}

export default Gallery;