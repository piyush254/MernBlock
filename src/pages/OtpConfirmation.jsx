// import React, { useState } from "react";

// const OtpConfirmation = () => {
//   const [otp, setOtp] = useState(new Array(6).fill(""));

//   const handleChange = (value, index) => {
//     if (!isNaN(value)) {
//       let newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);

//       // Move to the next input
//       if (value && index < 5) {
//         document.getElementById(`otp-input-${index + 1}`).focus();
//       }
//     }
//   };

//   const handleSubmit = () => {
//     const enteredOtp = otp.join("");
//     console.log("Entered OTP:", enteredOtp);
//     // Add your OTP submission logic here
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
//           OTP Verification
//         </h2>
//         <p className="text-gray-600 text-center mb-6">
//           Enter the 6-digit OTP sent to your mobile
//         </p>
//         <div className="flex justify-center gap-2 mb-4">
//           {otp.map((digit, index) => (
//             <input
//               key={index}
//               id={`otp-input-${index}`}
//               type="text"
//               maxLength="1"
//               value={digit}
//               onChange={(e) => handleChange(e.target.value, index)}
//               onKeyDown={(e) => {
//                 if (e.key === "Backspace" && !otp[index] && index > 0) {
//                   document.getElementById(`otp-input-${index - 1}`).focus();
//                 }
//               }}
//               className="w-12 h-12 text-center text-lg font-medium border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           ))}
//         </div>
//         <button
//           onClick={handleSubmit}
//           className="w-full bg-blue-600 text-white py-2 rounded-md text-lg hover:bg-blue-700 focus:outline-none"
//         >
//           Verify OTP
//         </button>
//       </div>
//     </div>
//   );
// };


// export default OtpConfirmation;
