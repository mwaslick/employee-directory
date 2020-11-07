import React, { Component } from 'react';
import "./style.css"

class Searchbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employeeFilter: ""
    }
  }
  
  handleChange = (e) => {
    this.setState({
      employeeFilter: e.target.value
    })
    this.props.onChange(e.target.value)
  }
  
  render() {
    return (
      <div>
        <label htmlFor="filter">Filter by Employee Name: </label>
        <input type="text" id="filter" 
          value={this.state.employeeFilterFilter} 
          onChange={this.handleChange}/>
      </div>
      )
  }
}

export default Searchbar