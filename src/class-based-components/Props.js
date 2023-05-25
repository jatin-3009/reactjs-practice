import React, { Component } from 'react';

export default class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "red",
            speed: this.props.speed
        };
    }

    render() {
        return (
            <>
                <h2>This is an example of a Class based component.</h2>
                <p>This is a { this.state.color } car!!</p>
                <p>Its speed is { this.state.speed } km per hour!</p>
                <button type='button' onClick={this.handleClick}>Click me</button>
            </>
        );
    }

    handleClick = () => {
        console.log(this.props.speed);
    }
}