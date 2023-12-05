import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const ViewItem = ({ content }) => {
  const [pageContent, setPageContent] = useState({});

  // Used to save/retrieve pageContent into localStorage
  useEffect(() => {
    const isEmpty = (object) => {
      return JSON.stringify(object) === "{}";
    };

    const saveData = () => {
      localStorage.setItem("ViewItem_data", JSON.stringify(content));
    };

    let data = localStorage.getItem("ViewItem_data");

    if (isEmpty(content)) {
      if (data === null) {
        saveData(); // Set new data
      }
    } else {
      if (data !== JSON.stringify(content)) {
        saveData(); // Update previous data
      }
    }

    setPageContent(JSON.parse(data));
  }, []);

  const [productQuantity, setProductQuantity] = useState(1);

  const decreaseNumber = () => {
    productQuantity > 1
      ? setProductQuantity((productQuantity) => productQuantity - 1)
      : null;
  };

  const increaseNumber = () => {
    setProductQuantity((productQuantity) => productQuantity + 1);
  };

  return (
    <section className="grid min-h-screen place-content-center px-4 py-12">
      <div className="flex flex-col justify-between rounded-md bg-white lg:flex-row">
        <div className="mx-auto h-auto w-fit overflow-hidden rounded-l-md rounded-r-md p-8 lg:rounded-r-none lg:p-0">
          <img
            src={pageContent.img}
            className="rounded-l-md rounded-r-md duration-300 ease-in-out lg:rounded-r-none lg:hover:scale-105"
            alt={`Image for ${pageContent.name}`}
          />
        </div>
        <div className="flex flex-col justify-between gap-12 p-8">
          <div className="flex flex-col gap-4 text-gray-900">
            <h2 className="text-3xl font-semibold">{pageContent.name}</h2>
            <h1 className="inline w-fit rounded-md bg-red-500 px-2 py-1 text-3xl font-bold text-white md:text-4xl">
              {`$ ${pageContent.price}`}
            </h1>
            <p className="text-lg text-gray-700 md:text-xl">
              {pageContent.description}
            </p>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-gray-800 md:text-xl">
                Keywords:
              </h3>
              <ul className="flex gap-2 text-gray-700">
                {pageContent.keywords &&
                  pageContent.keywords.map((keyword, index) => (
                    <li
                      key={index}
                      className="cursor-pointer rounded-sm bg-gray-100 px-1 md:text-lg"
                    >
                      {keyword}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex text-gray-900">
              <button
                onClick={decreaseNumber}
                className="rounded-l-md border border-rose-500 bg-rose-500 p-1 text-lg text-white outline-none duration-300 ease-in-out hover:bg-rose-600 md:text-2xl"
              >
                <FaMinus />
              </button>
              <input
                id="numberInput"
                type="number"
                min="1"
                className="w-24 border-y border-rose-500 p-1 text-center font-bold outline-none"
                value={productQuantity}
                disabled
              />
              <button
                onClick={increaseNumber}
                className="rounded-r-md border border-rose-500 bg-rose-500 p-1 text-lg text-white outline-none duration-300 ease-in-out hover:bg-rose-600 md:text-2xl"
              >
                <FaPlus />
              </button>
            </div>
            <button className="rounded-md border-2 border-rose-500 bg-rose-500 p-1 text-lg text-white duration-300 ease-in-out hover:bg-transparent hover:text-gray-900 md:text-xl">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewItem;
