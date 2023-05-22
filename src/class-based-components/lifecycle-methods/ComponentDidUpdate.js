import React, { Component } from 'react';

class UpdateCity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "Chennai"
        }
    }

    render() {
        return (
            <>
                <h2>Class Based Components - Lifecycle Method - componentDidUpdate()</h2>
                <h3>City = {this.state.city}</h3>
                <button type='button' onClick={this.changeCity}> Change City </button>
                <div id='updateDiv'></div>
            </>
        );
    }

    changeCity = () => {
        const index = Math.floor(Math.random() * 10);
        const cities = ["Delhi", "Mumbai", "Kolkata", "Chennai", "Bangalore", "Hyderabad", "Ahmedabad", "Pune", "Jaipur", "Lucknow"];
        this.setState({ city: cities[index] });
    }

    componentDidUpdate(prevProps, prevState) {
        const div = document.getElementById("updateDiv");
        let message;
        message = `Previous city = ${prevState.city}<br>But current city = ${this.state.city}`;
        div.innerHTML = message;
    }
}

export default UpdateCity;