import React from "react";

const Popup = ({ content, onClose }) => {
  return (
    <div style={overlayStyle}>
      <div style={popupStyle}>
        <h2>{content}</h2>
        <p>
          {content === "Create Profile"
            ? "Here you can create a new profile."
            : "Enter your login details below."}
        </p>
        <button style={buttonStyle} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const popupStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
  width: "300px",
};

const buttonStyle = {
  marginTop: "10px",
  padding: "8px 15px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default Popup;
