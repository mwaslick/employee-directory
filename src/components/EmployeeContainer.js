import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard/EmployeeCard";
import API from "../utils/API"

class EmployeeContainer extends Component {
    state = {
        employees: []
    }

    componentDidMount() {
        API.getEmployees()
        .then (res => {
            this.setState({
                employees: res.data.results
            })
        
        })
    }
    
    render() {
        return (
            <div>
                {this.state.employees.map(employee => (
                     <EmployeeCard
                     picture= {employee.picture.medium}
                     title= {employee.name.title}
                     first= {employee.name.first}
                     last= {employee.name.last}
                     gender= {employee.gender}
                     age = {employee.dob.age}
                     stnumber = {employee.location.street.number}
                     stname = {employee.location.street.name}
                     city = {employee.location.city}
                     state = {employee.location.state}
                     postcode = {employee.location.postcode}
                     email = {employee.email}
                     phone = {employee.phone}
                     />
                ))}
            </div>
            
        )
        
    }

}


export default EmployeeContainer;



