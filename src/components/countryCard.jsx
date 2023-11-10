import "../css/countryCard.css";
const CountryCard = ({ countries }) => {
  return (
    <section className="countryCard">
      {console.log("countries444", countries)}
      {countries.map((country) => {
        return (
          <div className="countryCard-container">
            <div className="countryCard-img-container">
              <img src={country.flags.png} alt="flag" />
            </div>
            <div className="countryCard-infos-container">
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
          </div>
        );
      })}
    </section>
  );
};

export default CountryCard;
