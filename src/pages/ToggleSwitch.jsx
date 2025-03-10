import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ToggleSwitch.css"; // Import custom styles for the switch

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="d-flex align-items-center justify-content-center mt-10">
      <div className="me-2">
        {isToggled ? "Show similar tests" : "Hide similar tests"}
      </div>
      <div
        className={`toggle-switch ${isToggled ? "toggled" : ""}`}
        onClick={handleToggle}
        role="button"
        style={{ cursor: "pointer" }}
      >
        <div className="switch-circle"></div>
      </div>
    </div>
  );
};

export default ToggleSwitch;

