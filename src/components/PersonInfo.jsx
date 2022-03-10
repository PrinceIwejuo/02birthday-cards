import React, { Component } from "react";

class PersonInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
            Age: this.props.Age
        }
    };

    inceaseAge = () => {
        this.setState({Age: parseInt(this.state.Age) + 1})
    }

    render(){
        return (
            <div>
                <h3>{this.props.personName}</h3>
                <p>Age: {this.state.Age}</p>
                <p>Hair Color: {this.props.haircolor} </p>
                <button onClick = {this.inceaseAge}>Birthday Button For {this.props.personName}</button>
            </div>
        )
    }
}

export default PersonInfo;