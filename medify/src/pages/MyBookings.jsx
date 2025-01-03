import React from "react";
import { useSelector } from "react-redux";
import "../styles/MyBookings.css";

const MyBookings = () => {
  const bookings = useSelector((state) => state.bookings.bookings);

  return (
    <div className="my-bookings">
      <h2>My Bookings</h2>
      <div className="bookings-list">
        {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <div key={index} className="booking-card">
              <p>Date: {booking.date.toDateString()}</p>
              <p>Time: {booking.time}</p>
            </div>
          ))
        ) : (
          <p>No bookings found.</p>
        )}
      </div>
    </div>
  );
};

export default MyBookings;