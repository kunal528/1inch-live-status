import PropTypes from "prop-types";
import './index.css';

const Logo = ({ imageUrl, logoText }) => {
  return (
    <>
      <img
        src={imageUrl}
        className='image'
        alt="1inch"
      />
      <p className="headerText">{logoText}</p>
    </>
  );
};

Logo.defaultProps = {
  imageUrl:
    "https://research.binance.com/static/images/projects/1inch/logo.png",
  logoText: "1inch Quote Bot",
};

Logo.propstype = {
    imageUrl: PropTypes.string,
    logoText: PropTypes.logoText,
}

export default Logo;
