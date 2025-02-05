import React, { useState, useEffect } from "react";
import '../styles/CarList.css';

const CarList = () => {
    const [cars, setCars] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/cars")
            .then((response) => response.json())
            .then((data) => setCars(data))
            .catch((error) => console.error("Errore:", error));
    }, []);
    useEffect(() => {
        fetch("http://localhost:3001/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Errore:", error));
    }, []);

    return (
        <div className="list-container">
            <h1 className="title-list">List of cars</h1>
            <div className="info-list">
                <h2>User Information</h2>
                {users.map((user) => (
                    <p key={user.id} className="user-info">
                        <span>{user.username} {user.suranme}</span>
                        <span>{user.email}</span>
                    </p>
                ))}
            </div>
            <div className="info-list">
                <h2>Car Information</h2>
                {cars.map((car) => (
                    <p key={car.id} className="car-info">
                        <span>{car.brand}</span>
                        <span>{car.model}</span>
                        <span>{car.plate}</span>
                    </p>
                ))}
            </div>
        </div>
    );
};

export default CarList;
