import React, { useState } from "react";

const AgeCategorizer = () => {
  const [age, setAge] = useState("");
  const [filter, setFilter] = useState(["SMOKER", "ALCOHOL"]);
  const [category, setCategory] = useState("");

  // Function to determine category based on age
  const categorizeAge = (Value) => {
    if (Value === "") return "";
    if (Value <= 15) return "child";
    if (Value <= 50) return "men_women";
    return "parent";
  };

  // Handle age input and update filters accordingly
  const handleChange = (Value) => {
    setAge(Value);

    const newCategory = categorizeAge(Value);
    setCategory(newCategory);

    // Automatically update filter with only the current category
    setFilter((prevFilter) => {
      const updatedFilter = prevFilter.filter(
        (item) => item === "SMOKER" || item === "ALCOHOL"
      );
      return newCategory ? [...updatedFilter, newCategory] : updatedFilter;
    });
  };

  // Toggle SMOKER and ALCOHOL manually
  const toggleFilter = (filterType) => {
    setFilter(
      (prevFilter) =>
        prevFilter.includes(filterType)
          ? prevFilter.filter((item) => item !== filterType) // Remove if exists
          : [...prevFilter, filterType] // Add if not exists
    );
  };

  console.log("Filter ::: ", filter);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Age Categorizer
        </h2>

        {/* Age Input */}
        <label className="block text-gray-600 text-sm font-medium mb-2">
          Enter Age:
        </label>
        <input
          type="number"
          value={age}
          onChange={(e) => handleChange(e.target.value)} // Passing only the value
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />

        {/* Category Display */}
        <p className="mt-4 text-lg font-semibold text-gray-700">
          Category: <span className="text-blue-500">{category || "N/A"}</span>
        </p>

        {/* Toggle Extra Filters (SMOKER, ALCOHOL) */}
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-600 mb-2">
            Select Filters:
          </h3>
          {["SMOKER", "ALCOHOL"].map((item) => (
            <label key={item} className="flex items-center space-x-2 mb-2">
              <input
                type="checkbox"
                checked={filter.includes(item)}
                onChange={() => toggleFilter(item)}
                className="w-4 h-4 text-blue-500"
              />
              <span className="text-gray-700">{item}</span>
            </label>
          ))}
        </div>

        {/* Active Filters Display */}
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-600">Active Filters:</h3>
          <div className="flex gap-2 mt-2 flex-wrap">
            {filter.length > 0 ? (
              filter.map((item, index) => (
                <span
                  key={index}
                  className="bg-blue-200 text-blue-700 px-3 py-1 rounded-lg text-xs"
                >
                  {item}
                </span>
              ))
            ) : (
              <span className="text-gray-500 text-sm">No filters selected</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeCategorizer;
