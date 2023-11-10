import "../css/countryCard.css";
const CountryCard = ({ flag, name, population, region, capital, dark }) => {
  return (
    <div className="countryCard">
      <div className="countryCard-img-container">
        <img src={flag} alt="flag" />
      </div>
      <div
        className={
          dark
            ? "darkMode-color2 countryCard-infos-container darkMode-shadow "
            : "lightMode-color2 countryCard-infos-container lightMode-shadow "
        }
      >
        <h2>{name}</h2>
        <div className="countryCard-info-container">
          <span>Population:</span>
          <div>{population}</div>
        </div>
        <div className="countryCard-info-container">
          <span>Region:</span>
          <div>{region}</div>
        </div>
        <div className="countryCard-info-container">
          <span>Capital:</span>
          <div>{capital}</div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
