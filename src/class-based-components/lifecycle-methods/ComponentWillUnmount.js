import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{
                backgroundColor: 'yellow'
            }}>
                <h2>This is a child component.</h2>
                <p>If you click the below button, I will disappear.</p>
            </div>
        );
    }

    componentDidMount = () => {
        console.log("The child component is going to be mounted inside the Parent component...");
    }

    componentWillUnmount = () => {
        console.log("The child component is going to be unmounted from the Parent component...");
    }
}

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    render() {
        let childComponent;
        if (this.state.show) {
            childComponent = <Child />;
        }
        return (
            <>
                <h2>This is a parent component.</h2>
                {childComponent}
                <button type='button' onClick={this.toggleChildComponent}> Toggle Child Component </button>
            </>
        );
    }

    toggleChildComponent = () => {
        if (this.state.show) {
            this.setState({
                show: false
            });
        } else {
            this.setState({
                show: true
            });
        }
    }
}

export default Parent;