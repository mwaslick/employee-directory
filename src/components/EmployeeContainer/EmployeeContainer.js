import React, { Component } from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import Header from "../Header/Header";
import API from "../../utils/API"
import "./style.css"

class EmployeeContainer extends Component {
    state = {
        employees: [],
        sortedEmployees: []
    }

    componentDidMount() {
        API.getEmployees()
        .then (res => {
            this.setState({
                employees: res.data.results
            })
        
        })
    }

    sortEmployeeName() {
        this.setState({
            employees: this.state.employees.sort((a,b) => a.name.last - b.name.last)
        })
    }
    
    
    render() {

        return (
            <div>
                <Header 
                />
        
                <button className="btn btn-primary" onClick={()=> this.sortEmployeeName()}>sort</button>

                {this.state.employees.map(employee => (
                     <EmployeeCard
                     key = {employee.id.value}
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



