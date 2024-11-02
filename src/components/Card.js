// Card.js
import React from "react";
import './Card.css'; // Import CSS for styling

const Card = ({ imgSrc, heading, paragraph }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={heading} className="card-image" />
      <h2 className="card-heading">{heading}</h2>
      <p className="card-paragraph">{paragraph}</p>
    </div>
  );
};

export default Card;
