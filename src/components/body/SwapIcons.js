import './index.css';


const SwapIcons = ({ isDarkMode }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3vh"
      height="3vh"
      viewBox="0 0 35 35"
    >
      <path
        id="Icon_material-swap-vertical-circle"
        data-name="Icon material-swap-vertical-circle"
        d="M20.5,3A17.5,17.5,0,1,0,38,20.5,17.506,17.506,0,0,0,20.5,3ZM10.875,15.25,17,9.125l6.125,6.125H18.75v7h-3.5v-7Zm19.25,10.5L24,31.875,17.875,25.75H22.25v-7h3.5v7Z"
        transform="translate(38 -3) rotate(90)"
        className={`circledSwapIcon ${isDarkMode ? "darkMode" : "lightMode"}`}
      />
    </svg>
  );
};



export default SwapIcons;
