import React, { useState } from 'react';

const UserInput = () => {
  // Form state
  const [formData, setFormData] = useState({
    Name: '',
    Emailid: '',
    Address: '',
    pincode: '',
    PhoneNumber: '',
    PROVIDER_ID: '',
  });

  // Error state
  const [errors, setErrors] = useState({});

  // Validate form data
  const validateFormData = () => {
    let errors = {};
    let isValid = true;

    // Validate Name (assuming Name is required)
    if (!formData.Name.trim()) {
      errors.Name = 'Name is required';
      isValid = false;
    }

    // Validate Email
    if (!formData.Emailid.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.Emailid = 'Enter a valid email address';
      isValid = false;
    }

    // Validate Pincode (6 digits)
    if (!formData.pincode.match(/^\d{6}$/)) {
      errors.pincode = 'Enter a valid 6-digit pincode';
      isValid = false;
    }

    // Validate Phone Number (10 digits)
    if (!formData.PhoneNumber.match(/^\d{10}$/)) {
      errors.PhoneNumber = 'Enter a valid 10-digit mobile number';
      isValid = false;
    }

    // Validate PROVIDER_ID (assuming it's required)
    if (!formData.PROVIDER_ID) {
      errors.PROVIDER_ID = 'Provider ID is required';
      isValid = false;
    }

    setErrors(errors); // Update error state
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateFormData()) {
      console.log("Form is valid. Proceeding to submit...", formData);

      // Send the form data as payload
      try {
        console.log("Success:");
        // Handle success logic here

      } catch (error) {
        console.error("Error during submission");
        // Handle error logic here
      }
    } else {
      console.log("Form contains errors. Preventing submission.");
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Name Input */}
        <div>
          <label htmlFor="Name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className={`mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${errors.Name && 'border-red-500'}`}
            id="Name"
            name="Name"
            value={formData.Name}
            onChange={handleInputChange}
            placeholder="Enter Name"
            required
          />
          {errors.Name && <span className="text-red-500 text-sm">{errors.Name}</span>}
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="Emailid" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className={`mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${errors.Emailid && 'border-red-500'}`}
            id="Emailid"
            name="Emailid"
            value={formData.Emailid}
            onChange={handleInputChange}
            placeholder="Enter Email"
            required
          />
          {errors.Emailid && <span className="text-red-500 text-sm">{errors.Emailid}</span>}
        </div>

        {/* Pincode Input */}
        <div>
          <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">Pincode</label>
          <input
            type="text"
            className={`mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${errors.pincode && 'border-red-500'}`}
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
            placeholder="Enter Pincode"
            required
          />
          {errors.pincode && <span className="text-red-500 text-sm">{errors.pincode}</span>}
        </div>

        {/* Phone Number Input */}
        <div>
          <label htmlFor="PhoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="text"
            className={`mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${errors.PhoneNumber && 'border-red-500'}`}
            id="PhoneNumber"
            name="PhoneNumber"
            value={formData.PhoneNumber}
            onChange={handleInputChange}
            placeholder="Enter Phone Number"
            required
          />
          {errors.PhoneNumber && <span className="text-red-500 text-sm">{errors.PhoneNumber}</span>}
        </div>

        {/* Provider ID Input */}
        <div>
          <label htmlFor="PROVIDER_ID" className="block text-sm font-medium text-gray-700">Provider ID</label>
          <input
            type="text"
            className={`mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${errors.PROVIDER_ID && 'border-red-500'}`}
            id="PROVIDER_ID"
            name="PROVIDER_ID"
            value={formData.PROVIDER_ID}
            onChange={handleInputChange}
            placeholder="Enter Provider ID"
            required
          />
          {errors.PROVIDER_ID && <span className="text-red-500 text-sm">{errors.PROVIDER_ID}</span>}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInput;
