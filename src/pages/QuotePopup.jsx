import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const QuotePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Open Popup Button with Ripple Effect */}
      <motion.button
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl relative overflow-hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
      >
        <span className="absolute inset-0 bg-blue-500 opacity-0 transition duration-300 rounded-lg"></span>
        Get A Free Quote
      </motion.button>

      {/* Popup Modal with Enhanced Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md flex justify-center items-center p-4 z-50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <motion.div
              className="bg-white max-w-lg w-full p-6 rounded-2xl shadow-2xl relative"
              initial={{ y: -50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              {/* Close Button with Rotation Effect */}
              <motion.button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-all text-xl"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                ✖
              </motion.button>

              {/* Title */}
              <motion.h2
                className="text-3xl font-bold text-center text-gray-900 mb-6"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                Get A Free Quote
              </motion.h2>

              {/* Form */}
              <motion.form
                className="space-y-5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <motion.input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:shadow-md"
                  whileFocus={{ scale: 1.03, boxShadow: "0px 0px 10px rgba(59, 130, 246, 0.5)" }}
                />
                <motion.input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:shadow-md"
                  whileFocus={{ scale: 1.03, boxShadow: "0px 0px 10px rgba(59, 130, 246, 0.5)" }}
                />
                <motion.input
                  type="email"
                  placeholder="E-mail"
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:shadow-md"
                  whileFocus={{ scale: 1.03, boxShadow: "0px 0px 10px rgba(59, 130, 246, 0.5)" }}
                />
                <motion.input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:shadow-md"
                  whileFocus={{ scale: 1.03, boxShadow: "0px 0px 10px rgba(59, 130, 246, 0.5)" }}
                />
                <motion.textarea
                  placeholder="Message*"
                  rows="4"
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none hover:shadow-md"
                  whileFocus={{ scale: 1.03, boxShadow: "0px 0px 10px rgba(59, 130, 246, 0.5)" }}
                ></motion.textarea>

                {/* Submit Button with Glow Effect */}
                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#222222",
                    boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full p-3 text-white rounded-lg shadow-lg transition-all"
                  style={{ backgroundColor: "#222222" }}
                >
                  Submit
                </motion.button>
              </motion.form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuotePopup;
