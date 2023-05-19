const todaysDate = new Date();

function formatDate(date) {
    const formattedDate = new Intl.DateTimeFormat(
        'en-US',
        {
            weekday: 'long',
        }
    ).format(date);
    return formattedDate;
}

export default function Today() {
    return (
        <>
            <h2>Today's day is { formatDate(todaysDate) }!</h2>
        </>
    );
}