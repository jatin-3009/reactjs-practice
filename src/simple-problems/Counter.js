import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialCount: this.props.initialCount,
            updatedCount: this.props.initialCount
        };
    }

    increaseCount = () => {
        this.setState((prevState) => ({
            updatedCount: prevState.updatedCount + 1
        }));
    };

    decreaseCount = () => {
        this.setState((prevState) => ({
            updatedCount: prevState.updatedCount - 1
        }));
    }

    resetCount = () => {
        this.setState({
            updatedCount: 0
        });
    }

    render() {
        return (
            <>
                <h2>Problem 1</h2>
                <p>Counter button with one class</p>
                <p>The initial count of the counter is = {this.state.initialCount}</p>
                <button type='button' onClick={this.increaseCount}> Increase Count + 1 </button>
                <button type='button' onClick={this.decreaseCount}> Decrease Count - 1 </button>
                <button type='button' onClick={this.resetCount}> Reset Count to 0 </button>
                <h3> {this.state.updatedCount} </h3>
            </>
        );
    }
}