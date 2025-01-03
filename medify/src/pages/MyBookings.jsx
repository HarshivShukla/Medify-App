import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/MyBookings.css";

const MyBookings = () => {
  const bookings = useSelector((state) => state.bookings.bookings);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBookings = bookings.filter((booking) =>
    booking.hospital?.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="my-bookings">
      <h2 className="page-title">My Bookings</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Hospital Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="bookings-list">
        {filteredBookings.length > 0 ? (
          filteredBookings.map((booking, index) => {
            const bookingDate = new Date(booking.date);
            const formattedDate = isNaN(bookingDate.getTime())
              ? "Invalid Date"
              : bookingDate.toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                });

            return (
              <div key={index} className="booking-card">
                <h3 className="hospital-name">
                  {booking.hospital?.name || "Unknown Hospital"}
                </h3>
                <p className="hospital-address">
                  Address: {booking.hospital?.address || "Not Available"}
                </p>
                <p className="hospital-phone">
                  Phone: {booking.hospital?.phone || "Not Available"}
                </p>
                <div className="booking-details">
                  <span className="booking-time">{booking.time || "Not Selected"}</span>
                  <span className="booking-date">{formattedDate}</span>
                </div>
              </div>
            );
          })
        ) : (
          <p>No bookings found.</p>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
