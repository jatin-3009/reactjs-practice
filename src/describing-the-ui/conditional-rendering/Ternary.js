function TvShow({ showName, started, currentSeason = 0 }) {

    return (
        <>
            <li>
                <p><b>{showName}</b></p>
                {started ? (currentSeason > 1 ? <span>Currently watching season <b>{currentSeason}</b></span> : <span>Still watching season <b>1</b></span>) : <span>Will start soon...</span>}
                <p>Season(s) completed: {currentSeason >= 1 ? currentSeason - 1 : currentSeason}</p>
            </li>
        </>
    );
}

function WatchList() {
    return (
        <>
            <h2>Using Ternary Operator to render the WatchList</h2>
            <ol>
                <TvShow
                    showName="Alice in Borderland"
                    started={true}
                    currentSeason={2}
                />
                <TvShow
                    showName="All Of Us Are Dead"
                    started={false}
                />
                <TvShow
                    showName="Stranger Things"
                    started={true}
                    currentSeason={4}
                />
                <TvShow
                    showName="Breaking Bad"
                    started={true}
                    currentSeason={1}
                />
                <TvShow
                    showName="Outer Banks"
                    started={false}
                />
            </ol>
        </>
    );
}

export default WatchList;