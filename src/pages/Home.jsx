import { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";
import Header from "../components/header";
import "../css/home.css";

function Home({ dark, setDark }) {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = "https://restcountries.com/v3.1/all";
        if (regionFilter) {
          apiUrl = `https://restcountries.com/v3.1/region/${regionFilter}`;
        }
        if (search) {
          apiUrl = `https://restcountries.com/v3.1/name/${search}`;
        }

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (Array.isArray(data)) {
          setCountries(data);
        } else {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [search, regionFilter]);

  return (
    <div className={dark ? "darkMode-color1 home" : "lightMode-color1 home"}>
      <Header dark={dark} setDark={setDark}></Header>
      <div className="container">
        <section className="home-section2">
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
        <section className="home-section3">
          {countries.map((country, index) => {
            return (
              <CountryCard
                key={index}
                country={country}
                dark={dark}
              ></CountryCard>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default Home;
