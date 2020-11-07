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
    <form>
      <div className="form-group row">
        <label for="filter" className="col-4 col-form-label">Search Employee Name:</label>
        <div className="col-6">
        <input type="text" id="filter" className="form-control" 
          value={this.state.employeeFilter} 
          onChange={this.handleChange}/>
        </div>
      </div>
      </form>
      )
  }
}

export default Searchbar