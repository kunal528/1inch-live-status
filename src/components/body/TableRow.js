import React from "react";
import SwapIcons from "./SwapIcons";
import TwitterIcons from "./TwitterIcons";
import Image from "./Image";
const TableRow = ({ swap, state }) => {
  return (
    <tr
      style={{ backgroundColor: "white" }}
      className={state == null ? `` : `table-row`}
    >
      <td  style={{ content: `${swap.tx_id}` }}>
        {swap.tx_id.substring(0, 14)}...
      </td>

      <td>{swap.block}</td>
      <td>
        <Image
          imgUrl={`https://tokens.1inch.exchange/${swap.fromToken.toLowerCase()}.png`}
          key = {swap.tx_id+'1'}
        />
      </td>
      <td>
        <SwapIcons />
      </td>
      <td>
        <Image
          imgUrl={`https://tokens.1inch.exchange/${swap.toToken.toLowerCase()}.png`}
          key = {swap.tx_id+'2'}
        />
      </td>
      <td>{swap.amountIn}</td>
      <td>{swap.amountOut}</td>
      <td>{swap.with1inch}</td>
      <td>{swap.loss}</td>
      <td>
        <TwitterIcons onClick={() => window.open(swap.tweetUrl)} />
      </td>
    </tr>
  );
};

export default TableRow;
