import React from "react";
import "../styles/Dropdown.css";

const Dropdown = ({ label, options, onChange, value }) => {
  return (
    <div className="dropdown-container">
      <label className="dropdown-label">
        <span className="dropdown-icon">&#128269;</span>
        <select className="custom-dropdown" value={value} onChange={onChange}>
          <option value="" disabled>
            {label}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Dropdown;
