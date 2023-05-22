import React, { Component } from 'react';

class Snapshot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteColor: 'RED'
        };
    }

    render() {
        return (
            <>
                <h2>Class Based Components - Lifecycle Method - getSnapshotBeforeUpdate()</h2>
                <h3>My favorite color is = {this.state.favoriteColor}</h3>
                <div id="counter"></div>
                <div id="div1"></div>
                <div id="div2"></div>
            </>
        );
    }

    componentDidMount() {
        let counter = 5;
        const interval = setInterval(() => {
            console.log(counter);
            document.getElementById("counter").textContent =
                "Wait for " + counter + " seconds...";
            counter--;
            if (counter <= -1) {
                document.getElementById("counter").textContent = "";
                this.setState({ favoriteColor: 'YELLOW' });
                clearInterval(interval);
            }
        }, 1000);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // console.log("prevProps in getSnapshotBeforeUpdate() = " + prevProps);
        // console.log("prevState in getSnapshotBeforeUpdate() = " + prevState);
        // this.setState({ favoriteColor: 'PURPLE'});
        document.getElementById("div1").textContent =
            "Before the update, my favorite color was = " + prevState.favoriteColor;
        return null;
    }

    componentDidUpdate(prevProps, prevState, Snapshot) {
        // console.log("prevProps in componentDidUpdate() = " + prevProps);
        // console.log("prevState in componentDidUpdate() = " + prevState);
        // console.log("Snapshot in componentDidUpdate() = " + Snapshot);
        document.getElementById("div2").textContent =
            "After the update, my favorite color is = " + this.state.favoriteColor;
    }

}

export default Snapshot;