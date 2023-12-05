import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryPage from "./pages/countryPage";
import { useState } from "react";

function LocationWrapper() {
  const [dark, setDark] = useState(true);

  return (
    <Routes>
      <Route
        path="/"
        element={<Home dark={dark} setDark={setDark}></Home>}
      ></Route>
      <Route
        path="/countrypage"
        element={<CountryPage dark={dark} setDark={setDark}></CountryPage>}
      ></Route>
    </Routes>
  );
}

export default LocationWrapper;
