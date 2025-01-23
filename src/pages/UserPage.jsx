import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/UserPage.css";

const UserPage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);   

  useEffect(() => {
      // Function to make the API call
    const fetchUserData = async () => {
      try {
        const response = await axios.get("mock/mockData.json");
        setUserData(response.data);
      } catch (err) {
        setError("Error loading data.");
        console.error("Error:", err);
      } finally {
        setLoading(false);  
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Caricamento...</p>
      </div>
    );
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="infoUtente">
      <p>Name: {userData.name}</p>
      <p>Surname: {userData.surname}</p>
      <p>Age: {userData.age}</p>
    </div>
  );
};

export default UserPage;
