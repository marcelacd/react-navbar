import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Navbar from "./components/Navbar";

const App = () => (
  <>
    <Navbar/>
  </>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
