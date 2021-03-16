import React from "react";

function Card(props) {
 return (
    <div className="card">
      <h2>Name: {props.name.first} {props.name.last}</h2>
      <div className="card-body">
        <ul>
          <li>{props.picture.thumbnail}</li>
          <li>Cell Phone: {props.cell}</li>
          <li>Email: {props.email}</li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
