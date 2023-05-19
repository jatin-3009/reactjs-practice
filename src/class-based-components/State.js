import React, { Component } from "react";

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "Red",
        };
    }

    changeColor = () => {
        if (this.state.color === "Red") {
            this.setState({
                color: "Blue",
            });
        } else {
            this.setState({
                color: "Red",
            });
        }
    };

    render() {
        return (
            <>
                <h1>This is an example of State and setState</h1>
                <h2>Color: {this.state.color}</h2>
                <p>Click the following button</p>
                <button type="button" onClick={this.changeColor}>
                    Click me to change the color text
                </button>
            </>
        );
    }
}

export default Button;
