import { useState, useEffect } from "react";
import CountryCard from "./components/countryCard";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <section>
        <div>Where is the world ?</div>
        <div>Dark Mode</div>
        <div>Light Mode</div>
      </section>
      <div className="container">
        <section className="app-section2">
          <input
            type="text"
            placeholder="Search for a country"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div>
            {console.log("VALUE", value)}
            <select name="regions" id="region-select">
              <option value="">Filter by Regions</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </section>
        <CountryCard countries={countries} />
      </div>

      {console.log("COUNTRY", countries)}
    </div>
  );
}

export default App;
