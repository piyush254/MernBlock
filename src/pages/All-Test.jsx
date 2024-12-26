import React, { useState, useEffect } from "react";

const AllTests = ({ data, citySlug, color, queryString }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
      .trim()
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+$/g, ""); // Remove trailing hyphens
  };

  const removeSpecChar = (id) => {
    return id.replace(/[^a-zA-Z0-9]/g, ""); // Remove non-alphanumeric characters
  };

  const addToCart = async (product) => {
    const { PACKAGE_ID, PROVIDER_ID } = product;

    try {
      const redisResponse = await fetch(
        `/api/get-redis-profile-only?queryString=${queryString}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      const redisData = await redisResponse.json();
      const updatedQueryString = redisData.profileObject.QUERY_STRING;

      await fetch(
        `/api/add-to-cart?queryString=${updatedQueryString}&product_id=${PACKAGE_ID}&provider_id=${PROVIDER_ID}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      // Redirect to cart
      window.location.href = `/cart?color=${color}`;
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <table className="table-auto w-full border border-gray-300 text-left text-sm">
    <thead>
      <tr className="bg-gray-100">
        <th className="p-2 border-b border-gray-300">Test Name</th>
        <th className="p-2 border-b border-gray-300 text-center">Price</th>
        <th className="p-2 border-b border-gray-300 text-center">Action</th>
      </tr>
    </thead>
    <tbody>
      {data.map((product, index) => {
        const isFastingRequired = product.FASTING_FLAG === "CF";
        const productSlug = `${citySlug}/book-online-${generateSlug(
          product.OURPACKAGE
        )}`;
        const removeSpeCharPackId = removeSpecChar(product.PACKAGE_ID);
  
        return (
          <tr
            className={`all-test ${
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            } hover:bg-gray-100`}
            key={index}
          >
            <td className="p-2">
              <h6 className="font-medium text-gray-700">
                <a
                  className="text-blue-500 hover:underline"
                  href={`/product/${productSlug}?color=${color}&PRODUCT_ID=${removeSpeCharPackId}`}
                >
                  {product.OURPACKAGE}
                </a>
              </h6>
              <div className="text-xs text-gray-500">
                {isFastingRequired
                  ? "Fasting Required"
                  : "Fasting Not Required"}
              </div>
            </td>
            <td className="p-2 text-center text-brand">
              <h3 className="text-lg font-bold text-green-600">
                ₹{product.OFFER_PRICE}
              </h3>
            </td>
            <td className="p-2 text-center">
              <button
                className="btn btn-sm AddTest px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-md flex items-center justify-center"
                onClick={() => addToCart(product)}
              >
                <i className="fi-rs-shopping-cart mr-2"></i>
                <span>{screenWidth < 767 ? "Add" : "Book Now"}</span>
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
  
  );
};

export default AllTests;
