import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import home from "./pages/home";
import about from "./pages/about";
import contact from "./pages/contact";
import Sidebar from "./components/sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <Sidebar />
        </div>
        <div className="container col-8">
          <Routes>
            <Route path="/" Component={home} />
            <Route path="/about" Component={about} />
            <Route path="/contact" Component={contact} />
          </Routes>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
