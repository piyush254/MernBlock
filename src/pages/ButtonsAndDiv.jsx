import React, { useRef, useState } from "react";

function ButtonsAndDiv() {
  const buttonContainerRef = useRef(null); // Ref for the main div
  const [buttonsEnabled, setButtonsEnabled] = useState(false); // Track button enabled/disabled state
  const [clickedButton, setClickedButton] = useState(null); // Store the serial number of the clicked button

  const handleCheckboxChange = (e) => {
    const isActive = e.target.name === "active";
    setButtonsEnabled(isActive); // Enable buttons if "Active" is checked
    setClickedButton(null); // Reset clicked button when changing state
  };

  const handleButtonClick = (serialNumber) => {
    if (buttonsEnabled) {
      setClickedButton(serialNumber); // Show serial number when clicked
    }
  };

  return (
    <div>
      {/* Checkboxes */}
      <div>
        <label>
          <input
            type="checkbox"
            name="active"
            onChange={handleCheckboxChange}
            checked={buttonsEnabled}
          />
          Active
        </label>
        <label style={{ marginLeft: "10px" }}>
          <input
            type="checkbox"
            name="deactive"
            onChange={handleCheckboxChange}
            checked={!buttonsEnabled}
          />
          Deactive
        </label>
      </div>

      {/* Buttons Container */}
      <div ref={buttonContainerRef} style={{ marginTop: "10px" }}>
        {Array.from({ length: 10 }, (_, index) => (
          <button
            key={index + 1}
            style={{ margin: "5px", padding: "10px" }}
            disabled={!buttonsEnabled} // Disable buttons when not active
            onClick={() => handleButtonClick(index + 1)} // On click, show button serial number
          >
            Button {index + 1}
          </button>
        ))}
      </div>

      {/* Display clicked button serial number */}
      {clickedButton && (
        <p>
          You clicked on <strong>Button {clickedButton}</strong>
        </p>
      )}
    </div>
  );
}

export default ButtonsAndDiv;
