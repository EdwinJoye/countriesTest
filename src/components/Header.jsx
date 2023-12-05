import Moon from "../img/moon.png";
import "../css/header.css";

const Header = ({ dark, setDark }) => {
  return (
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
          <img className={dark ? "" : "lightMode-img"} src={Moon} alt="moon" />
          <span>Dark Mode</span>
        </div>
      </div>
    </section>
  );
};

export default Header;
