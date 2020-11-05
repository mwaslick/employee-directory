import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard/EmployeeCard";

class EmployeeContainer extends Component {
    state = {
        employees: []
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=200&nat=us")
        .then((res) => res.json())
        .then((data) => console.log(data))
    }

    render() {
        return <h1>Component Mounted</h1>
    }
};

export default EmployeeContainer;



