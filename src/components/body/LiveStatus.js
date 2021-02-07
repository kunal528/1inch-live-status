import SwapIcons from "./SwapIcons";
import "./index.css";
import Live from "./Live";
const LiveStatus = () => {
  return (
    <div className="row">
      <p
        className="recentTransactionText"
        style={{ flex: 0.7, textAlign: "left" }}
      >
        Recent Transactions{" "}
      </p>
      <SwapIcons isCircle={false} />
      <div style={{ flex: 4 ,}}></div>
      <Live />
    </div>
  );
};

export default LiveStatus;
