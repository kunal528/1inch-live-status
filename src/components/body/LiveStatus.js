import "./index.css";
import Live from "./Live";
import { FaExchangeAlt } from 'react-icons/fa'

const LiveStatus = () => {
  return (
    <div className="row">
      <p
        className="recentTransactionText"
        style={{ flex: 0.7, textAlign: "left" }}
      >
        Recent Transactions{" "}
      </p>
      <FaExchangeAlt style={{ height: '3vh', width:'3vh' }}/>
      <div style={{ flex: 4 }}></div>
      <Live />
    </div>
  );
};

export default LiveStatus;
