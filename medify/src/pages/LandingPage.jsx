import React, { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import Carousel from "../components/Carousel";
import "../styles/LandingPage.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchStates } from "../redux/slices/stateSlice";
import { fetchCities } from "../redux/slices/citySlice";

const LandingPage = () => {
  const dispatch = useDispatch();
  const states = useSelector((state) => state.state.states);
  const cities = useSelector((state) => state.city.cities);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    dispatch(fetchStates());
  }, [dispatch]);

  useEffect(() => {
    if (selectedState) {
      dispatch(fetchCities(selectedState));
    }
  }, [selectedState, dispatch]);

  const handleSearch = () => {
    console.log("Search initiated for:", selectedState, selectedCity);
  };

  return (
    <div className="landing-page">
      <Carousel items={[{ image: "/banner1.jpg", alt: "Banner 1" }, { image: "/banner2.jpg", alt: "Banner 2" }]} />
      <div className="search-section">
        <Dropdown
          label="Select State"
          options={states}
          onChange={(e) => setSelectedState(e.target.value)}
          value={selectedState}
        />
        <Dropdown
          label="Select City"
          options={cities}
          onChange={(e) => setSelectedCity(e.target.value)}
          value={selectedCity}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default LandingPage;