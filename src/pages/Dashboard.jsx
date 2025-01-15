import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/UserInfo.css";

const UserInfo = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);      // Stato per gli errori

  useEffect(() => {
    // Funzione per fare la chiamata API
    const fetchUserData = async () => {
      try {
        const response = await axios.get("mock/mockData.json");
        setUserData(response.data);
      } catch (err) {
        setError("Errore nel caricamento dei dati.");
        console.error("Errore:", err);
      } finally {
        setLoading(false);  // Imposta il loading su false una volta che la chiamata è completata
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
      <p>Nome: {userData.name}</p>
      <p>Età: {userData.age}</p>
    </div>
  );
};

export default UserInfo;
