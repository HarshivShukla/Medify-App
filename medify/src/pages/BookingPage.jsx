import React, { useState } from "react";
import CalendarComponent from "../components/Calendar";
import "../styles/BookingPage.css";
import { useDispatch } from "react-redux";
import { addBooking } from "../redux/slices/bookingsSlice";

const BookingPage = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const times = ["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      dispatch(addBooking({ date: selectedDate, time: selectedTime }));
      alert("Booking confirmed!");
    } else {
      alert("Please select a date and time.");
    }
  };

  return (
    <div className="booking-page">
      <h2>Book an Appointment</h2>
      <CalendarComponent onDateChange={setSelectedDate} />
      <div className="time-selection">
        <h3>Select a Time:</h3>
        {times.map((time, index) => (
          <button
            key={index}
            onClick={() => setSelectedTime(time)}
            className={selectedTime === time ? "selected" : ""}
          >
            {time}
          </button>
        ))}
      </div>
      <button onClick={handleBooking} className="confirm-btn">
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingPage;