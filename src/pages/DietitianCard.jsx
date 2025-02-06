import React from "react";
import "./DietitianCard.css";

const DietitianCard = () => {
  return (
    <div className="card-container">
      <h2>Book an Appointment with Expert Dietitians</h2>
      <p className="subtitle">Diet Consultation @Rs.299 Only!</p>
      <ul className="features">
        <li>With over 50+ expert Dietitians</li>
        <li>Get personalized diet plan</li>
      </ul>
      <button className="book-now-btn">Book Now</button>
    </div>
  );
};

export default DietitianCard;
