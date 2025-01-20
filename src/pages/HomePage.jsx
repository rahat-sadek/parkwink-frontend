// import React, {useState, useEffect} from "react";
// import '../styles/Dashboard.css';

// const Dashboard = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//     }, []);
//     return (
//         <>

            
//         </>
//     )

// };
// export default Dashboard;
import React, { useState, useEffect } from "react";
import '../styles/HomePage.css';

const HomePage = () => {
    const [parkingStats, setParkingStats] = useState({});
    
    useEffect(() => {
        setParkingStats({
            availableSpots: 120,
            totalSpots: 200,
            activeBookings: 45,
        });
    }, []);
    
    return (
        <div className="homepage-container">
            <header className="homepage-header">
                <h1>Welcome to Park Wink </h1>
            </header>

            <section className="parking-stats">
                <div className="stats-card">
                    <h3>{parkingStats.availableSpots}</h3>
                    <p>Available Spots</p>
                </div>
                <div className="stats-card">
                    <h3>{parkingStats.activeBookings}</h3>
                    <p>Active Bookings</p>
                </div>
                <div className="stats-card">
                    <h3>{parkingStats.totalSpots}</h3>
                    <p>Total Spots</p>
                </div>
            </section>

            <section className="cta-section">
                <button>Book Now</button>
            </section>
        </div>
    );
};

export default HomePage;
