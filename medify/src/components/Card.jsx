import React from "react";
import "../styles/Card.css";

const Card = ({ name, address, city, state, zip, rating, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h3>{name}</h3>
      <p>{address}</p>
      <p>{`${city}, ${state} ${zip}`}</p>
      <p>Rating: {rating}</p>
      <button>Book Appointment</button>
    </div>
  );
};

export default Card;