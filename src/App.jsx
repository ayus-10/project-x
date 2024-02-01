import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ViewItem from "./components/ViewItem";
import ViewCart from "./components/ViewCart";

const App = () => {
  // Using state to set the category of products to display on Home component
  const [navCategory, setNavCategory] = useState("all");
  const changeNavCategory = (category) => {
    setNavCategory(category);
  };

  // Using state to add products to cart to display on ViewCart component
  const [cartItem, setCartItem] = useState({});
  const changeCartItem = (item) => {
    setCartItem(item);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-rose-100">
      <Routes>
        <Route
          path={"/"}
          element={
            <>
              <Navbar
                changeNavCategory={changeNavCategory}
                navCategory={navCategory}
              />
              <Home navCategory={navCategory} />
            </>
          }
        />
        <Route
          path={"/item/:id"}
          element={<ViewItem changeCartItem={changeCartItem} />}
        />
        <Route
          path={"/cart"}
          element={<ViewCart content={cartItem} setCartItem={setCartItem} />}
        />
      </Routes>
    </div>
  );
};

export default App;
