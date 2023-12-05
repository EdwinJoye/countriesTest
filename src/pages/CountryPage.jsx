import Header from "../components/header";
import { useLocation, useNavigate } from "react-router-dom";
import Arrow from "../img/arrowLeft-white.png";
import "../css/countryPage.css";

const CountryPage = ({ dark, setDark }) => {
  const location = useLocation();
  const countryData = location.state ? location.state.country : null;

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div
      className={
        dark ? "darkMode-color1  countryPage" : "lightMode-color1 countryPage"
      }
    >
      <Header dark={dark} setDark={setDark} />
      <section className="container">
        <div className="countryPage-button-container">
          <button
            onClick={handleNavigate}
            className={
              dark
                ? "darkMode-color2 countryCard-infos-container darkMode-shadow "
                : "lightMode-color2 countryCard-infos-container lightMode-shadow "
            }
          >
            <img
              className={dark ? "" : "lightMode-img"}
              src={Arrow}
              alt="arrow"
            />
            Back
          </button>
        </div>
        <div className="countryPage-infos-container">
          <img src={countryData.flags.png} alt="" />
          <div>
            <h2>{countryData.name.common}</h2>
            <div className="countryPage-info-container1">
              <div>
                <div className="countryPage-info-container">
                  <span>Native name :</span>
                  <div>A FAIRE</div>
                </div>
                <div className="countryPage-info-container">
                  <span>Population :</span>
                  <div>{countryData.population}</div>
                </div>
                <div className="countryPage-info-container">
                  <span>Region :</span>
                  <div>{countryData.region}</div>
                </div>
                <div className="countryPage-info-container">
                  <span>Sub Region :</span>
                  <div>{countryData.subregion}</div>
                </div>
                <div className="countryPage-info-container">
                  <span>Capital :</span>
                  <div>{countryData?.capital[0]}</div>
                </div>
              </div>
              <div>
                <div className="countryPage-info-container">
                  <span>Top Level Domain :</span>
                  <div>{countryData?.tld[0]}</div>
                </div>
                <div className="countryPage-info-container">
                  <span>Currencies :</span>
                  {/* <div>{countryData?.currencies.EUR.name}</div> */}
                </div>
                <div className="countryPage-info-container">
                  <span>Languages :</span>
                  {/* <div>{countryData?.languages.deu}</div>
                  <div>{countryData?.languages.fra}</div>
                  <div>{countryData?.languages.nld}</div> */}
                </div>
              </div>
            </div>
            <div className="countryPage-info-container2">
              <p>Border Countries</p>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountryPage;
