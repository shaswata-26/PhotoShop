import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbars";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Community from "./components/Community";
import Support from "./components/Support";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/community" element={<Community />} />
        <Route path="/support" element={<Support />} />
        {/* Use "*" to catch all other routes */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
   
    </div>
  );
};

export default App;


