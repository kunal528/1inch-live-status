import React from "react";
import { IoLogoTwitter } from "react-icons/io";
import PropTypes from "prop-types";
import "./index.css";
const TwitterIcons = ({ onClick }) => {
  return (
      <div className="twitterButton" onClick={onClick}>
        <IoLogoTwitter color="#27a1ff" size='3vh' />
      </div>
  );
};

TwitterIcons.propsTypes = {
  onClick: PropTypes.func,
};

export default TwitterIcons;
