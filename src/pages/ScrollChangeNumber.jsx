import { useState, useEffect } from "react";

const ScrollIncrement = () => {
  const [number, setNumber] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const diff = scrollY - lastScrollY;

      if (diff >= 30) { // Increase by 1 every 30px scrolled
        setNumber(prev => prev + 1);
        setLastScrollY(scrollY); // Update last scroll position
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div style={{ height: "1500px", padding: "50px" }}>
      <h1>Scroll Down to Increase Number</h1>
      <p style={{
        position: "sticky",
        top: "0px",
        background: "white",
        padding: "10px",
        fontSize: "20px",
        fontWeight: "bold",
        borderBottom: "2px solid black"
      }}>
        Current Number: {number}
      </p>
      <div style={{ height: "2000px", paddingTop: "20px" }}>
        <p>Keep scrolling...</p>
      </div>
    </div>
  );
};

export default ScrollIncrement;
