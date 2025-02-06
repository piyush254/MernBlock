import React, { useState, useEffect } from "react";

// Main component to handle checkboxes
const ServiceCheckbox = ({ data }) => {
  // Define the static service options
  const staticServices = [
    { id: "HEART", label: "Heart" },
    { id: "LUNGS", label: "Lungs" },
    { id: "KIDNEY", label: "Kidney" },
    { id: "VITAMIN", label: "Vitamin" },
    { id: "BONE", label: "Bone & Joints" },
    { id: "LIVER", label: "Liver" },
    { id: "BLOOD_ELEMENTS", label: "Blood" },
    { id: "Cardiology", label: "Cardiology" },
    { id: "Pediatric", label: "Pediatric" },
    { id: "Cardiac", label: "Cardiac" },
    { id: "THYROID", label: "Thyroid" },
    { id: "HAIR_SKIN", label: "Skin & Hair" },
    { id: "URINE", label: "Urine" },
    { id: "METABOLIC", label: "Metabolism" },
    { id: "TUMOR", label: "Tumour" },
    { id: "CANCER", label: "Cancer" },
    { id: "DIABETIC", label: "Diabetic" },
    { id: "FEVER", label: "Fever" },
    { id: "FOOD_INTOLERANCE", label: "Food Intolerance" },
    { id: "HYPERTENSION", label: "Hypertension" },
    { id: "PREGNANCY", label: "Pregnancy" },
    { id: "FERTILITY", label: "Fertility" },
    { id: "COVID", label: "Covid" },
    { id: "HIV", label: "HIV" },
    { id: "IMMUNITY", label: "Immunity" },
  ];

  // State to hold selected services
  const [servicesRequired, setServicesRequired] = useState([]);

  // Initialize the state based on the data received
  useEffect(() => {
    const initialService = data[0]; // Extract the only element from the array
    const filteredServices = staticServices
      .filter((service) => service.id === initialService)
      .map((service) => service.id);
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
        {staticServices.map((service, index) => (
          <div key={index} className="me-3">
            <input
              className="me-2"
              type="checkbox"
              name="servicesRequired"
              value={service.id}
              checked={servicesRequired.includes(service.id)}
              onChange={handleCheckboxChange}
              id={`service-${index}`}
            />
            <label htmlFor={`service-${index}`}>{service.label}</label>
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
const data = ["Pediatric"]; // 1-length array always

// Main App component to render the ServiceCheckbox
export default function App() {
  return (
    <div className="container mt-5">
      <h2>Service Selection Form</h2>
      <ServiceCheckbox data={data} />
    </div>
  );
}
