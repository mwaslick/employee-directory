import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt="img" src={props.picture} />
      </div>
      <div className="content">
        <ul>
          <li>
            Name: {props.title} {props.first} {props.last}
          </li>
          <li>
            Gender: {props.gender}
          </li>
          <li>
            Age: {props.age}
          </li>
          <li>
            Location: {props.stnumber} {props.stname} {props.city}, {props.state} {props.postcode}
          </li>
          <li>
            E-mail: {props.email}
          </li>
          <li>
            Phone: {props.phone}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;
