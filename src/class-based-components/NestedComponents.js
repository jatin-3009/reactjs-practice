import React, { Component } from 'react';

class Car extends Component {
    constructor(props) {
        super(props);
        console.log("Inside Car...");
    }

    render() {
        return (
            <h2>I am Car. I am a child component.</h2>
        );
    }
}

export default class Garage extends Component {
    constructor(props) {
        super(props);
        console.log("Inside Garage...");
    }
    render() {
        return (
            <>
                <h2>I am Garage. I am the parent component.</h2>
                <Car />
            </>
        );
    }
}