import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import Carousel from "../components/Carousel";
import "../styles/LandingPage.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchStates } from "../redux/slices/stateSlice";
import { fetchCities } from "../redux/slices/citySlice";
import doctorIcon from "../icons/doctor-icon.svg";
import labsIcon from "../icons/labs-icon.svg";
import hospitalIcon from "../icons/hospital-icon.svg";
import medicalStoreIcon from "../icons/medicalstore-icon.svg";
import ambulanceIcon from "../icons/ambulance-icon.svg";
import offer1 from "../assets/offer1.png";
import offer2 from "../assets/offer2.png";
import offer3 from "../assets/offer3.png";
import dentistryIcon from "../assets/dentistry.png";
import primaryCareIcon from "../assets/primarycare.png";
import cardiologyIcon from "../assets/cardiologist.png";
import mriIcon from "../assets/mri.png";
import bloodTestIcon from "../assets/bloodtest.png";
import psychologistIcon from "../assets/psychologist.png";
import laboratoryIcon from "../assets/laboratory.png";
import xrayIcon from "../assets/xray.png";
import doctor1 from "../assets/doctor1.jpg";
import doctor2 from "../assets/doctor2.jpg";
import faqImage from "../assets/faq-image.png";

const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    if (selectedState && selectedCity) {
      navigate(`/search-results?state=${selectedState}&city=${selectedCity}`);
    } else {
      alert("Please select both state and city.");
    }
  };

  const carouselItems = [
    { image: offer1, alt: "Offer 1" },
    { image: offer2, alt: "Offer 2" },
    { image: offer3, alt: "Offer 3" },
  ];

  const specialisationItems = [
    { icon: dentistryIcon, title: "Dentistry" },
    { icon: primaryCareIcon, title: "Primary Care" },
    { icon: cardiologyIcon, title: "Cardiology" },
    { icon: mriIcon, title: "MRI Resonance" },
    { icon: bloodTestIcon, title: "Blood Test" },
    { icon: psychologistIcon, title: "Psychologist" },
    { icon: laboratoryIcon, title: "Laboratory" },
    { icon: xrayIcon, title: "X-Ray" },
  ];

  return (
    <div className="landing-page">
      {/* Top Section */}
      <header className="top-section">
        <div className="header-content">
          <h1>
            Skip the travel! Find Online <span className="highlight">Medical Centers</span>
          </h1>
          <p className="subheading">
            Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
          </p>
          <button className="find-centers-btn">Find Centers</button>
        </div>
      </header>

      {/* Search Section */}
      <div className="search-section">
        <div className="search-container">
          <Dropdown
            label="State"
            options={states}
            onChange={(e) => setSelectedState(e.target.value)}
            value={selectedState}
          />
          <Dropdown
            label="City"
            options={cities}
            onChange={(e) => setSelectedCity(e.target.value)}
            value={selectedCity}
          />
          <button onClick={handleSearch} className="search-btn">
            Search
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories-section">
        <h2 className="categories-title">You may be looking for</h2>
        <div className="categories">
          <div className="category-card">
            <img src={doctorIcon} alt="Doctors" />
            <span>Doctors</span>
          </div>
          <div className="category-card">
            <img src={labsIcon} alt="Labs" />
            <span>Labs</span>
          </div>
          <div className="category-card active">
            <img src={hospitalIcon} alt="Hospitals" />
            <span>Hospitals</span>
          </div>
          <div className="category-card">
            <img src={medicalStoreIcon} alt="Medical Store" />
            <span>Medical Store</span>
          </div>
          <div className="category-card">
            <img src={ambulanceIcon} alt="Ambulance" />
            <span>Ambulance</span>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="carousel-section">
        <h2 className="carousel-title">Special Offers</h2>
        <Carousel items={carouselItems} />
      </div>

      {/* Find By Specialisation Section */}
      <div className="specialisation-section">
        <h2 className="specialisation-title">Find By Specialisation</h2>
        <div className="specialisation-grid">
          {specialisationItems.map((item, index) => (
            <div key={index} className="specialisation-card">
              <img src={item.icon} alt={item.title} />
              <span>{item.title}</span>
            </div>
          ))}
        </div>
        <button className="view-all-btn">View All</button>
      </div>

      {/* Caring Section */}
      <div className="caring-section">
        <div className="caring-content">
          <div className="caring-images">
            <div className="image-wrapper">
              <img src={doctor1} alt="Doctor Consultation" />
            </div>
            <img src={doctor2} alt="Doctors Helping" />
          </div>
          <div className="caring-text">
            <h3>Helping Patients From Around The Globe!</h3>
            <h2>
              Patient <span className="highlight">Caring</span>
            </h2>
            <p>
              Our goal is to deliver quality of care in a courteous, respectful, and
              compassionate manner. We hope you will allow us to care for you and strive
              to be the first and best choice for healthcare.
            </p>
            <ul>
              <li>Stay Updated About Your Health</li>
              <li>Check Your Results Online</li>
              <li>Manage Your Appointments</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-content">
          <div className="faq-image">
            <img src={faqImage} alt="Happy Patient" />
            <div className="faq-stat">
              <h3>84k+</h3>
              <p>Happy Patients</p>
            </div>
          </div>
          <div className="faq-questions">
            <p>Why choose our medical for your family? +</p>
            <p>Why we are different from others? +</p>
            <p>Trusted & experienced senior care & love +</p>
            <p>How to get appointment for emergency cases? +</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-content">
          <h3>Medify</h3>
          <div className="footer-links">
            <div>
              <p>About Us</p>
              <p>Our Pricing</p>
              <p>Our Gallery</p>
            </div>
            <div>
              <p>Appointment</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <p>©2023 Surya Nursing Home. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
