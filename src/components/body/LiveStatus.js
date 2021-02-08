import "./index.css";
import Live from "./Live";
import { FaExchangeAlt } from 'react-icons/fa'

const LiveStatus = ({ isDarkMode}) => {
  return (
    <div className="row">
      <p
        className={`recentTransactionText ${isDarkMode && "darkMode"}`}
        style={{ flex: 0.7, textAlign: "left" }}
      >
        Recent Transactions{" "}
      </p>
      <FaExchangeAlt className={`swapIcon ${isDarkMode && "darkMode"}`} />
      <div style={{ flex: 4 }}></div>
      <Live isDarkMode={ isDarkMode}/>
    </div>
  );
};

export default LiveStatus;
