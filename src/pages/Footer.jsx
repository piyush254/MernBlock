import React, { useState } from "react";
import Popup from "./Popup"; // Import the Popup component

const Footer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Control popup visibility
  const [popupContent, setPopupContent] = useState("");

  const handlePopup = (content) => {
    setPopupContent(content); // Set content type (Create Profile/Login)
    setIsPopupOpen(true); // Open the popup
  };

  const closePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  return (
    <footer style={footerStyle}>
      <ul style={listStyle}>
        <li style={listItemStyle} onClick={() => handlePopup("Create Profile")}>
          Create Profile
        </li>
        <li style={listItemStyle} onClick={() => handlePopup("Login")}>
          Login
        </li>
        <li>
          <a href="https://github.com/piyush254" target="_blank" rel="noopener noreferrer">Github</a>
        </li>
      </ul>
      {isPopupOpen && (
        <Popup content={popupContent} onClose={closePopup} />
      )}
    </footer>
  );
};

// Footer Styles
const footerStyle = {
  textAlign: "center",
  position: "fixed",
  bottom: "0",
  width: "100%",
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  justifyContent: "center",
};

const listItemStyle = {
  cursor: "pointer",
  textDecoration: "none",
};

export default Footer;
