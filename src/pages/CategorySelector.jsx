import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function CategorySelector() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="container mt-4 p-4 border rounded shadow">
      <h3 className="text-center mb-4">Select a Category</h3>
      
      <div className="d-flex justify-content-center mb-3">
        <div className="form-check form-check-inline mx-2">
          <input 
            type="radio"
            id="hospital"
            name="category"
            value="hospital"
            className="form-check-input"
            checked={selectedCategory === 'hospital'}  
            onChange={handleCategoryChange}         
          />
          <label className="form-check-label ml-2" htmlFor="hospital">Hospital</label>
        </div>
     
        <div className="form-check form-check-inline mx-2">
          <input 
            type="radio"
            id="camp_client"
            name="category"
            value="camp"
            className="form-check-input"
            checked={selectedCategory === 'camp'} 
            onChange={handleCategoryChange}              
          />
          <label className="form-check-label ml-2" htmlFor="camp_client">Camp</label>
        </div>
      </div>

      {/* Display the selected category */}
      <p className="text-center mt-3 font-weight-bold">
        Selected Category: <span className="text-info">{selectedCategory}</span>
      </p>
    </div>
  );
}

export default CategorySelector;
