import React, { useState } from "react";

const Modal = ({ onClose, currentProduct }) => {
  // console.log(currentProduct);
  const [product, setProduct] = useState(currentProduct[0]);
  return (
    <div className="relative w-full h-screen">
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
        <div className="w-full max-w-4xl h-auto bg-gray-200 rounded-2xl shadow-lg flex flex-col sm:flex-row">
          <div className="w-full md:w-1/2 rounded-2xl  overflow-hidden">
            <img src={product.imageUrl} alt={product.name} />
          </div>
          <div className="w-full md:w-1/2 p-6">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <button
                onClick={() => onClose(false)}
                className="close rounded-full bg-[#03302D] w-fit text-white text-xl p-2 hover:scale-110"
                aria-label="Close modal"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
                </svg>
              </button>
            </div>
            <div className="flex items-baseline space-x-2 my-2">
              <p className="text-xl font-semibold">Rs. {product.price}</p>
            </div>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="images grid grid-cols-3 gap-2 mt-4">
              {currentProduct.map((item, index) => (
                <div
                  className="rounded-2xl overflow-hidden cursor-pointer"
                  key={index}
                >
                  <img
                    onClick={() => setProduct(currentProduct[index])}
                    src={item.imageUrl}
                    className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
                    alt={item.name}
                  />
                </div>
              ))}
            </div>
            <div className="addCart bg-[#011816] text-center mt-2 md:mt-10 md:py-2 rounded-md mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
              <button className="text-white hover:text-[#E67E22] transition-colors duration-300 px-4 py-2 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
