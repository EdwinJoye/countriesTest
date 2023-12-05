import "./App.css";
import React from "react";
import LocationWrapper from "./LocationWrapper";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <LocationWrapper></LocationWrapper>
    </Router>
  );
}

export default App;
