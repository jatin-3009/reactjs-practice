import React, { Component } from "react";

export default class GetDerivedStateFromProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: this.props.level,
            color: 'Red'
        };
    }

    static getDerivedStateFromProps(props, state) {
        let newColor;
        if (state.level > 10) {
            newColor = 'Black'
        } else {
            newColor = 'White'
        }
        return {
            color: newColor,
            constructorNumber : 2
        };
    }

    render() {
        return (
            <>
                <h2>Class Based Components - Lifecycle Methods - GetDerivedStateFromProps</h2>
                <p>Level = {this.state.level}</p>
                <p>Color = {this.state.color}</p>
                <button type='button' onClick={this.showCurrentState}>Click me for State</button>
                <br />
                <button type='button' onClick={() => this.showCurrentProps()}>Click me for Props</button>
            </>
        );
    }

    showCurrentState = () => {
        console.log(this.state);
    }

    showCurrentProps() {
        console.log(this.props);
    }
}