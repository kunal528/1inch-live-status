import PropTypes from "prop-types";
import './index.css';

const Logo = ({ imageUrl, logoText,isDarkMode }) => {
  return (
    <>
      <img
        src={imageUrl}
        className={`imageLogo ${isDarkMode && 'darkMode'}`}
        alt="1inch"
      />
      <p className={`headerText ${isDarkMode && 'darkMode'}`}>{logoText}</p>
    </>
  );
};

Logo.defaultProps = {
  imageUrl:
    "https://research.binance.com/static/images/projects/1inch/logo.png",
  logoText: "1inch Quote Bot",
};


export default Logo;
