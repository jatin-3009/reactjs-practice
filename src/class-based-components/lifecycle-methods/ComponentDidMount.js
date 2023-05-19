import React, { Component } from 'react';

class ComponentDidMount extends Component {
    constructor() {
        super();
        this.state = {
            firstName: 'Jatin',
            lastName: 'Ninawe',
            color: 'RED'
        }
    }

    render() {
        return (
            <>
                <h2>Component Did Mount - Class Based Component Life Cycle Method</h2>
                <p>Name: {this.state.firstName + ' ' + this.state.lastName}</p>
                <p>I am going to change the color from RED to BLUE in 3 seconds...</p>
                <h3> {this.state.color} </h3>
            </>
        );
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                color: 'BLUE'
            });
        }, 3000);
    }
}

export default ComponentDidMount;