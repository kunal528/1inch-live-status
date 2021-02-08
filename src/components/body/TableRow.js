import React from "react";
import SwapIcons from "./SwapIcons";
import TwitterIcons from "./TwitterIcons";
import Image from "./Image";
import Tippy from "@tippyjs/react";
import "./index.css";

import "tippy.js/themes/light.css";
import "tippy.js/themes/material.css";
const TableRow = ({ swap, isDarkMode }) => {
  const imgUrl =
    swap.dexName === "Uniswap"
      ? "https://etherscan.io/images/uniswap_ta.png"
      : swap.dexName === "Sushiswap"
      ? "https://etherscan.io/images/defi/sushiswap.svg"
      : "https://etherscan.io/images/svg/brands/balancer.png";
  return (
    <div className={`table-row ${isDarkMode && "darkMode"}`}>
      <Tippy
        content={<span>{swap.tx_id}</span>}
        maxWidth="none"
        // arrow="none"
        className={`tippy ${isDarkMode && 'darkMode'}`}
      >
        <div style={{ width: "11%" }}>
          <a
            href={`https://etherscan.io/tx/${swap.tx_id}`}
            className={`href ${isDarkMode && "darkMode"}`}
          >
            {swap.tx_id.substring(0, 14)}...
          </a>{" "}
        </div>
      </Tippy>

      <div style={{ width: "10%" }}>
        <a
          href={`https://etherscan.io/block/${swap.block}`}
          className={`href ${isDarkMode && "darkMode"}`}
        >
          {swap.block}
        </a>
      </div>
      <div style={{ width: "7%" }}>
        <Image
          imgUrl={`https://tokens.1inch.exchange/${swap.fromToken.toLowerCase()}.png`}
          isDarkMode={isDarkMode}
          token={swap.fromToken}
          key={swap.tx_id + "1"}
        />
      </div>
      <div style={{ width: "2%" }}>
        <SwapIcons isDarkMode={isDarkMode} />
      </div>
      <div style={{ width: "7%" }}>
        <Image
          isDarkMode={isDarkMode}
          imgUrl={`https://tokens.1inch.exchange/${swap.toToken.toLowerCase()}.png`}
          token={swap.toToken}
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
        <TwitterIcons link={swap.tweetUrl} isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default TableRow;
