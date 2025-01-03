import React from "react";

const Dropdown = ({ label, options, onChange, value }) => {
  return (
    <div className="dropdown">
      <label>{label}</label>
      <select onChange={onChange} value={value}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
