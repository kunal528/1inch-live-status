import React from "react";
import SwapIcons from "./SwapIcons";
import TwitterIcons from "./TwitterIcons";
import Image from "./Image";
const TableRow = ({ swap, }) => {

  const imgUrl =
    swap.dexName === "Uniswap"
      ? "https://etherscan.io/images/uniswap_ta.png"
      : swap.dexName === "Sushiswap"
      ? "https://etherscan.io/images/defi/sushiswap.svg"
      : "https://etherscan.io/images/svg/brands/balancer.png"; 
  return (
    <div style={{ backgroundColor: "white" }} className={`table-row`}>
      <div style={{ content: `${swap.tx_id}`, width: "11%" }}>
        {swap.tx_id.substring(0, 14)}...
      </div>

      <div style={{ width: "10%" }}>{swap.block}</div>
      <div style={{ width: "7%" }}>
        <Image
          imgUrl={`https://tokens.1inch.exchange/${swap.fromToken.toLowerCase()}.png`}
          key={swap.tx_id + "1"}
        />
      </div>
      <div style={{ width: "2%" }}>
        <SwapIcons />
      </div>
      <div style={{ width: "7%" }}>
        <Image
          imgUrl={`https://tokens.1inch.exchange/${swap.toToken.toLowerCase()}.png`}
          key={swap.tx_id + "2"}
        />
      </div>
      <div style={{ width: "14%" }}>{swap.amountIn}</div>
      <div style={{ width: "14%" }}>
        {swap.amountOut}
        <br /> on{" "}
        <img
          key={swap.tx_id + "3"}
          src={imgUrl}
          style={{ width: "2vh", height: "2vh" }}
          alt="Error"
        />{" "}
        {swap.dexName}
      </div>
      <div style={{ width: "14%" }}>{swap.with1inch}</div>
      <div style={{ width: "14%" }}>{swap.loss}</div>
      <div style={{ width: "7%" }}>
        <TwitterIcons onClick={() => window.open(swap.tweetUrl)} />
      </div>
    </div>
  );
};

export default TableRow;
