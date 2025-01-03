import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import "../styles/SearchResults.css";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const state = searchParams.get("state");
  const city = searchParams.get("city");
  const [centers, setCenters] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCenters = async () => {
      try {
        const response = await axios.get(
          `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
        );
        setCenters(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch medical centers. Please try again.");
      }
    };

    if (state && city) {
      fetchCenters();
    } else {
      setError("State and City are required to search medical centers.");
    }
  }, [state, city]);

  const handleBookAppointment = (center) => {
    navigate("/booking", { state: { hospital: center } });
  };

  return (
    <div className="search-results">
      <h2>Available Medical Centers in {city}, {state}</h2>
      <div className="cards-container">
        {centers.length > 0 ? (
          centers.map((center, index) => (
            <Card
              key={index}
              name={center["Hospital Name"]}
              address={center.Address}
              city={center.City}
              state={center.State}
              zip={center["ZIP Code"]}
              phone={center["Phone Number"]}
              rating={center["Hospital overall rating"]}
              onClick={() => handleBookAppointment(center)}
            />
          ))
        ) : (
          <p>No medical centers found for the selected state and city.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
