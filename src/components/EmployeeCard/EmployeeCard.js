import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className= "row">
        <div className= "card-header col-12">
          <h1 className= "card-title">
            {props.first} {props.last}
            </h1>
          </div>
        </div>
      
      <div className="row">
      <div className="img-container col-2">
        <img className= "img-fluid employeePicture" alt="img" src={props.picture} />
      </div>
      <div className="content col-10">

      <div className="row">
      <ul className="list-group list-group-flush col-6">
          <li className="list-group-item">
            <strong>Age:</strong> {props.age}
          </li>
          <li className="list-group-item">
            <strong>Address:</strong> {props.stnumber} {props.stname} <br>
            </br>{props.city}, {props.state} {props.postcode}
          </li>
        </ul>

        <ul className="list-group list-group-flush col-6">
          <li className="list-group-item">
            <strong>E-mail:</strong> {props.email}
          </li>
          <li className="list-group-item">
            <strong>Phone:</strong> {props.phone}
          </li>
        </ul>


      </div>
      </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
