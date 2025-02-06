import React, { useEffect, useState } from "react";

const FetchProfilePack = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the fetch function
    const fetchData = async () => {
      try {
        const response = await fetch("http://172.31.7.145:8019/api/getProfilePackById?product_id=63927&productType=&queryString=ENC=6kf-WL3kzmk0EfGTmwsRrJxzhG6I9W--OtCnaFnHu3W1nXk25jLrQaCjYg7phhNH");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result); // Save the data
      } catch (err) {
        setError(err.message); // Save any error message
      } finally {
        setLoading(false); // Stop loading indicator
      }
    };

    // Call the fetch function
    fetchData();
  }, []); // Empty dependency array ensures this runs once on component mount

  // Render the data
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre> // Pretty-print the JSON result
      )}
    </div>
  );
};

export default FetchProfilePack;
