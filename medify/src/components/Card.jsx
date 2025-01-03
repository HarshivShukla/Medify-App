import React from "react";
import "../styles/Card.css";

const Card = ({ name, address, city, state, zip, phone, rating, onClick }) => {
  return (
    <div className="card">
      <div className="card-details">
        <h3>{name}</h3>
        <p>{address}</p>
        <p>
          {city}, {state} {zip}
        </p>
        <p>Phone: {phone}</p>
        <p>Rating: {rating ? `${rating} / 5` : "Not Rated"}</p>
      </div>
      <div className="card-actions">
        <button className="button" onClick={onClick}>
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default Card;
