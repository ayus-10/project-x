import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-rose-100">
      <Navbar />
      <main className="w-screen">
        <Home />
      </main>
    </div>
  );
};

export default App;
