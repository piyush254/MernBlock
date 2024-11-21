import React, { useState, useEffect } from "react";

// Main component to handle checkboxes
const ServiceCheckbox = ({ data }) => {
  // Define the static service options
  const staticServices = ["Laboratory", "Radiology"];

  // State to hold selected services
  const [servicesRequired, setServicesRequired] = useState([]);

  // Extract the list of selected services from the provided data
  const initialServices = data.configDetails.SERVICE_REQUIRED
    ?.split(", ")
    .map((service) => service.trim()) || [];

  // Initialize the state based on the data received
  useEffect(() => {
    // Filter to include only the static options that are present in the initial data
    const filteredServices = staticServices.filter((service) =>
      initialServices.includes(service)
    );
    setServicesRequired(filteredServices);
  }, [data]);

  // Handle checkbox change (toggle selection)
  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    setServicesRequired((prevServices) =>
      prevServices.includes(value)
        ? prevServices.filter((service) => service !== value) // Remove if already selected
        : [...prevServices, value] // Add if not selected
    );
  };

  return (
    <div className="form-group mt-3">
      <label htmlFor="servicesRequired">Services Required:</label>
      <div className="input-group">
        {/* Display only static checkboxes for "Laboratory" and "Radiology" */}
        {staticServices.map((service, index) => (
          <div key={index} className="me-3">
            <input
              className="me-2"
              type="checkbox"
              name="servicesRequired"
              value={service}
              checked={servicesRequired.includes(service)}
              onChange={handleCheckboxChange}
              id={`service-${index}`}
            />
            <label htmlFor={`service-${index}`}>{service}</label>
          </div>
        ))}
      </div>
      {/* Display the selected services */}
      <div className="mt-3">
        <h4>Selected Services:</h4>
        <p>{servicesRequired.length > 0 ? servicesRequired.join(", ") : "No services selected"}</p>
      </div>
    </div>
  );
};

// Sample data that mimics your backend structure
const data = {
  configDetails: {
    SERVICE_REQUIRED: "Laboratory", // Initially selected services
  },
};

// Main App component to render the ServiceCheckbox
export default function App() {
  return (
    <div className="container mt-5">
      <h2>Service Selection Form</h2>
      <ServiceCheckbox data={data} />
    </div>
  );
}
