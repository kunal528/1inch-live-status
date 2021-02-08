import "./index.css";
const Live = ({isDarkMode}) => {
  return (
    <div className="LiveStatus">
      <div
        className={`liveIcon ${isDarkMode ? "darkMode" : "lightMode"}`}
      ></div>
      <p className={`liveText ${isDarkMode ? "darkMode" : "lightMode"}`}>
        Live
      </p>
    </div>
  );
};

export default Live;
