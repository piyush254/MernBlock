import React, { useState } from "react";

const YourComponent = () => {
  const [barcodesEntry, setBarcodesEntry] = useState([
    {
      benName: "Lavlesh",
      ourPackages: "LIVER FUNCTION TESTS",
      samples: [{ sampleType: "", barcode: "" }],
    },
    {
      benName: "Suraj",
      ourPackages: "DIABETES PROFILE",
      samples: [{ sampleType: "", barcode: "" }],
    },
    // Add more entries as needed...
  ]);

  const sampleTypeOptions = [
    { id: 1, type: "Blood" },
    { id: 2, type: "Urine" },
    { id: 3, type: "Saliva" },
    { id: 4, type: "Tissue" },
  ];

  const handleInputChange2 = (e, index, sampleIndex, field) => {
    const updatedEntries = [...barcodesEntry];
    updatedEntries[index].samples[sampleIndex][field] = e.target.value;
    setBarcodesEntry(updatedEntries);
  };

  const addEntry = (index) => {
    const updatedEntries = [...barcodesEntry];
    updatedEntries[index].samples.push({ sampleType: "", barcode: "" });
    setBarcodesEntry(updatedEntries);
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", barcodesEntry);
  };

  return (
    <div>
      {barcodesEntry.map((item, index) => (
        <div key={index} className="border border-gray-300 rounded mb-4 p-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2">Name</label>
              <p className="bg-gray-100 p-2 rounded">
                {item.benName || "Enter Name"}
              </p>
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Package Name
              </label>
              <p className="bg-gray-100 p-2 rounded">
                {item.ourPackages || "Enter Package Name"}
              </p>
            </div>
          </div>

          {item.samples.map((sample, sampleIndex) => (
            <div key={sampleIndex} className="grid grid-cols-2 gap-4 mb-4">
              {/* Dropdown for Sample Type */}
              <div>
                <label
                  htmlFor={`sampleType${index}-${sampleIndex}`}
                  className="block text-gray-700 font-bold mb-2"
                >
                  Sample Type
                </label>
                <div className="flex items-center space-x-2">
                  <button
                    className="bg-blue-500 text-white rounded px-3 py-1"
                    onClick={() => addEntry(index)}
                  >
                    <i className="fas fa-plus">+</i>
                  </button>
                  <select
                    className="w-full p-2 border border-gray-300 rounded"
                    id={`sampleType${index}-${sampleIndex}`}
                    value={sample.sampleType}
                    onChange={(e) =>
                      handleInputChange2(e, index, sampleIndex, "sampleType")
                    }
                  >
                    <option value="" disabled>
                      Select Sample Type
                    </option>
                    {sampleTypeOptions.map((option) => (
                      <option key={option.id} value={option.type}>
                        {option.type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Input for Barcode */}
              <div>
                <label
                  htmlFor={`barcode${index}-${sampleIndex}`}
                  className="block text-gray-700 font-bold mb-2"
                >
                  Barcode
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  id={`barcode${index}-${sampleIndex}`}
                  placeholder="Enter Barcode"
                  value={sample.barcode}
                  onChange={(e) =>
                    handleInputChange2(e, index, sampleIndex, "barcode")
                  }
                />
              </div>
            </div>
          ))}
        </div>
      ))}

      <div className="flex justify-center mt-6">
        <button
          className="bg-green-500 text-white px-6 py-2 rounded"
          onClick={handleSubmit}
        >
          Submit All
        </button>
      </div>
    </div>
  );
};

export default YourComponent;
