import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

//Components:
import Navbar from "./components/Navbar/Navbar";
import CompanyList from "./components/Company/CompanyList";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.render(
  <div>
     <Navbar />
    <div className="container my-4">
      <CompanyList />
    </div>
  </div>,
  document.getElementById("root")
);
reportWebVitals();
