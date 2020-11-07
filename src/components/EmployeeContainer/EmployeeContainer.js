import React, { Component } from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import Header from "../Header/Header";
import Searchbar from "../Searchbar/Searchbar"
import API from "../../utils/API"
import "./style.css"

class EmployeeContainer extends Component {
    state = {
        employees: [],
        calledEmployees: [],
        sortedEmployees1: [],
        sortedEmployees2: [], 
        filteredEmployees: []
    }

    componentDidMount() {
        API.getEmployees()
        .then (res => {
            const calledEmployees= res.data.results
            this.setState({
                employees: calledEmployees,
                filteredEmployees: calledEmployees
            })
        
        })
    }

    sortEmployeeNameAsc() {
       const sortedEmployees1 = this.state.employees.sort((a, b) => {
           if (a.name.last > b.name.last) {
               return 1;
           }
           if (a.name.last < b.name.last) {
               return -1;
           } else {
               return 0
           }
       })
       this.setState({
           employees: sortedEmployees1
       })
    }

    sortEmployeeNameDesc() {
        const sortedEmployees2 = this.state.employees.sort((a, b) => {
            if (a.name.last < b.name.last) {
                return 1;
            }
            if (a.name.last > b.name.last) {
                return -1;
            } else {
                return 0
            }
        })
        this.setState({
            employees: sortedEmployees2
        })
     }

     filterEmployees = (employeeFilter) => {
        let filteredEmployees = this.state.filteredEmployees
        filteredEmployees = filteredEmployees.filter((employee) => {
            let employeeName = employee.name.first.toLowerCase() + employee.name.last.toLowerCase()
            return employeeName.indexOf(
                employeeFilter.toLowerCase()) !== -1
        })
        this.setState({
            employees: filteredEmployees
        })
        console.log(employeeFilter)
     }
    
    
    render() {

        return (
            <div>
                <Header 
                />

                <div className="btn-group btn-group-toggle sortbuttons">
                <button className="btn btn-primary" onClick={()=> this.sortEmployeeNameAsc()}>Last Name (Ascending)</button>

                <button className="btn btn-primary" onClick={()=> this.sortEmployeeNameDesc()}>Last Name (Descending)</button>
                </div>

                <div className="searchbardiv">
                <Searchbar employees={this.state.filteredEmployees} match={this.props.match} onChange= {this.filterEmployees} />


                </div>

                

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



