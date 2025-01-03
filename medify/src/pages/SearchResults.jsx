import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import "../styles/SearchResults.css";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const state = searchParams.get("state");
  const city = searchParams.get("city");
  const [centers, setCenters] = useState([]);

  useEffect(() => {
    const fetchCenters = async () => {
      const response = await axios.get(
        `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
      );
      setCenters(response.data);
    };
    fetchCenters();
  }, [state, city]);

  return (
    <div className="search-results">
      <h2>Available Medical Centers in {city}, {state}</h2>
      <div className="cards-container">
        {centers.map((center, index) => (
          <Card
            key={index}
            name={center.HospitalName}
            address={center.Address}
            city={center.City}
            state={center.State}
            zip={center.ZipCode}
            rating={center.OverallRating}
            onClick={() => console.log("Booking", center.HospitalName)}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;