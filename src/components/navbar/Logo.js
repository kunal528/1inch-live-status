import PropTypes from "prop-types";

const Logo = ({ imageUrl, logoText }) => {
  return (
    <>
      <img
        src={imageUrl}
        height={172}
        width={172}
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
