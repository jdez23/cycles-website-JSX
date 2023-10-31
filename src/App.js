import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./screens/Home/Home";
import TOS from "./screens/TOS/TOS";
import PrivacyPolicy from "./screens/Privacy_Policy/PrivacyPolicy";
import EULA from "./screens/EULA/EULA";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/TOS" element={<TOS />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/EULA" element={<EULA />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
