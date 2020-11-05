import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name.last} src={props.picture.medium} />
      </div>
      <div className="content">
        <ul>
          <li>
            Name: {props.name.title} {props.name.first} {props.name.last}
          </li>
          <li>
            Gender: {props.gender}
          </li>
          <li>
            Age: {props.dob.age}
          </li>
          <li>
            Location: {props.location.street.number} {props.location.street.name} {props.location.city} {props.location.state} {props.location.postcode}
          </li>
          <li>
            E-mail: {props.email}
          </li>
          <li>
            Phone: {props.location.phone}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;
