import React from "react";
import PropTypes from 'prop-types';
const SwapIcons = ({ isCircle }) => {
  return (
    <div>
      {isCircle ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 35 35"
        >
          <path
            id="Icon_material-swap-vertical-circle"
            data-name="Icon material-swap-vertical-circle"
            d="M20.5,3A17.5,17.5,0,1,0,38,20.5,17.506,17.506,0,0,0,20.5,3ZM10.875,15.25,17,9.125l6.125,6.125H18.75v7h-3.5v-7Zm19.25,10.5L24,31.875,17.875,25.75H22.25v-7h3.5v7Z"
            transform="translate(38 -3) rotate(90)"
            fill="#443c61"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31.5"
          height="24.469"
          viewBox="0 0 31.5 24.469"
        >
          <path
            id="Icon_ionic-md-swap"
            data-name="Icon ionic-md-swap"
            d="M9.232,16.249l-6.982,7,6.982,6.989V24.989H21.5V21.495H9.232ZM33.75,12.755,26.768,5.766v5.245H14.5v3.495h12.27v5.245Z"
            transform="translate(-2.25 -5.766)"
            fill="#443c61"
          />
        </svg>
      )}
    </div>
  );
};

SwapIcons.defaultProps = {
    isCircle: true
}

SwapIcons.propTypes = {
    isCircle: PropTypes.bool
}

export default SwapIcons;
