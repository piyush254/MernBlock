import React, { useState } from "react";
import Popup from "./Popup";

const Footer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); 
  const [popupContent, setPopupContent] = useState("");
  const closePopup = () => {
    setIsPopupOpen(false); 
  };

  const handlePopup = (content) => {
    setPopupContent(content); 
    setIsPopupOpen(true); 
  };


  return (
    <footer style={footerStyle}>
      <ul style={listStyle}>
        <li  className="ml-4" style={listItemStyle} onClick={() => handlePopup("Create Profile")}>
          Create Profile
        </li>
        <li className="ml-4" style={listItemStyle} onClick={() => handlePopup("Login")}>
          Login
        </li>
        <li className="ml-4">
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
