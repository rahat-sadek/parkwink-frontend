import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/AddCars.css";

const AddCars = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    plate: ""
  });

  const handleClick = () => {
    navigate('/carlist');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3001/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert("Car added successfully!");
      setFormData({
        brand: "",
        model: "",
        plate: ""
      });

    } else {
      alert("Failed to add car. Please try again.");
    }
  };

  return (
    <div>
      <form className="car-form" onSubmit={handleSubmit}>
        <h2>Car form</h2>

        <label htmlFor="brand" className="form-label">
          Brand*
        </label>
        <input
          type="text"
          id="brand"
          name="brand"
          value={formData.brand}
          onChange={handleInputChange}
          placeholder="Insert your car brand"
          required
          className="form-input"
        />

        <label htmlFor="model" className="form-label">
          Car model*
        </label>
        <input
          type="text"
          id="model"
          name="model"
          value={formData.model}
          onChange={handleInputChange}
          placeholder="Insert your car model"
          required
          className="form-input"
        />

        <label htmlFor="plate" className="form-label">
          Plate*
        </label>
        <input
          type="text"
          id="plate"
          name="plate"
          value={formData.plate}
          onChange={handleInputChange}
          placeholder="Insert your car plate"
          required
          className="form-input"
        />

        <button type="submit" className="form-submit" onClick={handleClick}>
          Add car
        </button>
      </form>
    </div>
  );
};

export default AddCars;
