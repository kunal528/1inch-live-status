import React from "react";
import SwapIcons from "./SwapIcons";
import TwitterIcons from "./TwitterIcons";
import Image from "./Image";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
const TableRow = ({ swap }) => {
  const imgUrl =
    swap.dexName === "Uniswap"
      ? "https://etherscan.io/images/uniswap_ta.png"
      : swap.dexName === "Sushiswap"
      ? "https://etherscan.io/images/defi/sushiswap.svg"
      : "https://etherscan.io/images/svg/brands/balancer.png";
  return (
    <tr className={`table-row`}>
      <Tippy content={<span>{swap.tx_id}</span>} maxWidth="none">
        <td style={{ width: "11%" }}>
          <a href={`https://etherscan.io/tx/${swap.tx_id}`}>
            {swap.tx_id.substring(0, 14)}...
          </a>{" "}
        </td>
      </Tippy>

      <td style={{ width: "10%" }}>
        <a href={`https://etherscan.io/block/${swap.block}`}>{swap.block}</a>
      </td>
      <td style={{ width: "7%" }}>
        <Image
          imgUrl={`https://tokens.1inch.exchange/${swap.fromToken.toLowerCase()}.png`}
          token={swap.fromToken}
          key={swap.tx_id + "1"}
        />
      </td>
      <td style={{ width: "2%" }}>
        <SwapIcons />
      </td>
      <td style={{ width: "7%" }}>
        <Image
          imgUrl={`https://tokens.1inch.exchange/${swap.toToken.toLowerCase()}.png`}
          token={swap.toToken}
          key={swap.tx_id + "2"}
        />
      </td>
      <td style={{ width: "14%" }}>{swap.amountIn}</td>
      <td style={{ width: "14%" }}>
        {swap.amountOut}
        <br /> on{" "}
        <img
          key={swap.tx_id + "3"}
          src={imgUrl}
          style={{ width: "2vh", height: "2vh" }}
          alt="Error"
        />{" "}
        {swap.dexName}
      </td>
      <td style={{ width: "14%" }}>{swap.with1inch}</td>
      <td style={{ width: "14%" }}>{swap.loss}</td>
      <td style={{ width: "7%" }}>
        <TwitterIcons link={swap.tweetUrl} />
      </td>
    </tr>
  );
};

export default TableRow;
