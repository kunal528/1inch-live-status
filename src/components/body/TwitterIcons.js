import React from "react";
import { IoLogoTwitter } from "react-icons/io";
import PropTypes from "prop-types";
import "./index.css";
const TwitterIcons = ({ link,isDarkMode }) => {
  return (
    <a href={link} className={`href ${isDarkMode && "darkMode"}`}>
      <div className="twitterButton">
        <IoLogoTwitter color="#27a1ff" size="3vh" />
      </div>
    </a>
  );
};

TwitterIcons.propsTypes = {
  onClick: PropTypes.func,
};

export default TwitterIcons;
