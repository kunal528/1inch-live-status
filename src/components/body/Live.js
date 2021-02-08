import "./index.css";
const Live = ({isDarkMode}) => {
  return (
    <div className="LiveStatus">
      <div
        className={`liveIcon ${isDarkMode &&"darkMode"}`}
      ></div>
      <p className={`liveText ${isDarkMode &&"darkMode"}`}>
        Live
      </p>
    </div>
  );
};

export default Live;
