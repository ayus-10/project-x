import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import ViewItem from "./components/ViewItem";

const App = () => {
  const [navCategory, setNavCategory] = useState("all");
  const changeNavCategory = (category) => {
    setNavCategory(category);
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
          path={"/ViewItem"}
          element={<ViewItem tempVar={"Hello World"} />}
        />
        <Route
          path={"/ViewCart"}
          element={<ViewItem tempVar={"Hello World"} />}
        />
      </Routes>
    </div>
  );
};

export default App;
