import React from 'react';

function Card() {
  const handleCardClick = (cardNumber) => {
    console.log(`Your card number: ${cardNumber}`);
    window.location.href = "https://google.com";
  };

  const handleButtonClick = (event , cart) => {
    event.stopPropagation(); // Prevent the click from propagating to the card
    console.log("Your cart value is" ,cart)
    console.log("Button clicked!"); // Log a message for testing
  };

  return (
    <div
      onClick={() => handleCardClick(1126)} // Use a wrapper function to pass the card number
      className="flex justify-center items-center min-h-screen bg-gray-100"
    >
      <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer">
        <img
          className="w-full h-48 object-cover"
          src="https://via.placeholder.com/400x200"
          alt="Card Banner"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800">
            Beautiful Card Title
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            This is a description of the card. Click the button below to
            interact or anywhere else to navigate to Google.
          </p>
          <div className="mt-4 flex justify-end">
            <button
              onClick={(event) => handleButtonClick(event, cartValue)}
              className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Button Action
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
