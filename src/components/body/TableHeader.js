import React from "react";

const TableHeader = () => {
  return (
    <div className="table-header">
      <div style={{ width: "11%" }}>Txn Hash</div>
      <div style={{ width: "10%" }}>Block</div>
      <div style={{ width: "7%" }}>From</div>
      <div style={{ width: "2%" }}></div>
      <div style={{ width: "7%" }}>To</div>
      <div style={{ width: "14%" }}>Amount In</div>
      <div style={{ width: "14%" }}>Amount Out</div>
      <div style={{ width: "14%" }}>With 1inch</div>
      <div style={{ width: "14%" }}>Loss</div>
      <div style={{ width: "7%" }}></div>
    </div>

  );
};

export default TableHeader;
