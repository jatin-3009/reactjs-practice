import React, { Component } from "react";

class Constructor extends Component {
    constructor() {
        super();
        this.state = {
            color: 'Red'
        }
    }

    render() {
        return(
            <>
                <h2>Class Based Components - Lifecycle Method - constructor(props)</h2>
                <p>{ this.state.color }</p>
            </>
        );
    }
}

export default Constructor;