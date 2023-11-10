import { useState, useEffect } from "react";
import CountryCard from "./components/countryCard";
import Moon from "../src/img/moon.png";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [dark, setDark] = useState(true);
  const demonym = "france";

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = "https://restcountries.com/v3.1/all";

        if (regionFilter) {
          apiUrl = `https://restcountries.com/v3.1/region/${regionFilter}`;
        }

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (Array.isArray(data)) {
          setCountries(data);
        } else {
          console.error("Data is not an array:", data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [search, regionFilter]);

  return (
    <div className={dark ? "darkMode-color1 app" : "lightMode-color1 app"}>
      {console.log("REGION", regionFilter)}
      <section
        className={
          dark
            ? "darkMode-color2 app-section1 darkMode-shadow"
            : "lightMode-color2 app-section1 lightMode-shadow"
        }
      >
        <div className="app-section1-title">Where is the world ?</div>
        <div>
          <div onClick={() => setDark(!dark)} className="app-section1-modes">
            <img
              className={dark ? "" : "lightMode-img"}
              src={Moon}
              alt="moon"
            />
            <span>Dark Mode</span>
          </div>
        </div>
      </section>
      <div className="container">
        <section className="app-section2">
          <input
            className={dark ? "darkMode-color2" : "lightMode-color2"}
            type="text"
            placeholder="Search for a country"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className={dark ? "darkMode-color2" : "lightMode-color2"}
            name="regions"
            id="region-select"
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
          >
            <option value="">Filter by Regions</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </section>
        <section className="app-section3">
          {countries.map((country) => {
            return (
              <CountryCard
                flag={country.flags.png}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
                dark={dark}
              ></CountryCard>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default App;
