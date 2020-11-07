import React from "react";
import "./style.css"

function EmployeeSelect(props) {

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sort By:
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Name</a>
            <a className="dropdown-item" href="#">Age</a>
            <a className="dropdown-item" href="#">Something else here</a>
        </div>
    </div>


    )

}

export default EmployeeSelect;