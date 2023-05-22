import React, { Component } from 'react';

class Range extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialCount: this.props.initialCount,
            updatedCount: this.props.initialCount,
            range: "0-5"
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.updatedCount != nextState.updatedCount || this.state.range != nextState.range) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <>
                <h2>Class Based Components - Lifecycle Method - shouldComponentUpdate(nextProps, nextState)</h2>
                <p>Initial Count = {this.state.initialCount}</p>
                <button type='button' onClick={this.incrementCount}>Increment + 1</button>
                <button type='button' onClick={this.decrementCount}>Decrement - 1</button>
                <h3>Updated Count = {this.state.updatedCount}</h3>
                <h3>Range = {this.state.range}</h3>
            </>
        );
    }


    incrementCount = () => {
        let count = this.state.updatedCount + 1;
        this.setRange(count);
    };

    decrementCount = () => {
        let count = this.state.updatedCount - 1;
        this.setRange(count);
    };

    setRange = (count) => {
        let range = "";
        if (count < 0) {
            range = "Less than 0"
        } else if (count <= 5) {
            range = "0-5"
        } else if (count <= 10) {
            range = "6-10"
        } else {
            range = "Greater than 10"
        }
        this.setState({ updatedCount: count, range: range });
    }
}

export default Range;