import React, { useState, useEffect } from "react";

const ViewCart = (props) => {
  const content = props.content;

  let oldCartItems = JSON.parse(localStorage.getItem("ViewCart_data"));

  let cartItems = [];

  if (oldCartItems !== null) {
    // All the previously saved objects will be passed to new array
    cartItems.push(...oldCartItems);
  }

  const isEmpty = (object) => {
    return JSON.stringify(object) === "{}";
  };

  const [pageContent, setPageContent] = useState([]);

  const saveData = (data) => {
    localStorage.setItem("ViewCart_data", JSON.stringify(data));
  };

  useEffect(() => {
    if (!isEmpty(content)) {
      if (cartItems.length === 0) {
        // Both localStorage and cartItems array are empty, so simply add new object
        cartItems.push(content);
      } else {
        // If cartItem is not empty, check if new object already exist
        let isSameItem = cartItems.some((item) => {
          if (JSON.stringify(item) === JSON.stringify(content)) {
            return true;
          }
          return false;
        });
        if (!isSameItem) {
          cartItems.push(content);
        }
      }
      saveData(cartItems);
    }
  }, []);

  useEffect(() => {
    setPageContent(JSON.parse(localStorage.getItem("ViewCart_data")));
  }, []);

  return (
    <section className="px-4 py-12 text-gray-900">
      {pageContent.map((item, i) => (
        <div
          key={i}
          className="mx-auto my-4 flex w-11/12 justify-between rounded-md bg-white shadow-md md:w-2/3"
        >
          <div className="h-24 w-auto rounded-md md:h-36">
            <img
              src={item.img}
              className="h-full w-auto rounded-l-md"
              alt={`Image for ${item.name}`}
            />
          </div>
          <div className="flex flex-grow flex-row-reverse items-center justify-between px-2 md:flex-row md:px-6">
            <ul className="hidden text-2xl font-semibold md:block">
              <li className="md:py-1">Product: </li>
              <li className="md:py-1">Quantity: </li>
              <li className="md:py-1">Total price: </li>
            </ul>
            <ul className="text-right text-lg font-semibold md:text-2xl md:font-normal">
              <li className="md:py-1">{item.name}</li>
              <li className="md:py-1">{`x${item.quantity}`}</li>
              <li className="md:py-1">{`$${item.quantity * item.price}`}</li>
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ViewCart;
