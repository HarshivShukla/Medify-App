import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../styles/BookingPage.css";
import { addBooking } from "../redux/slices/bookingsSlice";

const BookingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation(); // Access the hospital data from state
  const hospital = state?.hospital; // Ensure hospital data is available

  // Declare hooks unconditionally
  const [selectedDate, setSelectedDate] = useState("Today");
  const [selectedTime, setSelectedTime] = useState("");
  const times = {
    Morning: ["10:00 AM", "11:00 AM"],
    Afternoon: ["12:00 PM", "1:00 PM", "2:00 PM"],
    Evening: ["6:00 PM", "7:00 PM", "8:00 PM"],
  };

  if (!hospital) {
    return (
      <div className="booking-page">
        <h2>Hospital information is missing.</h2>
        <p>Please return to the search page and select a hospital.</p>
      </div>
    );
  }

  const convertDate = (date) => {
    const today = new Date();
    if (date === "Today") {
      return today.toISOString();
    } else if (date === "Tomorrow") {
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      return tomorrow.toISOString();
    } else {
      return new Date(date).toISOString();
    }
  };

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select both a date and time.");
      return;
    }

    try {
      const bookingData = {
        hospital: {
          name: hospital["Hospital Name"],
          phone: hospital["Phone Number"],
          address: `${hospital.Address}, ${hospital.City}, ${hospital.State}, ${hospital["ZIP Code"]}`,
        },
        date: convertDate(selectedDate),
        time: selectedTime,
      };

      dispatch(addBooking(bookingData));
      alert("Booking confirmed!");
      navigate("/my-bookings");
    } catch (error) {
      console.error("Error creating booking:", error);
      alert("An error occurred while booking. Please try again.");
    }
  };

  return (
    <div className="booking-page">
      <div className="hospital-details">
        <h2>Book an Appointment at {hospital["Hospital Name"]}</h2>
        <p>
          Address: {hospital.Address}, {hospital.City}, {hospital.State}{" "}
          {hospital["ZIP Code"]}
        </p>
        <p>Phone: {hospital["Phone Number"]}</p>
      </div>
      <div className="date-tabs">
        {["Today", "Tomorrow", "Fri, 5 May"].map((date, index) => (
          <button
            key={index}
            className={selectedDate === date ? "active-tab" : ""}
            onClick={() => setSelectedDate(date)}
          >
            {date}
          </button>
        ))}
      </div>
      <div className="time-selection">
        {Object.keys(times).map((timeGroup) => (
          <div key={timeGroup} className="time-group">
            <h3>{timeGroup}</h3>
            <div className="time-slots">
              {times[timeGroup].map((time) => (
                <button
                  key={time}
                  className={selectedTime === time ? "selected-time" : ""}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="confirm-btn" onClick={handleBooking}>
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingPage;
