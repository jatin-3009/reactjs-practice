import './Avatar.css'

export default function Avatar() {
    const avatarSrc = "https://i.imgur.com/7vQD0fPs.jpg";
    const avatarAlt = "Gregorio Y. Zara";
    return (
        <div className='avatarDiv'>
            <img
                className="avatarImg"
                src={avatarSrc}
                alt={avatarAlt}
            />
        </div>
    );
}