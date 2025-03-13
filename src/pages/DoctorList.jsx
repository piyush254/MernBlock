import React, { useState, useEffect } from "react";

const specialtiesData = [
  { SPECIALITY_ID: 1, SPECIALITY: "Gynecology", SPECIALITY_IMG: "https://s3.ap-south-1.amazonaws.com/cdn.mend.zone/speciality_icons/gynecology.png" },
  { SPECIALITY_ID: 2, SPECIALITY: "General Physician", SPECIALITY_IMG: "https://s3.ap-south-1.amazonaws.com/cdn.mend.zone/speciality_icons/general.png" },
  { SPECIALITY_ID: 3, SPECIALITY: "Heart", SPECIALITY_IMG: "https://s3.ap-south-1.amazonaws.com/cdn.mend.zone/speciality_icons/cardiology.png" },
  { SPECIALITY_ID: 4, SPECIALITY: "Diabetic", SPECIALITY_IMG: "https://s3.ap-south-1.amazonaws.com/cdn.mend.zone/speciality_icons/diabetes.png" },
  { SPECIALITY_ID: 5, SPECIALITY: "Paediatric", SPECIALITY_IMG: "https://s3.ap-south-1.amazonaws.com/cdn.mend.zone/speciality_icons/pediatrics.png" },
];

const providersData = [
  { PROVIDER_ID: 44, SPECIALITY: "Diabetic", PROVIDER_NAME: "Dr Yash", OFFER_PRICE: 550 },
  { PROVIDER_ID: 47, SPECIALITY: "Heart", PROVIDER_NAME: "Dr Veer", OFFER_PRICE: 1000 },
  { PROVIDER_ID: 46, SPECIALITY: "Paediatric", PROVIDER_NAME: "Dr Sangeeta", OFFER_PRICE: 1000 },
  { PROVIDER_ID: 38, SPECIALITY: "Diabetic", PROVIDER_NAME: "Dr Kiran", OFFER_PRICE: 1000 },
];

const DoctorList = () => {
  const [selectedSpecialities, setSelectedSpecialities] = useState([]);
  const [filteredProviders, setFilteredProviders] = useState(providersData);

  useEffect(() => {
    if (selectedSpecialities.length === 0) {
      setFilteredProviders(providersData);
    } else {
      setFilteredProviders(
        providersData.filter((provider) =>
          selectedSpecialities.includes(provider.SPECIALITY)
        )
      );
    }
  }, [selectedSpecialities]);

  const handleCheckboxChange = (speciality) => {
    setSelectedSpecialities((prevSelected) =>
      prevSelected.includes(speciality)
        ? prevSelected.filter((s) => s !== speciality)
        : [...prevSelected, speciality]
    );
  };

  return (
    <div>
      <h2>Filter by Specialty</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {specialtiesData.map(({ SPECIALITY, SPECIALITY_IMG }) => (
          <label key={SPECIALITY} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
            <input
              type="checkbox"
              value={SPECIALITY}
              checked={selectedSpecialities.includes(SPECIALITY)}
              onChange={() => handleCheckboxChange(SPECIALITY)}
            />
            {SPECIALITY_IMG && (
              <img src={SPECIALITY_IMG} alt={SPECIALITY} width="30" height="30" style={{ marginLeft: "10px" }} />
            )}
            {SPECIALITY}
          </label>
        ))}
      </div>

      <h2>Filtered Providers</h2>
      <ul>
        {filteredProviders.map((provider) => (
          <li key={provider.PROVIDER_ID}>
            {provider.PROVIDER_NAME} - {provider.SPECIALITY} (${provider.OFFER_PRICE})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;
