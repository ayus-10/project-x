import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  const [navCategory, setNavCategory] = useState("all");
  const changeNavCategory = (category) => {
    setNavCategory(category);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-rose-100">
      <Navbar changeNavCategory={changeNavCategory} />
      <main className="w-screen">
        <Home navCategory={navCategory} />
      </main>
    </div>
  );
};

export default App;
