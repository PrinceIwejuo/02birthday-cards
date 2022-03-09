import React, { Component } from "react";

class PersonInfo extends Component {
    render(){
        return (
            <div>
                <h3>{this.props.personName}</h3>
                <p>{this.props.Age}</p>
                <p>{this.props.haircolor} </p>
            </div>
        )
    }
}

export default PersonInfo;