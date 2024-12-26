import React, { useState, useEffect, useRef } from 'react';

const ClickOutsideHandler = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);

    const handleClickOutside = (event) => {
        if (!inputRef.current.contains(event.target)) {
            setSuggestions([]);
        }
    };

    useEffect(() => {
        const handleDocumentClick = (event) => handleClickOutside(event);

        window.addEventListener('click', handleDocumentClick);
        return () => {
            window.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);

        if (value) {
            // Simulate fetching suggestions
            setSuggestions([`${value}1`, `${value}2`, `${value}3`]);
        } else {
            setSuggestions([]);
        }
    };

    return (
        <div ref={inputRef} style={{ position: 'relative', width: '300px' }}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type to search..."
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
            {suggestions.length > 0 && (
                <ul style={{ position: 'absolute', top: '100%', left: 0, right: 0, border: '1px solid #ccc', background: '#fff', zIndex: 1000 }}>
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            style={{ padding: '8px', cursor: 'pointer' }}
                            onClick={() => setInputValue(suggestion)}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ClickOutsideHandler;
