import React from "react";

function Card(props) {
 return (
   <div>
     {props.results.map(result => (
      <div className="card" >
        <h2>Name: {result.name.first} {result.name.last}</h2>
        <div className="card-body">
          <ul>
            <li>{result.picture.thumbnail}</li>
            <li>Cell Phone: {result.cell}</li>
            <li>Email: {result.email}</li>
          </ul>
        </div>
      </div>
     ))}
   </div>
 )}

export default Card;
