import React, { useState } from 'react';

const FilterComponent = () => {
    const filters = [
        { id: 'HEART', label: 'Heart', category: 'Organ' },
        { id: 'LUNGS', label: 'Lungs', category: 'Organ' },
        { id: 'KIDNEY', label: 'Kidney', category: 'Organ' },
        { id: 'VITAMIN', label: 'Vitamin', category: 'Nutrient' },
        { id: 'BONE', label: 'Bone & Joints', category: 'Support' },
        { id: 'LIVER', label: 'Liver', category: 'Organ' },
        { id: 'BLOOD_ELEMENTS', label: 'Blood', category: 'Fluid' },
        { id: 'THYROID', label: 'Thyroid', category: 'Gland' },
        { id: 'HAIR_SKIN', label: 'Skin & Hair', category: 'Appearance' },
        { id: 'URINE', label: 'Urine', category: 'Excretion' },
        { id: 'METABOLIC', label: 'Metabolism', category: 'Process' },
        { id: 'TUMOR', label: 'Tumour', category: 'Condition' },
        { id: 'CANCER', label: 'Cancer', category: 'Condition' },
        { id: 'DIABETIC', label: 'Diabetic', category: 'Condition' },
        { id: 'FEVER', label: 'Fever', category: 'Symptom' },
        { id: 'FOOD_INTOLERANCE', label: 'Food Intolerance', category: 'Condition' },
        { id: 'HYPERTENSION', label: 'Hypertension', category: 'Condition' },
        { id: 'PREGNANCY', label: 'Pregnancy', category: 'Condition' },
        { id: 'FERTILITY', label: 'Fertility', category: 'Condition' },
        { id: 'COVID', label: 'Covid', category: 'Virus' },
        { id: 'HIV', label: 'HIV', category: 'Virus' },
        { id: 'IMMUNITY', label: 'Immunity', category: 'System' },
    ];

    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filterCategory, setFilterCategory] = useState('');

    const handleFilterChange = (id) => {
        setSelectedFilters((prev) => {
            if (prev.includes(id)) {
                return prev.filter((filter) => filter !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    const handleCategoryFilter = (category) => {
        setFilterCategory(category);
    };

    const filteredFilters = filters.filter((filter) => 
        filterCategory ? filter.category === filterCategory : true
    );

    return (
        <div>
            <div className="row shipping_calculator mt-10" id="bodyParts">
                <label className="bodypart-labelChecked lable-head">Filters: </label>
                <div>
                    <button onClick={() => handleCategoryFilter('')}>All</button>
                    <button onClick={() => handleCategoryFilter('Organ')}>Organ</button>
                    <button onClick={() => handleCategoryFilter('Condition')}>Condition</button>
                    {/* Add buttons for other categories as needed */}
                </div>
                <ul className="nav nav-tabs links" role="tablist">
                    {filteredFilters.map((filter) => (
                        <li className="nav-item bodypart" role="presentation" key={filter.id}>
                            <input
                                type="checkbox"
                                className="custom-control-input bodypartCheckbox"
                                id={filter.id}
                                checked={selectedFilters.includes(filter.id)}
                                onChange={() => handleFilterChange(filter.id)}
                            />
                            <button
                                className="nav-link label"
                                data-bs-toggle="tab"
                                data-bs-target={`#tab-${filter.id}`}
                                type="button"
                                role="tab"
                                aria-controls={`tab-${filter.id}`}
                                aria-selected={selectedFilters.includes(filter.id)}
                            >
                                {filter.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Display selected filters */}
            <div className="selected-filters">
                <h4>Selected Filters:</h4>
                {selectedFilters.length > 0 ? (
                    <ul>
                        {selectedFilters.map((id) => {
                            const filter = filters.find((filter) => filter.id === id);
                            return <li key={id}>{filter?.label}</li>;
                        })}
                    </ul>
                ) : (
                    <p>No filters selected</p>
                )}
            </div>
        </div>
    );
};

export default FilterComponent;
