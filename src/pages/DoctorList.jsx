import React, { useState, useEffect } from "react";

const DoctorList = () => {
  const [specialities, setSpecialities] = useState([]);
  const [selectedSpecialities, setSelectedSpecialities] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const allDoctors = [
    {
      PROVIDER_ID: 44,
      SPECIALITY: "Diabetic",
      PROVIDER_NAME: "Dr Yash",
      PROVIDER_LOGO:
        "https://s3.ap-south-1.amazonaws.com/cdn.mend.zone/provider_logo/Dr_20250218044330.jpeg",
      OFFER_PRICE: 1000,
      SERVICE_LOCATION: "https://maps.app.goo.gl/c18bRX4s4ZzPM2KD6",
    },
    {
      PROVIDER_ID: 38,
      SPECIALITY: "Diabetic",
      PROVIDER_NAME: "Dr Kiran",
      PROVIDER_LOGO:
        "https://s3.ap-south-1.amazonaws.com/cdn.mend.zone/provider_logo/DR+NEHA+BIDHURI.avif",
      OFFER_PRICE: 1000,
      SERVICE_LOCATION: "https://maps.app.goo.gl/c18bRX4s4ZzPM2KD6",
    },
    {
      PROVIDER_ID: 47,
      SPECIALITY: "General Physician",
      PROVIDER_NAME: "Dr Veer",
      PROVIDER_LOGO:
        "https://s3.ap-south-1.amazonaws.com/cdn.mend.zone/provider_logo/DR.+MONAL+TRISAL.avif",
      OFFER_PRICE: 300,
      SERVICE_LOCATION: "https://maps.app.goo.gl/c18bRX4s4ZzPM2KD6",
    },
    {
      PROVIDER_ID: 50,
      SPECIALITY: "ENT",
      PROVIDER_NAME: "Dr Kiran",
      PROVIDER_LOGO:
        "https://s3.ap-south-1.amazonaws.com/cdn.mend.zone/provider_logo/Dr.Jaspreet+Singh+KMC.jpeg",
      OFFER_PRICE: 600,
      SERVICE_LOCATION: "https://maps.app.goo.gl/c18bRX4s4ZzPM2KD6",
    },
  ];

  useEffect(() => {
    const uniqueSpecialities = [...new Set(allDoctors.map((doc) => doc.SPECIALITY))];
    setSpecialities(uniqueSpecialities);
    setFilteredDoctors(allDoctors);
  }, []);

  const handleSpecialityChange = (event) => {
    const speciality = event.target.value;
    const updatedSelection = selectedSpecialities.includes(speciality)
      ? selectedSpecialities.filter((s) => s !== speciality)
      : [...selectedSpecialities, speciality];

    setSelectedSpecialities(updatedSelection);
  };

  useEffect(() => {
    if (selectedSpecialities.length > 0) {
      setFilteredDoctors(
        allDoctors.filter((doc) => selectedSpecialities.includes(doc.SPECIALITY))
      );
    } else {
      setFilteredDoctors(allDoctors);
    }
  }, [selectedSpecialities]);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Filter by Speciality</h2>
      <div className="flex flex-wrap gap-4 mb-6">
        {specialities.map((spec) => (
          <label
            key={spec}
            className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-md cursor-pointer hover:bg-gray-50"
          >
            <input
              type="checkbox"
              value={spec}
              checked={selectedSpecialities.includes(spec)}
              onChange={handleSpecialityChange}
              className="w-4 h-4 accent-blue-600"
            />
            <span className="text-gray-700">{spec}</span>
          </label>
        ))}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Filtered Doctors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor) => (
          <div
            key={doctor.PROVIDER_ID}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img
              src={doctor.PROVIDER_LOGO}
              alt={doctor.PROVIDER_NAME}
              className="w-24 h-24 rounded-full mx-auto mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-900 text-center">{doctor.PROVIDER_NAME}</h3>
            <p className="text-gray-600 text-center">Speciality: {doctor.SPECIALITY}</p>
            <p className="text-gray-800 font-bold text-center mt-2">₹{doctor.OFFER_PRICE}</p>
            <div className="mt-4 flex justify-center">
              <a
                href={doctor.SERVICE_LOCATION}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
              >
                View Location
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
