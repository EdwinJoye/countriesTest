import { Link } from "react-router-dom";
import "../css/countryCard.css";

const CountryCard = ({ country, dark }) => {
  return (
    <Link to="countrypage" className="countryCard" state={{ country: country }}>
      {/* {console.log("CARD", country)} */}
      <div className="countryCard-img-container">
        <img src={country.flags.png} alt="flag" />
      </div>
      <div
        className={
          dark
            ? "darkMode-color2 countryCard-infos-container darkMode-shadow "
            : "lightMode-color2 countryCard-infos-container lightMode-shadow "
        }
      >
        <h2>{country.name.common}</h2>
        <div className="countryCard-info-container">
          <span>Population:</span>
          <div>{country.population}</div>
        </div>
        <div className="countryCard-info-container">
          <span>Region:</span>
          <div>{country.region}</div>
        </div>
        <div className="countryCard-info-container">
          <span>Capital:</span>
          <div>{country.capital}</div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
