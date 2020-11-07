import React from "react";
import EmployeeSelect from "../EmployeeSelect/EmployeeSelect"
import "./style.css";

function Header() {
    return(
    <div className="jumbotron">
    <h1 className="display-4">Employee Directory</h1>
    <p>
       <EmployeeSelect />
    </p>
     </div>
  )
}

export default Header;